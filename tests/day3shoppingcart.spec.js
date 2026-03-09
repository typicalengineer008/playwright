import {test,expect} from '@playwright/test';
//here i written Buying prduct as the test case name and after comma async is the asyncrinos fuction which use for 
//syncronisation in plkaywright helps in wait for the e;lement to be visible and go for the next step

test('Buying dproduct',async({page})=>{
    //await use for syncronization 
    const emailid=page.getByPlaceholder('email@example.com');
    const password=page.getByPlaceholder('enter your passsword');
    const loginbtn=page.locator("//input[@id='login']");
    const coat=page.locator("//b[text()='ZARA COAT 3']");
    const addtocart=page.locator("//b[text()='ZARA COAT 3']/ancestor::div[@class='card-body']//button[text()=' Add To Cart']");
    const addtocart2=page.locator("//button[@fdprocessedid='t1u6te']");
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    page.pause();
    await emailid.fill('bishnuprasad534@gmail.com');
    await password.fill('BISHNU@demo1');
    await loginbtn.click();
 page.pause();
  await addtocart.click();
  await addtocart2.click();

 

});

