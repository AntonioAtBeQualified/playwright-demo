import { expect, type Locator, type Page} from '@playwright/test'

export class CartPage {
    readonly page: Page;
    readonly continueShoppingButton: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    async continueOrder() {
        await this.continueShoppingButton.click();
    }

    async checkoutOrder() {
        await this.checkoutButton.click();
    }
}

