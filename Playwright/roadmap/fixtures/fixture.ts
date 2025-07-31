import { test as base } from '@playwright/test';
import { RoadmapPage } from '../pages/RoadmapPage';

type MyFixtures = {
  roadmapPage: RoadmapPage;
};

export const test = base.extend<MyFixtures>({
  roadmapPage: async ({ page }, use) => {
    const roadmapPage = new RoadmapPage(page);

    await roadmapPage.open();

    await use(roadmapPage);
  },
});

export { expect } from '@playwright/test';