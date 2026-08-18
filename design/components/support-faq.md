# Componente: Support FAQ

## Propósito
Resolver dudas frecuentes en una lista expandible.

## Anatomía
H2 → descripción → repetidor de preguntas y respuestas.

## Contrato de fields

### Editable
| Field | Tipo | Requerido | Default | Notas |
|---|---|---|---|---|
| `items` | repeater | sí | — | Permite agregar, reordenar o eliminar preguntas. |
| `items.question` | text | sí | — | Texto del `summary`. |
| `items.answer` | richtext | sí | — | Admite enlaces y varios bloques de contenido. |

### Bloqueado por diseño
Comportamiento de acordeón, divisores, iconos +/−, tipografía y espaciado.

## Tokens que usa
`--surface`, `--color-text`, `--color-text-secondary`, `--color-brand-primary`.

## Semántica
Cada pregunta usa `details/summary`; la respuesta vive en un contenedor rich text.

## Binding por plataforma
- HubSpot: pendiente, no crear hasta iniciar la etapa de migración.
