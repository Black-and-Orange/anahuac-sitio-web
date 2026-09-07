# `admision-fechas`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `admision-fechas.module` |
| Label HubSpot | Admisión · Calendario de fechas (HubDB) — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `null` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `acordeon`, `dos-campus`, `estado-vacio`, `hubdb`, `limite-de-registros`, `tabla-de-fechas` |
| Variantes verificadas | — |
| Notas curatoriales | Consume HubDB (calendario de fechas). Es el único módulo con field hubdbtable y no tiene module.css/module.js propios. |
| Páginas conocidas | `Proceso de admisión` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

_Sin candidatos con evidencia semántica suficiente._

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.adm-fechas`, `.section-pad`.
- Elementos: `br:1`, `details:1`, `div:6`, `dynamic:3`, `p:1`, `section:1`, `small:1`, `span:1`, `summary:1`, `table:1`, `tbody:1`, `td:2`, `tr:1`.
- Estructura padre→hijo: `details>div:1`, `details>summary:1`, `div>details:1`, `div>div:4`, `div>dynamic:3`, `div>p:1`, `div>table:1`, `dynamic>span:1`, `section>div:1`, `table>tbody:1`, `tbody>tr:1`, `td>br:1`, `td>small:1`, `tr>td:2`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>div:1`, `section>div>div>div>div:1`, `section>div>div>div>div>details:1`, `section>div>div>div>div>details>div:1`, `section>div>div>div>div>details>div>table:1`, `section>div>div>div>div>details>div>table>tbody:1`, `section>div>div>div>div>details>div>table>tbody>tr:1`, `section>div>div>div>div>details>div>table>tbody>tr>td:2`, `section>div>div>div>div>details>div>table>tbody>tr>td>br:1`, `section>div>div>div>div>details>div>table>tbody>tr>td>small:1`, `section>div>div>div>div>details>summary:1`, `section>div>div>div>div>p:1`, `section>div>div>div>dynamic:1`, `section>div>div>dynamic:2`, `section>div>div>dynamic>span:1`.
- Clases: `.adm-fechas`, `.container`, `.fecha-item`, `.fecha-panel`, `.fecha-table`, `.fechas-accordion`, `.fechas-col`, `.fechas-grid`, `.fechas-vacio`, `.reveal`, `.section-intro`, `.section-pad`, `.tagline`, `.wide`.
- IDs: `#fechas`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `absent`; selectores propios/compartidos relevantes: `.adm-fechas`, `.adm-fechas .section-intro`, `.adm-fechas .section-intro h2`, `.adm-fechas .section-intro p:not(.tagline)`, `.adm-fechas > .container`, `.adm-fechas::after`, `.adm-fechas::before`, `.fecha-item`, `.fecha-item summary`, `.fecha-item summary::-webkit-details-marker`, `.fecha-item summary::after`, `.fecha-item summary:hover`, `.fecha-item[open]`, `.fecha-item[open] summary::after`, `.fecha-panel`, `.fecha-table`, `.fecha-table small`, `.fecha-table td`, `.fecha-table td:first-child`, `.fecha-table td:last-child`, `.fechas-accordion`, `.fechas-col h3`, `.fechas-col--purple .fecha-item summary::after`, `.fechas-col--purple .fecha-item summary:hover`, `.fechas-col--purple .fecha-item[open]`, `.fechas-grid`, `.fechas-vacio`, `.section-intro.wide`.
- module.js: `absent`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: `@media (max-width: 48em)`, `@media (max-width: 68.75em)`, `@media (max-width: 90em)`.
- Assets: —.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: —.

### Discrepancias y pendientes técnicos

_Sin discrepancias técnicas detectadas._
<!-- AUTO:technical:END -->

## Descripción y propósito

`admision-fechas` presenta las próximas convocatorias de examen en dos columnas, una por
campus, como acordeones con tabla de documentos, examen académico, psicométrico y
resultados. A diferencia de la maqueta estática (`proceso-de-admision.html:270`), el módulo
físico actual no guarda fechas en fields: consulta la HubDB elegida en
`grupo_tabla.tabla`.

