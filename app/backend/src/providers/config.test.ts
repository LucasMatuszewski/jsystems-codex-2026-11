import test from 'node:test';
import assert from 'node:assert/strict';
import { providerConfig } from './config.js';

const synthetic = { OPENROUTER_API_KEY: 'unit-only-not-a-real-key', LLM_MODEL: 'openai/gpt-6-luna', DECISION_MODEL: 'openai/gpt-6-luna-decisions' };
test('server configuration requires the approved actual IDs without silently substituting models', () => {
  assert.equal(providerConfig(synthetic).llmModel, synthetic.LLM_MODEL);
  assert.equal(providerConfig(synthetic).decisionModel, synthetic.DECISION_MODEL);
  for (const environment of [{ ...synthetic, OPENROUTER_API_KEY: '' }, { ...synthetic, LLM_MODEL: 'other' }, { ...synthetic, DECISION_MODEL: undefined }]) {
    assert.throws(() => providerConfig(environment), error => error instanceof Error && !error.message.includes(synthetic.OPENROUTER_API_KEY));
  }
});
