import { Page, Locator } from '@playwright/test';

export class Header {
  readonly page: Page;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly languageDropdown: Locator;
  readonly searchDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchBox = page.getByRole('textbox', { name: 'Search' });
    this.searchButton = page.getByRole('button', { name: 'Search submit' });
    this.languageDropdown = page.getByRole('button', { name: 'Change Language' });
    this.searchDropdown = page.locator('select[aria-label="Search by"]');
  }

  async searchForBook(bookTitle: string) {
    await this.searchBox.fill(bookTitle);
    await this.searchButton.click();
  }

  async changeLanguage(language: string) {
    await this.languageDropdown.click();
    await this.page.getByRole('option', { name: language }).click();
  }

  async selectSearchType(searchType: string) {
    await this.searchDropdown.selectOption({ label: searchType });
  }

  async navigateToAdvancedSearch() {
    await this.page.goto('/advancedsearch');
  }
}
