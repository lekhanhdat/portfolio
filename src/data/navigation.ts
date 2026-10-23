export interface NavItem {
  label: string;
  /** Path relative to the site base; pass through withBase() before rendering. */
  href: string;
}

// Home anchors land in Phase 3; Company/Personal index pages in Phase 4.
export const mainNav: readonly NavItem[] = [
  { label: 'Experience', href: '/#experience' },
  { label: 'Company Projects', href: '/#company-projects' },
  { label: 'Personal Project', href: '/#personal-project' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Contact', href: '/#contact' },
];
