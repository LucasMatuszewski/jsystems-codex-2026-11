import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import type { CaseInput } from '../domain/rules.js';

export async function loadContent(type: CaseInput['requestType']) {
  const scenario = type === 'Zwrot' ? 'return' : 'complaint';
  const [procedure, instructions] = await Promise.all([
    readFile(new URL(`../../src/content/procedures/${scenario}.md`, import.meta.url), 'utf8'),
    readFile(new URL(`../../src/content/instructions/${scenario}.md`, import.meta.url), 'utf8'),
  ]);
  return { procedure, instructions, sourceVersions: {
    version: '2026-11-06',
    procedureSha256: createHash('sha256').update(procedure).digest('hex'),
    instructionSha256: createHash('sha256').update(instructions).digest('hex'),
  } };
}
