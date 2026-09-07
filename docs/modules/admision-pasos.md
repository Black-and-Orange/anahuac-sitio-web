# `admision-pasos`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `admision-pasos.module` |
| Label HubSpot | Admisión · Pasos del proceso — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `pasos` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `cta-por-paso`, `imagen-o-video`, `linea-de-tiempo`, `paneles-sincronizados`, `pasos-repetibles`, `video-youtube-diferido` |
| Variantes verificadas | — |
| Notas curatoriales | Los hooks data-step/data-panel y data-yt-id son parte del contrato funcional y requieren el JS compartido del theme. |
| Páginas conocidas | `Proceso de admisión` |

### Relaciones curadas

- `candidato` → `apoyos-pasos` — Ambos modelan procesos repetibles; admision-pasos requiere timeline, paneles sincronizados y media, mientras apoyos-pasos usa tarjetas y navegación móvil.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`apoyos-pasos`](./apoyos-pasos.md): score 0.497; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `relacion-curada`, `responsive`; coincidencias: `familia:pasos`, `pasos-repetibles`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`, `0\|group\|optional\|repeater\|standalone`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.adm-steps`, `.section-pad`.
- Elementos: `a:2`, `article:1`, `button:2`, `div:8`, `dynamic:10`, `img:2`, `p:1`, `path:2`, `section:1`, `span:6`, `strong:1`, `svg:1`.
- Estructura padre→hijo: `a>dynamic:2`, `a>span:1`, `article>div:2`, `article>img:1`, `button>span:2`, `button>svg:1`, `div>a:2`, `div>article:1`, `div>button:2`, `div>div:5`, `div>dynamic:5`, `div>img:1`, `div>p:1`, `div>span:2`, `dynamic>span:1`, `p>strong:1`, `section>div:1`, `span>dynamic:3`, `svg>path:2`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:3`, `section>div>div>article:1`, `section>div>div>article>div:2`, `section>div>div>article>div>a:1`, `section>div>div>article>div>a>dynamic:1`, `section>div>div>article>div>button:1`, `section>div>div>article>div>button>svg:1`, `section>div>div>article>div>button>svg>path:2`, `section>div>div>article>div>div:2`, `section>div>div>article>div>div>a:1`, `section>div>div>article>div>div>a>dynamic:1`, `section>div>div>article>div>div>a>span:1`, `section>div>div>article>div>div>p:1`, `section>div>div>article>div>div>p>strong:1`, `section>div>div>article>div>div>span:1`, `section>div>div>article>div>div>span>dynamic:1`, `section>div>div>article>div>dynamic:2`, `section>div>div>article>div>img:1`, `section>div>div>article>div>span:1`, `section>div>div>article>div>span>dynamic:1`, `section>div>div>article>img:1`, `section>div>div>button:1`, `section>div>div>button>span:2`, `section>div>div>button>span>dynamic:1`, `section>div>div>dynamic:3`, `section>div>div>dynamic>span:1`.
- Clases: `.active`, `.adm-steps`, `.btn`, `.btn-dark`, `.button-row`, `.container`, `.reveal`, `.section-intro`, `.section-pad`, `.step-dot`, `.step-label`, `.step-link`, `.step-note`, `.step-num`, `.step-panel`, `.step-panel-body`, `.step-panel-head`, `.step-panels`, `.step-tag`, `.step-time`, `.steps-timeline`, `.tagline`, `.video-card`, `.video-play-btn`, `.wide`.
- IDs: `#pasos`.
- Data attributes: `data-panel`, `data-reveal`, `data-step`, `data-yt-id`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.adm-cta-inner .button-row`, `.adm-hero-info .button-row`, `.adm-steps`, `.adm-steps .btn-dark`, `.adm-steps .container`, `.adm-steps .section-intro`, `.adm-steps .section-intro p:not(.tagline)`, `.adm-steps .step-dot.active .step-num`, `.adm-steps .step-label`, `.adm-steps .step-num`, `.adm-steps::before`, `.apo-hero-info .button-row`, `.button-row`, `.button-row .btn`, `.button-row.centered`, `.oferta-hero-info .button-row`, `.prop-panel--purple .step-tag`, `.questions-card .button-row`, `.section-intro.wide`, `.step-dot`, `.step-dot.active .step-label`, `.step-dot.active .step-num`, `.step-dot:hover .step-num`, `.step-label`, `.step-link`, `.step-link:hover`, `.step-note`, `.step-num`, `.step-panel`, `.step-panel .button-row`, `.step-panel h3`, `.step-panel img`, `.step-panel ol`, `.step-panel ol li`, `.step-panel-body`, `.step-panel-head`, `.step-panel.active`, `.step-panels`, `.step-tag`, `.step-time`, `.step-time strong`, `.steps-timeline`, `.steps-timeline::before`, `.video-card`, `.video-card iframe`, `.video-card img`, `.video-play-btn`, `.video-play-btn svg`, `.video-play-btn:hover`, `.video-play-btn:hover svg`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.step-dot`, `.step-panel`, `.video-play-btn`, `[data-panel]`, `[data-step]`, `[data-yt-id]`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 32.1875em)`, `@media (max-width: 37.5em)`, `@media (max-width: 40em)`, `@media (max-width: 48em)`, `@media (max-width: 68.75em)`.
- Assets: `get_asset_url('../../images/' ~ fallback[loop.index0 % (fallback\|length)])`.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: `js/main.js`.

### Discrepancias y pendientes técnicos

_Sin discrepancias técnicas detectadas._
<!-- AUTO:technical:END -->

## Descripción y propósito

`admision-pasos` convierte el proceso de ingreso en una línea de tiempo y un conjunto de
paneles sincronizados. Porta `.adm-steps` de la maqueta aprobada
(`proceso-de-admision.html:131`): cada item de `pasos` produce un `.step-dot[data-step]` y
un `.step-panel[data-panel]` con el mismo `loop.index0`; `main.js:1395-1411` conmuta
`.active` al seleccionar un paso.

Cada panel admite richtext, tiempo, enlace, CTA e imagen o video diferido de YouTube. La
numeración visible sale de `loop.index`, no del contenido editorial. Si `tipo_media` es
`video` y hay `video_id`, se emite `[data-yt-id]` con poster y botón; en otro caso se usa
la imagen o uno de seis JPEG de respaldo. Es interacción funcional, no decorativa: sin JS
queda visible el primer panel, pero la línea de tiempo no cambia de panel y el video no
se abre.

## Cuándo usar

- Para procesos secuenciales donde una navegación por pasos controla exactamente un panel
  por item y cada panel puede llevar media y CTA.
- Con `pasos` como repeater raíz, de 0 a 12 items (default 6). Agregar, borrar o reordenar
  mantiene sincronizados dot y panel porque ambos índices se generan juntos.
- Desde templates que carguen `main.css` y `main.js`. `html.no-js` evita ocultar el
  contenido si falla JS, pero no sustituye la selección de paneles ni YouTube diferido.
- Como módulo propio de Proceso de admisión. Promover `tier: page-specific` requiere una
  decisión explícita y análisis de impacto.

## Cuándo no usar

- No para un listado de pasos independientes en tarjetas. `apoyos-pasos` es candidato
  (0.497), pero carece de esta timeline, paneles sincronizados y media; familia y score no
  deciden sustitución.
- No dos veces en la misma página: `main.js` recoge todos los dots/paneles globalmente y
  busca el destino con `document.querySelector`; índices repetidos harían que la segunda
  instancia active paneles de la primera. Además se duplica `#pasos`.
