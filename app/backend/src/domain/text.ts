/**
 * Normalizes typographic punctuation in model-produced Polish text.
 * Polish letters are preserved; only punctuation variants map to ASCII.
 */
export function normalizeModelText(text: string): string {
  return text
    .replace(/[\u201C\u201D\u201E\u201F]/g, '\u0022')
    .replace(/[\u2018\u2019\u201A\u201B]/g, '\u0027')
    .replace(/[\u2010\u2011\u2012\u2013\u2014\u2015]/g, '-')
    .replace(/\u2026/g, '...')
    .replace(/\u00A0/g, ' ')
    .replace(/\u2192/g, '->');
}

export default normalizeModelText;