export interface NavItem {
  label: string;
  /** Path relative to the site base; pass through withBase() before rendering. */
  href: string;
}

/** Home section ids, in page order (PLAN §4.1). */
export const sectionIds = {
  summary: 'summary',
  experience: 'experience',
  companyProjects: 'CompanyProjects',
  personalProject: 'PersonalProject',
  skills: 'skills',
  education: 'education',
  contact: 'contact',
} as const;

// Company/Personal links switch to their index pages once those exist (Phase 4).
export const mainNav: readonly NavItem[] = [
  { label: 'Experience', href: `/#${sectionIds.experience}` },
  { label: 'Company Projects', href: `/#${sectionIds.companyProjects}` },
  { label: 'Personal Project', href: `/#${sectionIds.personalProject}` },
  { label: 'Skills', href: `/#${sectionIds.skills}` },
  { label: 'Contact', href: `/#${sectionIds.contact}` },
];
