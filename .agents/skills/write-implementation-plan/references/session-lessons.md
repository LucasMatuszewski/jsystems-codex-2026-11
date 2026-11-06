# Lessons from the planning session

Read when drafting or substantially revising a plan. These are decision checks extracted from the session, not requirements for every future application.

| Friction or correction | Reusable rule |
|---|---|
| Teaching examples could be mistaken for application requirements | Identify the actual application and authoritative documents before searching. Respect excluded course/example folders. |
| An empty application had no owning build/test commands | Report absent infrastructure as absent; make command discovery/bootstrap a predecessor. Never present guessed commands or zero discovered tests as verification. |
| Earlier baseline snapshots became stale as execution advanced | Refresh branch, HEAD, status and predecessor evidence before dispatch. Preserve later work. Recalculate the first open task and readiness gate after tracker changes. |
| ADR files said Proposed despite explicit user acceptance | Reconcile recorded approval with document status. Missing approval is a question, not an opportunity to self-approve architecture. |
| Agent language and UI language conflicted | Record the user's language decision separately for agent communication, documentation and customer UI. Do not generalize this session's English/Polish choice. |
| A ready-made starter was dismissed before sufficient research | Search the requested options and report evidence/limits before declaring absence. Do not force a fresh replacement application. |
| Threshold hypotheses looked like validated policy | Route with code-owned policy; preserve validation prerequisites and named uncertainty. Avoid turning confidence into a guarantee. Only include this when the slice has model-based decisions. |
| Streaming, review and failure semantics differed between documents | Resolve terminal events, incomplete/partial output, retry, canonical state, cancellation and persistent review consequences at the architecture boundary before parallel work. Apply only relevant semantics. |
| Provider requests could have been mocked from memory | Preserve the agreed evidence policy: when required, accepted live request/response captures precede mocks; real E2E/manual verification cannot be replaced with fixtures. Missing credentials block live evidence. |
| SDK adapters and nearby API names were easy to conflate | Verify exact protocol, installed adapter/version and model capability. A chat endpoint does not automatically support a separate decision API. |
| A tracker was unavailable | Ask once for the existing tracker; use an approved in-plan checklist fallback. Keep one execution-status source. |
| Worker role definitions could become unnecessary ceremony | Prefer ad hoc bounded briefs. Reuse a named role only after inspecting model/permissions. Create a role file only for recurring value. |
| CLI installation/model listing looked like worker readiness | Distinguish installed, help-verified, configured, authenticated-by-user, successfully invoked and permission-enforced. Version/help is not a functional probe. |
| CLI workers could inherit broader access than the host | Verify the actual child process context and restrictions. A brief's file whitelist is a work contract, not OS enforcement. Do not bypass restrictions to make dispatch work. |
| Shared contracts and integration checks were easy to miss | Freeze shared interfaces first, put all prerequisites in one matrix, then verify composed modules. Serialize shared files even if more workers are available. |
| Green automated checks could overstate completion | Report build, test counts/skips, startup, real runtime/manual flow and independent review separately. A module check is not acceptance of an unconnected UI journey. |
| Cheap model use was mistaken for a need to impose quotas | Record user/account constraints accurately; do not invent spend, call-count or sample caps. Use escalation criteria rather than arbitrary budgets. |
| Approval could accidentally expand to implementation/publication | Track each permission and its scope. A plan/documentation commit is not authorization to initialize, dispatch, publish an application PR or merge. |

Do not encode the source session's Angular/OpenRouter stack, paths, model IDs, specimen photos or current task statuses as defaults. The new session and owning documents decide those.
