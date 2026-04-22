//  playwright is having inbuild functionality to handle popups



// types of alert

//webside for alert --> demoqa.com

//simple alert --> OK
//confrim alert --> 'ok' and 'cancel'
//prompt alert --> 'textbox'

// to handle the popup ok button

//Syntax :: page.on ('dailog', (varibale)  =>{
        // Message() --> to get the text in the dailog box
        // type()  --> to find out the type of alert
        // accept --> to press 'ok'
        // dismiss --> to press 'cancel'

        //console.log(dialog.message());
        //console.log(dialog.type());
        

    //})

    // page.on --> it will handle multiple alert
    //page.once --> it will handle alert only once

    // if you have 3 type of alert like simple, confrim and prompt
    //then you use type alert method to check the type first and the perfromm the action based on the alert

    import {test,expect} from '@playwright/test';

    test.only('popup handling'), async ((page)=>{
        page.on('dialog', (dialog)=>{
            console.log("message is", dialog.message());
            console.log(dialog.type());
            dialog.accept('Aravid');
        })
      

    await page.goto('URL');
    await page.waitForTimeout(2000);
    await page.click('xpath of the locator');
    await page.waitForTimeout(2000);
    await page.click('xpath of the locator');
    await page.waitForTimeout(3000);


    })
    
   await page.goto('URL');
   try{
    const btnClose = await page.locator('xpath of the locator');
    btnClose.waitFor({state: 'visible'});
    btnClose.click();
   }
   catch(e){
    console.error('button is not visible');
   }

   
    //to handle other then javascript popup like button , adds, window popups

    //const popup  = await page.waitForEvent('popup');

    //const popup = await Promise.all([
    //page.waitForEvent('popup'),
    //page.click()
    //])

  // console.warn --> yellow color
  // console.error --> red color
  // console.log  --> white color

