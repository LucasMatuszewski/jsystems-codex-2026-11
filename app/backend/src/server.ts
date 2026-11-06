import express from 'express';
import { fileURLToPath } from 'node:url';
import { CaseStore, CaseError } from './cases/store.js';
import { ImagePreparationError } from './images/prepare.js';
import { assessmentRoutes } from './routes/assessment.js';
import { caseRoutes } from './routes/case.js';
import multer from 'multer';

export function createApp() {
  const app = express();
  app.disable('x-powered-by');
  const store = new CaseStore();
  app.use('/api', (request, response, next) => {
    response.set('Cache-Control', 'no-store');
    const origin = request.get('origin');
    const allowed = [`http://${request.get('host')}`, 'http://127.0.0.1:4200', 'http://localhost:4200'];
    if (!['127.0.0.1', 'localhost', '[::1]'].includes(request.hostname) || (origin && !allowed.includes(origin))) { response.status(403).json({ error: 'Niedozwolone źródło żądania.' }); return; }
    next();
  });
  app.get('/api/health', (_request, response) => response.json({ status: 'ok' }));
  app.use('/api/assessment', assessmentRoutes(store));
  app.use('/api/case', caseRoutes(store));
  app.use('/api', (_request, response) => response.status(404).json({ error: 'Nie znaleziono żądanej operacji.' }));
  app.use((error: unknown, _request: express.Request, response: express.Response, _next: express.NextFunction) => {
    if (response.headersSent) { response.end(); return; }
    if (error instanceof CaseError) { response.status(error.status).json({ error: error.message }); return; }
    if (error instanceof ImagePreparationError) { response.status(error.status).json({ errors: { image: error.message } }); return; }
    if (error instanceof multer.MulterError) { response.status(error.code === 'LIMIT_FILE_SIZE' ? 413 : 422).json({ errors: { image: 'Dodaj jedno zdjęcie JPEG, PNG lub WebP do 10 000 000 bajtów.' } }); return; }
    response.status(500).json({ error: 'Nie udało się przetworzyć żądania. Spróbuj rozpocząć nową sprawę.' });
  });
  app.use(express.static(fileURLToPath(new URL('../../frontend/dist/frontend/browser/', import.meta.url))));
  return app;
}
