import { test, expect } from '@playwright/test';

test.describe('My Bible Journey - Basic E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/my bible journey/i);
  });

  test('should navigate using navbar', async ({ page }) => {
    // Click on About link
    await page.click('text=about');
    
    // Wait for scroll to complete
    await page.waitForTimeout(1000);
    
    // Check if About section is visible
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeVisible();
  });

  test('should display scroll progress bar', async ({ page }) => {
    const progressBar = page.locator('nav[role="navigation"] div[role="progressbar"]');
    await expect(progressBar).toBeVisible();
  });

  test('should toggle mobile menu', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Click hamburger menu
    const menuButton = page.locator('button[aria-label*="navigation menu"]');
    await menuButton.click();
    
    // Check if menu is expanded
    await expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    
    // Check if mobile menu is visible
    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toBeVisible();
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    // Check for skip to content link
    const skipLink = page.locator('.skip-to-content');
    await expect(skipLink).toHaveAttribute('href', '#home');
    
    // Check navbar has proper role
    const navbar = page.locator('nav[role="navigation"]');
    await expect(navbar).toBeVisible();
    
    // Check footer has proper role
    const footer = page.locator('footer[role="contentinfo"]');
    await expect(footer).toBeVisible();
  });

  test('should display all main sections', async ({ page }) => {
    const sections = ['#home', '#preview', '#about', '#statement', '#contact'];
    
    for (const selector of sections) {
      const section = page.locator(selector);
      await expect(section).toBeInViewport({ ratio: 0.1 });
      
      // Scroll to next section
      await section.scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);
    }
  });

  test('should have responsive images with lazy loading', async ({ page }) => {
    const images = page.locator('img[loading="lazy"]');
    const count = await images.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should display contact form', async ({ page }) => {
    await page.locator('#contact').scrollIntoViewIfNeeded();
    
    const firstNameInput = page.locator('input[name="firstName"]');
    const emailInput = page.locator('input[name="email"]');
    
    await expect(firstNameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
  });

  test('logo should navigate to home', async ({ page }) => {
    // Scroll away from home
    await page.locator('#about').scrollIntoViewIfNeeded();
    
    // Click logo
    await page.click('a[href*="home"]');
    
    // Wait for scroll
    await page.waitForTimeout(1000);
    
    // Check if we're at the top
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(150);
  });
});
