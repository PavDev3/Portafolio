import { LocalizedText } from '../i18n/i18n.types';

export interface Project {
  name: string;
  dir: string;
  tag: LocalizedText;
  description: LocalizedText;
  stack: LocalizedText[];
  url: string;
}

const sameBoth = (value: string): LocalizedText => ({ es: value, en: value });

export const PROJECTS: Project[] = [
  {
    name: 'PokeJev',
    dir: 'pokejev/',
    tag: { es: 'ia · python', en: 'ai · python' },
    description: {
      es: 'Bot que juega Pokémon de forma autónoma: Jev como motor de decisión y visión clásica para leer el estado del juego en tiempo real.',
      en: 'Bot that plays Pokémon autonomously: Jev as the decision engine and classic computer vision to read the game state in real time.',
    },
    stack: [sameBoth('Python'), { es: 'IA', en: 'AI' }, { es: 'Visión', en: 'Vision' }],
    url: 'https://github.com/PavDev3/PokeJev',
  },
  {
    name: 'cyd-launcher',
    dir: 'cyd-launcher/',
    tag: sameBoth('hardware · c++'),
    description: {
      es: 'Launcher multi-boot retro en pixel-art para ESP32 CYD, con doble partición OTA y la SD como biblioteca de firmwares.',
      en: 'Retro pixel-art multi-boot launcher for the ESP32 CYD, with dual OTA partitions and the SD card as a firmware library.',
    },
    stack: ['C++', 'ESP32', 'OTA'].map(sameBoth),
    url: 'https://github.com/PavDev3/cyd-launcher',
  },
  {
    name: 'storageQR',
    dir: 'storageqr/',
    tag: { es: 'organización · ts', en: 'organization · ts' },
    description: {
      es: 'Gestor de almacenamiento físico: cajas etiquetadas con códigos QR para localizar cualquier objeto al instante.',
      en: 'Physical storage manager: boxes labeled with QR codes to locate any item instantly.',
    },
    stack: ['TypeScript'].map(sameBoth),
    url: 'https://github.com/PavDev3/storageQR',
  },
  {
    name: 'F1Undercut',
    dir: 'f1undercut/',
    tag: sameBoth('motorsport · ts'),
    description: {
      es: 'Herramienta de análisis de estrategia de Fórmula 1 centrada en el cálculo de ventanas de undercut.',
      en: 'Formula 1 strategy analysis tool focused on calculating undercut windows.',
    },
    stack: ['TypeScript'].map(sameBoth),
    url: 'https://github.com/PavDev3/F1Undercut',
  },
  {
    name: 'PokemonAnilGen',
    dir: 'pokemonanilgen/',
    tag: sameBoth('rom hack · python'),
    description: {
      es: 'Modificador de partidas guardadas para un ROM hack de Pokémon: edición directa de estructuras de save.',
      en: 'Save-file editor for a Pokémon ROM hack: direct editing of save data structures.',
    },
    stack: ['Python'].map(sameBoth),
    url: 'https://github.com/PavDev3/PokemonAnilGen',
  },
  {
    name: 'SignalsNx',
    dir: 'signalsnx/',
    tag: sameBoth('angular · signals'),
    description: {
      es: 'Monorepo Nx de práctica para dominar Angular moderno: signals, standalone components y arquitectura zoneless.',
      en: 'Nx monorepo for practicing modern Angular: signals, standalone components, and zoneless architecture.',
    },
    stack: ['Angular', 'Signals', 'Nx'].map(sameBoth),
    url: 'https://github.com/PavDev3/SignalsNx',
  },
];