Hace dos consultas independientes `hubdb_table_rows`, filtradas con `campus__contains`,
la bandera `aparece_en_las_primeras_5_fechas=true`, orden por
`fecha_de_ordenamiento` y límite configurable. Así una fila multiselección puede aparecer
en ambos campus y el límite aplica por columna. Cada `details` comparte `name` solo dentro
de campus e instancia; el acordeón es HTML nativo y no necesita JS. Si una consulta no
devuelve filas, se muestra `mensaje_vacio`.

Hay una divergencia documental: el spec histórico decía «NO DESARROLLAR» hasta contar
con HubDB, y el comentario del template aún afirma que Fechas no se migró; sin embargo, el
template la precarga en la línea 76 y el módulo físico ya implementa HubDB. Para este
contrato manda el código versionado actual; el comentario/spec deben tratarse como deuda,
no como evidencia de ausencia.

## Cuándo usar

- Cuando existe una HubDB con las siete columnas y tipos documentados al inicio de
  `module.html`, incluida `campus` multiselección y `fecha_de_ordenamiento` tipo fecha.
- Para mostrar dos consultas por campus, con opciones `NORTE`/`SUR`, un límite de 1 a 20
  filas por columna y estado vacío editorial.
- Desde un template que cargue `main.css`. No depende de JS; `html.no-js` conserva visibles
  los elementos reveal cuando el script general no carga.
- Como módulo page-specific. Reutilizarlo requiere validar primero el esquema y promover
  su alcance de forma explícita.

## Cuándo no usar

- No sin una tabla compatible: `grupo_tabla.tabla` es el único field required y el HubL
  accede por nombre literal a siete columnas. Una tabla distinta puede dejar el módulo sin
  datos o provocar error de consulta.
- No para un calendario genérico, una sola sede, fechas calculadas ni altas manuales dentro
  del módulo. Los datos vivos pertenecen a HubDB.
- No interpretes la ausencia de candidatos automáticos como unicidad; la búsqueda humana
  sigue siendo obligatoria.
- No cambies los defaults, el ID de tabla, `maximo`, opciones de campus o paths como si
  fueran detalles editoriales: todos integran la firma comparada.
- No uses un valor de campus fuera de las opciones reales de la tabla. El filtro es
  `campus__contains=<opción>` y depende de coincidencia literal.

## Fields editables

<!-- AUTO:fields:START -->
| Path completo | Tipo | Required | Default | Occurrence | Repeater | Padre |
|---|---|---:|---|---|---:|---|
| `grupo_tabla` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_tabla.tabla` | `hubdbtable` | sí | `385703603` | `null` | no | `grupo_tabla` |
| `grupo_tabla.maximo` | `number` | no | `5` | `null` | no | `grupo_tabla` |
| `grupo_tabla.opcion_norte` | `choice` | no | `NORTE` | `null` | no | `grupo_tabla` |
| `grupo_tabla.opcion_sur` | `choice` | no | `SUR` | `null` | no | `grupo_tabla` |
| `grupo_contenido` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_contenido.tagline` | `text` | no | `Calendario de fechas de exámenes` | `null` | no | `grupo_contenido` |
| `grupo_contenido.tagline_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading` | `text` | no | `Próximas fechas de exámenes` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.titulo_norte` | `text` | no | `Campus Norte` | `null` | no | `grupo_contenido` |
| `grupo_contenido.titulo_sur` | `text` | no | `Campus Sur` | `null` | no | `grupo_contenido` |
| `grupo_contenido.titulo_tag` | `choice` | no | `h3` | `null` | no | `grupo_contenido` |
| `grupo_contenido.label_documentos` | `text` | no | `Fecha límite para entrega de documentos` | `null` | no | `grupo_contenido` |
| `grupo_contenido.label_academico` | `text` | no | `Aplicación de examen de conocimientos académicos` | `null` | no | `grupo_contenido` |
| `grupo_contenido.label_psicometrico` | `text` | no | `Aplicación de examen psicométrico` | `null` | no | `grupo_contenido` |
| `grupo_contenido.label_resultados` | `text` | no | `Entrega de resultados` | `null` | no | `grupo_contenido` |
| `grupo_contenido.mensaje_vacio` | `text` | no | `Por el momento no hay fechas publicadas para este campus.` | `null` | no | `grupo_contenido` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_titulo_norte` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_titulo_sur` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_fecha` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_etiqueta` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_valor` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
<!-- AUTO:fields:END -->

