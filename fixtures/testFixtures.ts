import { test as base } from '@playwright/test';
import { Header } from '../pages/Header';
import { HomePage } from '../pages/HomePage';
import { AdvancedSearchPage } from '../pages/AdvancedSearchPage';
import { SearchPage } from '../pages/SearchPage';
import { AuthorPage } from '../pages/AuthorPage';

export const test = base.extend<{
  header: Header;
  homePage: HomePage;
  advancedSearchPage: AdvancedSearchPage;
  searchPage: SearchPage;
  authorPage: AuthorPage;
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
});

// Navigates to the home page before every test, can be overwritten by tests if needed
test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

export { expect } from '@playwright/test';
