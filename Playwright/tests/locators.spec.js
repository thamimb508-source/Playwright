
// Locators 
// in general locators --> id, class, xpath, css

// important locators in playwright
//li[@class="product-base"]/descendant::div[@class="product-price"]//descendant::span[@class="product-discountedPrice" or (text() and not(@class))]

////li[@class="product-base"]/descendant::div[@class="product-price"]//descendant::span[(text() and not(@class))]


//in build locators
//1. getByTestId()
//2. getByText()
//3. getByPlaceholder()
//4. getByAltText()
//5. getByLable()
//6. getByTitle()
//7. getByRole()

// get by role
//1. buttons
//2. link
//3. textbox
//4. checkbox

//getByRole (button : {name : 'Submit'} exact : true) --> If both locator having same name 
// like submit and submit folder -- use the --> exact : true.


//DOm -> Document object model (ctrl+shfit+i)

//Pink -> tagname
//orange -> attribute
//blue -> value
//black -> text

// Inspect short cutkey --> (ctrl+shift+i)

// For id locator --> If id contain with number, it will chnage dynamcly , hence its change frequentyly

// to find the locators syntax
// input#idvalue --> # is for ID locator
// .nav --> . (dot) for class locators
// npx playwright test --> it will run all the files from the tests
// if you want to run the specific file the give the comment --> npx playwright test locators.js (file name)

import{chromium, test}from'@playwright/test';
import { count, log } from 'node:console';
test('locating the element', async ({page}) => {
    // await page.goto("https://www.amazon.in/");
    await page.goto("https://www.myntra.com/boy-tshirts");
    // const serachBar = await page.locator('input#twotabsearchtextbox');
    // await serachBar.fill('laptop');
    const tsc = await page.locator ('//li[@class="product-base"]').count();
    console.log('number of t.shirt count :' + tsc);
    await page.screenshot({path :'Myntra.png'})
    const tsp = await page.locator ('//li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]').allTextContents();
        console.log('number of t.shirt price :' + tsp);

        // need to take the min price from the price list
    // const alltsp = tsp.map(text =>
    //  parseFloat(text.replace(/[^0-9.]/g, ''))

// thrid minimum value

    const alltsp = tsp
        .map(text => text.trim())
        .map(text => text.replace(/,/g, ''))          // remove commas
        .map(text => text.replace(/[^0-9]/g, ''))     // remove Rs., ₹
        .map(Number)
        .filter(num => !isNaN(num));                  // remove invalid

        // 👉 Remove duplicates + sort
    // const uniqueSorted = [...new Set(alltsp)].sort((a, b) => a - b);

    // console.log("Sorted Unique Prices:", uniqueSorted);

    // const thirdMin = uniqueSorted[2];

    // console.log("3rd Minimum Price:", thirdMin);
       

//     alltsp → a box of numbers
// ...alltsp → opening the box and taking numbers out one by one

// minimum value

    const minPrice = Math.min(...alltsp);
    console.log('Mininum Price :', minPrice);


    const productname = await page.locator('//div[@class="product-productMetaInfo"]/descendant::h4[@class="product-product"]').allTextContents();
    console.log("product name :"+productname);

    // Get index of minimum price
    // const minIndex = alltsp.indexOf(minPrice);
    // console.log("Min Price Index:", minIndex);

    
    // Get product name using index
    const minProductName = productname[minIndex];
    console.log("Minimum Price Product Name:", minProductName);


    //const productbrand = await page.locator('//span[@class="product-discountedPrice"]/ancestor::div[@class="product-price"]//following::h3[@class="product-brand"]').nth(minIndex).textContent();
    const productbrand1 = await page.locator('//span[@class="product-discountedPrice" and contains(text(),"${minPrice}")]/ancestor::div[@class="product-price"]//following::h3[@class="product-brand"]').first.textContent();
    console.log("product brand with minimum price :"+productbrand);

    //
    
   


    //div[@class="product-price"]
    //screenshot option in config file 

    //off
    //on
    //on-first-failure
    //only-on-failure

    //video option in config file 

    //off
    //on
    //retain-on-failure

    

})

// xpath --> slow and flexible 
// relative xpath --> // -> doudle forword slash -> find out element from anywhere in the DOM
// abslote xpath --> / -> single forword slash -> start from the HTML tag

//Syntax
//basic --> // tagname[@attribute name='attribute value']

// $ --> end with 
// ^ --? starts with

//TEXT --> //tagname[text()="values"]

// Contains --> // tagename [contains(@attribute name,'values')]

// Index --> (//tagname[@attribute name='attribute value'])[index number]




//CSS -> fast but not flexible

//CSS syntax

//basic -> tagname[attribute name ='attribute value'] or [attribute name ='attribute value']

// Contains --> [att*='value']
// ^ --? starts with --> [att^='noon'] // good afternoon
// $ --> end with --> [att$='Good'] // good morning


// test('headling dropdown and record video',async({})=>{
    
// //In-build fixtures

// //browser --> 
// //context --> like a sparete window, inside the browser
// //page --> like a tab window.

// // viewport --> to set a width and hight for the web page


// const browser = await chromium.launch();
// const context = await browser.newContext({
//      recordVideo:{
//         dir: 'recorder/'
//      }
// });
// const page = await context.newPage();

// dropdown 

// selectOption() --> handle dropdown

//value
//lable
//index
// await page.goto('URL'); // need to add URL
// await page.selectOption('#course',"pyton"); // need to add locators
// await page.waitForTimeout(2000);
// // values
// await page.selectOption('#course',{value:'net'});
// await page.waitForTimeout(2000);
// //lable
// await page.selectOption('#course',{label:'java'});
// await page.waitForTimeout(2000);
// //index
// await page.selectOption('#course',{index:1});
// await page.waitForTimeout(2000);
// //to select multi dropdown options
// await page.selectOption('#ide',['ec','ij','vs']);
// await page.waitForTimeout(2000);
// })

// File handling

// test('File handling', async ({page})=>{
    // await page.goto('');
    //const filepath='C:\Users\LENOVO\Desktop\JS_Playwright\JavaScript.json'
    //setInputFiles('Locator','filepath') --> to upload a single file

    // Multiple file upload
    //page.setinputFiles('input[type="file"]',['','']) --> to upload multiple file

    // To remove the incorrct file
    //page.setinputFile('input[type="file"]',[]) --> to clear the file input use empty array [].


    
    // downloading a file


    //To download the file (waitForEvent('download'))
    //const download = await Promise.all([
    //page.waitForEvent('download'),
    //page.click('locator for click the download button')
    //]);
// })

// test('add to cart and print massage', async ({page}) =>{
// await page.goto('https://www.flipkart.com/');
// await page.waitForTimeout(3000);
// await page.locator('//form//div//input[@class="nw1UBF v1zwn25"]').fill('laptops');
// await page.keyboard.press('Enter');
// //await page.mouse.wheel(0, -1000);
// // await page.waitForTimeout(2000);
// await page.locator('(//div[contains(text(),"ASUS ExpertBook P1")])[1]').click();
// await page.waitForTimeout(3000);
// await page.locator('//div[@style="border-radius: 12px; background-color: rgba(0, 0, 0, 0.12); opacity: 1; position: absolute; inset: 0px; overflow: hidden; z-index: 2;"]').click();
// await page.waitForTimeout(2000);
// })

//--> //li[@class="product-base"]/descendant::span[@class="product-discountedPrice"]

/////div[@class="compList lh-l fz-s"]/child::ul[@class="d-ib w-50p"]/child::li[@class="keyword-wrapper h-20 mb-12"]/child::span[text()="8"]
