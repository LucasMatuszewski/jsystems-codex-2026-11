import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { normalizeEscalation, remainingIssueIds, escalationSchema } from './normalize.js';
import { observationIds } from '../../domain/contracts.js';
import { zodSchema } from 'ai';

const captured = JSON.parse(await readFile(new URL('../../../../tests/fixtures/baseline/t06-first/escalation-accepted.json', import.meta.url), 'utf8'));
const metadata = { model: 'openai/gpt-6-luna', requestId: 'pure-normalization-test' };

test('preserves accepted supported evidence, resolutions and remaining limitations', () => {
  const result = normalizeEscalation(captured, metadata);
  assert.equal(result.available, true);
  assert.deepEqual(result.observations, captured.observations);
  assert.deepEqual(result.unknowns, captured.unknowns);
  assert.equal(result.requestId, metadata.requestId);
  const resolved = new Set(captured.resolvedIssues.map((issue: { id: string }) => issue.id));
  assert.deepEqual(remainingIssueIds(result, [...observationIds]), observationIds.filter(id => !resolved.has(id)));
});

test('a bare declaration of resolution without corresponding pictured evidence cannot resolve anything', () => {
  const mutation = structuredClone(captured); // Deliberate structured-output mutation, not observed provider output.
  mutation.observations = [];
  mutation.unknowns = [];
  const result = normalizeEscalation(mutation, metadata);
  assert.equal(result.available, true);
  assert.deepEqual(remainingIssueIds(result, [...observationIds]), observationIds);
});

test('invalid schema or fabricated probability fields produce unavailable escalation', () => {
  for (const mutation of [null, {}, { ...captured, observations: [{ ...captured.observations[0], location: '' }] }, { ...captured, probability: 0.99 }, { ...captured, unknowns: ['   '] }]) {
    const result = normalizeEscalation(mutation, metadata);
    assert.equal(result.available, false);
    assert.ok(result.unavailableReason);
    assert.deepEqual(remainingIssueIds(result, [...observationIds]), observationIds);
  }
});

test('conflicts stay explicit and model punctuation is normalized without changing initial probabilities', () => {
  const mutation = structuredClone(captured); // Deliberate parser input, not a provider mock.
  mutation.contradictions = ['Opis „modelu” jest sprzeczny z obrazem.'];
  const result = normalizeEscalation(mutation, metadata);
  assert.equal(result.available, true);
  assert.deepEqual(result.contradictions, ['Opis "modelu" jest sprzeczny z obrazem.']);
  assert.equal('probability' in result, false);
});

test('the output schema serializes through the installed SDK with the five bounded IDs', async () => {
  const encoded = await zodSchema(escalationSchema).jsonSchema;
  assert.equal(encoded.type, 'object');
  const serialized = JSON.stringify(encoded);
  assert.ok(serialized.includes('"enum"'));
  for (const id of observationIds) assert.ok(serialized.includes(JSON.stringify(id)));
});
