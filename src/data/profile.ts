export const profile = {
  name: 'Le Khanh Dat',
  initials: 'LKD',
  title: 'Frontend Software Developer',
  location: 'Da Nang, Vietnam',
  email: 'lekhanhdat03@gmail.com',
  links: {
    github: 'https://github.com/lekhanhdat',
    linkedin: 'https://linkedin.com/in/lekhanhdat',
  },
  /** Path under `public/`. Null until the public résumé PDF is supplied (U.M6). */
  resumePath: null as string | null,
  /** Single switch for every "Open to work" touchpoint (PLAN §2.2). */
  availability: {
    open: true,
    label: 'Open to work',
    roles: 'Frontend roles',
    arrangements: 'Onsite or remote',
    locations: ['Da Nang', 'Ho Chi Minh City', 'Ha Noi'],
  },
} as const;
