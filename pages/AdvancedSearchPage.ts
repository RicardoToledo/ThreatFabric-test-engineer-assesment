import { Page, Locator } from '@playwright/test';

export class AdvancedSearchPage {
    readonly page: Page;
    readonly titleInput: Locator;
    readonly authorInput: Locator;
    readonly searchButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.titleInput = page.locator('input[name="title"]');
        this.authorInput = page.locator('input[name="author"]');
        this.searchButton = page.getByRole('button', { name: 'Search', exact: true });
    }

    async performAdvancedSearch(title: string, author: string) {
        await this.titleInput.fill(title);
        await this.authorInput.fill(author);
        await this.searchButton.click();
    }
}
