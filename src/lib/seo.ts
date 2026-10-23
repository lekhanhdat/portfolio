import { profile } from '@/data/profile';
import { education } from '@/data/education';
import { withBase } from '@/lib/with-base';

const SITE = 'https://lekhanhdat.github.io';

const absolute = (path: string) => new URL(withBase(path), SITE).href;

/** schema.org Person for the Home page. */
export function personJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: profile.title,
    url: absolute('/'),
    email: `mailto:${profile.email}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Da Nang',
      addressCountry: 'VN',
    },
    alumniOf: { '@type': 'CollegeOrUniversity', name: education.school },
    knowsAbout: ['React', 'TypeScript', 'Frontend development', 'Web applications'],
    sameAs: [profile.links.github, profile.links.linkedin],
  };
}

/** schema.org WebSite for the Home page. */
export function websiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `${profile.name} — Portfolio`,
    url: absolute('/'),
    inLanguage: 'en',
  };
}

/** schema.org CreativeWork for a project page. */
export function projectJsonLd(project: {
  title: string;
  summary: string;
  path: string;
  keywords: readonly string[];
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    url: absolute(project.path),
    keywords: project.keywords.join(', '),
    inLanguage: 'en',
    author: { '@type': 'Person', name: profile.name, url: absolute('/') },
  };
}
