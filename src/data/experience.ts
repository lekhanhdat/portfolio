export interface Experience {
  company: string;
  /** One-line description of the company, shown under its name. */
  description: string;
  role: string;
  location: string;
  /** Per-company period as on the CV; projects never carry their own dates (CLAUDE.md §2.5). */
  period: { start: string; end: string };
  highlights: readonly string[];
  stack: readonly string[];
  /** Ids of entries in the company-projects collection. */
  projects: readonly string[];
}

export const totalExperience = '1.5+ years';

export const experience: readonly Experience[] = [
  {
    company: 'AvePoint',
    description: 'AvePoint Vietnam · Data management software for Microsoft 365 and cloud',
    role: 'Frontend Software Developer',
    location: 'Da Nang',
    period: { start: 'Feb 2026', end: 'Sep 2026' },
    highlights: [
      'Developed and maintained frontend features for an enterprise data governance and records management platform with React and TypeScript.',
      'Built and extended reusable Fluent UI components: data tables, filters, pagination, dialogs, loading states and form validation.',
      'Implemented business logic for permissions, data classification, approval workflows, rule enforcement and job execution status on top of REST APIs.',
      'Resolved UI state, pagination, date/time and i18n issues, refactored components for reuse, and took part in code reviews with product, QA and backend engineers.',
    ],
    stack: ['React', 'TypeScript', 'Fluent UI', 'REST APIs', 'Axios', 'i18n'],
    projects: ['data-lifecycle-management'],
  },
  {
    company: 'MIND Technology',
    description: 'Industrial IoT and MES solutions',
    role: 'Frontend Software Developer',
    location: 'Da Nang',
    period: { start: 'Feb 2025', end: 'Jan 2026' },
    highlights: [
      'Built the frontend of manufacturing monitoring platforms with React, TypeScript, Vite and Ant Design: OEE and production dashboards, equipment alarms, production-order workflows and 2D/360°/3D factory views.',
      'Developed a camera live and playback module with HLS streaming, multi-camera layouts, playback timelines and recording calendars.',
      'Integrated telemetry, asset and product APIs with TanStack Query and Axios: caching, server-side search and sorting, pagination and request cancellation.',
      'Developed the mobile app of a factory energy management system with Expo, React Native and TanStack Query.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Ant Design',
      'TanStack Query',
      'Chart.js',
      'Three.js',
      'React Native',
    ],
    projects: [
      'factory-manufacturing-monitoring',
      'paper-mill-oee-monitoring',
      'energy-management-system',
    ],
  },
];
