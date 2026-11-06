# Hardware Service Copilot - First Vertical Slice

**Date:** 2026-11-06

**Status:** Draft awaiting human review. Planning does not authorize implementation, agent dispatch, publication or merge.

**Source baseline:** `angular-implementation`, commit `9bcafde6e44063e168104b596a7e295940d4cc6b`. The working tree was clean before this planning task. The user accepted the three ADRs as the planning baseline on 2026-11-06; their status labels are updated in this change.

## 1. Demonstrable outcome and boundary

Deliver one connected workflow: real form/image submission -> prepared image -> real bounded Decisions assessment -> the required single multimodal escalation -> structured result/review status -> first streamed assistant explanation -> contextual follow-up, summary and confirmed reset. Demonstrate a consumer laptop return and a phone complaint with an invisible symptom as two inputs to this same pipeline. Retain the PRD's selectors and conservative handling of business/unsupported circumstances; do not introduce a second application or replace this checkout.

Acceptance follows [PRD flows 4.1-4.5][flows], [AC-01..13][form], [AC-14..28][assessment], [AC-29..40][chat], [AC-41..49][ux], [ADR-000 contracts][api], [ADR-001 routing][routing] and [ADR-002 UI][ui]. The matrix below links each task to its relevant criterion group; the linked criteria remain authoritative.

The clear-observation shortcut stays disabled in this slice. Existing photos cover laptops/phones, not the four-category validation domain required to enable it. Evaluate all five observations and record missing strata; successful initial assessments therefore use the single escalation, while provider failure follows the separate failure route. This is the documented [unvalidated-profile behavior][evaluation], not a confidence claim or a substitute model integration.

Exclude database/history recovery, authentication, staff handoff, RAG, exports, public deployment and provider benchmarking. Any smaller scope or new architecture requires an explicit PRD/ADR amendment before implementation.

## 2. What actually exists and what was checked

| Inspection / command | Observed result |
|---|---|
| `git status --short`, `git branch --show-current`, `git rev-parse HEAD`, `git diff --check` | Clean baseline on the branch/commit above; no baseline whitespace error |
| `git symbolic-ref refs/remotes/origin/HEAD` | `refs/remotes/origin/main`; verify the intended PR base again before publication |
| Application and test inventory | `app/README.md` only. No application entry point, package manifest, application lockfile, source, tests, generated Angular project or startup script. `skills-lock.json` is not an application lockfile. |
| `node --help`, `node --version`, `npm --help`, `npm --version`, `npm run --help` | Node `v24.22.1`, npm `11.19.1`; Node environment-file flags and npm workspace/script syntax available |
| `npm run --prefix app` | Failed with ENOENT for `app/package.json` (exit 1); npm also could not write `D:\cache\npm\_logs`. This is absent infrastructure, not a failed test suite. |
| Build / test / startup baseline | Not run: there is no owning command or runner. Zero tests executed; discovery/skips unavailable, not a passing zero-test suite. No running-application evidence exists. |
| `codex --help`, `codex --version` | CLI `0.167.0`; help/version available with pre-existing stale-temp/PATH-alias permission warnings. This differs from the historical version in course prose. |
| Agent mechanism | Current harness exposes ad hoc `spawn_agent` with explicit model selection; project has `multi_agent=true`. No `.codex/agents/` definitions exist. No agent was dispatched to prove runtime access. |
| `opencode --help`, `opencode run --help`, `opencode models --help`, `opencode --version`, `opencode models` | OpenCode `v2.2.5`; headless `run`, `--model`, `--file`, `--format json` supported. Listing includes `xiaomi-token-plan-ams/mimo-v2.6-pro` and `openrouter/xiaomi/mimo-v2.6-pro`. No inference request was made. |
| OpenCode sandbox boundary | Ordinary `--help` failed opening its host log; read-only help/model listing succeeded with host execution. Effective worker tool permissions, auth and quota are unverified; host execution does not inherit Codex's secret denials automatically. |
| Browser QA | No `playwright`/`playwright-cli` executable found on PATH; project Playwright MCP is disabled. Old `.playwright-cli` artifacts do not establish current app QA. T01 must establish an approved working Playwright CLI/MCP path. |
| Tracker | No local tracker found; connected GitHub issue/branch-PR searches returned no tracker. No internal to-do tool is exposed in this session. The user selected the Markdown checklist in this file as the execution tracker. |
| Configuration/data | Existing `.env.example` already declares the three required variable names. No real env/secret file was read, and credential availability was not tested. [Design assets][design] and five [original device photos][photos] exist. |

