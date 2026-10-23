/**
 * Theme toggle behavior. The initial theme is set before paint by the inline script in
 * BaseLayout; this keeps buttons, storage and the OS preference in sync afterwards.
 */
type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';
const root = document.documentElement;

const current = (): Theme => (root.dataset.theme === 'dark' ? 'dark' : 'light');

function hasStoredPreference(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    return false;
  }
}

function apply(theme: Theme): void {
  root.dataset.theme = theme;
  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((button) => {
    button.setAttribute('aria-pressed', String(theme === 'dark'));
  });
}

function initTheme(): void {
  apply(current());

  document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const next: Theme = current() === 'dark' ? 'light' : 'dark';
      apply(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Storage unavailable (private mode): the choice lasts for this page view only.
      }
    });
  });

  // Follow the OS setting until the visitor makes an explicit choice.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    if (!hasStoredPreference()) apply(event.matches ? 'dark' : 'light');
  });
}

initTheme();
