export interface ExperienceEntry {
  period: string;
  company: string;
  role: string;
  location: string;
  highlights: string[];
  current?: boolean;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    period: '06/2025 — presente',
    company: 'Metadev',
    role: 'Desarrollador Angular',
    location: 'San Roque, España',
    current: true,
    highlights: [
      'Angular 22 + signals, testing E2E con Playwright.',
      'Flujo de desarrollo asistido por IA con Claude Code y servidores MCP propios.',
      'Apricot — editor de modelado SysML v2 con asistente de IA (cliente ESA).',
      'Structura — diseñador visual de modelos de dominio con generación de código multi-stack Angular/.NET.',
    ],
  },
  {
    period: '09/2021 — 09/2022',
    company: 'Chain & Chain Tech Ltd',
    role: 'Frontend Developer',
    location: 'Londres, Reino Unido',
    highlights: ['Desarrollo frontend con lazy loading y gestión de estado reactiva con RxJS.'],
  },
  {
    period: '01/2022 — 03/2023',
    company: 'iSmash',
    role: 'Técnico Avanzado',
    location: 'Londres, Reino Unido',
    highlights: ['Soporte técnico avanzado en paralelo al desarrollo frontend.'],
  },
];

export interface EducationEntry {
  period: string;
  title: string;
  institution: string;
}

export const EDUCATION: EducationEntry[] = [
  {
    period: '2025 — 2027',
    title: 'Desarrollo de Aplicaciones Web (DAW)',
    institution: 'IES Kursaal',
  },
  {
    period: '11/2024 — presente',
    title: 'Certificado Angular Pro',
    institution: 'DevTalles',
  },
];