No course-materials file was read. Help/model metadata checks did not start workers, initialize the app, install dependencies or call either application model.

### Command gate

Do not invent `npm test`, `npm run dev` or other application commands as verified commands. T01 must inspect the generated manifests/wrappers and run the actual compile/build, lint/typecheck, unit/integration/component discovery and startup commands. Record exact commands, working directories, versions, discovery/execution/skip counts and results in its handoff. T06 adds the exact live-capture commands. Later briefs copy those proven commands with the correct test-file filters; unverified command names block dispatch.

Use only the [ADR-000 initialization procedure][init] to populate missing `app/frontend/` and `app/backend/` within this existing scaffold after authorization. Preserve `app/README.md`, repository assets, Git history and unrelated files; do not clone a replacement app. If implementation appears before execution begins, inspect it and revise T01 instead of overwriting it.

## 3. Ownership, models and dispatch

| Owner | Selected model / provider | Responsibility and budget constraint |
|---|---|---|
| O - orchestrator | Capable Sol, requested `gpt-6.1-sol`, through Codex | Architecture, contradiction resolution, shared contracts/packages, briefs, integration, reproduced checks and commit acceptance |
| C - bounded worker | `gpt-6-luna` through Codex's ad hoc subagent mechanism | Narrow implementation/test work; research reports facts/sources/gaps only |
| M - bounded worker | Xiaomi MiMo Pro: `xiaomi-token-plan-ams/mimo-v2.6-pro`, through OpenCode | Narrow implementation/test work with frozen inputs and disjoint files; configured provider availability is metadata-verified, generation/auth is not |
| R - independent reviewer | Fresh capable Sol/Codex agent, not an author | Review actual candidate HEAD, reproduce checks, report defects; cannot accept its own fixes |
| Human | User | Review this draft, authorize execution, accept final evidence and explicitly authorize publication when applicable |

Application models remain the [ADR-selected OpenRouter IDs][models]: `openai/gpt-6-luna-decisions` for direct Decisions HTTP and `openai/gpt-6-luna` for escalation/chat. These are separate from worker/harness model names.

Prefer cheap bounded workers, without imposing spend, test-call-count or evaluation-sample caps. Actual account quotas/access remain operational constraints; no balance, tariff or quota was verified. Stop and escalate to O on a source/spec contradiction, API/type mismatch, out-of-whitelist edit, or repeated failure after a focused repair. Do not let a small worker change dependencies, policy, scope or model to make a test pass. Report account/access failure instead of silently changing providers.

Use ad hoc agents; create no custom role files for this one-off slice. After execution authorization, O verifies model selection, effective restrictions and tool availability before each mechanism's first use. If the harness cannot supply the requested mechanism or enforce needed restrictions, O executes the same matrix sequentially; this does not relax tests or review. MiMo can remain blocked while other accepted tasks proceed.

### Verified OpenCode headless syntax - execution only after authorization

After O has written and reviewed the durable brief, run from the repository root:

```powershell
opencode run --model xiaomi-token-plan-ams/mimo-v2.6-pro --format json --file .agent-briefs/T03.md "Execute only T03 from the attached brief. Report evidence and stop."
```

Use a fresh task session; do not add `--auto` or resume unrelated state. Verify OpenCode's effective file/tool permissions and secret denials first; do not dump credential-bearing configuration. Its host-log requirement is not permission for arbitrary host tools or secret reads. Save exit status/events and the worker report durably, inspect every changed path, and have O reproduce the checks. Availability of `run --help` is not proof that generation or permission enforcement works.

For C/R, use a fresh ad hoc `spawn_agent` with an explicit model and a self-contained brief, without inheriting the entire conversation. All internet/documentation research after authorization goes to C; O defines the questions and decides from the evidence. No agents are launched by this planning task.

## 4. Authoritative dependency matrix

This is the only dependency matrix. Every row also permits its own `.agent-briefs/<ID>-result.md` and `docs/qa/first-slice/<ID>/**`; other paths require a revised brief. O alone stages named paths and commits after accepting evidence. A row's module-level checks are not a claim that the connected user journey works; T13 provides that evidence.

