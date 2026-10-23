export interface NavItem {
  label: string;
  /** Path relative to the site base; pass through withBase() before rendering. */
  href: string;
  /** Used instead of `href` on Home, where the section is on the same page. */
  homeHref?: string;
}

/** Home section ids, in page order (PLAN §4.1). */
export const sectionIds = {
  summary: 'summary',
  experience: 'experience',
  companyProjects: 'company-projects',
  personalProject: 'personal-project',
  skills: 'skills',
  education: 'education',
  contact: 'contact',
} as const;

// Project links lead to their index pages, except on Home where they scroll to the preview.
export const mainNav: readonly NavItem[] = [
  { label: 'Experience', href: `/#${sectionIds.experience}` },
  {
    label: 'Company Projects',
    href: '/company-projects/',
    homeHref: `/#${sectionIds.companyProjects}`,
  },
  {
    label: 'Personal Project',
    href: '/personal-projects/',
    homeHref: `/#${sectionIds.personalProject}`,
  },
  { label: 'Skills', href: `/#${sectionIds.skills}` },
  { label: 'Contact', href: `/#${sectionIds.contact}` },
];
