import { personalProjectPath } from '@/lib/projects';

export interface NavItem {
  label: string;
  /** Path relative to the site base; pass through withBase() before rendering. */
  href: string;
}

/** Home section ids, in page order (PLAN §4.1). */
export const sectionIds = {
  intro: 'intro',
  experience: 'experience',
  companyProjects: 'company-projects',
  personalProject: 'personal-project',
  skills: 'skills',
  education: 'education',
  contact: 'contact',
} as const;

/** Entries of the section catalog on Home, in page order. */
export const homeSections: readonly { id: string; label: string }[] = [
  { id: sectionIds.intro, label: 'Intro' },
  { id: sectionIds.experience, label: 'Experience' },
  { id: sectionIds.companyProjects, label: 'Company projects' },
  { id: sectionIds.personalProject, label: 'Personal project' },
  { id: sectionIds.skills, label: 'Skills' },
  { id: sectionIds.education, label: 'Education' },
  { id: sectionIds.contact, label: 'Contact' },
];

/** The personal project the header links to directly. */
export const featuredProjectId = 'da-nang-smart-tourism';

// Project links always open pages (Home sections are reachable from the section catalog).
export const mainNav: readonly NavItem[] = [
  { label: 'Experience', href: `/#${sectionIds.experience}` },
  { label: 'Company Projects', href: '/company-projects/' },
  { label: 'Personal Project', href: personalProjectPath(featuredProjectId) },
  { label: 'Skills', href: `/#${sectionIds.skills}` },
  { label: 'Contact', href: `/#${sectionIds.contact}` },
];
