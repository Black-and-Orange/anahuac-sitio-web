# Componente: Support considerations

## Propósito
Resumir hasta seis consideraciones antes de solicitar un apoyo.

## Anatomía
Tagline → H2 → descripción → grid de tarjetas con icono y contenido.

## Contrato de fields

### Editable
| Field | Tipo | Requerido | Default | Notas |
|---|---|---|---|---|
| `items` | repeater | sí | 5 elementos | Mínimo 1, máximo 6. |
| `items.icon` | icon | sí | — | Selector de iconos del design system. |
| `items.icon_color` | color | sí | `--cta-bg-purple` | Color del icono. |
| `items.title` | text | sí | — | Se renderiza como H3. |
| `items.content` | richtext | sí | — | Admite enlaces dentro del texto. |

### Bloqueado por diseño
Grid responsive, tamaño del icono, superficie, borde, radio y espaciado.

## Tokens que usa
`--surface`, `--color-text`, `--color-text-secondary`, `--cta-bg-purple`, `--radius`.

## Binding por plataforma
- HubSpot: pendiente, no crear hasta iniciar la etapa de migración.
