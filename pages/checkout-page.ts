import { expect, type Locator, type Page} from '@playwright/test'

export class CheckoutPage {
    readonly page: Page;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly postalCode: Locator;
    readonly errorMessage: Locator;
    readonly cancelButton: Locator;
    readonly continueButton: Locator

    constructor(page: Page) {
        this.page = page;
        this.firstName = page.locator('[data-test="firstName"]')
        this.lastName = page.locator('[data-test="lastName"]')
        this.postalCode = page.locator('[data-test="postalCode"]')
        this.errorMessage = page.locator('[data-test="checkout-info-container"] div').filter({ hasText: 'Error: First Name is required' }).nth(2)
        this.cancelButton = page.locator('[data-test="cancel"]')
        this.continueButton = page.locator('[data-test="continue"]')
    }

    async clickOnContinueButton() {
        await this.continueButton.click();
    }

    async clickOnCancelButton() {
        await this.cancelButton.click();
    }

    // unfinished
    async fillInForm() {
        await this.firstName.fill('Max');
        await this.lastName.fill('Mustermann');
        await this.postalCode.fill('69469');
    }

    async checkError() {
        this.clickOnContinueButton

        if (await expect(this.errorMessage).toBeVisible) {
            this.fillInForm
        }
   
    }
}

