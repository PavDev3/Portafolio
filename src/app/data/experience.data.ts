import { LocalizedText } from '../i18n/i18n.types';

export interface ExperienceEntry {
  period: string;
  company: string;
  role: LocalizedText;
  location: LocalizedText;
  highlights: LocalizedText[];
  current?: boolean;
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    period: '06/2025 — presente',
    company: 'Metadev',
    role: { es: 'Desarrollador Angular', en: 'Angular Developer' },
    location: { es: 'San Roque, España', en: 'San Roque, Spain' },
    current: true,
    highlights: [
      {
        es: 'Angular 22 + signals, testing E2E con Playwright.',
        en: 'Angular 22 + signals, E2E testing with Playwright.',
      },
      {
        es: 'Flujo de desarrollo asistido por IA con Claude Code y servidores MCP propios.',
        en: 'AI-assisted development workflow with Claude Code and custom MCP servers.',
      },
      {
        es: 'Apricot — editor de modelado SysML v2 con asistente de IA (cliente ESA).',
        en: 'Apricot — SysML v2 modeling editor with an AI assistant (ESA client).',
      },
      {
        es: 'Structura — diseñador visual de modelos de dominio con generación de código multi-stack Angular/.NET.',
        en: 'Structura — visual domain-model designer with multi-stack Angular/.NET code generation.',
      },
    ],
  },
  {
    period: '09/2021 — 09/2022',
    company: 'Chain & Chain Tech Ltd',
    role: { es: 'Frontend Developer', en: 'Frontend Developer' },
    location: { es: 'Londres, Reino Unido', en: 'London, United Kingdom' },
    highlights: [
      {
        es: 'Desarrollo frontend con lazy loading y gestión de estado reactiva con RxJS.',
        en: 'Frontend development with lazy loading and reactive state management using RxJS.',
      },
    ],
  },
  {
    period: '01/2022 — 03/2023',
    company: 'iSmash',
    role: { es: 'Técnico Avanzado', en: 'Advanced Technician' },
    location: { es: 'Londres, Reino Unido', en: 'London, United Kingdom' },
    highlights: [
      {
        es: 'Soporte técnico avanzado en paralelo al desarrollo frontend.',
        en: 'Advanced technical support alongside frontend development.',
      },
    ],
  },
];

export interface EducationEntry {
  period: string;
  title: LocalizedText;
  institution: string;
}

export const EDUCATION: EducationEntry[] = [
  {
    period: '2025 — 2027',
    title: { es: 'Desarrollo de Aplicaciones Web (DAW)', en: 'Web Application Development (DAW)' },
    institution: 'IES Kursaal',
  },
  {
    period: '11/2024 — presente',
    title: { es: 'Certificado Angular Pro', en: 'Angular Pro Certificate' },
    institution: 'DevTalles',
  },
];
