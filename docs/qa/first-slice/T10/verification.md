# T10 real assessment API

Date: 2026-11-06. Route tests first failed with 404 against the existing server.
After implementation, real local HTTP checks reject missing fields, corrupt
image bytes, actual/declared MIME mismatch, unknown tokens and foreign origins
without any model calls. A separate failing Host/Origin rebinding regression
(200 rather than 403) was fixed by requiring loopback hostnames.

Backend verification: 52 discovered/executed/pass, zero failures/skips; build
and no-emit typecheck passed separately. The new T11 chat test is outside this
accepted scope and remains red until T11 wiring.

The separately started compiled server reports http://127.0.0.1:3000.
The [real runtime probe](live-probe.mjs) first failed against the old running
scaffold (404), then passed after startup with the new routes. See
[runtime result](runtime-result.json) and [redacted local response](assessment.ndjson).
It checks actual Decisions + one actual escalation, five observations, exactly
one terminal result, pending duplicate 409, completed duplicate reuse, GET
reconciliation, DELETE 204, revoked token/operation 410, and cancellation with
no result after deletion. Audit logs contain one initial and one escalation
generation for the completed case; duplicates made no further model call.
Cancellation occurs at image preparation and does not claim a provider outage.

Input metadata is checked before headers; full decoding/preparation has its
own live stage before any model call. Processing failure emits an error and
deletes the incomplete case; provider unavailability produces review-required
structured data. Prepared bytes are never stored in canonical case records.
Public projections omit raw answer bodies and usage, and never include prompts
or image bytes. No external response mocks were introduced.

Dependency audit discovered GHSA-mrhx-c7xc-m3w5 in the originally pinned Zod
4.1.8. Zod 4.6.7 satisfies the installed SDK peer range and fixes the advisory.
Parser/schema tests and the final real probe ran with the fixed version;
installation reported zero vulnerabilities. See the
[official advisory](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5).
Multer's matching TypeScript declarations were added without changing its
selected runtime version. Browser acceptance remains T13.
