# Starter Kit — base reutilizable para un proyecto nuevo

Este paquete contiene **solo lo reutilizable** del proyecto base (marca-agnóstico
y sin estructura de páginas de ningún cliente). Reusas **el motor**; generas la
**carrocería** (secciones, layout, componentes y copy) desde el cliente nuevo.

> Regla de oro: aquí NO hay componentes ni estructura de páginas de otro cliente.
> La estructura de tu sitio nuevo sale de **su** manual/brief, no de esta base.

## Qué incluye

```
starter-kit/
├── README.md                     ← este archivo
├── process/                      ← CÓMO trabajamos (proceso + agentes)
│   ├── AGENTS.md                 ← reglas maestras del flujo
│   ├── START-HERE.md             ← arranque de proyecto (léelo primero)
│   ├── agents/                   ← roles: director, builder, validator, ingestor
│   └── docs/                     ← onboarding, workflow, pipeline, quality,
│                                   change-protocol, human-review, naming,
│                                   versioning, readiness, preview, ci,
│                                   platforms/, modules/ (taxonomía)
├── design-system/                ← EL MOTOR de estilo (reskin por marca)
│   ├── tokens.css                ← arquitectura de tokens (valores → reemplazar)
│   └── base.css                  ← reset + contenedor + botones + .reveal
├── utilities/
│   └── ui.js                     ← menú móvil + scroll-reveal (neutral)
├── adapters/                     ← guías de deploy (astro / hubspot / wordpress)
└── templates/
    ├── page-spec-template.md     ← plantilla de spec por página
    └── component-template.md     ← plantilla para documentar un componente
```

## Qué NO incluye (a propósito)
- Componentes ni CSS de páginas de Anáhuac (traen su ADN visual y su estructura).
- Los docs de design system ya poblados (tokens/foundations/patterns/page-recipe):
  **se regeneran** por cliente.
- Imágenes, copy y módulos de contenido de cualquier cliente.

## Cómo arrancar un cliente nuevo (SIN Figma, solo manual de identidad)

El flujo original es "Figma-first"; aquí lo sustituimos por **manual + brief**:

1. **Design system desde el manual de identidad**
   - Extrae del manual: paleta, tipografías, uso de logo, radios, iconografía.
   - Vuélcalos en `design-system/tokens.css`: primero como **primitivos**, luego
     mapeados a **semánticos**. Los componentes solo usan semánticos.
   - `base.css` y `ui.js` funcionan tal cual una vez que los tokens son correctos.

2. **Estructura desde un brief (no se copia de nadie)**
   - Define objetivo, público y oferta (usa las plantillas AIDA / Hormozi).
   - Con el rol `director` (ver `process/agents/`) produce un **spec por página**
     a partir de `templates/page-spec-template.md`. Ahí decides secciones y orden.

3. **Construcción**
   - El rol `builder` arma el HTML/CSS de cada sección sobre el motor
     (`tokens.css` + `base.css` + `ui.js`), documentando cada componente nuevo
     con `templates/component-template.md`.

4. **Revisión y deploy**
   - `validator` + revisión humana (`process/docs/human-review.md`).
   - Publica con la guía de tu plataforma en `adapters/`.

## Uso mínimo del motor en una página
```html
<link rel="stylesheet" href="design-system/tokens.css" />
<link rel="stylesheet" href="design-system/base.css" />
<!-- aquí tus componentes propios -->
<script src="utilities/ui.js" defer></script>
```
Marca los elementos que deben aparecer al hacer scroll con `class="reveal" data-reveal`.

---
Base derivada del proyecto Anáhuac (2026). Reutilizable; sin contenido de cliente.
