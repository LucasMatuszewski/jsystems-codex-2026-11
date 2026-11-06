import { Router, json, type RequestHandler } from 'express';
import { z } from 'zod';
import { createOpenRouter } from '@openrouter/ai-sdk-provider';
import { createUIMessageStream, pipeUIMessageStreamToResponse, streamText, toUIMessageStream, tool, stepCountIs } from 'ai';
import type { CaseStore } from '../cases/store.js';
import { providerConfig } from '../providers/config.js';
import { loadContent } from '../content/load.js';
import { buildChatInstructions, buildChatMessages } from '../chat/context.js';
import { applyChatReview, reviewInput } from '../chat/review.js';
import { terminalPlan } from '../chat/completion.js';
import { normalizeModelText } from '../domain/text.js';
import { publicCase } from './case.js';

const identifier = z.string().regex(/^[A-Za-z0-9_-]{1,100}$/);
const requestSchema = z.object({ caseToken: z.string().min(1), operationId: identifier, turnId: identifier, attemptId: identifier, intent: z.enum(['intake', 'follow_up', 'summary', 'retry']), text: z.string().optional() }).refine(value => value.intent !== 'follow_up' || !!value.text?.trim());
const failure = 'Nie udało się wygenerować odpowiedzi. Wynik oceny pozostaje dostępny. Możesz ponowić tę odpowiedź lub rozpocząć nową sprawę.';
const invalidBody = 'Sprawdź wiadomość i identyfikatory sprawy.';
const tooLarge = 'Wiadomość jest zbyt długa. Skróć ją i spróbuj ponownie.';

// Body parsing answers are fixed Polish errors sent before any stream headers:
// 422 for malformed or non-object JSON, 413 for an oversized body. Parser
// details and raw exceptions never leak.
const parseJson: RequestHandler = (request, response, next) => {
  json()(request, response, (error: unknown) => {
    if (!error) { next(); return; }
    const typed = error as { status?: number; statusCode?: number; type?: string };
    const status = typed.status ?? typed.statusCode;
    if (status === 413 || typed.type === 'entity.too.large') { response.status(413).json({ error: tooLarge }); return; }
    response.status(422).json({ error: invalidBody });
  });
};

// Default SDK error logging would print messages, request bodies and hidden
// instructions. Replace it with one safe audit record: event, stage,
// operationId and the error class name only.
function auditProviderFailure(error: unknown, operationId: string) {
  let name = 'Error';
  if (error && typeof error === 'object' && 'name' in error && typeof (error as { name?: unknown }).name === 'string') {
    name = (error as { name: string }).name;
  }
  console.info(JSON.stringify({ event: 'provider-error', stage: 'conversation', operationId, errorName: name }));
}

