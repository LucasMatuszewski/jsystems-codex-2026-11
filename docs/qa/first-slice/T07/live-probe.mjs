import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { assessDecisions } from '../../../../app/backend/dist/providers/decisions/client.js';
import { prepareImage } from '../../../../app/backend/dist/images/prepare.js';
import { warsawDate } from '../../../../app/backend/dist/domain/rules.js';

const today = warsawDate(new Date());
const form = { requestType: 'Zwrot', category: 'Laptop', model: 'Dokładny model nieznany', purchaseDate: today, receiptDate: today, buyerType: 'Konsument', purchaseChannel: 'Na odległość', description: '' };
const image = await prepareImage(await readFile(new URL('../../../../assets/example-images/laptop-2.webp', import.meta.url)), 'image/webp');
const result = await assessDecisions(form, image, undefined, 't07-live-probe');
const negative = process.argv.includes('--expect-unavailable');
await writeFile(new URL(negative ? 'negative-live-result.json' : 'live-result.json', import.meta.url), JSON.stringify(result, null, 2) + '\n');
assert.equal(result.available, !negative);
assert.equal(result.httpStatus, negative ? 401 : 200);
assert.equal(result.observations.length, negative ? 0 : 5);
console.log(JSON.stringify({ available: result.available, observations: result.observations.length, httpStatus: result.httpStatus, model: result.model, requestId: result.requestId }));
