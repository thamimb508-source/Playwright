
//---> Older import method for test case
// const{test,expect}=require('@playwright/test'); 

//real time project using the below test case import
import{test,expect}from'@playwright/test'; 
test('launch url',async ({page}) => {
    await page.goto("https://www.facebook.com/");

})
