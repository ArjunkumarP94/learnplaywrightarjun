import { test, expect } from '@playwright/test';

test ("verify login with valid credentials" , async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("Admin")

    await page.locator("input[placeholder='Password']").fill("admin123")

    await page.locator("button[type='submit']").click()

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");


})


test ("verify login with valid username and wrong passward" , async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("Admin")

    await page.locator("input[name='password']").fill("123456")

    await page.locator("button[type='submit']").click()

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

})


test ("verify login with wrong username and valid passward" , async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("123456")

    await page.locator("input[name='password']").fill("admin123")

    await page.locator("button[type='submit']").click()

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

})


test ("verify login with wrong username and wrong passward" , async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("adhnkkg")

    await page.locator("input[name='password']").fill("123456")

    await page.locator("button[type='submit']").click()

    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

})