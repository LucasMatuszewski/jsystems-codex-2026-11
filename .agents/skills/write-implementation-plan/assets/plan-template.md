# {{Application}} - {{Demonstrable slice}}

**Status:** Draft - awaiting human review.
**Date / worker mode:** {{date}} / {{built-in only OR external CLI only}}
**Baseline:** {{branch, SHA, worktree status, inspection date; observation, not an execution pin}}
**Authorization:** {{existing permissions and pending gates, separately scoped}}

## Outcome and authority

{{One connected user journey with observable result; explicit exclusions. Link exact PRD criteria, accepted ADR sections and relevant design guidance. Record consequential session corrections and unresolved questions without duplicating specifications.}}

## Actual checkout and baseline

| Inspection or exact command / working directory | Observed result and limitation |
|---|---|
| {{status, scoped source/entry points, manifest/wrapper, tests/CI}} | {{what exists, unrelated work to preserve}} |
| {{actual build and test commands executed}} | {{exit status, discovery/execution/skips, failures; unavailable is not pass}} |
| {{actual startup command, if authorized and applicable}} | {{startup evidence separate from build; no guessed command}} |
| {{worker/tool help, version and any authorized dispatch probe}} | {{installed vs tested, model/provider, restrictions and auth uncertainty}} |

{{If scaffold-only, name absent infrastructure and the approved initialization reference; discover generated commands in the bootstrap task. If implementation exists, use it.}}

## Ownership and selected worker workflow

{{Expand the chosen mode reference only. Record orchestrator, cheap bounded workers and independent reviewer; actual model/provider IDs or explicit verification gate, mechanism and budget/account constraints. State how CLI/native availability will be verified without dispatching during planning.}}

## Authoritative dependency matrix

| Task | Observable outcome | PRD/ADR links | Prerequisites | Owner/model | Editable files | Verification and handoff |
|---|---|---|---|---|---|---|
| {{unique ID + bounded task}} | {{observable deliverable}} | {{precise criterion/section anchors}} | {{IDs and accepted predecessor artifacts}} | {{owner + model/provider}} | {{exact allowlist; generated outputs separately}} | {{Red evidence before code, applicable checks/runtime evidence before any required commit gate, handoff path and focused commit boundary}} |

{{Instantiate only needed rows. Cover infrastructure/contracts, behavior tests, minimal implementation, composition checks, real runtime/manual journey, independent review/fixes and finished-slice PR preparation/publication gate. Do not manufacture feature work for a documentation slice.}}

## Phases and coordination

{{Explain the matrix's critical path and allowed concurrency without a second dependency schedule. Name shared-file hotspots and their serialized owner. One checkout by default; repository approval and cleanup for any necessary worktree. Every worker learns concurrent owners and unavailable inputs.}}

## Dispatch and acceptance

{{Durable project brief path, generated just before authorized dispatch; exact excerpts/contracts/predecessors/files/steps/inputs/commands. Worker reports observed results, failures and changed files. Orchestrator checks diff and reproduces relevant checks, then integrates and commits according to repository policy. Independent reviewer checks the current candidate SHA after authors stop editing.}}

## Verification and failure handling

{{Safe test inputs and meaningful happy/error cases; project-specific external-service/mock/capture rules; credential boundaries; actual build/test/startup/manual commands or explicit discovery gate. Separate intermediate module checks from connected user-flow acceptance. Screenshots/design comparison where applicable. Unobserved failures remain coverage gaps.}}

{{On failure, block dependents and preserve unrelated work; repair/revert only identified task changes. State retry/escalation stopping conditions. Propose a smaller real demonstrable fallback and required scope approval; retain incomplete criteria. Never silently replace a required integration with a mock or a different provider.}}

## Tracker and review gate

{{Link the existing tracker; if the user selected this checklist fallback, instantiate one checkbox per matrix task and record evidence/accepted commit on completion. Do not duplicate external execution status here.}}

**Unresolved decisions / readiness:** {{semantic decisions vs implementation access checks; owner and gate}}
**First bounded task:** {{first unfinished task whose prerequisites can be accepted; refresh on revision}}
**Review gate:** {{human review of draft; pending execution/dispatch/publication/merge permissions, preserving already granted scope}}
