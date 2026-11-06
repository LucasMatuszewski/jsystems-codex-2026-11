import { randomBytes } from 'node:crypto';
import { evaluateRules, addReviewReasons, effectiveStatus, type CaseInput, type ReviewReason } from '../domain/rules.js';
import type { AssessmentResult, AttemptStatus, CaseSnapshot, ChatIntent, ChatAttempt } from '../domain/contracts.js';

export class CaseError extends Error {
  constructor(public status: 409 | 410 | 422, message: string) { super(message); }
}
export interface ChatRequest { operationId: string; turnId: string; attemptId: string; intent: ChatIntent; text?: string }

function freeze<T>(value: T): T {
  if (value && typeof value === 'object') {
    for (const child of Object.values(value)) freeze(child);
    Object.freeze(value);
  }
  return value;
}
type Stored = { data: Omit<CaseSnapshot, 'status'>; controller?: AbortController };
type Ownership = { token: string; kind: 'assessment' | 'chat'; turnId?: string; attemptId?: string };

export class CaseStore {
  private readonly cases = new Map<string, Stored>();
  private readonly operations = new Map<string, Ownership>();

  private require(token: string): Stored {
    const entry = this.cases.get(token);
    if (!entry) throw new CaseError(410, 'Ta sprawa nie jest już dostępna. Rozpocznij nową sprawę.');
    return entry;
  }
  private active(token: string, id: string, kind: 'assessment' | 'chat'): Stored {
    const entry = this.require(token);
    if (entry.data.operation?.id !== id || entry.data.operation.kind !== kind || entry.data.operation.state !== 'pending') throw new CaseError(409, 'Operacja nie jest aktywna.');
    return entry;
  }
  beginAssessment(operationId: string, form: CaseInput, today: string) {
    const existing = this.operations.get(operationId);
    if (existing) {
      const entry = this.require(existing.token);
      if (existing.kind === 'assessment' && entry.data.assessment) return { caseToken: existing.token, signal: new AbortController().signal, duplicate: true };
      throw new CaseError(409, 'Ta operacja jest już przetwarzana.');
    }
    const caseToken = randomBytes(32).toString('hex');
    const rules = evaluateRules(form, today);
    const controller = new AbortController();
    this.cases.set(caseToken, { controller, data: {
      caseToken, form: freeze(structuredClone(form)), assessmentDate: today, ...rules, turns: [],
      operation: { id: operationId, kind: 'assessment', stage: 'image_preparation', state: 'pending' },
    } });
    this.operations.set(operationId, { token: caseToken, kind: 'assessment' });
    return { caseToken, signal: controller.signal, duplicate: false };
  }
  read(token: string): CaseSnapshot {
    const { data } = this.require(token);
    const status = data.assessment || data.review.required ? effectiveStatus(data.form.requestType, data.review) : undefined;
    return structuredClone({ ...data, status });
  }
  setStage(token: string, id: string, stage: string) {
    const entry = this.require(token);
    if (entry.data.operation?.id !== id || entry.data.operation.state !== 'pending') throw new CaseError(409, 'Operacja nie jest aktywna.');
    entry.data.operation.stage = stage;
  }
  finishAssessment(token: string, operationId: string, assessment: AssessmentResult, reasons: ReviewReason[]) {
    const entry = this.active(token, operationId, 'assessment');
    if (entry.data.assessment) throw new CaseError(409, 'Ocena tej sprawy została już zakończona.');
    entry.data.assessment = freeze(structuredClone(assessment));
    entry.data.review = addReviewReasons(entry.data.review, reasons);
    entry.data.operation!.state = 'completed';
    entry.data.operation!.stage = 'ready_for_chat';
    entry.controller = undefined;
  }
  addReview(token: string, reasons: ReviewReason[]) {
    const entry = this.require(token);
    entry.data.review = addReviewReasons(entry.data.review, reasons);
  }
  beginChat(token: string, request: ChatRequest) {
    const entry = this.require(token);
    const data = entry.data;
    if (!data.assessment || data.operation?.state === 'pending') throw new CaseError(409, 'Poczekaj na zakończenie bieżącej operacji.');
    const owner = this.operations.get(request.operationId);
    if (owner) {
      if (owner.token !== token || owner.kind !== 'chat' || owner.turnId !== request.turnId || owner.attemptId !== request.attemptId) throw new CaseError(409, 'Identyfikator operacji jest już używany.');
      const previous = data.turns.find(turn => turn.id === owner.turnId)!;
      return { input: previous.input, signal: new AbortController().signal, duplicate: true, turnId: previous.id, attemptId: request.attemptId };
    }
    if (data.turns.some(turn => turn.attempts.some(attempt => attempt.id === request.attemptId))) throw new CaseError(409, 'Ta próba odpowiedzi jest już zapisana.');
    let turn = data.turns.find(item => item.id === request.turnId);
    if (request.intent === 'retry') {
      if (!turn || turn !== data.turns.at(-1) || !['failed', 'cancelled'].includes(turn.attempts.at(-1)?.status ?? '')) throw new CaseError(409, 'Można ponowić tylko ostatnią przerwaną odpowiedź.');
    } else {
      if (turn) throw new CaseError(409, 'Wiadomość została już przyjęta.');
      if (!['intake', 'follow_up', 'summary'].includes(request.intent)) throw new CaseError(422, 'Nieprawidłowy rodzaj wiadomości.');
      if (request.intent === 'intake' && data.turns.length) throw new CaseError(409, 'Rozmowa została już rozpoczęta.');
      const input = request.intent === 'intake' ? `Formularz sprawy: ${JSON.stringify(data.form)}`
        : request.intent === 'summary' ? 'Podsumuj aktualną sprawę, niepewności i kolejne kroki.' : request.text?.trim();
      if (!input) throw new CaseError(422, 'Wpisz wiadomość.');
      turn = { id: request.turnId, intent: request.intent, input, attempts: [] };
      data.turns.push(turn);
    }
    const controller = new AbortController();
    const attempt: ChatAttempt = { id: request.attemptId, operationId: request.operationId, status: 'pending', text: '' };
    turn!.attempts.push(attempt);
    entry.controller = controller;
    data.operation = { id: request.operationId, kind: 'chat', stage: 'conversation', state: 'pending' };
    this.operations.set(request.operationId, { token, kind: 'chat', turnId: turn!.id, attemptId: attempt.id });
    return { input: turn!.input, signal: controller.signal, duplicate: false, turnId: turn!.id, attemptId: attempt.id };
  }
  private attempt(entry: Stored, operationId: string): ChatAttempt {
    const owner = this.operations.get(operationId)!;
    return entry.data.turns.find(turn => turn.id === owner.turnId)!.attempts.find(attempt => attempt.id === owner.attemptId)!;
  }
  appendText(token: string, operationId: string, text: string) {
    const entry = this.active(token, operationId, 'chat');
    const attempt = this.attempt(entry, operationId);
    attempt.text += text;
    attempt.status = 'partial';
  }
  finishChat(token: string, operationId: string, status: Exclude<AttemptStatus, 'pending' | 'partial'>, error?: string) {
    const entry = this.active(token, operationId, 'chat');
    const attempt = this.attempt(entry, operationId);
    attempt.status = status === 'complete' && !attempt.text.trim() ? 'failed' : status;
    if (error) attempt.error = error;
    entry.data.operation!.state = attempt.status === 'complete' ? 'completed' : attempt.status;
    entry.controller = undefined;
  }
  delete(token: string) {
    const entry = this.require(token);
    entry.controller?.abort();
    this.cases.delete(token);
    // Operation tombstones retain only identifiers, preventing replay after reset.
  }
}