export function chatRoutes(store: CaseStore) {
  const router = Router();
  router.post('/', parseJson, async (request, response) => {
    const parsed = requestSchema.safeParse(request.body);
    if (!parsed.success) { response.status(422).json({ error: invalidBody }); return; }
    const input = parsed.data;
    const content = await loadContent(store.read(input.caseToken).form.requestType);
    const accepted = store.beginChat(input.caseToken, input);
    const token = input.caseToken;
    const transport = new AbortController();
    const signal = AbortSignal.any([accepted.signal, transport.signal]);
    const disconnected = () => { if (!response.writableFinished) transport.abort(); };
    response.on('close', disconnected);
    let finalized = false;
    const finalize = (status: 'complete' | 'failed' | 'cancelled') => {
      if (finalized || accepted.duplicate) return;
      finalized = true;
      try { store.finishChat(token, input.operationId, status, status === 'complete' ? undefined : failure); } catch { /* Deleted case. */ }
    };
    const stream = createUIMessageStream({
      onError: () => failure,
      execute: async ({ writer }) => {
        // A deleted case has no status left to send; never surface that raw error.
        const sendStatus = () => {
          try { writer.write({ type: 'data-case-status', data: publicCase(store.read(token)), transient: true }); } catch { /* Deleted case. */ }
        };
        if (accepted.duplicate) {
          const attempt = store.read(token).turns.find(turn => turn.id === input.turnId)!.attempts.find(item => item.id === input.attemptId)!;
          writer.write({ type: 'start', messageId: input.attemptId });
          writer.write({ type: 'text-start', id: 'saved-text' });
          writer.write({ type: 'text-delta', id: 'saved-text', delta: attempt.text });
          writer.write({ type: 'text-end', id: 'saved-text' });
          sendStatus();
          if (attempt.status !== 'complete') writer.write({ type: 'error', errorText: failure });
          writer.write({ type: 'finish' });
          return;
        }
        let failed = false;
        let finished = false;
        let savedText = '';
        let terminated = false;
        // Single terminal bookkeeping point: finalize the attempt, send the final
        // data-case-status so fail/cancel visibly unlocks the case, forward the
        // fixed failure answer at most once (never for cancel) and end the UI
        // stream with a terminal finish chunk.
        const terminate = (finishReason?: string) => {
          if (terminated) return;
          terminated = true;
          const plan = terminalPlan({ finished, aborted: signal.aborted, errorForwarded: failed, savedText, finishReason });
          finalize(plan.status);
          sendStatus();
          if (plan.forwardError) writer.write({ type: 'error', errorText: failure });
          if (!finished) writer.write({ type: 'finish' });
        };
        try {
          const config = providerConfig();
          const provider = createOpenRouter({ apiKey: config.apiKey, compatibility: 'strict' });
          const snapshot = store.read(token);
          const currentTurn = snapshot.turns.find(turn => turn.id === input.turnId)!;
          const result = streamText({
            model: provider.chat(config.llmModel), maxRetries: 0, streamRetries: 0, abortSignal: signal,
            onError: ({ error }) => { auditProviderFailure(error, input.operationId); return failure; },
            instructions: buildChatInstructions(snapshot, content.procedure, content.instructions),
            messages: buildChatMessages(snapshot, input.turnId, input.attemptId),
            tools: currentTurn.intent === 'follow_up' ? { addReviewReason: tool({ description: 'Dodaje trwały wymóg weryfikacji wyłącznie dla istotnego nowego faktu lub prośby w bieżącej wiadomości klienta, cytowanej dosłownie w quote. Zwykłe pytania i istniejąca niepewność nie są nową sprzecznością. Nie zmienia faktów i nie wykonuje zewnętrznych działań.', inputSchema: reviewInput, execute: async (value) => {
              signal.throwIfAborted();
              const review = applyChatReview(store, token, value, { intent: currentTurn.intent, text: currentTurn.input });
              sendStatus();
              return review;
            } }) } : undefined,
            // One review transition can be followed by its customer explanation.
            stopWhen: stepCountIs(2), prepareStep: ({ stepNumber }) => stepNumber > 0 ? { toolChoice: 'none' as const } : {},
            onStepEnd: event => console.info(JSON.stringify({ event: 'provider-call', stage: 'conversation', operationId: input.operationId, requestId: event.response.id })),
          });
          const reader = toUIMessageStream({ stream: result.stream, generateMessageId: () => input.attemptId, sendReasoning: false, sendSources: false, onError: () => failure }).getReader();
          try {
            while (true) {
              const next = await reader.read();
              if (next.done) break;
              signal.throwIfAborted();
              const chunk = next.value;
              if (chunk.type === 'text-delta') {
                const delta = normalizeModelText(chunk.delta);
                savedText += delta;
                store.appendText(token, input.operationId, delta);
                writer.write({ type: 'text-delta', id: chunk.id, delta });
              } else if (chunk.type === 'error') { failed = true; writer.write({ type: 'error', errorText: failure }); }
              else if (chunk.type === 'finish') {
                finished = true;
                // finishReason travels on the terminal UI chunk; error, length and
                // content-filter endings must not appear successful.
                terminate((chunk as unknown as { finishReason?: string }).finishReason);
                writer.write(chunk);
              } else if (['start', 'text-start', 'text-end', 'start-step', 'finish-step', 'abort'].includes(chunk.type)) writer.write(chunk);
            }
          } finally { reader.releaseLock(); }
        } catch {
          // Provider, store and SDK errors are never surfaced raw: the fixed
          // failure answer is used instead.
        } finally {
          terminate();
        }
      },
    });
    try {
      await pipeUIMessageStreamToResponse({ response, stream, headers: { 'Cache-Control': 'no-store' }, consumeSseStream: async ({ stream }) => { const reader = stream.getReader(); try { while (!(await reader.read()).done) { /* Drain even if the client disconnects. */ } } finally { reader.releaseLock(); } } });
    } finally { response.off('close', disconnected); }
  });
  return router;
}
