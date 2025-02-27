import { Page, Locator } from '@playwright/test';

export class AuthorPage {
  readonly page: Page;
  readonly sortButton: Locator;
  readonly topRatedBook: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sortButton = page.getByRole('button', { name: 'Sort by Rating' });
    this.topRatedBook = page.getByRole('link').first();
  }

  async sortByRating() {
    await this.sortButton.click();
  }

  async getTopRatedBookTitle() {
    return await this.topRatedBook.innerText();
  }
}
