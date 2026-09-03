# Módulos HubSpot de Anáhuac — guía operativa

Guía de uso de la capa de catálogo y documentación que vive en `docs/modules/`.
Complementa `AGENTS.md` (instrucciones maestras entre agentes), `docs/change-protocol.md`
(cambios no destructivos), `docs/naming.md` (taxonomía de nombres) y
[`TAXONOMY.md`](./TAXONOMY.md) (vocabulario de módulos). No sustituye ni reescribe
ninguno de ellos: cuando haya conflicto, gana el documento base y esta guía se corrige.

## 1. Alcance

- Exclusivo de **Universidad Anáhuac México**, portal **`3807214`** (`anahuac-mx`),
  theme `anahuac-mexico` espejado en `adapters/hubspot/theme/`.
- **No** es una librería multi-proyecto ni multi-portal. Otro cliente u otro portal no
  reutiliza este `registry.json` ni este catálogo.
- Inventario vigente: **34 módulos físicos** en `adapters/hubspot/theme/modules/*.module`,
  **34 registros** en [`registry.json`](./registry.json) y **34 documentos**
  `docs/modules/<nombre>.md`. Cero faltantes y cero huérfanos.
- Templates versionados: `pagina.html` (Home), `proceso-de-admision.html`,
  `apoyos-economicos.html` y `pagina-interna.html`. **Oferta académica está viva en el
  portal y su template no está versionado**: sus módulos declaran el uso con
  `paginas_portal`.

### Qué hay en este directorio

| Archivo | Quién lo escribe | Para qué |
|---|---|---|
| `README.md` | humano | esta guía operativa |
| [`TAXONOMY.md`](./TAXONOMY.md) | humano | fuentes de autoridad, categorías, tiers, familias, capacidades, variantes, relaciones y estados |
| [`registry.json`](./registry.json) | humano | metadata curada por módulo: `estado`, `tier`, `familia`, `capacidades`, `variantes`, `relaciones`, `notas`, `paginas_portal` |
| [`CATALOG.md`](./CATALOG.md) | generado | inventario completo con evidencia, candidatos y discrepancias. **No editar a mano** |
| `<nombre>.md` | mixto | doc por módulo. Los bloques `AUTO:technical` y `AUTO:fields` los escribe el generador; todo lo demás es prosa humana |

## 2. Fuente de verdad

- **Git es la fuente de verdad del código.** `adapters/hubspot/theme/` es el espejo
  versionado del theme; los módulos, templates, CSS y JS se editan aquí.
- **HubSpot es el entorno de publicación.** El portal refleja lo aprobado en Git; no lo
  define. El repo nunca se sobrescribe automáticamente con lo que devuelva el portal, y
  toda diferencia repo↔portal se **reporta antes** de cualquier sincronización
  destructiva (§5, §6).
- `registry.json` es la fuente de verdad de la metadata humana; `meta.json` y
  `fields.json` del módulo son la fuente de la evidencia técnica.

## 3. Flujo canónico

```
Git → revisión → publicación
```

1. **Git.** Cambio aditivo en `adapters/hubspot/theme/`, con su documentación en
   `docs/modules/<nombre>.md` y su metadata en `registry.json`.
2. **Revisión.** Validator + revisión humana (`docs/human-review.md`) y la Definición de
   Hecho de `AGENTS.md` §4, incluyendo el análisis de impacto sobre las páginas que ya
   usan el módulo.
3. **Publicación.** Solo después de la revisión y solo pasando el guardrail de alto
   riesgo (§15). Se hace con `hs cms upload` según `adapters/hubspot/README.md`; nunca es
   un paso automático de este repositorio.

No existe un cuarto paso «traer del portal». Si algo llega desde el portal, es material
de entrada a revisar (§6), no una actualización del repo.

## 4. Recorrido: dar de alta un módulo nuevo

Secuencia completa, de la necesidad al portal. Cada paso enlaza al detalle.

1. **Detectar la necesidad** a partir del HTML aprobado o del spec de la página
   (`specs/<slug>.md`). El diseño aprobado es la fuente visual y funcional.
2. **Buscar lo que ya existe**, primero en el catálogo y al final contra el portal (§7).
3. **Evaluar candidatos** con toda la evidencia, no por nombre (§8).
4. **Decidir** con la cadena y las severidades de §9: `REUTILIZAR > ADAPTAR > CREAR`.
   Si la decisión es REUTILIZAR o ADAPTAR, el recorrido termina aquí y continúa en §10.
5. **Implementar en `adapters/hubspot/theme/modules/<nombre>.module/`** con el naming de
   §12, usando solo tokens semánticos y los componentes existentes (`AGENTS.md` §2).
6. **Probar el módulo:** insertarlo en la plantilla o página de prueba, verificar que el
   HubL se ejecuta (`hs cms lint` según `adapters/hubspot/README.md`), que los defaults se
   hidratan y que los repeaters conservan sus items después de la primera edición.
