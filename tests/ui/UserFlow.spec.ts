import { test, expect } from '../../fixtures/testFixtures';
import { authors } from '../../data/testData/authors';
import { searchQueries } from '../../data/testData/searchQueries';
import { SortOption } from '../../types/DropdownOptions';

test.describe('User flow Tests', () => {

    test.fail('UI-001 - Advanced Search, Search Results, Author Details, Sort, and Validate Top-reated book', async ({ advancedSearchPage, searchPage, authorPage, header }) => {
        // 1- Perform an advanced search to look up a book titled 'Harry Potter' by the author 'Rowling'.
        await header.navigateToAdvancedSearch();
        await advancedSearchPage.performAdvancedSearch(searchQueries.harryPotter.title, searchQueries.harryPotter.author);

        // 2- Click on the author's name 'J. K. Rowling' from the first result to fetch the author details page
        await searchPage.selectAuthorByIndex(0);

        // 3- Sort Rowling's work by rating
        await authorPage.sortBy(SortOption.TOP_RATED);
        await expect(authorPage.sortDropdown).toContainText(SortOption.TOP_RATED);

        // 4- Validate that her top-rated work is 'Harry Potter and the Half-Blood Prince'
        expect.soft(await authorPage.getBookTitleByIndex(0)).toBe(searchQueries.harryPotter.expectedTopRatedTitle);

        // Extra: At the moment the actual top-rated book is different from the expected one, here's an option using updated test data
        expect(await authorPage.getBookTitleByIndex(0)).toBe(authors.rowling.TopRatedTitle);
    });

});