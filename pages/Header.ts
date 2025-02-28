import { Page, Locator } from '@playwright/test';
import { SearchType, Language } from '../types/DropdownOptions';

export class Header {
  readonly page: Page;
  readonly searchDropdown: Locator;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly languageDropdown: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchDropdown = page.locator('select[aria-label="Search by"]');
    this.searchBox = page.getByRole('searchbox', { name: 'Search' });
    this.searchButton = page.getByRole('button', { name: 'Search submit' });
    this.languageDropdown = page.getByRole('button', { name: 'Change Language' });
  }

  async searchForBook(bookTitle: string) {
    await this.searchBox.fill(bookTitle);
    await this.searchButton.click();
  }

  async changeLanguage(language: Language) {
    await this.languageDropdown.click();
    await this.page.getByRole('option', { name: language }).click();//hacer como abajo?
  }

  async selectSearchType(searchType: SearchType) {
    await this.searchDropdown.click();
    await this.searchDropdown.selectOption({ value: searchType });
  }

  async navigateToAdvancedSearch() {
    await this.selectSearchType(SearchType.ADVANCED);
  }
}