7. **Revisar responsive y accesibilidad:** comportamiento en desktop / tablet / móvil,
   contraste, foco y jerarquía semántica; en páginas de carrera,
   `npm run check:titulos` (Definición de Hecho de `AGENTS.md` §4).
8. **Aprobar** con revisión humana (`docs/human-review.md`) y validator sin hallazgos
   bloqueantes.
9. **Registrar** el módulo en `registry.json` con sus ocho llaves (§13).
10. **Documentar:** correr `npm run docs:modulos` (§14) para generar el stub y completar
    su prosa humana —descripción, propósito, cuándo usar, cuándo no usar, variantes—.
11. **Publicar** con el guardrail de alto riesgo (§15) y actualizar `estado` cuando la
    revisión lo justifique (§13).

## 5. Los cuatro casos repo↔portal

| Caso | Situación | Acción correcta |
|---|---|---|
| **A. En repo y en portal** | El módulo existe en `theme/modules/` y en `3807214` | Reutilizar, previa evaluación de compatibilidad (§8–§9). Si el contenido difiere, reportar la diferencia; no sincronizar en silencio |
| **B. Solo en repo** | Está versionado pero no publicado, p. ej. los nueve `apoyos-*` | Evaluar publicación: requiere revisión y guardrail (§15). Publicar no cambia por sí solo el `estado`, que mide madurez de revisión y no despliegue (§13) |
| **C. Solo en portal** | Existe en `3807214` y no en `theme/modules/` | No duplicar y no crear un módulo nuevo. Traerlo a **staging** bajo `.context/`, comparar, revisar e incorporar de forma selectiva (§6) |
| **D. En ninguno** | No existe en repo ni en portal | Crear siguiendo el recorrido de §4, después de agotar la búsqueda de candidatos (§7) |

En A y C, **describir la diferencia antes de actuar**. Nadie resuelve una divergencia
copiando el portal encima del repo.

## 6. Contenido que solo existe en el portal (caso C y divergencias)

Procedimiento obligatorio, en este orden:

1. **Staging temporal.** `hs cms fetch` apunta siempre a un directorio nuevo bajo
   `.context/` (fuera del control de versiones en este repo), fechado y desechable:

   ```bash
   # ejemplo documental — no se ejecuta durante este plan
   hs cms fetch anahuac-mexico/modules/<x>.module \
     .context/hubspot-fetch-staging/<AAAA-MM-DD>/ --account=3807214
   ```

2. **Diff.** Comparar staging contra la ruta canónica, sin escribir en ella:

   ```bash
   diff -ru adapters/hubspot/theme/modules/<x>.module \
     .context/hubspot-fetch-staging/<AAAA-MM-DD>/<x>.module
   ```

3. **Revisión humana.** El diff se reporta con su análisis de impacto. Una persona decide
   qué se incorpora.
4. **Incorporación selectiva.** Se aplican a mano, en commits acotados, únicamente los
   fragmentos aprobados. El staging se descarta; no se promueve a rama ni a commit.

**Prohibido:** ejecutar `hs cms fetch` (ni cualquier descarga del portal) directamente
sobre rutas canónicas del theme —`adapters/hubspot/theme/modules/`,
`adapters/hubspot/theme/templates/`, `adapters/hubspot/theme/css/`,
`adapters/hubspot/theme/js/`— o sobre las páginas HTML/CSS/JS locales del sitio. `fetch`
es solo-lectura contra el portal, pero **escribe en disco**: apuntado a la ruta canónica
sobrescribe el repo desde HubSpot e invierte la jerarquía de verdad.

**Durante este plan no se ejecuta ningún `fetch`.** El hueco conocido —el template vivo
de Oferta académica— queda registrado como pendiente en las `notas` de los módulos
`oferta-*` y `descubre`; no se resuelve con una descarga.

## 7. Orden de búsqueda: catálogo primero, portal después

1. **Catálogo del repo.** Abrir [`CATALOG.md`](./CATALOG.md) y leer familia, capacidades,
   estado, tier, páginas y candidatos. Después abrir el doc del módulo candidato
   (`docs/modules/<nombre>.md`) y leer sus bloques `AUTO` y su prosa.
2. **Fuentes reales del módulo.** `meta.json`, `fields.json`, `module.html`,
   `module.css`, `module.js` y los templates que lo invocan.
3. **Comprobación contra el portal.** Solo al final, y solo en lectura (por ejemplo
   `hs cms list`), para confirmar si el módulo está publicado y con qué contenido.

Ejemplos reales del inventario: antes de crear un hero nuevo, el catálogo obliga a
comparar `hero`, `admision-hero`, `apoyos-hero` y `oferta-hero`; antes de un cierre por
tarjetas, `siguiente-paso`, `admision-siguiente-paso` y `comienza-tu-camino`; antes de un
bloque de experiencia, `experiencia` y `oferta-experiencia` (candidatos con score 0.959).

