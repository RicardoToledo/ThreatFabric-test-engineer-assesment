import { Page, Locator } from '@playwright/test';

export class BookDetailsPage {
  readonly page: Page;
  readonly bookTitle: Locator;
  readonly bookAuthor: Locator;
  readonly bookDescription: Locator;
  readonly firstPublishedDate: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bookTitle = page.getByRole('heading', { level: 1 });
    this.bookAuthor = page.locator('a[itemprop="author"]').first();
    this.bookDescription = page.locator('.book-description p').first();
    this.firstPublishedDate = page.locator('span.first-published-date').first(); // Selects the year in format:(1996)
  }
}
