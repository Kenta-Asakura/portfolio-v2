import { test, expect } from '@playwright/test';

test.describe('Project modal', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('opens with project details when a card is selected', async ({ page }) => {
    const firstCard = page.getByRole('button', { name: /view details for/i }).first();
    const projectTitle = await firstCard.getByRole('heading').textContent();

    await firstCard.click();

    const modal = page.getByRole('dialog');
    await expect(modal).toBeVisible();
    await expect(modal.getByRole('heading', { name: projectTitle })).toBeVisible();
    await expect(modal.getByRole('link', { name: 'View Live Demo' })).toBeVisible();
    await expect(modal.getByRole('link', { name: 'View Source Code' })).toBeVisible();
  });

  test('closes via the close button', async ({ page }) => {
    await page
      .getByRole('button', { name: /view details for/i })
      .first()
      .click();

    const modal = page.getByRole('dialog');
    await expect(modal).toBeVisible();

    await page.getByRole('button', { name: 'Close modal' }).click();

    await expect(modal).toBeHidden();
  });
});