El catálogo también está pensado como insumo del skill `html-to-hubspot`, que decide
REUTILIZAR / ADAPTAR / CREAR al migrar un HTML aprobado. **Esa integración es la Task 8
del plan y todavía no está hecha** (`docs/superpowers/plans/2026-09-02-repositorio-modulos-hubspot.md`):
hoy el skill no consulta el catálogo por sí mismo, así que el orden de búsqueda de esta
sección se aplica a mano.

## 8. Evaluación semántica y de compatibilidad

El generador produce, por módulo, la evidencia con la que se decide. Revisar **todas**
estas dimensiones antes de reutilizar:

| Dimensión | Dónde está la evidencia |
|---|---|
| Metadata y tier | `Identidad y evidencia técnica` del doc: label, estado, familia, tier del equipo, `meta.global`, categorías, content types, capacidades, variantes, notas, páginas |
| Fields completos | Bloque `AUTO:fields`: **path completo** (`grupo_boton1.texto`), tipo, required, default, `occurrence`, repeater y padre |
| Estructura HTML | Raíces, elementos, forma padre→hijo y jerarquías observadas |
| Clases y selectores | Clases raíz, clases, IDs, `data-*` y selectores del `module.css` |
| CSS | Estado de `module.css` (ausente / vacío / con contenido) y CSS compartido observado |
| JS y hooks | Estado de `module.js`, hooks propios y compartidos |
| Variantes | `registry.variantes`, con la ruta del field cuando aplica |
| Responsive | Media y container queries detectadas |
| Assets | Referencias a imágenes, videos y archivos |
| Dependencias | Dependencias CSS/JS declaradas, p. ej. `theme/css/main.css` y `theme/js/main.js` |
| Uso e impacto | Columna `Páginas` del catálogo: páginas derivadas de templates más `paginas_portal` |

Regla de lectura: **un candidato similar NO equivale a compatible.** El catálogo dice
«vale la pena comparar»; nunca «puedes sustituir». El generador exige un ancla semántica
y al menos dos señales sustantivas para proponer un candidato, y aun así el resultado es
una invitación a comparar evidencia.

Contraejemplo real del inventario: `oferta-form` comparte familia `formulario` con
`admision-formulario` y `apoyos-formulario`, pero es una interfaz estática con inputs sin
`<form>`, sin field `type: form` y sin envío. Reutilizarlo donde se necesita captura real
rompería la funcionalidad. `dudas-contacto` declara `FORMS_AND_BUTTONS` y tampoco tiene
formulario: sus capacidades son de CTA.

El mínimo de dimensiones a comparar y la regla que las gobierna —«Coincidir en nombre,
prefijo, categoría, familia o algunas capacidades **nunca basta**»— están en
[`TAXONOMY.md`](./TAXONOMY.md), sección «Familia, candidato y compatibilidad». Esta guía
no la reescribe: la aplica en §9.

## 9. La cadena de decisión

```
EXISTE → ¿HACE LO MISMO? → ¿ES COMPATIBLE? → ¿AFECTA OTRAS PÁGINAS? → REUTILIZAR / ADAPTAR / CREAR
```

1. **¿EXISTE?** Búsqueda en el orden de §7.
2. **¿HACE LO MISMO?** Comparar propósito y capacidades observables, no el nombre.
3. **¿ES COMPATIBLE?** Recorrer las dimensiones de §8 y anotar las brechas por dimensión.
4. **¿AFECTA OTRAS PÁGINAS?** Leer la columna `Páginas` del catálogo y `paginas_portal`.
5. **Decidir**, con preferencia explícita: **`REUTILIZAR > ADAPTAR > CREAR`**.

### Cómo pesar las brechas

`evaluateCompatibility` **no asigna severidad**: devuelve las brechas agrupadas por
dimensión, marca `compatible: true` solo cuando no hay ninguna y deja `decision: null`.
La clasificación que sigue es una convención de esta guía, y cada fila parte del string
literal que el generador emite.

Antes de clasificar, tres cosas que el generador **no** dice y hay que cruzar a mano:

- **Los sets de `css`, `js/hooks` y `responsive` mezclan lo propio y lo compartido.** La
  dimensión `css` une los selectores de `module.css` con los de `theme/css/*.css` que
  coinciden con los hooks del módulo; `js/hooks` hace lo mismo con `theme/js/*.js`; y
  `responsive` mezcla las media/container queries de ambos orígenes. El `estado:` que
  acompaña a la dimensión es solo del archivo **propio**. Para distinguir el origen,
  leer el doc del módulo: si `module.css` aparece como `empty` o `absent`, **todos** los
  selectores y reglas responsive listados son compartidos —hoy es el caso de 33 de los 34
  módulos: solo `hero` tiene `module.css` con contenido—. Con JS es aún más simple:
  **ningún** `module.js` del theme tiene contenido, así que todo `hook` proviene de
  `js/main.js`.
- **Las brechas de `fields` no distinguen «no existe» de «existe con otra firma».** La
  comparación es de pertenencia de conjunto sobre la firma completa
  `path|tipo|required|repeater|occurrence|default`, así que el string es idéntico en los
  dos casos. Para separarlos hay que cruzar el `path` del gap contra el contrato actual
  (`dimensions.fields.evidence`, los mismos fields que lista el bloque `AUTO:fields` del doc, aunque ahí las columnas van en otro orden y añaden `Padre`; el `path` va primero en ambos).
