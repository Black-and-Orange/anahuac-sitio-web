# Componente: Financing options

## Propósito
Comparar opciones de financiamiento y presentar los documentos generales.

## Anatomía
Introducción → tarjetas de financiamiento → acordeón de documentos y requisitos.

## Contrato de fields

### Editable
| Field | Tipo | Requerido | Default | Notas |
|---|---|---|---|---|
| `cards` | repeater | sí | — | La tarjeta institucional Anáhuac es la primera por default. |
| `cards.image` | image | sí | — | Logo o imagen con alt editable. |
| `cards.title` | text | sí | — | Se renderiza como H3. |
| `cards.content` | richtext | sí | — | Admite subtítulos, párrafos y listas. |
| `cards.combinable_visible` | boolean | sí | true | Controla el distintivo. |
| `cards.cta` | link | no | — | Texto y URL editables. |
| `cards.cta_visible` | boolean | sí | true | Controla el botón Más información. |
| `documents_visible` | boolean | sí | true | Oculta toda la sección de documentos. |
| `documents_title` | text | sí | Documentos y requisitos generales | Título del acordeón. |
| `documents_content` | richtext | no | — | Puede usar o prescindir de listas con bullets. |

### Bloqueado por diseño
Tres columnas en escritorio, apilado responsive, fondo, radios y estilos de CTA.

## Tokens que usa
`--surface-accent`, `--surface`, `--color-text`, `--color-text-invert`, `--color-brand-primary`, `--cta-bg-purple`.

## Semántica
H2 de sección, H3 por tarjeta. El título de `summary` es texto de control, no un heading anidado.

## Binding por plataforma
- HubSpot: pendiente, no crear hasta iniciar la etapa de migración.
