import { test, expect } from '@playwright/test';


import {loginPage} from "../tests/page objects/logindata.po.js"

//import logindata from "../tests/tastdata/login.json"


let page;

let login;

test.beforeEach(async({browser})=>{

    page = await browser.newPage()

    login = new loginPage(page)

    await login.launchApplication()

    await login.verifyLogoVisibility()


})

test("verify login with valid Credential", async ()=>{


    await login.loginwithCreds("Admin","admin123")

    await login.verifyloginsucess()

})


test("verify login with valid username and invalid password", async ()=>{


    await login.loginwithCreds(logindata.username,logindata.wrongpassword)

    await login.verifyloginsucess()

})


test("verify login with invalied username and valid password", async ()=>{


    await login.loginwithCreds(logindata.wrongusername,logindata.password)

    await login.verifyloginsucess()

})