| Task | Observable outcome | PRD/ADR links | Prerequisites | Owner/model | Editable files | Verification and handoff |
|---|---|---|---|---|---|---|
| **T00 - Freeze implementation contracts** | One reviewed contract catalogue names application DTOs/events, operation/token lifecycle, error/status semantics and owners; any missing architectural meaning is resolved in a proposed ADR first | [API][api], [state][state], [review precedence][precedence], [stream contract][stream] | Human authorizes execution of reviewed plan | O / Sol; C only for scoped fact gathering | `docs/qa/first-slice/contracts.md`; necessary named ADR amendments; this plan | Trace every contract to source sections, resolve contradictions before code, bind tracker IDs. No feature code. Commit `Docs: freeze first-slice implementation contracts`. |
| **T01 - Prepare existing scaffold and runners** | Angular/Material and Express skeleton in this checkout starts locally; compatible dependency tuple, npm lockfile and actual commands are recorded | [Stack][stack], [initialization][init], [starter choice][starter], [verification][verify] | T00 | O / Sol; C gathers current peer/API facts | `app/package.json`, `app/package-lock.json`, `app/frontend/**`, `app/backend/**` for scaffold/config only, `app/e2e/**` runner config, `app/README.md`, `.gitignore` only if needed | Verify peers/current docs using Context7 before installation. Establish real test infrastructure without dummy pass tests; report initial counts honestly. Run actual build/lint/typecheck and start both processes; open/screenshot scaffold using verified Playwright. Record commands and any host/cache/browser blocker. Commit `App: initialize Angular and Express workspace`. |
| **T02 - Approve source and instruction inputs** | Separate attributed return/complaint procedure and scenario artifacts have supported scope; reviewed existing photos are safe for upload | [Source rules][sources], [procedure inputs][procedures], [scenario instructions][instructions], [photo integrity][photos] | T00, T01 | O / Sol; C gathers source facts | `app/backend/src/content/procedures/**`, `app/backend/src/content/instructions/**`, `docs/qa/first-slice/T02/**`; original assets read-only | Recheck the named official sources, record dates/sections/conflicts, keep unsupported rules on review route. O accepts content; inspect photos for non-identifying use without editing originals. Source/link/consistency checks; commit `Docs: add bounded procedure and scenario inputs`. |
| **T03 - Deterministic rules** | Form/date/scope rules and monotone review state return specified outcomes without model arithmetic | [AC-03..07][form], [AC-24..28][assessment], [routing][routing] | T00, T01, T02 | M / MiMo Pro | `app/backend/src/domain/**` and adjacent tests | Write failing observable tests first: required complaint text, purchase/receipt ordering, Warsaw calendar boundaries, business/unsupported rules, sticky review and disabled profile. Implement minimum; pass scoped suite and direct module runtime probes; O reproduces. Commit `Backend: add deterministic case rules`. |
| **T04 - Image preparation** | Real accepted files are decoded/oriented/compressed before any model; invalid inputs preserve form fields at the route boundary later | [AC-08..13][form], [image boundary][images], [photos][photos] | T00, T01 | C / GPT-6 Luna | `app/backend/src/images/**` and adjacent tests | Fail tests before code for format/decode/size/orientation; invalid byte mutations are labeled unit inputs. Decode real existing photos, inspect prepared copies and processing limits; never overwrite originals. O repeats actual pipeline probe. Commit `Backend: prepare validated model images`. |
| **T05 - Material intake** | Specified form choices, conditional validation, preview/remove/replace and submission events work as components | [AC-01..13][form], [AC-41/42/46/47/49][ux], [components][ui], [design][design-components] | T00, T01 | M / MiMo Pro | `app/frontend/src/app/features/intake/**` and adjacent tests | Red component tests before implementation; no invented HTTP responses. Verify emitted submission data, keyboard/error focus and retained fields. Scoped tests/build; browser acceptance is T13 after real wiring. Commit `Frontend: add Material case intake`. |
| **T06 - Establish live provider captures** | Separate real Decisions-image, Luna-image escalation and Luna chat streams/follow-up establish working wire structures and a capture procedure | [Capture gate][verify], [wire contract][wire], [escalation][escalation], [stream][stream] | T01, T02, T04 | O / Sol | `app/tooling/provider-probes/**`, `app/tests/fixtures/baseline/**`, `docs/qa/first-slice/T06/**` | Use approved server-process credentials without reading denied env files. Save accepted request and complete response/status/headers/raw stream plus provenance, with credentials excluded. Assert actual answer IDs/optional fields and stream protocol, not invented examples. No production client yet. Commit `Tests: capture real OpenRouter contracts`. |
| **T07 - Decisions HTTP client** | One direct request yields five bounded records and explicit unknown/unavailable behavior | [AC-14..23][assessment], [wire][wire], [observation semantics][observations] | T00, T06 | C / GPT-6 Luna | `app/backend/src/providers/decisions/**`, adjacent tests, `app/tests/fixtures/decisions/**` | Make a fresh accepted real call before creating each mock set; then red capture-derived tests for Noul, optional choice maps, malformed/missing fields and transport failures. Implement/normalize; O repeats real image probe. Commit `Backend: integrate bounded Decisions assessment`. |
| **T08 - Single multimodal escalation** | A genuine image call returns schema-validated support/resolved/remaining issues without legal decisions | [AC-19..23/26/27][assessment], [escalation][escalation] | T00, T06 | C / GPT-6 Luna | `app/backend/src/providers/escalation/**`, adjacent tests, `app/tests/fixtures/escalation/**` | Fresh capture before mocks; red tests for evidence-specific resolution, unresolved/conflicting output, schema error/cancellation. Implement minimum; O repeats real image smoke. No fake probabilities or automatic second attempt. Commit `Backend: add one bounded visual escalation`. |
| **T09 - Canonical case state** | Immutable assessment, trusted history, duplicate-operation ownership, reset and review precedence are enforceable | [AC-31..34][chat], [AC-42..45][ux], [state][state] | T00, T01 | C / GPT-6 Luna | `app/backend/src/cases/**` and adjacent tests | Red observable tests for forged context, overlapping operations, one accepted turn, partial versus complete attempts, review monotonicity and deletion. Implement; runtime module probe and O reproduction. No provider mocks needed. Commit `Backend: add ephemeral canonical case state`. |
| **T10 - Assessment API integration** | Actual multipart request reports stages and one terminal structured result/review status; case read/delete boundaries work | [AC-12/13][form], [AC-14..28][assessment], [AC-41..45][ux], [API][api] | T03, T04, T07, T08, T09 | O / Sol; C may write bounded red tests first | `app/backend/src/assessment/**`, `app/backend/src/routes/assessment.ts`, `app/backend/src/routes/case.ts`, `app/backend/src/server.ts`, corresponding integration tests | Red coordinator/route tests first; only external model mocks after fresh captures. Integrate real modules, then actual API probes with real OpenRouter. Verify duplicate/cancel/error behavior and no successful terminal event after interruption. Start app separately. Commit `Backend: connect initial assessment flow`. |
| **T11 - Conversation backend** | First assistant/follow-ups/summary stream from real Luna with full canonical context; retry never reassesses and review persists | [AC-29..40][chat], [instructions][instructions], [stream/history][stream] | T02, T06, T09, T10 | C / GPT-6 Luna; O accepts security/API decisions | `app/backend/src/chat/**`, `app/backend/src/routes/chat.ts`, adjacent tests, `app/tests/fixtures/chat/**`; `app/backend/src/server.ts` by O only | Fresh real chat capture before mock creation, then red tests for genuine intake, canonical history, review-only tool, errors before/after chunks, stop/disconnect and retry. Integrate route through O-owned entry wiring. O reproduces actual streamed explanation and context-dependent follow-up. Commit `Backend: stream grounded case guidance`. |
| **T12 - Case/chat presentation** | Material case panel, Angular SDK message parts, composer, summary, partial/error/retry and reset components meet frozen contracts | [AC-29/33/38..40][chat], [AC-41..49][ux], [UI][ui], [stream][stream], [design][design-components] | T00, T01, T10 | M / MiMo Pro | `app/frontend/src/app/features/chat/**`, `app/frontend/src/app/features/case-panel/**`, adjacent tests | Red tests first; endpoint doubles require fresh real local response capture. Bind official Angular Chat transport, escaped text and authoritative status. Scoped tests/build; no claim of a full live browser journey before T13. Commit `Frontend: add streaming case components`. |
| **T13 - Connect and demonstrate slice** | Real browser journeys for both scenarios, review, follow-up/summary/reset and failures work with truthful evaluation evidence | [Flows][flows], [form ACs][form], [assessment ACs][assessment], [chat ACs][chat], [UX ACs][ux], [evaluation][evaluation], [QA][ui-qa], [design limits][design-limits] | T05, T10, T11, T12 | O / Sol; bounded C test-writing optional | `app/frontend/src/app/app*`, `app/frontend/src/main.ts`, layout/styles/public assets needed by approved brand, `app/backend/src/server.ts`, `app/e2e/**`, `app/tests/evaluation/**`, `docs/qa/first-slice/T13/**` | Write failing full-flow assertions before entry wiring; run dependency integration suites. Verify actual commands/startup, real OpenRouter E2E and manual Chrome/Edge, screenshots, console/network and call counts. Evaluate five observations on reviewed photos; keep shortcut disabled. Commit `App: connect verified return and complaint slice` only after real flow works. |
| **T14 - Independent review and fixes** | Non-author findings are resolved against the current candidate commit and acceptance evidence | [Quality gates][verify], [security/stream tests][ui-qa], [AGENTS review rules][review] | T13 green; authors idle | R / fresh capable Sol; O assigns bounded fixes | Reviewer read-only except `.agent-briefs/T14-review.md`; each fix gets an explicit new whitelist | Reviewer reads actual diff/HEAD, reproduces relevant checks and inspects captures, server-key boundary, canonical history, review/error/cancel semantics, real QA and design evidence. Fix with reproducing test and focused commit; reviewer rechecks new HEAD. No review-only code commit or self-acceptance. |
| **T15 - Reviewable pull request** | Exact accepted commit has a focused PR with evidence and honest remaining limits | [Commit policy][commits], [verification][verify] | T14 accepted; human accepts evidence; explicit push/PR authorization | O / Sol plus human | `.agent-briefs/T15-pr-body.md`; no new feature code | Prepare title/body, named-path status and exact SHA locally. Publish from this branch only when authorized, verify PR head equals reviewed commit and intended base, link evidence and exclusions. Use structured body or `--body-file` after CLI help. No merge. If publication is not authorized, keep the complete local PR draft. |

