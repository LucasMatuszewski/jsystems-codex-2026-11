import test from 'node:test';
import assert from 'node:assert/strict';
import { normalizeModelText } from './text.js';

test('normalizes model punctuation while preserving Polish letters', () => {
  assert.equal(normalizeModelText('Podałeś kategorię „Laptop”.'), 'Podałeś kategorię "Laptop".');
  assert.equal(normalizeModelText('Zwrot – wstępna pomoc… x‑kom → kontakt'), 'Zwrot - wstępna pomoc... x-kom -> kontakt');
  assert.equal(normalizeModelText('ąćęłńóśźż ĄĆĘŁŃÓŚŹŻ'), 'ąćęłńóśźż ĄĆĘŁŃÓŚŹŻ');
  assert.equal(normalizeModelText('14\u00a0dni'), '14 dni');
});
