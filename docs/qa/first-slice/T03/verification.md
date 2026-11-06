# T03 deterministic rules acceptance

Date: 2026-11-06. Prerequisites: T00 788807f, T01 8297df7, T02 3cc3117.

OpenCode/MiMo proposed the specification suite with all tools denied. The
orchestrator reviewed it, corrected the future-both-date expectation to require
both field errors, added malformed-body/description cases and ran Red before
production behavior: 16 discovered/executed domain tests failed for expected
validation/date/review/routing behavior, zero skips. No import/runner failure
was counted as Red; no endpoint/provider/database mocks exist.

The later MiMo implementation request failed with a provider transport
ECONNRESET after HTTP 200, then started an automatic retry. The orchestrator
interrupted that unaccepted request (CLI exit 1) and implemented the same frozen
contract locally under the plan's harness-failure fallback. No generated source
from that failed request was accepted. OpenCode remains the user's primary
worker preference for bounded subsequent tasks.

Final full backend suite: 25 discovered/executed/pass (16 domain, 8 image,
1 actual HTTP startup), zero failures/skips/cancellations. Separate backend
build and `tsc --noEmit` passed without warnings. Domain tests cover exact
selectors/required descriptions, strict Gregorian/date ordering/future checks,
Warsaw/DST/leap calendar behavior, 14/15-day and two-year baselines, source
applicability, business/in-store/unknown routes, additive review, forged fields
and disabled shortcut. No visual probability controls legal eligibility.

The compiled [runtime probe](runtime-probe.mjs) exercises consumer/business,
pending uncertainty versus permanent review and routing, and confirms actual
backend health separately. No model calls. [Result](runtime-result.json).
Still-unconnected module: browser case-flow acceptance remains T13, not claimed
here. Baseline calculations remain preliminary and do not establish expired
rights, notification, refunds or staff action.
