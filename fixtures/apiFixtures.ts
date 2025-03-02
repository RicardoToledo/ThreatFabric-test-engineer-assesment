import { test as base } from '@playwright/test';
import { ApiClient } from '../utils/ApiClient';

type ApiFixtures = {
  apiClient: ApiClient;
};

export const test = base.extend<ApiFixtures>({
  apiClient: async ({}, use) => {
    const apiClient = new ApiClient(); // Fresh instance for each test
    await use(apiClient);
  },
});

export { expect } from '@playwright/test';