## Contrato de compatibilidad

**`metadata`.** Duras son `hubdb`, dos campus, límite de registros, acordeón, tabla de
fechas y estado vacío. `familia: null` significa que no se curó una agrupación y es solo
nota; no demuestra unicidad. `tier: page-specific`, `meta.global: false`, estado y tipos
de template son alcance/plataforma, no compatibilidad funcional dura.

**`fields`.** Contrato duro: `grupo_tabla.tabla` (`hubdbtable`, required, default
`385703603`), `maximo` (`number`) y las opciones de campus, más textos, tags y colores.
No hay repeaters: las filas provienen de HubDB. La firma incluye paths, tipos, required,
defaults y occurrence; cambiar cualquiera produce brecha bloqueante. Ampliar opciones de
campus solo es aditivo si la tabla y la consulta soportan exactamente esos valores.

**`html`.** Contrato: `section.adm-fechas.section-pad#fechas`, `.fechas-grid`, dos
`.fechas-col` generadas por la lista `columnas`, `.fechas-accordion`,
`details.fecha-item > summary + .fecha-panel > table.fecha-table`. El atributo `name`
incluye campus y `{{ name }}` para aislar instancias. La separación de horario depende de
la coma `", "` en el texto de HubDB y emite `<small>` solo cuando hay segunda parte.

**`css`.** Este es el caso `module.css: absent`: todos los selectores AUTO y las variables
`--admision-fechas-*` viven en `main.css`. Cualquier brecha de selector exige editar CSS
compartido y es bloqueante. Las clases `fechas-col--orange|purple` fijan los dos roles de
campus, no son variantes registradas.

**`js/hooks`.** `module.js` está ausente y no hay hooks específicos. El acordeón usa
`details/summary`; `main.js` solo aporta reveal genérico. No debe inventarse dependencia de
JS para explicar su funcionamiento.

**`variantes`.** No hay variantes curadas. Cambiar títulos, colores u opciones de campus
es configuración de instancia; una variante estable debe registrarse explícitamente.

**`responsive`.** Las tres consultas AUTO (`90em`, `68.75em`, `48em`) viven en
`main.css`; reorganizan columnas y decoración. Al ser compartidas, una brecha responsive
es bloqueante por origen.

**`assets`.** No referencia imágenes ni archivos del theme. Los datos de HubDB son una
dependencia de datos, no assets; su ausencia no se resuelve subiendo una imagen.

**`dependencias`.** Depende de `css/main.css` y, operativamente, de la tabla HubDB y su
esquema literal. No depende de JS. Cambiar de tabla puede ser una configuración válida
solo tras validar columnas, tipos, opciones y permisos de lectura.

**`paginas`.** Uso observado: Proceso de admisión
(`templates/proceso-de-admision.html:76`). El template contradice su propio comentario al
precargarlo. Un nuevo uso es nota; modificar consulta, HTML o CSS obliga a revisar todas
las páginas que lo hayan guardado en su `dnd_area`.

## Checklist de compatibilidad

- [ ] Propósito y capacidades equivalentes.
- [ ] Fields completos, defaults y repeaters compatibles.
- [ ] HTML, clases, selectores y hooks compatibles.
- [ ] CSS, JS y responsive compatibles.
- [ ] Variantes, assets y dependencias compatibles.
- [ ] Uso e impacto en páginas revisados.
- [ ] Decisión humana: REUTILIZAR / ADAPTAR / CREAR.

## Ejemplo HubL

```html
{% dnd_module path="../modules/admision-fechas" %}
{% end_dnd_module %}
```
