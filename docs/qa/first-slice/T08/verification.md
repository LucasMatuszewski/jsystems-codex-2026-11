# T08 single visual escalation

Date: 2026-11-06. OpenCode/MiMo proposed the parser/text normalization tests and
implementation. O reproduced them, then added failing checks for SDK schema
serialization and whitespace-only evidence. The custom Zod ID validator was not
JSON-Schema serializable; it is now an explicit five-ID enum. Empty evidence is
rejected. A declaration of resolution without matching located observation does
not resolve an issue. No probability fields are accepted or synthesized.

A cancellation test and compiled live probe failed against an executable
unavailable stub before the client was implemented. After implementation the
same real image probe succeeded: five observations, actual OpenRouter generation
ID, `openai/gpt-6-luna`. See [probe](live-probe.mjs),
[red result](red-client-result.json), and [live result](live-result.json).
Only approved prepared laptop pixels were sent. Initial probabilities were
supplied as context and remain unchanged. The SDK call uses `Output.object`,
an actual JPEG file part, zero transparent retries and the caller's abort signal.

Seven scoped tests passed (five parser/schema, cancellation and punctuation),
with zero skips/failures. Backend build and no-emit typecheck passed separately.
The client was exercised in the actual compiled runtime. No provider/endpoint
mocks were created. Routing, disconnects during a live response and browser
presentation remain T10-T13; this does not claim those checks.
