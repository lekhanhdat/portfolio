import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { routes } from './routes';

const themes = ['light', 'dark'] as const;

test.describe('accessibility (axe, WCAG 2.2 AA)', () => {
  for (const theme of themes) {
    for (const route of [...routes, 'does-not-exist/']) {
      test(`${theme} · /${route}`, async ({ page }) => {
        // Reduced motion skips the reveal fade, so axe sees final colors, not mid-animation.
        await page.emulateMedia({ reducedMotion: 'reduce', colorScheme: theme });
        await page.addInitScript((value) => localStorage.setItem('theme', value), theme);
        await page.goto(route);
        await expect(page.locator('html')).toHaveAttribute('data-theme', theme);

        const results = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
          .analyze();
        const summary = results.violations.map(
          (violation) =>
            `${violation.id} (${violation.impact}): ${violation.nodes
              .slice(0, 3)
              .map((node) => node.target.join(' '))
              .join(' | ')}`,
        );
        expect(summary).toEqual([]);
      });
    }
  }
});
