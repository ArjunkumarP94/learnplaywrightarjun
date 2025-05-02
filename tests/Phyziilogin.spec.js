import { test, expect } from '@playwright/test';


test("verify login with valid credentials" , async ({page})=>{

    await page.goto("https://phyzii.cirrius.in/")

    await page.locator("input[name='txtClientID']").fill("ARCP2")

    await page.locator("input[name='txtUserID']").fill("801023")

    await page.locator("input[name='txtPassword']").fill("kkkk")

    await page.locator("input[name='btn']").click()

    await expect(page).toHaveURL('https://phyzii.cirrius.in/Home/Home.aspx');



})