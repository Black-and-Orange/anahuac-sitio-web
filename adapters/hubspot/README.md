# Adapter: HubSpot

Adapter para proyectos con `project.json → platform = "hubspot"`. Convenciones: `docs/platforms/hubspot.md`.

## Estructura esperada
```
hubspot/theme/
├── theme.json          # style fields = tokens primitivos
├── css/tokens.css      # tokens semánticos
├── templates/          # plantillas de página (HubL)
└── modules/
    └── <x>.module/     # module.html + fields.json + module.css + meta.json
```

## Setup
- [ ] Cuenta **CMS Hub** + **sandbox / developer test account**.
- [ ] `npm i -g @hubspot/cli` → `hs init` → `hs auth`.
- [ ] `hs watch hubspot/theme <dest>` para dev local.

## Estado
Poblado. `theme/` es el espejo versionado del theme `anahuac-mexico` del portal
**3807214** (`anahuac-mx`), traído con `hs cms fetch` el 2026-07-30.

- Header y footer globales: `theme/modules/encabezado.module` y
  `theme/modules/pie-de-pagina.module`. **No se crean nuevos**; las plantillas
  los invocan con `{% module … path="../modules/encabezado" %}`.
- CSS y JS compartidos: `theme/css/main.css` y `theme/js/main.js`. Los módulos
  llevan `module.css` / `module.js` vacíos a propósito (convención del theme).
- Módulos de la LP de Apoyos Económicos: `theme/modules/apoyos-*.module`.
- Plantilla de esa LP: `theme/templates/apoyos-economicos.html`. Trae los 9
  módulos precargados en el `dnd_area`; Marketing los reordena sin tocar código.

### Subir cambios
```
hs cms upload adapters/hubspot/theme/modules/<x>.module anahuac-mexico/modules/<x>.module --account=3807214
hs cms upload adapters/hubspot/theme/css/main.css anahuac-mexico/css/main.css --account=3807214
hs cms lint adapters/hubspot/theme/modules/<x>.module --account=3807214   # valida HubL
```

### ⚠️ Rutas de imagen: ni en CSS relativo ni hardcodeadas en el JS
HubSpot reescribe las `url(../images/…)` del CSS a una ruta de
`hub_generated/template_assets/…` que **no existe** → 404. Pásalas como custom
property desde el módulo:

```hubl
{% set estilo = estilo ~ "--foto:url(" ~ get_asset_url("../../images/x.jpg") ~ ");" %}
```
```css
.elemento { background-image: var(--foto); }
```

En el JS no hardcodees rutas de la maqueta local (`assets/…`): derívalas del
`src` de un `<img>` que HubSpot ya resolvió con `get_asset_url`.

### ⚠️ Los repeaters van a nivel raíz de `fields.json`
Un `group` con `occurrence` **anidado dentro de otro grupo** y con array de
`default` se ve bien al insertar el módulo, pero el editor no hidrata esos
defaults en su estado de formulario: a la **primera edición** guarda el repeater
vacío y se pierden todos los items. Con `occurrence.min: 1` encima aparece un
item fantasma en blanco.

Los 18 repeaters que funcionan en este portal están todos a nivel raíz y con
`min: 0`. Si necesitas agrupar controles junto al repeater (un «mostrar/ocultar»,
un título), déjalos en su propio grupo y **el repeater aparte, a nivel raíz**.

### ⚠️ Nada de macros HubL en los módulos
Si un módulo desaparece **entero** (imagen incluida) en vez de mostrarse a
medias, no es marcado roto: es un error de ejecución del HubL, y HubSpot no
imprime nada. Un `{% macro %}` invocado con un atributo que no existe en el item
guardado es la causa típica. Usa condicionales en línea; ningún módulo estable
de este theme define macros.

Regla para distinguir los dos fallos:
- contenido cortado a partir de cierto punto → marcado roto (ver `<>` abajo)
- módulo completo en blanco → error de ejecución

### ⚠️ Nunca emitas una etiqueta HTML directo desde un field
HubSpot **no rellena el default de un campo nuevo en los items que un repeater
ya tenía guardados**: el valor llega vacío. Si el HubL hace `<{{ x.tag }}>`, se
emite `<>`, el navegador lo trata como marcado roto y **se come el resto de la
tarjeta** — parece que el contenido "se borró".

Usa siempre un respaldo duro:
```hubl
<{{ item.titulo_tag|default('h3', true) }}>…</{{ item.titulo_tag|default('h3', true) }}>
```
`default(v, true)` trata la cadena vacía como ausente, que es justo este caso.
Lo mismo aplica a cualquier atributo o nombre de etiqueta que venga de un field.

### ⚠️ El Design Manager no acepta `.webp`
`hs cms upload` **descarta los `.webp` en silencio**: la carpeta se sube con
「SUCCESS」 pero los archivos no llegan (subir uno suelto falla con
`is not a path to a file or folder`). Por eso el theme solo tiene `jpg`, `png`
y `svg`. Antes de subir imágenes, convierte: fotos a JPEG (calidad ~82,
progresivo) y gráficos con transparencia a PNG. Verifica siempre con
`hs cms list <carpeta>` que los archivos existan; el SUCCESS no lo garantiza.

### Portar el CSS de una página nueva
`scripts/port-css-a-theme.mjs` convierte un CSS de página (px crudos) a la
convención del theme: `px -> rem`, breakpoints `-> em` y `font-size -> var(--…)`.
Es lo que exige `npm run check:tokens` sobre `adapters/`.
