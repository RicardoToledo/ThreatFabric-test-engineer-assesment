import { Page, Locator } from '@playwright/test';
import { PAGE } from '../data/constants';

export class HomePage {
  readonly page: Page;
  readonly welcomeTitle: (title: string) => Locator;
  readonly welcomeSection: Locator;
  readonly welcomeCards: Locator;
  readonly trendingBooksSection: Locator;
  readonly trendingBooksItems: Locator;
  readonly booksWeLoveSection: Locator;
  readonly booksWeLoveItems: Locator;
  readonly textbooksSection: Locator;
  readonly textbooksItems: Locator;
  readonly browseBySubjectSection: Locator;
  readonly browseBySubjectLinks: Locator;
  readonly aroundTheLibrarySection: Locator;
  readonly libraryStats: Locator;
  readonly aboutTheProjectSection: Locator;
  readonly aboutTheProjectTitle: Locator;
  readonly aboutTheProjectParagraph: Locator;

  constructor(page: Page) {
    this.page = page;

    // "Welcome to Open Library" Section
    this.welcomeTitle = (titleText: string) =>
      page.getByRole('heading', {name: titleText, level: 2});// Made this way to resolve based on language
    this.welcomeSection = page.locator(`div.carousel-section:has(h2:has-text('${PAGE.WELCOME_TITLE}'))`);// Using constant approach for 'en' texts could be used for the rest of the locators
    this.welcomeCards = this.welcomeSection.locator('.carousel__item a');

    // "Trending Books" Section
    this.trendingBooksSection = page.locator('div.carousel-section:has(h2:has-text("Trending Books"))');
    this.trendingBooksItems = this.trendingBooksSection.locator('.carousel__item img');

    // "Books We Love" Section
    this.booksWeLoveSection = page.locator('div.carousel-section:has(h2:has-text("Books We Love"))');
    this.booksWeLoveItems = this.booksWeLoveSection.locator('.carousel__item img');

    // "Textbooks" Section
    this.textbooksSection = page.locator('div.carousel-section:has(h2:has-text("Textbooks"))');
    this.textbooksItems = this.textbooksSection.locator('.carousel__item img');

    // "Browse by Subject" Section
    this.browseBySubjectSection = page.locator('div.carousel-section:has(h2:has-text("Browse by Subject"))');
    this.browseBySubjectLinks = this.browseBySubjectSection.locator('a[href*="/subjects/"]');

    // "Around the Library" Section (Container)
    this.aroundTheLibrarySection = page.locator('#home-stats');
    this.libraryStats = this.aroundTheLibrarySection.locator('.statschart .ticks');

    // "About the Project" Section
    this.aboutTheProjectSection = page.locator('#home-resources');
    this.aboutTheProjectTitle = this.aboutTheProjectSection.getByRole('heading', { name: 'About the Project', level: 2 });
    this.aboutTheProjectParagraph = this.aboutTheProjectSection.locator('#home-about-mission-tldr');
  }

}
