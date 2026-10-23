/**
 * Reveal-on-scroll for elements marked with [data-reveal].
 * Runs once per element; CSS in global.css skips the effect under prefers-reduced-motion,
 * and content stays visible if this script never runs (styles are scoped to `.js`).
 * Children of [data-reveal-group] get a staggered delay via --reveal-index.
 */
function initReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (targets.length === 0) return;

  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    group.querySelectorAll<HTMLElement>(':scope > [data-reveal]').forEach((child, index) => {
      child.style.setProperty('--reveal-index', String(Math.min(index, 6)));
    });
  });

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
  );

  targets.forEach((el) => observer.observe(el));
}

initReveal();
