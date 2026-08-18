# Componente: Support detail

## Propósito
Mostrar fichas expandibles con el detalle de cada apoyo.

## Anatomía
Introducción con H2 e imagen → lista de acordeones → descripción → ficha de atributos → CTA.

## Contrato de fields

### Editable
| Field | Tipo | Requerido | Default | Notas |
|---|---|---|---|---|
| `items` | repeater | sí | — | Una ficha por apoyo. |
| `items.title` | text | sí | — | Nombre visible en el `summary`. |
| `items.percentage` | text | no | — | Puede ocultarse con `purple_text_visible`. |
| `items.purple_text_visible` | boolean | sí | true | Controla textos morados de la cabecera. |
| `items.description` | richtext | no | — | Texto introductorio de la ficha. |
| `items.sections` | repeater | no | — | `title`, `content` y `visible` por sección. |
| `items.profile_visible` | boolean | sí | true | Atajo para Perfil ideal. |
| `items.evaluation_visible` | boolean | sí | true | Atajo para Cómo se evalúa. |
| `items.requirement_visible` | boolean | sí | true | Atajo para Requisito. |
| `items.notes_visible` | boolean | sí | true | Atajo para Notas importantes. |
| `items.text_color` | color | sí | `--color-text` | Texto principal de la tarjeta. |
| `items.cta` | link | no | — | Texto y URL editables. |
| `items.cta_visible` | boolean | sí | true | No renderiza el CTA si está desactivado. |
| `items.cta_color` | color | sí | `--cta-bg` | Fondo del CTA. |

### Bloqueado por diseño
Acordeón de una sola ficha, grid interno, imagen responsive, espaciado, radio y tipografía.

## Tokens que usa
`--surface`, `--color-text`, `--color-text-secondary`, `--color-brand-primary`, `--cta-bg-purple`, `--cta-bg`, `--cta-text`.

## Semántica
El control es `summary`; los nombres no añaden niveles de heading dentro del control.

## Binding por plataforma
- HubSpot: pendiente, no crear hasta iniciar la etapa de migración.
