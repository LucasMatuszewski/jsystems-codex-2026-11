import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createApp } from '../server.js';

test('chat validates new identifiers/intent before generating and rejects unknown cases without model calls', async () => {
  const server = createApp().listen(0, '127.0.0.1');
  await once(server, 'listening');
  const address = server.address(); assert.ok(address && typeof address !== 'string');
  const url = `http://127.0.0.1:${address.port}/api/chat`;
  try {
    const post = (body: unknown) => fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
    const missing = await post({});
    assert.equal(missing.status, 422);
    assert.equal((await post({ caseToken: 'unknown', operationId: 'op', turnId: 'turn', attemptId: 'attempt', intent: 'follow_up', text: 'Czy zgłoszenie wysłano?' })).status, 410);
    assert.equal((await post({ caseToken: 'unknown', operationId: ['bad'], turnId: 'turn', attemptId: 'attempt', intent: 'follow_up', text: 'Pytanie' })).status, 422);
    assert.equal((await post({ caseToken: 'unknown', operationId: 'op', turnId: 'turn', attemptId: 'attempt', intent: 'follow_up', text: '' })).status, 422);
  } finally { await new Promise<void>(resolve => server.close(() => resolve())); }
});

test('chat answers 422 with the fixed Polish error for malformed or non-object JSON before opening a stream', async () => {
  const server = createApp().listen(0, '127.0.0.1');
  await once(server, 'listening');
  const address = server.address(); assert.ok(address && typeof address !== 'string');
  const url = `http://127.0.0.1:${address.port}/api/chat`;
  try {
    for (const body of [
      '{"caseToken": ',
      '{"caseToken": "unknown", "operationId": "op", "turnId": "turn", "attemptId": "attempt", "intent": "follow_up", "text": "Pytanie"',
      '[]',
      '"tekst"',
      'null',
      '42',
    ]) {
      const response = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body });
      assert.equal(response.status, 422, body);
      assert.match(response.headers.get('content-type') ?? '', /^application\/json/);
      assert.deepEqual(await response.json(), { error: 'Sprawdź wiadomość i identyfikatory sprawy.' });
    }
  } finally { await new Promise<void>(resolve => server.close(() => resolve())); }
});

test('chat answers 413 with the fixed Polish error for an oversized body before opening a stream', async () => {
  const server = createApp().listen(0, '127.0.0.1');
  await once(server, 'listening');
  const address = server.address(); assert.ok(address && typeof address !== 'string');
  const url = `http://127.0.0.1:${address.port}/api/chat`;
  try {
    const body = JSON.stringify({ caseToken: 'unknown', operationId: 'op', turnId: 'turn', attemptId: 'attempt', intent: 'follow_up', text: 'a'.repeat(150000) });
    const response = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body });
    assert.equal(response.status, 413);
    assert.match(response.headers.get('content-type') ?? '', /^application\/json/);
    assert.deepEqual(await response.json(), { error: 'Wiadomość jest zbyt długa. Skróć ją i spróbuj ponownie.' });
  } finally { await new Promise<void>(resolve => server.close(() => resolve())); }
});

test('chat rejects invalid identifiers, intents and empty follow-up text with the fixed 422 and keeps the fixed 410 for unknown cases', async () => {
  const server = createApp().listen(0, '127.0.0.1');
  await once(server, 'listening');
  const address = server.address(); assert.ok(address && typeof address !== 'string');
  const url = `http://127.0.0.1:${address.port}/api/chat`;
  try {
    const post = (body: unknown) => fetch(url, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
    for (const body of [
      { caseToken: 'unknown', operationId: 'op id!', turnId: 'turn', attemptId: 'attempt', intent: 'follow_up', text: 'Pytanie' },
      { caseToken: 'unknown', operationId: 'op', turnId: 'turn', attemptId: 'attempt id', intent: 'follow_up', text: 'Pytanie' },
      { caseToken: 'unknown', operationId: 'op', turnId: 'turn', attemptId: 'attempt', intent: 'follow_up', text: '   ' },
      { caseToken: 'unknown', operationId: 'op', turnId: 'turn', attemptId: 'attempt', intent: 'inne', text: 'Pytanie' },
    ]) {
      const response = await post(body);
      assert.equal(response.status, 422);
      assert.deepEqual(await response.json(), { error: 'Sprawdź wiadomość i identyfikatory sprawy.' });
    }
    const unknown = await post({ caseToken: 'unknown', operationId: 'op', turnId: 'turn', attemptId: 'attempt', intent: 'follow_up', text: 'Pytanie' });
    assert.equal(unknown.status, 410);
    assert.deepEqual(await unknown.json(), { error: 'Ta sprawa nie jest już dostępna. Rozpocznij nową sprawę.' });
  } finally { await new Promise<void>(resolve => server.close(() => resolve())); }
});
