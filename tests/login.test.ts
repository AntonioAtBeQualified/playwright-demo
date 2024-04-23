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
    
    test("Verify Login with standard user is Possible", async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.loginWithStandardUser();
    })

    test("Verify Logout is Possible", async ({page}) => {
        const loginPage = new LoginPage(page);
        const burgerMenu = new BurgerMenu(page);
        await loginPage.loginWithStandardUser();
        await burgerMenu.logout();
    })

    test("Verify Login with locked out user is throwing an error as expected", async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.loginWithLockedOutUser();
    })

    test("Verify Login with problem user is Possible", async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.loginWithProblemUser();
    })

    test("Verify Login with performance glitch user is Possible", async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.loginWithPerformanceGlichtUser();
    })

    test("Verify Login with error user is Possible", async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.loginWithErrorUser();
    })

    test("Verify Login with visual user is Possible", async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.loginWithVisualUser();
    })
})



/*test("login with wrong credentials", async )
test("login with admin")*/