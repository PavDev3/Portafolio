# Portafolio — Pablo Núñez Fernández

Portfolio personal construido con Angular (standalone components, signals), con una
identidad visual retro terminal / CRT: bisel de monitor, scanlines, secuencia de
arranque tipo terminal y tarjetas de proyectos estilo `ls ~/projects`.

Sitio 100% estático: no hay backend ni base de datos, todo el contenido vive en
`src/app/data/*.data.ts`.

## Requisitos

- Node.js ^22.22.3, ^24.15.0 o superior (requerido por Angular CLI 22).
- npm.

## Desarrollo

```bash
npm install
npm start      # equivalente a: ng serve
```

La app queda disponible en `http://localhost:4200/`.

## Build de producción

```bash
npm run build   # equivalente a: ng build
```

El resultado se genera en `dist/portfolio/`.

## Tests

```bash
npm test
```

## Estructura

```
src/app/
  app.ts|html|css          Shell: bisel CRT, scanlines, barra de título y navegación
  components/
    hero/                  Secuencia de arranque + nombre + rol
    about/                 Sobre mí + formación
    skills/                Stack técnico agrupado por categoría
    projects/               Proyectos destacados (ls ~/projects --favorites)
    experience/             Timeline de experiencia (cat ~/.history)
    contact/                Enlaces de contacto
  data/
    projects.data.ts
    experience.data.ts
    skills.data.ts
```

## Notas de accesibilidad

- Respeta `prefers-reduced-motion`: desactiva animaciones y muestra el contenido
  de inmediato.
- Contraste verde fósforo / ámbar sobre fondo casi negro pensado para legibilidad.
- Navegación por teclado con estados `:focus-visible` visibles.
