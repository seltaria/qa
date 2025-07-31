import { expect, Locator, Page } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  protected async checkAriaSnapshot(locator: Locator, ariaName: string) {
    await expect(locator).toMatchAriaSnapshot({ name: ariaName });
  }

  protected async hideElement(selector: string) {
    await this.page.evaluate((selector) => {
      const element = document.querySelector(selector) as HTMLElement;
      if (element) {
        element.style.display = 'none';
      }
    }, selector)
  }
}