# T06 real OpenRouter capture acceptance

Date: 2026-11-06. Prerequisites T01 8297df7, T02 3cc3117, T04 ef04e40.

Actual command from `app/`:

```powershell
node --env-file=../.env tooling/provider-probes/capture.mjs --help
node --env-file=../.env tooling/provider-probes/capture.mjs t06-first
node --env-file=../.env tooling/provider-probes/verify.mjs t06-first
```

The user authorized the root `.env` loader and selected model IDs. No secret
file was printed/read into a brief. Requests use the actual server-process key;
Authorization/cookie/credential headers are omitted from saved artifacts and
actual key bytes are scrubbed. The independent verification scan passed across
all capture files without disclosing the value.

## Observed live contracts

Raw `.body` and `.ui-sse` files use Git binary attributes so checkout cannot
rewrite their line endings. Their SSE blank lines and provider padding are
wire data, preserved exactly rather than trimmed to satisfy code whitespace
rules. Independent body hashes were verified after staging those attributes.

All four separate stages passed HTTP 200 with complete status/headers and
fetch-decoded raw response bytes saved under
`app/tests/fixtures/baseline/t06-first/`. SHA-256/byte counts and complete-body
provenance independently verified for all four. Request bodies are exact safe
synthetic inputs, including only the privacy-approved, prepared laptop image.

1. Dedicated native HTTP Decisions returned all five Noul answers and five
   evidence-choice answers. Requested `openai/gpt-6-luna-decisions`; returned
   dated model `openai/gpt-6-luna-decisions-20261006`, provider OpenAI. Choice maps
   and confidence were present in this capture; their absence remains optional
   wire behavior, not an invented zero or required field. Raw numbers persist
   separately from later supported-probability normalization.
2. AI SDK 7.0.163/provider3.1.0 `generateText` with `Output.object` accepted a
   real JPEG file part on `openai/gpt-6-luna`. Output included supported visible
   observations, evidence-backed resolutions and remaining unknowns. This does
   not validate calibration or remove all uncertainty.
3. Real streamed initial chat and SDK UI SSE conversion completed with text
   deltas, finish and DONE events. Complete provider and UI streams/headers and
   chunk arrival metadata are saved; locally generated start events are not
   claimed as first model-token latency.
4. Real follow-up included the original context and first answer exactly once,
   recalled the return/laptop facts and stated no submission occurred.

This establishes working transport/schema boundaries, not full application
history, six-element product guidance, review status or browser E2E acceptance.
The small wire prompts deliberately avoid deciding rights/deadlines. The
follow-up used curly quotation marks despite the ASCII punctuation instruction;
production rendering/canonical text normalization must address that at T11/T12.
The raw capture is preserved rather than edited to claim instruction compliance.

## Reuse and gates

No provider/endpoint mock existed before this live run, and none is created by
T06. Before later mock creation/refresh, obtain a fresh accepted safe call;
old baseline fixtures are not a waiver. Deliberate parser mutations must be
labeled synthetic negatives. E2E/manual QA always use real OpenRouter, never
these files as provider success. Automatic SDK retries are disabled; no spend,
call-count or evaluation-sample cap is introduced. The profile stays disabled.

Probe files are verification tooling with runtime asserts, not production
clients. Build/startup evidence remains T01/T04; no application route was added
or browser product acceptance claimed in this capture-only row.
