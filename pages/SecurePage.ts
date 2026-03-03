import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class SecurePage extends BasePage {
  private successMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.successMessage = page.locator('#flash');
  }

  async validateSuccessMessage(expectedMessage: string): Promise<void> {
    await expect(this.page).toHaveURL(/\/secure/);
    await expect(this.successMessage).toContainText(expectedMessage);
  }
}