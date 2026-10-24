/**
 * On pages split into snapping screens (html[data-snap]), an in-page link to a heading that
 * sits partway down a screen would land between snap points, and mandatory snapping could
 * then settle on the next screen. Such links scroll to the screen (.page-section) holding
 * the target instead. Links to the screens themselves keep the browser's default behavior.
 */
function initSnapAnchors(): void {
  if (!document.documentElement.hasAttribute('data-snap')) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href*="#"]');
    if (!link) return;

    const url = new URL(link.href);
    if (url.pathname !== window.location.pathname || !url.hash) return;
    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    const screen = target?.closest<HTMLElement>('.page-section');
    if (!target || !screen || screen === target) return;

    event.preventDefault();
    screen.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth' });
    history.pushState(null, '', url.hash);
  });
}

initSnapAnchors();
