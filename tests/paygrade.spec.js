import { test, expect } from '@playwright/test';

const addpaygrade ={

    paygrade1 : "imrana",
    paygrade2 : "manja",
    paygrade3 : "naveena",
    paygrade4 : "mahendraa"
};

for (let paygrade in addpaygrade){

    test (`add paygrade - ${addpaygrade[paygrade]}`, async ({page})=>{

        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
        await page.locator("input[name='username']").fill("Admin")
    
        await page.locator("input[placeholder='Password']").fill("admin123")
    
        await page.locator("button[type='submit']").click()
    
        //await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

        await page.locator("//li[contains(.,'Admin')]").click()

        await page.locator("//span[normalize-space(text())='Job']").click()

        await page.locator("//a[normalize-space(text())='Pay Grades']").click()

        await page.locator("//button[contains(.,'Add')]").click()

        await page.locator("//label[normalize-space(text())='Name']/following::input").fill(addpaygrade[paygrade])

        await page.locator("//button[contains(.,'Save')]").click()

        await page.locator("(//h6[contains(@class,'oxd-text oxd-text--h6')])[2]");   
    
    })
}