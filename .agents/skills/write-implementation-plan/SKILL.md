---
name: write-implementation-plan
description: "Create or revise a reviewable implementation plan for one demonstrable application slice, grounded in session decisions, approved specifications and the actual checkout. Supports built-in subagents only or external CLI workers only. Use for planning and plan consistency review, not implementation."
---

# Write Implementation Plan

Produce a draft a human can approve and a capable orchestrator can execute without rediscovering architecture. This is a portable workflow for Codex, Claude Code and other capable hosts; product-specific metadata is optional outside Codex.

## Start with the session

Before outlining tasks, read the available conversation for the original planning request, subsequent corrections, approvals, prohibitions and unresolved answers. Reconcile those with the current repository. Earlier summaries, observed commands and approvals are dated evidence, not proof of current state. Do not claim access to missing history; ask only when that missing decision affects the plan.

Read [session lessons](references/session-lessons.md) once when creating or substantially revising a plan. Carry forward the user's actual decisions, not this skill author's example stack or providers. Distinguish application models from coding-worker models and communication language from product UI language.

Select exactly one worker mode:

- **Built-in subagents only:** read [built-in workflow](references/built-in-agents.md). Default when the user has no preference.
- **External CLI workers only:** read [CLI workflow](references/external-cli.md). Includes Codex CLI, OpenCode, Claude Code and `agy`/Google Antigravity when the installed tool supports the needed operation. No native subagent dispatch, including nested dispatch by CLI workers.

Do not silently blend modes. If the requested mechanism is unavailable, retain the matrix and offer sequential execution by the orchestrator; changing mode requires the user's agreement. A planning request does not authorize workers, inference probes, scaffolding, installation, commits or publication. Respect any explicit no-agent instruction, including for research. Help/version checks are command discovery; they do not establish authenticated execution. Run harmless dispatch probes only when authorized.

## Ground the plan

1. Read applicable repository guidance, including nested guidance for files in scope. Find the application's own PRD, accepted ADRs and design guidance. Search narrowly, excluding teaching/example collections unless explicitly selected. Ask for paths only if missing or ambiguous.
2. Inspect branch, HEAD, working-tree status and scoped diffs, actual application entry points, manifests/wrappers, lockfiles, source, tests and CI. Preserve unrelated work. Use an existing scaffold or approved legacy checkout; initialize missing parts only through the approved architecture and later execution authorization.
3. Discover commands from the owning project and CLI help. Record commands actually run, working directory, result, baseline failures and unavailable checks. Separate build, tests and startup. No manifest/runner means no verified application command or passing test suite. Label proposed commands and later discovery gates explicitly.
4. Resolve semantic contradictions before dependent implementation. Link exact acceptance criteria, ADR sections and design sections instead of copying them. Missing architecture belongs in a proposed ADR, not a plan assumption. Ask targeted questions for consequential gaps; continue independent inspection while waiting. Keep routine reversible choices and test-harness design with the capable orchestrator rather than sending every unspecified edge to the user. Do not change source requirements or mark ADRs accepted without authorization.
5. Verify current library/API details only when needed, using the repository's research policy. Prefer current primary documentation, match installed versions, and resolve a Context7 library ID before querying it when Context7 is used. Separate unavailable tooling, missing documentation and unverified behavior. Research workers collect facts, sources and gaps; the capable orchestrator decides.

## Build a small executable plan

Use [the shared plan template](assets/plan-template.md), expanding only the selected mode reference. Scale detail to one connected user journey. Keep **one authoritative dependency matrix** with these columns:

`Task | Observable outcome | PRD/ADR links | Prerequisites | Owner/model | Editable files | Verification and handoff`

Each row needs a bounded deliverable, exact file ownership, predecessor outputs, acceptance evidence and one focused commit boundary. Use small verified phases; serialize contracts, lockfiles, migrations, entry points and integration. Parallelize only independent inputs and disjoint edits, in one checkout by default. Identify critical path and shared-file hotspots without inventing duration estimates. Follow repository approval/cleanup policy if a worktree is truly needed.

Plan failing observable-behavior tests before production changes; for behavior-preserving refactoring, characterize existing behavior first. Add missing test infrastructure as an explicit predecessor. Include integration checks after dependent modules, actual startup, manual runtime verification, independent review of the current candidate and a finished-slice PR gate. Documentation-only work needs scoped document checks, not an unrelated application build. Never use a green build as evidence of a working flow.

Apply the owning repository's per-commit runtime/manual gates in each runtime row; do not schedule its commit before mandatory checks in a later row. Unconnected modules remain provisional until the connected journey is verified.

State the project-specific live-service/mock policy, safe inputs, credentials boundary, provider failures and honest coverage gaps. Where the user requires real E2E/manual services and fresh accepted captures before mocks, preserve that rule and order capture tasks before dependent doubles. Do not impose that provider policy on unrelated projects or invent wire formats. Never put real keys or private records in plans, briefs or captures.

Record model, provider, mechanism, availability evidence and budget constraint for each owner. Prefer cheap workers for bounded implementation/test work, with a capable orchestrator deciding architecture and accepting results. Do not invent spend/call/sample limits when the user has not requested them; distinguish actual account limits. Escalate scope contradictions, unavailable capabilities, permission failures and repeated unsuccessful repairs rather than letting a worker change the agreed design.

After execution is authorized, prepare [a durable task brief](assets/task-brief-template.md) just before dispatch, with the then-current contracts, excerpts, accepted predecessor outputs, exact edits, commands and expected observations. Workers report evidence and contradictions; they do not accept their own work. The orchestrator reads diffs and reproduces relevant checks before integrating/committing under repository policy. Prefer ad hoc assignments; custom role files need a recurring use, not a tutorial example.

## Save and review

Use the existing execution tracker. If none is available, use one Markdown checklist in the plan when the user accepts that fallback; do not create an external tracker without authorization. Matrix dependencies remain authoritative; reports are evidence, not competing status boards.

Save to the user's destination or `docs/plans/-implementation-plan.md`. Mark a new draft **Draft - awaiting human review**. In read-only Plan mode, return the complete draft and destination; save only when writing is permitted. Revising an accepted plan must distinguish already accepted/completed work from changed, review-pending scope.

Before handoff, check links/anchors, status and approval consistency, unique task IDs, acyclic prerequisites, file overlap, capture/test ordering, integration gates, current-HEAD review and truthful command evidence. Recompute the first unfinished task and next gate from the tracker; do not leave obsolete readiness checks or boilerplate next steps after progress. Include rollback limited to the task's changes, a smaller explicit fallback requiring scope approval, and any live-verification blocker.

Finish with the saved plan link (or complete unsaved draft), unresolved decisions, first bounded task and review gate. Plan acceptance, execution, agent dispatch, push, PR publication and merge are separate permissions; apply existing authorization rather than asking again. A request to accept/commit/push a plan does not itself authorize application implementation.
