import { Page, Locator } from '@playwright/test';

export class SearchPage {
    readonly page: Page;
    readonly searchResults: Locator;
    readonly bookTitles: Locator;
    readonly authorLinks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchResults = page.locator('.searchResultItem');
        this.bookTitles = page.locator('.searchResultItem h3 a');
        this.authorLinks = page.locator('a[href^="/authors/"]');
    }

    async validateSearchResultsExist() {
        const count = await this.searchResults.count();
        if (count === 0) {
            throw new Error('No search results found.');
        }
    }

    async selectAuthorByIndex(index: number = 0) {
        await this.validateSearchResultsExist();
        await this.authorLinks.nth(index).click();
    }

    async selectFirstAuthorByName(authorName: string) {
        await this.validateSearchResultsExist();
        const author = this.authorLinks.filter({ hasText: authorName });
        if (await author.count() === 0) throw new Error(`No author found with name "${authorName}".`);
        await author.first().click();
    }

    async selectBookByIndex(index: number = 0) {
        await this.validateSearchResultsExist();
        await this.bookTitles.nth(index).click();
    }

    async selectFirstBookByTitle(bookTitle: string) {
        await this.validateSearchResultsExist();
        const book = this.bookTitles.filter({ hasText: bookTitle });
        if (await book.count() === 0) throw new Error(`No book found with title "${bookTitle}".`);
        await book.first().click();
    }
}
