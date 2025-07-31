import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import cssEscape from "css.escape";

export class RoadmapPage extends BasePage {
  private readonly qaRoadmapLocator: Locator;
  private readonly qaRoadmapFavoriteLocator: Locator;
  private readonly qaAddToFavoriteButtonLocator: Locator;
  private readonly qaRemoveFromFavoriteButtonLocator: Locator;
  private readonly qaHeadingLocator: Locator;
  private readonly skillLocator: Locator;
  private readonly closeSkillButton: Locator;

  constructor(page: Page) {
    super(page);

    this.qaRoadmapLocator = this.page.getByRole('link', { name: /QA/ }).first();
    this.qaRoadmapFavoriteLocator = this.page.getByRole('link', { name: 'QA Remove from favorites' }).first();
    this.skillLocator = this.page.locator(`g[data-title="${cssEscape("What is Quality Assurance?")}"]`);
    this.qaAddToFavoriteButtonLocator = this.qaRoadmapLocator.getByLabel('Add to favorites').first();
    this.qaRemoveFromFavoriteButtonLocator = this.page.locator('div').filter({ hasText: /^QA$/ }).getByLabel('Remove from favorites');
    this.qaHeadingLocator = this.page.getByRole('heading', { name: 'QA Engineer' });
    this.closeSkillButton = this.page.locator('#close-topic');
  }

  // ACTIONS

  async open() {
    await this.page.goto('/');
  }

  async openOfficialRoadmaps() {
    await this.page.locator('button').filter({ hasText: 'Roadmaps' }).click();
    await this.page.getByRole('menuitem', { name: 'Official Roadmaps Made by' }).click();
  }

  async openQARoadmap() {
    await this.qaRoadmapLocator.click();
  }

  async removeRoadmapFromFavorite() {
    await this.qaRemoveFromFavoriteButtonLocator.click();
  }

  async addRoadmapToFavorite() {
    const isFav = expect(this.checkRoadmapIsFavorite());
    if (isFav) {
      this.removeRoadmapFromFavorite();
    }
    await this.qaAddToFavoriteButtonLocator.click();
  }

  async openSkillDetails() {
    await this.page.waitForSelector('#resource-svg-wrap');
    await this.skillLocator.click();
  }

  async markSkillAsCompleted() {
    const skillStatusLocator = this.page.getByRole('button', { name: 'pending' });
    const doneStatusLocator = this.page.getByRole('button', { name: 'Done D' });
    const isCompleted = expect(this.checkSkillIsCompleted());

    if (isCompleted) {
      await this.markSkillAsIncompleted();
    }
    await skillStatusLocator.click();
    await doneStatusLocator.click();
  }

  async markSkillAsIncompleted() {
    const skillStatusLocator = this.page.getByRole('button', { name: 'done' }).first();
    const resetStatusLocator = this.page.getByRole('button', { name: 'Reset R' });

    await skillStatusLocator.click();
    await resetStatusLocator.click();
  }

  async closeSkillDetails() {
    await this.closeSkillButton.click();
  }

  // ASSERTIONS

  async checkQAHeadingIsVisible() {
    await expect(this.qaHeadingLocator).toBeVisible();
  }

  async checkRoadmapIsFavorite() {
    await expect(this.qaRoadmapFavoriteLocator).toBeVisible();
  }

  async checkSkillIsCompleted() {
    await expect(this.skillLocator).toHaveClass(/done/);
  }
}