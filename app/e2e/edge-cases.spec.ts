import { test, expect } from '@playwright/test';
import { readFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const today = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Warsaw' }).format(new Date());
const futureDate = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Warsaw' }).format(
  new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
);
const screenshotDirectory = resolve('..', 'docs/qa/first-slice/T13/screenshots');
const laptopImage = resolve('..', 'assets/example-images', 'laptop-2.webp');
const phoneImage = resolve('..', 'assets/example-images', 'phone-2.jpeg');

async function takeScreenshot(page: import('@playwright/test').Page, name: string): Promise<void> {
  await mkdir(screenshotDirectory, { recursive: true });
  await page.screenshot({ path: resolve(screenshotDirectory, name), fullPage: true });
}

async function fillValidLaptopReturnForm(
  page: import('@playwright/test').Page,
  image = laptopImage,
): Promise<void> {
  await page.getByLabel('Rodzaj sprawy', { exact: true }).selectOption('Zwrot');
  await page.getByLabel('Kategoria sprzętu', { exact: true }).selectOption('Laptop');
  await page.getByLabel('Nazwa/model sprzętu', { exact: true }).fill('Dokładny model nieznany');
  await page.getByLabel('Data zakupu', { exact: true }).fill(today);
  await page.getByLabel('Data otrzymania', { exact: true }).fill(today);
  await page.getByLabel('Rodzaj kupującego', { exact: true }).selectOption('Konsument');
  await page.getByLabel('Kanał zakupu', { exact: true }).selectOption('Na odległość');
  await page.locator('input[type="file"]').setInputFiles(image);
}

