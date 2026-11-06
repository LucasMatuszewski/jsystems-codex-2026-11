import { Router } from 'express';
import multer from 'multer';
import { CaseStore } from '../cases/store.js';
import { validateInput, warsawDate, type ReviewReason } from '../domain/rules.js';
import { observationIds } from '../domain/contracts.js';
import { checkImageInput, prepareImage } from '../images/prepare.js';
import { assessDecisions } from '../providers/decisions/client.js';
import { assessEscalation } from '../providers/escalation/client.js';
import { remainingIssueIds } from '../providers/escalation/normalize.js';
import { loadContent } from '../content/load.js';
import { publicCase } from './case.js';

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10_000_000, files: 1, fields: 9 } }).single('image');

export function assessmentRoutes(store: CaseStore) {
  const router = Router();
  router.post('/', upload, async (request, response) => {
    const today = warsawDate(new Date());
    const checked = validateInput(request.body, today);
    const errors = { ...checked.errors };
    const operationId: unknown = request.body?.operationId;
    if (typeof operationId !== 'string' || !/^[A-Za-z0-9_-]{1,100}$/.test(operationId)) errors['form'] = 'Nieprawidłowy identyfikator operacji.';
    if (!request.file) errors['image'] = 'Dodaj jedno zdjęcie.';
    if (!checked.value || Object.keys(errors).length) { response.status(422).json({ errors }); return; }
    const file = request.file!;
    await checkImageInput(file.buffer, file.mimetype);
    const content = await loadContent(checked.value.requestType);
    const operation = store.beginAssessment(operationId as string, checked.value, today);
    const token = operation.caseToken;
    response.set({ 'Content-Type': 'application/x-ndjson; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' });
    response.flushHeaders();
    let terminal = false;
    const write = (record: object) => { if (!response.destroyed) response.write(JSON.stringify({ caseToken: token, operationId, ...record }) + '\n'); };
    const stage = (name: string) => { store.setStage(token, operationId as string, name); write({ type: 'stage', stage: name }); };
    const disconnect = () => { if (!terminal) { try { store.delete(token); } catch { /* Already reset. */ } } };
    response.on('close', disconnect);
    try {
      if (!operation.duplicate) {
        stage('image_preparation');
        const image = await prepareImage(file.buffer, file.mimetype);
        operation.signal.throwIfAborted();
        stage('initial_assessment');
        const decision = await assessDecisions(checked.value, image, operation.signal, operationId as string);
        operation.signal.throwIfAborted();
        let escalation = null;
        const reasons: ReviewReason[] = [];
        const review = (code: string, message: string) => reasons.push({ code, message, origin: 'assessment' });
        if (!decision.available) review('initial_unavailable', 'Wstępna ocena zdjęcia jest niedostępna. Potrzebna weryfikacja pracownika.');
        else {
          stage('escalation');
          escalation = await assessEscalation(checked.value, image, decision, [...observationIds], operation.signal, operationId as string);
          operation.signal.throwIfAborted();
          if (!escalation.available) review('escalation_unavailable', 'Pogłębiona ocena zdjęcia jest niedostępna. Potrzebna weryfikacja pracownika.');
          else if (remainingIssueIds(escalation, [...observationIds]).length || escalation.unknowns.length || escalation.contradictions.length) review('unresolved_evidence', 'Pozostały niepewności lub sprzeczności w ocenie zdjęcia. Potrzebna weryfikacja pracownika.');
        }
        const { bytes, ...metadata } = image;
        store.finishAssessment(token, operationId as string, { decision, escalation, image: metadata, findings: store.read(token).findings, sourceVersions: content.sourceVersions }, reasons);
      }
      write({ type: 'stage', stage: 'ready_for_chat' });
      write({ type: 'result', case: publicCase(store.read(token)) });
      terminal = true;
    } catch {
      if (!response.destroyed) write({ type: 'error', stage: 'assessment', errors: { image: 'Nie udało się zakończyć przetwarzania. Dane formularza pozostają dostępne. Rozpocznij nową ocenę.' } });
      terminal = true;
      try { store.delete(token); } catch { /* Already reset. */ }
    } finally {
      file.buffer = Buffer.alloc(0);
      response.off('close', disconnect);
      response.end();
    }
  });
  return router;
}
