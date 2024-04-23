import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';
import { BurgerMenu } from '../pages/burger-menu';

const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
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