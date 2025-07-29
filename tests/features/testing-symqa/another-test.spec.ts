import { test, expect } from '@playwright/test';

test('Go to LinkedIn and get the page title', async ({ page }) => {
  const linkedInPage = new LinkedInPage(page);
  
  await linkedInPage.navigateToLinkedIn();
  const title = await linkedInPage.getPageTitle();
  
  console.log(`Page title: ${title}`);
});