- **Las brechas de `html` no dicen quién depende del marcador.** El generador emite
  `falta clase:.X` sin indicar si `main.css` o `main.js` la usan. Se infiere cruzando `X`
  con los selectores y hooks listados en las dimensiones `css` y `js/hooks` del doc.

| Dimensión y brecha | Severidad | Por qué y cómo se cierra |
|---|---|---|
| `metadata`: `falta capacidad:<capacidad>` | **Bloqueante en el paso 2** | Una capacidad requerida ausente responde «no hace lo mismo» y detiene la cadena antes de evaluar compatibilidad. Antes de descartar, verificar si es una omisión de curaduría del registry o una ausencia real de comportamiento; si es real, no se reutiliza |
| `metadata`: `familia requerida=…; disponible=…` | Solo nota | La familia amplía la búsqueda, no decide compatibilidad (TAXONOMY) |
| `metadata`: `tier requerido=…; disponible=…` | Solo nota, con decisión de alcance | No es una brecha técnica. Si el objetivo exige `global` y el candidato es `page-specific`, promoverlo es un cambio de alcance (§11) |
| `metadata`: `meta.global requerido=…; disponible=…` | Solo nota | Evidencia técnica del portal: se reporta, nunca se autocorrige (§11) |
| `metadata`: `estado requerido=…; disponible=…` | Solo nota, con freno | Reutilizar un módulo en `Development` exige revisión explícita (§13) |
| `metadata`: `falta category:…`, `falta content_type:…` | Adaptable | Se añade en el `meta.json` del módulo; es aditivo y no altera marcado ni contenido guardado |
| `fields`: `falta field:<path>\|…` y el `<path>` **no** está en el contrato actual | Adaptable | Se añade como field **opcional con default** (§10) |
| `fields`: `falta field:<path>\|…` y el `<path>` **sí** está con otra firma (otro tipo, `single` frente a `repeater`, `optional` frente a `required`, otro `occurrence`) | **Bloqueante** | Cerrarla exigiría cambiar el contrato del contenido ya guardado, que §10 prohíbe. Va a **CREAR** o a variante nueva |
| `html`: `falta clase:.X`, `falta id:#X`, `falta atributo:X` y sus versiones raíz (`falta clase raíz:`, `falta id raíz:`, `falta atributo raíz:`) | Depende del cruce | **Bloqueante** si `main.css` o `main.js` referencian el marcador (aparece en las dimensiones `css`/`js/hooks` del doc): cerrarla implicaría editar CSS/JS transversal. **Adaptable** si nadie lo referencia: es marcado adicional del módulo |
| `html`: `falta raíz:<tag>`, `faltan raíces:<tag> requeridas=…` | **Bloqueante** | El elemento raíz es el contrato del módulo con el CSS compartido y con el `dnd_area`; cambiarlo no es aditivo |
| `html`: `falta relación padre-hijo:<padre>><hijo>…`, `falta jerarquía:…` (el separador de los valores es `>`, aunque la etiqueta en prosa del doc use `padre→hijo`) | **Bloqueante** | Es la señal de «mismos tags, distinta jerarquía»: reescribir el árbol de `module.html` rompe el CSS compartido y el contenido guardado |
| `html`: `faltan elementos:<tag> requeridos=N; disponibles=M` | Adaptable solo si el faltante puede venir de un repeater existente | Si el `<tag>` ya se emite dentro de un repeater del contrato (columna `Repeater` del bloque `AUTO:fields`), la diferencia es de contenido y no de estructura. Si no, es diferencia de árbol → **Bloqueante** |
| `html`: `falta elemento:<tag>` | Adaptable, salvo cruce estructural | Se puede añadir como marcado opcional gobernado por un field nuevo. Si el mismo `<tag>` aparece además en brechas de `jerarquía` o `padre-hijo`, manda esa severidad → **Bloqueante** |
| `html`: `falta formulario operativo` | **Bloqueante** | Ausencia de un elemento `<form>` **y** de un tag `{% form %}` en `module.html` — el generador no lee `fields.json` para esto. Es el caso `oferta-form` de §8. No se resuelve con marcado adicional |
| `css`: `falta selector:<selector>` proveniente del `module.css` **propio** | Adaptable | Solo aplica a `hero`, el único con `module.css` con contenido. Se extiende su CSS propio |
| `css`: `falta selector:<selector>` proveniente del **CSS compartido** | **Bloqueante** | Es el caso normal (33 de los 34 módulos: 32 con `module.css` vacío y `admision-fechas` sin archivo): cerrarla implica editar `theme/css/main.css`, que afecta a todas las páginas. Coincide con la dependencia que §8 señala |
| `css`: `CSS requerido con contenido; disponible=<empty\|absent>` | **Bloqueante** | Mismo criterio que su gemelo de JS: dar contenido a un `module.css` vacío cambia el render de **todas** las páginas que ya usan el módulo y rompe la convención del theme (32 vacíos a propósito y 1 ausente; `hero` es la única excepción documentada) |
| `js/hooks`: `falta hook:<hook>` | **Bloqueante** | Conservador por construcción: como ningún `module.js` tiene contenido, todo hook proviene de `theme/js/main.js`; cerrarla obligaría a editar JS transversal o a duplicar comportamiento en un `module.js`, contra la convención del theme |
| `js/hooks`: `JS requerido con contenido; disponible=<empty\|absent>` | **Bloqueante** | Mismo motivo que la fila anterior |
| `variantes`: `falta variante:<ruta=valor>` | Adaptable | Se añade la variante de forma aditiva y se declara en `registry.variantes` (§10, §13) |
| `responsive`: `falta regla responsive:@media …` / `@container …` | Depende del origen | Misma regla que `css`: si la regla vive en el `module.css` propio → **Adaptable**; si viene del CSS compartido → **Bloqueante** |
| `assets`: `falta asset:<ref>` | Adaptable | Se asigna o se sube el asset. Recordar que el Design Manager descarta `.webp` en silencio (ver `adapters/hubspot/README.md`) |
| `dependencias`: `falta dependencia:css:…` / `js:…` | Solo nota o Adaptable | **Solo nota** si la dependencia faltante es CSS/JS compartido que el theme ya carga en todas las páginas (`css/main.css`, `js/main.js`). **Adaptable** si exige declarar un `require_css`/`require_js` nuevo en `module.html` |
| `paginas`: `uso objetivo no observado:<página>` | Solo nota | Esperable al reutilizar en una página donde el módulo aún no se usa |
| `paginas`: `impacto existente a revisar:<página>` | Solo nota, con obligación | Dispara el análisis de impacto de §10 sobre cada página listada. En un módulo `tier: global` es la brecha más costosa de esta categoría |

