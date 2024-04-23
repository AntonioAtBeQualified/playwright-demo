import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { ProductPage } from '../pages/product-page';
import { NavigationMenu } from '../pages/navigation-menu';
import { CartPage } from '../pages/cart-page';
import { CheckoutPage } from '../pages/checkout-page';
import { OverviewPage } from '../pages/overview-page';


test.describe ('Test all Links', () => {
        
    test("Test all Links ", async ({page}) => {
        const productPage = new ProductPage(page);
        await productPage.navigate();

        const navigationMenu = new NavigationMenu(page);
        await navigationMenu.navigateToSauceLabs();
        await productPage.navigate();

        await navigationMenu.navigateToCart();
        await page.waitForURL('https://www.saucedemo.com/cart.html');


        await navigationMenu.navigateToAllItems()
        await page.waitForURL('https://www.saucedemo.com/inventory.html');

    })
})