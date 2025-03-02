import { test, expect } from '../../fixtures/apiFixtures';
import { paramTestData } from '../../data/paramTestData';

test.describe('API Tests', () => {
    paramTestData.forEach(({ searchTitle, searchAuthor, author, authorKey, authorWebsite, topRatedTitle, birthDate, bioExcerpt }) => {
        test(`API-001 - Verify search and author's website with book titled: "${searchTitle}" and author: "${searchAuthor}"`, async ({ apiClient }) => {
            // 1. Search for a book by title and author
            const searchResponse = await apiClient.getRequest('/search.json', { title: searchTitle, author: searchAuthor });
            expect(searchResponse.status).toBe(200);
            expect(searchResponse.data.docs.length).toBeGreaterThan(0);

            // 2. Extract the first author's key
            const returnedAuthorKey = searchResponse.data.docs[0].author_key[0];
            expect(returnedAuthorKey).toBe(authorKey);

            // 3. Fetch author details using author_key
            const authorResponse = await apiClient.getRequest(`/authors/${returnedAuthorKey}.json`);
            expect(authorResponse.status).toBe(200);

            // 4. Validate the author's website
            expect(authorResponse.data.links[0].url).toBe(authorWebsite);
        });

        test(`API-002 - Validate "${author}" birthdate and bio`, async ({ apiClient }) => {
            // 1. Fetch author details using author_key
            const authorResponse = await apiClient.getRequest(`/authors/${authorKey}.json`);
            expect(authorResponse.status).toBe(200);

            // 2. Validate birthdate
            expect(authorResponse.data.birth_date).toBe(birthDate);

            // 3. Extract the bio text (handling cases where it's an object)
            // ! BUG: The API sometimes returns the bio as an object
            // eslint-disable-next-line playwright/no-conditional-in-test
            const bioText = typeof authorResponse.data.bio === 'object' ? authorResponse.data.bio.value : authorResponse.data.bio;

            // 4. Validate bio excerpt (not full bio, just checking it contains expected text)
            expect(bioText).toContain(bioExcerpt);
        });

        test(`API-003 - Verify top-rated title for author: "${author}"`, async ({ apiClient }) => {
            // 1. Search for books by title and author, sorted by rating
            const searchResponse = await apiClient.getRequest('/search.json', { author: searchAuthor, sort: 'rating' });
            expect(searchResponse.status).toBe(200);
            expect(searchResponse.data.docs.length).toBeGreaterThan(0);

            // 2. Extract the highest-rated (first) book's title
            const returnedRatedBookTitle = searchResponse.data.docs[0].title;

            // 3. Validate the highest-rated title matches the expected value
            expect(returnedRatedBookTitle).toBe(topRatedTitle);
        });
    });
});
