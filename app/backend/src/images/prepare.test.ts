/**
 * T04 - integration tests for prepareImage (app/backend/src/images/prepare.test.ts).
 *
 * Real image processing only: node:test + node:assert/strict + actual sharp 0.35.5
 * + fs/promises readFile. No mocks, no provider mocks, and no pre-established
 * stochastic visual observations are required.
 *
 * Fixtures (resolved relative to this file; the orchestrator verifies the real
 * relative depth) under assets/example-images/:
 *   - laptop-2.webp, phone-2.jpeg: approved upload sources; used only for the
 *     positive decode / JPEG conversion / size / provenance tests.
 *   - laptop-1.png: local-only JPEG bytes behind a PNG name, used for resize
 *     and declared-PNG mismatch checks. Never uploaded or published.
 *   - phone-1, phone-3: never read by these tests.
 *
 * Every byte array, truncation, padded copy and EXIF mutation below is labeled
 * either 'local invalid test input' or 'local derived test input'. They are
 * test material derived from approved photos or arbitrary bytes, not new
 * upload photos. Originals are only ever read; tests verify they stay unchanged.
 *
 * Contract under test: prepareImage decodes real pixels (a metadata header
 * alone is insufficient), EXIF auto-orients, strips metadata, emits a
 * quality-85 JPEG bounded to a 1568 long edge (fit inside, withoutEnlargement,
 * so small photos are never enlarged), and returns actual dimensions plus
 * verifiable hashes with no filenames or private evaluation labels in the
 * returned metadata. Processing limits (compression, reduced visible detail)
 * stay preserved in limitations; survival of every original damage detail is
 * never assumed.
 */

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

import { prepareImage, ImagePreparationError } from './prepare.js';

/** Documented sharp 0.35.5 decode settings used by the pipeline. */
const SHARP_OPTS = { failOn: 'warning', limitInputPixels: 268402689 } as const;

const MAX_LONG_EDGE = 1568;
const MAX_INPUT_BYTES = 10_000_000;

type Prepared = Awaited<ReturnType<typeof prepareImage>>;

function assetUrl(name: string): URL {
  return new URL(`../../../../assets/example-images/${name}`, import.meta.url);
}

function readAsset(name: string): Promise<Buffer> {
  return readFile(assetUrl(name));
}

function sha256Hex(bytes: Buffer): string {
  return createHash('sha256').update(bytes).digest('hex');
}

function requirePositive(value: number | undefined, label: string): number {
  if (typeof value !== 'number' || !(value > 0)) {
    throw new Error(`${label} must be a positive number`);
  }
  return value;
}

/** Source dimensions after EXIF auto-orientation (metadata().autoOrient in sharp 0.35.5). */
async function sourceDims(bytes: Buffer): Promise<{ width: number; height: number }> {
  const meta = await sharp(bytes, SHARP_OPTS).metadata();
  return {
    width: requirePositive(meta.autoOrient.width, 'oriented source width'),
    height: requirePositive(meta.autoOrient.height, 'oriented source height'),
  };
}

/** Re-decode produced pixels: a metadata header alone is not proof of pixel data. */
async function assertPixelsDecodable(bytes: Buffer, width: number, height: number): Promise<void> {
  const decoded = await sharp(bytes, SHARP_OPTS).raw().toBuffer({ resolveWithObject: true });
  assert.equal(decoded.info.width, width);
  assert.equal(decoded.info.height, height);
  assert.equal(decoded.data.length, decoded.info.width * decoded.info.height * decoded.info.channels);
}

const RESULT_KEYS = [
  'bytes',
  'height',
  'inputBytes',
  'limitations',
  'mime',
  'outputBytes',
  'pipelineVersion',
  'sha256',
  'sourceHeight',
  'sourceWidth',
  'width',
];

async function expectError(promise: Promise<Prepared>, status: 413 | 422, what: string): Promise<ImagePreparationError> {
  let caught: unknown = undefined;
  try {
    await promise;
  } catch (err) {
    caught = err;
  }
  if (!(caught instanceof ImagePreparationError)) {
    throw new Error(`${what}: expected ImagePreparationError, got ${String(caught)}`);
  }
  assert.equal(caught.status, status, `${what}: unexpected status`);
  if (typeof caught.code !== 'string' || caught.code.length === 0) {
    throw new Error(`${what}: code must be a non-empty string`);
  }
  return caught;
}

