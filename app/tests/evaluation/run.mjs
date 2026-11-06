import { createHash } from 'node:crypto';
import { readFile, mkdir, writeFile } from 'node:fs/promises';

const labelsUrl = new URL('./visual-labels.json', import.meta.url);
const originalsUrl = new URL('../../../assets/example-images/', import.meta.url);
const outputUrl = new URL('../../../docs/qa/first-slice/T13/evaluation/', import.meta.url);

const OBSERVATIONS = ['image_usable', 'item_relevant', 'visible_cracks', 'visible_dents', 'visible_scratches'];
const CATEGORIES = ['Laptop', 'Smartfon', 'Monitor', 'Akcesorium komputerowe'];
const SCENARIOS = ['Zwrot', 'Reklamacja'];
const MODEL_CALLS = new Map();

function sha256(bytes) {
  return createHash('sha256').update(bytes).digest('hex');
}

function assert(condition, message) {
  if (!condition) throw new Error(`evaluation assertion failed: ${message}`);
}

function loadLabels() {
  return readFile(labelsUrl, 'utf8').then(JSON.parse);
}

function validateLabels(labels) {
  assert(labels.shortcutEnabled === false, 'shortcutEnabled must be false');
  assert(labels.thresholds === null, 'thresholds must be null');
  assert(typeof labels.reviewedOn === 'string' && labels.reviewedOn.length > 0, 'reviewedOn');
  assert(typeof labels.reviewer === 'string' && labels.reviewer.length > 0, 'reviewer');
  assert(typeof labels.scope === 'string' && labels.scope.length > 0, 'scope');
  assert(Array.isArray(labels.cases) && labels.cases.length > 0, 'cases must be a non-empty array');
  labels.cases.forEach((row, i) => {
    assert(typeof row.file === 'string' && row.file.length > 0, `case ${i} file`);
    assert(/^[0-9a-f]{64}$/.test(row.originalSha256), `case ${i} originalSha256`);
    assert(CATEGORIES.includes(row.category), `case ${i} category`);
    assert(SCENARIOS.includes(row.scenario), `case ${i} scenario`);
    assert(row.expectedRoute === 'single_escalation', `case ${i} expectedRoute`);
    OBSERVATIONS.forEach((id) => {
      const obs = row.observations?.[id];
      assert(obs, `case ${i} observation ${id}`);
      assert(typeof obs.evaluable === 'boolean', `case ${i} observation ${id} evaluable`);
      assert(obs.label === true || obs.label === false || obs.label === null, `case ${i} observation ${id} label`);
      assert(typeof obs.scope === 'string' && obs.scope.length > 0, `case ${i} observation ${id} scope`);
    });
    assert(Object.keys(row.observations).length === OBSERVATIONS.length, `case ${i} observation ids`);
  });
  assert(Array.isArray(labels.uncoveredStrata), 'uncoveredStrata must be an array');
  return labels;
}

async function verifyOriginals(labels) {
  for (const [i, row] of labels.cases.entries()) {
    const bytes = await readFile(new URL(row.file, originalsUrl));
    assert(sha256(bytes) === row.originalSha256, `case ${i + 1} original hash mismatch`);
  }
}

function summaryFor(labels) {
  return {
    cases: labels.cases.length,
    observations: labels.cases.length * OBSERVATIONS.length,
    shortcutEnabled: false,
    modelCalls: 0,
  };
}

function countModelCall(stage) {
  MODEL_CALLS.set(stage, (MODEL_CALLS.get(stage) ?? 0) + 1);
}

function snapshotProbabilities(decision) {
  const out = {};
  for (const obs of decision?.observations ?? []) {
    out[obs.id] = obs.probability;
  }
  return out;
}

