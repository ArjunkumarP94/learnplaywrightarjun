import { expect } from "@playwright/test"

exports.loginPage = class loginPage {

    constructor(page) {

        this.page = page
        this.logo = page.locator('div[class="orangehrm-login-logo"]')
        this.username = page.locator('//input[@class="oxd-input oxd-input--active"])[1]')
        this.passward = page.locator('//input[@type="password"]')
        this.loginButton = page.locator('button[type="submit"]')
        this.loginErrorMessage = page.getByText("Invalid credentials")

    }

    async launchApplication() {

        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    async verifyLogoVisibility() {

        await expect(this.logo).toBeVisible()
    }

    async loginwithCreds(username, password){

        await this.usernameInput.fill(username)
        await this.passwardInput.fill(password)

        await this.loginButton.click()
    }

    async verifyErrorMessage() {

        await expect(this.loginErrorMessage).toBeVisible()
    }

    async verifyLoginSucess() {

        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    }

}