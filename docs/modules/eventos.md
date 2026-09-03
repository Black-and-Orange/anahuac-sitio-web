# `eventos`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `eventos.module` |
| Label HubSpot | Eventos — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `null` |
| Tier del equipo | `reusable` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `evento-destacado-opcional`, `eventos-repetibles`, `filtros-por-etiqueta`, `metadatos-de-evento`, `paginacion` |
| Variantes verificadas | — |
| Notas curatoriales | Listado filtrable con evento destacado opcional y hooks data-filter/data-tags. No se agrupa con catálogos sin comparar su interacción y modelo de fecha. |
| Páginas conocidas | `Home` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

_Sin candidatos con evidencia semántica suficiente._

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.events`, `.section-pad`.
- Elementos: `a:2`, `article:1`, `button:4`, `div:12`, `dynamic:2`, `h3:2`, `img:1`, `p:5`, `section:1`, `span:7`, `strong:2`.
- Estructura padre→hijo: `article>a:1`, `article>div:2`, `div>a:1`, `div>article:1`, `div>button:4`, `div>div:9`, `div>dynamic:2`, `div>h3:2`, `div>img:1`, `div>p:5`, `div>span:3`, `div>strong:2`, `h3>span:1`, `p>span:3`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:5`, `section>div>div>article:1`, `section>div>div>article>a:1`, `section>div>div>article>div:2`, `section>div>div>article>div>h3:1`, `section>div>div>article>div>h3>span:1`, `section>div>div>article>div>p:2`, `section>div>div>article>div>p>span:1`, `section>div>div>article>div>span:1`, `section>div>div>article>div>strong:1`, `section>div>div>button:2`, `section>div>div>div:4`, `section>div>div>div>a:1`, `section>div>div>div>button:2`, `section>div>div>div>h3:1`, `section>div>div>div>p:2`, `section>div>div>div>p>span:1`, `section>div>div>div>span:2`, `section>div>div>div>strong:1`, `section>div>div>dynamic:2`, `section>div>div>img:1`, `section>div>div>p:1`, `section>div>div>p>span:1`.
- Clases: `.active`, `.btn`, `.btn-orange`, `.btn-purple`, `.container`, `.dark`, `.event-arrows`, `.event-date`, `.event-dots`, `.event-info`, `.event-list`, `.event-next`, `.event-pagination`, `.event-prev`, `.event-tags`, `.event-title`, `.events`, `.featured-event`, `.large`, `.meta`, `.pill`, `.reveal`, `.section-intro`, `.section-pad`, `.small`, `.tagline`.
- IDs: `#eventos`.
- Data attributes: `data-filter`, `data-reveal`, `data-tags`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.btn.small`, `.event-arrows`, `.event-arrows button`, `.event-arrows button:disabled`, `.event-arrows button:hover`, `.event-date`, `.event-date span`, `.event-date strong`, `.event-date.large`, `.event-date.large span`, `.event-date.large strong`, `.event-dots`, `.event-dots button`, `.event-dots button.is-active`, `.event-info`, `.event-info > p:not(.meta)`, `.event-info h3`, `.event-info p`, `.event-list article`, `.event-list article .btn`, `.event-list article > div:not(.event-date)`, `.event-list article p`, `.event-list article:hover`, `.event-list article[hidden]`, `.event-list h3`, `.event-list h3 .pill.dark`, `.event-list p:not(.meta)`, `.event-pagination`, `.event-tags`, `.event-tags button`, `.event-tags button.active`, `.event-tags button:hover`, `.event-title`, `.events`, `.events .btn`, `.events .container`, `.events .section-intro > p:not(.tagline)`, `.events .section-intro h2`, `.events.section-pad`, `.events::after`, `.events::before`, `.featured-event`, `.featured-event > img`, `.meta`, `.meta span`, `.pill`, `.pill.dark`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.event-dots`, `.event-list`, `.event-next`, `.event-prev`, `.event-tags`, `[data-filter]`, `[data-tags]`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 64em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: `../../images/evento.jpg`.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: `js/main.js`.

### Discrepancias y pendientes técnicos

_Sin discrepancias técnicas detectadas._
<!-- AUTO:technical:END -->

## Descripción y propósito

`eventos` es la agenda preuniversitaria del Home: convierte la oferta de sesiones
informativas, visitas y eventos masivos en una lista navegable sin salir de la página.
Deriva de `<section class="events section-pad" id="eventos">` de la página aprobada
`Inicio.html` (líneas 441-500) y conserva sus cuatro piezas en orden: intro, evento
destacado, barra de filtros y lista paginada.

