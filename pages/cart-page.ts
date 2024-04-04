import { expect, type Locator, type Page} from '@playwright/test'

export class CartPage {
    readonly page: Page;
    readonly continueButton: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.continueButton = page.locator('data-test=continue-shopping')
        this.checkoutButton = page.locator('data-test=checkout')
    }

    async continueOrder() {
        await this.continueButton.click();
    }

    async checkoutOrder() {
        await this.checkoutButton.click();
    }
}

