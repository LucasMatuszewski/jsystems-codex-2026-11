# Connected slice checkpoint - acceptance pending

The user stopped implementation for VM shutdown on 2026-11-06 and explicitly
requested a commit/push checkpoint. See the [continuation handoff](../../../HANDOFF-2026-11-06.md).
T11-T15 remain unchecked in the authoritative implementation plan.

## Verified at the checkpoint

| Check | Actual result |
|---|---|
| Frontend unit/component tests | 7 files, 24 tests passed, zero failed/skipped |
| Frontend production build | Passed; 448.66 kB initial bundle, under the existing 500 kB budget; no build warnings |
| Evaluation tests | 3 passed, zero failed/skipped; validate-only works without credentials |
| Real negative-provider browser profile | 2 passed; real OpenRouter rejects a synthetic invalid credential; fallback/review, empty failed retries and reset work |
| Local validation and narrow-layout browser checks | 2 passed; original-MIME rejection retains values; 390 px viewport has no horizontal overflow; keyboard entry works |
| Final real chat API probe | Passed initial/follow-up/summary/duplicate/correction/stop/partial/saved-input retry after key capacity was restored |
| Real visual evaluation | 2 approved originals, 10 observation comparisons, 2 Decisions + 2 escalations, all available; both routes single escalation |
| Earlier positive browser baseline | Laptop return and invisible-symptom phone complaint: 2 passed before the final prompt/lazy-loading/callback fixes |
| Final full browser suite | Launched after capacity restoration, then interrupted for shutdown; no final exit status/count claimed |
| Actual runtime startup | Backend on 127.0.0.1:3000 and isolated negative backend on 3001 served the built SPA/API during checks; both stopped for shutdown |
| Manual Playwright CLI acceptance | Not completed; the planned final manual flow was interrupted before execution |

Frontend TDD specifically reproduced delayed stop querying a new case (DELETE plus
unexpected GET), then passed after the epoch guard. A real rejected 150 kB follow-up
first made retry return HTTP 413; after correction it retried the last canonical
failed turn with HTTP 200, no browser history payload and no duplicate user turn.
Composer tests also caught clearing a repeated draft against an older matching turn.

## Evidence and limits

- [Evaluation report](evaluation/evaluation.md) and [raw normalized results/provenance](evaluation/results.json).
  Approved original hashes remain unchanged; neutral prepared JPEG copies are in
  that folder. Provisional labels never reached the models. Shortcut remains disabled,
  thresholds null; false-clear denominator is zero and no calibration/accuracy claim
  is made. Missing image categories, damage positives and held-out strata are explicit.
- [Screenshots](screenshots/) contain successful earlier baselines, current negative
  and narrow/local checks, and intermediate screenshots from the interrupted full
  run. A screenshot alone does not prove its test completed. `narrow-overflow-red.png`
  intentionally records the pre-fix failure.
- Narrow intake and structured-provider-error screenshots were visually inspected
  against the measured x-kom colors, typography, logo and card guidance. Complete
  final screenshot/long-content/mobile/manual acceptance remains TODO.
- No E2E stubs, response interception or mocked provider success were used. The
  negative profile uses a real official endpoint with a synthetic invalid credential;
  root `.env` was unchanged. Never use that profile as normal configuration.

## Acceptance still required

| Scope | Remaining work |
|---|---|
| PRD AC-01..13 | Finish manual keyboard/form/photo/date/MIME/size/retained-value checks and no-call evidence |
| PRD AC-14..28 | Finish current browser return/complaint/business/review acceptance, five observations or explicit unavailable, one-escalation provenance |
| PRD AC-29..40 | Inspect all six first-message elements, contextual source sections, summary, correction/sticky review, current UI partial/stop/retry |
| PRD AC-41..49 | Final screens/focus/Polish text/network/console, reset during work, refresh empty, cross-case isolation |
| ADR-000 | Final bundle/secret/persistence/lifetime review and startup record on the continuation machine |
| ADR-001 | Human review of provisional labels and actual original/prepared/result comparisons; preserve missing strata and disabled shortcut |
| ADR-002 | Complete real Angular transport/manual/error/long-content visual acceptance |
| T14 | Fresh independent non-author review of actual candidate SHA, fixes and current-head re-review |
| T15 | Complete local PR title/body and human acceptance; the shutdown push is authorized, no merge is authorized |
