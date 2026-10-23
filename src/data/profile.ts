export const profile = {
  name: 'Le Khanh Dat',
  title: 'Frontend Software Engineer',
  location: 'Da Nang, Vietnam',
  email: 'lekhanhdat03@gmail.com',
  links: {
    github: 'https://github.com/lekhanhdat',
    linkedin: 'https://www.linkedin.com/in/lekhanhdat/',
  },
  /** Path under `public/`; every Résumé button hides when this is null. */
  resumePath: '/resume.pdf' as string | null,
  /** File name the browser saves the résumé as. */
  resumeFileName: 'Le-Khanh-Dat-Resume.pdf',
  /** Single switch for every "Open to work" touchpoint (PLAN §2.2). */
  availability: {
    open: true,
    label: 'Open to work',
    roles: 'Frontend roles',
    arrangements: 'Onsite or remote',
    locations: ['Da Nang', 'Ho Chi Minh City', 'Ha Noi'],
  },
} as const;
