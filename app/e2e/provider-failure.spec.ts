import { test, expect, type Page } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const screenshots = resolve('..', 'docs/qa/first-slice/T13/screenshots');
const today = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Warsaw' }).format(new Date());
const errorText = 'Nie udało się wygenerować odpowiedzi. Wynik oceny pozostaje dostępny.';
const apiResponse = (page: Page, path: string) => page.waitForResponse(response => response.request().method() === 'POST' && new URL(response.url()).pathname === path);

async function rejectedCase(page: Page) {
  await page.goto('/');
  await page.getByLabel('Rodzaj sprawy', { exact: true }).selectOption('Reklamacja');
  await page.getByLabel('Kategoria sprzętu', { exact: true }).selectOption('Laptop');
  await page.getByLabel('Nazwa/model sprzętu', { exact: true }).fill('Dokładny model nieznany');
  await page.getByLabel('Data zakupu', { exact: true }).fill(today);
  await page.getByLabel('Data otrzymania', { exact: true }).fill(today);
  await page.getByLabel('Rodzaj kupującego', { exact: true }).selectOption('Konsument');
  await page.getByLabel('Kanał zakupu', { exact: true }).selectOption('Na odległość');
  await page.locator('textarea[name="description"]').fill('Syntetyczny opis: laptop sporadycznie wyłącza się. Objaw nie jest widoczny na zdjęciu.');
  await page.locator('input[type="file"]').setInputFiles(resolve('..', 'assets/example-images/laptop-2.webp'));
  const pending = apiResponse(page, '/api/assessment');
  const initialChat = page.waitForRequest(request => request.method() === 'POST' && new URL(request.url()).pathname === '/api/chat');
  await page.getByRole('button', { name: 'Przejdź do analizy' }).click();
  const response = await pending;
  expect(response.status()).toBe(200);
  // Chrome may discard the NDJSON body when the app stops reading after its terminal record.
  const token = (await initialChat).postDataJSON().caseToken as string;
  await expect(page.locator('app-case-panel')).toContainText('Wymagana weryfikacja przez pracownika');
  await expect(page.locator('app-chat-view [role="alert"]')).toContainText(errorText, { timeout: 30000 });
  await expect(page.locator('app-chat-view details.incomplete')).toHaveCount(1);
  await expect(page.getByRole('button', { name: 'Ponów odpowiedź' })).toBeVisible();
  const current = await page.request.get('/api/case', { headers: { 'x-case-token': token } });
  const saved = await current.json();
  expect(saved.assessment.decision.available).toBe(false);
  expect(saved.assessment.decision.observations).toEqual([]);
  expect(saved.assessment.escalation).toBeNull();
  return token;
}

async function assertNoGeneratedText(page: Page) {
  const text = await page.locator('app-chat-view article:not(.user) .message-text').allTextContents();
  expect(text.filter(part => part.trim())).toEqual([]);
  expect(await page.locator('body').innerText()).not.toMatch(/synthetic-invalid-credential|Bearer|APICallError|requestBodyValues|stack.?trace/i);
}

test('real provider failure retains structured fallback and both failed attempts through retry and reset', async ({ page }) => {
  test.setTimeout(0);
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  let assessments = 0;
  page.on('request', request => { if (request.method() === 'POST' && new URL(request.url()).pathname === '/api/assessment') assessments++; });
  await mkdir(screenshots, { recursive: true });
  const token = await rejectedCase(page);
  await assertNoGeneratedText(page);
  await expect(page.locator('details.incomplete .message-text')).toContainText('Nie otrzymano tekstu. Wynik oceny jest dostępny w panelu sprawy.');
  await page.screenshot({ path: resolve(screenshots, 'provider-structured-error.png'), fullPage: true });
  const pending = apiResponse(page, '/api/chat');
  await page.getByRole('button', { name: 'Ponów odpowiedź' }).click();
  expect((await pending).status()).toBe(200);
  await expect(page.locator('app-chat-view details.incomplete')).toHaveCount(2);
  await assertNoGeneratedText(page);
  const current = await page.request.get('/api/case', { headers: { 'x-case-token': token } });
  const saved = await current.json();
  expect(saved.turns).toHaveLength(1);
  expect(saved.turns[0].attempts.map((attempt: { status: string }) => attempt.status)).toEqual(['failed', 'failed']);
  expect(saved.review.required).toBe(true);
  expect(assessments).toBe(1);
  await page.screenshot({ path: resolve(screenshots, 'provider-failed-retry.png'), fullPage: true });
  await page.getByRole('button', { name: 'Nowa sprawa', exact: true }).click();
  await page.getByRole('button', { name: 'Rozpocznij nową sprawę', exact: true }).click();
  await expect(page.getByLabel('Nazwa/model sprzętu', { exact: true })).toHaveValue('');
  await expect(page.locator('app-case-panel')).toHaveCount(0);
  expect((await page.request.get('/api/case', { headers: { 'x-case-token': token } })).status()).toBe(410);
  expect(errors).toEqual([]);
});

test('a rejected oversized follow-up retains its draft and retries the last canonical failed turn', async ({ page }) => {
  test.setTimeout(0);
  const token = await rejectedCase(page);
  const rejectedText = 'Syntetyczne pytanie. '.repeat(8000);
  const composer = page.getByLabel('Wiadomość o tej sprawie', { exact: true });
  await composer.fill(rejectedText);
  const rejected = apiResponse(page, '/api/chat');
  await page.getByRole('button', { name: 'Wyślij', exact: true }).click();
  expect((await rejected).status()).toBe(413);
  await expect(composer).toHaveValue(rejectedText);
  await expect(page.getByRole('button', { name: 'Ponów odpowiedź' })).toBeVisible();
  const retry = apiResponse(page, '/api/chat');
  await page.getByRole('button', { name: 'Ponów odpowiedź' }).click();
  const response = await retry;
  expect(response.status()).toBe(200);
  expect(response.request().postDataJSON()).not.toHaveProperty('messages');
  await expect(page.locator('app-chat-view details.incomplete')).toHaveCount(2);
  await expect(page.locator('app-chat-view article.user')).toHaveCount(0);
  const current = await page.request.get('/api/case', { headers: { 'x-case-token': token } });
  const saved = await current.json();
  expect(saved.turns).toHaveLength(1);
  expect(saved.turns[0].intent).toBe('intake');
  expect(saved.turns[0].attempts).toHaveLength(2);
  await assertNoGeneratedText(page);
  await page.request.delete('/api/case', { headers: { 'x-case-token': token } });
});
