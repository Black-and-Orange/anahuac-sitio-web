# Validación: Foráneos

- Fecha: 2026-08-21
- Alcance: incorporación de la cascada `support-advisor` en el módulo 12 de
  `foraneos.html` y endurecimiento del alcance de su JavaScript compartido.
- Referencia: captura e instrucción de revisión humana del 2026-08-21.
- Resultado: sin hallazgos bloqueantes para revisión local.
- Publicación: no evaluada ni ejecutada en esta etapa.
- HubSpot: no modificado.

## Revalidación: ajustes editoriales del 2026-08-27

- Alcance: calculadora de costo de vida y módulo de hospedaje.
- Referencia: cinco capturas e instrucciones de revisión humana del 2026-08-27.
- Resultado del cambio: sin hallazgos bloqueantes nuevos; apto para revisión
  humana local. No se ejecutó publicación ni se modificó HubSpot.

| Área | Resultado |
|---|---|
| Disclaimer | Copy literal presente como último elemento de la calculadora |
| Rótulo | «Estimado de inversión» aparece inmediatamente antes de las tarjetas |
| Desglose | Salud ausente; cuatro rubros por campus |
| Totales | Norte `$14,300 – $26,500`; Sur `$12,500 – $23,500`, verificados contra la suma visible |
| Hospedaje | Inés: «Coordinadora de Alumnos Foráneos»; Carlos conserva su puesto |
| Roomies | `#TIPSANÁHUAC` precede a «Antes de firmar con roomies», 40 px en escritorio y 24 px en móvil mediante tokens |
| Responsive | Sin overflow horizontal en 1440, 900, 540, 390 y 320 px |
| Accesibilidad del contenido nuevo | Axe WCAG 2 A/AA y 2.1 A/AA: 0 violaciones |
| Recursos | Único 404: `/favicon.ico`, heredado y no bloqueante |

## Revalidación: mapa de servicios del 2026-08-27

- Alcance: áreas generales, clasificación de las fichas y propuesta de modal
  para `Ver ubicación`.
- Referencia: captura e instrucción de revisión humana del 2026-08-27.
- Publicación: no evaluada ni ejecutada; HubSpot no fue modificado.

| Área | Resultado |
|---|---|
| Filtros | Verificados: Todas + Salud, Entretenimiento, Servicios, Religión y Cultura; píldoras en escritorio y select sincronizado en móvil |
| Clasificación | Los cinco filtros devuelven resultados en ambos campus; Cultura muestra 1 ficha en Norte y 3 en Sur sin perder su clasificación primaria |
| CTA | Las 32 fichas reciben exactamente `Ver ubicación` cuando JS está disponible |
| Modal | Contenido sincronizado con la ficha; Google Maps y enlace externo construidos desde la zona; cierre por botón, backdrop y Escape; trampa y retorno de foco; bloqueo de scroll activo solo al abrir |
| Responsive | Sin overflow horizontal en 1440, 900, 540, 390 y 320 px; pestañas de campus en una fila y modal dentro del viewport |
| Accesibilidad | Axe WCAG 2 A/AA y 2.1 A/AA: 0 violaciones en el módulo y en la modal abierta |
| Ejecución | 0 errores JavaScript o fallos de red atribuibles al módulo |

## Revalidación: Salud, #TIPSANÁHUAC y admisión del 2026-08-27

- Alcance: orden y contenido del módulo de Salud, nueva tarjeta con imagen,
  traslado de la guía a #TIPSANÁHUAC, mensaje de admisión y primera respuesta
  del FAQ.
- Referencia: seis capturas e instrucciones de revisión humana del 2026-08-27.
- Publicación: no evaluada ni ejecutada; HubSpot no fue modificado.

| Área | Resultado |
|---|---|
| Salud | Cuatro títulos y copys verificados; párrafo ubicado después de la retícula y guía anterior retirada |
| Imagen | Asset institucional local cargado, con dimensiones válidas y texto alternativo descriptivo |
| #TIPSANÁHUAC | «¿Te enfermaste?» dentro del contenedor, cuatro opciones y ninguna instrucción obsoleta de activar el seguro |
| Admisión | Copy literal sobre proceso completamente en línea presente en el módulo |
| FAQ | Copy literal presente; «es totalmente en línea» resaltado en naranja, con el mismo tamaño que la respuesta, y JSON-LD sincronizado |
| Responsive | Sin overflow horizontal en 1440, 900, 540, 390 y 320 px; retícula 2×2 en escritorio y una columna desde 900 px |
| Accesibilidad nueva | Salud sin violaciones de Axe; los seis contrastes previos de roomies se corrigieron localmente |
| Revisión humana de FAQ | El énfasis naranja conserva el tamaño del cuerpo solicitado; Axe reporta un contraste por debajo de AA para texto normal con el color institucional |
| Contraste heredado | El panel migratorio conserva 9 nodos preexistentes asociados a `--color-text-secondary` y enlaces naranjas; el nuevo párrafo general de admisión no agrega violaciones |
| Ejecución | 0 errores JavaScript o fallos de recursos atribuibles a estos cambios |

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

### Advertencia heredada: contraste en los módulos revisados

- Ubicación: textos secundarios y acentos preexistentes de las tarjetas de
  costos, la banda de asesoría, las fichas de contacto y las tarjetas de
  roomies.
- Estado: Axe reporta 23 nodos bajo una única regla `color-contrast`. El nuevo
  rótulo, el hashtag y el disclaimer tienen 0 violaciones; los 23 casos ya
  pertenecían al tratamiento visual anterior.
- Corrección sugerida: revisar el token `--color-text-secondary` y los usos de
  naranja sobre blanco/gris como una tarea visual transversal antes de declarar
  los módulos completos conformes con WCAG AA.

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
