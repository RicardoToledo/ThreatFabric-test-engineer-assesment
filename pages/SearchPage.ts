import { Page, Locator } from '@playwright/test';

export class SearchPage {
  readonly page: Page;
  readonly firstAuthorLink: Locator;
  readonly firstBookTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstAuthorLink = page.locator('div[data-testid="search-results"] a[href^="/authors/"]').first();
    this.firstBookTitle = page.locator('div[data-testid="search-results"] h3').first();
  }

  async selectFirstAuthor() {
    await this.firstAuthorLink.click();
  }

  async getFirstBookTitle() {
    return await this.firstBookTitle.innerText();
  }
}