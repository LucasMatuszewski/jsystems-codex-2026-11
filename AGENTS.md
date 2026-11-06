# Repository Guidelines

## Project

This is a **course project** for the "Codex - od zera do zespołu agentów AI" training organized by JSystems, 3 days (4-6.11.2026), remote on Windows 11 VMs. Codex is the primary agent, with Claude Code as a comparison. The application follows research -> PRD -> ADR -> plan -> implementation; its stack is defined by this branch's PRD and ADRs.

This branch targets the PRD's hardware-service PoC with Angular and Angular Material. Initialize the application only after its implementation plan is approved.

Agent communication and repository documentation use English. Customer-facing UI and model responses use Polish as required by the PRD; preserve Polish diacritics and use ASCII punctuation. Use synthetic case descriptions and reviewed non-identifying test photos; never read or publish secrets, participant data or customer records.

**Key docs** (created during the course - load only when in doubt):
- `docs/PRD.md` - product requirements and acceptance criteria
- `docs/ADR/` - Architecture Decision Records
- `docs/design-guidelines.md` - design system and tokens
- `docs/plans/-implementation-plan.md` - implementation dependencies and execution checklist

---

## Repository Layout

```
app/                 Application built during the course (start: empty scaffold)
assets/              Design tokens, logo, favicon
docs/                PRD, ADR, design system
course-materials/    Notes, scripts, examples, research
```

**Do not read `course-materials/` on your own.** It holds teaching examples from this and earlier courses: sample PRDs, ADRs, prompts and agent instructions. They are not requirements or conventions for this app. Do not browse, search or index it during normal work; open a file there only when the user names it or asks for course material.

---

**`README.md` is the participant entry page.** Do not add an update-notes section, changelog or "what's new" list to its top before the course has started. During the course the trainer adds update notes there; add them only when the trainer asks.

---

## Agent Workflow

### Research delegation

Delegate external research, library/API documentation queries and web searches to Luna subagents. Sol scopes the questions, reads repository guidance/diffs and makes decisions. Luna reports findings, sources, limitations and open questions; no recommendations or decisions. An explicit no-agent instruction takes precedence; do not dispatch agents during planning or review when the user has prohibited it.

### Documentation and command discovery

Always use Context7 first for library, framework and API documentation. Use Web search only when the needed information could not be found in Context7; an unavailable Context7 connection is not evidence that the documentation is absent.

For CLI tools, start with the built-in `--help` for the specific tool or subcommand (for example, `gh pr create --help`). If help is insufficient, use Context7 next, and Web search only as the last resort when both sources are insufficient.

### When implementing new or refactoring functionality
1. Read the relevant PRD and ADR files for the affected area.
2. Define the expected behavior from the specification before writing or changing any code.
3. Confirm the actual application checkout and inspect source, build descriptors, call sites and dependencies before proposing commands or APIs. Identify build, test and startup commands from that project, using its wrapper when available; do not assume a framework, build tool or runtime version.
4. Establish missing or ambiguous requirements with the user and record agreed application scope in its PRD before implementation. Routine course-document changes do not need an application PRD or ADR.
5. Verify library APIs against current documentation with Context7 (`resolve-library-id`, then `query-docs`). Match examples to the installed package version; AI SDK 7 differs from older releases.
6. Use the project's selected package manager and actual shell (PowerShell on participant VMs). Inspect `package.json` before choosing commands. Do not scaffold a finished app before the PRD and ADR exercise.

### TDD Rules
For every feature and bug fix:
1. Start from the specification, not the existing implementation.
2. Write or extend tests **before** production code.
3. Run the new tests and confirm they fail for the expected reason.
4. Implement the minimum code needed to make them pass.
5. Run the full verification suite for the changed scope.
6. Refactor only while tests stay green.
7. **Manually validate the running application** (see Manual QA below). Automated tests, including E2E, can produce false passes; exercise the real app too.

If the area has no suitable test infrastructure yet, add it as part of the task - do not silently skip tests.

Before creating or refreshing any unit/integration provider, endpoint or database mock, make a fresh real call with authorized synthetic data. Save the accepted request and complete response (status, headers, body or stream), or rows/schema, with date, target and model/service version, excluding credentials. Derive mocks from that capture; missing safe capture blocks mock creation. AI SDK mock models and stream helpers may replay capture-derived cases afterward; never invent an unverified wire shape.

For behavior-preserving legacy refactoring, write characterization tests against the original code and get them green before changing it. Assert observable inputs, outputs, state changes and errors rather than private methods or the current class layout. Demonstrate that critical assertions detect a controlled behavioral mutation, then revert that mutation. Existing tests may protect a pure refactor; a new behavior or bug fix still requires Red -> Green -> Refactor.

