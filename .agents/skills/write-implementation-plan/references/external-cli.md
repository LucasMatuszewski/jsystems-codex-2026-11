# Version 2 - External CLI workers only

The capable orchestrator coordinates separate headless CLI processes. Do not use native subagents for workers, research or review in this version, or allow CLI workers to create nested children. Separate processes can use the same authenticated CLI with different task-specific models; the executable need not match the orchestrator's host.

## Discovery and permission boundary

Check executable path, version, relevant subcommand help, configured model identifiers and account access without exposing tokens. Use Context7 (resolve then query) and current official docs if help is insufficient. Do not authenticate an unconfigured tool or install/upgrade it without authorization. `agy` can refer to different products/versions: inspect the installed binary rather than assuming either a GUI launcher or headless worker.

Record help verification separately from an authorized functional probe. A useful probe reads a synthetic brief/input in an isolated folder, returns a predictable result and makes no edits, nested dispatch or external application calls. A successful probe proves invocation/brief delivery, not write isolation, implementation ability or provider correctness. Verify required restrictions separately before dispatching real source work. Do not copy credential configuration into a brief or assume the host sandbox constrains a child CLI.

## Dispatch patterns

These PowerShell shapes need re-verification against the installed version; variables are task inputs, not literal model IDs. Use a fresh session, correct working directory and durable reviewed brief. Do not use permission-bypass/auto-approve switches or resume unrelated sessions.

```powershell
# Codex: first inspect `codex exec --help`.
# Start with read-only for a probe/reviewer; workspace-write only for authorized edits.
Get-Content -LiteralPath $briefPath -Raw | codex exec --cd $checkout --model $workerModel --sandbox read-only --json -

# OpenCode: first inspect `opencode run --help` and `opencode models`.
# From the approved checkout; --file attaches a durable brief.
opencode run --model $workerModel --format json --file $briefPath "Execute only the attached brief. Do not delegate. Report evidence and stop."

# Claude Code: first inspect `claude --help`; account/model access must exist.
Get-Content -LiteralPath $briefPath -Raw | claude --print --model $workerModel

# agy/Antigravity: only if this installed CLI documents these exact flags.
$taskBrief = Get-Content -LiteralPath $briefPath -Raw
agy --print $taskBrief --model $workerModel --sandbox
```

The CLI brief must prohibit nested agents and shared-file edits. Output/report writing must be explicitly allowed, with sanitized logs. Capture exit status and the actual final outcome; a zero process exit alone is insufficient. Do not treat a prompt allowlist as technical access enforcement. If restrictions cannot be enforced to the repository's required level, stop that dispatch and use an agreed sequential fallback.

For source-editing Codex tasks, select the approved workspace-write policy only after verifying its effective restrictions. For other CLIs, use their own verified permission mechanism; do not invent equivalent flags. Where CLI help does not provide a safe brief-file/stdin mechanism, use an approved structured invocation rather than unsafe shell string interpolation.

## Coordination and review

The matrix owns dependencies and file whitelists. Parallel CLI processes share the checkout: disjoint tasks only; serialize packages/lockfiles/contracts/migrations/integration and tracker updates. The orchestrator receives reports, inspects diffs and reproduces relevant checks before accepting/committing. Use a fresh external CLI process with a capable model for independent review of the current candidate; if unavailable, record pending independent human/later review. Do not substitute a native review agent silently.

On access/model failure, report the exact failed stage, preserve the task's work and stop dependents. No automatic authentication, provider substitution, permission widening or mode change. The capable orchestrator may execute the same matrix sequentially if permitted, preserving the review gap until independent review is possible.

## Documentation sources

Consult current [Codex CLI documentation](https://developers.openai.com/codex/cli), [OpenCode CLI documentation](https://opencode.ai/docs/cli/), and [Claude Code CLI reference](https://code.claude.com/docs/en/cli-reference) / [subagent reference](https://code.claude.com/docs/en/sub-agents) as needed. Establish `agy`'s publisher/source from the actual installation before treating a similarly named documentation site or repository as authoritative.

For the authoring environment's dated checks and their limits, see [harness verification](harness-verification.md). Recheck local state before relying on that snapshot in another session.
