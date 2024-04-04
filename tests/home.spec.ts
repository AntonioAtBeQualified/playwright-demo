import {test, expect} from '@playwright/test';


test("Open home Page and verify UsernameField", async ({page}) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle('Swag Labs');
})