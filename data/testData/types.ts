export interface Book {
    title: string;
    author: string;
    description: string;
    firstPublishedDate: string;
    authorKey?: string; // Reference to the author's key
}

export interface Author {
    key: string;
    name: string;
    website: string;
    TopRatedTitle: string;
}

export interface SearchQuery {
    title: string;
    author: string;
    expectedTopRatedTitle?: string;
} 