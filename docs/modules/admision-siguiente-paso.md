# `admision-siguiente-paso`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `admision-siguiente-paso.module` |
| Label HubSpot | Admisión · Siguiente paso — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `navegacion-tarjetas` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `cta-por-tarjeta`, `icono-configurable`, `navegacion-por-tarjetas`, `tarjetas-repetibles`, `visibilidad-por-tarjeta` |
| Variantes verificadas | — |
| Notas curatoriales | Cada tarjeta puede ocultarse y elegir icono predefinido o imagen; no hereda automáticamente el contrato del siguiente-paso global. |
| Páginas conocidas | `Proceso de admisión` |

### Relaciones curadas

- `candidato` → `siguiente-paso` — Ambos presentan destinos relacionados como tarjetas repetibles con icono, texto y enlace; difieren en fields, marcado y estados visuales.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`siguiente-paso`](./siguiente-paso.md): score 0.608; evidencia: `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `nombre`, `relacion-curada`, `responsive`; coincidencias: `familia:navegacion-tarjetas`, `navegacion-por-tarjetas`, `tarjetas-repetibles`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`.
- [`comienza-tu-camino`](./comienza-tu-camino.md): score 0.462; evidencia: `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `responsive`; coincidencias: `familia:navegacion-tarjetas`, `cta-por-tarjeta`, `navegacion-por-tarjetas`, `tarjetas-repetibles`, `category:BODY_CONTENT`, `content_type:LANDING_PAGE`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.adm-siguiente`, `.section-pad`.
- Elementos: `a:1`, `article:1`, `div:3`, `dynamic:5`, `img:1`, `section:1`.
- Estructura padre→hijo: `a>dynamic:1`, `article>a:1`, `article>dynamic:2`, `article>img:1`, `div>article:1`, `div>div:2`, `div>dynamic:2`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:2`, `section>div>div>article:1`, `section>div>div>article>a:1`, `section>div>div>article>a>dynamic:1`, `section>div>div>article>dynamic:2`, `section>div>div>article>img:1`, `section>div>div>dynamic:2`.
- Clases: `.adm-siguiente`, `.adm-siguiente-layout`, `.container`, `.reveal`, `.section-intro`, `.section-pad`, `.siguiente-card`, `.siguiente-cards`, `.siguiente-icon-img`.
- IDs: `#siguiente-paso`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.adm-siguiente`, `.adm-siguiente .siguiente-card`, `.adm-siguiente .siguiente-card a`, `.adm-siguiente .siguiente-card p`, `.adm-siguiente .siguiente-icon`, `.adm-siguiente-layout`, `.adm-siguiente-layout .section-intro`, `.adm-siguiente-layout .section-intro h2`, `.adm-siguiente-layout .section-intro p`, `.siguiente-card`, `.siguiente-card a`, `.siguiente-card a:hover`, `.siguiente-card h3`, `.siguiente-card p`, `.siguiente-card:hover`, `.siguiente-card:hover .siguiente-icon`, `.siguiente-card:hover h3`, `.siguiente-cards`, `.siguiente-icon-img`.
- module.js: `empty`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: `@media (max-width: 37.5em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: —.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: —.

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
| `grupo_contenido` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_contenido.heading` | `text` | no | `Elige el siguiente paso para tu futuro` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro` | `text` | no | `En la Universidad Anáhuac te estamos esperando.` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.intro_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `tarjetas` | `group` | no | `[{"enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"enlace_texto":"Consultar ›","enlace_texto_tag":"ninguna","icono":"calendario","icono_imagen":{"alt":"Fechas de examen","src":""},"mostrar":true,"texto":"Consulta el calendario completo de pruebas para tu ingreso a la universidad.","texto_tag":"p","titulo":"Fechas de examen","titulo_tag":"h3"},{"enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"enlace_texto":"Revisar ›","enlace_texto_tag":"ninguna","icono":"documento","icono_imagen":{"alt":"Curso para el examen de admisión","src":""},"mostrar":true,"texto":"Regístrate a nuestro curso gratuito de preparación para el examen de admisión.","texto_tag":"p","titulo":"Curso para el examen de admisión","titulo_tag":"h3"},{"enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"enlace_texto":"Descargar ›","enlace_texto_tag":"ninguna","icono":"documento-check","icono_imagen":{"alt":"Guía para tu examen de admisión","src":""},"mostrar":true,"texto":"Descarga la guía para el examen de admisión.","texto_tag":"p","titulo":"Guía para tu examen de admisión","titulo_tag":"h3"},{"enlace":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"enlace_texto":"Contactar ›","enlace_texto_tag":"ninguna","icono":"contacto","icono_imagen":{"alt":"Contacta con un asesor","src":""},"mostrar":true,"texto":"Si tienes dudas sobre el proceso estamos para ayudarte.","texto_tag":"p","titulo":"Contacta con un asesor","titulo_tag":"h3"}]` | `{"default":4,"max":12,"min":0,"sorting_label_field":null}` | sí | `null` |
| `tarjetas.mostrar` | `boolean` | no | `true` | `null` | no | `tarjetas` |
| `tarjetas.icono` | `choice` | no | `calendario` | `null` | no | `tarjetas` |
| `tarjetas.icono_imagen` | `image` | no | `{"alt":"","src":""}` | `null` | no | `tarjetas` |
| `tarjetas.titulo` | `text` | no | `Fechas de examen` | `null` | no | `tarjetas` |
| `tarjetas.titulo_tag` | `choice` | no | `h3` | `null` | no | `tarjetas` |
| `tarjetas.titulo_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `tarjetas` |
| `tarjetas.texto` | `text` | no | `Consulta el calendario completo de pruebas.` | `null` | no | `tarjetas` |
| `tarjetas.texto_tag` | `choice` | no | `p` | `null` | no | `tarjetas` |
| `tarjetas.texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `tarjetas` |
| `tarjetas.enlace_texto` | `text` | no | `Consultar ›` | `null` | no | `tarjetas` |
| `tarjetas.enlace_texto_tag` | `choice` | no | `ninguna` | `null` | no | `tarjetas` |
| `tarjetas.enlace_texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `tarjetas` |
| `tarjetas.enlace` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `tarjetas` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_tarjeta_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_tarjeta_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_tarjeta_desc` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_tarjeta_enlace` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_icono` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
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
{% dnd_module path="../modules/admision-siguiente-paso" %}
{% end_dnd_module %}
```
