# T11 conversation checkpoint - implementation preserved, acceptance pending

Shutdown checkpoint on 2026-11-06. The user explicitly requested committing and
pushing all work before turning off the VM. This preserves WIP; it does not mark
T11 or the connected slice accepted. See [handoff](../../../HANDOFF-2026-11-06.md).

## Behavior implemented

- Canonical full-context conversation using the actual Angular/AI SDK UI-SSE
  protocol, Polish plain text and ASCII punctuation. No context truncation,
  client-supplied history authority, image reassessment during chat or business action.
- Initial form input and completed answers occur once in context; partial/failed
  generations stay labeled incomplete. Retry uses the server's saved input.
- Follow-up-only review tool requires an exact quote from accepted input and adds
  review reasons monotonically. It cannot rewrite form, assessment or exact rules.
- Operation IDs, abort/delete lifecycle, transport disconnect handling, sanitized
  errors and structured status updates. Empty, length-limited and filtered finishes
  are failures rather than completed answers.

## Verification actually completed

- Backend: 71 tests passed, zero failed/skipped in the most recent backend suite;
  TypeScript build and no-emit typecheck passed separately before this checkpoint.
- TDD included executable empty-context/review stubs; later regression tests first
  exposed spurious review during intake, invalid JSON returning 500, unsafe default
  SDK logging and incorrect completion classification before their fixes.
- The final [live probe](live-probe.mjs) exited 0 after the OpenRouter limit was
  raised: initial response, contextual follow-up, summary, completed duplicate,
  material correction, partial stream cancellation and saved-input retry passed.
  Immutable original assessment and sticky review were checked. All provider calls
  used the real configured OpenRouter models. Tokens are redacted in
  [streams](live-captures.json), [last run](last-attempt-captures.json) and
  [canonical state](canonical-result.json).
- The latest prompt regression also passed: first-answer text did not expose
  internal JSON identifiers or scenario instructions. Original failure artifacts
  explain the earlier review and JSON handling defects; they are not current passes.
- The [negative probe](negative-probe.mjs) used an actual separate backend with a
  process-local synthetic invalid credential against real OpenRouter. HTTP 401
  yielded unavailable assessment, no escalation, persistent review, safe SSE
  errors and one canonical input with two failed attempts.
  [Captures](negative-live-captures.json), [safe audit evidence](safe-audit-records.json).
  The unsafe SDK logging was fixed and retested; the negative server is now stopped.
- A fresh local endpoint capture was later used for the frontend reset-race unit
  replay under `app/tests/fixtures/case/`. No invented provider mock was introduced.

## Remaining

Finish connected manual UI QA and screenshot inspection, full current browser-suite
acceptance, final requirement mapping and independent review of the eventual
candidate SHA. The earlier successful module/API checks do not replace those gates.
