import { test, expect } from '@playwright/test';



test.skip('click test', async ({ page }) => {
    await page.goto('http://uitestingplayground.com/click'); // переход на страницу
    
    
    await page.locator("#badButton").click(); // находит кнопку по id=badButton
   
    // 
    await expect(await page.locator("#badButton").getAttribute("class")).toMatch(/btn-success/); // ожидаем что класс станет равным btn-success 
});



test('checkbox and radio', async({page}) => {
  await page.goto('https://jqueryui.com/resources/demos/checkboxradio/default.html');
    
  // >>>>> дополнить код здесь
  await page.locator("[for=radio-1]");
  await page.locator("[for=checkbox-4]");
  await page.locator("[for=checkbox-nested-3]");
  await page.locator("[for=checkbox-nested-4]");
  // <<<<<
    
  await expect(page.locator("[for=radio-1]")).toHaveClass(/ui-checkboxradio-checked/);
  await expect(page.locator("[for=checkbox-4]")).toHaveClass(/ui-checkboxradio-checked/);
  await expect(page.locator("[for=checkbox-nested-3]")).toHaveClass(/ui-checkboxradio-checked/);
  await expect(page.locator("[for=checkbox-nested-4]")).toHaveClass(/ui-checkboxradio-checked/);
});