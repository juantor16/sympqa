import { test, expect } from '@playwright/test';

test('Search for Claude Opus 4 and verify no GPT related results in first 3 links', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('[name="q"]', 'Claude Opus 4');
  await page.press('[name="q"]', 'Enter');
  await page.waitForNavigation();

  const firstLink = await page.textContent('a[href]:nth-child(1)');
  const secondLink = await page.textContent('a[href]:nth-child(2)');
  const thirdLink = await page.textContent('a[href]:nth-child(3)');

  expect(firstLink).not.toMatch(/gpt/i);
  expect(secondLink).not.toMatch(/gpt/i);
  expect(thirdLink).not.toMatch(/gpt/i);
});