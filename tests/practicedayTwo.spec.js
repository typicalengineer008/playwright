// Steps:
// Open the browser
// Navigate to the dropdown page
// Click on the dropdown element
// Select Option 1
// Verify Option 1 is selected
// Change selection to Option 2
// Verify Option 2 is selected
// Expected Result
// Selected option should be visible in dropdown.+
import { test, expect } from '@playwright/test';

test('dropdownpracticTC_01', async ({ page }) => {
    const option1=page.getByText('Option 1');
    const dropp=page.locator('#dropdown');
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    await dropp.click();
    //await page.pause();
    //await page.locator()
    //await option1.click();
    //await page.pause();
    await page.locator('#dropdown').selectOption('1');
    await expect(page.locator('#dropdown')).toHaveValue('1');
    
});
test('login',async({page})=>{
await page.goto('https://practicetestautomation.com/practice-test-login/');
const username=page.locator('#username');
const password=page.locator('#password');
const submitbtn=page.getByRole('button', {name:'submit'});

await username.fill("student");
await password.fill("Password123");
await submitbtn.click();
})