async function assertPrepared(
  result: Prepared,
  input: Buffer,
  source: { width: number; height: number }
): Promise<void> {
  // Exact returned shape: nothing beyond the documented fields, so no filenames
  // and no private evaluation labels can travel with the prepared metadata.
  assert.deepEqual(Object.keys(result).sort(), [...RESULT_KEYS].sort());

  assert.equal(result.mime, 'image/jpeg');
  assert.equal(result.pipelineVersion, 'jpeg1568-q85-v1');

  assert.ok(Buffer.isBuffer(result.bytes), 'bytes must be a Buffer');
  assert.equal(result.inputBytes, input.length);
  assert.equal(result.outputBytes, result.bytes.length);

  assert.equal(result.sourceWidth, source.width);
  assert.equal(result.sourceHeight, source.height);

  // Actual output dimensions must describe the real produced JPEG.
  const outMeta = await sharp(result.bytes, SHARP_OPTS).metadata();
  assert.equal(outMeta.format, 'jpeg');
  assert.equal(outMeta.width, result.width);
  assert.equal(outMeta.height, result.height);
  await assertPixelsDecodable(result.bytes, result.width, result.height);

  // Max long edge 1568, fit inside, withoutEnlargement: small photos never grow.
  const scale = Math.min(1, MAX_LONG_EDGE / Math.max(source.width, source.height));
  assert.ok(Math.abs(result.width - source.width * scale) <= 1, 'width must follow the bounded scale');
  assert.ok(Math.abs(result.height - source.height * scale) <= 1, 'height must follow the bounded scale');
  assert.ok(Math.max(result.width, result.height) <= MAX_LONG_EDGE, 'long edge must stay within 1568');
  assert.ok(result.width <= source.width && result.height <= source.height, 'output must never exceed the source frame');

  // Provenance hash is verifiable against the actual produced bytes; expected
  // values are computed from read bytes, never embedded.
  assert.match(result.sha256, /^[0-9a-f]{64}$/);
  assert.equal(result.sha256, sha256Hex(result.bytes));

  // Processing limits must stay preserved (compression / reduced visible
  // detail); these tests never require every original damage detail to survive.
  assert.ok(Array.isArray(result.limitations), 'limitations must be an array');
  assert.ok(result.limitations.length >= 1, 'at least the JPEG compression limit must be recorded');
  for (const limitation of result.limitations) {
    assert.equal(typeof limitation, 'string');
    assert.ok(limitation.trim().length > 0);
  }

  // No filenames or evaluation labels may leak into returned metadata.
  const printed = [result.mime, result.pipelineVersion, result.sha256, ...result.limitations].join(' ');
  assert.doesNotMatch(printed, /example-images/i);
  assert.doesNotMatch(printed, /laptop-\d|phone-\d/i);
  assert.doesNotMatch(printed, /\.(webp|png|jpe?g)\b/i);
}

test('resizes the large original locally without uploading or publishing its reflected-person image', async () => {
  const input = await readAsset('laptop-1.png');
  const result = await prepareImage(input, 'image/jpeg');
  await assertPrepared(result, input, await sourceDims(input));
  assert.equal(Math.max(result.width, result.height), MAX_LONG_EDGE);
});

test('converts laptop-2.webp into a bounded, fully decoded JPEG with provenance fields', async () => {
  const input = await readAsset('laptop-2.webp'); // approved upload source
  const readDigest = sha256Hex(input);
  const source = await sourceDims(input);

  const result = await prepareImage(input, 'image/webp');
  await assertPrepared(result, input, source);

  // Real conversion: produced bytes are JPEG data, not a re-labelled WebP payload.
  assert.equal(result.bytes[0], 0xff);
  assert.equal(result.bytes[1], 0xd8);
  assert.notEqual(Buffer.compare(result.bytes, input), 0);

  // Source hash is checked against the input read bytes (computed, not embedded).
  assert.equal(sha256Hex(input), readDigest);
  const after = await readAsset('laptop-2.webp'); // originals must stay unchanged
  assert.equal(sha256Hex(after), readDigest);
  assert.equal(Buffer.compare(after, input), 0);
});

