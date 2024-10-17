// @ts-check
import { test, expect } from '@playwright/test';


test('Проверка заголовка', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  
  await expect(page).toHaveTitle(/Playwright/);     // Expect a title "to contain" a substring.
});


test('Отображается ссылка Get started', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  
  await page.getByRole('link', { name: 'Get started' }).click();  // Click the get started link.

  
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();  // Expects page to have a heading with the name of Installation.
});



test('Мой первый тест', async ({ page }) => {
  console.log('Hello, Inzhenerka.Tech!')
});