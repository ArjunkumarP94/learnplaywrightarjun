import { test, expect } from '@playwright/test';

test ("add employee" , async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("Admin")

    await page.locator("input[placeholder='Password']").fill("admin123")

    await page.locator("button[type='submit']").click()

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    await page.locator("//li[contains(.,'PIM')]").click()

    await page.locator("//a[normalize-space(text())='Add Employee']").click()

    await page.locator("input[name='firstName']").fill("Arjun")

    await page.locator("input[name='middleName']").fill("kumar")

    await page.locator("input[name='lastName']").fill("P")

    await page.locator("//button[contains(.,'Save')]").click()

    await expect(page).getByRole("//h6[text()='Personal Details']").toBeVisible();

})