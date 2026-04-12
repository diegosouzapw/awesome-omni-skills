import { test, expect, devices } from '@playwright/test';

const targetUrl = process.env.TARGET_URL || 'http://localhost:3001';

const configs = [
  { name: 'desktop', viewport: { width: 1440, height: 900 } },
  { name: 'tablet', device: devices['iPad (gen 7)'] },
  { name: 'mobile', device: devices['iPhone 13'] },
];

for (const config of configs) {
  test(`responsive check on ${config.name}`, async ({ browser }) => {
    const context = await browser.newContext(
      config.device ? { ...config.device } : { viewport: config.viewport }
    );
    const page = await context.newPage();

    await page.goto(targetUrl);
    await expect(page.getByRole('heading').first()).toBeVisible();

    await page.screenshot({
      path: `/tmp/responsive-${config.name}.png`,
      fullPage: true,
    });

    await context.close();
  });
}
