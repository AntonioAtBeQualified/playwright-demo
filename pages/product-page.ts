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
        this.burgerMenu = page.locator('id=react-burger-menu')
        this.logoutButton = page.locator('id=logout_sidebar_link')
        this.cart = page.locator('id=shopping-cart-container')
        this.addToCart = page.locator('data-test=add-to-cart-sauce-labs-backpack')
        this.addToCart = page.locator('data-test=product_sort_container')
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

