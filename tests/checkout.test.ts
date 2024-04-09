import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { ProductPage } from '../pages/product-page';
import { NavigationMenu } from '../pages/navigation-menu';


// Steps to fullfill checkout

// 1. User logs in
// 2. User gets a product and adds it to the cart by clicking Add to cart-button
// 3. User navigates to cart by clicking on the cart symbol 
// 4. User navigates further to checkout by clicking on Checkout-button
// 5. User fills in his information in the form and clikcs on the continue-button
// 6. User finishs the checkout by clicking on the Finish-Button

test.describe ('navigate to login', () => {
    
    // this test navigates always to the LoginPage for every Test
    test.beforeEach( async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.navigate()
    })
    test("Happy Path Checkout Test", async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.loginWithStandardUser();

        const productPage = new ProductPage(page);
        productPage.addProductToCart();

        const navigationMenu = new NavigationMenu(page); 
        navigationMenu.navigateToCart();

    })
})
