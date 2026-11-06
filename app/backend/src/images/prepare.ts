import sharp from 'sharp';
import { createHash } from 'node:crypto';

export interface PreparedImage {
  bytes: Buffer;
  mime: 'image/jpeg';
  sourceWidth: number;
  sourceHeight: number;
  width: number;
  height: number;
  inputBytes: number;
  outputBytes: number;
  sha256: string;
  pipelineVersion: 'jpeg1568-q85-v1';
  limitations: string[];
}

export class ImagePreparationError extends Error {
  constructor(
    public status: 413 | 422,
    public code: string,
    message: string,
  ) {
    super(message);
    this.name = 'ImagePreparationError';
  }
}

const DECLARED_FORMAT: Record<string, string | undefined> = {
  'image/jpeg': 'jpeg',
  'image/png': 'png',
  'image/webp': 'webp',
};

const MAX_INPUT_BYTES = 10_000_000;
const LONG_EDGE = 1568;

export async function prepareImage(bytes: Buffer, declaredMime: string): Promise<PreparedImage> {
  if (!Buffer.isBuffer(bytes) || bytes.length === 0) {
    throw new ImagePreparationError(422, 'EMPTY_INPUT', 'Brak danych obrazu do przetworzenia.');
  }
  if (bytes.length > MAX_INPUT_BYTES) {
    throw new ImagePreparationError(413, 'INPUT_TOO_LARGE', 'Zdjęcie może mieć maksymalnie 10 000 000 bajtów.');
  }
  const expectedFormat = Object.hasOwn(DECLARED_FORMAT, declaredMime) ? DECLARED_FORMAT[declaredMime] : undefined;
  if (expectedFormat === undefined) {
    throw new ImagePreparationError(422, 'UNSUPPORTED_MIME', 'Wybierz zdjęcie JPEG, PNG lub WebP.');
  }

  const image = sharp(bytes, { failOn: 'warning', limitInputPixels: 268_402_689 });

  const metadata = await image.metadata().catch(() => {
    throw new ImagePreparationError(422, 'UNDECODABLE_IMAGE', 'Dane obrazu są uszkodzone lub niekompletne.');
  });

  if (metadata.format !== expectedFormat) {
    throw new ImagePreparationError(422, 'MIME_MISMATCH', 'Rzeczywisty format obrazu nie zgadza się z deklarowanym typem MIME.');
  }

  const sourceWidth = metadata.autoOrient?.width ?? metadata.width;
  const sourceHeight = metadata.autoOrient?.height ?? metadata.height;
  if (!sourceWidth || !sourceHeight) {
    throw new ImagePreparationError(422, 'UNDECODABLE_IMAGE', 'Dane obrazu są uszkodzone lub niekompletne.');
  }

  const { data, info } = await image
    .autoOrient()
    .resize(LONG_EDGE, LONG_EDGE, { fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 85 })
    .toBuffer({ resolveWithObject: true })
    .catch(() => {
      throw new ImagePreparationError(422, 'UNDECODABLE_IMAGE', 'Dane obrazu są uszkodzone lub niekompletne.');
    });

  const limitations: string[] = [
    'Kompresja zdjęcia może ograniczyć widoczność drobnych szczegółów. Brak widocznego uszkodzenia nie potwierdza jego braku.',
  ];
  if (Math.max(sourceWidth, sourceHeight) > LONG_EDGE) {
    limitations.push('Obraz został dodatkowo zmniejszony do dłuższego boku 1568 px bez powiększania, co ogranicza widoczność drobnych detali.');
  }
  if ((metadata.pages ?? 1) > 1) {
    limitations.push('Przetworzono wyłącznie pierwszą klatkę; pozostałe klatki obrazu wieloklatkowego nie są widoczne.');
  }

  return {
    bytes: data,
    mime: 'image/jpeg',
    sourceWidth,
    sourceHeight,
    width: info.width,
    height: info.height,
    inputBytes: bytes.length,
    outputBytes: info.size,
    sha256: createHash('sha256').update(data).digest('hex'),
    pipelineVersion: 'jpeg1568-q85-v1',
    limitations,
  };
}
