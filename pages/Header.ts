import { Page, Locator, expect } from '@playwright/test';
import { SearchType, Language } from '../types/DropdownOptions';

export class Header {
    readonly page: Page;
    readonly searchDropdown: Locator;
    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly languageDropdown: Locator;
    readonly languageOption: (language: string) => Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchDropdown = page.locator('select[aria-label="Search by"]');
        this.searchBox = page.getByRole('textbox', { name: 'Search' });
        this.searchButton = page.getByRole('button', { name: 'Search submit' });
        this.languageDropdown = page.locator('.language-component.header-dropdown');
        this.languageOption = (language: string) => 
            page.locator(`#topNotice ul.locale-options a[lang="${language}"]`);
    }

    async searchForBook(bookTitle: string) {
        await this.searchBox.fill(bookTitle);
        await this.page.keyboard.press('Enter');// Neecessary to pass the autofill step: title: "searchTerm"
        await this.searchButton.click();
    }

    async changeLanguage(language: Language) {
        await this.languageDropdown.click();
        await this.languageOption(language).click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    async selectSearchType(searchType: SearchType) {
        await this.searchDropdown.click();
        await this.searchDropdown.selectOption({ value: searchType });
    }

    async navigateToAdvancedSearch() {
        await this.selectSearchType(SearchType.ADVANCED);
    }
}
