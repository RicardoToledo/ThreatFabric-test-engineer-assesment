import { test as base } from '@playwright/test';
import { Header } from '../pages/Header';
import { HomePage } from '../pages/HomePage';
import { AdvancedSearchPage } from '../pages/AdvancedSearchPage';
import { SearchPage } from '../pages/SearchPage';
import { AuthorPage } from '../pages/AuthorPage';
import { BookDetailsPage } from '../pages/BookDetailsPage';

export const test = base.extend<{
  header: Header;
  homePage: HomePage;
  advancedSearchPage: AdvancedSearchPage;
  searchPage: SearchPage;
  authorPage: AuthorPage;
  bookDetailsPage: BookDetailsPage;
}>({
  header: async ({ page }, use) => {
    const header = new Header(page);
    await use(header);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  advancedSearchPage: async ({ page }, use) => {
    const advancedSearchPage = new AdvancedSearchPage(page);
    await use(advancedSearchPage);
  },
  searchPage: async ({ page }, use) => {
    const searchPage = new SearchPage(page);
    await use(searchPage);
  },
  authorPage: async ({ page }, use) => {
    const authorPage = new AuthorPage(page);
    await use(authorPage);
  },
  bookDetailsPage: async ({ page }, use) => {
    const bookDetailsPage = new BookDetailsPage(page);
    await use(bookDetailsPage);
  },
});

test.beforeEach(async ({ page }) => {
  // Navigates to the home page before every test, can be overwritten on test level if needed
  await page.goto('/');

  // Close the donation banner if it's visible
  const donationIframeWrapper = page.locator('.js-ia-donation-iframe-wrapper');
  const donationIframe = page.frameLocator('iframe[title="Banner for donating to the Internet Archive"]');
  const closeButton = donationIframe.locator('#donate-close-button');
  if (await donationIframeWrapper.isVisible()) {
    await closeButton.click();
  }
});

export { expect } from '@playwright/test';
