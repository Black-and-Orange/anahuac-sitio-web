# `admision-cta`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `admision-cta.module` |
| Label HubSpot | Admisión · CTA solicitud — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `cta` |
| Tier del equipo | `page-specific` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `BODY_CONTENT` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `contenido-promocional`, `doble-cta`, `roles-primario-secundario`, `visibilidad-independiente-de-botones` |
| Variantes verificadas | — |
| Notas curatoriales | Los dos botones tienen grupos independientes porque cumplen roles primario y secundario; no son un repeater intercambiable. |
| Páginas conocidas | `Proceso de admisión` |

### Relaciones curadas

- `candidato` → `dudas-contacto` — Ambos son cierres promocionales con encabezado, texto y dos CTA; admision-cta no incluye imagen y separa los botones por rol.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`dudas-contacto`](./dudas-contacto.md): score 0.582; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `relacion-curada`, `responsive`; coincidencias: `familia:cta`, `contenido-promocional`, `doble-cta`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`, `0\|group\|optional\|single\|standalone`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.adm-cta`, `.section-pad`.
- Elementos: `a:2`, `div:3`, `dynamic:4`, `section:1`, `span:2`.
- Estructura padre→hijo: `a>dynamic:2`, `a>span:2`, `div>a:2`, `div>div:2`, `div>dynamic:2`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:1`, `section>div>div>div:1`, `section>div>div>div>a:2`, `section>div>div>div>a>dynamic:2`, `section>div>div>div>a>span:2`, `section>div>div>dynamic:2`.
- Clases: `.adm-cta`, `.adm-cta-inner`, `.btn`, `.btn-orange`, `.btn-outline`, `.button-row`, `.container`, `.reveal`, `.section-pad`.
- IDs: `#solicitud`.
- Data attributes: `data-reveal`, `data-reveal{%`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.adm-cta`, `.adm-cta .btn-orange`, `.adm-cta .btn-outline`, `.adm-cta .btn-outline:hover`, `.adm-cta .container`, `.adm-cta-inner`, `.adm-cta-inner .button-row`, `.adm-cta-inner h2`, `.adm-cta-inner p`, `.adm-cta::before`, `.adm-hero-info .button-row`, `.apo-hero-info .button-row`, `.button-row`, `.button-row .btn`, `.button-row.centered`, `.oferta-hero-info .button-row`, `.questions-card .button-row`, `.step-panel .button-row`.
- module.js: `empty`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: `@media (max-width: 40em)`.
- Assets: —.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: —.

### Discrepancias y pendientes técnicos

_Sin discrepancias técnicas detectadas._
<!-- AUTO:technical:END -->

## Descripción y propósito

`admision-cta` es el cierre promocional intermedio de Proceso de admisión: presenta un
encabezado, un texto de apoyo y dos acciones de rol fijo sobre un fondo morado con trama.
Porta la sección `.adm-cta#solicitud` de `proceso-de-admision.html:426-437`; la plantilla
versionada lo coloca en su propio `dnd_section` (`templates/proceso-de-admision.html:80-84`).

Los botones no son un repeater. `grupo_boton1` siempre representa la acción primaria
`.btn-orange` y `grupo_boton2` la secundaria `.btn-outline`; cada grupo tiene su propio
`mostrar`, texto, etiqueta opcional, color y enlace. El HubL solo emite `.button-row` si
alguno está visible y además tiene texto. Los seis fields de `grupo_estilos` generan
custom properties `--admision-cta-*` en la raíz; los colores de texto definidos dentro
de `grupo_contenido` y los botones tienen además estilos inline.

## Cuándo usar

- En el cierre de una solicitud que requiera exactamente dos acciones jerarquizadas,
  primaria naranja y secundaria outline, con visibilidad independiente.
- Con contenido breve y centrado: `.adm-cta-inner` está limitado a `40rem` y el texto
  usa `text-wrap: balance` (`main.css:7596-7615`).
- Desde una plantilla que cargue `css/main.css`; no tiene comportamiento propio ni
  dependencia JS específica. La animación genérica `[data-reveal]` se degrada de forma
  segura gracias a `html.no-js`.
- Como instancia local: `tier: page-specific` y `meta.global: false`. Llevarlo a otra
  página requiere decisión de alcance, no se deduce de la familia `cta`.

## Cuándo no usar

- No para captura de datos: no hay `<form>` ni field `form`; los botones solo navegan.
- No cuando las acciones sean repetibles o intercambiables. El orden y las clases de los
  dos grupos están cableados al HTML y al CSS.
- No como sustituto automático de `dudas-contacto`. Es candidato 0.582 por intención,
  dos CTA y CSS compartido, pero aquel agrega imagen, usa fields planos y otra raíz y
  jerarquía. Compara las diez dimensiones antes de decidir.