test('local validation errors retain fields and the single photo chooser cannot accept a second file', async ({ page }) => {
  const errors: string[] = [];
  const expectedValidationErrors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => {
    if (message.type() !== 'error') return;
    const location = message.location().url;
    if (message.text().includes('status of 422') && location.endsWith('/api/assessment')) expectedValidationErrors.push(message.text());
    else errors.push(message.text());
  });
  const assessmentPosts: string[] = [];
  page.on('request', request => {
    if (request.method() === 'POST' && new URL(request.url()).pathname === '/api/assessment') {
      assessmentPosts.push(request.url());
    }
  });

  await page.goto('/');
  await expect(page.locator('app-intake')).toBeVisible({ timeout: 2000 });

  const requestType = page.getByLabel('Rodzaj sprawy', { exact: true });
  await expect(requestType.locator('option')).toHaveCount(3);
  await expect(requestType.locator('option')).toHaveText(['Wybierz', 'Zwrot', 'Reklamacja']);

  const category = page.getByLabel('Kategoria sprzętu', { exact: true });
  await expect(category.locator('option')).toHaveCount(5);
  await expect(category.locator('option')).toHaveText([
    'Wybierz',
    'Laptop',
    'Smartfon',
    'Monitor',
    'Akcesorium komputerowe',
  ]);

  // The real invisible chooser is the only attachment input and accepts setInputFiles.
  const fileInput = page.locator('input[type="file"]');
  await expect(fileInput).toHaveCount(1);
  await expect(fileInput).toBeHidden();
  await fileInput.setInputFiles(phoneImage);
  await expect(page.getByRole('button', { name: 'Zastąp zdjęcie' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Usuń zdjęcie' })).toBeVisible();
  const previewImage = page.locator('.preview img');
  await expect(previewImage).toBeVisible();
  await expect(previewImage).toHaveAttribute('src', /^blob:/);
  await takeScreenshot(page, 'T13-local-preview.png');

  // One chooser means the client cannot attach a second file.
  await expect(page.locator('input[type="file"]')).toHaveCount(1);
  await page.getByRole('button', { name: 'Usuń zdjęcie' }).click();
  await expect(previewImage).toHaveCount(0);
  await expect(page.getByRole('button', { name: 'Wybierz zdjęcie' })).toBeVisible();
  await fileInput.setInputFiles(laptopImage);
  await expect(previewImage).toHaveAttribute('src', /^blob:/);

  // Empty submit is blocked locally and sends no assessment request.
  await page.getByRole('button', { name: 'Przejdź do analizy' }).click();
  await expect(page.locator('.error-summary')).toContainText('Sprawdź dane formularza');
  expect(assessmentPosts).toHaveLength(0);

  // Complaint description is required, while return description is optional.
  await requestType.selectOption('Reklamacja');
  await category.selectOption('Smartfon');
  await page.getByLabel('Nazwa/model sprzętu', { exact: true }).fill('Model testowy');
  await page.getByLabel('Data zakupu', { exact: true }).fill(today);
  await page.getByLabel('Data otrzymania', { exact: true }).fill(today);
  await page.getByLabel('Rodzaj kupującego', { exact: true }).selectOption('Konsument');
  await page.getByLabel('Kanał zakupu', { exact: true }).selectOption('W salonie');
  await page.getByRole('button', { name: 'Przejdź do analizy' }).click();
  await expect(page.locator('#error-description')).toBeVisible();
  expect(assessmentPosts).toHaveLength(0);

  await requestType.selectOption('Zwrot');
  await expect(page.locator('#error-description')).toHaveCount(0);
  await requestType.selectOption('Reklamacja');

  // Future purchase date is rejected and every other entered field is retained.
  await page.getByLabel('Data zakupu', { exact: true }).fill(futureDate);
  await page.getByRole('button', { name: 'Przejdź do analizy' }).click();
  await expect(page.locator('#error-purchaseDate')).toBeVisible();
  await expect(requestType).toHaveValue('Reklamacja');
  await expect(category).toHaveValue('Smartfon');
  await expect(page.getByLabel('Nazwa/model sprzętu', { exact: true })).toHaveValue('Model testowy');
  await expect(page.getByLabel('Data otrzymania', { exact: true })).toHaveValue(today);
  await expect(page.getByLabel('Rodzaj kupującego', { exact: true })).toHaveValue('Konsument');
  await expect(page.getByLabel('Kanał zakupu', { exact: true })).toHaveValue('W salonie');
  expect(assessmentPosts).toHaveLength(0);

  // Receipt before purchase is rejected with the same retained fields.
  await page.getByLabel('Data zakupu', { exact: true }).fill(today);
  await page.getByLabel('Data otrzymania', { exact: true }).fill('2020-01-01');
  await page.getByRole('button', { name: 'Przejdź do analizy' }).click();
  await expect(page.locator('#error-receiptDate')).toBeVisible();
  await expect(requestType).toHaveValue('Reklamacja');
  await expect(category).toHaveValue('Smartfon');
  await expect(page.getByLabel('Nazwa/model sprzętu', { exact: true })).toHaveValue('Model testowy');
  await expect(page.getByLabel('Data zakupu', { exact: true })).toHaveValue(today);
  await expect(page.getByLabel('Rodzaj kupującego', { exact: true })).toHaveValue('Konsument');
  expect(assessmentPosts).toHaveLength(0);

  // Whitespace cannot satisfy a required field.
  await page.getByLabel('Data otrzymania', { exact: true }).fill(today);
  await page.getByLabel('Nazwa/model sprzętu', { exact: true }).fill('   ');
  await page.getByRole('button', { name: 'Przejdź do analizy' }).click();
  await expect(page.locator('#error-model')).toBeVisible();
  await expect(requestType).toHaveValue('Reklamacja');
  await expect(category).toHaveValue('Smartfon');
  await expect(page.getByLabel('Data zakupu', { exact: true })).toHaveValue(today);
  await expect(page.getByLabel('Data otrzymania', { exact: true })).toHaveValue(today);
  expect(assessmentPosts).toHaveLength(0);

  await page.getByLabel('Nazwa/model sprzętu', { exact: true }).fill('Model testowy');
  await page.getByLabel('Data zakupu', { exact: true }).fill(today);
  await page.getByLabel('Data otrzymania', { exact: true }).fill(today);

  // Local byte-size rejection: approved phone JPEG bytes plus in-memory padding.
  const approvedJpegBytes = await readFile(phoneImage);
  const oversizedBytes = Buffer.concat([approvedJpegBytes, Buffer.alloc(10_000_001 - approvedJpegBytes.length)]);
  await fileInput.setInputFiles({
    name: 'phone-oversized.jpeg',
    mimeType: 'image/jpeg',
    buffer: oversizedBytes,
  });
  await expect(page.locator('#error-image')).toBeVisible();
  expect(assessmentPosts).toHaveLength(0);

  // Unsupported local type is rejected before any request.
  await fileInput.setInputFiles({
    name: 'notes.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('Niepoprawny typ pliku testowego'),
  });
  await expect(page.locator('#error-image')).toBeVisible();
  expect(assessmentPosts).toHaveLength(0);

  // WebP bytes declared as JPEG reach the local API, whose 422 is authoritative.
  await page.locator('textarea[name="description"]').fill('Syntetyczny opis: telefon sporadycznie wyłącza się.');
  const declaredJpeg = {
    name: 'laptop-declared.jpeg',
    mimeType: 'image/jpeg',
    buffer: await readFile(laptopImage),
  };
  const assessmentResponsePromise = page.waitForResponse(
    response => new URL(response.url()).pathname === '/api/assessment',
  );
  await fileInput.setInputFiles(declaredJpeg);
  await page.getByRole('button', { name: 'Przejdź do analizy' }).click();
  const assessmentResponse = await assessmentResponsePromise;
  expect(assessmentResponse.status()).toBe(422);
  await expect(page.locator('.error-summary')).toBeVisible();
  await expect(page.getByLabel('Rodzaj sprawy', { exact: true })).toHaveValue('Reklamacja');
  await expect(page.getByLabel('Kategoria sprzętu', { exact: true })).toHaveValue('Smartfon');
  await expect(page.getByLabel('Nazwa/model sprzętu', { exact: true })).toHaveValue('Model testowy');
  await expect(page.getByLabel('Data zakupu', { exact: true })).toHaveValue(today);
  await expect(page.getByLabel('Data otrzymania', { exact: true })).toHaveValue(today);
  await expect(page.getByLabel('Rodzaj kupującego', { exact: true })).toHaveValue('Konsument');
  await expect(page.getByLabel('Kanał zakupu', { exact: true })).toHaveValue('W salonie');
  expect(assessmentPosts).toHaveLength(1);
  expect(new URL(assessmentPosts[0]).pathname).toBe('/api/assessment');
  expect(expectedValidationErrors.length).toBeLessThanOrEqual(1);
  expect(errors).toEqual([]);
});

test('business review stays required through summary, stop, retained partial and retry', async ({ page }) => {
  test.setTimeout(0);
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text());
  });
  const assessmentPosts: string[] = [];
  page.on('request', request => {
    if (request.method() === 'POST' && new URL(request.url()).pathname === '/api/assessment') {
      assessmentPosts.push(request.url());
    }
  });

  await page.goto('/');
  await expect(page.locator('app-intake')).toBeVisible({ timeout: 2000 });
  await page.getByLabel('Rodzaj sprawy', { exact: true }).selectOption('Reklamacja');
  await page.getByLabel('Kategoria sprzętu', { exact: true }).selectOption('Laptop');
  await page.getByLabel('Nazwa/model sprzętu', { exact: true }).fill('Dokładny model nieznany');
  await page.getByLabel('Data zakupu', { exact: true }).fill(today);
  await page.getByLabel('Data otrzymania', { exact: true }).fill(today);
  await page.getByLabel('Rodzaj kupującego', { exact: true }).selectOption('Zakup firmowy');
  await page.getByLabel('Kanał zakupu', { exact: true }).selectOption('Na odległość');
  await page.locator('textarea[name="description"]').fill(
    'Syntetyczny opis: laptop traci zasilanie pod obciążeniem. Objaw nie jest widoczny na zdjęciu.',
  );
  await page.locator('input[type="file"]').setInputFiles(laptopImage);
  await takeScreenshot(page, 'T13-business-intake.png');
  await page.getByRole('button', { name: 'Przejdź do analizy' }).click();

  await expect(page.getByTestId('assessment-progress')).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Wynik wstępnej oceny' })).toBeVisible({ timeout: 180000 });
  await expect(page.locator('app-case-panel')).toContainText('Wymagana weryfikacja przez pracownika');
  await expect(page.getByRole('heading', { name: 'Rozmowa o sprawie' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Podsumuj sprawę' })).toBeEnabled({ timeout: 240000 });
  await expect(page.locator('app-chat-view article:not(.user)').first()).toBeVisible({ timeout: 180000 });
  await takeScreenshot(page, 'T13-business-review-initial.png');

  // A normal business followup must add a fresh assistant answer.
  await page.getByLabel('Wiadomość o tej sprawie', { exact: true }).fill(
    'Czy jako firma muszę przekazywać dodatkowe dokumenty i jaki jest status sprawy?',
  );
  const replies = page.locator('app-chat-view article:not(.user)');
  const repliesBefore = await replies.count();
  await page.getByRole('button', { name: 'Wyślij', exact: true }).click();
  await expect(replies).toHaveCount(repliesBefore + 1, { timeout: 240000 });
  await expect(page.getByRole('button', { name: 'Podsumuj sprawę' })).toBeEnabled({ timeout: 240000 });
  const businessReply = replies.last();
  await expect(businessReply).toContainText(/firm|przedsiębiorc/i);
  await expect(businessReply).toContainText(/zawodow|profesjonaln|działalno/i);
  await expect(businessReply).not.toContainText(/dowód osobisty|numer pesel|numer nip|dokument tożsamości|zaświadczenie/i);
  await expect(page.locator('app-case-panel')).toContainText('Wymagana weryfikacja przez pracownika');
  await takeScreenshot(page, 'T13-business-review-after-reply.png');

  // Summary content is newly generated assistant output, not static case-panel text.
  const summaryButton = page.getByRole('button', { name: 'Podsumuj sprawę' });
  await expect(summaryButton).toBeEnabled();
  const summaryArticlesBefore = await replies.count();
  await summaryButton.click();
  await expect(replies).toHaveCount(summaryArticlesBefore + 1, { timeout: 240000 });
  await expect(summaryButton).toBeEnabled({ timeout: 240000 });
  const summaryReply = replies.last();
  await expect(summaryReply).toContainText(/aktualn.*status|status/i);
  await expect(summaryReply).toContainText(/ustalon|potwierdz|fakt/i);
  await expect(summaryReply).toContainText(/niewiadom|nieustalon|wymaga.*ustal|do wyjaśnienia/i);
  await expect(summaryReply).toContainText(/następn|dalej|kolejn/i);
  await expect(page.locator('app-case-panel')).toContainText('Wymagana weryfikacja przez pracownika');
  await takeScreenshot(page, 'T13-business-summary.png');

  // Stop a fresh assistant reply while it streams; assistant replies only (article:not(.user)).
  await page.getByLabel('Wiadomość o tej sprawie', { exact: true }).fill(
    'Dziękuję. Uzupełniam fakty: laptop był używany wyłącznie służbowo, usterka występuje przy obciążeniu, a zdjęcia i faktura są bez danych osobowych. Co powinienem zrobić dalej?',
  );
  const repliesBeforeStop = await replies.count();
  await page.getByRole('button', { name: 'Wyślij', exact: true }).click();
  await expect(replies).toHaveCount(repliesBeforeStop + 1, { timeout: 240000 });
  const streamingAssistantText = replies.last().locator('p.message-text');
  await expect(streamingAssistantText.first()).toHaveText(/^\s*\S.*$/s, { timeout: 240000 });
  // Stop immediately while the stop button is visible; a partial screenshot after cancellation is sufficient.
  const stopButton = page.getByRole('button', { name: 'Przerwij odpowiedź' });
  await expect(stopButton).toBeVisible();
  await stopButton.click();

  const savedPartial = page.locator('app-chat-view details.incomplete');
  await expect(savedPartial).toHaveCount(1, { timeout: 120000 });
  await expect(savedPartial.locator('summary')).toContainText('Niepełna odpowiedź');
  const stoppedText = (await savedPartial.locator('p.message-text').first().innerText()).trim();
  expect(stoppedText.length).toBeGreaterThan(0);
  await expect(page.locator('app-case-panel')).toContainText('Wymagana weryfikacja przez pracownika');
  await takeScreenshot(page, 'T13-business-partial.png');

  // Retry completes a new answer but preserves the saved stopped attempt exactly once; it is not cleared.
  const articlesBeforeRetry = await replies.count();
  await page.getByRole('button', { name: 'Ponów odpowiedź' }).click();
  await expect(replies).toHaveCount(articlesBeforeRetry + 1, { timeout: 300000 });
  await expect(page.getByRole('button', { name: 'Podsumuj sprawę' })).toBeEnabled({ timeout: 300000 });
  await expect(page.locator('app-chat-view details.incomplete')).toHaveCount(1);
  await expect(page.locator('app-chat-view details.incomplete p.message-text').first()).toHaveText(stoppedText);
  const completedReply = replies.last();
  await expect(completedReply.locator('p.message-text').first()).toHaveText(/^\s*\S.*$/s, { timeout: 300000 });
  await expect(page.locator('app-case-panel')).toContainText('Wymagana weryfikacja przez pracownika');
  await takeScreenshot(page, 'T13-business-retry.png');

  // Exactly one assessment request; chat, summary and retry remain conversation-only.
  expect(assessmentPosts).toHaveLength(1);
  expect(new URL(assessmentPosts[0]).pathname).toBe('/api/assessment');
  expect(errors).toEqual([]);
});

test('reset during assessment and refresh both start from clean state', async ({ page }) => {
  test.setTimeout(0);
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text());
  });

  await page.goto('/');
  await expect(page.locator('app-intake')).toBeVisible({ timeout: 2000 });
  await fillValidLaptopReturnForm(page);
  await page.getByRole('button', { name: 'Przejdź do analizy' }).click();
  await expect(page.getByTestId('assessment-progress')).toBeVisible({ timeout: 20000 });
  await takeScreenshot(page, 'T13-reset-progress.png');

  await page.getByRole('button', { name: 'Nowa sprawa', exact: true }).click();
  await takeScreenshot(page, 'T13-reset-dialog.png');
  await page.getByRole('button', { name: 'Rozpocznij nową sprawę', exact: true }).click();

  await expect(page.locator('app-intake')).toBeVisible({ timeout: 20000 });
  await expect(page.getByLabel('Rodzaj sprawy', { exact: true })).toHaveValue('');
  await expect(page.getByLabel('Kategoria sprzętu', { exact: true })).toHaveValue('');
  await expect(page.getByLabel('Nazwa/model sprzętu', { exact: true })).toHaveValue('');
  await expect(page.getByLabel('Data zakupu', { exact: true })).toHaveValue('');
  await expect(page.getByLabel('Data otrzymania', { exact: true })).toHaveValue('');
  await expect(page.locator('input[type="file"]')).toHaveCount(1);
  await expect(page.locator('.preview img')).toHaveCount(0);
  await expect(page.locator('app-case-panel')).toHaveCount(0);
  await expect(page.locator('app-chat-view')).toHaveCount(0);
  await expect(page.getByTestId('session-error')).toHaveCount(0);
  await expect(page.getByTestId('assessment-progress')).toHaveCount(0);
  await takeScreenshot(page, 'T13-reset-empty-form.png');

  await page.reload();
  await expect(page.locator('app-intake')).toBeVisible({ timeout: 2000 });
  await expect(page.getByLabel('Rodzaj sprawy', { exact: true })).toHaveValue('');
  await expect(page.getByLabel('Kategoria sprzętu', { exact: true })).toHaveValue('');
  await expect(page.getByLabel('Nazwa/model sprzętu', { exact: true })).toHaveValue('');
  await expect(page.getByLabel('Data zakupu', { exact: true })).toHaveValue('');
  await expect(page.getByLabel('Data otrzymania', { exact: true })).toHaveValue('');
  await expect(page.locator('.preview img')).toHaveCount(0);
  await expect(page.locator('app-case-panel')).toHaveCount(0);
  await expect(page.locator('app-chat-view')).toHaveCount(0);
  await expect(page.getByTestId('session-error')).toHaveCount(0);
  await takeScreenshot(page, 'T13-refresh-empty-form.png');
  expect(errors).toEqual([]);
});
