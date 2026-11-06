import test from 'node:test';
import assert from 'node:assert/strict';
import { CaseStore } from '../cases/store.js';
import { applyChatReview } from './review.js';

test('validated chat transitions add review only, retain original facts, and reject clearing/reassessment requests', () => {
  const store = new CaseStore();
  const form = { requestType: 'Zwrot' as const, category: 'Laptop' as const, model: 'Model testowy', purchaseDate: '2026-11-06', receiptDate: '2026-11-06', buyerType: 'Konsument' as const, purchaseChannel: 'Na odległość' as const, description: '' };
  const { caseToken } = store.beginAssessment('review-tool', form, '2026-11-06');
  const source = { intent: 'follow_up', text: 'Umowę zawarto w salonie. Chcę zmienić rodzaj sprawy.' };
  assert.equal(store.read(caseToken).review.required, false);
  assert.throws(() => applyChatReview(store, caseToken, { reason: 'material_correction', quote: 'Niepodany fakt' }, source));
  assert.equal(store.read(caseToken).review.required, false);
  const review = applyChatReview(store, caseToken, { reason: 'material_correction', quote: 'Umowę zawarto w salonie.' }, source);
  assert.equal(review.required, true);
  assert.equal(review.reasons[0].origin, 'chat');
  assert.equal(review.reasons[0].code, 'chat_material_correction');
  assert.deepEqual(store.read(caseToken).form, form);
  for (const invalid of [{ required: false }, { reason: 'clear_review' }, { reason: 'conflict', reassess: true }]) {
    assert.throws(() => applyChatReview(store, caseToken, invalid, source));
    assert.equal(store.read(caseToken).review.required, true);
  }
  applyChatReview(store, caseToken, { reason: 'unsupported_request', quote: 'Chcę zmienić rodzaj sprawy.' }, source);
  assert.equal(store.read(caseToken).review.reasons.length, 2);
});

test('intake evidence and summaries cannot create new chat review reasons', () => {
  const store = new CaseStore();
  const form = { requestType: 'Zwrot' as const, category: 'Laptop' as const, model: 'Test', purchaseDate: '2026-11-06', receiptDate: '2026-11-06', buyerType: 'Konsument' as const, purchaseChannel: 'Na odległość' as const, description: '' };
  const { caseToken } = store.beginAssessment('no-new-facts', form, '2026-11-06');
  for (const intent of ['intake', 'summary'] as const) {
    assert.throws(() => applyChatReview(store, caseToken, { reason: 'conflict' }, { intent, text: 'Przypomnij sprawę.' }));
    assert.equal(store.read(caseToken).review.required, false);
  }
});
