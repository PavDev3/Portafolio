import { Lang } from './i18n.types';

export interface Translations {
  skipLink: string;
  nav: {
    ariaLabel: string;
  };
  langToggle: {
    groupAriaLabel: string;
    switchToEs: string;
    switchToEn: string;
  };
  hero: {
    statusSuffix: string;
    roleLabel: string;
    roleText: string;
  };
  about: {
    intro: string;
  };
  experience: {
    activeBadge: string;
  };
  contact: {
    linksAriaLabel: string;
  };
}

export const TRANSLATIONS: Record<Lang, Translations> = {
  es: {
    skipLink: 'Saltar al contenido',
    nav: {
      ariaLabel: 'Navegación principal',
    },
    langToggle: {
      groupAriaLabel: 'Selector de idioma',
      switchToEs: 'Cambiar a español',
      switchToEn: 'Cambiar a inglés',
    },
    hero: {
      statusSuffix: 'ingeniero frontend / angular',
      roleLabel: 'rol:',
      roleText:
        'Desarrollador Angular en Metadev — diseño sistemas, no solo interfaces.',
    },
    about: {
      intro: `Desde 06/2025 trabajo como Desarrollador Angular en <b>Metadev</b>, donde colaboro en
        <b>Apricot</b>, un editor de modelado SysML v2 con asistente de IA para la ESA, y
        <b>Structura</b>, un diseñador visual de modelos de dominio con generación de código
        multi-stack Angular/.NET. Angular 22 + signals, testing E2E con Playwright, servidores MCP
        propios y un flujo de trabajo asistido por Claude Code.`,
    },
    experience: {
      activeBadge: 'activo',
    },
    contact: {
      linksAriaLabel: 'Enlaces de contacto',
    },
  },
  en: {
    skipLink: 'Skip to content',
    nav: {
      ariaLabel: 'Main navigation',
    },
    langToggle: {
      groupAriaLabel: 'Language selector',
      switchToEs: 'Switch to Spanish',
      switchToEn: 'Switch to English',
    },
    hero: {
      statusSuffix: 'frontend engineer / angular',
      roleLabel: 'role:',
      roleText: 'Angular Developer at Metadev — I design systems, not just interfaces.',
    },
    about: {
      intro: `Since 06/2025 I've been working as an Angular Developer at <b>Metadev</b>, where I
        collaborate on <b>Apricot</b>, a SysML v2 modeling editor with an AI assistant for ESA,
        and <b>Structura</b>, a visual domain-model designer with multi-stack Angular/.NET code
        generation. Angular 22 + signals, E2E testing with Playwright, custom MCP servers, and an
        AI-assisted workflow with Claude Code.`,
    },
    experience: {
      activeBadge: 'active',
    },
    contact: {
      linksAriaLabel: 'Contact links',
    },
  },
};
