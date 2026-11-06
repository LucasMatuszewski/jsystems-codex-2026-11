# T01 scaffold verification

Date: 2026-11-06. Owner: orchestrator. Prerequisite T00: 788807f.

## Test-first evidence

Before routing/bootstrap glue, the real Express listener smoke discovered and
executed one test: failed as expected with HTTP 404 versus required 200 for
`/api/health`. The importing runner and listener both worked; this was a
behavioral failure, not a missing-module failure. No mocks were used.

Before replacing the generated Angular page, one shell component test failed
as expected: `Hello, frontend` did not contain the required Polish title. Its
remaining assertions cover synthetic-data, no-submission and session-loss
notices. Generated dummy tests were replaced, not reported as product coverage.

After implementation, `npm test` in `app/` passed both tests: frontend one
discovered/executed/pass, backend one discovered/executed/pass, zero skips,
cancellations or failures. No provider calls or endpoint doubles exist.

## Build and static checking

- `npm run build` in `app/`: Angular production build and backend TypeScript
  compilation passed; final initial browser bundle 213.59 kB, no warnings.
- `npm run typecheck`: Angular strict development build/template checking and
  backend `tsc --noEmit` passed. No separate linter is configured or claimed.
- Initial out-of-root Angular asset configuration was rejected by the builder;
  fixed by copying only approved logo/favicon/font into frontend public assets.
  Originals remain unchanged. Final build and tests passed afterward.
- Installation used strict peers and one npm workspace lockfile. The initial
  incompatible optional WASI chain and sandbox workspace-link failure were
  resolved by the verified build patch and host npm install. Four native
  build-script approvals are version-pinned; no force/legacy-peer override.

## Actual startup and manual QA

`npm start` separately started the built backend at `http://127.0.0.1:3000`.
`npm run dev:frontend -- --host 127.0.0.1` separately started Angular on 4200.
`GET http://127.0.0.1:4200/api/health` returned HTTP 200 and `{"status":"ok"}`
through the actual development proxy. A first incorrectly forwarded host flag
failed; the wrapper now forwards flags correctly, and startup passed cleanly.

Playwright CLI 0.1.23 drove actual Chrome, opened the built app, resized to
1440x1000, inspected the Polish shell and captured [scaffold.png](scaffold.png).
Console inspection showed zero errors and warnings (one development-mode log
while the development build was served); the final production build was then
loaded and recaptured. Compared header/logo proportions, Instrument Sans,
neutral surfaces, 26px heading and restrained card border/radius to the existing
design guidance. Corrected the Material card background to the white reference.

Browser execution needed host access because sandbox Chrome crashed in
crashpad. The working host Playwright path is established; no final case flow,
assessment, conversation or live provider acceptance is claimed in T01.

## OpenCode smoke requested by user

OpenCode v2.2.5, fresh standalone run, exact worker model
`xiaomi-token-plan-ams/mimo-v2.6-pro`. A generic temporary-directory task
returned 437 for 19 multiplied by 23, exit 0. Task-local canonical v2
`permissions` denied all actions/resources. MiMo reported that no file-read
tool was exposed, so it could not read the synthetic canary; no bypass occurred.
This proves basic generation and tool exclusion, not file-edit or shell access.

Automatic review rejected an earlier app-specific smoke payload before
execution because it would send repository details to MiMo. The executed
alternative contained only public arithmetic and synthetic canary instructions.
The user confirmed OpenCode should become the main implementation subagent if
the test works. Subsequent delegation remains bounded and reviewed; no secrets
are included in briefs. Evidence events remain local, outside publication.

References: [v2 permission schema](https://github.com/anomalyco/opencode/blob/v2.2.5/packages/schema/src/permission.ts),
[inline configuration](https://github.com/anomalyco/opencode/blob/v2.2.5/packages/cli/src/server-process.ts).

## Generated-output boundaries

Checks may write workspace `node_modules`, frontend `.angular/cache`, workspace
`dist`, ignored test-results/Playwright state and `.npm-research-cache`.
They may not edit unrelated source, course material, secrets or original photos.
Provider captures and product acceptance remain gated on later rows.