test('converts phone-2.jpeg and never enlarges small photos', async () => {
  const input = await readAsset('phone-2.jpeg'); // approved upload source
  const readDigest = sha256Hex(input);
  const source = await sourceDims(input);

  const result = await prepareImage(input, 'image/jpeg');
  await assertPrepared(result, input, source);

  const after = await readAsset('phone-2.jpeg'); // originals must stay unchanged
  assert.equal(sha256Hex(after), readDigest);

  // Local derived test input: a small downscale of the approved photo. Test
  // material only, not a new upload photo.
  const smallBytes = await sharp(input, SHARP_OPTS).resize(240).jpeg({ quality: 90 }).toBuffer();
  const smallSource = await sourceDims(smallBytes);
  assert.ok(Math.max(smallSource.width, smallSource.height) < MAX_LONG_EDGE, 'derived input must be small');

  const small = await prepareImage(smallBytes, 'image/jpeg');
  await assertPrepared(small, smallBytes, smallSource);

  // A small photo must keep its exact pixel size instead of being stretched
  // toward the 1568 long-edge ceiling.
  assert.equal(small.width, smallSource.width);
  assert.equal(small.height, smallSource.height);
  assert.ok(Math.max(small.width, small.height) < MAX_LONG_EDGE);
});

test('accepts actual PNG pixels derived locally from the approved photo', async () => {
  const original = await readAsset('phone-2.jpeg');
  // Local format mutation only; not a replacement upload photo.
  const png = await sharp(original, SHARP_OPTS).png().toBuffer();
  const prepared = await prepareImage(png, 'image/png');
  await assertPrepared(prepared, png, await sourceDims(png));
  await expectError(prepareImage(png, 'image/jpeg'), 422, 'PNG declared as JPEG');
});

test('applies EXIF auto-orientation and strips metadata from the JPEG output', async () => {
  const input = await readAsset('phone-2.jpeg'); // approved upload source
  const readDigest = sha256Hex(input);

  // Local derived test input: EXIF orientation 6 mutation derived from the
  // approved photo. Test material only, not a new upload photo.
  const mutated = await sharp(input, SHARP_OPTS).withMetadata({ orientation: 6 }).toBuffer();
  const mutatedMeta = await sharp(mutated, SHARP_OPTS).metadata();
  assert.equal(mutatedMeta.orientation, 6, 'derived input must really carry EXIF orientation 6');

  const rawWidth = requirePositive(mutatedMeta.width, 'stored raw width');
  const rawHeight = requirePositive(mutatedMeta.height, 'stored raw height');
  const orientedWidth = requirePositive(mutatedMeta.autoOrient.width, 'EXIF oriented width');
  const orientedHeight = requirePositive(mutatedMeta.autoOrient.height, 'EXIF oriented height');
  // Orientation 6 rotates the displayed frame by 90 degrees.
  assert.equal(orientedWidth, rawHeight);
  assert.equal(orientedHeight, rawWidth);
  assert.notEqual(orientedWidth, orientedHeight, 'rotation must change the reported frame');

  const result = await prepareImage(mutated, 'image/jpeg');
  // Source dimensions must be the EXIF-oriented ones, so the bounded scale is
  // applied to the rotated frame rather than the raw stored frame.
  await assertPrepared(result, mutated, { width: orientedWidth, height: orientedHeight });

  // Metadata is stripped from the output: no source container, orientation or
  // evaluation context may survive into provider-bound bytes.
  const outMeta = await sharp(result.bytes, SHARP_OPTS).metadata();
  assert.equal(outMeta.exif, undefined, 'EXIF must be stripped');
  assert.equal(outMeta.iptc, undefined, 'IPTC must be stripped');
  assert.equal(outMeta.xmp, undefined, 'XMP must be stripped');
  assert.equal(outMeta.icc, undefined, 'ICC must be stripped');
  assert.ok(outMeta.orientation === undefined || outMeta.orientation === 1, 'no EXIF orientation may survive');

  // The approved source photo itself is untouched by the local mutation.
  const after = await readAsset('phone-2.jpeg');
  assert.equal(sha256Hex(after), readDigest);
});

