import { test, expect } from '@playwright/test';

test("verify login with valid credentials" , async ({page})=>{

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("input[data-test='username']").fill("standard_user")

    await page.locator("input[type='password']").fill("secret_sauce")

    await page.locator("input[type='submit']").click()

    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");

    await page.locator("//div[normalize-space(text())='Sauce Labs Backpack']").click()



    })


    test("verify login with invalid username and invalid password" , async ({page})=>{

        await page.goto("https://www.saucedemo.com/v1/")
    
        await page.locator("input[data-test='username']").fill("locked_out_user")
    
        await page.locator("input[type='password']").fill("secret_sauce")
    
        await page.locator("input[type='submit']").click()
    
        await expect(page.locator("//h3[contains(.,'Epic sadface: Sorry, this user has been locked out.')]")).toBeVisible()
    
    
    
        })


test("verify swag1 login with valid credentials", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("input[data-test='username']").fill("problem_user")

    await page.locator("input[type='password']").fill("secret_sauce")

    await page.locator("input[type='submit']").click()

    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");



})


test("verify swag2 login with valid credentials", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("input[data-test='username']").fill("performance_glitch_user")

    await page.locator("input[type='password']").fill("secret_sauce")

    await page.locator("input[type='submit']").click()

    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html");



})