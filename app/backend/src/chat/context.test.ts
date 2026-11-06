// chat/context.test.ts
// Pure application-state fixtures: no mocked endpoints or providers.

import test from 'node:test';
import assert from 'node:assert/strict';
import type { CaseSnapshot } from '../domain/contracts.js';
import { buildChatMessages, buildChatInstructions } from './context.js';

type Msg = { role: string; content: string };

const savedFormText = 'Zapisany opis z formularza: laptop wyłącza się pod obciążeniem.';

const form = {
  requestType: 'Zwrot',
  category: 'Laptop',
  model: 'ThinkPad T14',
  purchaseDate: '2026-01-10',
  receiptDate: '2026-01-12',
  buyerType: 'konsument',
  purchaseChannel: 'sklep internetowy',
  description: savedFormText,
};

function makeSnapshot(turns: CaseSnapshot['turns'], overrides: Partial<CaseSnapshot> = {}): CaseSnapshot {
  return {
    caseToken: 'case-1',
    form: form as CaseSnapshot['form'],
    assessmentDate: '2026-02-01',
    findings: {} as CaseSnapshot['findings'],
    review: { required: false, reasons: [] },
    turns,
    ...overrides,
  };
}

test('first intake: single user message with the genuine saved form text', () => {
  const snapshot = makeSnapshot([
    {
      id: 't1',
      intent: 'intake',
      input: savedFormText,
      attempts: [{ id: 'a1', operationId: 'op-1', status: 'pending', text: '' }],
    },
  ]);
  const messages = buildChatMessages(snapshot, 't1', 'a1') as unknown as Msg[];
  assert.equal(messages.length, 1);
  assert.equal(messages[0].role, 'user');
  assert.equal(messages[0].content, savedFormText);
});

test('later follow-up: first assistant answer appears exactly once in full history', () => {
  const answer = 'Zapisana odpowiedź asystenta z tury pierwszej.';
  const snapshot = makeSnapshot([
    {
      id: 't1',
      intent: 'intake',
      input: savedFormText,
      attempts: [{ id: 'a1', operationId: 'op-1', status: 'complete', text: answer }],
    },
    {
      id: 't2',
      intent: 'follow_up',
      input: 'Doprecyzowanie klienta: problem występuje także po podłączeniu ładowarki.',
      attempts: [{ id: 'a2', operationId: 'op-2', status: 'pending', text: '' }],
    },
  ]);
  const messages = buildChatMessages(snapshot, 't2', 'a2') as unknown as Msg[];
  assert.deepEqual(messages.map((m) => m.role), ['user', 'assistant', 'user']);
  assert.equal(messages[1].content, answer);
  assert.equal(messages.filter((m) => m.content === answer).length, 1);
  assert.equal(messages[2].content, snapshot.turns[1].input);
});

test('retry: keeps every incomplete attempt as labelled context and omits the current pending attempt', () => {
  const snapshot = makeSnapshot([
    {
      id: 't1',
      intent: 'intake',
      input: savedFormText,
      attempts: [
        { id: 'a1', operationId: 'op-1', status: 'failed', text: 'Wersja A: urwana próba odpowiedzi.', error: 'model_timeout' },
        { id: 'a2', operationId: 'op-1', status: 'cancelled', text: 'Wersja B: przerwana przez użytkownika.' },
        { id: 'a3', operationId: 'op-1', status: 'partial', text: 'Wersja C: niepełny fragment.' },
        { id: 'a4', operationId: 'op-1', status: 'pending', text: 'Wersja D: tekst bieżącej próby.' },
      ],
    },
  ]);
  const messages = buildChatMessages(snapshot, 't1', 'a4') as unknown as Msg[];
  assert.equal(messages.length, 4);
  assert.equal(messages[0].content, savedFormText);
  assert.ok(messages.every((m) => m.role === 'user'));
  assert.ok(messages.slice(1).every((m) => m.content.startsWith('[NIEUDANA PRÓBA ODPOWIEDZI')));
  const context = messages.slice(1).map((m) => m.content).join('\n');
  for (const saved of ['Wersja A: urwana próba odpowiedzi.', 'Wersja B: przerwana przez użytkownika.', 'Wersja C: niepełny fragment.']) {
    assert.equal(context.split(saved).length - 1, 1);
  }
  assert.ok(context.includes('model_timeout'));
  assert.ok(!context.includes('Wersja D: tekst bieżącej próby.'));
  assert.ok(context.includes('nigdy historii przeglądarki'));
});

test('unknown turn or attempt id throws', () => {
  const snapshot = makeSnapshot([
    {
      id: 't1',
      intent: 'intake',
      input: savedFormText,
      attempts: [{ id: 'a1', operationId: 'op-1', status: 'pending', text: '' }],
    },
  ]);
  assert.throws(() => buildChatMessages(snapshot, 'missing-turn', 'a1'), /Unknown turn/);
  assert.throws(() => buildChatMessages(snapshot, 't1', 'missing-attempt'), /Unknown attempt/);
});

test('instructions: server rules separated from untrusted form and model content', () => {
  const snapshot = makeSnapshot([
    {
      id: 't1',
      intent: 'intake',
      input: savedFormText,
      attempts: [{ id: 'a1', operationId: 'op-1', status: 'pending', text: '' }],
    },
  ]);
  const instructions = buildChatInstructions(snapshot, 'PROCEDURA-TEST', 'SCENARIUSZ-TEST');
  assert.ok(instructions.includes('PROCEDURA-TEST'));
  assert.ok(instructions.includes('SCENARIUSZ-TEST'));
  assert.ok(instructions.includes('niezaufana'));
  assert.ok(instructions.includes('addReviewReason'));
  assert.ok(instructions.includes('proof of concept'));
});
