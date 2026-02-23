import{test,expect} from '@playwright/test';
test('1sttest',async({page})=>{
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

   await expect(page).toHaveTitle('Swag Labs');
   await page.getByText('Sauce Labs Backpack').click();
   await page.getByRole('button', { name: 'Add to cart' }).click();

   await page.locator('xpath=//a[@class="shopping_cart_link"]').click();
   await expect(page.locator('xpath=//div[text()="Sauce Labs Backpack"]')).toContainText('Sauce Labs Backpack');
})