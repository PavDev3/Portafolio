import { LocalizedText } from '../i18n/i18n.types';

export interface SkillGroup {
  category: LocalizedText;
  items: LocalizedText[];
}

const sameBoth = (value: string): LocalizedText => ({ es: value, en: value });

export const SKILLS: SkillGroup[] = [
  {
    category: sameBoth('frontend'),
    items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'].map(sameBoth),
  },
  { category: sameBoth('backend'), items: ['NodeJS', '.NET'].map(sameBoth) },
  { category: sameBoth('testing'), items: ['Karma', 'Jasmine', 'Playwright'].map(sameBoth) },
  {
    category: { es: 'herramientas', en: 'tools' },
    items: ['Git', 'Docker', 'Claude Code', 'MCP'].map(sameBoth),
  },
  {
    category: { es: 'idiomas', en: 'languages' },
    items: [
      { es: 'Español (nativo)', en: 'Spanish (native)' },
      { es: 'Inglés (B2)', en: 'English (B2)' },
    ],
  },
];
