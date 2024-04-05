import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { BurgerMenu } from '../pages/burger-menu';


test.describe ('navigate to login', () => {
    
    // this test navigates always to the LoginPage for every Test
    test.beforeEach( async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate()
    })
    test("Open LoginPage and verify Title", async ({page}) => {
        const loginPage = new LoginPage(page);
        await expect(page).toHaveTitle('Swag Labs');
    })
    
    test("login with wrong credentials", async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.checkerror();
    })
    
    test("Verify Login is Possible", async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.login();
    })

    test("Verify Logout is Possible", async ({page}) => {
        const loginPage = new LoginPage(page);
        const burgerMenu = new BurgerMenu(page);
        await loginPage.login();
        await burgerMenu.logout();
    })
})



/*test("login with wrong credentials", async )
test("login with admin")*/