## 5. Phases, parallel work and shared files

Use matrix prerequisites as the source of truth. First establish contracts/scaffold/source inputs; then isolated domain/image/intake/case modules; then real captures and provider clients; then route integration and chat; finish with the connected browser slice, independent review and PR gate. The expected critical chain runs through bootstrap, image preparation, captures, Decisions/escalation, assessment, conversation and real QA. There are no duration estimates to substantiate a numeric critical-path schedule yet.

Default to no more than two simultaneous workers, one checkout and explicit disjoint ownership. Domain and image work can overlap once their prerequisites hold; intake and case-state work can overlap; Decisions and escalation clients can overlap after captures. Conversation backend and chat presentation can overlap after the real assessment contract is accepted. Tell each worker exactly which other task is concurrent and which outputs are still unavailable. Review/integration phases wait until authors stop editing.

O serializes package/lockfiles, workspace and browser/proxy configuration, shared DTO/contract changes, environment loader, backend entry point, Angular entry/layout/global theme/public assets, policy/profile registry, source ADR/PRD amendments and tracker updates. Workers propose changes to these hotspots rather than editing them. No shared mutable fixture index: capture provenance stays in each owner's folder. Stop dependent workers when a frozen contract changes and reissue their briefs after the predecessor is accepted.

Do not create a worktree now or by default later. If overlapping edits genuinely require parallel work, request the repository-required worktree approval first; otherwise serialize. Remove approved worktrees using the repository cleanup policy.

