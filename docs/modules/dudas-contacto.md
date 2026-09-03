# `dudas-contacto`

> Documento incremental generado a partir del módulo físico. La evidencia entre bloques AUTO se actualiza a demanda; la prosa humana fuera de ellos se conserva.

## Identidad y evidencia técnica

<!-- AUTO:technical:START -->
| Dato | Evidencia |
|---|---|
| Nombre físico | `dudas-contacto.module` |
| Label HubSpot | Dudas / Contacto — Anáhuac |
| Estado | `Approved` |
| Familia funcional | `cta` |
| Tier del equipo | `reusable` |
| Global técnico (meta.global) | `false` |
| Categorías HubSpot | `FORMS_AND_BUTTONS` |
| Content types | `LANDING_PAGE`, `SITE_PAGE` |
| Capacidades curadas | `bloque-contacto`, `contenido-promocional`, `doble-cta`, `imagen` |
| Variantes verificadas | — |
| Notas curatoriales | meta.categories: FORMS_AND_BUTTONS. No contiene un field de formulario ni un elemento form; funcionalmente es un CTA de contacto. |
| Páginas conocidas | `Home` |

### Relaciones curadas

- `candidato` → `admision-cta` — Ambos son cierres promocionales con encabezado, texto y dos CTA; dudas-contacto añade imagen y usa un contrato de fields plano.

### Candidatos semánticos

> Un candidato es una invitación a comparar evidencia; no implica compatibilidad ni decide REUTILIZAR / ADAPTAR / CREAR.

- [`admision-cta`](./admision-cta.md): score 0.582; evidencia: `css`, `dependencias`, `fields`, `html`, `html/estructura`, `html/raiz`, `metadata`, `metadata-plataforma`, `relacion-curada`, `responsive`; coincidencias: `familia:cta`, `contenido-promocional`, `doble-cta`, `content_type:LANDING_PAGE`, `content_type:SITE_PAGE`, `0\|group\|optional\|single\|standalone`.

### HTML, clases y hooks

- Raíces: `section`.
- Clases raíz: `.questions`, `.section-pad`.
- Elementos: `a:2`, `div:3`, `dynamic:2`, `img:1`, `section:1`.
- Estructura padre→hijo: `div>a:2`, `div>div:2`, `div>dynamic:2`, `div>img:1`, `section>div:1`.
- Jerarquías observadas: `section:1`, `section>div:1`, `section>div>div:1`, `section>div>div>div:1`, `section>div>div>div>a:2`, `section>div>div>dynamic:2`, `section>div>img:1`.
- Clases: `.btn`, `.btn-dark`, `.btn-light`, `.button-row`, `.centered`, `.container`, `.questions`, `.questions-card`, `.reveal`, `.section-pad`.
- IDs: `#contacto`.
- Data attributes: `data-reveal`.
- Formulario operativo observado: no.

### CSS, JS, responsive, assets y dependencias

- module.css: `empty`; selectores propios/compartidos relevantes: `.adm-cta-inner .button-row`, `.adm-hero-info .button-row`, `.apo-hero-info .button-row`, `.button-row`, `.button-row .btn`, `.button-row.centered`, `.oferta-hero-info .button-row`, `.questions`, `.questions .btn-dark`, `.questions .btn-light`, `.questions h2`, `.questions p`, `.questions-card`, `.questions-card .button-row`, `.questions-card > div`, `.questions-card > img`, `.questions::before`, `.step-panel .button-row`.
- module.js: `empty`; hooks propios/compartidos relevantes: —.
- CSS compartido observado: `css/main.css`.
- JS compartido observado: —.
- Responsive: `@media (max-width: 40em)`, `@media (max-width: 73.75em)`, `@media (max-width: 90em)`.
- Assets: `../../images/dudas.jpg`.
- Dependencias CSS: `css/main.css`.
- Dependencias JS: —.

### Discrepancias y pendientes técnicos

_Sin discrepancias técnicas detectadas._
<!-- AUTO:technical:END -->

## Descripción y propósito

