# Componente: Support hero

## Propósito
Presentar la propuesta principal de la página de apoyos económicos, una imagen y hasta dos llamadas a la acción.

## Anatomía
Tagline → H1 → imagen → panel destacado → grupo de CTAs.

## Contrato de fields

### Editable
| Field | Tipo | Requerido | Default | Notas |
|---|---|---|---|---|
| `tagline` | text | sí | Apoyos Económicos | Texto de contexto; no es heading. |
| `title` | text | sí | — | Se renderiza como el único H1 de la página. |
| `image` | image | sí | — | Incluye texto alternativo. |
| `featured_text` | richtext | sí | — | Contenido del panel morado. |
| `panel_background` | color | sí | `--cta-bg-purple` | Se aplica como variable CSS del módulo. |
| `text_color` | color | sí | `--color-text-invert` | Texto del panel. |
| `primary_cta` | link | no | — | Texto + URL. |
| `show_primary_cta` | boolean | sí | true | No renderiza el enlace cuando está desactivado. |
| `primary_cta_color` | color | sí | `--cta-bg-dark` | Fondo del botón principal. |
| `secondary_cta` | link | no | — | Texto + URL. |
| `show_secondary_cta` | boolean | sí | true | No renderiza el enlace cuando está desactivado. |
| `secondary_cta_color` | color | sí | `--surface` | Fondo del botón secundario. |

### Bloqueado por diseño
Estructura, orden, tipografía, espaciado, radios, proporción de imagen y comportamiento responsive.

## Tokens que usa
`--cta-bg-purple`, `--color-text-invert`, `--cta-bg-dark`, `--surface`, `--color-text`, `--radius`.

## Semántica
Un H1 único. El tagline es texto descriptivo y su flecha es decorativa.

## Binding por plataforma
- HubSpot: pendiente, no crear hasta iniciar la etapa de migración.
