import { expect, type Locator, type Page} from '@playwright/test'

export class ProductPage {
    readonly page: Page;
    readonly burgerMenu: Locator;
    readonly logoutButton: Locator;
    readonly cart: Locator;
    readonly addToCart: Locator;
    readonly productSortContainer: Locator;

    constructor(page: Page) {
        this.page = page;
        this.burgerMenu = page.getByRole('button', { name: 'Open Menu' })
        this.logoutButton = page.locator('[data-test="logout-sidebar-link"]')
        this.cart = page.locator('[data-test="shopping-cart-link"]')
        this.addToCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
        this.productSortContainer = page.locator('[data-test="product-sort-container"]')
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com/inventory.html');
    }

    async logout() {
        await this.burgerMenu.click();
        await this.logoutButton.click();
    }

    // unfinished
    async sortTest() {
        await this.productSortContainer.click();
    }

    async addProductToCart() {
        await this.addToCart.click();
    }

    async navigateToShoppingCart() {
        await this.cart.click();
    }
}

