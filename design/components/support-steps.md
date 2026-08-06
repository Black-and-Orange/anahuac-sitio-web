# Componente: Support steps

## Propósito
Explicar el proceso de solicitud mediante una secuencia configurable de pasos.

## Anatomía
Tagline → H2 → descripción → disclaimer opcional → navegación móvil → pasos → CTA.

## Contrato de fields

### Editable
| Field | Tipo | Requerido | Default | Notas |
|---|---|---|---|---|
| `disclaimer_visible` | boolean | sí | true | Oculta por completo el aviso. |
| `disclaimer_content` | richtext | no | texto aprobado | Aviso sobre concursos académicos. |
| `steps` | repeater | sí | 5 elementos | Agregar o quitar pasos regenera la navegación. |
| `steps.image` | image | sí | — | Incluye alt editable. |
| `steps.title` | text | sí | — | Se renderiza como H3. |
| `steps.content` | richtext | sí | — | Texto del paso. |
| `cta` | link | no | — | Texto y URL editables. |

### Bloqueado por diseño
Numeración secuencial, layout desktop, slider de una tarjeta en móvil, colores, radios y motion.

## Tokens que usa
`--surface`, `--surface-accent-light`, `--color-brand-primary`, `--cta-bg-purple`, `--color-text`, `--color-text-invert`.

## Estados
En móvil existe un paso activo; el botón correspondiente usa `aria-current="step"`.

## Binding por plataforma
- HubSpot: pendiente, no crear hasta iniciar la etapa de migración.
