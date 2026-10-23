/**
 * Scroll-driven chrome: the header hairline once content scrolls under it, and the floating
 * back-to-top button once the first screen is behind.
 */
function initScrollChrome(): void {
  const header = document.querySelector<HTMLElement>('[data-site-header]');
  const backToTop = document.querySelector<HTMLElement>('[data-back-to-top]');
  if (!header && !backToTop) return;

  const update = () => {
    header?.toggleAttribute('data-scrolled', window.scrollY > 8);
    backToTop?.toggleAttribute('data-visible', window.scrollY > window.innerHeight * 0.6);
  };
  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
}

initScrollChrome();