`dudas-contacto` es el cierre del Home: una tarjeta ancha con fotografía a la izquierda y,
solapado sobre ella, un panel centrado con encabezado, párrafo y dos botones. Deriva
literalmente de `<section class="questions section-pad" id="contacto">` de la página
aprobada `Inicio.html` (líneas 504-520), incluidos los textos por default y los dos CTA
«Contactar» y «Agenda tu visita».

**Su categoría de HubSpot dice `FORMS_AND_BUTTONS`, pero el módulo no tiene formulario.**
Es la discrepancia declarada en el registry y en TAXONOMY, y conviene tomarla en serio
porque es exactamente el tipo de señal que se malinterpreta al decidir si reutilizar.
Verificado en la fuente: `module.html` no contiene ningún elemento `<form>` ni un tag
`{% form %}`, y `fields.json` no declara ningún field `type: form` —sus tipos son `image`,
`text`, `choice`, `link` y `color`—. El generador lo confirma con
«Formulario operativo observado: no». Lo que hay son dos anclas
(`a.btn.btn-dark` y `a.btn.btn-light`) que llevan a donde apunte el editor. La categoría
sólo decide en qué cajón del editor de HubSpot aparece el módulo; no describe su
comportamiento. Si lo que se necesita es captura real de datos, los únicos módulos del
inventario que la tienen son `admision-formulario` y `apoyos-formulario`, que sí declaran
`grupo_formulario.formulario` de `type: form` y emiten el tag de HubSpot.

El módulo no tiene JS: `js/main.js` no lo lista como dependencia y su bloque AUTO reporta
«JS compartido observado: —». Lo único dinámico es el `[data-reveal]` de la tarjeta, que sí
depende del observador de `main.js` cuando el template lo carga.

Los diez fields de `grupo_estilos` se convierten en custom properties `--home-dudas-*` en el
`style` de la sección y los consume `main.css` en el bloque «Módulo 9 · Dudas / Contacto»
(5102-5121), con fallback al token.

**Discrepancia verificada y no corregida aquí:** ese bloque redefine `.questions h2` y
`.questions p` **fuera de toda media query y después** de las reglas responsive
(`main.css` 2442 y 4134), así que gana por orden en la cascada y anula el escalado móvil del
encabezado. Además `grupo_estilos.tamano_heading` trae default `heading-2-size` (90 px según
`tokens.css`), mientras la maqueta aprobada define `.questions h2` en 40 px de escritorio y
28 px en móvil (`styles.css` 1830 y 2935) y la regla base del theme (línea 2386) usa
`--heading-3-size`, que también son 40 px. Con los campos vacíos, el render de este módulo
**no** reproduce el tamaño del diseño aprobado. Se documenta como riesgo; corregirlo implica
tocar `main.css` o el default del field, fuera del alcance de este documento.

## Cuándo usar

- Cierre de una `LANDING_PAGE` o `SITE_PAGE` que necesita exactamente esta composición:
  banda de color, tarjeta con imagen a un lado y panel de texto solapado con dos CTA
  centrados. Si el diseño no lleva imagen, no es este módulo (`.questions-card` es una grid
  de dos columnas y el `> img` es una de ellas).
- Cuando los dos CTA son enlaces de rol fijo —primario `btn-dark`, secundario `btn-light`—
  y ambos se muestran u ocultan simplemente dejando vacío `primary_text` o `secondary_text`.
- Cuando cada página necesita su propio contenido: `tier: reusable` con
  `meta.global: false`.
- Desde un template que cargue `css/tokens.css` y `css/main.css`, como
  `templates/pagina.html` (línea 102). `main.js` no es obligatorio para el comportamiento,
  pero sí para que `[data-reveal]` reciba `.is-visible` si el `<html>` no lleva
  `class="no-js"`.
- Se admiten varias instancias por página: no hay JS propio ni selectores de documento. Lo
  único que se duplicaría es `id="contacto"`, escrito en el marcado.
- Si la conversión se resuelve enviando a otra página o a un formulario que vive en otro
  módulo. Este bloque **invita**; no captura.

## Cuándo no usar

