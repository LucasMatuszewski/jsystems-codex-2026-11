# T05 intake component acceptance

Date: 2026-11-06. Prerequisites T00 788807f, T01 8297df7.
The orchestrator implemented this isolated component while the primary MiMo
worker handled domain/image tasks in disjoint paths.

Three component tests were written before behavior and failed against an empty
executable Angular component: missing exact choices/visible fields, conditional
complaint description/retained fields and pending-submit disablement. This was
an actual assertion Red, not a missing module/runner.

After implementation, those three passed. Extended verification loads the
reviewed real phone-2 photo from disk, tests blob preview replacement/cleanup,
emitted immutable fact copy and optional return reason, plus second/oversize/
unsupported-file rejection retaining other fields. Invalid byte/MIME/size
mutations are local-only test inputs; no generated upload photo or provider
double is used. Only DOM blob-URL functions are isolated in the unit test.

Final frontend suite under host execution: 2 files, 7 discovered/executed/pass
(6 intake plus 1 shell), zero failures/skips. A new server-error-focus test
demonstrated Red (1 failed, 5 passed); the returned errors retained fields but
did not move focus. The component now focuses the summary for server-returned
errors too; both client and server error-focus assertions pass. The first expanded compile needed
Node test types and explicit static override modifiers, which were fixed.
A sandbox full-suite run failed loading a generated file under its private
temporary directory; the same full suite passed outside that sandbox without
changing assertions. Frontend production build passed without warnings.

Material fields/native keyboard controls, native calendar pickers, Polish
labels/errors, focusable error summary and exactly one upload are implemented.
The server remains authoritative for decoded image validity. All fields stay
in browser memory and are copied only on valid submission. Original preview
URLs are revoked on removal/replacement/component destruction.

This component is intentionally not yet wired into the root application per
T13's dependency gate. Runtime component validation uses the actual Angular
TestBed/DOM; connected browser keyboard/upload/error/screenshots and actual
server integration remain T13. No model, HTTP endpoint mock, connected journey
or completed browser intake acceptance is claimed in this row.
