import { test, expect } from '@playwright/test';


test.use({
  viewport: { width: 1280, height: 720 }, 
  timeout: 30000, 
});


test.describe.configure({ retries: 2 });


test.describe.configure({ shard: { total: 2, current: 1 } });

test.describe('Flipkart Pages Test Suite', () => {
  test('Test Flipkart Home Page', async ({ page }) => {
    await page.goto('https://www.flipkart.com');
    
    
    if (await page.locator('button >> text=✕').isVisible()) {
      await page.click('button >> text=✕');
    }

    
    const searchBar = page.locator('input[name="q"]');
    await expect(searchBar).toBeVisible();

    
    await expect(page).toHaveTitle(/Online Shopping/);
  });

  test('Test Flipkart Electronics Page', async ({ page }) => {
    await page.goto('https://www.flipkart.com/electronics');

    
    await expect(page).toHaveTitle(/Electronics/);

    
    const electronicsHeader = page.locator('h1 >> text=Electronics');
    await expect(electronicsHeader).toBeVisible();
  });

  test('Test Flipkart Fashion Page', async ({ page }) => {
    await page.goto('https://www.flipkart.com/fashion');

    
    await expect(page).toHaveTitle(/Fashion/);

    
    const fashionHeader = page.locator('h1 >> text=Fashion');
    await expect(fashionHeader).toBeVisible();
  });
});