async function main() {
  const labels = validateLabels(await loadLabels());
  await verifyOriginals(labels);
  const validateOnly = process.argv.includes('--validate-only');
  const summary = summaryFor(labels);
  if (validateOnly) {
    console.log(JSON.stringify(summary));
    return;
  }

  const { prepareImage } = await import(new URL('../../backend/dist/images/prepare.js', import.meta.url).href);
  const { assessDecisions } = await import(new URL('../../backend/dist/providers/decisions/client.js', import.meta.url).href);
  const { assessEscalation } = await import(new URL('../../backend/dist/providers/escalation/client.js', import.meta.url).href);
  const { assessmentRoute, warsawDate, validateInput } = await import(new URL('../../backend/dist/domain/rules.js', import.meta.url).href);
  const { observationIds } = await import(new URL('../../backend/dist/domain/contracts.js', import.meta.url).href);
  assert(Array.isArray(observationIds) && observationIds.length === OBSERVATIONS.length, 'observationIds');

  const today = warsawDate(new Date());
  await mkdir(outputUrl, { recursive: true });

  const results = [];
  for (const [i, row] of labels.cases.entries()) {
    const caseId = i + 1;
    const originalBytes = await readFile(new URL(row.file, originalsUrl));
    assert(sha256(originalBytes) === row.originalSha256, `case ${caseId} original hash mismatch`);
    const prepared = await prepareImage(originalBytes, row.file.endsWith('.webp') ? 'image/webp' : 'image/jpeg');
    const { bytes: preparedBytes, ...preparedMetadata } = prepared;

    const formInput = {
      requestType: row.scenario,
      category: row.category,
      model: 'Model nieznany',
      purchaseDate: today,
      receiptDate: today,
      buyerType: 'Konsument',
      purchaseChannel: row.scenario === 'Zwrot' ? 'Na odległość' : 'W salonie',
      description: row.scenario === 'Zwrot'
        ? ''
        : 'Syntetyczny opis: urządzenie sporadycznie wyłącza się. Objaw nie jest widoczny na zdjęciu.',
    };
    const validated = validateInput(formInput, today);
    assert(validated.value !== null, `case ${caseId} form rejected: ${JSON.stringify(validated.errors)}`);
    const form = validated.value;

    const operationId = `eval-${caseId}`;
    countModelCall('decisions');
    const decision = await assessDecisions(form, prepared, undefined, operationId);
    const initialProbabilities = snapshotProbabilities(decision);
    let escalation = null;
    let routeResult = null;
    let route = 'review_required_on_unavailable';
    if (decision && decision.available) {
      countModelCall('escalation');
      escalation = await assessEscalation(form, prepared, decision, [...observationIds], undefined, operationId);
      routeResult = assessmentRoute(decision.available);
      route = routeResult === 'escalation' ? 'single_escalation' : 'review_required_on_unavailable';
    }
    if (decision.available) {
      assert(OBSERVATIONS.every((id) => decision.observations.some((o) => o.id === id)),
        `case ${caseId} observations preserved`);
      if (escalation && escalation.observations) {
        const afterProbabilities = snapshotProbabilities(decision);
        assert(JSON.stringify(afterProbabilities) === JSON.stringify(initialProbabilities),
          `case ${caseId} initial probabilities preserved after escalation`);
      }
    }

    results.push({
      caseId,
      file: row.file,
      category: row.category,
      scenario: row.scenario,
      originalSha256: row.originalSha256,
      preparedImage: `case-${caseId}.jpg`,
      preparedImageSha256: preparedMetadata.sha256,
      preparedMetadata,
      expectedRoute: row.expectedRoute,
      routeResult,
      route,
      provisionalTruth: OBSERVATIONS.map((id) => ({
        id,
        label: row.observations[id].label,
        evaluable: row.observations[id].evaluable,
        scope: row.observations[id].scope,
      })),
      decision,
      escalation,
    });
    await writeFile(new URL(`case-${caseId}.jpg`, outputUrl), preparedBytes);
  }

  const routeCounts = results.reduce((acc, r) => {
    acc[r.route] = (acc[r.route] ?? 0) + 1;
    return acc;
  }, {});
  const totalModelCalls = [...MODEL_CALLS.values()].reduce((a, b) => a + b, 0);

  const modelProvenance = results.map((r) => ({
    caseId: r.caseId,
    decisionModel: r.decision?.model ?? null,
    questionVersion: r.decision?.observations?.[0]?.questionVersion ?? null,
    imagePipelineVersion: r.preparedMetadata.pipelineVersion,
    escalationModel: r.escalation?.model ?? null,
  }));

  await writeFile(new URL('results.json', outputUrl), JSON.stringify({
    reviewedOn: labels.reviewedOn,
    reviewer: labels.reviewer,
    scope: labels.scope,
    originalSha256: labels.cases.map((c) => c.originalSha256),
    labelData: labels,
    summary: {
      cases: results.length,
      observations: results.length * OBSERVATIONS.length,
      modelCalls: totalModelCalls,
      modelCallsByStage: Object.fromEntries(MODEL_CALLS),
    },
    modelProvenance,
    routeCounts,
    results,
  }, null, 2));

  const md = [];
  md.push('# T13 Evaluation — First Slice');
  md.push('');
  md.push(`- Labels reviewedOn: ${labels.reviewedOn}; original SHA-256 values recorded per case in results.json.`);
  md.push(`- Reviewer: ${labels.reviewer}`);
  md.push(`- Scope: ${labels.scope}`);
  md.push('- Model provenance (per case, from result.model / observation questionVersion / prepared image pipelineVersion):');
  for (const p of modelProvenance) {
    md.push(`  - case ${p.caseId}: decision model \`${p.decisionModel ?? 'unavailable'}\`, questionVersion \`${p.questionVersion ?? 'unavailable'}\`, image pipeline \`${p.imagePipelineVersion}\`, escalation model \`${p.escalationModel ?? 'not called'}\``);
  }
  md.push('- Pipeline provenance: direct module calls via compiled backend dist; one decisions round per case and at most one escalation round.');
  md.push('- No labels, filenames or expected routes were sent to any model.');
  md.push('');
  for (const r of results) {
    md.push(`## Case ${r.caseId} — ${r.file} (${r.category}, ${r.scenario})`);
    md.push('');
    md.push('| Observation | Provisional label | Evaluable | Actual probability | Evidence status | Basis | Limitations | Conflicts |');
    md.push('| --- | --- | --- | --- | --- | --- | --- | --- |');
    for (const truth of r.provisionalTruth) {
      const actual = r.decision?.observations?.find((o) => o.id === truth.id);
      const prob = actual && actual.probability !== undefined ? String(actual.probability) : 'unavailable';
      const evidenceStatus = actual?.evidenceStatus ?? 'unavailable';
      const basis = actual?.basis
        ? `${actual.basis.origin}, scope=${actual.basis.scope}, imageSha256=${actual.basis.imageSha256}`
        : 'unavailable';
      const limitations = actual?.limitations?.length ? actual.limitations.join('; ') : (actual ? 'none recorded' : 'unavailable');
      const conflicts = actual?.conflicts?.length ? actual.conflicts.join('; ') : (actual ? 'none recorded' : 'unavailable');
      md.push(`| ${truth.id} | ${String(truth.label)} | ${String(truth.evaluable)} | ${prob} | ${evidenceStatus} | ${basis} | ${limitations} | ${conflicts} |`);
    }
    md.push('');
    md.push(`Provisional scope notes: ${r.provisionalTruth.map((t) => `${t.id}: ${t.scope}`).join(' | ')}`);
    md.push('');
    md.push(`Route: \`${r.route}\` (assessmentRoute returned \`${r.routeResult ?? 'not called'}\`; provisional expectation \`${r.expectedRoute}\`).`);
    if (r.escalation) {
      md.push('');
      md.push(`Escalation availability: ${r.escalation.available}; model: ${r.escalation.model}; requestId: ${r.escalation.requestId ?? 'unavailable'}.`);
      if (r.escalation.observations?.length) {
        for (const o of r.escalation.observations) md.push(`- escalation finding ${o.id}: ${o.finding} (location: ${o.location})`);
      }
      if (r.escalation.resolvedIssues?.length) {
        for (const o of r.escalation.resolvedIssues) md.push(`- resolved ${o.id}: ${o.evidence}`);
      }
      if (r.escalation.unknowns?.length) for (const u of r.escalation.unknowns) md.push(`- unknown: ${u}`);
      if (r.escalation.contradictions?.length) for (const c of r.escalation.contradictions) md.push(`- contradiction: ${c}`);
    }
    md.push('');
  }
  md.push('## Route counts and availability');
  md.push('');
  md.push(`- single_escalation: ${routeCounts.single_escalation ?? 0}`);
  md.push(`- review_required_on_unavailable: ${routeCounts.review_required_on_unavailable ?? 0}`);
  md.push(`- model calls (actual invocations): ${totalModelCalls} (${[...MODEL_CALLS.entries()].map(([k, v]) => `${k}=${v}`).join(', ')})`);
  md.push('');
  md.push('## Uncovered strata (from labels)');
  md.push('');
  for (const stratum of labels.uncoveredStrata) md.push(`- ${stratum}`);
  md.push('');
  md.push('## Metrics gates');
  md.push('');
  md.push('- Thresholds: disabled (labels.thresholds is null); no threshold tuning applied.');
  md.push('- clearRoutes: 0; unsupportedClearRoutes: 0 — structural gate only.');
  md.push('- falseClearRate: null (denominator 0).');
  md.push('- falseEscalation: null — unestimated; no calibrated profile and no independent truth.');
  md.push('- No calibration, held-out split or overall confidence is claimed.');
  md.push('- Function, cause and exact identity are unverified.');
  md.push('- No credentials, image bytes, base64 or model prompt contents are included.');
  md.push('');
  await writeFile(new URL('evaluation.md', outputUrl), md.join('\n'));
  console.log(JSON.stringify({ cases: results.length, routeCounts, modelCalls: totalModelCalls }));
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});