Regla de decisión resultante:

- Ninguna brecha bloqueante ni adaptable → **REUTILIZAR** tal cual, con su propia
  configuración por página.
- Brechas adaptables y ninguna bloqueante → **ADAPTAR** de forma aditiva (§10), con
  análisis de impacto y revisión.
- Al menos una brecha bloqueante → **CREAR** un módulo nuevo o una variante; nunca
  forzar el módulo existente.

Las severidades cualificadas de la tabla («depende del origen», «depende del cruce»,
«solo si…») se resuelven **antes** de aplicar esta regla: haz el cruce que la fila pide y
quédate con la severidad resultante. Las etiquetas «con freno» y «con obligación» no
cambian de cubeta pero **sí bloquean el cierre**: una brecha `estado requerido=` contra un
módulo en `Development`, o un `impacto existente a revisar:`, exige revisión explícita
registrada aunque la decisión sea REUTILIZAR.

La decisión es humana: `evaluateCompatibility` devuelve `decision: null`. Usa el
`Checklist de compatibilidad` que ya trae cada doc de módulo para dejar registro, y anota
las brechas «solo nota» que aceptaste.

## 10. Modificación aditiva y análisis de impacto

Aditivo por defecto; destructivo solo con permiso explícito (`docs/change-protocol.md`).

Antes de tocar un módulo:

1. Leer su fila en [`CATALOG.md`](./CATALOG.md) y listar las páginas afectadas. Un módulo
   de `tier: global` —`encabezado`, `pie-de-pagina`, `experiencia`, `siguiente-paso`—
   impacta transversalmente.
2. Clasificar el cambio como aditivo, local o potencialmente destructivo.
3. Si es potencialmente destructivo: **DETENTE y pregunta**, ofreciendo variante o módulo
   nuevo antes de cambiar la base (`AGENTS.md` §2 y `docs/change-protocol.md` §2).

Reglas de la extensión aditiva:

- Fields nuevos **opcionales** y con `default` útil. HubSpot no rellena el default de un
  campo nuevo en los items que un repeater ya tenía guardados: usa
  `|default(x, true)` y nunca emitas una etiqueta HTML directa desde un field
  (ver los avisos de `adapters/hubspot/README.md`).
- **No renombrar** fields existentes: el nombre es el contrato con el contenido guardado
  en las páginas vivas.
- **No borrar** fields existentes ni cambiar su `type` u `occurrence`.
- No renombrar el directorio `.module` ni moverlo: templates y páginas lo referencian por
  ruta. Formas reales de invocación en este theme:

  ```hubl
  {% module "header" path="../modules/encabezado", label="Encabezado (global)" %}
  {% dnd_module path="../modules/hero" %}{% end_dnd_module %}
  ```

- No cambiar clases, IDs ni `data-*` de los que dependan `main.css` o `main.js`.
- Añadir la variante nueva a `registry.variantes` y documentarla en el doc del módulo.
- Cada página que ya usa el módulo conserva su propio snapshot de configuración: un
  cambio en el `dnd_area` del template no se propaga a páginas ya creadas. Verificar cada
  página afectada, no solo el template.

