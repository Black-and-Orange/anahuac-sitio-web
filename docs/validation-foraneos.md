# Validación: Foráneos

- Fecha: 2026-08-21
- Alcance: incorporación de la cascada `support-advisor` en el módulo 12 de
  `foraneos.html` y endurecimiento del alcance de su JavaScript compartido.
- Referencia: captura e instrucción de revisión humana del 2026-08-21.
- Resultado: sin hallazgos bloqueantes para revisión local.
- Publicación: no evaluada ni ejecutada en esta etapa.
- HubSpot: no modificado.

## Verificaciones

| Área | Resultado |
|---|---|
| Readiness y tokens | `check:readiness` y `check:tokens` aprobados |
| JavaScript | Sintaxis válida y 0 errores de ejecución en Foráneos y Apoyos Económicos |
| Reutilización | Una sola fuente de catálogos y asignaciones en `apoyos-economicos.js`; no se duplicaron datos en `foraneos.js` |
| Estado inicial | `Interior de la república` → `Aguascalientes`; preparatoria oculta y asesor Edwin Florencio Jarquín Santiago |
| Interior | 30 entidades; el cambio de estado actualiza la tarjeta y no revela preparatoria |
| Zona metropolitana | CDMX y Estado de México; ambos revelan su catálogo de preparatorias, incluido `Otra preparatoria` |
| Extranjeros | 22 países; preparatoria oculta, asignación específica cuando existe y fallback para el resto |
| Aislamiento | Los contactos de hospedaje Inés y Carlos conservan género y enlaces al cambiar el asesor del módulo 12 |
| Impacto compartido | Apoyos Económicos se revalidó después de acotar las consultas del componente y conserva la cascada funcional |
| Accesibilidad | Axe WCAG 2 A/AA y 2.1 A/AA: 0 violaciones dentro del módulo con la preparatoria visible |
| Responsive | Sin overflow horizontal en 1440, 900, 540, 390 y 320 px; selectores en fila cuando caben y apilados desde 540 px |
| Promoción | Contrato, spec, memoria y changelog actualizados; `design/inventory.md` ya registraba ambos consumidores |

## Hallazgos no bloqueantes

### Advertencia: lint global preexistente

- Ubicación: `adapters/hubspot/theme/css/main.css:7449`.
- Estado: `npm run validate` continúa fallando por el valor
  `rgba(0, 0, 0, 0.03)` que ya existe en `origin/main`; este cambio no toca el
  adapter ni añade declaraciones CSS.
- Corrección sugerida: resolver la deuda de Stylelint en una tarea separada
  antes de exigir una corrida global limpia.

### Advertencia: datos institucionales parciales

- Ubicación: `support-advisor`, catálogos de CDMX y Estado de México.
- Estado: se conserva el mapeo local previamente aprobado, con
  `Otra preparatoria`; no existe aún la relación institucional completa ni la
  tabla HubDB.
- Corrección requerida: confirmar la fuente oficial antes de migrar el
  componente a HubSpot.

### Nota: recursos y enlaces temporales heredados

- `/favicon.ico` responde 404 sin afectar el módulo.
- `Agenda una cita` y algunos canales de contacto continúan con `href="#"` en
  la maqueta base; no se cambiaron porque faltan las URL definitivas.
- Corrección sugerida: completar los destinos antes de una nueva publicación.

## Revisión humana pendiente

- Confirmar visualmente la cascada en Foráneos.
- Confirmar el mapeo institucional de preparatorias y los enlaces de contacto.
- Autorizar por separado cualquier commit, publicación o migración a HubSpot.