test('rejects declared-MIME vs actual-format mismatches before provider upload', async () => {
  const laptop2 = await readAsset('laptop-2.webp'); // approved upload source
  const phone2 = await readAsset('phone-2.jpeg'); // approved upload source
  // Local-only negative input: laptop-1.png holds JPEG data despite its name.
  // Used only as the declared-PNG mismatch negative, never a provider upload.
  const laptop1 = await readAsset('laptop-1.png');
  const laptop1Meta = await sharp(laptop1, SHARP_OPTS).metadata();
  assert.equal(laptop1Meta.format, 'jpeg', 'fixture premise: laptop-1.png is really JPEG data');

  await expectError(prepareImage(laptop1, 'image/png'), 422, 'JPEG data declared as image/png');
  await expectError(prepareImage(laptop2, 'image/jpeg'), 422, 'WebP data declared as image/jpeg');
  await expectError(prepareImage(laptop2, 'image/png'), 422, 'WebP data declared as image/png');
  await expectError(prepareImage(phone2, 'image/webp'), 422, 'JPEG data declared as image/webp');
  await expectError(prepareImage(phone2, 'image/png'), 422, 'JPEG data declared as image/png');

  // Rejected attempts must not touch the originals.
  assert.equal(sha256Hex(await readAsset('laptop-2.webp')), sha256Hex(laptop2));
  assert.equal(sha256Hex(await readAsset('phone-2.jpeg')), sha256Hex(phone2));
});

test('rejects empty, unsupported, corrupt and truncated inputs', async () => {
  const laptop2 = await readAsset('laptop-2.webp'); // approved upload source
  const phone2 = await readAsset('phone-2.jpeg'); // approved upload source

  await expectError(prepareImage(Buffer.alloc(0), 'image/jpeg'), 422, 'empty buffer');
  await expectError(prepareImage(Buffer.alloc(0), 'image/webp'), 422, 'empty buffer with WebP declaration');

  for (const declaredMime of ['image/gif', 'image/tiff', 'text/plain', 'application/octet-stream']) {
    await expectError(prepareImage(phone2, declaredMime), 422, `unsupported declared MIME ${declaredMime}`);
  }

  // Local invalid test inputs: arbitrary bytes and truncations, not upload photos.
  const garbage = Buffer.from('T04 local invalid test input: not image data.', 'utf8');
  await expectError(prepareImage(garbage, 'image/jpeg'), 422, 'arbitrary bytes');

  const truncatedWebp = Buffer.from(laptop2.subarray(0, 64)); // local invalid test input (truncation)
  await expectError(prepareImage(truncatedWebp, 'image/webp'), 422, 'truncated WebP');

  const headerOnlyWebp = Buffer.from(laptop2.subarray(0, 32)); // local invalid test input (header only)
  await expectError(prepareImage(headerOnlyWebp, 'image/webp'), 422, 'header-only WebP');

  const truncatedJpeg = Buffer.from(phone2.subarray(0, Math.floor(phone2.length / 2))); // local invalid test input (truncation)
  await expectError(prepareImage(truncatedJpeg, 'image/jpeg'), 422, 'truncated JPEG');
});

test('enforces the exact 10_000_000-byte input boundary', async () => {
  const phone2 = await readAsset('phone-2.jpeg'); // approved upload source
  assert.ok(phone2.length < MAX_INPUT_BYTES, 'fixture must sit below the limit to build the boundary cases');

  // Local derived test inputs: valid JPEG bytes padded with zeros purely to hit
  // the exact documented lengths. Not upload photos.
  const atLimit = Buffer.concat([phone2, Buffer.alloc(MAX_INPUT_BYTES - phone2.length)]);
  const overLimit = Buffer.concat([phone2, Buffer.alloc(MAX_INPUT_BYTES + 1 - phone2.length)]);
  assert.equal(atLimit.length, MAX_INPUT_BYTES);
  assert.equal(overLimit.length, MAX_INPUT_BYTES + 1);

  // Strictly more than 10_000_000 bytes must be rejected as too large.
  await expectError(prepareImage(overLimit, 'image/jpeg'), 413, '10_000_001 bytes');
  await expectError(prepareImage(overLimit, 'image/gif'), 413, 'size limit precedes unsupported MIME');

  // Exactly 10_000_000 bytes must never trip the size rejection; if the padded
  // payload is refused at all it can only be an ordinary decode/format rejection.
  try {
    const result = await prepareImage(atLimit, 'image/jpeg');
    assert.equal(result.inputBytes, MAX_INPUT_BYTES);
    assert.ok(result.outputBytes > 0);
    assert.ok(result.bytes.length > 0);
  } catch (err) {
    if (!(err instanceof ImagePreparationError)) {
      throw new Error(`10_000_000 bytes: expected ImagePreparationError, got ${String(err)}`);
    }
    assert.equal(err.status, 422, 'exactly 10_000_000 bytes must not be rejected as too large');
  }

  // Padded copies stay local; the approved source is unchanged.
  assert.equal(sha256Hex(await readAsset('phone-2.jpeg')), sha256Hex(phone2));
});