## 11. Global, Reusable y Page-specific

Definiciones vigentes (ver TAXONOMY, «Tiers de reutilización»):

- **Global Module** — un cambio afecta múltiples páginas a la vez.
- **Reusable Module** — se usa en varias páginas y cada instancia mantiene su propia
  configuración o contenido.
- **Page-specific Module** — se creó para una página; se promueve a `reusable` o `global`
  solo por decisión explícita y con análisis de impacto.

Reparto actual: 4 `global` (`encabezado`, `pie-de-pagina`, `experiencia`,
`siguiente-paso`), 7 `reusable` (`hero`, `historias`, `eventos`, `prestigio`,
`licenciaturas`, `comienza-tu-camino`, `dudas-contacto`) y 23 `page-specific`.

Autoridad y evidencia:

- **`registry.tier` es la autoridad arquitectónica.** Es una decisión humana registrada.
- **`meta.global` es evidencia técnica de HubSpot.** Describe cómo está configurado el
  módulo en el portal, no cómo lo clasifica el equipo.
- El catálogo muestra ambas columnas por separado. Si discrepan, la discrepancia **se
  reporta** en `CATALOG.md`, en el doc del módulo y en la salida del generador; **nunca
  se autocorrige** ninguno de los dos valores. Hoy hay 0 discrepancias: los cuatro
  módulos con `tier: global` son exactamente los cuatro con `meta.global: true`.

Advertencia sobre globales replicables (criterio vigente en
`.claude/skills/html-to-hubspot/SKILL.md`, sección «Límite de globales replicables»): un
módulo global se edita una vez y cambia en todas partes, lo que es perfecto para header y
footer y **peligroso cuando cada instancia debe variar** —por ejemplo una sección por
área o campus que **no** es intercambiable—. **No marques `global: true` solo porque el
módulo se repite**; ante la duda, pregunta cuáles se quieren como globales. El criterio
decisivo es la intercambiabilidad, no la frecuencia de uso: si el contenido debe diferir
por página, el módulo es `reusable` y cada página mantiene su configuración.

Aquí «límite» es un juicio de diseño —hasta dónde conviene replicar— y no una cuota del
portal: no hay un número documentado en este repo y no hace falta buscarlo. Lo que sí
crece con cada global es el costo del análisis de impacto, porque una sola corrección
puede cambiar todas las páginas a la vez. Promover un módulo a `global` es por eso un
cambio de alcance que exige análisis de impacto y aprobación humana antes de tocar el
`tier`.

## 12. Naming

Rige [`docs/naming.md`](../naming.md). Esta guía solo lo **extiende** para módulos
HubSpot; si algo parece contradecirlo, gana `docs/naming.md`.

Identificadores técnicos:

- Directorio: `<nombre>.module` en `kebab-case`, como ya define `docs/naming.md`
  («Archivos y carpetas»).
- Módulos compartidos: sin prefijo de página (`hero`, `eventos`, `siguiente-paso`).
- Módulos `page-specific`: prefijo de la página. De los 23 actuales, 22 lo cumplen
  (8 `admision-`, 9 `apoyos-`, 5 `oferta-`); `descubre` es el único sin prefijo. Es un
  nombre heredado, no una excepción declarada en `registry.json`: los módulos nuevos usan
  el prefijo.
- El doc del módulo se llama igual que el directorio, sin `.module`:
  `docs/modules/<nombre>.md`.
- Prohibido versionar por nombre: nada de `hero-v2`, `hero-new`, `hero-final`. Si hace
  falta una diferencia, es una variante del módulo o un módulo con nombre propio
  descriptivo, y en cualquier caso pasa por la cadena de decisión de §9.
- Familias y capacidades usan identificadores `kebab-case` (TAXONOMY, «Familias
  funcionales» y «Capacidades»). Las **variantes** no son `kebab-case` libre: cuando
  pertenecen a un field o item repetible conservan la forma `ruta=valor`, por ejemplo
  `stories.layout=img-first` (TAXONOMY, «Variantes»).

`meta.label` (lo que ve el equipo de contenido en el editor): español, con sufijo
`— Anáhuac`. Formas reales en los 34 módulos:

| Forma | Ejemplos | Casos |
|---|---|---|
| `<Nombre> — Anáhuac` | `Hero — Anáhuac`, `Eventos — Anáhuac`, `El siguiente paso — Anáhuac` | 10 |
| `<Ámbito> · <Nombre> — Anáhuac` | `Apoyos · Hero — Anáhuac`, `Admisión · Calendario de fechas (HubDB) — Anáhuac`, `Oferta · Descubre tu licenciatura — Anáhuac` | 22 |
| `<Nombre> — Anáhuac (global)` | `Encabezado — Anáhuac (global)`, `Pie de página — Anáhuac (global)` | 2 |

