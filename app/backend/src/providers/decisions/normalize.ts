import { z } from 'zod';

import type { CaseInput } from '../../domain/rules.js';
import type { PreparedImage } from '../../images/prepare.js';
import { observationIds, type ObservationId, type Observation, type DecisionAssessment } from '../../domain/contracts.js';
export { observationIds } from '../../domain/contracts.js';
export type { ObservationId, Observation, DecisionAssessment } from '../../domain/contracts.js';

export interface DecisionContext {
  form: CaseInput;
  image: Pick<PreparedImage, 'sha256' | 'pipelineVersion' | 'limitations'>;
  requestedModel: string;
}

const QUESTION_VERSION = 'first-slice-questions-v1';

const LIMIT_SINGLE_VIEW = 'Ocena tylko na podstawie jednego widoku.';
const LIMIT_IDENTITY = 'Dokładna tożsamość przedmiotu niezweryfikowana.';
const LIMIT_NO_DIAGNOSIS = 'Bez diagnozy funkcjonalnej i przyczynowej.';
const CONFLICT_NOTE = 'Model wskazał sprzeczne dane. Nie ustalono przyczyny.';
const MODEL_FALLBACK_NOTE = 'Dostawca nie potwierdził wersji modelu; zapisano model wskazany w żądaniu.';

const noulSchema = z.object({
  type: z.literal('noul'),
  noul: z.number().min(0).max(1),
});

const probabilitiesSchema = z.strictObject({
  supported: z.number().min(0).max(1).optional(),
  insufficient: z.number().min(0).max(1).optional(),
  conflicting: z.number().min(0).max(1).optional(),
});

const evidenceSchema = z.object({
  type: z.literal('choice'),
  choice: z.enum(['supported', 'insufficient', 'conflicting']),
  probabilities: probabilitiesSchema.optional(),
  confidence: z.number().optional(),
});

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function returnedDecimals(value: number): number {
  const [mantissa, exponent = '0'] = value.toString().toLowerCase().split('e');
  const dot = mantissa.indexOf('.');
  return Math.max(0, (dot < 0 ? 0 : mantissa.length - dot - 1) - Number(exponent));
}

export function normalizeDecisions(_raw: unknown, _status: number, context: DecisionContext): DecisionAssessment {
  const raw: Record<string, unknown> = isRecord(_raw) ? _raw : {};
  const answers: Record<string, unknown> = isRecord(raw.answers) ? raw.answers : {};
  const rawAnswers = answers;

  const modelField = typeof raw.model === 'string' && raw.model.trim() !== '' ? raw.model : undefined;
  const model = modelField ?? context.requestedModel;
  const provider = typeof raw.provider === 'string' ? raw.provider : undefined;
  const requestId = typeof raw.id === 'string' ? raw.id : undefined;
  const usage = raw.usage;

  const declaredCategory = context.form.category;
  const declaredModel = context.form.model;

  const observations: Observation[] = [];
  const broken: ObservationId[] = [];

  if (_status >= 200 && _status < 300) {
    for (const id of observationIds) {
      const noul = noulSchema.safeParse(answers[id]);
      const evidence = evidenceSchema.safeParse(answers[`${id}_evidence`]);
      if (!noul.success || !evidence.success) {
        broken.push(id);
        continue;
      }

      const p = evidence.data.probabilities ?? undefined;
      const values = [p?.supported, p?.insufficient, p?.conflicting].filter((v): v is number => v !== undefined);
      const complete = values.length === 3;
      if (complete) {
        const sum = values.reduce((a, b) => a + b, 0);
        const decimals = Math.max(...values.map(returnedDecimals));
        const tolerance = (decimals === 0 ? 0 : 1.5 * 10 ** -decimals) + 1e-12;
        if (Math.abs(sum - 1) > tolerance) {
          broken.push(id);
          continue;
        }
      }

      const evidenceStatus: Observation['evidenceStatus'] = complete ? evidence.data.choice : 'insufficient';
      const probability = evidenceStatus === 'supported' ? noul.data.noul : null;
      const conflicts = evidence.data.choice === 'conflicting' ? [CONFLICT_NOTE] : [];

      const basis: Observation['basis'] = {
        imageSha256: context.image.sha256,
        scope: 'pictured_areas',
        origin: 'model_estimate',
      };
      if (id === 'item_relevant') {
        if (declaredCategory !== undefined) basis.declaredCategory = declaredCategory;
        if (declaredModel !== undefined) basis.declaredModel = declaredModel;
      }

      observations.push({
        id,
        probability,
        evidenceStatus,
        basis,
        limitations: [
          LIMIT_SINGLE_VIEW,
          LIMIT_IDENTITY,
          LIMIT_NO_DIAGNOSIS,
          ...context.image.limitations,
          ...conflicts,
          ...(modelField === undefined ? [MODEL_FALLBACK_NOTE] : []),
        ],
        conflicts,
        modelVersion: model,
        questionVersion: QUESTION_VERSION,
        imagePipelineVersion: context.image.pipelineVersion,
      });
    }
  }

  const statusOk = _status >= 200 && _status < 300;
  const reason = !statusOk
    ? `Nieudany status odpowiedzi HTTP (${_status}).`
    : broken.length > 0
      ? `Brak lub nieprawidłowe dane wymagane: ${broken.join(', ')}.`
      : undefined;

  const assessment: DecisionAssessment = {
    available: statusOk && broken.length === 0,
    observations,
    rawAnswers,
    model,
  };
  if (provider !== undefined) assessment.provider = provider;
  if (usage !== undefined) assessment.usage = usage;
  if (requestId !== undefined) assessment.requestId = requestId;
  if (reason !== undefined) {
    const detail = 'Nie udało się uzyskać kompletnej oceny wzrokowej. Wymagana jest weryfikacja.';
    assessment.unavailableReason = modelField === undefined ? `${detail} ${MODEL_FALLBACK_NOTE}` : detail;
  }
  return assessment;
}
