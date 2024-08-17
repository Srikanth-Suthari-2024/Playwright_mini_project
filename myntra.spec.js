const { test, expect } = require('@playwright/test');


test.describe.configure({ mode: 'parallel', retries: 2, timeout: 30000 });

test.describe('Myntra Website Test', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.myntra.com/');
  });

  
  test('Homepage title should contain "Myntra"', async ({ page }) => {
    await expect(page).toHaveTitle(/Myntra/);
  });

  
  test('Search bar should be visible on the homepage', async ({ page }) => {
    const searchBar = await page.locator('input[placeholder="Search"]');
    await expect(searchBar).toBeVisible();
  });

  
  test('Men\'s section should have the "Topwear" category', async ({ page }) => {
    await page.click('text=Men');
    const topwearCategory = await page.locator('a[href*="men-topwear"]');
    await expect(topwearCategory).toBeVisible();
  });

  
  test('Skipping this test for now', async ({ page }) => {
    test.skip(); 
    
  });
});


module.exports = {
  retries: 2,  
  timeout: 30000,  
  shard: { total: 2, current: 1 },  
};
