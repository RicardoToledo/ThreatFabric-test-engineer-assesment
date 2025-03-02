// This data is for direct access in tests by named object references.

export const testData = {
  books: {
    harryPotterHalf: {
      title: 'Harry Potter and the Half-Blood Prince',
      author: 'J. K. Rowling',
      description: 'The sixth book in the Harry Potter series, where Harry discovers Voldemort’s past and prepares for the final battle.',
      firstPublishedDate: '2005',
    },
    gameOfThrones: {
      title: 'A Game of Thrones',
      author: 'George R. R. Martin',
      description: 'A Game of Thrones is the first novel in A Song of Ice and Fire, a series of fantasy novels by the American author George R. R. Martin.',
      firstPublishedDate: '1996',
    },
    braveNewWorld: {
      title: 'Brave New World',
      author: 'Aldous Huxley',
      description: 'Brave New World is a dystopian social science fiction novel written by Aldous Huxley in 1931.',
      firstPublishedDate: '1932',
    },
    callOfCthulhu: {
      title: 'The Call of Cthulhu and Other Weird Stories',
      author: 'H. P. Lovecraft',
      description: 'A collection of H.P. Lovecraft’s most famous stories, including The Call of Cthulhu.',
      firstPublishedDate: '1928',
    }
  },
  authors: {
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
      website: 'https://www.huxleysociety.org/', // Placeholder, update if incorrect
      TopRatedTitle: 'Brave New World Brave New World Revisited',
    },
    lovecraft: {
      key: 'OL118077A',
      name: 'H. P. Lovecraft',
      website: 'https://www.hplovecraft.com/', // Placeholder, update if incorrect
      TopRatedTitle: 'At the mountains of madness: and other tales of terror',
    }
  },
  searchQueries: {
    harryPotter: {
      title: 'Harry Potter',
      author: 'Rowling',
      expectedTopRatedTitle: 'Harry Potter and the Half-Blood Prince',
    },
    gameOfThrones: {
      title: 'Game of Thrones',
      author: 'Martin',
    }
  }
};
