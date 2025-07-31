import { test } from "../../fixtures/fixture";

test('Корректное открытие roadmap QA', async ({ roadmapPage }) => {
  await roadmapPage.openQARoadmap();
  await roadmapPage.checkQAHeadingIsVisible();
})

test('Добавление roadmap в избранное', async ({ roadmapPage }) => {
  await roadmapPage.addRoadmapToFavorite();
  await roadmapPage.checkRoadmapIsFavorite();
})

test('Навык отмечается выполненным', async ({ roadmapPage }) => {
  await roadmapPage.openQARoadmap();
  await roadmapPage.checkQAHeadingIsVisible();
  await roadmapPage.openSkillDetails();
  await roadmapPage.markSkillAsCompleted();
  await roadmapPage.checkSkillIsCompleted();
})
