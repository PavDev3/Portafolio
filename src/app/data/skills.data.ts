export interface SkillGroup {
  category: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  { category: 'frontend', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'backend', items: ['NodeJS', '.NET'] },
  { category: 'testing', items: ['Karma', 'Jasmine', 'Playwright'] },
  { category: 'herramientas', items: ['Git', 'Docker', 'Claude Code', 'MCP'] },
  { category: 'idiomas', items: ['Español (nativo)', 'Inglés (B2)'] },
];
