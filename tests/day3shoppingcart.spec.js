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
    const addtocart2=page.locator("//button[@routerlink='/dashboard/cart']");
    const itemNo=page.locator('[class="itemNumber"]');
    const buyNow=page.getByText("Buy Now");
    const CreditCardInput=page.locator("//input[@value='4542 9931 9292 2293']");
    const cvvCode=page.locator("//div[text()='CVV Code ']/following-sibling::input[@class='input txt']");
    const nameOnCard=page.locator("//div[text()='Name on Card ']/following-sibling::input[@class='input txt']");
   const countryname = page.locator('[placeholder="Select Country"]');
    const india=page.locator("//button//span[text()=' India']");
    const placeOrder=page.getByText("Place Order ");
    const thanks=page.getByText(" Thankyou for the order. ");
    const afterBuyOrderID=page.locator("//label[@class='ng-star-inserted']");
     await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
   // page.pause();
    await emailid.fill('bishnuprasad534@gmail.com');
    await password.fill('BISHNU@demo1');
    await loginbtn.click();

  await addtocart.click();
  await addtocart2.click();
  
  const orderid =await itemNo.textContent();
  console.log(orderid);
  await buyNow.click();
await CreditCardInput.fill("12312312312312312211");
await cvvCode.fill("122");
await nameOnCard.fill("Bishu Prasad Rayaguru");
await countryname.pressSequentially("india");
//
await page.pause();
await india.click();
await placeOrder.click();

await expect(thanks).toHaveText(' Thankyou for the order. ');

//await expect(afterBuyOrderID).toHaveText(orderid);
});

