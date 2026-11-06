# T09 canonical case-state acceptance

Date: 2026-11-06. Prerequisite T03 5752e5a. Orchestrator-owned state work while
the primary OpenCode/MiMo worker handles the disjoint T07 normalizer proposal.

Six specification tests were written and executed before state behavior;
all six failed against an executable scaffold (mutable snapshots, missing
locks/deduplication, forged intake, no cancellation and invalid retries).
The model-field assertion captures the expected original value before mutation,
so it cannot falsely pass through a shared input reference.

After implementation all six passed. A seventh test then demonstrated pending
consumer assessments prematurely had procedural guidance (1 failed/6 passed).
Status is now omitted while assessment is pending unless mandatory review is
already known. The seventh test passed after that fix.

Final relevant accepted-backend scope: 32 discovered/executed/pass (7 case,
16 domain, 8 image, 1 HTTP startup), zero failures/skips/cancellations. T07's
separate unaccepted parser tests remain in progress; no whole-working-tree
provider-suite success is claimed. Full backend compilation and `tsc --noEmit`
passed separately without warnings.

The compiled [runtime probe](runtime-probe.mjs) independently verified isolated
snapshots, permanent business review, reset cancellation and old-token revocation
and confirmed the actual backend is responding HTTP 200. [Result](runtime-result.json).
It omits token values and makes no model calls. Store unit fixtures are pure
application-state/evidence records, not external provider/endpoint mocks.

Implemented: random bearer tokens; immutable copied form/assessment; one active
operation per case; operation ownership and duplicate reconciliation; one
accepted input per turn; separate preserved partial/failed attempts; retry from
saved input only; authoritative review via the shared T03 transition; delete
aborts work and removes the record. Operation tombstones retain identifiers
only, so replay after reset cannot recreate the old assessment or expose text.

Shared application DTOs were materialized in `domain/contracts.ts` by O to
keep case state independent of provider/Express/SDK types and permit T07/T08
producers to satisfy the same contract. No SDK, provider key, database, auth,
recovery cookie, browser persistence or staff integration is added.

This module is not yet connected to routes. Actual API/browser history,
provider disconnect, reset dialog and cross-tab acceptance remain T10-T13;
compiled state-machine/runtime checks do not replace that acceptance.
