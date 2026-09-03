# `pie-de-pagina`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `pie-de-pagina.module` |
| Label HubSpot | Pie de página — Anáhuac (global) |
| Estado | `Approved` |
| Familia funcional | `null` |
| Tier del equipo | `global` |
| Global técnico (meta.global) | `true` |
| Categorías HubSpot | `DESIGN` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `columnas-de-enlaces-repetibles`, `identidad-visual`, `informacion-legal`, `newsletter`, `redes-sociales` |
| Variantes verificadas | — |
| Notas curatoriales | Footer global. Su combinación de newsletter, columnas con enlaces anidados, redes sociales y cierre legal es única en el inventario. |
| Páginas conocidas | `Apoyos Económicos`, `Home`, `Proceso de admisión`, `Página interna flexible` |

### Relaciones curadas

_Sin relaciones curadas._

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

_Sin candidatos con evidencia semántica suficiente._

### HTML, clases y hooks

- Raíces: `footer`.
- Clases raíz: `.site-footer`.
- Elementos: `a:5`, `button:1`, `div:6`, `footer:1`, `form:1`, `h2:1`, `h3:1`, `img:2`, `input:1`, `p:2`, `path:4`, `small:1`, `svg:5`, `symbol:4`, `use:4`.
- Estructura padre→hijo: `a>svg:4`, `div>a:5`, `div>button:1`, `div>div:4`, `div>form:1`, `div>h3:1`, `div>img:2`, `div>input:1`, `div>p:1`, `footer>div:1`, `footer>svg:1`, `form>div:1`, `form>h2:1`, `form>p:1`, `form>small:1`, `svg>symbol:4`, `svg>use:4`, `symbol>path:4`.
- Jerarquías observadas: `footer:1`, `footer>div:1`, `footer>div>div:2`, `footer>div>div>div:1`, `footer>div>div>div>a:1`, `footer>div>div>div>div:1`, `footer>div>div>div>div>a:4`, `footer>div>div>div>div>a>svg:4`, `footer>div>div>div>div>a>svg>use:4`, `footer>div>div>div>h3:1`, `footer>div>div>form:1`, `footer>div>div>form>div:1`, `footer>div>div>form>div>button:1`, `footer>div>div>form>div>input:1`, `footer>div>div>form>h2:1`, `footer>div>div>form>p:1`, `footer>div>div>form>small:1`, `footer>div>div>img:2`, `footer>div>p:1`, `footer>svg:1`, `footer>svg>symbol:4`, `footer>svg>symbol>path:4`.
- Clases: `.btn`, `.btn-dark`, `.container`, `.copyright`, `.footer-inner`, `.footer-links`, `.footer-top`, `.newsletter`, `.site-footer`, `.social-links`, `.social-sprite`.
- IDs: `#icon-facebook`, `#icon-instagram`, `#icon-x`, `#icon-youtube`.
- Data attributes: —.
- Formulario operativo observado: sí.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.copyright`, `.footer-links`, `.footer-links .social-links a`, `.footer-links .social-links a:hover`, `.footer-links > div`, `.footer-links > div:nth-child(4) h3`, `.footer-links > div:nth-child(5) h3`, `.footer-links a`, `.footer-links a:hover`, `.footer-links h3`, `.footer-links p`, `.footer-top`, `.footer-top > img`, `.newsletter button`, `.newsletter div`, `.newsletter h2`, `.newsletter input`, `.newsletter p`, `.newsletter small`, `.site-footer`, `.site-footer .newsletter button`, `.social-links`, `.social-links svg`, `.social-sprite`.
- module.js: `empty`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: `../../images/logo-anahuac.svg`.
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
| `logo` | `image` | no | `{"alt":"Anáhuac México","src":""}` | `null` | no | `null` |
| `news_heading` | `text` | no | `Mantente informado sobre las novedades del mes de nuestra Universidad` | `null` | no | `null` |
| `news_text` | `text` | no | `Recibe noticias sobre admisiones, eventos preuniversitarios y vida universitaria en tu correo.` | `null` | no | `null` |
| `news_placeholder` | `text` | no | `Email` | `null` | no | `null` |
| `news_button` | `text` | no | `Enviar` | `null` | no | `null` |
| `news_disclaimer` | `text` | no | `Al suscribirte aceptas nuestra política de privacidad` | `null` | no | `null` |
| `columns` | `group` | no | `[{"col_body":"","links":[{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Por qué Anáhuac"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Vida universitaria"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Estudiantes foráneos"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Competencias académicas"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Ubicaciones"}],"show_social":false,"title":"Descubre"},{"col_body":"","links":[{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Oferta académica"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Todas las licenciaturas"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Áreas académicas"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Solicita información"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Visita el campus"}],"show_social":false,"title":"Programas"},{"col_body":"","links":[{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Admisión general"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Admisión medicina"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Admisión internacional"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Fechas de examen"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Inicia tu proceso"}],"show_social":false,"title":"Admisiones"},{"col_body":"<p>Av. Universidad Anáhuac 46, Col. Lomas Anáhuac. Huixquilucan, Estado de México.</p>","links":[{"link":{"open_in_new_tab":false,"url":{"href":"tel:+525556270210","type":"EXTERNAL"}},"text":"+52 (55) 5627 0210"}],"show_social":true,"title":"Campus Norte"},{"col_body":"<p>Av. de los Tanques 865, Col. Torres de Potrero. Álvaro Obregón, CDMX.</p>","links":[{"link":{"open_in_new_tab":false,"url":{"href":"tel:+525556288800","type":"EXTERNAL"}},"text":"+52 (55) 5628 8800"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Misión y valores"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Acreditaciones"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Noticias"}],"show_social":true,"title":"Campus Sur"},{"col_body":"","links":[{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Teléfono principal"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Correo de admisiones"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Síguenos en línea"},{"link":{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}},"text":"Ubicación"}],"show_social":true,"title":"Contacto"}]` | `{"default":6,"max":8,"min":0,"sorting_label_field":null}` | sí | `null` |
| `columns.title` | `text` | no | `Columna` | `null` | no | `columns` |
| `columns.col_body` | `richtext` | no | — | `null` | no | `columns` |
| `columns.links` | `group` | no | `undefined` | `{"default":null,"max":12,"min":0,"sorting_label_field":null}` | sí | `columns` |
| `columns.links.text` | `text` | no | `Enlace` | `null` | no | `columns.links` |
| `columns.links.link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `columns.links` |
| `columns.show_social` | `boolean` | no | `false` | `null` | no | `columns` |
| `social_facebook` | `link` | no | `{"open_in_new_tab":true,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `null` |
| `social_x` | `link` | no | `{"open_in_new_tab":true,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `null` |
| `social_instagram` | `link` | no | `{"open_in_new_tab":true,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `null` |
| `social_youtube` | `link` | no | `{"open_in_new_tab":true,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `null` |
| `copyright` | `text` | no | `© 2026 Universidad Anáhuac México. Todos los derechos reservados.` | `null` | no | `null` |
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
{% dnd_module path="../modules/pie-de-pagina" %}
{% end_dnd_module %}
```
