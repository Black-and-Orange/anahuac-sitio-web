# `oferta-areas`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `oferta-areas.module` |
| Label HubSpot | Áreas académicas — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `exploracion-academica` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `areas-repetibles`, `cta-por-tarjeta`, `navegacion-academica`, `revelado-progresivo`, `tarjetas-con-imagen` |
| Variantes verificadas | — |
| Notas curatoriales | Template de Oferta no versionado. Las tarjetas posteriores a la cuarta usan una clase de ocultamiento inicial y controles de revelado. |
| Páginas conocidas | `Oferta académica` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`licenciaturas`](./licenciaturas.md): score 0.555; evidencia: `assets`, `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `js/hooks`, `metadata`, `metadata-plataforma`, `responsive`; coincidencias: `familia:exploracion-academica`, `cta-por-tarjeta`, `navegacion-academica`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.
- [`descubre`](./descubre.md): score 0.517; evidencia: `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `paginas`, `responsive`; coincidencias: `familia:exploracion-academica`, `cta-por-tarjeta`, `navegacion-academica`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.oferta-areas`, `.section-pad`.
- Elementos: `a:1`, `article:1`, `button:2`, `div:6`, `dynamic:4`, `img:1`, `p:2`, `polyline:2`, `section:1`, `span:1`, `svg:2`.
- Estructura padre→hijo: `article>div:1`, `article>img:1`, `button>svg:2`, `div>a:1`, `div>article:1`, `div>button:2`, `div>div:4`, `div>dynamic:4`, `div>p:2`, `dynamic>span:1`, `section>div:1`, `svg>polyline:2`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>article:1`, `section>div>div>article>div:1`, `section>div>div>article>div>a:1`, `section>div>div>article>div>dynamic:1`, `section>div>div>article>div>p:2`, `section>div>div>article>img:1`, `section>div>div>div:2`, `section>div>div>div>button:2`, `section>div>div>div>button>svg:2`, `section>div>div>div>button>svg>polyline:2`, `section>div>div>div>dynamic:3`, `section>div>div>div>dynamic>span:1`.
- Clases: `.area-card`, `.area-card--hidden`, `.area-card-body`, `.area-desc`, `.area-grid`, `.area-hook`, `.arrow-buttons`, `.btn`, `.btn-dark`, `.btn-sm`, `.container`, `.oferta-areas`, `.on-orange`, `.programs-head`, `.reveal`, `.section-intro`, `.section-pad`, `.tagline`.
- IDs: `#areas`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.apo-panorama .programs-head`, `.area-card`, `.area-card > img`, `.area-card--hidden`, `.area-card-body`, `.area-card-body .btn-sm`, `.area-card-body h3`, `.area-desc`, `.area-grid`, `.area-hook`, `.arrow-buttons`, `.arrow-buttons button`, `.arrow-buttons button:hover`, `.oferta-areas`, `.oferta-areas .arrow-buttons`, `.oferta-areas .container`, `.oferta-areas .programs-head`, `.oferta-areas .programs-head .arrow-buttons`, `.oferta-areas .section-intro`, `.oferta-areas .section-intro h2`, `.oferta-areas .section-intro p`, `.oferta-areas::before`, `.programs-head`, `.programs-head .btn`.
- module.js: `empty`; hooks propios/compartidos relevantes: `.area-card`, `.area-grid`, `.arrow-buttons`, `.oferta-areas`.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: `js/main.js`.
- Responsive: `@media (max-width: 24.6875em)`, `@media (max-width: 30em)`, `@media (max-width: 33.75em)`, `@media (max-width: 40em)`, `@media (max-width: 48em)`, `@media (max-width: 68.75em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`, `@media (min-width: 48.0625em) and (max-width: 68.75em)`, `@media (min-width: 56.3125em) and (max-width: 68.75em)`.
- Assets: `get_asset_url('../../images/' ~ fallbacks[loop.index0 % (fallbacks\|length)])`.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: `js/main.js`.

### Discrepancias y pendientes técnicos

_Sin discrepancias técnicas detectadas._
<!-- AUTO:technical:END -->

## Descripción y propósito

> TODO: documentar la intención editorial y funcional con evidencia de la página aprobada.

## Cuándo usar

> TODO: documentar condiciones de reutilización.

## Cuándo no usar

> TODO: documentar límites y casos incompatibles.

## Fields editables

<!-- AUTO:fields:START -->
| Path completo | Tipo | Required | Default | Occurrence | Repeater | Padre |
|---|---|---:|---|---|---:|---|
| `eyebrow` | `text` | no | `Áreas` | `null` | no | `null` |
| `eyebrow_tag` | `choice` | no | `p` | `null` | no | `null` |
| `heading` | `text` | no | `Conoce nuestras áreas académicas` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h2` | `null` | no | `null` |
| `intro` | `text` | no | `Agrupamos nuestras licenciaturas por áreas académicas para que te sea más fácil identificar campos afines, comparar opciones y descubrir caminos que quizá aún no habías considerado.` | `null` | no | `null` |
| `intro_tag` | `choice` | no | `p` | `null` | no | `null` |
| `areas` | `group` | no | `[{"desc":"¿Te apasiona cuidar de las personas, promover la salud o investigar nuevas soluciones para enfermedades? Si te motiva el bienestar de los demás y deseas contribuir al avance de la ciencia médica, esta área es para ti.","hook":"¿Te interesa comprender cómo funciona el cuerpo humano?","image":{"alt":"Ciencias de la Salud","src":""},"item_name":"Ciencias de la Salud","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"link_text":"Explorar Licenciaturas"},{"desc":"Si te apasionan las matemáticas, las ciencias y la tecnología, esta área te permitirá convertir ideas en realidades tangibles y liderar el cambio en el mundo.","hook":"¿Eres curioso sobre cómo funcionan las cosas a tu alrededor?","image":{"alt":"Ingenierías y Ciencias","src":""},"item_name":"Ingenierías y Ciencias","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"link_text":"Explorar Licenciaturas"},{"desc":"¿Te interesa el mundo financiero, la economía global o la estrategia empresarial? Si tienes habilidades para la organización, la toma de decisiones y el trabajo en equipo, esta área te ayudará a convertirte en un líder en el mundo de los negocios.","hook":"¿Sueñas con liderar tu propia empresa o gestionar proyectos globales?","image":{"alt":"Negocios y Economía","src":""},"item_name":"Negocios y Economía","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"link_text":"Explorar Licenciaturas"},{"desc":"Aquí encontrarás el espacio perfecto para desarrollar tu pensamiento crítico, tus habilidades creativas y tu capacidad de impacto en un mundo en constante evolución.","hook":"¿Te apasiona explorar ideas, comunicar perspectivas o diseñar soluciones que transformen la sociedad?","image":{"alt":"Comunicación, Arquitectura y Diseño","src":""},"item_name":"Comunicación, Arquitectura y Diseño","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"link_text":"Explorar Licenciaturas"},{"desc":"Si quieres marcar una diferencia en tu comunidad y en el mundo, esta área te permitirá explorar las relaciones humanas y su impacto en el entorno global.","hook":"¿Te interesa entender el comportamiento humano, la sociedad, las políticas públicas o la defensa de los derechos humanos?","image":{"alt":"Ciencias Sociales y Derecho","src":""},"item_name":"Ciencias Sociales y Derecho","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"link_text":"Explorar Licenciaturas"},{"desc":"¿Te apasiona el servicio, el arte culinario o la gestión de eventos y viajes? Si disfrutas planear momentos memorables para los demás, esta área es ideal para ti.","hook":"¿Te encanta explorar nuevas culturas, sabores y experiencias?","image":{"alt":"Turismo, Gastronomía y Hospitalidad","src":""},"item_name":"Turismo, Gastronomía y Hospitalidad","link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"link_text":"Explorar Licenciaturas"}]` | `{"default":6,"max":20,"min":0,"sorting_label_field":null}` | sí | `null` |
| `areas.image` | `image` | no | `{"alt":"Área académica Anáhuac","src":""}` | `null` | no | `areas` |
| `areas.item_name` | `text` | no | `Área académica` | `null` | no | `areas` |
| `areas.item_name_tag` | `choice` | no | `h3` | `null` | no | `areas` |
| `areas.color_titulo` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `areas` |
| `areas.hook` | `text` | no | `¿Es esta tu área?` | `null` | no | `areas` |
| `areas.color_pregunta` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `areas` |
| `areas.desc` | `text` | no | `Describe brevemente esta área académica.` | `null` | no | `areas` |
| `areas.color_texto` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `areas` |
| `areas.link_text` | `text` | no | `Explorar Licenciaturas` | `null` | no | `areas` |
| `areas.link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `areas` |
| `areas.color_boton_fondo` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `areas` |
| `areas.color_boton_texto` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `areas` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_eyebrow` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_heading` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_intro` | `color` | no | `{"color":null,"opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.tamano_intro` | `choice` | no | `paragraph-size` | `null` | no | `grupo_estilos` |
<!-- AUTO:fields:END -->

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
{% dnd_module path="../modules/oferta-areas" %}
{% end_dnd_module %}
```
