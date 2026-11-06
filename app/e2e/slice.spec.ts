import { test, expect } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const today = new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Warsaw' }).format(new Date());
const screenshotDirectory = resolve('..', 'docs/qa/first-slice/T13/screenshots');
const scenarios = [
  { key: 'return', requestType: 'Zwrot', category: 'Laptop', image: 'laptop-2.webp', description: '', recall: /laptop/i },
  { key: 'complaint', requestType: 'Reklamacja', category: 'Smartfon', image: 'phone-2.jpeg', description: 'Syntetyczny opis: telefon sporadycznie wyłącza się podczas rozmowy. Objaw nie jest widoczny na zdjęciu.', recall: /smartfon|telefon/i },
];

for (const scenario of scenarios) {
  test(`real connected ${scenario.key} flow, contextual reply and confirmed reset`, async ({ page }) => {
    test.setTimeout(0);
    const errors: string[] = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
    await mkdir(screenshotDirectory, { recursive: true });
    await page.goto('/');
    await expect(page.locator('app-intake')).toBeVisible({ timeout: 1500 });
    await page.getByLabel('Rodzaj sprawy', { exact: true }).selectOption(scenario.requestType);
    await page.getByLabel('Kategoria sprzętu', { exact: true }).selectOption(scenario.category);
    await page.getByLabel('Nazwa/model sprzętu', { exact: true }).fill('Dokładny model nieznany');
    await page.getByLabel('Data zakupu', { exact: true }).fill(today);
    await page.getByLabel('Data otrzymania', { exact: true }).fill(today);
    await page.getByLabel('Rodzaj kupującego', { exact: true }).selectOption('Konsument');
    await page.getByLabel('Kanał zakupu', { exact: true }).selectOption(scenario.key === 'complaint' ? 'W salonie' : 'Na odległość');
    if (scenario.description) await page.locator('textarea[name="description"]').fill(scenario.description);
    await page.locator('input[type="file"]').setInputFiles(resolve('..', 'assets/example-images', scenario.image));
    await page.screenshot({ path: resolve(screenshotDirectory, `${scenario.key}-intake.png`), fullPage: true });
    await page.getByRole('button', { name: 'Przejdź do analizy' }).click();
    await expect(page.getByTestId('assessment-progress')).toBeVisible();
    await page.screenshot({ path: resolve(screenshotDirectory, `${scenario.key}-progress.png`), fullPage: true });
    await expect(page.getByRole('heading', { name: 'Wynik wstępnej oceny' })).toBeVisible({ timeout: 120000 });
    await expect(page.getByRole('heading', { name: 'Rozmowa o sprawie' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Podsumuj sprawę' })).toBeEnabled({ timeout: 120000 });
    const answers = page.locator('app-chat-view article:not(.user)');
    await expect(answers.first()).toContainText(/Dzień dobry|Witaj|Cześć/i);
    await expect(answers.first()).toContainText(/(?:nie|niczego)[^\n]*(?:zgłos|złoż|składa)/i);
    await expect(page.locator('app-case-panel')).toContainText(scenario.category);
    await page.screenshot({ path: resolve(screenshotDirectory, `${scenario.key}-result.png`), fullPage: true });
    const before = await answers.count();
    await page.getByLabel('Wiadomość o tej sprawie', { exact: true }).fill('Przypomnij rodzaj sprawy i kategorię sprzętu. Czy ta rozmowa coś zgłosiła?');
    await page.getByRole('button', { name: 'Wyślij', exact: true }).click();
    await expect(answers).toHaveCount(before + 1, { timeout: 120000 });
    await expect(page.getByRole('button', { name: 'Podsumuj sprawę' })).toBeEnabled({ timeout: 120000 });
    await expect(answers.last()).toContainText(scenario.recall);
    await expect(page.locator('app-chat-view a')).toHaveCount(0);
    await page.getByRole('button', { name: 'Nowa sprawa', exact: true }).click();
    await page.screenshot({ path: resolve(screenshotDirectory, `${scenario.key}-reset-dialog.png`), fullPage: true });
    await page.getByRole('button', { name: 'Anuluj', exact: true }).click();
    await expect(page.locator('app-case-panel')).toBeVisible();
    await page.getByRole('button', { name: 'Nowa sprawa', exact: true }).click();
    await page.getByRole('button', { name: 'Rozpocznij nową sprawę', exact: true }).click();
    await expect(page.locator('app-intake')).toBeVisible();
    await expect(page.getByLabel('Nazwa/model sprzętu', { exact: true })).toHaveValue('');
    await expect(page.locator('app-case-panel')).toHaveCount(0);
    expect(errors).toEqual([]);
  });
}
