# Taxonomía de módulos HubSpot

## Categorías

| Categoría HubSpot | Nombre (Taxonomía) | Regla de nombre | Descripción |
|---|---|---|---|
| `DESIGN` | Global | Header, Footer | Módulos globales de diseño que incluyen encabezado y pie de página |
| `DESIGN` | Header | Navegación y encabezado | Módulos del encabezado global |
| `DESIGN` | Footer | Pie de página | Módulos del pie de página global |
| — | Navigation | Navegación | Módulos de navegación y menús |
| `BODY_CONTENT` | Hero | Héroes visuales | Secciones de impacto visual (hero banners) |
| `BODY_CONTENT` | Content | Contenido | Secciones de contenido general |
| `BODY_CONTENT` | Cards | Tarjetas | Componentes de tarjetas e items |
| `FORMS_AND_BUTTONS` | CTA | Llamadas a la acción | Botones y CTAs |
| `FORMS_AND_BUTTONS` | Forms | Formularios | Componentes de entrada de datos |
| `BODY_CONTENT` | FAQ | Preguntas frecuentes | Secciones FAQ y acordeones |
| `BODY_CONTENT` | Media | Multimedia | Componentes de contenido multimedia |
| — | Data | Datos | Componentes que consumen HubDB |
| — | Utility | Utilidad | Módulos auxiliares |

## Tiers de reutilización

### Global Module
Un cambio afecta múltiples páginas.

### Reusable Module
Se usa en varias páginas, pero cada página mantiene su propia configuración/contenido.

### Page-specific Module
Creado para una página; no se reutiliza salvo que después se decida lo contrario (entonces se promueve a reusable/global).

## Nota sobre evidencia técnica y clasificación del equipo

- `meta.global` (HubSpot) = evidencia técnica de si el módulo está configurado como global en el portal.
- `registry.tier` (registry.json) = clasificación del equipo sobre la reutilización arquitectónica.

**Criterio:** La clasificación del equipo (registry.json) prevalece. Cuando `meta.global` y `registry.tier` discrepan, el catálogo usa el tier del equipo y la discrepancia se **reporta** (no se autocorrige) para revisión manual.
