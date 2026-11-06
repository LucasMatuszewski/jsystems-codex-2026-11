import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { readFile } from 'node:fs/promises';
import { request as httpRequest } from 'node:http';
import { createApp } from '../server.js';

test('real HTTP boundaries reject bad input, cross-origin writes, removed cases and corrupt images without model calls', async () => {
  const server = createApp().listen(0, '127.0.0.1');
  await once(server, 'listening');
  const address = server.address();
  assert.ok(address && typeof address !== 'string');
  const base = `http://127.0.0.1:${address.port}`;
  try {
    assert.equal((await fetch(`${base}/api/case`, { headers: { 'x-case-token': 'missing' } })).status, 410);
    assert.equal((await fetch(`${base}/api/case`, { method: 'DELETE', headers: { origin: 'https://foreign.example' } })).status, 403);
    const reboundStatus = await new Promise<number | undefined>((resolve, reject) => {
      const request = httpRequest(`${base}/api/health`, { headers: { host: 'foreign.example', origin: 'http://foreign.example' } }, response => { response.resume(); resolve(response.statusCode); });
      request.on('error', reject); request.end();
    });
    assert.equal(reboundStatus, 403);
    let response = await fetch(`${base}/api/assessment`, { method: 'POST', body: new FormData() });
    assert.equal(response.status, 422);
    assert.ok((await response.json()).errors.model);
    const form = new FormData();
    for (const [key, value] of Object.entries({ operationId: 'local-invalid-image', requestType: 'Zwrot', category: 'Laptop', model: 'Model testowy', purchaseDate: '2026-11-04', receiptDate: '2026-11-04', buyerType: 'Konsument', purchaseChannel: 'Na odległość', description: '' })) form.set(key, value);
    form.set('image', new Blob(['broken image'], { type: 'image/jpeg' }), 'synthetic.jpg');
    response = await fetch(`${base}/api/assessment`, { method: 'POST', body: form });
    assert.equal(response.status, 422);
    assert.ok((await response.json()).errors.image);
    const approved = await readFile(new URL('../../../../assets/example-images/laptop-2.webp', import.meta.url));
    form.set('image', new Blob([approved], { type: 'image/jpeg' }), 'mismatched.jpg');
    response = await fetch(`${base}/api/assessment`, { method: 'POST', body: form });
    assert.equal(response.status, 422);
    assert.ok((await response.json()).errors.image);
  } finally { await new Promise<void>(resolve => server.close(() => resolve())); }
});
