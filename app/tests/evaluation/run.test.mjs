import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFile, readdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';

const runnerPath = fileURLToPath(new URL('./run.mjs', import.meta.url));
const labelsUrl = new URL('./visual-labels.json', import.meta.url);
const originalsUrl = new URL('../../../assets/example-images/', import.meta.url);

const CATEGORIES = ['Laptop', 'Smartfon', 'Monitor', 'Akcesorium komputerowe'];
const OBSERVATIONS = ['image_usable', 'item_relevant', 'visible_cracks', 'visible_dents', 'visible_scratches'];

function loadLabels() {
  return readFile(labelsUrl, 'utf8').then(JSON.parse);
}

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

test('validate-only summary matches labels without credentials', async () => {
  const labels = await loadLabels();
  const env = { ...process.env };
  delete env.OPENAI_API_KEY;
  delete env.ANTHROPIC_API_KEY;
  delete env.DECISIONS_API_KEY;
  delete env.ESCALATION_API_KEY;
  delete env.OPENROUTER_API_KEY;
  delete env.LLM_MODEL;
  delete env.DECISION_MODEL;

  const res = spawnSync(process.execPath, [runnerPath, '--validate-only'], {
    env,
    encoding: 'utf8',
    windowsHide: true,
  });
  assert.equal(res.status, 0, `runner failed: ${res.stderr}`);
  const summary = JSON.parse(res.stdout.trim());
  assert.equal(summary.cases, labels.cases.length);
  assert.equal(summary.observations, labels.cases.length * OBSERVATIONS.length);
  assert.equal(summary.shortcutEnabled, false);
  assert.equal(summary.modelCalls, 0);
});

test('labels contain five observation ids per case and exact original hashes', async () => {
  const labels = await loadLabels();
  assert.equal(labels.shortcutEnabled, false);
  assert.equal(labels.thresholds, null);
  const ids = new Set();
  for (const row of labels.cases) {
    const keys = Object.keys(row.observations);
    assert.deepEqual(keys.sort(), [...OBSERVATIONS].sort());
    for (const k of keys) ids.add(k);
    assert.match(row.originalSha256, /^[0-9a-f]{64}$/);
    assert.ok(row.file.length > 0);
    assert.ok(CATEGORIES.includes(row.category));
    assert.ok(['Zwrot', 'Reklamacja'].includes(row.scenario));
    assert.equal(row.expectedRoute, 'single_escalation');
  }
  assert.equal(ids.size, OBSERVATIONS.length);
});

test('original files match the recorded byte hashes in visual-labels.json', async () => {
  const labels = await loadLabels();
  const files = await readdir(originalsUrl);
  for (const row of labels.cases) {
    assert.ok(files.includes(row.file), `original file missing on disk: ${row.file}`);
    const bytes = await readFile(new URL(row.file, originalsUrl));
    assert.equal(sha256(bytes), row.originalSha256, `byte hash mismatch for ${row.file}`);
  }
});
