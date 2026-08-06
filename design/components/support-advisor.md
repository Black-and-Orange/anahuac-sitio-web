# Componente: Support advisor

## Propósito
Resolver el país de procedencia, el estado o país específico y mostrar el asesor correspondiente. Para Ciudad de México y Estado de México, permite identificar además la preparatoria.

## Anatomía
Tagline → H2 → descripción → selector México/Extranjero → selector estado/país → selector condicional de preparatoria → tarjeta de asesor con imagen y canales de contacto.

## Contrato de datos

### Editable temporal
| Field | Tipo | Requerido | Default | Notas |
|---|---|---|---|---|
| `origins` | choice collection | sí | `Extranjero`, `México` | Primer nivel; no mezcla estados con tipos de procedencia. |
| `countries` | choice collection | sí | datos locales | Segundo nivel cuando `origin = Extranjero`. |
| `states` | choice collection | sí | 32 entidades | Segundo nivel cuando `origin = México`. |
| `schoolsByState` | keyed collection | no | CDMX y Estado de México | Tercer nivel; oculto en la carga inicial y cuando el estado no tiene catálogo. |
| `advisor.name` | text | sí | — | Nombre visible. |
| `advisor.image` | image | sí | placeholder genérico | Imagen y alt. Local: se usa un placeholder genérico aprobado (`asesor-anahuac-hombre.webp` / `asesor-anahuac-mujer.webp`) según el género del asesor, hasta que existan fotos individuales. |
| `advisor.whatsapp` | link | no | — | URL completa. |
| `advisor.appointment` | link | no | — | URL completa. |
| `advisor.email` | text | no | — | Correo del asesor o cuenta general. |

### Reglas de comportamiento
- El primer selector contiene exclusivamente `Extranjero` y `México`.
- `Extranjero` carga países en el segundo selector; `México` carga las 32 entidades federativas.
- El tercer selector aparece únicamente para `Ciudad de México` y `Estado de México`.
- El estado inicial es el primero del catálogo (`Aguascalientes`); no se precarga ninguna entidad destacada.
- En la carga inicial el tercer selector está oculto y solo se revela tras una selección explícita de la persona.
- Cambiar país o estado actualiza la tarjeta del asesor y restablece el tercer selector.
- Mientras no exista un mapeo institucional completo, cada catálogo de preparatorias conserva `Otra preparatoria`.

### Fuente futura
HubDB sustituirá las colecciones locales sin cambiar el markup ni el contrato de render. La capa de vista solo consume registros normalizados. La tabla futura debe definir explícitamente la relación `estado → preparatoria` y, si aplica, `preparatoria → asesor`.

### Bloqueado por diseño
Layout, estilos de selectores, tarjeta, iconos, colores y comportamiento responsive.

## Tokens que usa
`--color-brand-primary`, `--surface`, `--color-text`, `--color-text-invert`, `--radius`.

## Binding por plataforma
- Local: cascada implementada con datos estáticos y catálogos parciales verificados contra el formulario público de Atención Preuniversitaria.
- HubSpot: pendiente de definir tabla HubDB y columnas; no implementar asignación adicional por preparatoria antes de esa definición.