- **Si hace falta capturar datos.** No hay formulario, pese a la categoría
  `FORMS_AND_BUTTONS`. En la evaluación es la brecha `falta formulario operativo` →
  **bloqueante** (§9): no se cierra con marcado adicional. Van `admision-formulario` o
  `apoyos-formulario`.
- **Si se evalúa un cierre para Proceso de admisión, compara primero con `admision-cta`**
  (candidato 0.582,
  relación `candidato` curada en ambos sentidos) —y a la inversa—. Comparten familia `cta`,
  `contenido-promocional`, `doble-cta` y las clases compartidas `.button-row` / `.btn`, que es
  lo que dispara la coincidencia en la dimensión `css`. Las brechas concretas:
  - *Fields*: **no comparten ni un solo path**. Aquí el contrato es plano (`heading`,
    `description`, `primary_text`/`primary_link`, `secondary_text`/`secondary_link`,
    `image`); allá está agrupado (`grupo_contenido.heading`, `grupo_contenido.texto`,
    `grupo_boton1.*`, `grupo_boton2.*`) con un boolean `mostrar` por botón y un
    `texto_tag` dentro del enlace. Como §10 prohíbe renombrar fields, unificarlos no es un
    ajuste: es recapturar el contenido de todas las páginas vivas.
  - *Capacidad*: `admision-cta` cura `visibilidad-independiente-de-botones` y
    `roles-primario-secundario`; este módulo cura `imagen` y `bloque-contacto`. En ambos
    sentidos hay `falta capacidad:` → corta la cadena en el paso 2.
  - *Marcado*: `section.questions#contacto > div.container.questions-card > (img | div)`
    frente a `section.adm-cta#solicitud > .container > .adm-cta-inner`. Aquí `.container` y
    `.questions-card` van en **el mismo elemento** y `main.css` estiliza por hijo directo
    (`.questions-card > img`, `> div`, líneas 2367-2384): el orden imagen→panel y el
    parentesco directo son contrato. Allá no hay imagen y el `[data-reveal]` se reparte en
    tres elementos (h2, p y `.button-row`) en vez de uno. Brechas de `html/raíz` y
    `html/jerarquía` → **bloqueantes**.
  - *Botones*: `btn-dark`/`btn-light` contra `btn-orange`/`btn-outline`, con reglas propias
    en `main.css` (5114-5121 contra 5150-5158). Cambiarlas es CSS transversal.
  - *Metadata de plataforma*: `BODY_CONTENT` allá, `FORMS_AND_BUTTONS` aquí; esa sí es
    **adaptable** (aditiva en `meta.json`). Y `admision-cta` es `page-specific`: usarlo fuera
    de su página es un cambio de alcance (§11).
- **Si se necesita un tercer botón, botones repetibles o variantes de botón.** El contrato
  tiene exactamente dos anclas con rol fijo; un tercero exige field y CSS nuevos.
- **Si el encabezado debe respetar el escalado móvil del diseño aprobado.** Ver la
  discrepancia documentada arriba: hoy `.questions h2` toma su tamaño de
  `--home-dudas-heading-size` en todos los anchos.
- **Si el template destino no marca `<html class="no-js">` y además no carga `js/main.js`.**
  Sin la clase de rescate (`main.css` 189), `[data-reveal]` nunca recibe `.is-visible` y la
  tarjeta —que es todo el contenido de la sección— se queda en `opacity: 0`.

## Fields editables

