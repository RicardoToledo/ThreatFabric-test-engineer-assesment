import { Page } from '@playwright/test';

// Retrieves the current language based on the `lang` attribute in the `<html>` tag.
export async function getCurrentLanguage(page: Page): Promise<string> {
  return (await page.locator('html').getAttribute('lang')) ?? 'en';
}
