import { test, expect } from '@playwright/test';
import { chromium } from 'playwright-extra';
import stealth from 'puppeteer-extra-plugin-stealth';
import path from 'path';

const authFile = path.join(__dirname, '../playwright/.auth/user.json');

chromium.use(stealth());

test('auth roadmap', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('/');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.locator(`input[name='email']`).click();
  await page.locator(`input[name='email']`).fill(process.env.ROADMAP_LOGIN!);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.ROADMAP_PASSWORD!);
  await page.locator(`button[type='submit']`).click();
  await page.waitForURL('/');
  await page.getByRole('button', { name: 'Account  /  Teams' }).click();
  await page.getByRole('link', { name: 'My Profile New' }).click();

  await page.context().storageState({ path: authFile });
});