# QA Portfolio

1. [QA Documentation](#qa-documentation)
1. [Testing API with Postman](#testing-api-with-postman)
   <!-- 1. [Unit Testing with Jest](#unit-testing-with-jest) -->
   <!-- 1. [Mobile Testing](#mobile-testing) -->
1. [Automated UI Testing with Playwright](#automated-ui-testing-with-playwright)
1. [SQL](#sql)
1. [UI Testing](#ui-testing)

## QA Documentation

I was working with various types of test documentation:

- Test cases
- Checklists
- Bug reports with detailed reproduction steps and expected results
- Test plans and execution reports
<!-- - BDD scenarios written in **Gherkin** format -->

Tools and platforms:

- **Test case management**: TestRail, Qase.io
- **Bug tracking**: Jira
- **Collaboration**: Confluence

## Testing API with Postman <img src="https://www.postman.com/_mk-www-next/icons/android-chrome-512x512.png" width="20px" />

One of my favorite tools at the moment. Love its automated tests and posiibility to use with CI/CD

<hr>

### ✨ REST API Collections

<b>LIIS</b> [
[json](https://github.com/seltaria/qa/blob/main/API/LIIS.postman_collection.json) |
[postman](https://www.postman.com/team99-1678/workspace/my-public-workspace/collection/27108269-f55b2d73-c14e-49d3-84f0-4ce4ccac7b04?action=share&source=copy-link&creator=27108269)
]

- Two API versions with positive and negative test cases
- Supports execution via Newman and other tools

<b>DemoShopping</b> [
[json](https://github.com/seltaria/qa/blob/main/API/DemoShopping.postman_collection.json) |
[postman](https://www.postman.com/team99-1678/workspace/my-public-workspace/collection/27108269-95639568-ae45-46f2-a99c-5e29d0a48c54?action=share&source=copy-link&creator=27108269)
]

- Covers CRUD operations (GET, POST, PUT, PATCH, DELETE)
- Includes both positive and negative tests

<hr>

### ✨ SOAP Collection

[json](https://github.com/seltaria/qa/blob/main/API/SOAP.postman_collection.json) |
[postman](https://www.postman.com/team99-1678/workspace/my-public-workspace/collection/27108269-77d63cb9-1182-4cc7-804d-85c74220cb67?action=share&creator=27108269)

Explored with SOAP UI. Tried and tested with Postman

---

<!-- ## Unit Testing with Jest <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/jest-js-icon.png" width="24px" />

Previously used Jest while working on React projects as a Frontend Developer

--- -->

<!-- ## Mobile testing

--- -->

## Automated UI Testing with Playwright <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/2/playwright-y50bnthygb3rvsppvkm9e.png/playwright-q55xzpenhgjsodksybst.png?_a=DATAdtAAZAA0" width="24px" />

[Automated end-to-end testing of Roadmap.sh](https://github.com/seltaria/qa/blob/a7880ad962245d5e9eb63041f233edc1554ec8b6/Playwright/roadmap) using Playwright:

- Wrote automated tests for features: authentication, adding roadmap to favorite, marking skill as completed
- Used `page.locator()`, `getByRole`, `getByText`, `expect(...)`, and `waitForSelector()` for UI interactions
- Implemented the Page Object Model (POM) for reusability and maintainability

---

## SQL <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/640px-Sql_data_base_with_logo.png" width="36px" />

<b>Databases:</b> MySQL, PostgreSQL <br>
<b>Tools:</b> DBeaver, pgAdmin

✨ SELECT queries with JOIN, WHERE, GROUP BY, HAVING and CASE <br>
✨ Nested sub-queries

Examples from my SQL course:
[SELECT](https://github.com/seltaria/qa/blob/main/SQL/SELECT%20MySQL.pdf) |
[JOIN](https://github.com/seltaria/qa/blob/main/DB/JOIN%20MySQL.pdf)

I use SQL to <b>validate</b> that UI filters or calculated fields match backend logic <br>
I can <b>normalize</b> SQL tables to remove duplicates, or invalid relationships

Also used [Supabase](https://github.com/seltaria/qa/blob/main/DB/supabase.png) (based on PostgreSQL) in my React and Next.js projects

Basic knowledge of [MongoDB](https://github.com/seltaria/qa/blob/main/DB/MongoDB.pdf)

## UI Testing 🪄

I'm confident in UI testing thanks to my background in web design (see my [design portfolio](https://www.behance.net/gallery/220037067/Georgian-Tours))

- Skilled in Figma and Pixso
- I know how to find correct layout values and ensure pixel-perfect results

Also, as a Frontend Developer, I:

- Understand HTML/CSS structure
- Actively use DevTools to inspect and debug UI and behavior
