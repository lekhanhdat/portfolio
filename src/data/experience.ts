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
    role: 'Frontend Software Engineer',
    location: 'Da Nang',
    period: { start: 'Feb 2026', end: 'Sep 2026' },
    highlights: [
      'Built reusable Fluent UI components: data tables, filters, pagination, dialogs and validated forms.',
      'Implemented permissions, data classification, approval workflows, rule enforcement and job status over REST APIs.',
      'Fixed UI state, pagination, date/time and i18n issues; refactored for reuse and reviewed code.',
    ],
    stack: ['React', 'TypeScript', 'Fluent UI', 'REST APIs', 'Axios', 'i18n'],
    projects: ['data-lifecycle-management'],
  },
  {
    company: 'MIND Technology',
    description: 'Industrial IoT and MES solutions',
    role: 'Frontend Software Engineer',
    location: 'Da Nang',
    period: { start: 'Feb 2025', end: 'Jan 2026' },
    highlights: [
      'Built OEE and production dashboards, equipment alarms, production orders and 2D/360°/3D factory views.',
      'Developed camera live and playback with HLS streaming, multi-camera layouts and a playback timeline.',
      'Integrated APIs with TanStack Query and Axios: caching, server-side search and pagination, cancellation.',
      'Built the mobile app of a factory energy management system with Expo and React Native.',
    ],
    stack: [
      'React',
      'TypeScript',
      'Vite',
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
