# First-slice implementation contracts

Date: 2026-11-06. Owner: orchestrator. T00 baseline: branch
`angular-implementation`, HEAD `c91ad8242b323ff715cb138cd5f753641641bde5`,
clean working tree. The user's execution request authorizes P02.

This catalogue freezes application names and lifecycle semantics for T01-T13.
It does not assert observed provider wire behavior, working dependencies,
approved source freshness, or completed runtime acceptance.

## Authority and ownership

- [PRD](../../PRD.md): AC-01..49 and sections 8 and 11 define behavior.
- [ADR-000](../../ADR/000-main-architecture.md): sections 3-7 define modules,
  lifetime, API and configuration; section 10 defines verification.
- [ADR-001](../../ADR/001-decision-assessment.md): sections 4-6 define raw
  Decisions versus application observations, image pipeline and routing.
- [ADR-002](../../ADR/002-angular-streaming-ui.md): sections 4-5 define Angular
  Chat, server-owned history, retry and abort semantics.

The orchestrator owns this catalogue, shared package/configuration changes,
entry points, source/profile registry and tracker. Domain code owns review
transitions; providers cannot replace form facts or policy findings. Workers
must stop and request contract correction on a semantic conflict.

## Application records

Names below are application DTO names, not claimed external API types.
Customer strings are Polish; identifiers and documentation are English.

| Record | Frozen fields / meaning | Owner task |
|---|---|---|
| `CaseInput` | `requestType`: Zwrot/Reklamacja; `category`: Laptop/Smartfon/Monitor/Akcesorium komputerowe; `model`: trimmed nonempty customer text; `purchaseDate`, `receiptDate`: ISO calendar dates; `buyerType`: Konsument/Zakup firmowy; `purchaseChannel`: Na odległość/W salonie/Nie wiem; `description`: required nonempty for complaint, optional for return | T03/T05 |
| `FieldErrors` | Field-name to Polish error message, including `image`; no raw exception content | T03/T04/T10 |
| `PreparedImage` | JPEG bytes, actual MIME `image/jpeg`, source/output width and height, input/output byte counts, SHA-256 identity, `pipelineVersion`, processing limitations; bytes stay server-only and are discarded after visual assessment | T04 |
| `ObservationId` | `image_usable`, `item_relevant`, `visible_cracks`, `visible_dents`, `visible_scratches` | T07 |
| `Observation` | ID; supported `probability` in [0,1] or null; `evidenceStatus`: supported/insufficient/conflicting/unavailable; basis with image identity, pictured-area scope and model origin; limitations/conflicts; model/question/pipeline versions | T07 |
| `DecisionAssessment` | Five observations on success; stage availability and validated partial records on failure; raw typed answers/distributions and supplied provenance preserved separately for evaluation | T07 |
| `EscalationAssessment` | Supported visible observations with pictured locations; issue IDs resolved with supporting evidence; remaining unknowns and contradictions; model version. Never replacement probabilities | T08 |
| `ProcedureFindings` | Warsaw assessment date; exact calendar calculations, applicability and limitations; separate statutory/company periods; attributed source IDs/sections/versions; unsupported conditions | T02/T03 |
| `ReviewState` | `required` boolean plus additive unique reasons with origin. Pending initial uncertainties are separate. Once required it cannot be cleared | T03/T09 |
| `AssessmentResult` | Immutable submitted form, image metadata, assessment date, Decisions stage, optional single escalation, procedure findings, initial review and source versions | T09/T10 |
| `PublicCase` | Opaque `caseToken`, structured assessment, current review, effective status and operation state. No provider raw exceptions, hidden instructions, raw image bytes or keys | T09/T10 |
| `ChatTurn` | Server-recognized turn ID, intent, accepted input, attempts; each attempt has ID, assistant parts and pending/complete/partial/failed/cancelled status. Client assistant history is never authority | T09/T11 |
| `Operation` | Operation ID, case identity when created, stage, pending/completed/failed/cancelled state and cancellation controller | T09 |

Effective status is `review_required` when review is required, otherwise
`return_guidance` or `complaint_guidance`. UI labels are exactly the three
statuses in PRD 11.3. No status means accepted claim, staff assignment or refund.

## Intake and assessment transport

`POST /api/assessment`: multipart fields are `CaseInput`, `operationId` and
exactly one `image`. The browser creates an unpredictable operation ID for an
explicit submission and retains it until terminal reconciliation. The server
reserves that ID before visual work; duplicates reconcile the same operation,
never make another Decisions/escalation call. Tokens are opaque random
bearer capabilities held in tab memory only. They never appear in URLs.

Before streaming: required/date/format/decode errors are HTTP 422 with
`{ error: { code, message, fields } }`; oversized input is 413. Dates use the
assessment day in Europe/Warsaw, not UTC hours; receipt cannot precede purchase
and neither date can be in the future. MIME and actual decode must agree;
extensions are not sufficient proof. No model receives invalid/unprepared data.
Browser fields and preview remain until a confirmed reset.

NDJSON content type is `application/x-ndjson`. Each line is one JSON object:

