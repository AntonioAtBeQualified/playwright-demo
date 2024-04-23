import { expect, type Locator, type Page} from '@playwright/test'

export class OverviewPage {
    readonly page: Page;
    readonly cancelButton: Locator;
    readonly finishButton: Locator;
    readonly backHomeButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cancelButton = page.locator('[data-test="cancel"]')
        this.finishButton = page.locator('[data-test="finish"]')
        this.backHomeButton = page.locator('[data-test="back-to-products"]')
    }

    async clickOnCancelButton() {
        await this.cancelButton.click();
    }

    async clickOnFinishButton() {
        await this.finishButton.click();
    }

    async clickOnBackHomeButton() {
        await this.backHomeButton.click();
    }

}

