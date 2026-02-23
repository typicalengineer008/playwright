const {test}= require('@playwright/test');
//here we are writing the test case for the basic test case

test('thisis testname', async ({browser})=>{
//test written here
const page=browser.newContext();
await page
})