- `stage`: `{ type, operationId, caseToken?, stage }`, where stage is
  `validation`, `image_preparation`, `initial_assessment`, `escalation` or
  `ready_for_chat`. No countdown or invented completion percentage.
- `result`: `{ type, operationId, caseToken, case: PublicCase }`.
- `error`: `{ type, operationId, error: { code, message, fields? } }`.

Exactly one terminal record, `result` or `error`, may be emitted. A disconnected
stream without a terminal record is incomplete. Input/preparation failures keep
the customer on the form; provider failures produce a review-required result
with the unavailable stage identified. Validated partial records survive.
No fabricated zero observations or silent model substitution.

One initial Decisions call and at most one ordinary multimodal escalation per
case; automatic retries disabled. The routing shortcut is disabled for this
slice, so every successful initial assessment escalates once. Failure of the
initial provider takes the separate review route without escalation. Escalation
can resolve pending evidence but cannot remove a mandatory review reason.

## Case access, isolation and cancellation

`GET /api/case` and `DELETE /api/case` carry `x-case-token`. GET returns
`PublicCase`; DELETE cancels work, removes state and returns 204 after the
customer confirms reset. Unknown/removed token returns 410; overlapping
operations return 409. Customer errors are sanitized Polish messages.

One backend process owns in-memory cases and operation reservations; no
database, cookie recovery, localStorage or IndexedDB. One tab owns one active
case. Refresh starts empty. Browser-close cleanup is best effort, never a
promise of immediate deletion. Reset clears original preview/form/chat and
revokes the old token. Old asynchronous callbacks cannot write to the new case.
Disconnect aborts provider work and marks partial state separately from success.

## Conversation transport and canonical history

`POST /api/chat` uses AI SDK UI message SSE, consumed by the official Angular
`Chat` and `DefaultChatTransport`. Approved custom body fields are `caseToken`,
`operationId`, `turnId`, `attemptId`, `intent` and newly submitted text. Intent
is `intake`, `follow_up`, `summary` or `retry`. SDK message envelopes are
validated only for the new user text/recognized ID; client assistant messages,
form/status/model replacements and instructions are ignored as authority.

Intake uses supported `sendMessage` with the actual submitted form-derived
user input, stored once; the UI hides that intake transport turn so the first
visible bubble is generated assistant guidance. Never invent a greeting from
the customer, regenerate an empty history or bootstrap through undocumented
null-message behavior. Summary is a recognized user intent against the same
case. Retry names a failed turn plus a fresh attempt ID and reuses saved input.

Every generation loads immutable assessment, current review, applicable
versioned procedure/scenario content and full canonical history. Completed
answers occur exactly once; partial/failed answers are labeled incomplete,
never completed facts. If full required context cannot fit, report that limit
rather than silently truncating. No image bytes are sent in ordinary chat.

Only one operation per case can be active. Repeated operation/turn/attempt IDs
cannot add another user turn or restart image assessment. Retry generates only
the failed assistant answer. Preserve an incomplete snapshot separately when
the Angular SDK replaces its displayed assistant message on regeneration.

The sole case-changing model tool adds a validated material-correction,
conflict or unsupported-request review reason through the shared monotone
domain function. Emit authoritative case-status data only after the transition.
GET reconciliation updates the panel after tools, completion, abort or failure.
Model prose cannot clear status or mutate original facts.

Before headers, use sanitized application HTTP errors; afterward use SDK SSE
error parts with approved Polish text. Accumulate assistant parts as partial
during generation; finalize success only on verified completion. Bind response
disconnect/stop to a server AbortController and the SDK provider abort signal;
consume the SDK stream as required by the verified Node bridge. Keep structured
fallback and review visible on empty response, partial output, error or retry.

## Provider and source gates

Decisions uses native server HTTP to the dedicated alpha endpoint, separate
from the SDK chat provider. Ten questions (five Noul plus corresponding evidence
choices) normalize into five observations. Required IDs/types and finite
probabilities are validated; missing optional choice distributions mean
insufficient evidence, not fabricated zero or mandatory schema failure.
Optional confidence is metadata, never correctness. No Decisions prose or
pixel-location explanation is invented.

T06 must establish actual safe wire captures before provider doubles. External
documentation does not prove an installed adapter or observed endpoint shape.
T02 must recheck named official sources and visually inspect original photos
before upload. No secret-bearing env file is read; backend runtime receives
authorized credentials using Node's loader or inherited process environment.
This app explicitly uses OpenRouter, not an OpenAI API key setup flow.

## Acceptance and readiness

T00 consistency review: no product-scope or architecture change needed. These
DTO/event names refine ADR-000 without replacing either external wire protocol.
All downstream tasks retain their plan prerequisites, TDD, live-capture,
startup, screenshot/manual QA and focused-commit gates. T01 must still verify
the published dependency tuple and browser path. T02 source/photo approval and
T06 credential/provider readiness are open. T13 must map every AC to actual
evidence; T14 is an independent current-candidate review. T15 publication and
final human acceptance remain explicit gates; implementation does not authorize
push, PR publication or merge.
