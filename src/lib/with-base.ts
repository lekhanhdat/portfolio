const BASE_URL = import.meta.env.BASE_URL;

/**
 * Prefixes an internal path with the site base (`/portfolio/`).
 * The site is a GitHub Pages project site, so root-relative links like `/resume.pdf`
 * would point outside the portfolio. External URLs, anchors and mailto links pass through.
 */
export function withBase(path = ''): string {
  if (/^(?:[a-z][a-z\d+\-.]*:|#|\/\/)/i.test(path)) return path;

  const base = BASE_URL.endsWith('/') ? BASE_URL : `${BASE_URL}/`;
  const relative = path.replace(/^\/+/, '');
  return `${base}${relative}`;
}
