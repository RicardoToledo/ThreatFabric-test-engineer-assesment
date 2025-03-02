import { test, expect } from '../../fixtures/testFixtures';
import { testData } from '../../data/testData';
import { SearchType, Language } from '../../types/DropdownOptions';
import { PAGE } from '../../data/constants';
import { getCurrentLanguage } from '../../utils/uiHelpers';


test.describe('Home Page Tests', () => {

    test('UI-002 - Verify book details are correctly displayed after standard search', async ({ searchPage, header, bookDetailsPage }) => {
        // 1. Search for a book by partial title
        await header.selectSearchType(SearchType.TITLE);
        await header.searchForBook(testData.searchQueries.gameOfThrones.title);

        // 2. Select the first book containing the title from the search results
        await searchPage.selectFirstBookByTitle(testData.searchQueries.gameOfThrones.title);

        // 3. Validate book title, author, description, and first published date
        await expect(bookDetailsPage.bookTitle).toContainText(testData.books.gameOfThrones.title);
        await expect(bookDetailsPage.bookAuthor).toHaveText(testData.books.gameOfThrones.author);
        await expect(bookDetailsPage.bookDescription).toContainText(testData.books.gameOfThrones.description);
        await expect(bookDetailsPage.firstPublishedDate).toContainText(testData.books.gameOfThrones.firstPublishedDate);
    });

    test('UI-003 - Verify homepage sections and their contents load correctly', async ({ homePage }) => {
        // Verify "Welcome to Open Library" section has its call-to-action cards
        await expect(homePage.welcomeSection).toBeVisible();
        expect(await homePage.welcomeCards.count()).toBeGreaterThan(0);

        // Verify "Trending Books" section and books
        await expect(homePage.trendingBooksSection).toBeVisible();
        expect(await homePage.trendingBooksItems.count()).toBeGreaterThan(0);

        // Verify "Books We Love" section and books
        await expect(homePage.booksWeLoveSection).toBeVisible();
        expect(await homePage.booksWeLoveItems.count()).toBeGreaterThan(0);

        // Verify "Textbooks" section and books
        await expect(homePage.textbooksSection).toBeVisible();
        expect(await homePage.textbooksItems.count()).toBeGreaterThan(0);

        // Verify "Browse by Subject" section and subject links
        await expect(homePage.browseBySubjectSection).toBeVisible();
        expect(await homePage.browseBySubjectLinks.count()).toBeGreaterThan(4);

        // Verify "Around the Library" section and library stats
        await expect(homePage.aroundTheLibrarySection).toBeVisible();
        expect(await homePage.libraryStats.count()).toBeGreaterThan(3);

        // Verify "About the Project" section, title, and paragraph loads
        await expect(homePage.aboutTheProjectSection).toBeVisible();
        await expect(homePage.aboutTheProjectTitle).toBeVisible();
        await expect(homePage.aboutTheProjectParagraph).toContainText(PAGE.ABOUT_TEXT);
    });

    test('UI-004 - Verify language change functionality in top banner', async ({ homePage, header }) => {
        // 1. Change the language to Spanish
        await header.changeLanguage(Language.SPANISH);

        // 2. Verify the language has been applied at html tag level
        expect(await getCurrentLanguage(homePage.page)).toBe(Language.SPANISH);

        // 3. Verify the "Welcome to Open Library" section title is in Spanish
        await expect(homePage.welcomeTitle(PAGE.WELCOME_TITLE_SPANISH)).toBeVisible();
    });


});