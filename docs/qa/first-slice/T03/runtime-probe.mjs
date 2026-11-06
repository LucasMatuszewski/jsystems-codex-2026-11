import assert from 'node:assert/strict';
import { validateInput, evaluateRules, addReviewReasons, effectiveStatus, warsawDate, assessmentRoute } from '../../../../app/backend/dist/domain/rules.js';
import { writeFile } from 'node:fs/promises';

const today = warsawDate(new Date());
const raw = { requestType: 'Zwrot', category: 'Laptop', model: 'Model testowy nieznany', purchaseDate: today, receiptDate: today, buyerType: 'Konsument', purchaseChannel: 'Na odległość', description: '' };
const valid = validateInput(raw, today);
assert.ok(valid.value);
assert.deepEqual(valid.errors, {});
const consumer = evaluateRules(valid.value, today);
const business = evaluateRules({ ...valid.value, buyerType: 'Zakup firmowy' }, today);
assert.equal(effectiveStatus('Zwrot', consumer.review), 'return_guidance');
assert.equal(effectiveStatus('Zwrot', addReviewReasons(business.review, [])), 'review_required');
assert.equal(assessmentRoute(true), 'escalation');
assert.equal(assessmentRoute(false), 'review');
const response = await fetch('http://127.0.0.1:3000/api/health');
assert.equal(response.status, 200);
await writeFile(new URL('runtime-result.json', import.meta.url), JSON.stringify({ today, consumer, business, startupHTTP: response.status }, null, 2) + '\n');
console.log('Compiled domain probe passed; backend HTTP 200; no model calls.');
