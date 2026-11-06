// chat/completion.test.ts
// Pure chunk processing: no HTTP server, no provider calls, no SDK mock models.

import test from 'node:test';
import assert from 'node:assert/strict';
import { terminalPlan } from './completion.js';

test('empty or whitespace-only output never completes successfully', () => {
  for (const savedText of ['', '   ', '\n\t ']) {
    assert.deepEqual(terminalPlan({ finished: true, aborted: false, errorForwarded: false, savedText }), { status: 'failed', forwardError: true });
  }
});

test('finishReason error never completes successfully even with saved partial text', () => {
  assert.deepEqual(
    terminalPlan({ finished: true, aborted: false, errorForwarded: false, savedText: 'Urwana odpowiedź.', finishReason: 'error' }),
    { status: 'failed', forwardError: true },
  );
});

test('length-truncated generation is incomplete and never completes successfully', () => {
  assert.deepEqual(
    terminalPlan({ finished: true, aborted: false, errorForwarded: false, savedText: 'Urwana odpowiedź.', finishReason: 'length' }),
    { status: 'failed', forwardError: true },
  );
});

test('content-filtered generation is incomplete and never completes successfully', () => {
  assert.deepEqual(
    terminalPlan({ finished: true, aborted: false, errorForwarded: false, savedText: 'Urwana odpowiedź.', finishReason: 'content-filter' }),
    { status: 'failed', forwardError: true },
  );
});

test('only a non-empty completion without error signals is successful', () => {
  assert.deepEqual(
    terminalPlan({ finished: true, aborted: false, errorForwarded: false, savedText: 'Zapisana odpowiedź.', finishReason: 'stop' }),
    { status: 'complete', forwardError: false },
  );
  assert.deepEqual(
    terminalPlan({ finished: true, aborted: false, errorForwarded: false, savedText: 'Zapisana odpowiedź.' }),
    { status: 'complete', forwardError: false },
  );
});

test('an already forwarded stream error fails the attempt without a second error chunk', () => {
  assert.deepEqual(
    terminalPlan({ finished: true, aborted: false, errorForwarded: true, savedText: 'Fragment.', finishReason: 'stop' }),
    { status: 'failed', forwardError: false },
  );
});

test('a stream that ends without its finish chunk fails and keeps one fixed error answer', () => {
  assert.deepEqual(terminalPlan({ finished: false, aborted: false, errorForwarded: false, savedText: 'Fragment.' }), { status: 'failed', forwardError: true });
  assert.deepEqual(terminalPlan({ finished: false, aborted: false, errorForwarded: true, savedText: 'Fragment.' }), { status: 'failed', forwardError: false });
});

test('abort cancels the attempt without the generation failure answer', () => {
  assert.deepEqual(terminalPlan({ finished: false, aborted: true, errorForwarded: false, savedText: 'Fragment.' }), { status: 'cancelled', forwardError: false });
});