- **Destacado opcional.** El bloque `.featured-event` (imagen grande, fecha `large`, pill,
  título, meta y CTA naranja) se emite sólo si `mostrar_evento_destacado` está activo, y
  se alimenta del grupo no repetible `featured`. Ojo con la evidencia: el default del field
  es `false`, mientras que la página aprobada **sí** muestra el destacado. Una instancia
  recién insertada no reproduce el diseño original hasta que el editor lo activa.
- **Filtros por etiqueta.** El repeater `filters` pinta la barra `.event-tags`. El primer
  item se emite siempre como `data-filter="all"` con `class="active"` y
  `aria-pressed="true"`, **ignorando su `filters.slug`**: sólo se usa su `text`. Del
  segundo en adelante, `slug` es el valor real del filtro.
- **Lista y paginación.** El repeater `events` emite un `<article data-tags="…">` por
  evento. `js/main.js` cruza `data-tags` (separado por espacios) con el `data-filter`
  pulsado, y pagina el resultado de **tres en tres** —`eventsPerPage = 3` está escrito en
  el JS, no es un field—, generando los puntos de `.event-dots` en runtime y habilitando
  `.event-prev` / `.event-next`. La paginación oculta con el atributo `hidden`, y
  `.event-list` lleva `aria-live="polite"` para anunciar el cambio.

Los cuatro colores de `grupo_estilos` se inyectan como `--home-eventos-*` inline y los
consume `main.css` (`.events .section-intro h2`,
`.events .section-intro > p:not(.tagline)`, `.events .btn`), siempre con fallback al token.
Nótese que `color_boton_fondo` / `color_boton_texto` aplican a **todos** los `.btn` de la
sección: el naranja del destacado y los morados de la lista a la vez.

## Cuándo usar

- Cuando la página necesita un listado de eventos **curado a mano** con filtrado y
  paginación en cliente. El registry lo dice: es un listado filtrable con hooks
  `data-filter`/`data-tags`, y el generador no le encontró candidatos semánticos.
- Con un volumen razonable de items: `events` admite `max: 24` y la paginación los sirve de
  tres en tres, así que hasta ocho páginas de puntos. Todo se renderiza en el HTML inicial
  y se oculta con `hidden`; a 24 eventos el peso ya es notable.
- Cuando las etiquetas de `events.tags` coinciden **exactamente** con los `filters.slug`.
  Son dos repeaters independientes y nadie valida la correspondencia: un `tag` sin filtro
  dedicado sigue visible en «Ver todos», pero no puede aislarse; un filtro sin `tag` deja
  su vista vacía.
- Desde un template que cargue `css/main.css` y `js/main.js`, como `templates/pagina.html`.
  Es `tier: reusable` con `meta.global: false`: cada instancia lleva su contenido.
- Si sólo se quiere la lista sin destacado, basta con dejar `mostrar_evento_destacado` en
  `false` (su default); y si sólo se quiere el destacado, `events` tiene `min: 0`.

## Cuándo no usar

- **Para eventos que vengan de una fuente de datos.** No hay HubDB, ni consulta, ni
  integración: día, mes, modalidad y campus son `text` sueltos por item. No existe fecha
  real, así que no hay orden cronológico automático ni caducidad: el orden es el del
  repeater y la limpieza de eventos pasados es manual. El módulo que sí consulta HubDB en
  este theme es `admision-fechas`, y su contrato no se parece.
- **Dos instancias en la misma página.** Es el límite más duro del módulo. `js/main.js`
  arranca con `document.querySelector('.event-list')` y `.event-dots`, `.event-prev`,
  `.event-next`: sólo inicializa la primera. Peor aún, `.event-tags button[data-filter]` se
  recoge con `querySelectorAll` global, así que los filtros de la segunda instancia
  quedarían enganchados a la lista de la primera. Además `id="eventos"` se duplicaría.
- **Si el template destino no carga `js/main.js`.** Sin JS no hay filtros ni paginación
  —todos los eventos configurados se muestran de golpe—. En las plantillas versionadas,
  `html.no-js` mantiene visible la sección aunque `[data-reveal]` no reciba `.is-visible`.
- **Si la paginación debe ser distinta de 3 por página.** `eventsPerPage` está escrito en
  `js/main.js`; hacerlo configurable exigiría un field nuevo **y** editar JS transversal:
  brecha bloqueante según §9.