Los ámbitos en uso son `Admisión`, `Apoyos` y `Oferta`. `oferta-areas` rompe el patrón:
es `page-specific` de Oferta pero su label es `Áreas académicas — Anáhuac`, sin el
prefijo `Oferta ·`. Los labels nuevos siguen la forma con ámbito.

## 13. Estados y mantenimiento del registry

`estado` ∈ `Draft | Development | Approved | Deprecated`.

**`estado` mide madurez de revisión, no publicación.** Un módulo revisado y aprobado es
`Approved` aunque todavía no esté en el portal; publicar no cambia por sí solo el
`estado`, y despublicar tampoco. Si hace falta registrar el hecho de la publicación, va
en `notas` o en `paginas_portal`, no en `estado`.

| Estado | Significado operativo |
|---|---|
| `Draft` | Existe una intención documentada; el contrato aún no es confiable. No reutilizar |
| `Development` | Construido y versionado, sin revisión de aprobación cerrada. Reutilizable solo con revisión explícita. Hoy: los nueve `apoyos-*` |
| `Approved` | Revisado y vigente. Es el estado de los 25 módulos restantes |
| `Deprecated` | No usar en páginas nuevas. Solo se retira después de análisis de impacto y decisión humana |

- **Quién lo cambia:** una persona, en `registry.json`, después de la revisión que
  justifica el cambio (`docs/human-review.md` y la Definición de Hecho de `AGENTS.md`).
  El generador nunca cambia un `estado` ni un `tier`.
- **Alta en el registry** (paso 9 del recorrido de §4):
  1. añadir la clave `<nombre>` con las ocho llaves requeridas —`estado`, `tier`,
     `familia`, `capacidades`, `variantes`, `relaciones`, `notas`, `paginas_portal`—;
     `familia: null` es válido y deliberado cuando el módulo es único;
  2. correr `npm run docs:modulos`, que crea el stub `docs/modules/<nombre>.md`;
  3. completar la prosa humana del stub.
  Un módulo físico sin registro y un registro sin módulo físico son **errores** que
  impiden escribir el catálogo.
- **Declarar una relación:** objeto `{ "tipo", "referencia", "motivo" }` dentro de
  `relaciones`. `tipo` ∈ `candidato | complementa | reemplaza | consume | consumido-por`.
  `referencia` debe existir como clave del registry, salvo la referencia lógica
  autorizada de §17, y el `motivo` explica la evidencia. `candidato` no declara
  compatibilidad; `reemplaza` no se infiere: se decide.
- `paginas_portal` solo registra usos del portal que **no** se pueden derivar de los
  templates versionados (hoy, Oferta académica). Las páginas derivables no se duplican a
  mano.

## 14. `npm run docs:modulos` — bajo demanda

```bash
npm run docs:modulos   # node scripts/hs-catalogo.mjs
```

- **Cuándo correrlo:** al añadir o modificar un módulo del theme, al editar
  `registry.json`, o cuando el catálogo se vea desalineado con el inventario.
- **Qué imprime:** el conteo de módulos físicos y documentos, los archivos actualizados y
  las discrepancias `tier`/`meta.global`. Si hay errores —faltantes, huérfanos, enums
  inválidos, schema inválido, `meta.json`/`fields.json` ilegibles, `module.html` ausente o
  un `.md` sin módulo físico— **no escribe nada** y termina con código 1.
- **Es idempotente.** Reescribe solo si el contenido cambia (archivo temporal + `rename`),
  de forma determinista.
- **Preserva la prosa humana.** Solo reemplaza el interior de los bloques
  `<!-- AUTO:technical:START -->…<!-- AUTO:technical:END -->` y
  `<!-- AUTO:fields:START -->…<!-- AUTO:fields:END -->`. Todo lo escrito fuera de esos
  bloques se conserva intacto; si un bloque falta o está duplicado, falla en vez de
  adivinar.
- **No forma parte de `validate` ni de CI.** `npm run validate` sigue siendo
  `check:readiness && check:tokens && lint:css`; no hay hooks que lo disparen. Correrlo es
  una decisión explícita.
- Pruebas del generador: `node --test scripts/hs-catalogo.test.mjs`.

## 15. Guardrail de alto riesgo

Dos familias de acciones de alto riesgo, por razones distintas:

- **Mutaciones del portal o del sitio publicado:** `hs cms upload`, deploy, creación o
  edición de páginas y formularios, `git push` a la rama que dispara publicación.
  Riesgo: cambian lo que ve el público del portal `3807214`.
- **Mutaciones del repo desde el portal:** cualquier descarga (`hs cms fetch` y
  equivalentes) que escriba sobre rutas canónicas del theme o sobre las páginas locales.
  Riesgo: invierte la jerarquía de verdad y puede perder trabajo versionado. El
  procedimiento seguro —staging bajo `.context/`, diff, revisión, incorporación
  selectiva— está en §6 y no requiere este guardrail mientras no toque rutas canónicas.

