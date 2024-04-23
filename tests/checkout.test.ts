import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { ProductPage } from '../pages/product-page';
import { NavigationMenu } from '../pages/navigation-menu';
import { CartPage } from '../pages/cart-page';
import { CheckoutPage } from '../pages/checkout-page';
import { OverviewPage } from '../pages/overview-page';


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
        await loginPage.loginWithStandardUser();
    })
    test("Happy Path Checkout Test", async ({page}) => {
       

        const productPage = new ProductPage(page);
        await productPage.addProductToCart();

        const navigationMenu = new NavigationMenu(page); 
        await navigationMenu.navigateToCart();

        const cartPage = new CartPage(page);
        cartPage.checkoutOrder();

        const checkoutPage = new CheckoutPage(page);
        await checkoutPage.fillInForm();
        await checkoutPage.clickOnContinueButton();
        
        const overviewPage = new OverviewPage(page);
        await overviewPage.clickOnFinishButton();
        await navigationMenu.logout();


    })
})
