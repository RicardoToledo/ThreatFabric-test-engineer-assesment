# Open Library Test Automation Framework

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/node.js-%3E%3D22.13.5-brightgreen.svg)](https://nodejs.org/)
[![Playwright](https://img.shields.io/badge/playwright-tested-brightgreen.svg)](https://playwright.dev/)

## Table of Contents

- [Overview](#overview)
  - [Tech Stack](#tech-stack)
  - [Approach](#approach)
  - [Project Structure](#project-structure)
- [Installation](#installation)
- [Test Cases](#test-cases)
- [CI/CD with GitHub Actions](#ci-cd-with-github-actions)
- [Next Steps](#next-steps)
- [License](#license)
- [Contact Information](#contact-information)

## Overview

This project is an automated test suite for the ThreatFabric technical assessment, using the [openlibrary.org](https://openlibrary.org/) website. It covers both UI and API validations with Playwright and TypeScript. The framework is designed to be scalable, modular, well-structured, and easy to understand, while following best practices such as:

- Page Object Model (POM)
- Reusable test data for parameterization
- Prioritized approach to locator selection (Folowing [Playwrigt's recommended Locators](https://playwright.dev/docs/locators))
- TypeScript best practices: Strict Type Checking, Explicit Typing, Enums for compile-time safety and IntelliSense, Naming Conventions, Code Formatting & Linting, etc.

### Tech Stack

- **Playwright**: For end-to-end testing. Chosen for its cross-browser support, fast execution, and modern API features. It also offers better debugging features compared to alternatives like Cypress.
- **TypeScript**: Selected for its strict type checking, which improves code maintainability and provides better autocompletion and developer experience.
- **Axios**: Used for making API requests due to its simplicity and ease of use.
- **Prettier & ESLint**: Included to ensure consistent code formatting and to catch potential issues early through linting.

### Approach

1. **Defining the Scope**  
   Before writing code, I first analyzed the assessment requirements and identified some of the core functionalities of Open Library that were critical for both UI and API testing.  
   To ensure comprehensive coverage, I created a test case matrix that served as a foundation for automated test creation and even manual execution.
   Defining the scope early allowed for efficient prioritization, ensuring meaningful test coverage without unnecessary complexity or redundant work.

2. **Building a Scalable and Maintainable Framework**  
   The framework was designed using the Page Object Model (POM), a widely adopted industry-standard approach that separates test logic from UI interactions.  
   This choice enhances reusability, maintainability, and scalability, making it easier to update and extend the test suite as the application evolves.

3. **Overcoming Challenges**  
   Several technical challenges arose throughout the development process, requiring problem-solving and strategic decision-making:
    <details>
    <summary>Click to expand</summary>
    - Handling Unreliable Locators: Not all elements in Open Library were developed with best practices in mind. Some HTML tags were incorrectly used, IDs were redundant or unnecessarily nested, dropdown were not properly initialized, and key elements lacked meaningful accessibility roles. Defining reliable locators required careful analysis to ensure stability across different test executions. The solution involved scoping locators more precisely, using .first(), .nth(n), or dynamically filtering elements based on text content.
    - Dealing with the Donation Banner: A persistent donation banner appeared in every new session, blocking UI interactions. Handling this took time because the banner was embedded in an iframe, requiring a different approach for detection and interaction. The final solution involved dynamic detection within the test setup to handle it efficiently.  
    - Fixing API Response Validation: The API returned nested objects for author bios, initially causing assertion failures. The solution was to dynamically extract the `value` property, ensuring that tests validated only relevant data while maintaining flexibility for future API changes.  
    - Ensuring Cross-Browser Stability: Tests needed to be reliable across Chromium, Firefox, and WebKit, which required fine-tuning locators and handling minor UI discrepancies between browsers to maintain consistent behavior.  
    </details>

By focusing on real-world scalability, maintainability, and reliability, this framework ensures that the assessment requirements are successfully met, along with additional important Open Library functionalities being rigorously tested, providing flexibility for future expansion.

### Project Structure

```
├── .github/                # GitHub configuration files
│   └── workflows/          # CI/CD workflows
├── data/                   # Test data files
│   ├── paramTestData.ts    # Parameterized test data
│   └── testData.ts         # General test data
├── tests/                  # Test cases
│   ├── api/                # API test cases
│   └── ui/                 # UI test cases
├── .eslintrc.js            # ESLint configuration
├── .prettierrc             # Prettier configuration
├── playwright.config.ts    # Playwright configuration
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Installation

#### Prerequisites

- Node.js: [Download](https://nodejs.org/)
- Git: [Download](https://git-scm.com/)

> Make sure you have these prerequisites installed before proceeding with the project setup and running.

1. **Clone the repository:**

```bash
git clone https://github.com/RicardoToledo/ThreatFabric-test-engineer-assesment.git
cd ThreatFabric-test-engineer-assesment
```

2. **Install dependencies:**

```bash
npm install
npx playwright install
```

### Running Tests

The test suite can be executed using any of the `npm` scripts listed below to run tests in your desired configuration. Simply run one of the following commands in your terminal follwing this standard.

```bash
npm run <command>
```

Use the following npm scripts to run the tests:
| Command | Description |
|---------------------------------|---------------------------------------------------------------|
| `npm run test` | Runs all tests using Chromium in headed mode |
| `npm run test:ui` | Runs only UI tests using Chromium in headed mode |
| `npm run test:api` | Runs only API tests using Chromium |
| `npm run test:headless` | Runs all tests using Chromium in headless mode |
| `npm run test:all-browsers-api` | Runs API tests using Chromium, Firefox, and WebKit |
| `npm run test:all-browsers-ui` | Runs UI tests using Chromium, Firefox, and WebKit in headed mode |
| `npm run test:debug` | Runs tests in debug mode |
| `npm run lint` | Lints the project files |

#### Running the tests without npm scripts

> To run the test suite with different settings, please refer to the Playwright's [Running and debugging tests](https://playwright.dev/docs/running-tests) documentation.

#### View Test Report

Playwright generates an HTML report after each test execution. You can view the report by opening the `test-results/index.html` file in your browser. For more details, refer to the [Playwright Test Report documentation](https://playwright.dev/docs/test-report).

## Test Cases

| Test ID | Test Case                                                                                                   | Type/Tags        | Test Data                                                  | Steps                                                                                                                                                                                                                                                                                                                                              | Expected Result                                                                                                                            |
| ------- | ----------------------------------------------------------------------------------------------------------- | ---------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| UI-001  | Complete user flow: Search for a book, navigate to author details, sort works, and validate top-rated book. | UI               | Book Title, Author Name, Expected Top-rated Book Title     | 1. Navigate to the Open Library home page. <br> 2. Use the advanced search feature. <br> 3. Enter the book title and author name. <br> 4. Submit the search. <br> 5. Click on the author's name from the first search result. <br> 6. Sort the author's works by rating. <br> 7. Validate that the top-rated work matches the expected book title. | The search displays relevant results, navigates correctly to author details, sorts works by rating, and confirms the top-rated book title. |
| UI-002  | Verify book details page displays correct information from a regular search.                                | UI               | Book Title, Author Name, Description, First Published Date | 1. Perform a search for a book by title. <br> 2. Click on the book from the search results. <br> 3. Validate book details page displays title, author, description, and published date.                                                                                                                                                            | The book details page correctly displays all relevant information.                                                                         |
| UI-003  | Verify homepage loads with main sections visible.                                                           | UI               | None                                                       | 1. Navigate to the Open Library home page. <br> 2. Validate homepage loads successfully with search bar, featured books, and navigation menu. <br> 3. Verify key sections such as Trending Books, Textbooks, Browse by Subject, Around the Library, and About the Project are displayed.                                                           | All main sections of the homepage load and display correctly.                                                                              |
| UI-004  | Verify language change functionality.                                                                       | UI, Localization | Language Selection                                         | 1. Open the language dropdown. <br> 2. Select a different language. <br> 3. Validate the website content updates accordingly.                                                                                                                                                                                                                      | The site updates language settings and displays content in the selected language.                                                          |
| API-001 | Validate author website URL from API response.                                                              | API              | Author Key, Expected Website                               | 1. Perform an API request to fetch author details. <br> 2. Validate that the returned website matches the expected URL.                                                                                                                                                                                                                            | API response contains the correct author website URL.                                                                                      |
| API-002 | Validate author birthdate and bio.                                                                          | API              | Author Key, Expected Birthdate, Bio Excerpt                | 1. Perform an API request to fetch author details. <br> 2. Validate the birthdate matches the expected value. <br> 3. Validate the bio contains the expected text excerpt.                                                                                                                                                                         | API response contains the correct birthdate and bio excerpt.                                                                               |
| API-003 | Verify API returns correct top-rated book for an author.                                                    | API              | Search Title, Search Author, Expected Top-rated Title      | 1. Perform an API search request for an author’s books. <br> 2. Sort results by rating. <br> 3. Validate the first result matches the expected top-rated book.                                                                                                                                                                                     | API correctly returns the top-rated book for the given author.                                                                             |

## CI/CD with GitHub Actions

The project integrates [GitHub Actions](https://github.com/features/actions) for its CI/CD pipeline. A workflow is already set up in this repository, automating a full test run on an [Ubuntu](https://ubuntu.com/) virtual machine whenever a push or pull request is created for the `main` branch.

The configuration file for this setup is located at: [.github/workflows/playwright-tests.yml](.github/workflows/playwright-tests.yml)

## Next Steps

- Enhance test coverage, including edge cases.
- Parameterize UI tests.
- Support meta tags for different types of testing.
- Add support for mobile browser testing
- Expand test reporting (third party reporter) and logging for better insights.
- Integrate Bug (Jira, X-ray, etc) and notification reporting (Slack, email, etc)

## License

This project is licensed under the [MIT License](LICENSE).

## Contact Information

For any questions or feedback, feel free to reach out to the author: [Ricardo Toledo](https://github.com/RicardoToledo).
