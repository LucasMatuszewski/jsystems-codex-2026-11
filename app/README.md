# App

Local hardware-service PoC workspace. Product behavior is defined by the
[PRD](../docs/PRD.md), [ADRs](../docs/ADR/000-main-architecture.md) and
[execution tracker](../docs/plans/-implementation-plan.md). Intake, assessment and
conversation are connected; final acceptance remains pending. Start with the
[shutdown handoff](../docs/HANDOFF-2026-11-06.md) for current evidence and TODOs.

Use Node 24.15+ within Node 24 and npm 11. From this directory:

```powershell
npm ci --cache ../.npm-research-cache --strict-peer-deps
npm run build
npm run typecheck
npm test
npm start
```

`npm start` serves the built SPA and API at `http://127.0.0.1:3000`. The backend
uses Node's environment loader for repository-root `.env`, as selected by the
user. Required live configuration is described in the root `.env.example`;
all values stay server-only. Inherited environment values take precedence.
Do not print or commit credentials.

For development, use separate terminals in `app/`:

```powershell
npm run dev:backend
npm run dev:frontend -- --host 127.0.0.1
```

Angular serves port 4200 and proxies `/api/**` to port 3000. `GET /api/health`
is the startup smoke endpoint. Stop processes with Ctrl+C.

Frontend tests use Angular's Vitest builder; backend tests use Node's test
runner and tsx. E2E configuration and real-provider browser cases are under
`e2e/`. Run `npm run e2e -- --workers=1` against the started built app; these
tests call real models. The separate negative profile requires a separately
started invalid-credential backend on port 3001 and is excluded by default.
Playwright CLI 0.1.23 is verified for manual browser QA.
Windows sandbox restrictions may require host execution for npm workspace
links and Chrome. The four native build-script approvals are pinned in the
workspace manifest; no blanket script approval is needed.

Brand copies under `frontend/public/brand` come from repository `assets/`;
their source/reference and licensing limits remain in
[design guidance](../docs/design-guidelines.md). Generated output is ignored:
`node_modules`, `frontend/.angular/cache`, workspace `dist`, test results,
Playwright state and the local npm cache.
