import { test, expect } from '@playwright/test';

test.describe('Mobile navigation drawer', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('opens the drawer via the hamburger toggle', async ({ page }) => {
    const toggle = page.getByRole('banner').getByLabel('Open menu');
    await expect(toggle).toBeVisible();

    await toggle.click();

    await expect(page.getByRole('link', { name: 'Projects', exact: true }).last()).toBeInViewport();
  });

  test('closes the drawer after clicking a nav link', async ({ page }) => {
    await page.getByRole('banner').getByLabel('Open menu').click();

    const drawerCheckbox = page.locator('#my-drawer-3');
    await expect(drawerCheckbox).toBeChecked();

    await page.getByRole('link', { name: 'Contact', exact: true }).last().click();

    await expect(drawerCheckbox).not.toBeChecked();
    await expect(page.locator('#contact')).toBeInViewport();
  });
});
