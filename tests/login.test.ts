import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/login-page';


test("Open LoginPage and verify Title", async ({page}) => {
    const loginPage = new LoginPage(page);
    loginPage.navigate();
    await expect(page).toHaveTitle('Swag Labs');
})

test("Should show error message", async ({page}) => {
    const loginPage = new LoginPage(page);
    loginPage.checkerror();
})


test("Verify Login is Possible", async ({page}) => {
    const loginPage = new LoginPage(page);
    loginPage.login();
})