Lo que aportan los documentos base: `AGENTS.md` §2 fija el principio —«**Cambios no
destructivos por defecto.** … Si un ajuste podría romper algo que otras páginas usan,
**DETENTE y pregunta**»— y `docs/change-protocol.md` §2 lo aterriza para componentes
compartidos, ofreciendo variante, componente nuevo o cambio de base con re-validación de
las páginas afectadas. Ninguno de los dos define un protocolo de autorización para
acciones externas.

**Regla operativa de esta guía** (práctica vigente del equipo, todavía no codificada en
`AGENTS.md`), para las dos familias de arriba:

1. **Detente antes de ejecutar.** Nada se sube, despliega ni descarga sobre ruta canónica
   dentro del mismo turno en que se pide.
2. **Declara** que la solicitud implica una acción de alto riesgo y entrega un resumen:
   acción exacta, cliente, sistema y ambiente, URL o portal afectado, cuenta ejecutora,
   alcance y volumen, audiencia, momento de ejecución y riesgo principal.
3. **Pide confirmación de autorización interna.** Después del resumen, la persona debe
   responder escribiendo exactamente:

   > He revisado las autorizaciones internas necesarias con el líder o responsable
   > correspondiente y confirmo que puedes proceder con esta acción de alto riesgo.

4. Sin esa respuesta literal, la acción **no se ejecuta**. Reproduce la frase tal cual; no
   la parafrasees ni aceptes variantes.

Esta guía y la capa `docs/modules/` no ejecutan ninguna de esas acciones. Pendiente
registrado en §18: promover esta regla a `AGENTS.md`, como pide `AGENTS.md` §2 para las
instrucciones humanas aceptadas.

## 16. Garantía del generador

`scripts/hs-catalogo.mjs`:

- **No mueve, no renombra y no elimina** archivos del theme.
- **No sube nada, no ejecuta `hs`** ni hace red: solo `node:fs`, `node:path` y
  `node:url`, sin dependencias npm nuevas.
- **No edita el theme.** Lee, en solo lectura, `adapters/hubspot/theme/modules/*`,
  `adapters/hubspot/theme/templates/*`, el CSS/JS compartido del theme y
  `docs/modules/registry.json`.
- **Escribe únicamente** dentro de `docs/modules/`: `CATALOG.md` y un `<nombre>.md` por
  módulo físico, con escritura atómica y sin tocar la prosa fuera de los bloques `AUTO`.
  Valida el nombre y la ruta de destino antes de escribir y rechaza cualquier destino
  fuera de `docs/modules/`.
- **No autocorrige** `estado`, `tier`, `familia`, `capacidades`, `meta.global` ni ninguna
  discrepancia: las reporta.
- **No decide** reutilizar, adaptar ni crear.

## 17. Caso obligatorio: `admision-asesoria → apoyos-asesoria`

Proceso de admisión necesita una sección de asesoría y **la resuelve reutilizando el
módulo físico [`apoyos-asesoria`](./apoyos-asesoria.md)**, con su propio contenido y
configuración en la página de Admisión.

- Es una **relación lógica de reutilización**, no un módulo. `apoyos-asesoria` la declara
  como `{"tipo": "consumido-por", "referencia": "admision-asesoria"}` y el catálogo la
  publica en la sección «Relación lógica de Admisión».
- **No existe y no debe crearse** `adapters/hubspot/theme/modules/admision-asesoria.module`
  ni `docs/modules/admision-asesoria.md`. Verificado en disco: ninguno de los dos existe.
- Un `admision-asesoria.md` sin módulo físico haría fallar `npm run docs:modulos` con un
  error `stale-module-doc` y bloquearía la escritura del catálogo completo.
- La relación lógica **no** convierte a Admisión en un `paginas_portal` de
  `apoyos-asesoria`: una relación prevista no es un uso confirmado del portal.
- Si algún día Admisión necesitara un comportamiento incompatible, se aplica la cadena de
  §9 y la decisión se documenta; no se duplica el módulo por comodidad.

## 18. Pendientes de reconciliación

Divergencias conocidas y no corregidas. Cada una necesita una task con permiso sobre el
archivo señalado; ninguna se resuelve desde `docs/modules/`.

| Pendiente | Evidencia | Acción propuesta |
|---|---|---|
| El guardrail de alto riesgo (resumen estructurado + frase de autorización de §15) no está codificado en los documentos base | `AGENTS.md` y `docs/change-protocol.md` solo fijan el principio de no-destructividad | Promover la regla a `AGENTS.md` y dejar §15 como referencia |
| `adapters/hubspot/README.md` nombra como globales solo header y footer | Hoy hay 4 módulos con `tier: global`: además `experiencia` y `siguiente-paso`, ambos con `meta.global: true` | Actualizar ese README del adapter para reflejar los cuatro |
| El template vivo de Oferta académica no está versionado | `notas` de `oferta-*` y `descubre`; no hay `oferta-*.html` en `theme/templates/` | Reconciliar con el procedimiento de §6, en una task que lo autorice |
| El skill `html-to-hubspot` aún no consulta el catálogo | Task 8 del plan, no ejecutada | Integrarlo en esa task; hasta entonces, aplicar §7 a mano |
