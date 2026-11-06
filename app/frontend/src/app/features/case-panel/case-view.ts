export interface CaseView {
  caseToken: string;
  form: Record<string, string>;
  assessmentDate: string;
  status?: 'review_required' | 'return_guidance' | 'complaint_guidance';
  review: { required: boolean; reasons: { code: string; message: string; origin: string }[] };
  findings: { daysSinceReceipt: number; withinStatutoryBaseline: boolean; withinCompanyBaseline: boolean; withinComplaintBaseline: boolean; limitations: string[]; sourceIds: string[]; sourceVersion: string };
  assessment?: {
    decision: { available: boolean; unavailableReason?: string; model: string; observations: { id: string; probability: number | null; evidenceStatus: string; limitations: string[]; conflicts: string[]; modelVersion: string; questionVersion: string; imagePipelineVersion: string }[] };
    escalation: { available: boolean; unavailableReason?: string; model: string; observations: { id: string; finding: string; location: string }[]; resolvedIssues: { id: string; evidence: string }[]; unknowns: string[]; contradictions: string[] } | null;
    image: { sourceWidth: number; sourceHeight: number; width: number; height: number; inputBytes: number; outputBytes: number; limitations: string[]; pipelineVersion: string };
    sourceVersions: { version: string; procedureSha256: string; instructionSha256: string };
  };
  turns: { id: string; intent: string; input: string; attempts: { id: string; operationId: string; status: string; text: string; error?: string }[] }[];
  operation?: { id: string; kind: string; stage: string; state: string };
}
