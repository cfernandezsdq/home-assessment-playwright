import { Page, Locator, expect } from '@playwright/test';

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: any): Promise<void> {
    await this.page.goto(url);
  }

  async click(locator: Locator): Promise<void> {
    await locator.click();
  }

  async fill(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }

  async getText(locator: Locator): Promise<string | null> {
    return locator.textContent();
  }

  async waitForVisible(locator: Locator): Promise<void> {
    await expect(locator).toBeVisible();
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }

}