import { defineConfig } from '@playwright/test';

// Separate negative profile: the coordinator serves the compiled stack on 127.0.0.1:3001
// with a process-local synthetic invalid credential while .env stays unchanged.
export default defineConfig({
  testDir: '.',
  testMatch: 'provider-failure.spec.ts',
  use: { baseURL: 'http://127.0.0.1:3001', browserName: 'chromium', channel: 'chrome' },
  reporter: 'list',
});
