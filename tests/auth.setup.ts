import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

const standard_user = 'playwright/.auth/standard_user.json';
const problem_user = 'playwright/.auth/problem_user.json';
const error_user = 'playwright/.auth/error_user.json';
const visual_user = 'playwright/.auth/visual_user.json';

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

  await page.context().storageState({ path: standard_user });
});

setup('authenticate as problem user', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://www.saucedemo.com');
  const loginPage = new LoginPage(page);
  await loginPage.loginWithProblemUser();

  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  // End of authentication steps.

  await page.context().storageState({ path: problem_user });
});

setup('authenticate as error user', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://www.saucedemo.com');
  const loginPage = new LoginPage(page);
  await loginPage.loginWithErrorUser();

  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  // End of authentication steps.

  await page.context().storageState({ path: error_user });
});

setup('authenticate as visual user', async ({ page }) => {
  // Perform authentication steps. Replace these actions with your own.
  await page.goto('https://www.saucedemo.com');
  const loginPage = new LoginPage(page);
  await loginPage.loginWithVisualUser();

  // Wait until the page receives the cookies.
  //
  // Sometimes login flow sets cookies in the process of several redirects.
  // Wait for the final URL to ensure that the cookies are actually set.
  await page.waitForURL('https://www.saucedemo.com/inventory.html');

  // End of authentication steps.

  await page.context().storageState({ path: visual_user });
});