import type { SchematicVariant } from '@/components/projects/SchematicFigure';

export type Platform = 'Web' | 'Mobile' | 'API' | 'AI';

export interface CompanyProject {
  slug: string;
  title: string;
  company: 'AvePoint' | 'MIND Technology';
  platforms: readonly Platform[];
  myRole: string;
  summary: string;
  stack: readonly string[];
  schematic: SchematicVariant;
}

/*
 * Card-level data for the Home preview. Detail pages (Phase 4) come from Content Collections;
 * slugs here must match those entries. Order is fixed: C1 → C2 → C3 → C4.
 */
export const companyProjects = [
  {
    slug: 'data-lifecycle-management',
    title: 'Data Lifecycle Management Platform',
    company: 'AvePoint',
    platforms: ['Web'],
    myRole: 'Frontend developer',
    summary:
      'An enterprise data governance and records management platform. I built UI and business logic for permissions, classification, approval workflows and job status.',
    stack: ['React', 'TypeScript', 'Fluent UI', 'REST APIs'],
    schematic: 'data-table-workflow',
  },
  {
    slug: 'factory-manufacturing-monitoring',
    title: 'Factory Manufacturing Monitoring Platform',
    company: 'MIND Technology',
    platforms: ['Web'],
    myRole: 'Frontend developer (main contributor)',
    summary:
      'An Industrial IoT / MES platform for production monitoring. I built OEE dashboards, camera live and playback, alarms and server-side product data management.',
    stack: ['React', 'TypeScript', 'Ant Design', 'TanStack Query', 'HLS'],
    schematic: 'dashboard-grid',
  },
  {
    slug: 'paper-mill-oee-monitoring',
    title: 'Paper Mill Production & OEE Monitoring',
    company: 'MIND Technology',
    platforms: ['Web'],
    myRole: 'Frontend developer',
    summary:
      'Production and OEE monitoring for a paper mill. I built dashboard, OEE and statistics views, real-time alarm notifications and 2D/360°/3D factory views.',
    stack: ['React', 'TypeScript', 'Ant Design', 'TanStack Query', 'Three.js'],
    schematic: 'dashboard-grid',
  },
  {
    slug: 'energy-management-system',
    title: 'Factory Energy Management System',
    company: 'MIND Technology',
    platforms: ['Web', 'Mobile'],
    myRole: 'Mobile app developer',
    summary:
      'Energy monitoring for a factory, with web and mobile clients on one backend. I built the mobile app: consumption and cost charts, telemetry, assets, alarms and reports.',
    stack: ['React Native', 'Expo', 'TypeScript', 'TanStack Query'],
    schematic: 'mobile-web-pair',
  },
] as const satisfies readonly CompanyProject[];

export type ProjectSlug = (typeof companyProjects)[number]['slug'];

export function getCompanyProject(slug: ProjectSlug): CompanyProject {
  const project = companyProjects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Unknown project: ${slug}`);
  return project;
}

export const personalProject = {
  slug: 'da-nang-smart-tourism',
  title: 'Da Nang Smart Tourism',
  tagline:
    'An AI-assisted travel platform for Da Nang — a web dashboard for administrators and a mobile app for visitors, built end to end.',
  platforms: ['Web', 'Mobile', 'AI'] satisfies Platform[],
  myRole: 'Lead developer — end to end',
  surfaces: ['Web admin dashboard', 'Mobile app', 'APIs & AI services'],
  stack: ['React', 'React Native', 'TypeScript', 'Ant Design', 'Node.js', 'FastAPI', 'OpenAI API'],
  links: {
    demo: 'https://travel-admin-frontend.vercel.app/',
    repo: 'https://github.com/lekhanhdat/Travel',
  },
} as const;
