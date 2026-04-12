import { test, expect } from '@playwright/test';

test('homepage shows a visible primary heading', async ({ page }) => {
  const targetUrl = process.env.TARGET_URL || 'http://localhost:3001';

  await page.goto(targetUrl);

  await expect(page.getByRole('heading').first()).toBeVisible();
  await expect(page).toHaveURL(/http:\/\//);

  await page.screenshot({
    path: '/tmp/locator-first-page-check.png',
    fullPage: true,
  });
});