## 6. Briefs, tests and acceptance evidence

Immediately before each authorized dispatch, O writes `.agent-briefs/<ID>.md` with: task/outcome; relevant source excerpts and links; accepted contracts and predecessor artifacts/SHAs; exact editable files and concurrent owners; actual command lines/working directories; ordered Red -> Green -> Refactor steps; safe inputs and expected observable results; required report path and escalation conditions. O prepares missing context rather than asking a small worker to reconstruct the architecture. Briefs are durable local files, not temporary prompts; `.agent-briefs/` is currently gitignored, so publish sanitized acceptance evidence under `docs/qa/first-slice/` instead of accidentally committing private briefs.

The worker reports changed files, failing-test evidence before code, command exit codes and counts, startup/runtime observations, remaining gaps and contradictions. It does not commit, publish, accept its work, change scope or choose architecture. O reads the diff, rejects out-of-scope edits, reproduces relevant checks and only then creates the row's focused commit with named staging. Do not rerun unrelated suites without a changed risk or failure.

### Safe demonstration inputs and negative cases

Use existing [photos and their integrity rules][photos]. Start with `laptop-2.webp` for a return and `phone-1.jpg` for a complaint, after T02 privacy review; include the smaller phone photos as evidence-limit cases. The asset register identifies `laptop-1.png` as JPEG bytes despite its extension: verify actual browser MIME/decode behavior and exercise the mismatch error, without renaming or altering the source. Process copies on the server only. Do not generate replacement upload photos or leak filenames, evaluation labels or an expected damage description into model input.

