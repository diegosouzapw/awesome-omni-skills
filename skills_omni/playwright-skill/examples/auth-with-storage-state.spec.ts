import { test, expect } from '@playwright/test';

const targetUrl = process.env.TARGET_URL || 'http://localhost:3001';
const email = process.env.TEST_EMAIL;
const password = process.env.TEST_PASSWORD;

test('login flow reaches dashboard', async ({ page }) => {
  test.skip(!email || !password, 'TEST_EMAIL and TEST_PASSWORD must be set');

  await page.goto(`${targetUrl}/login`);
  await page.getByLabel(/email/i).fill(email!);
  await page.getByLabel(/password/i).fill(password!);
  await page.getByRole('button', { name: /sign in|log in/i }).click();

  await expect(page).toHaveURL(/dashboard/);
  await expect(page.getByRole('main')).toBeVisible();
});

// Note:
// If you later persist storage state for reuse, treat that file as sensitive.
// Do not commit it or share it casually.
