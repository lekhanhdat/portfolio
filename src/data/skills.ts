export interface SkillGroup {
  title: string;
  items: readonly string[];
}

/* Grouped from the CV skills summary. No proficiency levels or bars (CLAUDE.md §2.6). */
export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Core',
    items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'React Router'],
  },
  {
    title: 'Data & APIs',
    items: [
      'TanStack Query',
      'Axios',
      'REST APIs',
      'Caching & refetching',
      'Server-side search, sort & pagination',
      'Async data handling',
    ],
  },
  {
    title: 'UI & Styling',
    items: [
      'Fluent UI',
      'Ant Design',
      'Tailwind CSS',
      'SCSS',
      'Responsive UI',
      'Reusable components',
    ],
  },
  {
    title: 'Visualization',
    items: [
      'Chart.js',
      'Three.js',
      'React Three Fiber',
      'HLS streaming',
      'Mapbox',
      '2D / 360° / 3D views',
    ],
  },
  {
    title: 'Tooling & Practice',
    items: [
      'Git / GitLab',
      'Jira',
      'Jest',
      'i18n',
      'Debugging',
      'Performance optimization',
      'Technical documentation',
      'AI-assisted development',
    ],
  },
  {
    title: 'Also experienced with',
    items: [
      'React Native',
      'Expo',
      'React Navigation',
      'Push notifications',
      'Node.js / Express',
      'FastAPI',
      'OpenAI API',
      'Semantic search & RAG',
    ],
  },
];