- **Si el primer filtro no puede ser un «ver todos».** El HubL fuerza `data-filter="all"`
  en `loop.first`; no hay forma de arrancar con un filtro aplicado.
- **Para una cuadrícula de tarjetas de navegación o un catálogo.** Para destinos
  relacionados están `siguiente-paso`, `admision-siguiente-paso` y `comienza-tu-camino`;
  para catálogo con resumen y detalle, `apoyos-panorama` y `apoyos-detalle`. La nota del
  registry es explícita: no se agrupa con catálogos sin comparar antes su interacción y su
  modelo de fecha.

## Fields editables

<!-- AUTO:fields:START -->
| Path completo | Tipo | Required | Default | Occurrence | Repeater | Padre |
|---|---|---:|---|---|---:|---|
| `eyebrow` | `text` | no | `Próximos eventos` | `null` | no | `null` |
| `eyebrow_tag` | `choice` | no | `p` | `null` | no | `null` |
| `heading` | `text` | no | `Sé parte de nuestras experiencias preuniversitarias` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h2` | `null` | no | `null` |
| `intro` | `text` | no | `Participa en experiencias diseñadas para conocer tu futuro en Anáhuac.` | `null` | no | `null` |
| `intro_tag` | `choice` | no | `p` | `null` | no | `null` |
| `mostrar_evento_destacado` | `boolean` | no | `false` | `null` | no | `null` |
| `featured` | `group` | no | `{"campus":"Campus Norte","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Regístrate aquí ›","day":"15","description":"Vive el mejor evento para preuniversitarios con talleres, conferencias, juegos, concursos, premios y mucho más.","image":{"alt":"Estudiantes caminando en campus","src":""},"modality":"Presencial","month":"Mayo 2026","pill_text":"Evento Masivo","title":"Vive Anáhuac"}` | `null` | no | `null` |
| `featured.image` | `image` | no | `{"alt":"Estudiantes caminando en campus","src":""}` | `null` | no | `featured` |
| `featured.day` | `text` | no | `15` | `null` | no | `featured` |
| `featured.month` | `text` | no | `Mayo 2026` | `null` | no | `featured` |
| `featured.pill_text` | `text` | no | `Evento Masivo` | `null` | no | `featured` |
| `featured.title` | `text` | no | `Vive Anáhuac` | `null` | no | `featured` |
| `featured.modality` | `text` | no | `Presencial` | `null` | no | `featured` |
| `featured.campus` | `text` | no | `Campus Norte` | `null` | no | `featured` |
| `featured.description` | `text` | no | `Vive el mejor evento para preuniversitarios con talleres, conferencias, juegos, concursos, premios y mucho más.` | `null` | no | `featured` |
| `featured.cta_text` | `text` | no | `Regístrate aquí ›` | `null` | no | `featured` |
| `featured.cta_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `featured` |
| `filters` | `group` | no | `[{"slug":"all","text":"Ver todos"},{"slug":"sesiones-informativas","text":"Sesiones informativas"},{"slug":"visitas-campus","text":"Visitas en Campus"},{"slug":"brunch-informativo","text":"Brunch informativo"},{"slug":"eventos-masivos","text":"Eventos masivos"}]` | `{"default":5,"max":12,"min":1,"sorting_label_field":null}` | sí | `null` |
| `filters.text` | `text` | no | `Filtro` | `null` | no | `filters` |
| `filters.slug` | `text` | no | `all` | `null` | no | `filters` |
| `events` | `group` | no | `[{"campus":"Campus Norte","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Conocer más","day":"18","description":"Explora nuestros convenios globales y estudia un semestre en universidades aliadas del mundo.","modality":"Virtual","month":"Mayo 2026","pill_text":"Sesión Informativa","tags":"sesiones-informativas","title":"Movilidad Internacional"},{"campus":"Campus Sur","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Agendar visita","day":"22","description":"Vive un día como León Anáhuac con talleres, conferencias y competencias en vivo.","modality":"Virtual","month":"Mayo 2026","pill_text":"","tags":"visitas-campus","title":"Día de puertas abiertas"},{"campus":"Bi-Campus","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Inscribirse","day":"25","description":"Escucha historias reales de quiénes estudiaron aquí y hoy generan impacto profesional.","modality":"Presencial","month":"Mayo 2026","pill_text":"","tags":"eventos-masivos","title":"Encuentro con egresados"},{"campus":"Campus Norte","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Apartar lugar","day":"29","description":"Descubre tus intereses profesionales con actividades guiadas por orientadores universitarios.","modality":"Presencial","month":"Mayo 2026","pill_text":"","tags":"visitas-campus","title":"Taller vocacional Anáhuac"},{"campus":"Campus Sur","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Reservar","day":"04","description":"Conoce instalaciones, resuelve dudas de admisión y conversa con asesores académicos.","modality":"Presencial","month":"Junio 2026","pill_text":"","tags":"brunch-informativo","title":"Brunch para familias"},{"campus":"Bi-Campus","cta_link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_text":"Ver horarios","day":"11","description":"Vive una sesión académica breve para acercarte a la experiencia real de tu licenciatura.","modality":"Virtual","month":"Junio 2026","pill_text":"","tags":"sesiones-informativas","title":"Clase muestra por área"}]` | `{"default":6,"max":24,"min":0,"sorting_label_field":null}` | sí | `null` |
| `events.day` | `text` | no | `18` | `null` | no | `events` |
| `events.month` | `text` | no | `Mayo 2026` | `null` | no | `events` |
| `events.title` | `text` | no | `Evento` | `null` | no | `events` |
| `events.pill_text` | `text` | no | — | `null` | no | `events` |
| `events.modality` | `text` | no | `Virtual` | `null` | no | `events` |
| `events.campus` | `text` | no | `Campus Norte` | `null` | no | `events` |
| `events.description` | `text` | no | — | `null` | no | `events` |
| `events.cta_text` | `text` | no | `Conocer más` | `null` | no | `events` |
| `events.cta_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `events` |
| `events.tags` | `text` | no | — | `null` | no | `events` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_heading` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_intro` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
<!-- AUTO:fields:END -->

## Contrato de compatibilidad

Recorrido por las diez dimensiones de `evaluateCompatibility`, separando contrato duro de margen.
Severidades según `README.md` §9.

**`metadata`.** Duro: las cinco capacidades —`evento-destacado-opcional`,
`filtros-por-etiqueta`, `eventos-repetibles`, `paginacion`, `metadatos-de-evento`— son el
resumen del comportamiento observable; que falte cualquiera responde «no hace lo mismo» y
corta la cadena en el paso 2. `familia: null` es deliberado (TAXONOMY) y cuenta como nota.
`estado: Approved` es curaduría del registry, no confirmación del portal; `tier: reusable`
/ `meta.global: false` son coherentes. Flexible:
`categories` (`BODY_CONTENT`) y `content_types` (`LANDING_PAGE`, `SITE_PAGE`) se amplían de
forma aditiva en `meta.json`.

**`fields`.** Duro: la arquitectura de tres piezas —`featured` como grupo **no repetible**,
`filters` como repeater `{min: 1, default: 5, max: 12}` y `events` como repeater
`{min: 0, default: 6, max: 24}`— es el contrato. Convertir `featured` en repeater o cambiar
el `occurrence` de los otros dos altera la firma
`path|tipo|required|repeater|occurrence|default` de fields ya guardados: **bloqueante**.
`events.tags` es `text` libre pero su contenido es un hook funcional: el JS lo parte por
espacios y lo compara contra `filters.slug`. Los `cta_link` son `type: link` y el HubL lee
`…url.href`. `mostrar_evento_destacado` es `boolean` y gobierna la existencia de todo el
bloque destacado. La firma exacta incluye todos los defaults: cambiarlos produce una
brecha bloqueante para el comparador. Ampliar las opciones de los fields `choice`
`eyebrow_tag`/`heading_tag`/`intro_tag` (`h1..h6`, `p`) es aditivo; los cuatro fields
`color` de `grupo_estilos` siguen siendo editables por instancia. Ningún field es
`required`. Un field nuevo entra opcional y con default
(§10) y, dentro de `filters` o `events`, hay que leerlo con `|default(x, true)`: HubSpot no
rellena defaults en items ya guardados.

**`html`.** Duro: raíz `<section class="events section-pad">`; el árbol
`section > div.container > (div.section-intro.event-title, div.featured-event, div.event-tags, div.event-list > article, div.event-pagination > (div.event-dots, div.event-arrows > button.event-prev|.event-next))`;
y las clases que `main.css` y `main.js` referencian: `.events`, `.event-title`,
`.featured-event`, `.event-date`, `.large`, `.event-info`, `.event-tags`, `.event-list`,
`.event-pagination`, `.event-dots`, `.event-arrows`, `.event-prev`, `.event-next`,
`.active`, `.pill`, `.dark`, `.meta`, `.btn`, `.btn-orange`, `.btn-purple`, `.small`,
`.container`, `.section-pad`. Los hooks `data-*` son literales: `data-filter`, `data-tags`,
`data-reveal`. Restricciones que impone el JS y que no se ven en la tabla de jerarquías:
los eventos deben ser `<article>` **hijos de `.event-list`** (el JS hace
`eventList.querySelectorAll('article')`, así que cualquier `<article>` extra dentro se
paginaría); `.event-dots` debe llegar **vacío**, porque el JS lo repuebla con
`replaceChildren()`; y los botones de filtro deben ser `<button data-filter>` dentro de
`.event-tags`. Flexible: `id="eventos"` sólo lo usan enlaces de navegación; los atributos de
accesibilidad (`role="tablist"`, `aria-live`, `aria-label`, `aria-pressed`) son marcado
correcto que el JS actualiza pero no consulta para funcionar; `.reveal` acompaña al
atributo, el hook es `[data-reveal]`.

**`css`.** `module.css` está **vacío**. Los cuarenta y tantos selectores que el bloque AUTO
lista en la dimensión `css` viven **todos** en `theme/css/main.css` —incluidos
`.event-list article[hidden]` (que es lo que hace visible el efecto de paginar),
`.event-dots button.is-active`, `.event-arrows button:disabled`, los pseudoelementos
`.events::before`/`::after` y los tres hooks `--home-eventos-*`—. Consecuencia de §9:
**toda** brecha `falta selector:` de este módulo es **bloqueante**, porque cerrarla implica
editar CSS transversal que afecta a todas las páginas. Dar contenido al `module.css` vacío
también es bloqueante: la única excepción documentada a la convención es `hero`. Margen
real: sólo lo ya configurable por custom property.

**`js`/`hooks`.** `module.js` está vacío —los 34 lo están— y el filtrado y la paginación
viven en `js/main.js`, junto con `[data-reveal]`. Ese JS compartido es también el origen del
límite de **una instancia por página**: `.event-list`, `.event-dots`, `.event-prev` y
`.event-next` se resuelven con `document.querySelector`, mientras que los botones de filtro
se recogen con `querySelectorAll` global. Y `eventsPerPage = 3` es una constante del script,
no un field. Duro: los nombres exactos de las cuatro clases-hook y de los dos `data-*`.
Una brecha `falta hook:` es **bloqueante** por construcción: no hay `module.js` con
contenido donde alojar comportamiento sin romper la convención del theme, así que cerrarla
significa tocar JS transversal. Flexible: nada.

**`variantes`.** Ninguna: `registry.variantes` está vacío y el generador reporta «—».
`mostrar_evento_destacado` es visibilidad condicional, no una variante en el sentido de
TAXONOMY; los `.pill.dark`, `.btn-orange` y `.btn-purple` son clases fijas del marcado, no
opciones. Declarar una variante nueva es **adaptable** y obliga a registrarla en
`registry.variantes` y aquí.

**`responsive`.** Cuatro breakpoints observados —`@media (max-width: 90em)`, `73.75em`,
`64em` y `40em`—, todos en `main.css` porque el `module.css` está vacío. Por la regla de §9
(«depende del origen»), aquí el origen es siempre compartido: toda brecha responsive es
**bloqueante**.

**`assets`.** Uno solo: `../../images/evento.jpg`, el respaldo del destacado cuando
`featured.image.src` está vacío. Duro en el sentido de que el archivo debe existir en
`theme/images/`. Las imágenes de los items de `events` no existen: la lista es sólo texto y
fecha. Sustituir o subir el asset es adaptable; el Design Manager descarta `.webp` en
silencio.

**`dependencias`.** `css/main.css` y `js/main.js`, cargadas explícitamente por el template
(ningún módulo del theme usa `require_css`/`require_js`). Formalmente **solo nota** si el
template destino ya las carga; en la práctica ninguna es opcional para este módulo.

**`paginas`.** Uso observado: `Home`, desde `templates/pagina.html:96`. `paginas_portal`
vacío. Reutilizarlo produce `uso objetivo no observado:` (solo nota); modificarlo produce
`impacto existente a revisar: Home`, que obliga al análisis de impacto de §10 y a revisar la
página publicada una por una, porque el `dnd_area` no propaga cambios a páginas ya creadas.

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
{% dnd_module path="../modules/eventos" %}
{% end_dnd_module %}
```
