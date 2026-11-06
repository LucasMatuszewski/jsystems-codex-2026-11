# T04 image pipeline acceptance

Date: 2026-11-06. Prerequisites: T00 788807f, T01 8297df7. Photo privacy
approval: T02 3cc3117. OpenCode/MiMo proposed tests first and implementation
after Red; all tools denied, output reviewed/applied by orchestrator.

## Red and Green

Seven image tests imported/called the executable scaffold and failed as
expected: wrong dimensions/format/provenance, no mismatch/decode rejection and
no size rejection. No missing-runner/import failure was counted as Red.
The combined domain/image red run discovered/executed 23 tests, all failed,
zero skipped; 16 domain failures belong to the concurrent unfinished T03.

After implementation, image scope passed eight discovered/executed tests,
zero failures/skips/cancellations. Additional PNG acceptance coverage uses a
clearly labeled local transcode of the approved photo, never a new model-upload
photo. Coverage includes actual JPEG/WebP and derived PNG pixels, full decoding,
large-image resize, small-image no enlargement, EXIF rotation/metadata removal,
MIME mismatch, corrupt/truncated data and the exact 10,000,000-byte boundary.
The oversize rule precedes MIME rejection. Original bytes are unchanged.

Only actual Sharp 0.35.5 is used; no provider or endpoint doubles exist.
Source API facts came from Context7 `/lovell/sharp/v0.35.5` and the official
[Sharp docs](https://sharp.pixelplumbing.com/). Multer is verified for T10,
not introduced into this module.

## Build and actual runtime

- Backend `npm run build` and `npm run typecheck` passed separately, no warnings.
- `node docs/qa/first-slice/T04/prepare-probe.mjs` imported the actual compiled
  module, transformed both approved originals, saved the prepared copies and
  [metadata](prepared-metadata.json), and confirmed the running backend's
  `/api/health` returned HTTP 200. The probe asserts original bytes unchanged.
- Orchestrator opened both prepared copies and compared them with originals.
  Orientation/dimensions are preserved for these non-rotated samples. No claim
  that compression preserves every fine detail is made; small-view limitations
  remain. Reflected-person and identifier/label photos are not published here.
- `sourceWidth/sourceHeight` mean EXIF-oriented display dimensions before resize;
  `width/height` describe the produced JPEG. SHA-256 identifies produced bytes.

This pipeline follows the ADR's quality85 JPEG normalization. Output can be
larger than already compressed source JPEG/WebP; no byte-size saving is claimed.
It strips metadata and bounds dimensions rather than promising better evidence.

Screens in the connected application are not changed by this still-unconnected
module. Direct compiled-module/runtime checks are accepted for this row per
the plan; browser upload/error/retained-field acceptance remains T13.
Animated multi-frame processing is explicitly limited to the first frame in
metadata, but no reviewed animated fixture exists; no animated live test claimed.

## Review corrections

The orchestrator added actual large-image resize and PNG tests, made oversize
precedence explicit, guarded MIME-map own keys, and replaced technical quality
wording in customer-visible limitations with plain Polish. No assertion was
weakened, no threshold/profile enabled, no original file modified.