<!-- AUTO:fields:START -->
| Path completo | Tipo | Required | Default | Occurrence | Repeater | Padre |
|---|---|---:|---|---|---:|---|
| `image` | `image` | no | `{"alt":"Estudiante Anáhuac en aula","src":""}` | `null` | no | `null` |
| `heading` | `text` | no | `¿Tienes alguna duda de nuestra universidad?` | `null` | no | `null` |
| `heading_tag` | `choice` | no | `h2` | `null` | no | `null` |
| `description` | `text` | no | `Nuestro equipo de asesores preuniversitarios en la Universidad Anáhuac México está aquí para guiarte en cada paso hacia tu futuro brillante. ¡Contáctanos hoy y comienza a trazar el camino hacia tus sueños!` | `null` | no | `null` |
| `description_tag` | `choice` | no | `p` | `null` | no | `null` |
| `primary_text` | `text` | no | `Contactar` | `null` | no | `null` |
| `primary_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `null` |
| `secondary_text` | `text` | no | `Agenda tu visita` | `null` | no | `null` |
| `secondary_link` | `link` | no | `{"open_in_new_tab":false,"url":{"href":"#","type":"EXTERNAL"}}` | `null` | no | `null` |
| `grupo_estilos` | `group` | no | `undefined` | `null` | no | `null` |
| `grupo_estilos.color_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_card_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_heading` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.tamano_heading` | `choice` | no | `heading-2-size` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.tamano_texto` | `choice` | no | `paragraph-size` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton1_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton1_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton2_fondo` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
| `grupo_estilos.color_boton2_texto` | `color` | no | `{"color":"","opacity":100}` | `null` | no | `grupo_estilos` |
<!-- AUTO:fields:END -->

## Contrato de compatibilidad

Recorrido por las dimensiones que evalúa `evaluateCompatibility` (`metadata`, `fields`,
`html`, `css`, `js/hooks`, `variantes`, `responsive`, `assets`, `dependencias`, `paginas`),
separando contrato duro de margen real. Las severidades siguen la tabla de `README.md` §9.

**`metadata`.** Duro: las capacidades observables `bloque-contacto`, `doble-cta`, `imagen` y
`contenido-promocional`; una brecha `falta capacidad:` sobre `imagen` o `doble-cta` responde
«no hace lo mismo» y corta la cadena en el paso 2. `estado: Approved` es curaduría del
registry, no confirmación del portal. `tier: reusable` con
`meta.global: false` son coherentes (0 discrepancias). Solo nota: `familia: cta`. Flexible:
`content_types` y —esto es lo importante aquí— `categories`. `FORMS_AND_BUTTONS` es
**evidencia declarada, no comportamiento**: se conserva sin reinterpretar (TAXONOMY,
«Categorías editoriales»), y añadir o pedir otra categoría es aditivo en `meta.json`. La
capacidad que sí sería bloqueante —captura de datos— no se resuelve por metadata sino por
`html`, con la brecha `falta formulario operativo`.

**`fields`.** Duro: el contrato es **plano y sin repeaters** (`Repeater: no` y
`Occurrence: null` en los veinte paths). `primary_link` y `secondary_link` son `type: link`
y el HubL lee `…url.href`: convertirlos a `text` rompe. `image` es `type: image` y su vacío
cae a `../../images/dudas.jpg`, así que la columna izquierda nunca queda hueca. Ningún field
es `required`, y vaciar `primary_text` o `secondary_text` es el mecanismo previsto para
ocultar un botón —no hay boolean de visibilidad, a diferencia de `admision-cta`—. Introducir
un repeater de botones cambiaría la firma `path|tipo|required|repeater|occurrence|default`
de contenido ya guardado: **bloqueante** (§9, §10). La firma incluye todos los defaults de
texto, así que cambiarlos produce una brecha bloqueante. Ampliar las listas de `heading_tag`,
`description_tag`, `grupo_estilos.tamano_heading`
(`size-64`, `size-70`, `heading-2-size`, `heading-1-size`) y `tamano_texto`
(`paragraph-size`, `heading-6-size`, `heading-5-size`, `size-22`); ampliarlas es aditivo. Un
field nuevo debe entrar **opcional y con default** (§10).

**`html`.** Duro: raíz `<section class="questions section-pad">` —`.questions` es lo que
enlaza con `main.css` (2339-2396 y 5102-5121)—; el hijo único
`div.container.questions-card`, con **las dos clases en el mismo elemento**; y sus dos hijos
**directos** en orden `img` → `div`, porque `main.css` estiliza con `>` y aplica
`margin-left: -11.875rem` al `div` para lograr el solape (2358-2384). Dentro del panel,
`.button-row.centered` con `a.btn.btn-dark` y `a.btn.btn-light`. `.reveal` + `[data-reveal]`
van en la propia tarjeta: es el único contenido de la sección, así que si falta el par, la
sección entera queda invisible. Flexible: `id="contacto"`, que no aparece en `main.css` ni
en `main.js` y sólo sirve de ancla. `formulario-operativo: false` es un hecho verificado del
módulo, no un pendiente: cerrar esa brecha es crear otro módulo.

