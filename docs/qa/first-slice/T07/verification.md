# T07 bounded Decisions client

Date: 2026-11-06. OpenCode/MiMo supplied the bounded parser proposal; O reviewed,
added four failing regressions and applied the fixes. The original six parser
tests and the request/config tests were also written before their implementations.
The extra regressions caught supplied null/non-numeric optional data, invalid
integer probability mass, lost conflicts when maps were missing and technical
diagnostics in customer explanations. Parser mutations are explicitly synthetic
inputs derived from the accepted T06 capture, not fabricated transport mocks.

The actual native-fetch client sent one prepared approved laptop image to the
official Decisions endpoint: HTTP 200, five bounded records, dated returned model.
See [probe](live-probe.mjs) and [complete normalized result](live-result.json).
A separate real call with a process-local synthetic invalid credential returned
HTTP 401, unavailable and zero observations; see [result](negative-live-result.json).
The local .env was unchanged. These probes are not new raw-wire mock fixtures.

The implementation makes no automatic retry, uses the exact accepted top-level
image wire contract, preserves optional metadata, never manufactures missing
probabilities, and logs only stage/operation/status/request identifiers.
Server configuration requires the ADR-selected models and never sends its key
to the browser. A failed stage remains a structured unavailable result.

Verification: focused T07 tests 12/12; whole current backend 50/50 (including six
uncommitted T08 tests), zero skips/failures. Backend build and no-emit typecheck
passed separately. The compiled real probe establishes client runtime behavior;
route/UI acceptance remains T10-T13. Unobserved network outages are not claimed
as live-tested. No provider/endpoint mocks were introduced.
