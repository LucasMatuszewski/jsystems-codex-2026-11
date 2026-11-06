export function providerConfig(environment: Record<string, string | undefined> = process.env) {
  const apiKey = environment['OPENROUTER_API_KEY'];
  const llmModel = environment['LLM_MODEL'];
  const decisionModel = environment['DECISION_MODEL'];
  if (!apiKey?.trim() || llmModel !== 'openai/gpt-6-luna' || decisionModel !== 'openai/gpt-6-luna-decisions') throw new Error('Usługa modelowa nie jest poprawnie skonfigurowana.');
  return { apiKey, llmModel, decisionModel };
}
