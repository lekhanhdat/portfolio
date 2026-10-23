import { Moon, Sun } from 'lucide-react';

/**
 * Static markup; behavior lives in src/scripts/theme.ts (no React runtime shipped).
 * Icons switch via the CSS dark: variant, so the initial paint is always correct.
 */
export function ThemeToggle() {
  return (
    <button
      type="button"
      data-theme-toggle
      aria-label="Dark theme"
      aria-pressed="false"
      className="inline-flex size-11 items-center justify-center rounded-md text-text-muted transition-colors hover:bg-surface-muted hover:text-text"
    >
      <Sun aria-hidden="true" className="size-5 dark:hidden" />
      <Moon aria-hidden="true" className="hidden size-5 dark:block" />
    </button>
  );
}
