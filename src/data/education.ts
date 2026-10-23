export const education = {
  school: 'Vietnam – Korea University of Information and Communication Technology',
  shortName: 'VKU',
  degree: 'Bachelor of Engineering in Global Information Technology',
  period: { start: 'Sep 2021', end: 'Jan 2026' },
  classification: 'Distinction',
  gpa: '3.32 / 4.0',
  honours: [
    '4× Academic Encouragement Scholarship recipient',
    '2× Excellent Student honoree',
    'Top 10 finalist & consolation prize, English Talent Competition',
    'Youth Union Executive Committee (2022–2024); Certificate of Merit from the University of Danang Youth Union',
  ],
} as const;

export const languages = [
  { name: 'English', level: 'B2', detail: 'Upper-intermediate · TOEIC 650+' },
  { name: 'Vietnamese', level: 'Native', detail: null },
] as const;
