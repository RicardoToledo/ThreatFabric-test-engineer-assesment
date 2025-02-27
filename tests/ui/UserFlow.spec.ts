import { test, expect } from '../../fixtures/testFixtures';
import { testData } from '../../data/testData';

/*
1- Perform an advanced search to look up a book titled 'Harry Potter' by the author
'Rowling’.
2- Click on the author’s name ‘J. K. Rowling’ from the first result to fetch the author details
page
3- Sort Rowling’s work by rating
4- Validate that her top-rated work is ‘Harry Potter and the Half-Blood Prince’*/

test.describe('User Flow Tests', () => {

    test('Complete user flow - Advanced Search, Search Results, Author Details, Sort, and Validate', async ({ advancedSearchPage, searchPage, authorPage, header }) => {
        await header.navigateToAdvancedSearch();
      
        // ✅ Perform the Advanced Search using UI form fields
        await advancedSearchPage.performAdvancedSearch(testData.book.title, testData.book.author);
      
        // ✅ Select the first author from search results
        await searchPage.selectFirstAuthor();
      
        // ✅ Sort by rating
        await authorPage.sortByRating();
      
        // ✅ Validate the top-rated book
        const topRatedBook = await authorPage.getTopRatedBookTitle();
        expect(topRatedBook).toBe(testData.book.expectedTopRated);
    });

});