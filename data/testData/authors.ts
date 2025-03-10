import { Author } from './types';

export const authors: Record<string, Author> = {
    rowling: {
        key: 'OL23919A',
        name: 'J. K. Rowling',
        website: 'http://www.jkrowling.com/',
        TopRatedTitle: 'Harry Potter and the Prisoner of Azkaban',
    },
    martin: {
        key: 'OL21634A',
        name: 'George R. R. Martin',
        website: 'https://www.georgerrmartin.com/',
        TopRatedTitle: 'A Storm of Swords',
    },
    huxley: {
        key: 'OL30352A',
        name: 'Aldous Huxley',
        website: 'https://www.huxleysociety.org/',
        TopRatedTitle: 'Brave New World Brave New World Revisited',
    },
    lovecraft: {
        key: 'OL118077A',
        name: 'H. P. Lovecraft',
        website: 'https://www.hplovecraft.com/',
        TopRatedTitle: 'At the mountains of madness: and other tales of terror',
    }
}; 