import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

const authFile = 'playwright/.auth/user.json';

setup('authenticate as standard user', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://www.saucedemo.com');
  const loginPage = new LoginPage(page);
  await loginPage.loginWithStandardUser();

  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});

setup('authenticate as problem user', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://www.saucedemo.com');
  const loginPage = new LoginPage(page);
  await loginPage.loginWithStandardUser();

  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});

setup('authenticate as error user', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://www.saucedemo.com');
  const loginPage = new LoginPage(page);
  await loginPage.loginWithStandardUser();

  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});

setup('authenticate as visual user', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://www.saucedemo.com');
  const loginPage = new LoginPage(page);
  await loginPage.loginWithStandardUser();

  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  // End of authentication steps.

  await page.context().storageState({ path: authFile });
});