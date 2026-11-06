import { z } from 'zod';

import { observationIds, type ObservationId } from '../../domain/contracts.js';
import normalizeModelText from '../../domain/text.js';

export interface EscalationObservation {
  id: ObservationId;
  finding: string;
  location: string;
}

export interface EscalationResolution {
  id: ObservationId;
  evidence: string;
}

export interface EscalationAssessment {
  available: boolean;
  observations: EscalationObservation[];
  resolvedIssues: EscalationResolution[];
  unknowns: string[];
  contradictions: string[];
  model: string;
  requestId?: string;
  unavailableReason?: string;
}

const cleanText = (value: string): string => normalizeModelText(value).trim();

const observationIdSchema = z.enum(observationIds);

const requiredText = z.string().trim().min(1).transform(cleanText);

const noteText = requiredText;

export const escalationSchema = z.strictObject({
  observations: z.array(
    z.strictObject({
      id: observationIdSchema,
      finding: requiredText,
      location: requiredText,
    }),
  ),
  resolvedIssues: z.array(
    z.strictObject({
      id: observationIdSchema,
      evidence: requiredText,
    }),
  ),
  unknowns: z.array(noteText),
  contradictions: z.array(noteText),
});

const UNAVAILABLE_REASON = 'Nie udało się przetworzyć odpowiedzi modelu.';

export function normalizeEscalation(
  raw: unknown,
  metadata: { model: string; requestId?: string },
): EscalationAssessment {
  const model = cleanText(metadata.model);
  const parsed = escalationSchema.safeParse(raw);

  let result: EscalationAssessment;
  if (parsed.success) {
    const observations = parsed.data.observations;
    result = {
      available: true,
      observations,
      resolvedIssues: parsed.data.resolvedIssues.filter((issue) =>
        observations.some((observation) => observation.id === issue.id),
      ),
      unknowns: parsed.data.unknowns,
      contradictions: parsed.data.contradictions,
      model,
    };
  } else {
    result = {
      available: false,
      observations: [],
      resolvedIssues: [],
      unknowns: [],
      contradictions: [],
      model,
      unavailableReason: cleanText(UNAVAILABLE_REASON),
    };
  }

  const requestId = metadata.requestId === undefined ? undefined : cleanText(metadata.requestId);
  if (requestId !== undefined && requestId !== '') {
    result.requestId = requestId;
  }
  return result;
}

export function remainingIssueIds(
  result: EscalationAssessment,
  pending: ObservationId[],
): ObservationId[] {
  if (!result.available) {
    return [...pending];
  }
  const resolvedIds = new Set<ObservationId>(
    result.resolvedIssues
      .filter((issue) => {
        const observation = result.observations.find((candidate) => candidate.id === issue.id);
        return (
          observation !== undefined &&
          observation.finding.trim().length > 0 &&
          observation.location.trim().length > 0 &&
          issue.evidence.trim().length > 0
        );
      })
      .map((issue) => issue.id),
  );
  return pending.filter((id) => !resolvedIds.has(id));
}
