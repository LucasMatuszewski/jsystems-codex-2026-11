import { Router } from 'express';
import type { CaseSnapshot } from '../domain/contracts.js';
import type { CaseStore } from '../cases/store.js';

export function publicCase(snapshot: CaseSnapshot) {
  if (!snapshot.assessment) return snapshot;
  const { rawAnswers, usage, ...decision } = snapshot.assessment.decision;
  return { ...snapshot, assessment: { ...snapshot.assessment, decision } };
}

export function caseRoutes(store: CaseStore) {
  const router = Router();
  router.get('/', (request, response) => response.json(publicCase(store.read(request.get('x-case-token') ?? ''))));
  router.delete('/', (request, response) => { store.delete(request.get('x-case-token') ?? ''); response.sendStatus(204); });
  return router;
}
