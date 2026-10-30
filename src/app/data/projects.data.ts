export interface Project {
  name: string;
  dir: string;
  tag: string;
  description: string;
  stack: string[];
  url: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'PokeJev',
    dir: 'pokejev/',
    tag: 'ia · python',
    description:
      'Bot que juega Pokémon de forma autónoma: Jev como motor de decisión y visión clásica para leer el estado del juego en tiempo real.',
    stack: ['Python', 'IA', 'Visión'],
    url: 'https://github.com/PavDev3/PokeJev',
  },
  {
    name: 'cyd-launcher',
    dir: 'cyd-launcher/',
    tag: 'hardware · c++',
    description:
      'Launcher multi-boot retro en pixel-art para ESP32 CYD, con doble partición OTA y la SD como biblioteca de firmwares.',
    stack: ['C++', 'ESP32', 'OTA'],
    url: 'https://github.com/PavDev3/cyd-launcher',
  },
  {
    name: 'storageQR',
    dir: 'storageqr/',
    tag: 'organización · ts',
    description:
      'Gestor de almacenamiento físico: cajas etiquetadas con códigos QR para localizar cualquier objeto al instante.',
    stack: ['TypeScript'],
    url: 'https://github.com/PavDev3/storageQR',
  },
  {
    name: 'F1Undercut',
    dir: 'f1undercut/',
    tag: 'motorsport · ts',
    description:
      'Herramienta de análisis de estrategia de Fórmula 1 centrada en el cálculo de ventanas de undercut.',
    stack: ['TypeScript'],
    url: 'https://github.com/PavDev3/F1Undercut',
  },
  {
    name: 'PokemonAnilGen',
    dir: 'pokemonanilgen/',
    tag: 'rom hack · python',
    description:
      'Modificador de partidas guardadas para un ROM hack de Pokémon: edición directa de estructuras de save.',
    stack: ['Python'],
    url: 'https://github.com/PavDev3/PokemonAnilGen',
  },
  {
    name: 'SignalsNx',
    dir: 'signalsnx/',
    tag: 'angular · signals',
    description:
      'Monorepo Nx de práctica para dominar Angular moderno: signals, standalone components y arquitectura zoneless.',
    stack: ['Angular', 'Signals', 'Nx'],
    url: 'https://github.com/PavDev3/SignalsNx',
  },
];
