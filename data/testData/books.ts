import { Book } from './types';

export const books: Record<string, Book> = {
    harryPotterHalf: {
        title: 'Harry Potter and the Half-Blood Prince',
        author: 'J. K. Rowling',
        description: 'The sixth book in the Harry Potter series, where Harry discovers Voldemort\'s past and prepares for the final battle.',
        firstPublishedDate: '2005',
        authorKey: 'OL23919A'
    },
    gameOfThrones: {
        title: 'A Game of Thrones',
        author: 'George R. R. Martin',
        description: 'A Game of Thrones is the inaugural novel in A Song of Ice and Fire, an epic series of fantasy novels crafted by the American author George R. R. Martin.',
        firstPublishedDate: '1996',
        authorKey: 'OL21634A'
    },
    braveNewWorld: {
        title: 'Brave New World',
        author: 'Aldous Huxley',
        description: 'Brave New World is a dystopian social science fiction novel written by Aldous Huxley in 1931.',
        firstPublishedDate: '1932',
        authorKey: 'OL30352A'
    },
    callOfCthulhu: {
        title: 'The Call of Cthulhu and Other Weird Stories',
        author: 'H. P. Lovecraft',
        description: 'A collection of H.P. Lovecraft\'s most famous stories, including The Call of Cthulhu.',
        firstPublishedDate: '1928',
        authorKey: 'OL118077A'
    }
}; 