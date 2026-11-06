import { test, expect } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

test('narrow intake keeps all controls in the viewport and supports keyboard entry', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page.getByLabel('Rodzaj sprawy', { exact: true })).toBeVisible();
  const directory = resolve('..', 'docs/qa/first-slice/T13/screenshots');
  await mkdir(directory, { recursive: true });
  await page.screenshot({ path: resolve(directory, 'narrow-intake.png'), fullPage: true });
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'Nowa sprawa', exact: true })).toBeFocused();
  await page.keyboard.press('Tab');
  await expect(page.getByLabel('Rodzaj sprawy', { exact: true })).toBeFocused();
});
