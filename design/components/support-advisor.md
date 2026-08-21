# Componente: Support advisor

## Propósito
Resolver dónde estudia o estudió la persona su preparatoria, identificar el
estado o país correspondiente y mostrar al asesor asignado. Para Ciudad de
México y Estado de México permite identificar además el plantel.

## Anatomía
Tagline → H2 → descripción → selector de zona (`Interior de la república`,
`Estado de México y CDMX`, `Extranjeros`) → selector estado/país → selector
condicional de preparatoria → tarjeta de asesor con imagen y canales de contacto.

## Contrato de datos

### Editable temporal
| Field | Tipo | Requerido | Default | Notas |
|---|---|---|---|---|
| `origins` | choice collection | sí | `Interior de la república`, `Estado de México y CDMX`, `Extranjeros` | Primer nivel; el orden forma parte del contrato. |
| `countries` | choice collection | sí | 22 países | Segundo nivel cuando `origin = Extranjeros`. |
| `states` | choice collection | sí | 30 entidades del interior + CDMX y Estado de México | Segundo nivel; la zona metropolitana se presenta separada porque habilita el tercer selector. |
| `schoolsByState` | keyed collection | no | CDMX y Estado de México | Tercer nivel; oculto en la carga inicial y cuando el estado no tiene catálogo. |
| `advisor.name` | text | sí | — | Nombre visible. |
| `advisor.image` | image | sí | placeholder genérico | Imagen y alt. Local: se usa un placeholder genérico aprobado (`asesor-anahuac-hombre.webp` / `asesor-anahuac-mujer.webp`) según el género del asesor, hasta que existan fotos individuales. |
| `advisor.whatsapp` | link | no | — | URL completa. |
| `advisor.appointment` | link | no | — | URL completa. |
| `advisor.email` | text | no | — | Correo del asesor o cuenta general. |

### Reglas de comportamiento
- El primer selector contiene, en este orden, `Interior de la república`,
  `Estado de México y CDMX` y `Extranjeros`.
- `Interior de la república` carga las 30 entidades distintas de CDMX y Estado
  de México; `Estado de México y CDMX` carga solo esas dos entidades;
  `Extranjeros` carga los 22 países disponibles.
- El tercer selector aparece únicamente dentro de `Estado de México y CDMX`,
  después de elegir `Ciudad de México` o `Estado de México`.
- El estado inicial es `Interior de la república` → `Aguascalientes`.
- En la carga inicial el tercer selector está oculto; también permanece oculto
  para las regiones Interior y Extranjeros.
- Cambiar país o estado actualiza la tarjeta del asesor y restablece el tercer selector.
- Mientras no exista un mapeo institucional completo, cada catálogo de preparatorias conserva `Otra preparatoria`.
- Apoyos Económicos y Foráneos reutilizan la misma fuente y el mismo
  comportamiento. Cada instancia limita sus consultas a su propia sección para
  no modificar otras tarjetas de contacto presentes en la página.

### Fuente futura
HubDB sustituirá las colecciones locales sin cambiar el markup ni el contrato de render. La capa de vista solo consume registros normalizados. La tabla futura debe definir explícitamente la relación `estado → preparatoria` y, si aplica, `preparatoria → asesor`.

### Bloqueado por diseño
Layout, estilos de selectores, tarjeta, iconos, colores y comportamiento responsive.

## Tokens que usa
`--color-brand-primary`, `--surface`, `--color-text`, `--color-text-invert`, `--radius`.

## Binding por plataforma
- Local: cascada compartida por `apoyos-economicos.html` y `foraneos.html`,
  implementada con datos estáticos y catálogos parciales verificados contra el
  formulario público de Atención Preuniversitaria.
- HubSpot: pendiente de definir tabla HubDB y columnas; no implementar asignación adicional por preparatoria antes de esa definición.
