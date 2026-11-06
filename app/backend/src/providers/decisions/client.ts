import type { CaseInput } from '../../domain/rules.js';
import type { PreparedImage } from '../../images/prepare.js';
import { normalizeDecisions } from './normalize.js';
import { buildDecisionRequest } from './request.js';
import { providerConfig } from '../config.js';

export async function assessDecisions(form: CaseInput, image: PreparedImage, signal?: AbortSignal, operationId?: string) {
  const context = { form, image, requestedModel: process.env['DECISION_MODEL'] ?? 'unconfigured' };
  try {
    const config = providerConfig();
    const response = await fetch('https://openrouter.ai/api/alpha/decisions', {
      method: 'POST', headers: { authorization: `Bearer ${config.apiKey}`, 'content-type': 'application/json' },
      body: JSON.stringify(buildDecisionRequest(form, image, config.decisionModel)), signal,
    });
    const raw: unknown = await response.json().catch(() => null);
    const result = normalizeDecisions(raw, response.status, context);
    result.requestId ??= response.headers.get('x-generation-id') ?? undefined;
    console.info(JSON.stringify({ event: 'provider-call', stage: 'initial_assessment', operationId, httpStatus: response.status, requestId: result.requestId }));
    return { ...result, httpStatus: response.status };
  } catch (error) {
    if (signal?.aborted) throw error;
    console.info(JSON.stringify({ event: 'provider-call-failed', stage: 'initial_assessment', operationId, errorName: error instanceof Error ? error.name : 'UnknownError' }));
    return { ...normalizeDecisions(null, 0, context), httpStatus: 0 };
  }
}
