import { expect, test } from '@playwright/test';

test.describe('desktop navigation', () => {
  test.skip(({ isMobile }) => isMobile, 'Header links are in the menu sheet on mobile');

  test('header links scroll on Home and mark the section in view', async ({ page }) => {
    await page.goto('');
    const nav = page.getByRole('navigation', { name: 'Main' });
    await nav.getByRole('link', { name: 'Skills' }).click();
    await expect(page).toHaveURL(/#skills$/);
    await expect(nav.getByRole('link', { name: 'Skills' })).toHaveAttribute('aria-current', 'true');
  });

  test('Company Projects opens the index page, even from Home', async ({ page }) => {
    await page.goto('');
    await page
      .getByRole('navigation', { name: 'Main' })
      .getByRole('link', { name: 'Company Projects' })
      .click();
    await expect(page).toHaveURL(/\/company-projects\/$/);
  });

  test('Personal Project opens the case study directly, even from Home', async ({ page }) => {
    await page.goto('');
    const nav = page.getByRole('navigation', { name: 'Main' });
    await nav.getByRole('link', { name: 'Personal Project' }).click();
    await expect(page).toHaveURL(/\/personal-projects\/da-nang-smart-tourism\/$/);
    await expect(page.locator('h1')).toHaveText('Da Nang Smart Tourism');
  });

  test('the section catalog jumps to a section and marks it', async ({ page }) => {
    await page.goto('');
    await expect(page.locator('html')).toHaveAttribute('data-snap', '');
    const catalog = page.getByRole('navigation', { name: 'Sections' });
    await expect(catalog.getByRole('link')).toHaveCount(7);
    await expect(catalog.getByRole('link', { name: 'Intro' })).toHaveAttribute(
      'aria-current',
      'true',
    );
    await catalog.getByRole('link', { name: 'Education' }).click();
    await expect(page).toHaveURL(/#education$/);
    await expect(catalog.getByRole('link', { name: 'Education' })).toHaveAttribute(
      'aria-current',
      'true',
    );
  });

  test('company links lead to the index page and mark the current page', async ({ page }) => {
    await page.goto('personal-projects/da-nang-smart-tourism/');
    const nav = page.getByRole('navigation', { name: 'Main' });
    await expect(nav.getByRole('link', { name: 'Personal Project' })).toHaveAttribute(
      'aria-current',
      'page',
    );
    await nav.getByRole('link', { name: 'Company Projects' }).click();
    await expect(page).toHaveURL(/\/company-projects\/$/);
    await expect(page.locator('h1')).toContainText('Enterprise and industrial');
  });

  test('company briefs link to the previous and next project', async ({ page }) => {
    await page.goto('company-projects/factory-manufacturing-monitoring/');
    const pager = page.getByRole('navigation', { name: 'Company projects' });
    await pager.getByRole('link', { name: /Next/ }).click();
    await expect(page.locator('h1')).toHaveText('Paper Mill Production & OEE Monitoring');
    await expect(page.getByRole('note', { name: 'Confidentiality' })).toBeVisible();
  });
});

test.describe('mobile menu', () => {
  test.skip(({ isMobile }) => !isMobile, 'The menu sheet only exists below lg');

  test('opens, traps focus in the dialog and closes with Escape', async ({ page }) => {
    await page.goto('');
    const open = page.getByRole('button', { name: 'Open menu' });
    await open.click();
    const dialog = page.getByRole('dialog', { name: 'Site menu' });
    await expect(dialog).toBeVisible();
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(open).toBeFocused();
  });

  test('following a link closes the menu', async ({ page }) => {
    await page.goto('');
    await page.getByRole('button', { name: 'Open menu' }).click();
    await page
      .getByRole('dialog')
      .getByRole('link', { name: /Contact/ })
      .click();
    await expect(page.getByRole('dialog')).toBeHidden();
    await expect(page).toHaveURL(/#contact$/);
  });
});

test('theme toggle switches theme and remembers the choice', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('');
  const toggle = page.getByRole('button', { name: 'Dark theme' });
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  await toggle.click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  await expect(toggle).toHaveAttribute('aria-pressed', 'true');
  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('email opens the mail app and can also be copied', async ({ page, context, browserName }) => {
  test.skip(browserName !== 'chromium', 'Clipboard permissions are Chromium-only here');
  await context.grantPermissions(['clipboard-read', 'clipboard-write']);
  await page.goto('#contact');
  await expect(page.getByRole('link', { name: 'Email me' })).toHaveAttribute(
    'href',
    'mailto:lekhanhdat03@gmail.com',
  );
  await page.getByRole('button', { name: 'Copy address' }).click();
  await expect(page.getByRole('button', { name: 'Copied' })).toBeVisible();
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe('lekhanhdat03@gmail.com');
  await expect(page.getByRole('status')).toHaveText('Email address copied to clipboard');
});

test('résumé opens as a PDF and can be downloaded', async ({ page, request }) => {
  await page.goto('#contact');
  const view = page.getByRole('link', { name: /View résumé/ }).last();
  await expect(view).toHaveAttribute('target', '_blank');
  const response = await request.get((await view.getAttribute('href')) ?? '');
  expect(response.headers()['content-type']).toBe('application/pdf');
  await expect(page.getByRole('link', { name: 'Download PDF' })).toHaveAttribute(
    'download',
    'Le-Khanh-Dat-Resume.pdf',
  );
});

test('case study gallery links every screen to its full-size image', async ({ page, request }) => {
  await page.goto('personal-projects/da-nang-smart-tourism/');
  const gallery = page.getByRole('region', { name: 'Gallery' });
  const links = gallery.getByRole('link');
  await expect(links).toHaveCount(11);
  for (const href of await links.evaluateAll((items) =>
    items.map((item) => item.getAttribute('href') ?? ''),
  )) {
    expect((await request.get(href)).status()).toBe(200);
  }
});

test('the back-to-top button appears after scrolling and returns to the top', async ({ page }) => {
  await page.goto('company-projects/data-lifecycle-management/');
  const button = page.getByRole('link', { name: 'Back to top' });
  await expect(button).toBeHidden();
  await page.evaluate(() => window.scrollTo(0, 2000));
  await expect(button).toBeVisible();
  await button.click();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await expect(page.locator('body > footer')).toHaveCount(0);
});
