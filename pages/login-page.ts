import { expect, type Locator, type Page} from '@playwright/test'

export class LoginPage {
    page: Page;
    userName: Locator;
    password: Locator;
    loginButton: Locator;
    errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.locator('[data-test="username"]')
        this.password = page.locator('data-test=password');
        this.loginButton = page.locator('[data-test="login-button"]')
        this.errorMessage = page.locator('[data-test="error"]')
    }

    async navigate() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async loginWithStandardUser() {
        await this.userName.fill('standard_user');
        await this.password.fill('secret_sauce');
        await this.loginButton.click();
    }

    async loginWithLockedOutUser() {
        await this.userName.fill('locked_out_user');
        await this.password.fill('secret_sauce');
        await this.loginButton.click();
        await expect(this.errorMessage).toBeVisible;
    }

    async loginWithProblemUser() {
        await this.userName.fill('problem_user');
        await this.password.fill('secret_sauce');
        await this.loginButton.click();
    }

    async loginWithPerformanceGlichtUser() {
        await this.userName.fill('performance_glitch_user');
        await this.password.fill('secret_sauce');
        await this.loginButton.click();
    }

    async loginWithErrorUser() {
        await this.userName.fill('error_user');
        await this.password.fill('secret_sauce');
        await this.loginButton.click();
    }

    async loginWithVisualUser() {
        await this.userName.fill('visual_user');
        await this.password.fill('secret_sauce');
        await this.loginButton.click();
    }

    async checkerror() {
        await this.loginButton.click();

        if (await expect(this.errorMessage).toBeVisible) {
            await this.loginWithStandardUser();
        } else {
            await this.userName.fill('ERROR');
        }
    }

}

