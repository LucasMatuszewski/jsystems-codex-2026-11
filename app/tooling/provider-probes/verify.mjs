import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';

const label = process.argv[2];
assert.match(label ?? '', /^[a-zA-Z0-9-]+$/, 'Pass the capture label.');
const folder = new URL(`../../tests/fixtures/baseline/${label}/`, import.meta.url);
const run = JSON.parse(await readFile(new URL('run.json', folder), 'utf8'));
assert.equal(run.accepted, true);
let credentialScan = false;
for (const name of await readdir(folder)) {
  const bytes = await readFile(new URL(name, folder));
  if (process.env.OPENROUTER_API_KEY) {
    assert.equal(bytes.includes(Buffer.from(process.env.OPENROUTER_API_KEY)), false, `Credential must not appear in ${name}`);
    credentialScan = true;
  }
  if (name.endsWith('.request.json')) {
    const request = JSON.parse(bytes.toString('utf8'));
    assert.equal(request.authorizationOmitted, true);
    assert.equal(Object.keys(request.headers).some(key => /authorization|cookie|api-key/i.test(key)), false);
  }
}
for (const stage of ['decisions', 'escalation', 'chat-initial', 'chat-followup']) {
  const metadata = JSON.parse(await readFile(new URL(`${stage}-1.provenance.json`, folder), 'utf8'));
  const bytes = await readFile(new URL(`${stage}-1.body`, folder));
  assert.equal(metadata.status, 200);
  assert.equal(metadata.completeBody, true);
  assert.equal(metadata.bytes, bytes.length);
  assert.equal(metadata.sha256, createHash('sha256').update(bytes).digest('hex'));
  if (process.argv.includes('--git-head')) {
    const committed = execFileSync('git', ['show', `HEAD:app/tests/fixtures/baseline/${label}/${stage}-1.body`]);
    assert.equal(metadata.sha256, createHash('sha256').update(committed).digest('hex'), 'Git must preserve raw response bytes.');
  }
}
for (const stage of ['chat-initial', 'chat-followup']) {
  const wire = await readFile(new URL(`${stage}.ui-sse`, folder), 'utf8');
  assert.match(wire, /data: \[DONE\]/);
  const events = wire.split('\n').filter(line => line.startsWith('data: {')).map(line => JSON.parse(line.slice(6)));
  assert.ok(events.some(event => event.type === 'text-delta'));
  assert.ok(events.some(event => event.type === 'finish'));
  assert.equal(events.some(event => event.type === 'error'), false);
  if (process.argv.includes('--git-head')) {
    const committed = execFileSync('git', ['show', `HEAD:app/tests/fixtures/baseline/${label}/${stage}.ui-sse`]);
    assert.equal(committed.toString('utf8'), wire, 'Git must preserve the complete UI stream.');
  }
}
console.log(JSON.stringify({ label, verifiedStages: 4, completeBodies: true, credentialScan }));
