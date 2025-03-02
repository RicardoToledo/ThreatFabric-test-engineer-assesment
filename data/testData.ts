export const testData = {
  book: {
    title: 'Game of Thrones',
    author: 'George R. R. Martin',
    description: 'A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by the American author George R. R. Martin.',
    firstPublishedDate: '1996',
  },
  user: {
    valid: {
      username: 'testuser',
      password: 'Test@1234',
    },
  },
  page : {
    url: 'https://openlibrary.org/',
    welcomeTitle: 'Welcome to Open Library',
    about: 'Open Library is an open, editable library catalog, building towards a web page for every book ever published.',
  },
  author: {
    key: 'OL23919A',
    name: 'J. K. Rowling',
    expectedWebsite: 'http://www.jkrowling.com/',
    expectedTopRatedTitle: 'Harry Potter and the Half-Blood Prince',
    actualTopRatedTitle: 'Harry Potter and the Prisoner of Azkaban',
  },
};