Form data is synthetic: non-identifying device names with unknown exact model, consumer/distance purchase for the primary cases, dates derived from the real Warsaw assessment date within the supported source version, optional empty return reason and a fictional invisible complaint symptom. Supply the customer's actual selected category as the PRD requires; do not add test-only visual hints. Add business/unknown-channel, invalid dates, second/oversize/corrupt image, duplicate operation, material correction, new case, refresh and cross-case isolation cases. Keep private human visual labels separate from the model prompt; do not predetermine what the model must say about a photo.

### Mandatory test boundaries

Pure domain tests use synthetic specification inputs and run before production functions. Before every creation/refresh of a provider or endpoint mock, make a fresh accepted real call and save the exact safe request, status/headers/body or stream and provenance. T06 establishes the procedure; its old captures are not a waiver for later mock creation. Only then derive doubles, including SDK synthetic models/stream helpers. Mark deliberate captured-payload mutations as negative parser inputs; do not describe them as observed provider output.

Integration uses real application modules/routes/store/image processing and mocks only external model APIs under that capture rule. E2E and manual QA use the fully working app and actual OpenRouter Decisions, multimodal escalation and chat endpoints, without stubs/interception/fake success. A real safe negative provider request may establish an actual error; report the request/configuration accurately and restore the selected model afterward. Do not point the app at a fake host to simulate a live test. Unobserved provider outages remain a named coverage gap, not a mocked live pass.

For each runtime change distinguish compilation/build, tests (discovered/executed/skipped), actual startup and applicable manual module/API/UI verification. For the connected slice, use verified Playwright CLI/MCP with real inputs and inspect screenshots of intake/errors/progress, chat/panel, review, partial/error/retry and reset; check focus, Polish text, console/network, actual results and retained state against [design components][design-components] and [unmeasured-state limits][design-limits]. Intermediate module/component checks do not replace T13's actual browser acceptance. Build success alone proves neither startup nor the flow.

Prove that one case does not re-run Decisions/escalation during chat or retry using real request/provenance evidence. Check full-context follow-up, source sections, no legal promises, no staff action, sticky review after correction/error and no restoration after refresh. Live assertions check permitted behavior and structured state; human inspection evaluates the generated explanation rather than asserting a predetermined stochastic sentence.

Never read denied env/secret paths or copy a real key into a brief, capture, prompt, client bundle or commit. Use authorized server-process credential provisioning; inability to obtain that runtime access blocks real captures/live QA. The empty `.env.example` does not establish that real credentials are absent or available.

## 7. Failure, rollback and smaller fallback

On a failed prerequisite, leave dependent rows open and report the actual blocker in this tracker. Preserve all unrelated work and the last accepted commit. Discard only the worker's explicitly identified unaccepted edits after diff review, or create a focused revert of an accepted faulty task; never blanket-reset/clean the checkout. Reproduce the defect before changing an assertion. Cancel in-flight operations and clear only synthetic case state when restarting after a fix; rerun affected checks and startup, then the affected real journey.

If cheap-worker/harness access fails, O performs the same bounded rows sequentially with the same evidence gates. If time/tools are insufficient, propose a smaller demonstration of the real laptop-return workflow and review path, retaining required Decisions, escalation, real streamed follow-up and reset; defer complaint-demo/evaluation breadth explicitly. Obtain a scope amendment before treating that smaller result as accepted, and retain incomplete criteria in this tracker. Do not replace real integrations with fixtures or enable unvalidated thresholds. Missing real model/browser access blocks a demonstrable runtime slice; it is not solved by a green build or a mocked video.

After fixes, R must review the current candidate SHA, not an old head or silent bot thread. Human review of final evidence is required. T15 prepares the complete reviewable PR locally before any permission question; execution authorization must explicitly include push/PR publication to publish it. Neither this plan nor later PR creation authorizes merge.

