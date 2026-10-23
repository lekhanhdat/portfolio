/**
 * Marks the link ([data-nav-link]) of the section currently in view with aria-current:
 * header links on Home, table-of-contents links on the case study. Links to other pages
 * are ignored, so pages without same-page targets are a no-op.
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
    .filter((section): section is HTMLElement => section !== null)
    .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));
  if (sections.length === 0) return;

  let activeId: string | null = null;

  // A plain scroll handler over a handful of sections: cheap, and unlike IntersectionObserver
  // it lets a section that is not in the nav (e.g. Education) clear the highlight precisely.
  // A <section> spans its own box; a heading (case study TOC) spans until the next target.
  const update = () => {
    const line = window.innerHeight * 0.4;
    let current: string | null = null;
    sections.forEach((section, index) => {
      const { top, bottom } = section.getBoundingClientRect();
      const next = sections[index + 1];
      const end =
        section.tagName === 'SECTION'
          ? bottom
          : next
            ? next.getBoundingClientRect().top
            : Number.POSITIVE_INFINITY;
      if (top <= line && end > line) current = section.id;
    });
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
