/** "Copy" button next to the contact email (markup: src/components/sections/Contact.tsx). */
const RESET_AFTER_MS = 2000;

function initCopyEmail(): void {
  document.querySelectorAll<HTMLButtonElement>('[data-copy-email]').forEach((button) => {
    const label = button.querySelector<HTMLElement>('[data-copy-email-label]');
    const status = button.parentElement?.querySelector<HTMLElement>('[data-copy-email-status]');
    const email = button.dataset.copyEmail;
    if (!label || !email) return;

    // Without the async Clipboard API (insecure context, old browser) the mailto link remains.
    if (!('clipboard' in navigator)) {
      button.remove();
      return;
    }

    let timer: number | undefined;
    const show = (labelText: string, statusText: string) => {
      label.textContent = labelText;
      if (status) status.textContent = statusText;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        label.textContent = 'Copy';
        if (status) status.textContent = '';
      }, RESET_AFTER_MS);
    };

    button.addEventListener('click', () => {
      navigator.clipboard.writeText(email).then(
        () => show('Copied', 'Email address copied to clipboard'),
        () => show('Copy failed', 'Could not copy. Select the address to copy it.'),
      );
    });
  });
}

initCopyEmail();
