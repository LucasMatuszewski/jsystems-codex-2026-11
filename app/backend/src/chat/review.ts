import type { CaseStore } from '../cases/store.js';
import { z } from 'zod';

export const reviewInput = z.strictObject({ reason: z.enum(['material_correction', 'conflict', 'unsupported_request']), quote: z.string().trim().min(1) });
const messages = {
  material_correction: 'Podano istotną zmianę danych. Oryginalne dane pozostają podstawą oceny; potrzebna weryfikacja lub nowa sprawa.',
  conflict: 'W rozmowie pojawiły się sprzeczne informacje. Potrzebna weryfikacja pracownika.',
  unsupported_request: 'Nowa prośba wykracza poza zakres tej sprawy. Potrzebna weryfikacja lub nowa sprawa.',
};
export function applyChatReview(store: CaseStore, token: string, input: unknown, source: { intent: string; text: string }) {
  if (source.intent !== 'follow_up') throw new Error('No new customer facts.');
  const { reason, quote } = reviewInput.parse(input);
  if (!source.text.includes(quote)) throw new Error('Evidence must quote accepted customer input.');
  store.addReview(token, [{ code: `chat_${reason}`, origin: 'chat', message: messages[reason] }]);
  return store.read(token).review;
}
