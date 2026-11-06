import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { prepareImage } from '../../../../app/backend/dist/images/prepare.js';

const records = [];
for (const [name, mime] of [['laptop-2.webp', 'image/webp'], ['phone-2.jpeg', 'image/jpeg']]) {
  const original = new URL(`../../../../assets/example-images/${name}`, import.meta.url);
  const input = await readFile(original);
  const { bytes, ...metadata } = await prepareImage(input, mime);
  const output = name.split('.')[0] + '-prepared.jpg';
  await writeFile(new URL(output, import.meta.url), bytes);
  assert.deepEqual(await readFile(original), input);
  records.push({ original: name, output, ...metadata });
}
const startup = await fetch('http://127.0.0.1:3000/api/health');
assert.equal(startup.status, 200);
await writeFile(new URL('prepared-metadata.json', import.meta.url), JSON.stringify(records, null, 2) + '\n');
console.log(JSON.stringify({ prepared: records, actualBackendStartup: startup.status }, null, 2));