## 8. Execution tracker and review gate

This checklist is the single execution-status tracker selected by the user. Matrix rows above define dependencies; reports contain evidence rather than a second status board. Mark a task done only after O accepts its required checks/handoff, and record the accepted commit and report link beside its checkbox during execution.

- [x] P00 - Inspect current checkout, approved sources, tool mechanisms and baseline commands.
- [ ] P01 - Human reviews this draft and authorizes execution.
- [ ] T00 - Freeze implementation contracts.
- [ ] T01 - Prepare existing scaffold and runners.
- [ ] T02 - Approve source and instruction inputs.
- [ ] T03 - Deterministic rules.
- [ ] T04 - Image preparation.
- [ ] T05 - Material intake.
- [ ] T06 - Establish live provider captures.
- [ ] T07 - Decisions HTTP client.
- [ ] T08 - Single multimodal escalation.
- [ ] T09 - Canonical case state.
- [ ] T10 - Assessment API integration.
- [ ] T11 - Conversation backend.
- [ ] T12 - Case/chat presentation.
- [ ] T13 - Connect and demonstrate slice.
- [ ] T14 - Independent review and fixes.
- [ ] T15 - Reviewable pull request, subject to publication authorization.

**First bounded task after authorization:** T00. Freeze and review the application contracts/predecessor requirements before feature implementation or implementation-worker dispatch.

**Unresolved readiness checks, not invented architecture:** exact installable Angular/SDK/provider peers and actual scripts (T01), usable Playwright access (T01), refreshed procedure-source applicability and safe image review (T02), effective OpenCode restrictions/auth and worker-model access (before first dispatch), and real OpenRouter wire behavior/runtime credentials (T06). Any semantic contradiction becomes a proposed ADR change for review before its dependents continue. No additional product decision is assumed by this draft.

**Review gate:** accept or amend the demonstrable scope, matrix, model/provider choices and readiness gates. No implementation, worker dispatch, publication or merge has been authorized or performed by writing this plan.

[flows]: ../PRD.md#4-main-flows
[form]: ../PRD.md#form-and-image
[assessment]: ../PRD.md#initial-assessment-and-routing
[chat]: ../PRD.md#chat-and-explanation
[ux]: ../PRD.md#ux-session-and-boundaries
[sources]: ../PRD.md#83-source-register-and-bounded-procedure-rules
[procedures]: ../PRD.md#84-procedure-and-instruction-content-supplied-to-the-agent
[instructions]: ../PRD.md#116-separate-scenario-instruction-specifications
[precedence]: ../PRD.md#113-recommendation-categories-and-precedence
[stack]: ../ADR/000-main-architecture.md#3-architecture-and-repository-shape
[state]: ../ADR/000-main-architecture.md#5-data-models-and-lifetime
[api]: ../ADR/000-main-architecture.md#6-application-api-contracts
[init]: ../ADR/000-main-architecture.md#7-configuration-and-initialization
[models]: ../ADR/000-main-architecture.md#3-architecture-and-repository-shape
[verify]: ../ADR/000-main-architecture.md#10-testing-and-acceptance
[wire]: ../ADR/001-decision-assessment.md#4-exact-external-boundaries
[observations]: ../ADR/001-decision-assessment.md#five-application-observations
[routing]: ../ADR/001-decision-assessment.md#code-owned-routing
[images]: ../ADR/001-decision-assessment.md#image-preparation-boundary
[escalation]: ../ADR/001-decision-assessment.md#one-ordinary-multimodal-escalation
[evaluation]: ../ADR/001-decision-assessment.md#6-evaluation-stability-and-failure-behavior
[starter]: ../ADR/002-angular-streaming-ui.md#3-starter-and-component-comparison
[ui]: ../ADR/002-angular-streaming-ui.md#4-components-state-and-rendering
[stream]: ../ADR/002-angular-streaming-ui.md#5-streaming-and-model-contracts
[ui-qa]: ../ADR/002-angular-streaming-ui.md#7-testing-and-technical-acceptance
[design]: ../design-guidelines.md
[design-components]: ../design-guidelines.md#components
[design-limits]: ../design-guidelines.md#verification-and-limits
[photos]: ../../assets/example-images/README.md
[review]: ../../AGENTS.md#code-review-rules
[commits]: ../../AGENTS.md#commit-rules
