import type { CaseInput, ProcedureFindings, ReviewState } from './rules.js';
import type { PreparedImage } from '../images/prepare.js';

export const observationIds = ['image_usable', 'item_relevant', 'visible_cracks', 'visible_dents', 'visible_scratches'] as const;
export type ObservationId = typeof observationIds[number];
export interface Observation {
  id: ObservationId;
  probability: number | null;
  evidenceStatus: 'supported' | 'insufficient' | 'conflicting';
  basis: { imageSha256: string; scope: 'pictured_areas'; origin: 'model_estimate'; declaredCategory?: string; declaredModel?: string };
  limitations: string[];
  conflicts: string[];
  modelVersion: string;
  questionVersion: string;
  imagePipelineVersion: string;
}
export interface DecisionAssessment {
  available: boolean;
  observations: Observation[];
  rawAnswers: Record<string, unknown>;
  model: string;
  provider?: string;
  usage?: unknown;
  requestId?: string;
  unavailableReason?: string;
}
export interface EscalationAssessment {
  available: boolean;
  observations: { id: ObservationId; finding: string; location: string }[];
  resolvedIssues: { id: ObservationId; evidence: string }[];
  unknowns: string[];
  contradictions: string[];
  model: string;
  requestId?: string;
  unavailableReason?: string;
}
export interface AssessmentResult {
  decision: DecisionAssessment;
  escalation: EscalationAssessment | null;
  image: Omit<PreparedImage, 'bytes'>;
  findings: ProcedureFindings;
  sourceVersions: { version: string; procedureSha256: string; instructionSha256: string };
}
export type AttemptStatus = 'pending' | 'partial' | 'complete' | 'failed' | 'cancelled';
export type ChatIntent = 'intake' | 'follow_up' | 'summary' | 'retry';
export interface ChatAttempt { id: string; operationId: string; status: AttemptStatus; text: string; error?: string }
export interface ChatTurn { id: string; intent: Exclude<ChatIntent, 'retry'>; input: string; attempts: ChatAttempt[] }
export interface OperationView { id: string; kind: 'assessment' | 'chat'; stage: string; state: 'pending' | 'completed' | 'failed' | 'cancelled' }
export interface CaseSnapshot {
  caseToken: string;
  form: CaseInput;
  assessmentDate: string;
  findings: ProcedureFindings;
  review: ReviewState;
  assessment?: AssessmentResult;
  turns: ChatTurn[];
  operation?: OperationView;
  status?: 'review_required' | 'return_guidance' | 'complaint_guidance';
}
