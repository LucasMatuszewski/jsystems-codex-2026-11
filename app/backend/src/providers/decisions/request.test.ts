import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { buildDecisionRequest } from './request.js';
import type { CaseInput } from '../../domain/rules.js';
import type { PreparedImage } from '../../images/prepare.js';

test('builds the actual accepted ten-question wire with a top-level prepared JPEG, never SDK wrappers or filenames', async () => {
  const accepted = JSON.parse(await readFile(new URL('../../../../tests/fixtures/baseline/t06-first/decisions-1.request.json', import.meta.url), 'utf8')).body;
  const form = JSON.parse(accepted.state[0].slice(accepted.state[0].indexOf('{'))) as CaseInput;
  const metadata = JSON.parse(await readFile(new URL('../../../../../docs/qa/first-slice/T04/prepared-metadata.json', import.meta.url), 'utf8'))[0];
  const bytes = await readFile(new URL('../../../../../docs/qa/first-slice/T04/laptop-2-prepared.jpg', import.meta.url));
  const image: PreparedImage = { ...metadata, bytes };
  const request = buildDecisionRequest(form, image, accepted.model);
  assert.equal(request.model, accepted.model);
  assert.deepEqual(request.questions, accepted.questions);
  assert.equal(request.state.length, 2);
  assert.equal(request.state[0], accepted.state[0]);
  const actualImage = request.state[1] as { type: string; image_url: { url: string } };
  assert.deepEqual(Object.keys(actualImage), ['type', 'image_url']);
  assert.deepEqual(Object.keys(actualImage.image_url), ['url']);
  assert.equal(actualImage.type, 'image_url');
  const digest = (value: string) => createHash('sha256').update(value).digest('hex');
  assert.equal(digest(actualImage.image_url.url), digest(accepted.state[1].image_url.url));
  assert.equal(Object.keys(request.questions).length, 10);
  assert.equal(JSON.stringify(request).includes('laptop-2'), false);
});
