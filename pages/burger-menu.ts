import { expect, type Locator, type Page} from '@playwright/test'

export class BurgerMenu {
    page: Page;
    burgerMenu: Locator;
    allItemsLink: Locator;
    aboutLink: Locator;
    logoutLink: Locator;
    resetAppStateLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.burgerMenu = page.getByRole('button', { name: 'Open Menu' })
        this.allItemsLink = page.locator('[data-test="inventory-sidebar-link"]')
        this.aboutLink = page.locator('[data-test="about-sidebar-link"]')
        this.logoutLink = page.locator('[data-test="logout-sidebar-link"]')
        this.resetAppStateLink = page.locator('[data-test="reset-sidebar-link"]')
    }

    async navigateToAllItems() {
        await this.burgerMenu.click();
        if (await expect(this.allItemsLink).toBeVisible) {
            await this.page.goto('https://www.saucedemo.com/inventory.html');    
        }
    }

    async navigateToSauceLabs() {
        await this.burgerMenu.click();
        if (await expect(this.aboutLink).toBeVisible) {
        await this.page.goto('https://saucelabs.com/');
        }
    }

    async logout() {
        await this.burgerMenu.click();
        await this.logoutLink.click();
    }

}

