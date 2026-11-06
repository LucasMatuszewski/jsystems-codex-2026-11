# Dependency and tooling evidence

Date: 2026-11-06. Facts gathered by Luna using Context7 resolve/query and
read-only npm registry metadata. Orchestrator owns installation and acceptance.

- Node 24.22.1, npm 11.19.1; Angular CLI 22.2.6 generated the existing
  `app/frontend` with standalone/routing/SCSS, no SSR, no Git or nested install.
- Published Angular core/common/compiler/forms/platform-browser/router and
  compiler-cli 22.2.4 have matching exact Angular peers; compiler-cli requires
  TypeScript >=6.0 <6.1. TypeScript 6.0.3 is published.
- Material/CDK 22.2.5 peers allow Angular ^22 or ^23; Material requires CDK
  exactly 22.2.5. Core 22.2.5 was not published; it is not used.
- AI SDK 7.0.163, Angular adapter 3.0.163 and OpenRouter provider 3.1.0 are
  published. Provider peers require ai ^7 and Zod ^3.25.76 or ^4.1.8.
- Express 5.3.0, Sharp 0.35.5, Multer 2.5.0 and Zod 4.1.8 are published.
- Angular build 22.2.6 accepted Angular 22/TS6 and Vitest4/5 peers, but strict
  install failed: its optional OXC WASI binding pinned emnapi core alpha.6,
  outside napi-rs runtime 1.2.7's peer range. No force/legacy peer bypass used.
- Build 22.2.4 uses OXC parser 0.150.0 without that optional WASI dependency;
  it retains the selected Angular/TypeScript/Vitest peer compatibility. This
  patch is the next installation candidate; actual install/build evidence is
  required before accepting T01.
- Generated CLI unit-test builder is `@angular/build:unit-test`; Vitest is
  supported. Chosen Vitest 5.0.3 and Playwright test 1.64.1 are published.
- Playwright CLI 0.1.23 help verified open, screenshot and run-code commands.
  Sandbox Chrome launch failed in crashpad; host-side CLI opened a fresh
  `about:blank` Chrome session successfully. No app QA is claimed yet.

Context7 references: `/angular/angular-cli`, `/angular/components`,
`/vercel/ai/ai_7.0.0`, `/openrouterteam/ai-sdk-provider`. Material custom SCSS
uses `mat.theme`. Angular SDK uses `Chat.sendMessage` and `DefaultChatTransport`.
SDK7 streaming uses its Node UI message stream bridge; disconnect/abort remains
subject to runtime verification. Registry peers alone do not prove API behavior.

Primary references: [Angular versions](https://angular.dev/reference/versions),
[Material theme](https://material.angular.dev/guide/theming),
[AI SDK Angular](https://ai-sdk.dev/docs/getting-started/angular),
[SDK7 migration](https://ai-sdk.dev/docs/migration-guides/migration-guide-7-0),
[registry](https://registry.npmjs.org/).
