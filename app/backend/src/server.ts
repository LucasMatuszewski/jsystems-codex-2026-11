import express from 'express';
import { fileURLToPath } from 'node:url';

export function createApp() {
  const app = express();
  app.disable('x-powered-by');
  app.get('/api/health', (_request, response) => response.json({ status: 'ok' }));
  app.use(express.static(fileURLToPath(new URL('../../frontend/dist/frontend/browser/', import.meta.url))));
  return app;
}