**`css`.** `module.css` está **vacío**: *todos* los selectores del bloque AUTO viven en
`theme/css/main.css`, así que cualquier brecha `falta selector:` es **bloqueante** —obliga a
editar CSS transversal— y dar contenido al `module.css` también lo es, por convención del
theme (§9). Alcance: `.questions*` sólo lo emite este módulo (verificado), pero
`.button-row`, `.button-row.centered` y `.button-row .btn` (513-527 y 2398-2412) los
comparten otros ocho módulos —`hero`, `admision-cta`, `admision-hero`, `admision-pasos`,
`admision-propedeuticos`, `apoyos-detalle`, `apoyos-hero`, `oferta-hero`—, y por eso los
selectores `.adm-cta-inner .button-row`, `.adm-hero-info .button-row`,
`.apo-hero-info .button-row`, `.oferta-hero-info .button-row` y `.step-panel .button-row`
aparecen en la evidencia de este doc: son de `main.css`, no de este módulo. Tocar
`.button-row` es un cambio de nueve módulos.

**`js`/`hooks`.** `module.js` está vacío y el bloque AUTO reporta «hooks propios/compartidos
relevantes: —» y «JS compartido observado: —»: **este módulo no tiene comportamiento propio
en `js/main.js`**. La única dependencia real de JS es genérica del theme: el observador de
`[data-reveal]` (78-150). Duro: emitir ese atributo junto con la clase `.reveal`. Una brecha
`falta hook:` seguiría siendo **bloqueante** por construcción (no hay `module.js` con
contenido en todo el theme), pero hoy no hay ninguno que cerrar. Flexible: nada.

**`variantes`.** `registry.variantes` vacío y «Variantes verificadas: —». Los diez colores y
los dos selectores de tamaño son configuración por instancia, no variantes en el sentido de
TAXONOMY. Añadir una es **adaptable** y obliga a declararla en `registry.variantes` y aquí.

**`responsive`.** Ninguna regla es propia; las tres del bloque AUTO viven en `main.css` y
son específicas de esta sección: `@media (max-width: 90em)` (2414-2427: la grid se estrecha y
la imagen baja a 23.75 rem), `@media (max-width: 73.75em)` (2429-2439: `align-items: stretch`
y panel recolocado) y `@media (max-width: 40em)` (2442-2455, más 4134: imagen a 15.625 rem,
panel apilado y botones centrados). Toda brecha `falta regla responsive:` es, por origen,
**bloqueante**. Advertencia ya señalada: las reglas de tamaño de `.questions h2` y
`.questions p` de esas media queries están anuladas por el bloque de custom properties de
5102-5121, que va después y sin condición.

**`assets`.** Una sola referencia literal: `../../images/dudas.jpg`, respaldo de `image`.
Verificado: el archivo existe en `theme/images/`. Sustituirlo o añadir otros es
**adaptable**, recordando que el Design Manager descarta `.webp` en silencio.

**`dependencias`.** Declaradas: `css/main.css`; sin dependencia de JS. Ningún módulo del
theme usa `require_css`/`require_js`; la carga es explícita en el template. Según §9,
`css/main.css` es **solo nota** mientras el template destino lo cargue —aunque en la
práctica sin él no hay layout— y pasaría a **adaptable** si hubiera que declarar un
`require_*`.

**`paginas`.** Uso observado: `Home`, derivado de `templates/pagina.html:102`;
`paginas_portal` vacío. Reutilizarlo en otra página produce `uso objetivo no observado:`
(solo nota); tocarlo produce `impacto existente a revisar: Home` y obliga al análisis de
impacto de §10, recordando que el `dnd_area` no se propaga a páginas ya creadas: cada página
guarda su snapshot.

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
{% dnd_module path="../modules/dudas-contacto" %}
{% end_dnd_module %}
```
