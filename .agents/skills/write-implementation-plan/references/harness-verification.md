# Authoring checks - 2026-11-06, Windows/PowerShell

This is evidence for example command shapes, not an installation or account guarantee for future plans. No application implementation or provider endpoint was exercised.

| Mechanism | Direct evidence | Limit |
|---|---|---|
| Codex CLI 0.167.0 | `codex exec --help`, version, then `exec --skip-git-repo-check --sandbox read-only --ephemeral --model gpt-6-luna --cd <isolated-folder> --json <prompt>`; read synthetic brief/input, returned `DISPATCH_OK: 42`, exit 0 | PATH differed between sandbox and host; executable resolved on host. Read-only probe does not establish source-editing access or every restriction. |
| OpenCode 2.2.5 | `run --help`, `models --help`, `models`; `run --model xiaomi-token-plan-ams/mimo-v2.6-pro --format json --file brief.md <prompt>` from isolated folder; read input, returned `DISPATCH_OK: 42`, exit 0 | Sandbox help could not open host log; host invocation worked. No permission bypass used. Prompt compliance does not prove file access enforcement. |
| Claude Code 2.1.314 | Help/version; installed CLI documents `--print`, `--model`, `--agent`, `--agents` | User reports unauthenticated. No generation/authentication attempted. |
| agy 1.4.7 | Installed help/version; documents `--print`/`-p`, `--model`, `--sandbox`, `--mode`, output formats | User reports unauthenticated. No generation/authentication attempted; do not infer publisher identity from the executable name. |
| Native Codex harness | Exposed `spawn_agent` supports ad hoc delegation and explicit model field; a fact-only Luna research task completed | Capability is harness-specific; fork/context constraints may limit model overrides. Not proof of Claude/Antigravity native agent support. |

Both CLI probes used a synthetic arithmetic input and forbade edits, nested delegation and external tool calls. Their output establishes only the observed invocation/read/result path. No real credentials, private records or application API calls were captured.

Context7 research resolved before querying: `/openai/codex`, `/anomalyco/opencode`, `/websites/code_claude`. Results helped locate command documentation; installed help and completed probes were the primary evidence for local command behavior. Antigravity search results did not independently establish publisher identity, so no similarly named repository was endorsed as official.

An independent Codex/Sol pass used the skill to create two draft plans from isolated synthetic fixtures: an existing Python CLI in built-in-only mode, and a scaffold-only contact form in external-CLI-only mode. It left all 12 original fixture files unchanged and did not dispatch implementation workers. The plans kept separate worker modes, one dependency matrix/checklist each, exact source links, truthful baseline evidence and review/authorization gates. External help-access failures remained readiness gaps. Inspection prompted two clarifications: routine test-design choices belong to the orchestrator, and mandatory runtime checks precede their commit boundary. Final package validation and internal-link checks passed after those edits.
