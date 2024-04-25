import { expect, type Locator, type Page} from '@playwright/test'
const testData = JSON.parse(JSON.stringify(require("../.auth/user.json")))

export class LoginPage {
    page: Page;
    userName: Locator;
    password: Locator;
    loginButton: Locator;
    errorMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userName = page.getByPlaceholder('Username')
        this.password = page.getByPlaceholder('Password')
        this.loginButton = page.locator('[data-test="login-button"]')
        this.errorMessage = page.getByRole('heading', { name: 'Epic sadface: Username is required'})
    }


    async navigate() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async loginWithStandardUser() {
        await this.userName.fill(testData.standardUser);
        await this.password.fill(testData.password);
        await this.loginButton.click();
    }

    async loginWithLockedOutUser() {
        await this.userName.fill(testData.lockedOutUser);
        await this.password.fill(testData.password);
        await this.loginButton.click();
        await expect(this.errorMessage).toBeVisible;
    }

    async loginWithProblemUser() {
        await this.userName.fill(testData.problemUser);
        await this.password.fill(testData.password);
        await this.loginButton.click();
    }

    async loginWithPerformanceGlichtUser() {
        await this.userName.fill(testData.performanceGlitchUser);
        await this.password.fill(testData.password);
        await this.loginButton.click();
    }

    async loginWithErrorUser() {
        await this.userName.fill(testData.errorUser);
        await this.password.fill(testData.password);
        await this.loginButton.click();
    }

    async loginWithVisualUser() {
        await this.userName.fill(testData.visualUser);
        await this.password.fill(testData.password);
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

