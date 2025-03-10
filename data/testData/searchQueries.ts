import { SearchQuery } from './types';

export const searchQueries: Record<string, SearchQuery> = {
    harryPotter: {
        title: 'Harry Potter',
        author: 'Rowling',
        expectedTopRatedTitle: 'Harry Potter and the Half-Blood Prince',
    },
    gameOfThrones: {
        title: 'Game of Thrones',
        author: 'Martin',
    }
}; 