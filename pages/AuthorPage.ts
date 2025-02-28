import { Page, Locator } from '@playwright/test';
import { SortOption } from '../types/DropdownOptions';

export class AuthorPage {
  readonly page: Page;
  readonly sortDropdown: Locator;
  readonly topRatedBooks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sortDropdown = page.locator('.sort-dropper summary');
    this.topRatedBooks = page.locator('.searchResultItem h3 a');
  }

  async sortBy(option: SortOption) {
    await this.sortDropdown.click();
    await this.page.locator(`.sort-content a:has-text("${option}")`).click();
  }

  async getBookTitleByIndex(index: number = 0) {
    await this.topRatedBooks.nth(index).innerText();
  }

}
