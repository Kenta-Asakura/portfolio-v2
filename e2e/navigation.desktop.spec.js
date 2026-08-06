import { test, expect } from '@playwright/test';

test.describe('Desktop sidebar navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('sidebar is visible and mobile nav is hidden', async ({ page }) => {
    await expect(page.getByRole('navigation', { name: 'Main navigation' }).last()).toBeVisible();
    await expect(page.getByRole('banner')).toBeHidden();
  });

  for (const { name, id } of [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ]) {
    test(`clicking "${name}" scrolls the ${id} section into view`, async ({ page }) => {
      await page.getByRole('link', { name, exact: true }).click();
      await expect(page.locator(`#${id}`)).toBeInViewport();
    });
  }
});
