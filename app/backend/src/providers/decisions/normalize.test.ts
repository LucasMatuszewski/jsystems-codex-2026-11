import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { normalizeDecisions, observationIds, type DecisionContext } from './normalize.js';

const captured = JSON.parse(await readFile(new URL('../../../../tests/fixtures/baseline/t06-first/decisions-1.body', import.meta.url), 'utf8'));
const context: DecisionContext = {
  form: { requestType: 'Zwrot', category: 'Laptop', model: 'Dokładny model nieznany', purchaseDate: '2026-11-04', receiptDate: '2026-11-04', buyerType: 'Konsument', purchaseChannel: 'Na odległość', description: '' },
  image: { sha256: 'f8f958dae49282c1c6ef2a82555f4ee437c428c400c619aac28c3ee48a62431a', pipelineVersion: 'jpeg1568-q85-v1', limitations: ['Kompresja może ograniczyć szczegóły.'] },
  requestedModel: 'openai/gpt-6-luna-decisions',
};

test('normalizes the accepted real wire into five evidence-bounded records without inventing rationale', () => {
  const before = structuredClone(captured);
  const result = normalizeDecisions(captured, 200, context);
  assert.equal(result.available, true);
  assert.deepEqual(result.observations.map(item => item.id), observationIds);
  for (const item of result.observations) {
    const evidence = captured.answers[`${item.id}_evidence`];
    assert.equal(item.evidenceStatus, evidence.choice);
    assert.equal(item.probability, evidence.choice === 'supported' ? captured.answers[item.id].noul : null);
    assert.equal(item.basis.origin, 'model_estimate');
    assert.equal(item.basis.scope, 'pictured_areas');
    assert.equal(item.basis.imageSha256, context.image.sha256);
    assert.equal(item.modelVersion, captured.model);
    assert.ok(item.limitations.length > 0);
  }
  assert.deepEqual(result.rawAnswers, captured.answers);
  assert.equal(result.requestId, captured.id);
  assert.deepEqual(captured, before);
});

test('missing optional choice maps means insufficient evidence; missing confidence alone does not', () => {
  const mutation = structuredClone(captured); // Deliberate parser mutation, not observed provider output.
  delete mutation.answers.image_usable_evidence.probabilities;
  delete mutation.answers.item_relevant_evidence.confidence;
  const result = normalizeDecisions(mutation, 200, context);
  assert.equal(result.available, true);
  assert.equal(result.observations[0].evidenceStatus, 'insufficient');
  assert.equal(result.observations[0].probability, null);
  assert.equal(result.observations[1].evidenceStatus, captured.answers.item_relevant_evidence.choice);
  assert.equal(result.observations[1].probability, captured.answers.item_relevant.noul);
});

test('incomplete maps and conflicting evidence never become supported negatives', () => {
  const mutation = structuredClone(captured); // Deliberate parser mutation.
  delete mutation.answers.image_usable_evidence.probabilities.insufficient;
  mutation.answers.visible_cracks_evidence.choice = 'conflicting';
  const result = normalizeDecisions(mutation, 200, context);
  assert.equal(result.available, true);
  assert.equal(result.observations[0].probability, null);
  const conflict = result.observations.find(item => item.id === 'visible_cracks')!;
  assert.equal(conflict.evidenceStatus, 'conflicting');
  assert.equal(conflict.probability, null);
  assert.ok(conflict.conflicts.length > 0);
});

test('malformed/missing required answers make the stage unavailable while retaining validated partial records', () => {
  for (const bad of [-1, 1.01, NaN, Infinity, '0.5', undefined]) {
    const mutation = structuredClone(captured); // Deliberate invalid parser input.
    mutation.answers.image_usable.noul = bad;
    const result = normalizeDecisions(mutation, 200, context);
    assert.equal(result.available, false);
    assert.equal(result.observations.length, 4);
    assert.ok(result.observations.every(item => item.id !== 'image_usable'));
  }
  const missing = structuredClone(captured);
  delete missing.answers.item_relevant_evidence;
  assert.equal(normalizeDecisions(missing, 200, context).available, false);
  assert.equal(normalizeDecisions({}, 200, context).available, false);
});

test('malformed supplied distributions fail rather than synthesizing confidence or probabilities', () => {
  for (const value of [-0.01, 1.01, NaN, '0.9']) {
    const mutation = structuredClone(captured); // Deliberate invalid parser input.
    mutation.answers.image_usable_evidence.probabilities.supported = value;
    assert.equal(normalizeDecisions(mutation, 200, context).available, false);
  }
  const mutation = structuredClone(captured);
  mutation.answers.image_usable_evidence.probabilities = { supported: 1, insufficient: 1, conflicting: 1 };
  assert.equal(normalizeDecisions(mutation, 200, context).available, false);
});

test('non-success HTTP status never manufactures successful observations from a body', () => {
  for (const status of [400, 401, 402, 413, 429, 502, 503, 524]) {
    const result = normalizeDecisions(captured, status, context); // Pure status-classification inputs, not a provider mock.
    assert.equal(result.available, false);
    assert.equal(result.observations.length, 0);
    assert.ok(result.unavailableReason);
  }
});

test('supplied null distributions and nonnumeric confidence are malformed, not missing optional fields', () => {
  for (const update of [{ probabilities: null }, { confidence: NaN }, { confidence: 'high' }]) {
    const mutation = structuredClone(captured); // Deliberate invalid parser input.
    Object.assign(mutation.answers.image_usable_evidence, update);
    assert.equal(normalizeDecisions(mutation, 200, context).available, false);
  }
});

test('complete integer distributions cannot have zero mass or multiple probability-one outcomes', () => {
  for (const values of [[0, 0, 0], [1, 1, 0]]) {
    const mutation = structuredClone(captured); // Deliberate invalid parser input.
    mutation.answers.image_usable_evidence.probabilities = Object.fromEntries(['supported', 'insufficient', 'conflicting'].map((key, index) => [key, values[index]]));
    assert.equal(normalizeDecisions(mutation, 200, context).available, false);
  }
});

test('missing auxiliary maps cannot erase a model-reported conflict', () => {
  const mutation = structuredClone(captured);
  mutation.answers.image_usable_evidence.choice = 'conflicting';
  delete mutation.answers.image_usable_evidence.probabilities;
  const observation = normalizeDecisions(mutation, 200, context).observations[0];
  assert.equal(observation.probability, null);
  assert.equal(observation.evidenceStatus, 'insufficient');
  assert.ok(observation.conflicts.length > 0);
});

test('customer explanations use ASCII punctuation and do not expose technical HTTP diagnostics', () => {
  const mutation = structuredClone(captured);
  mutation.answers.image_usable_evidence.choice = 'conflicting';
  const result = normalizeDecisions(mutation, 200, context);
  const text = result.observations.flatMap(item => [...item.limitations, ...item.conflicts]).join(' ');
  assert.doesNotMatch(text, /[\u2010-\u2015\u2018-\u201f]/u);
  assert.doesNotMatch(normalizeDecisions(captured, 401, context).unavailableReason!, /HTTP|image_usable|Bearer/);
});
