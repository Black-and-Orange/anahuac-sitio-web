# Componente: Support overview

## Propósito
Comparar los tipos de apoyo en un carrusel de tarjetas y enlazar con su ficha detallada.

## Anatomía
Tagline → H2 → descripción → controles anterior/siguiente → carrusel de tarjetas.

## Contrato de fields

### Editable
| Field | Tipo | Requerido | Default | Notas |
|---|---|---|---|---|
| `background_color` | color | sí | `--color-brand-primary` | Fondo completo del módulo. |
| `title` | text | sí | Tipos de apoyo disponibles | Se renderiza como H2. |
| `description` | text | no | — | Texto introductorio. |
| `cards` | repeater | sí | — | Título, porcentaje, perfil, requisito y CTA por tarjeta. |
| `cards.percentage_visible` | boolean | sí | true | Oculta solo el porcentaje. |
| `cards.percentage_size` | number | sí | tamaño aprobado | Rango limitado en HubSpot. |
| `cards.profile_visible` | boolean | sí | true | Oculta etiqueta y contenido. |
| `cards.requirement_visible` | boolean | sí | true | Oculta etiqueta y contenido. |
| `cards.cta_text` | text | sí | Ver detalles | La URL apunta a la ficha correspondiente. |

### Bloqueado por diseño
Número de tarjetas visibles por breakpoint, comportamiento circular, espaciado, bordes y tipografías.

## Tokens que usa
`--color-brand-primary`, `--surface`, `--color-text`, `--color-text-secondary`, `--cta-bg-purple`, `--radius`.

## Semántica
H2 para la sección, H3 por tarjeta. Las flechas son botones con nombre accesible y `aria-controls`.

## Binding por plataforma
- HubSpot: pendiente, no crear hasta iniciar la etapa de migración.