- No dos veces en una página sin cambiar el ancla fija `id="solicitud"`.
- No si el segundo botón necesita color de fondo administrable: solo existe
  `grupo_estilos.color_boton2_texto`; el fondo/hover viene de `main.css:7622-7629`.

## Fields editables

<!-- AUTO:fields:START -->
| Path completo | Tipo | Required | Default | Occurrence | Repeater | Padre |
|---|---|---:|---|---|---:|---|
| `grupo_contenido` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_contenido.heading` | `text` | no | `Comienza tu solicitud hoy` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_tag` | `choice` | no | `h2` | `null` | no | `grupo_contenido` |
| `grupo_contenido.heading_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_contenido.texto` | `text` | no | `El primer paso es el más importante. Regístrate ahora y avanza en tu camino.` | `null` | no | `grupo_contenido` |
| `grupo_contenido.texto_tag` | `choice` | no | `p` | `null` | no | `grupo_contenido` |
| `grupo_contenido.texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_contenido` |
| `grupo_boton1` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_boton1.mostrar` | `boolean` | no | `true` | `null` | no | `grupo_boton1` |
| `grupo_boton1.texto` | `text` | no | `Iniciar proceso` | `null` | no | `grupo_boton1` |
| `grupo_boton1.texto_tag` | `choice` | no | `ninguna` | `null` | no | `grupo_boton1` |
| `grupo_boton1.texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_boton1` |
| `grupo_boton1.enlace` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `grupo_boton1` |
| `grupo_boton2` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_boton2.mostrar` | `boolean` | no | `true` | `null` | no | `grupo_boton2` |
| `grupo_boton2.texto` | `text` | no | `Hablar con un asesor` | `null` | no | `grupo_boton2` |
| `grupo_boton2.texto_tag` | `choice` | no | `ninguna` | `null` | no | `grupo_boton2` |
| `grupo_boton2.texto_color` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_boton2` |
| `grupo_boton2.enlace` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `grupo_boton2` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto_principal` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto_secundario` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton1_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton1_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton2_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
<!-- AUTO:fields:END -->

## Contrato de compatibilidad

- **metadata** — Las cuatro capacidades describen el comportamiento observable. `familia:
  cta`, `tier: page-specific`, `meta.global: false`, categoría, content types y estado son
  notas de búsqueda, alcance y plataforma; no deciden compatibilidad. `Approved` es
  curaduría del registry, no confirmación de publicación.
- **fields** — Son duros los 26 paths, tipos y grupos no repetibles. En particular,
  `grupo_boton1` y `grupo_boton2` no se pueden colapsar a un repeater sin recapturar
  contenido. La firma exacta incluye `required`, `single/repeater`, `occurrence` y
  `default`: cambiar cualquiera produce brecha bloqueante para el comparador. Solo es
  aditivo incorporar un field nuevo opcional con default y lectura tolerante.
- **html** — Contrato: `section.adm-cta#solicitud > .container > .adm-cta-inner`, seguido
  por heading, texto y `.button-row`; `.btn-orange` precede a `.btn-outline`.
  `[data-reveal]` aparece separadamente en heading, texto y fila. El AUTO espurio
  `data-reveal{%` procede del parser sobre HubL; no es un atributo real ni debe exigirse.
- **css** — `module.css` está vacío. Todas las reglas viven en `main.css`, incluidas las
  específicas `5146-5158` y `7564-7629` y las compartidas `.button-row`/`.btn`.
  Cualquier brecha de selector es bloqueante por origen transversal; dar contenido al
  `module.css` vacío también rompe la convención del theme.
- **js/hooks** — `module.js` está vacío y no hay hooks específicos en `main.js`. El
  único comportamiento es el reveal genérico; no debe inventarse dependencia JS por el
  nombre CTA.
- **variantes** — No hay variantes registradas. Los roles de botón y sus booleanos son
  partes del contrato, no variantes. Una nueva variante debe ser aditiva y declarada.
- **responsive** — El AUTO observa `@media (max-width: 40em)` desde CSS compartido; por
  su origen, una brecha responsive es bloqueante. El layout base ya es una columna.
- **assets** — No usa assets. La trama procede del token CSS `--grid-lines`, no de un
  archivo del módulo.
- **dependencias** — Solo `css/main.css`, cargado por la plantilla. La dependencia es
  nota si el destino ya la satisface; funcionalmente, sin ella se pierde todo el diseño.
- **paginas** — Uso observado: `Proceso de admisión`. Un uso nuevo exige revisar alcance;
  una modificación exige analizar su impacto en esa página. Candidato no significa
  compatible: la persona decide REUTILIZAR / ADAPTAR / CREAR tras comparar brechas.

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
{% dnd_module path="../modules/admision-cta" %}
{% end_dnd_module %}
```
