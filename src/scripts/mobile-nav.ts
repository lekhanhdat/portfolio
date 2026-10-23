/** Mobile navigation sheet (markup: src/components/layout/MobileNav.tsx). */
function initMobileNav(): void {
  const dialog = document.querySelector<HTMLDialogElement>('[data-mobile-nav]');
  const openButton = document.querySelector<HTMLButtonElement>('[data-mobile-nav-open]');
  if (!dialog || !openButton) return;

  const close = () => {
    if (dialog.open) dialog.close();
  };

  openButton.addEventListener('click', () => dialog.showModal());
  dialog.querySelector('[data-mobile-nav-close]')?.addEventListener('click', close);

  // Following a link: close so the page is usable when the anchor scroll lands.
  dialog.addEventListener('click', (event) => {
    if ((event.target as HTMLElement).closest('a')) close();
  });

  // The native dialog returns focus to the opener on close; nothing else to restore.
  window.matchMedia('(min-width: 1024px)').addEventListener('change', (event) => {
    if (event.matches) close();
  });
}

initMobileNav();