Investigate production code and fixtures before changing a failing assertion. Do not weaken, disable or delete tests to conceal a defect. Change expected behavior only when the specification supports it, and explain why.

### Manual QA (required after every task that affects the running app)

Use the application's actual runtime and verified commands. The browser flow below applies to web applications; desktop applications need their real UI, and command-line tools need observable CLI checks.

Use **Playwright CLI or the configured Playwright MCP** to drive the real running app like a human tester:

1. Start the app with its verified project command and open it in the browser. Record successful startup separately from compilation and test execution.
2. Take a screenshot of every screen you touched.
3. Exercise the affected flow end-to-end. For chat changes, open the chat, send a message, check streaming/errors and test additional agreed features.
4. Verify the flow actually works: correct navigation, correct data displayed, no console errors, Polish UI text.
5. Compare screenshots with the agreed brand reference and `docs/design-guidelines.md` once created. Do not invent a reference when the greenfield scaffold has none.
6. Report what you validated (steps + screenshots) in your task summary. If anything looks or behaves wrong, fix it before committing.

### Verification (required before every commit)

Verify only the scope relevant to your change. If the change affects runtime behavior, confirm the app starts correctly.

**Test Strategy:**

| Type | Mocks | Who |
|---|---|---|
| Unit | All dependencies isolated; provider/endpoint mocks require fresh captures | Task owner |
| Integration | Only external model APIs, using fresh captures | Backend task owner |
| E2E and Manual QA | NOTHING: real stack; every model call uses real OpenRouter | Tester/reviewer |

Every model interaction in E2E and Manual QA must use the real OpenRouter Decisions or conversational endpoint; no stubs, response interception or mocked success. Invalid-input and local-only flows must make no model calls where the PRD requires none. Do not impose spend, call-count or evaluation-sample caps on PoC verification.

**Verification:** For runtime changes, start the real application and finish with Manual QA. Record compilation/build, test execution and startup as separate checks, including discovery counts and skips. A successful build or E2E run alone does not establish that the app works. Documentation-only changes use diff, link and consistency checks and do not require application startup. Fix errors and warnings introduced by the change; report pre-existing failures without hiding them.

**Env Vars:** See `.env.example`. `OPENROUTER_API_KEY` is server-only and required for real captures and live tests; later capture-derived unit/integration replay needs no key. Set `LLM_MODEL` and `DECISION_MODEL` to the provider's actual IDs. Store real values locally using the agreed loader. Never expose a key in a client bundle, prompt or commit. Missing real credentials block live verification; never report a mocked E2E pass.

### Sub-agents
- Prefer ad hoc subagents for one-off work. Reuse a named role only after checking its model and permissions; add a short custom definition only for a recurring need.
- Delegate bounded tasks with explicit dependencies and disjoint file ownership. The coordinating agent reviews diffs and verification evidence before committing.

### Commit Rules
- Commit only after verification passes and the changed scope is in a working state.
- Keep commits focused: one verified logical change per commit. Inspect `git status` and stage named paths; never use blanket staging.
- Format: `Area: short summary` (e.g. `Backend:`, `Frontend:`, `Docs:`)
- Do **not** push to remote unless the user explicitly asks.

### Git Worktrees
- Use this checkout by default. Ask before creating any worktree unless the user explicitly requested one, including for parallel agent work.
- Remove worktrees with `git worktree remove <path>` and run `git worktree prune` when done.

### Completion Criteria
A task is complete only when:
- Implementation matches the relevant PRD, ADR, and design guidance
- Tests were written first and pass honestly
- Verification for the changed scope passed with no errors or warnings
- Runtime changes passed Manual QA on the actual UI, CLI or API, with screenshots or command/request evidence and the application's own visual reference where applicable; documentation-only work passed its scoped checks
- The commit message is focused and the repository is in a consistent, reviewable state

## Code Review Rules

- Report newly introduced correctness or security defects with a concrete failing scenario and affected lines; distinguish verified findings from missing evidence.
- Review the actual application against its agreed PRD/ADRs and source. Course examples are requirements only when explicitly selected; course-documentation changes need scoped checks, not an unrelated app build.
- Prioritize authorization, secret handling and streaming/error paths when affected. Use synthetic data and never suggest publishing credentials or participant identifiers.
- Do not weaken tests to satisfy a finding. State which checks actually ran and review the current PR head; an old-head review or silence is not approval.
- When a PR changes `course-materials/`, review those changed teaching files within the PR scope; do not browse unrelated course-library files.
