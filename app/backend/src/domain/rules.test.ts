/**
 * Focused specification suite for the frozen public API of ./rules.js:
 * validateInput, warsawDate, calendarDays, addReviewReasons, evaluateRules,
 * assessmentRoute, effectiveStatus.
 *
 * node:test + node:assert/strict, no mocks and no production code. Every date
 * is a fixed synthetic calendar date and `today` is always passed explicitly,
 * so the suite never depends on the real clock. It covers: trimming, exact
 * enums, universally required fields, complaint/return description rules,
 * strict real YYYY-MM-DD dates, no future dates, receipt >= purchase, forged
 * replacement policy/status/model config fields, Europe/Warsaw calendar dates
 * across UTC and DST edges, calendar-only day arithmetic across leap and DST
 * boundaries, monotone/additive review reasons, the 14 statutory vs 15 company
 * day and two-year complaint routing baselines with their boundaries, the
 * review triggers, source ids/versions, explicit limitations, and review
 * precedence over guidance.
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import {
  addReviewReasons,
  assessmentRoute,
  calendarDays,
  effectiveStatus,
  evaluateRules,
  validateInput,
  warsawDate,
} from './rules.js';
import type { CaseInput, ReviewReason, ReviewState } from './rules.js';

const TODAY = '2026-11-06';

const NAMED_FIELDS = [
  'buyerType',
  'category',
  'description',
  'model',
  'purchaseChannel',
  'purchaseDate',
  'receiptDate',
  'requestType',
];

function rawInput(overrides: Record<string, unknown> = {}): Record<string, unknown> {
  return {
    requestType: 'Zwrot',
    category: 'Laptop',
    model: 'ThinkPad T14',
    purchaseDate: '2026-03-05',
    receiptDate: '2026-11-01',
    buyerType: 'Konsument',
    purchaseChannel: 'Na odległość',
    description: 'Opis zgłoszenia',
    ...overrides,
  };
}

function caseInput(overrides: Partial<CaseInput> = {}): CaseInput {
  return {
    requestType: 'Zwrot',
    category: 'Laptop',
    model: 'ThinkPad T14',
    purchaseDate: '2026-03-05',
    receiptDate: '2026-11-01',
    buyerType: 'Konsument',
    purchaseChannel: 'Na odległość',
    description: 'Opis zgłoszenia',
    ...overrides,
  };
}

function reason(code: string, origin: ReviewReason['origin'] = 'policy'): ReviewReason {
  return { code, message: `Powód ${code}`, origin };
}

function assertNonemptyString(value: unknown, label: string): void {
  assert.equal(typeof value, 'string', label);
  assert.ok((value as string).length > 0, label);
}

function assertLimitations(limitations: unknown, label: string): void {
  assert.ok(Array.isArray(limitations), label);
  const list = limitations as string[];
  assert.ok(list.length > 0, `${label}: limitations must stay explicit`);
  for (const item of list) {
    assertNonemptyString(item, label);
  }
}

test('validateInput accepts a valid Zwrot, trims every string and keeps only the frozen fields', () => {
  const raw = rawInput({
    requestType: ' Zwrot ',
    model: '  ThinkPad T14  ',
    description: '   Opis zgłoszenia   ',
    purchaseDate: ' 2026-03-05 ',
    receiptDate: ' 2026-11-01 ',
    replacementPolicy: { days: 90 },
    status: 'accepted',
    modelConfig: { tier: 'premium' },
  });

  const { value, errors } = validateInput(raw, TODAY);

  assert.deepEqual(errors, {});
  assert.deepEqual(value, {
    requestType: 'Zwrot',
    category: 'Laptop',
    model: 'ThinkPad T14',
    purchaseDate: '2026-03-05',
    receiptDate: '2026-11-01',
    buyerType: 'Konsument',
    purchaseChannel: 'Na odległość',
    description: 'Opis zgłoszenia',
  });
  assert.deepEqual(Object.keys(value as Record<string, unknown>).sort(), NAMED_FIELDS);
});

test('validateInput requires a nonempty description for Reklamacja and allows an empty one for Zwrot', () => {
  for (const description of ['', '   ']) {
    const zwrot = validateInput(rawInput({ description }), TODAY);
    assert.deepEqual(zwrot.errors, {});
    assert.equal(zwrot.value?.description, '');

    const reklamacja = validateInput(rawInput({ requestType: 'Reklamacja', description }), TODAY);
    assert.equal(reklamacja.value, null);
    assert.deepEqual(Object.keys(reklamacja.errors), ['description']);
    assertNonemptyString(reklamacja.errors.description, 'errors.description');
  }

  const missing = rawInput({ requestType: 'Reklamacja' });
  delete missing.description;
  const result = validateInput(missing, TODAY);
  assert.equal(result.value, null);
  assert.deepEqual(Object.keys(result.errors), ['description']);
  assertNonemptyString(result.errors.description, 'errors.description');
});

test('validateInput enforces exact enum values and nonempty string-typed required fields, keyed per field', () => {
  const frozenValues: Array<[string, unknown[]]> = [
    ['requestType', ['Zwrot', 'Reklamacja']],
    ['category', ['Laptop', 'Smartfon', 'Monitor', 'Akcesorium komputerowe']],
    ['buyerType', ['Konsument', 'Zakup firmowy']],
    ['purchaseChannel', ['Na odległość', 'W salonie', 'Nie wiem']],
  ];
  for (const [field, values] of frozenValues) {
    for (const value of values) {
      // enum membership alone is accepted here; policy review happens later
      const { value: parsed, errors } = validateInput(rawInput({ [field]: value }), TODAY);
      assert.deepEqual(errors, {});
      assert.equal((parsed as unknown as Record<string, unknown>)[field], value);
    }
  }

  const MISSING = Symbol('missing');
  const invalid: Array<[string, unknown]> = [
    ['requestType', 'Zwroty'],
    ['requestType', 'zwrot'],
    ['requestType', ''],
    ['category', 'Telefon'],
    ['category', 'laptop'],
    ['buyerType', 'Firma'],
    ['buyerType', 'konsument'],
    ['purchaseChannel', 'Online'],
    ['purchaseChannel', 'W sklepie'],
    ['model', ''],
    ['model', '   '],
    ['model', 42],
    ['model', null],
    ['purchaseDate', 20260305],
    ['receiptDate', null],
    ['requestType', MISSING],
    ['model', MISSING],
    ['receiptDate', MISSING],
  ];

  for (const [field, bad] of invalid) {
    const raw = rawInput();
    if (bad === MISSING) {
      delete raw[field];
    } else {
      raw[field] = bad;
    }
    const { value, errors } = validateInput(raw, TODAY);
    assert.equal(value, null, `${field}=${String(bad)}`);
    assert.deepEqual(Object.keys(errors), [field], `${field}=${String(bad)}`);
    assertNonemptyString(errors[field], `errors.${field}`);
  }
});

test('validateInput accepts only real strict YYYY-MM-DD calendar dates', () => {
  const today = '2026-12-31';

  const validDates = ['2024-02-29', '2000-02-29', '2026-01-01', '2026-12-31'];
  for (const date of validDates) {
    const { value, errors } = validateInput(rawInput({ purchaseDate: date, receiptDate: date }), today);
    assert.deepEqual(errors, {});
    assert.equal(value?.purchaseDate, date);
    assert.equal(value?.receiptDate, date);
  }

  const invalidDates = [
    '2026-02-30',
    '2026-13-01',
    '2026-00-10',
    '2026-01-00',
    '2026-1-05',
    '2026-01-5',
    '2026-01-05T00:00:00',
    '05.01.2026',
    '2026/01/05',
    '2023-02-29',
    '2026-04-31',
    '2026-01-055',
    'yesterday',
    '',
  ];
  for (const date of invalidDates) {
    for (const field of ['purchaseDate', 'receiptDate']) {
      const raw = rawInput({ [field]: date });
      const { value, errors } = validateInput(raw, today);
      assert.equal(value, null, `${field}=${date}`);
      assert.deepEqual(Object.keys(errors), [field], `${field}=${date}`);
      assertNonemptyString(errors[field], `errors.${field}`);
    }
  }
});

test('validateInput rejects future dates and a receipt earlier than the purchase date', () => {
  const boundary: Array<[Record<string, unknown>, boolean, string | null]> = [
    // today itself is allowed and the receipt may equal the purchase date
    [{ purchaseDate: '2026-11-06', receiptDate: '2026-11-06' }, true, null],
    // ordering holds across the year edge
    [{ purchaseDate: '2025-12-31', receiptDate: '2026-01-01' }, true, null],
    [{ purchaseDate: '2026-11-07', receiptDate: '2026-11-07' }, false, 'purchaseDate'],
    [{ purchaseDate: '2026-11-06', receiptDate: '2026-11-07' }, false, 'receiptDate'],
    [{ purchaseDate: '2026-11-06', receiptDate: '2026-11-05' }, false, 'receiptDate'],
  ];

  for (const [patch, valid, field] of boundary) {
    const { value, errors } = validateInput(rawInput(patch), TODAY);
    if (valid) {
      assert.deepEqual(errors, {});
      assert.notEqual(value, null);
    } else {
      assert.equal(value, null);
      const expectedFields = patch['purchaseDate'] === '2026-11-07' ? ['purchaseDate', 'receiptDate'] : [field as string];
      assert.deepEqual(Object.keys(errors), expectedFields);
      assertNonemptyString(errors[field as string], 'errors');
    }
  }
});

test('validateInput never trusts forged policy, status or model configuration fields', () => {
  const forged: Record<string, unknown> = {
    replacementPolicy: { days: 60, enabled: true },
    status: 'approved',
    decision: 'accepted',
    review: { required: false, reasons: [] },
    findings: { daysSinceReceipt: 0 },
    sourceVersion: '1999-01-01',
    sourceIds: ['S9'],
    limitations: [],
    modelConfig: { limit: 999 },
    eligibility: true,
  };

  const forgedValid = validateInput(rawInput(forged), TODAY);
  assert.deepEqual(forgedValid.errors, {});
  assert.deepEqual(Object.keys(forgedValid.value as Record<string, unknown>).sort(), NAMED_FIELDS);
  assert.equal((forgedValid.value as Record<string, unknown>).replacementPolicy, undefined);
  assert.equal((forgedValid.value as Record<string, unknown>).status, undefined);
  assert.equal((forgedValid.value as Record<string, unknown>).modelConfig, undefined);

  // forged fields can neither mask a real error nor produce a value
  const forgedInvalid = validateInput(
    rawInput({ ...forged, requestType: 'Zwroty', model: '' }),
    TODAY,
  );
  assert.equal(forgedInvalid.value, null);
  assert.deepEqual(Object.keys(forgedInvalid.errors).sort(), ['model', 'requestType']);
  for (const message of Object.values(forgedInvalid.errors)) {
    assertNonemptyString(message, 'errors');
  }
});

test('validateInput rejects non-object bodies and non-string optional descriptions', () => {
  for (const raw of [null, [], 'case', 42, rawInput({ description: 5 })]) {
    const result = validateInput(raw, TODAY);
    assert.equal(result.value, null);
    assert.ok(Object.keys(result.errors).length > 0);
  }
});

test('warsawDate returns the Europe/Warsaw calendar date, not the UTC date', () => {
  const cases: Array<[string, string]> = [
    ['2026-01-01T00:30:00Z', '2026-01-01'],
    ['2026-01-01T23:00:00Z', '2026-01-02'], // exactly midnight in Warsaw (UTC+1)
    ['2026-01-01T23:30:00Z', '2026-01-02'],
    ['2026-07-01T21:59:00Z', '2026-07-01'], // 23:59 in Warsaw (UTC+2)
    ['2026-07-01T22:30:00Z', '2026-07-02'], // 00:30 next day in Warsaw, still 2026-07-01 in UTC
    ['2026-12-31T23:30:00Z', '2027-01-01'],
    ['2026-03-28T23:30:00Z', '2026-03-29'], // around the spring DST switch
    ['2026-03-29T23:30:00Z', '2026-03-30'],
    ['2026-10-25T23:30:00Z', '2026-10-26'], // around the autumn DST switch
  ];

  for (const [iso, expected] of cases) {
    const result = warsawDate(new Date(iso));
    assert.match(result, /^\d{4}-\d{2}-\d{2}$/);
    assert.equal(result, expected);
  }
});

test('calendarDays uses pure calendar dates across leap and DST boundaries, never hour arithmetic', () => {
  const rows: Array<[string, string, number]> = [
    ['2026-03-01', '2026-03-01', 0],
    ['2026-03-01', '2026-03-15', 14],
    ['2026-03-15', '2026-03-01', -14],
    ['2024-02-28', '2024-03-01', 2], // leap day counts as a full calendar day
    ['2024-02-29', '2024-03-01', 1],
    ['2023-02-28', '2023-03-01', 1], // non-leap year has no 29th
    ['2026-03-28', '2026-03-30', 2], // spring-forward weekend is still two days
    ['2026-10-24', '2026-10-26', 2], // fall-back weekend is still two days
    ['2024-12-31', '2025-01-01', 1],
    ['2026-01-01', '2026-12-31', 364],
    ['2024-01-01', '2024-12-31', 365],
  ];

  for (const [from, to, expected] of rows) {
    const result = calendarDays(from, to);
    assert.ok(Number.isInteger(result), `${from} -> ${to}`);
    assert.equal(result, expected, `${from} -> ${to}`);
  }
});

test('addReviewReasons is monotone, additive and never mutates its arguments', () => {
  const initial: ReviewState = {
    required: false,
    reasons: [reason('policy_date', 'policy')],
  };
  const initialSnapshot = structuredClone(initial);
  const additions: ReviewReason[] = [
    reason('assessment_failed', 'assessment'),
    reason('policy_date', 'policy'), // duplicate code
    reason('chat_unresolved', 'chat'),
  ];
  const additionsSnapshot = structuredClone(additions);

  const merged = addReviewReasons(initial, additions);

  assert.notEqual(merged, initial);
  assert.notEqual(merged.reasons, initial.reasons);
  assert.deepEqual(initial, initialSnapshot);
  assert.deepEqual(additions, additionsSnapshot);

  // additive with unique codes; the duplicate code is kept once
  assert.equal(merged.reasons.length, 3);
  assert.deepEqual(
    [...merged.reasons.map((item) => item.code)].sort(),
    ['assessment_failed', 'chat_unresolved', 'policy_date'],
  );
  assert.deepEqual(
    [...merged.reasons.map((item) => item.origin)].sort(),
    ['assessment', 'chat', 'policy'],
  );

  // a nonempty addition marks the state as requiring review and stays monotone
  assert.equal(merged.required, true);
  const grown = addReviewReasons(merged, [
    { code: 'late_fee', message: 'Inna treść.', origin: 'policy' },
    { code: 'chat_unresolved', message: 'Zmieniona treść.', origin: 'chat' },
  ]);
  assert.equal(grown.required, true);
  assert.deepEqual(
    [...grown.reasons.map((item) => item.code)].sort(),
    ['assessment_failed', 'chat_unresolved', 'late_fee', 'policy_date'],
  );
  assert.equal(new Set(grown.reasons.map((item) => item.code)).size, grown.reasons.length);

  // empty additions can never clear an existing requirement or reasons
  const kept = addReviewReasons({ required: true, reasons: [reason('business_buyer')] }, []);
  assert.equal(kept.required, true);
  assert.deepEqual(kept.reasons.map((item) => item.code), ['business_buyer']);

  // and they leave a pending, not-yet-required state untouched
  const untouched = addReviewReasons({ required: false, reasons: [] }, []);
  assert.equal(untouched.required, false);
  assert.deepEqual(untouched.reasons, []);
});

test('evaluateRules: a compliant consumer distance return needs no review and reports routing findings only', () => {
  const form = caseInput();
  const snapshot = structuredClone(form);

  const { review, findings } = evaluateRules(form, TODAY);

  assert.deepEqual(form, snapshot); // pure: the form is never mutated
  assert.deepEqual(review, { required: false, reasons: [] });
  assert.deepEqual(Object.keys(review).sort(), ['reasons', 'required']);

  assert.equal(findings.assessmentDate, TODAY);
  assert.equal(findings.daysSinceReceipt, 5); // 2026-11-01 -> 2026-11-06, receipt day excluded
  assert.equal(findings.withinStatutoryBaseline, true);
  assert.equal(findings.withinCompanyBaseline, true);
  assert.equal(findings.withinComplaintBaseline, true);
  assert.equal(findings.sourceVersion, '2026-11-06');
  assert.deepEqual([...findings.sourceIds].sort(), ['S1', 'S2', 'S4']);
  assert.deepEqual(Object.keys(findings).sort(), [
    'assessmentDate',
    'daysSinceReceipt',
    'limitations',
    'sourceIds',
    'sourceVersion',
    'withinCompanyBaseline',
    'withinComplaintBaseline',
    'withinStatutoryBaseline',
  ]);
  // no eligibility, expiry, damage or model thresholds appear in the findings
  assertLimitations(findings.limitations, 'limitations');
});

test('evaluateRules: business, unknown channel, in-store return, pre-policy purchase and expired baseline each require review', () => {
  const triggers: Array<[string, Partial<CaseInput>]> = [
    ['business buyer', { buyerType: 'Zakup firmowy' }],
    ['unknown channel', { purchaseChannel: 'Nie wiem' }],
    ['in-store return', { purchaseChannel: 'W salonie' }],
    ['purchase before the policy date 2026-03-05', { purchaseDate: '2026-03-04', receiptDate: '2026-11-01' }],
    ['outside the applicable baseline', { receiptDate: '2026-10-01' }],
  ];

  for (const [label, patch] of triggers) {
    const { review, findings } = evaluateRules(caseInput(patch), TODAY);
    assert.equal(review.required, true, label);
    assert.ok(review.reasons.length > 0, label);
    const codes = new Set<string>();
    for (const item of review.reasons) {
      assertNonemptyString(item.code, label);
      assertNonemptyString(item.message, label);
      assert.equal(item.origin, 'policy', label); // these triggers are policy-origin
      assert.ok(!codes.has(item.code), `${label}: unique reason codes`);
      codes.add(item.code);
    }
    assertLimitations(findings.limitations, label);
  }

  // control: the same consumer distance return bought on the policy date is clean
  const control = evaluateRules(
    caseInput({ purchaseDate: '2026-03-05', receiptDate: TODAY }),
    TODAY,
  );
  assert.equal(control.review.required, false);
  assert.deepEqual(control.review.reasons, []);
});

test('evaluateRules: 14 statutory vs 15 company days from receipt, receipt day excluded and boundary days inclusive', () => {
  const receiptDate = '2026-11-01';
  const rows: Array<[string, number, boolean, boolean]> = [
    ['2026-11-01', 0, true, true],
    ['2026-11-15', 14, true, true],
    ['2026-11-16', 15, false, true],
    ['2026-11-17', 16, false, false],
    ['2026-11-21', 20, false, false],
  ];

  for (const [today, daysSinceReceipt, statutory, company] of rows) {
    const { findings } = evaluateRules(caseInput({ receiptDate }), today);
    assert.equal(findings.assessmentDate, today);
    assert.equal(findings.daysSinceReceipt, daysSinceReceipt);
    assert.equal(findings.withinStatutoryBaseline, statutory);
    assert.equal(findings.withinCompanyBaseline, company);
    assert.equal(findings.withinComplaintBaseline, true);
  }

  // routing boundary: clean while inside the baselines on day 14,
  // review once the request is clearly outside them on day 16
  assert.equal(evaluateRules(caseInput({ receiptDate }), '2026-11-15').review.required, false);
  assert.equal(evaluateRules(caseInput({ receiptDate }), '2026-11-17').review.required, true);
});

test('evaluateRules: consumer in-store complaint is supported and complaints run on the two-year delivery baseline', () => {
  const inStore = evaluateRules(
    caseInput({ requestType: 'Reklamacja', purchaseChannel: 'W salonie' }),
    TODAY,
  );
  assert.equal(inStore.review.required, false);
  assert.deepEqual(inStore.review.reasons, []);
  assert.deepEqual([...inStore.findings.sourceIds].sort(), ['S1', 'S3']);
  assert.equal(inStore.findings.sourceVersion, '2026-11-06');
  assertLimitations(inStore.findings.limitations, 'complaint limitations');

  const complaint: Partial<CaseInput> = {
    requestType: 'Reklamacja',
    purchaseDate: '2026-03-05',
    receiptDate: '2026-03-05',
  };

  // two calendar years from delivery: the deadline day itself is still within
  const deadline = evaluateRules(caseInput(complaint), '2028-03-05');
  assert.equal(deadline.findings.daysSinceReceipt, 731); // includes the 2028-02-29 leap day
  assert.equal(deadline.findings.withinComplaintBaseline, true);
  assert.equal(deadline.findings.withinStatutoryBaseline, false);
  assert.equal(deadline.findings.withinCompanyBaseline, false);
  // the two-year baseline is the applicable one for a complaint
  assert.equal(deadline.review.required, false);

  const expired = evaluateRules(caseInput(complaint), '2028-03-06');
  assert.equal(expired.findings.withinComplaintBaseline, false);
  assert.equal(expired.review.required, true);
});

test('assessmentRoute: the shortcut is disabled, success escalates once and unavailability goes straight to review', () => {
  assert.equal(assessmentRoute(true), 'escalation');
  assert.equal(assessmentRoute(true), 'escalation'); // pure: one escalation per request, no hidden state
  assert.equal(assessmentRoute(false), 'review');
  assert.equal(assessmentRoute(false), 'review');
});

test('effectiveStatus: review takes precedence and survives assessment escalation', () => {
  const policyReview: ReviewState = {
    required: true,
    reasons: [reason('in_store_return', 'policy')],
  };
  // pending initial evidence is kept out of the review state until it is final
  const pending: ReviewState = { required: false, reasons: [] };

  assert.equal(effectiveStatus('Zwrot', policyReview), 'review_required');
  assert.equal(effectiveStatus('Reklamacja', policyReview), 'review_required');
  assert.equal(effectiveStatus('Zwrot', pending), 'return_guidance');
  assert.equal(effectiveStatus('Reklamacja', pending), 'complaint_guidance');

  // the assessment route is routing only and can never remove a policy review
  assert.equal(assessmentRoute(true), 'escalation');
  assert.equal(effectiveStatus('Zwrot', policyReview), 'review_required');

  assert.deepEqual(pending, { required: false, reasons: [] });
  assert.equal(effectiveStatus('Reklamacja', pending), 'complaint_guidance');
});
