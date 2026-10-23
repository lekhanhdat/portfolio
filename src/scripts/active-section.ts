/**
 * Marks the header link of the Home section currently in view with aria-current.
 * Only runs where the linked sections exist on the page (Home); elsewhere it is a no-op.
 */
function initActiveSection(): void {
  const linksById = new Map<string, HTMLAnchorElement[]>();

  for (const link of document.querySelectorAll<HTMLAnchorElement>('[data-nav-link]')) {
    const url = new URL(link.href);
    if (url.pathname !== window.location.pathname || !url.hash) continue;
    const id = decodeURIComponent(url.hash.slice(1));
    linksById.set(id, [...(linksById.get(id) ?? []), link]);
  }

  const sections = [...linksById.keys()]
    .map((id) => document.getElementById(id))
    .filter((section): section is HTMLElement => section !== null);
  if (sections.length === 0) return;

  let activeId: string | null = null;

  // A plain scroll handler over a handful of sections: cheap, and unlike IntersectionObserver
  // it lets a section that is not in the nav (e.g. Education) clear the highlight precisely.
  const update = () => {
    const line = window.innerHeight * 0.4;
    let current: string | null = null;
    for (const section of sections) {
      const { top, bottom } = section.getBoundingClientRect();
      if (top <= line && bottom > line) current = section.id;
    }
    if (current === activeId) return;
    activeId = current;
    for (const [id, links] of linksById) {
      for (const link of links) {
        if (id === current) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      }
    }
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
}

initActiveSection();
