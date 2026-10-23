import { expect, test } from '@playwright/test';
import { BASE_PATH, routes } from './routes';

test.describe('pages', () => {
  for (const route of routes) {
    test(`/${route} renders cleanly`, async ({ page }) => {
      const errors: string[] = [];
      page.on('console', (message) => {
        if (message.type() === 'error') errors.push(message.text());
      });
      page.on('response', (response) => {
        if (response.url().includes(BASE_PATH) && response.status() >= 400) {
          errors.push(`${response.status()} ${response.url()}`);
        }
      });

      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await expect(page).toHaveTitle(/Le Khanh Dat/);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        'href',
        `https://lekhanhdat.github.io${BASE_PATH}${route}`,
      );
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
        'content',
        /\/portfolio\/og\/default\.png$/,
      );
      expect(errors).toEqual([]);
    });
  }
});

test('internal links and assets stay under the base path and resolve', async ({
  page,
  request,
}) => {
  const checked = new Set<string>();
  for (const route of routes) {
    await page.goto(route);
    const urls = await page
      .locator('a[href], link[href], img[src], script[src]')
      .evaluateAll((elements) =>
        elements.map(
          (element) => element.getAttribute('href') ?? element.getAttribute('src') ?? '',
        ),
      );

    for (const url of urls) {
      // Root-relative URLs must carry the project base (GitHub Pages project site).
      if (url.startsWith('/') && !url.startsWith('//')) expect(url).toMatch(/^\/portfolio\//);

      const [path = '', hash] = url.split('#');
      if (!path.startsWith(BASE_PATH)) {
        if (url.startsWith('#') && hash) {
          await expect(page.locator(`[id="${hash}"]`), `${route} → ${url}`).toHaveCount(1);
        }
        continue;
      }
      if (checked.has(path)) continue;
      checked.add(path);
      const response = await request.get(path);
      expect(response.status(), `${route} → ${path}`).toBe(200);
    }
  }
  expect(checked.size).toBeGreaterThan(routes.length);
});

test('unknown paths show the custom 404 page with styles', async ({ page }) => {
  const response = await page.goto('company-projects/does-not-exist/');
  expect(response?.status()).toBe(404);
  await expect(page.locator('h1')).toHaveText('Page not found');
  await expect(page.locator('link[rel="canonical"]')).toHaveCount(0);
  // Styles load from the base path even on a nested URL.
  const background = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  expect(background).not.toBe('rgba(0, 0, 0, 0)');
  await page.getByRole('link', { name: 'Back to home' }).click();
  await expect(page).toHaveURL(/\/portfolio\/$/);
});

test('Home has structured data for a person', async ({ page }) => {
  await page.goto('');
  const data = await page
    .locator('script[type="application/ld+json"]')
    .evaluateAll((scripts) => scripts.map((script) => JSON.parse(script.textContent ?? '{}')));
  expect(data.map((item) => item['@type'])).toEqual(['Person', 'WebSite']);
  expect(data[0].jobTitle).toBe('Frontend Software Engineer');
});