- No sin JS si se espera interacción completa. El primer panel queda visible por la clase
  inicial `active`, pero los demás no son alcanzables desde la timeline.
- No para Vimeo, video alojado o controles de reproducción: el contrato construye un embed
  de YouTube a partir de `video_id`.
- No cambies occurrence, defaults, paths ni los pares `data-step`/`data-panel`; forman
  parte del contrato de contenido y comportamiento.

## Fields editables

<!-- AUTO:fields:START -->
| Path completo | Tipo | Required | Default | Occurrence | Repeater | Padre |
|---|---|---:|---|---|---:|---|
| `grupo_contenido` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_contenido.eyebrow` | `text` | no | `Proceso de admisión` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.eyebrow_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading` | `text` | no | `Pasos hacia tu ingreso` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro` | `text` | no | `Conoce qué esperar en cada momento hacia tu ingreso a la Universidad Anáhuac ya seas estudiante nacional o internacional.` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_visibilidad` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_visibilidad.mostrar_flecha` | `boolean` | no | `true` | `null` | no | `grupo_visibilidad` |
| `pasos` | `group` | no | `[{"cta_enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_texto":"Empezar registro","cta_texto_tag":"ninguna","descripcion":"<p>Describe este paso del proceso.</p>","enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"enlace_texto":"Consultar próximas fechas de pruebas ›","etiqueta_dot":"Inicia tu solicitud","etiqueta_tiempo":"Tiempo estimado:","imagen":{"alt":"Paso 1 del proceso de admisión","src":""},"indicador":"Paso 1","indicador_tag":"ninguna","mostrar_cta":true,"mostrar_enlace":false,"mostrar_tiempo":true,"nota":"","nota_tag":"p","tiempo":"5 min.","tipo_media":"imagen","titulo":"Regístrate para iniciar tu solicitud en línea","titulo_tag":"h3","video_id":"","video_poster":{"alt":"","src":""}},{"cta_enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_texto":"Continuar proceso","cta_texto_tag":"ninguna","descripcion":"<p>Describe este paso del proceso.</p>","enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"enlace_texto":"Consultar próximas fechas de pruebas ›","etiqueta_dot":"Sube tus documentos","etiqueta_tiempo":"Tiempo estimado:","imagen":{"alt":"Paso 2 del proceso de admisión","src":""},"indicador":"Paso 2","indicador_tag":"ninguna","mostrar_cta":true,"mostrar_enlace":false,"mostrar_tiempo":true,"nota":"","nota_tag":"p","tiempo":"15 min.","tipo_media":"imagen","titulo":"Reúne y sube tus documentos","titulo_tag":"h3","video_id":"","video_poster":{"alt":"","src":""}},{"cta_enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_texto":"Continuar proceso","cta_texto_tag":"ninguna","descripcion":"<p>Describe este paso del proceso.</p>","enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"enlace_texto":"Consultar próximas fechas de pruebas ›","etiqueta_dot":"Completa tu información","etiqueta_tiempo":"Tiempo estimado:","imagen":{"alt":"Paso 3 del proceso de admisión","src":""},"indicador":"Paso 3","indicador_tag":"ninguna","mostrar_cta":true,"mostrar_enlace":false,"mostrar_tiempo":false,"nota":"","nota_tag":"p","tiempo":"5 min.","tipo_media":"imagen","titulo":"Completa tu información","titulo_tag":"h3","video_id":"","video_poster":{"alt":"","src":""}},{"cta_enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_texto":"Agendar mis pruebas","cta_texto_tag":"ninguna","descripcion":"<p>Describe este paso del proceso.</p>","enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"enlace_texto":"Consultar próximas fechas de pruebas ›","etiqueta_dot":"Agenda tus pruebas","etiqueta_tiempo":"Tiempo estimado:","imagen":{"alt":"Paso 4 del proceso de admisión","src":""},"indicador":"Paso 4","indicador_tag":"ninguna","mostrar_cta":true,"mostrar_enlace":false,"mostrar_tiempo":false,"nota":"","nota_tag":"p","tiempo":"5 min.","tipo_media":"imagen","titulo":"Agenda tus pruebas","titulo_tag":"h3","video_id":"","video_poster":{"alt":"","src":""}},{"cta_enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_texto":"Continuar proceso","cta_texto_tag":"ninguna","descripcion":"<p>Describe este paso del proceso.</p>","enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"enlace_texto":"Consultar próximas fechas de pruebas ›","etiqueta_dot":"Recibe resultados","etiqueta_tiempo":"Tiempo estimado:","imagen":{"alt":"Paso 5 del proceso de admisión","src":""},"indicador":"Paso 5","indicador_tag":"ninguna","mostrar_cta":true,"mostrar_enlace":false,"mostrar_tiempo":false,"nota":"","nota_tag":"p","tiempo":"5 min.","tipo_media":"imagen","titulo":"Fechas disponibles para tu examen","titulo_tag":"h3","video_id":"","video_poster":{"alt":"","src":""}},{"cta_enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"cta_texto":"Calcular","cta_texto_tag":"ninguna","descripcion":"<p>Describe este paso del proceso.</p>","enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"enlace_texto":"Consultar próximas fechas de pruebas ›","etiqueta_dot":"Termina tu inscripción","etiqueta_tiempo":"Tiempo estimado:","imagen":{"alt":"Paso 6 del proceso de admisión","src":""},"indicador":"Paso 6","indicador_tag":"ninguna","mostrar_cta":true,"mostrar_enlace":false,"mostrar_tiempo":false,"nota":"","nota_tag":"p","tiempo":"5 min.","tipo_media":"imagen","titulo":"Inversión en tu futuro profesional","titulo_tag":"h3","video_id":"","video_poster":{"alt":"","src":""}}]` | `{"default":6,"max":12,"min":0,"sorting_label_field":null}` | sí | `null` |
| `pasos.etiqueta_dot` | `text` | no | `Inicia tu solicitud` | `null` | no | `pasos` |
| `pasos.etiqueta_dot_tag` | `choice` | no | `ninguna` | `null` | no | `pasos` |
| `pasos.etiqueta_dot_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `pasos` |
| `pasos.indicador` | `text` | no | `Paso 1` | `null` | no | `pasos` |
| `pasos.indicador_tag` | `choice` | no | `ninguna` | `null` | no | `pasos` |
| `pasos.indicador_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `pasos` |
| `pasos.titulo` | `text` | no | `Regístrate para iniciar tu solicitud` | `null` | no | `pasos` |
| `pasos.titulo_tag` | `choice` | no | `h3` | `null` | no | `pasos` |
| `pasos.titulo_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `pasos` |
| `pasos.descripcion` | `richtext` | no | `<p>Describe este paso del proceso.</p>` | `null` | no | `pasos` |
| `pasos.nota` | `text` | no | — | `null` | no | `pasos` |
| `pasos.nota_tag` | `choice` | no | `p` | `null` | no | `pasos` |
| `pasos.nota_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `pasos` |
| `pasos.mostrar_tiempo` | `boolean` | no | `true` | `null` | no | `pasos` |
| `pasos.etiqueta_tiempo` | `text` | no | `Tiempo estimado:` | `null` | no | `pasos` |
| `pasos.etiqueta_tiempo_tag` | `choice` | no | `ninguna` | `null` | no | `pasos` |
| `pasos.etiqueta_tiempo_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `pasos` |
| `pasos.tiempo` | `text` | no | `5 min.` | `null` | no | `pasos` |
| `pasos.tiempo_tag` | `choice` | no | `ninguna` | `null` | no | `pasos` |
| `pasos.tiempo_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `pasos` |
| `pasos.mostrar_enlace` | `boolean` | no | `false` | `null` | no | `pasos` |
| `pasos.enlace_texto` | `text` | no | `Consultar próximas fechas de pruebas ›` | `null` | no | `pasos` |
| `pasos.enlace_texto_tag` | `choice` | no | `ninguna` | `null` | no | `pasos` |
| `pasos.enlace_texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `pasos` |
| `pasos.enlace` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `pasos` |
| `pasos.mostrar_cta` | `boolean` | no | `true` | `null` | no | `pasos` |
| `pasos.cta_texto` | `text` | no | `Continuar proceso` | `null` | no | `pasos` |
| `pasos.cta_texto_tag` | `choice` | no | `ninguna` | `null` | no | `pasos` |
| `pasos.cta_texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `pasos` |
| `pasos.cta_enlace` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `pasos` |
| `pasos.tipo_media` | `choice` | no | `imagen` | `null` | no | `pasos` |
| `pasos.imagen` | `image` | no | `{"alt":"Paso del proceso de admisión","src":""}` | `null` | no | `pasos` |
| `pasos.video_id` | `text` | no | — | `null` | no | `pasos` |
| `pasos.video_poster` | `image` | no | `{"alt":"Miniatura del video","src":""}` | `null` | no | `pasos` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_dot_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_dot_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_dot_activo_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_dot_activo_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
<!-- AUTO:fields:END -->

## Contrato de compatibilidad

**`metadata`.** Duras son las seis capacidades observables, en particular timeline,
paneles sincronizados, media y YouTube diferido. `familia: pasos` es solo una pista de
búsqueda; `tier`, `meta.global`, estado y tipos de template son nota o alcance. Un
candidato no es compatible hasta completar esta comparación.

**`fields`.** `pasos` es repeater raíz con occurrence `{min: 0, default: 6, max: 12}`;
sus paths y tipos sostienen contenido, visibilidad, enlaces y media. Son especialmente
duros `tipo_media`, `video_id`, `imagen`, los booleanos `mostrar_*` y los links leídos por
`.url.href`. La firma incluye defaults y occurrence: modificarlos es bloqueante para el
comparador. Las opciones nuevas de `choice` pueden ser aditivas solo si HTML/CSS/JS ya
soportan el valor o se amplían con el impacto correspondiente.

**`html`.** Contrato: `section.adm-steps.section-pad#pasos`, `.steps-timeline` con
`button.step-dot[data-step]`, `.step-panels` con `article.step-panel[data-panel]`, la clase
inicial `.active`, y la jerarquía de `.step-panel-body` más su media hermana. Para video,
`.video-play-btn` debe ser descendiente del nodo `[data-yt-id]`. Las etiquetas dinámicas
con valor `ninguna` preservan los contenedores; las demás usan respaldo seguro.

**`css`.** `module.css` está vacío; todos los selectores AUTO vienen de `main.css`.
Existen selectores compartidos (`.step-panel`, `.video-card`, `.button-row`) y reglas
acotadas por `.adm-steps`. Toda brecha de selector es bloqueante por origen compartido;
las variables `--admision-pasos-*` son la configuración visual soportada.

**`js/hooks`.** Todo vive en `main.js`: `[data-step]`/`[data-panel]` y `.active` sincronizan
los paneles; `[data-yt-id]`/`.video-play-btn` reemplazan la card por un iframe. Renombrar
un hook o cambiar la correspondencia de índices rompe la función. Los selectores de
documento imponen una sola instancia por página.

**`variantes`.** No hay variantes registradas. `tipo_media=imagen|video` es configuración
por item observada, no una variante curada del módulo.

**`responsive`.** Las cinco consultas listadas en AUTO proceden de `main.css`; ajustan
timeline, panel y media. No hay reglas propias, por lo que cualquier brecha responsive es
bloqueante por origen.

**`assets`.** En modo imagen usa seis JPEG bajo
`images/proceso-de-admision/`, recorridos en ciclo; desde el séptimo se repiten. En modo
video, el poster puede venir del field o de `i.ytimg.com`. Sustituir un asset es adaptable;
la existencia de la rama imagen/video es capacidad dura.

**`dependencias`.** Requiere `css/main.css` y `js/main.js`, cargados por la plantilla; no
usa `require_css`/`require_js`. Declarar una dependencia nueva puede ser adaptable, pero
editar las compartidas exige análisis transversal.

**`paginas`.** Uso observado: Proceso de admisión
(`templates/proceso-de-admision.html:70`). Cambiarlo exige revisar esa página y cualquier
instancia de portal no registrada; el `dnd_area` no actualiza la configuración guardada de
páginas existentes.

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
{% dnd_module path="../modules/admision-pasos" %}
{% end_dnd_module %}
```
