import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { assessEscalation } from '../../../../app/backend/dist/providers/escalation/client.js';
import { prepareImage } from '../../../../app/backend/dist/images/prepare.js';
import { observationIds } from '../../../../app/backend/dist/domain/contracts.js';
import { warsawDate } from '../../../../app/backend/dist/domain/rules.js';

const today = warsawDate(new Date());
const form = { requestType: 'Zwrot', category: 'Laptop', model: 'Dokładny model nieznany', purchaseDate: today, receiptDate: today, buyerType: 'Konsument', purchaseChannel: 'Na odległość', description: '' };
const image = await prepareImage(await readFile(new URL('../../../../assets/example-images/laptop-2.webp', import.meta.url)), 'image/webp');
const initial = JSON.parse(await readFile(new URL('../T07/live-result.json', import.meta.url), 'utf8'));
const result = await assessEscalation(form, image, initial, [...observationIds], undefined, 't08-live-probe');
await writeFile(new URL(process.argv.includes('--red') ? 'red-client-result.json' : 'live-result.json', import.meta.url), JSON.stringify(result, null, 2) + '\n');
assert.equal(result.available, true);
assert.ok(result.observations.length);
console.log(JSON.stringify({ available: result.available, observations: result.observations.length, model: result.model, requestId: result.requestId }));
