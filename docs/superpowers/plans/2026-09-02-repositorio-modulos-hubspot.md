# Repositorio de módulos HubSpot de Anáhuac — Plan de implementación

> **Ejecución aprobada:** Subagent-Driven, una task a la vez. Cada task requiere
> implementación, pruebas y revisión independiente antes de iniciar la siguiente.

**Objetivo:** Añadir una capa versionada de catálogo y documentación sobre los 34
módulos físicos existentes del theme HubSpot de Anáhuac, consumible por el skill
`html-to-hubspot`, sin mover, renombrar, eliminar, subir ni modificar módulos,
templates o páginas existentes.

**Alcance:** Exclusivamente Universidad Anáhuac México, portal `3807214`, theme
`anahuac-mexico`. No crear una librería multi-proyecto.

**Arquitectura:** Capa aditiva en `docs/modules/` y un generador Node en
`scripts/hs-catalogo.mjs`. El generador descubre el theme de forma dinámica, lee
metadata, fields, HTML y dependencias, y produce un catálogo y documentación. El
theme es entrada de solo lectura.

**Spec:** `docs/superpowers/specs/2026-09-02-repositorio-modulos-hubspot-design.md`.

## Estado inicial que se debe preservar

- El commit `4680003` ya existe y se conserva sin reescribir historia. Añadió
  `docs/modules/registry.json` y `docs/modules/TAXONOMY.md` antes de esta ejecución.
- Hay exactamente **34 directorios físicos `*.module`** en
  `adapters/hubspot/theme/modules/`.
- `admision-asesoria` no es un módulo físico: es una necesidad lógica de Admisión
  resuelta mediante reutilización de `apoyos-asesoria.module`. Se documenta como
  relación, nunca se crea un stub ni un directorio `admision-asesoria.module`.
- Hay cambios de otras tareas en el worktree. No incluirlos en commits, no
  modificarlos y no asumir que pertenecen a esta implementación.

## Restricciones globales

1. No modificar, mover, renombrar ni eliminar nada bajo:
   - `adapters/hubspot/theme/modules/`
   - `adapters/hubspot/theme/templates/`
   - páginas HTML/CSS/JS existentes del sitio local.
2. No ejecutar `hs cms upload`, deploy, push, creación de páginas ni mutaciones del
   portal.
3. No ejecutar `hs cms fetch` durante estas tasks. Si después fuera necesario, debe
   apuntar primero a un staging temporal bajo `.context/`, seguido de diff y revisión;
   nunca sobre la ruta canónica.
4. Git/repo es la fuente de verdad del código. HubSpot es el entorno de publicación.
5. No agregar dependencias npm.
6. `npm run docs:modulos` queda bajo demanda. No modificar `validate`, CI ni hooks.
7. `registry.json.tier` es la autoridad arquitectónica. `meta.json.global` es
   evidencia técnica. Las discrepancias se reportan y nunca se autocorrigen.
8. La detección de similitud no puede decidir únicamente por nombre. Debe combinar
   metadata curada y evidencia real: fields completos, HTML, clases/selectores,
   CSS, JS/hooks, variantes, responsive, assets, dependencias y uso en páginas.
9. La decisión final siempre sigue:
   `EXISTE → ¿HACE LO MISMO? → ¿ES COMPATIBLE? → ¿AFECTA OTRAS PÁGINAS? →
   REUTILIZAR / ADAPTAR / CREAR`.
10. Un candidato similar no equivale a compatible. El catálogo propone candidatos;
    una persona/agente debe revisar la evidencia antes de decidir.
11. Todo commit usa paths explícitos. Nunca usar `git add .` ni incorporar cambios
    ajenos del worktree.
12. Cualquier futura mutación del portal deberá pasar el guardrail de alto riesgo de
    `AGENTS.md`, incluida la frase obligatoria posterior al resumen. Esta ejecución
    no incluye ninguna de esas acciones.

## Protocolo Subagent-Driven por task

Para cada task:

1. Capturar el baseline de paths protegidos y el estado Git.
2. Despachar un implementador con alcance limitado a la task.
3. Ejecutar las pruebas indicadas.
4. Despachar un revisor independiente que valide spec, calidad y no-regresión.
5. Corregir hallazgos dentro de la misma task y revalidar.
6. Confirmar que el guard de paths protegidos sigue limpio.
7. Reportar antes de continuar:
   - qué cambió;
   - archivos modificados;
   - pruebas ejecutadas y resultado;
   - discrepancias o riesgos.
8. Crear un commit acotado solo después de una revisión limpia. El commit existente
   `4680003` no se modifica ni se combina.

---

## Task 0 — Congelar alcance, reconciliar inventario y establecer guards

**Archivos permitidos:**

- Crear: `.context/hubspot-modules-baseline/` (gitignored, evidencia temporal).
- Modificar: ninguno versionado, salvo este plan ya aprobado.

### Pasos

- [ ] Guardar en `.context/hubspot-modules-baseline/`:
  - `git-status-before.txt`;
  - listado ordenado y hashes de módulos/templates;
  - listado ordenado de páginas protegidas;
  - commit inicial y rama actual.
- [ ] Verificar que `HEAD` contiene `4680003` y no reescribirlo.
- [ ] Verificar dinámicamente 34 directorios `*.module`.
- [ ] Comparar nombres físicos contra las claves del registry: cero faltantes y cero
  huérfanos.
- [ ] Verificar que no existe `admision-asesoria.module` y documentar en la evidencia
  que `specs/proceso-de-admision-hubspot.md` ordena reutilizar `apoyos-asesoria`.
- [ ] Definir el comando de guard para repetir al cierre de cada task: comparar los
  hashes actuales de módulos/templates y el diff de páginas protegidas con el
  baseline.
- [ ] Registrar cualquier discrepancia, sin corregir módulos ni templates.

### Validación y aceptación

- Conteo físico: `34`.
- Registry: `34`; faltantes: `[]`; huérfanos: `[]`.
- Relación lógica confirmada; cero módulo físico `admision-asesoria`.
- Hashes iniciales disponibles para las tasks siguientes.
- Cero cambios versionados causados por Task 0.

---

## Task 1 — Reconciliar registry y taxonomía semántica

**Archivos permitidos:**

- Modificar: `docs/modules/registry.json`.
- Modificar: `docs/modules/TAXONOMY.md`.

### Modelo de metadata humana

Cada uno de los 34 registros conserva:

- `estado`: `Draft | Development | Approved | Deprecated`;
- `tier`: `global | reusable | page-specific`;
- `familia`: familia funcional curada por evidencia, no inferida solo por nombre;
- `capacidades`: lista normalizada de responsabilidades observables;
- `variantes`: variantes reales conocidas;
- `relaciones`: reutilización, reemplazo o candidatos relacionados;
- `notas`;
- `paginas_portal` para usos conocidos no derivables del repo.

`apoyos-asesoria` incluirá la relación de consumo desde Admisión. No se añadirá una
clave independiente `admision-asesoria`.

### Pasos

- [ ] Auditar cada registro contra `meta.json`, `fields.json` y `module.html`.
- [ ] Definir familias semánticas iniciales: Hero, Formularios, FAQ, Pasos, CTA,
  Experiencia, Asesoría y las familias adicionales justificadas por evidencia.
- [ ] No forzar módulos únicos a una familia artificial.
- [ ] Explicar en TAXONOMY que familia y compatibilidad son conceptos distintos.
- [ ] Mantener `tier` como decisión humana y `meta.global` como evidencia técnica.
- [ ] Documentar la relación `admision-asesoria → apoyos-asesoria`.

### Validación y aceptación

- JSON válido y schema completo para 34 entradas.
- Cero claves faltantes/huérfanas.
- Cero registro físico para `admision-asesoria`.
- Familias justificadas por función/capacidades, no exclusivamente por prefijos.
- Guard de paths protegidos limpio.

---

## Task 2 — Núcleo del generador y pruebas unitarias

**Archivos permitidos:**

- Crear: `scripts/hs-catalogo.mjs`.
- Crear: `scripts/hs-catalogo.test.mjs`.
- Crear fixtures mínimos bajo `scripts/fixtures/hs-catalogo/` si son necesarios.

### Interfaces requeridas

- `discoverModules(modulesDir)`
- `validateRegistry(moduleNames, registry)`
- `flattenFields(fields)`
- `extractHtmlEvidence(moduleHtml)`
- `extractFileEvidence(moduleDir)`
- `derivePageUsage(templatesDir, pageNames)`
- `buildSemanticProfile(moduleRecord)`
- `findSemanticCandidates(records, target)`
- `evaluateCompatibility(source, targetRequirements)`
- `replaceAutoBlock(document, blockName, content)`

### Evidencia y reglas

- `flattenFields` conserva rutas completas, por ejemplo
  `grupo_boton1.texto`, evitando colisiones de nombres hoja.
- Cada field registra tipo, required, default, occurrence/repeater y jerarquía.
- La evidencia HTML incluye elementos raíz, clases, data-attributes, IDs, formularios,
  referencias a assets y hooks observables.
- La evidencia de archivos distingue `module.css`/`module.js` ausentes, vacíos o con
  contenido, y registra dependencias compartidas declaradas.
- Los candidatos semánticos combinan:
  - familia/capacidades curadas del registry;
  - firma de fields y repeaters;
  - estructura y hooks HTML;
  - clases/selectores y dependencias CSS/JS;
  - assets;
  - variantes;
  - uso por páginas.
- El nombre puede aportar una señal débil, nunca ser la única evidencia.
- `evaluateCompatibility` devuelve evidencia y gaps por dimensión; no decide adaptar
  o crear automáticamente ni modifica archivos.

### Pruebas mínimas

- [ ] Registry: faltantes, huérfanos, enums inválidos y discrepancias global/tier.
- [ ] Fields: rutas completas y nombres hoja repetidos en grupos distintos.
- [ ] Repeaters: occurrence a nivel raíz y groups no-repeater.
- [ ] HTML: clases, hooks, assets y estructura básica.
- [ ] CSS/JS: ausente, vacío y no vacío.
- [ ] Similitud: dos nombres diferentes pero evidencia equivalente son candidatos.
- [ ] Anti-falso-positivo: nombres parecidos con contratos incompatibles no se marcan
  compatibles.
- [ ] Compatibilidad: gaps diferenciados en fields, HTML, CSS/JS, responsive, assets
  y dependencias.
- [ ] AUTO blocks: solo cambia el bloque indicado; prosa circundante intacta.

### Validación y aceptación

- `node --test scripts/hs-catalogo.test.mjs` pasa.
- Las pruebas incluyen casos reales simplificados de las colisiones detectadas.
- Ninguna función escribe en el theme ni ejecuta `hs`.
- Revisor independiente presta atención especial a falsos positivos semánticos.
- Guard de paths protegidos limpio.

---

## Task 3 — Ensamblar el generador, catálogo y 34 stubs

**Archivos permitidos:**

- Modificar: `scripts/hs-catalogo.mjs`.
- Modificar: `scripts/hs-catalogo.test.mjs`.
- Modificar: `package.json` únicamente para añadir `docs:modulos`.
- Crear: `docs/modules/CATALOG.md`.
- Crear: `docs/modules/<nombre>.md`, exactamente uno por módulo físico.

### Comportamiento requerido

- Descubrir dinámicamente los 34 módulos; no hardcodear el inventario.
- Leer `meta.json`, fields completos, `module.html`, archivos CSS/JS, registry y
  templates.
- Generar perfiles de evidencia y candidatos semánticos explicables.
- Mostrar por módulo:
  - categoría, familia, capacidades y estado;
  - tier del equipo y global técnico de HubSpot en columnas separadas;
  - páginas conocidas;
  - candidatos relacionados y motivos;
  - enlace a su documento;
  - discrepancias/pendientes.
- Crear un stub solo si no existe.
- En documentos existentes, reemplazar exclusivamente bloques `AUTO` separados para
  fields y evidencia técnica; preservar prosa humana.
- Escribir de forma determinista y segura mediante archivo temporal + rename.
- No generar `admision-asesoria.md`; reflejar la relación en el catálogo y en
  `apoyos-asesoria.md`.
- Añadir a `package.json` solo:
  `"docs:modulos": "node scripts/hs-catalogo.mjs"`.
- No alterar `validate`, CI ni dependencias.

### Plantilla mínima por módulo

- Identidad técnica y estado.
- Familia/capacidades y candidatos similares.
- Descripción y propósito.
- Cuándo usar / cuándo no usar.
- Fields con rutas completas.
- Estructura HTML y clases/hooks.
- Variantes.
- CSS/JS/assets/dependencias.
- Responsive.
- Uso e impacto en páginas.
- Checklist de compatibilidad.
- Ejemplo HubL.

### Validación y aceptación

- `node --test scripts/hs-catalogo.test.mjs` pasa.
- `npm run docs:modulos` genera exactamente 34 docs de módulo.
- Registry y directorios físicos coinciden exactamente.
- No existe doc/directorio de módulo para `admision-asesoria`.
- Ejecutar dos veces en copia/fixture temporal produce hashes idénticos.
- Una prueba automatizada edita prosa en una copia temporal, regenera y confirma que
  la prosa se conserva.
- `package.json` conserva sin cambios `validate` y scripts de CI.
- Guard de paths protegidos limpio.

---

## Task 4 — Guía operativa y sincronización no destructiva

**Archivo permitido:** crear `docs/modules/README.md`.

### Contenido requerido

- Alcance exclusivo Anáhuac / portal `3807214`.
- Git como fuente de verdad; HubSpot como publicación.
- Flujo `Git → revisión → publicación`.
- Cuatro casos repo↔portal.
- Para contenido solo en portal: fetch a staging bajo `.context/`, diff, revisión e
  incorporación selectiva. Prohibido fetch directo sobre rutas canónicas.
- Búsqueda primero en catálogo y después comprobación de portal.
- Evaluación semántica y de compatibilidad antes de reutilizar.
- `REUTILIZAR > ADAPTAR > CREAR`.
- Modificación aditiva y análisis de impacto.
- Diferencia entre Global Module, Reusable Module y Page-specific Module.
- Naming extendiendo `docs/naming.md`, sin copiar reglas divergentes.
- Estados y mantenimiento del registry.
- `npm run docs:modulos` bajo demanda.
- Guardrail de alto riesgo antes de uploads, deploys o mutaciones futuras.
- Garantía: el generador no mueve, renombra, elimina, sube ni edita el theme.

### Validación y aceptación

- Revisión cruzada contra `AGENTS.md`, spec, TAXONOMY y registry.
- Ninguna instrucción sugiere sobrescribir el repo desde HubSpot.
- Guard de paths protegidos limpio.

---

## Task 5 — Documentación completa de Home y globales

**Docs objetivo (11):** `encabezado`, `pie-de-pagina`, `hero`, `historias`,
`eventos`, `prestigio`, `experiencia`, `licenciaturas`, `comienza-tu-camino`,
`dudas-contacto`, `siguiente-paso`.

- [ ] Completar cada sección humana leyendo fuentes reales del módulo y su uso.
- [ ] Documentar contrato de compatibilidad por todas las dimensiones.
- [ ] Documentar que editar globales tiene impacto transversal.
- [ ] No tocar bloques AUTO ni archivos del theme.
- [ ] Regenerar y confirmar preservación de prosa.
- [ ] Confirmar cero `> TODO` en los 11 docs.
- [ ] Guard de paths protegidos limpio.

---

## Task 6 — Documentación completa de Proceso de admisión

**Docs objetivo (8):** los módulos físicos `admision-hero`, `admision-pasos`,
`admision-fechas`, `admision-cta`, `admision-propedeuticos`,
`admision-siguiente-paso`, `admision-faq` y `admision-formulario`.

- [ ] Completar contrato y evidencia de cada módulo.
- [ ] Documentar aparte la reutilización lógica de `apoyos-asesoria`; no crear un
  noveno módulo ni un stub `admision-asesoria`.
- [ ] Confirmar cero TODO en los ocho docs físicos.
- [ ] Regenerar y confirmar preservación de prosa.
- [ ] Guard de paths protegidos limpio.

---

## Task 7 — Documentación completa de Oferta académica

**Docs objetivo (6):** `oferta-hero`, `oferta-areas`, `oferta-search`,
`oferta-experiencia`, `oferta-form` y `descubre`.

- [ ] Completar contratos usando módulos y maqueta estática aprobada como evidencia.
- [ ] Registrar explícitamente que el template vivo de Oferta no está versionado.
- [ ] No ejecutar fetch para resolver ese hueco durante este plan.
- [ ] Confirmar cero TODO en los seis docs.
- [ ] Regenerar y confirmar preservación de prosa.
- [ ] Guard de paths protegidos limpio.

Al terminar Tasks 5–7 habrá **25 docs completos**: 23 módulos de contenido de las
tres páginas vivas + header y footer. Los nueve módulos de Apoyos conservarán stubs
incrementales, salvo la metadata y relación de `apoyos-asesoria`.

---

## Task 8 — Integrar y probar el skill `html-to-hubspot`

**Archivo permitido:** modificar `.claude/skills/html-to-hubspot/SKILL.md`.

### Cambios requeridos

- Consultar primero `docs/modules/CATALOG.md` y el doc del módulo candidato.
- Usar familia, capacidades y evidencia estructural para buscar candidatos; nunca
  limitarse al nombre.
- Exigir revisión explícita de fields, HTML, clases/selectores, CSS, JS/hooks,
  variantes, responsive, assets, dependencias y uso/impacto.
- Aplicar la cadena completa de decisión antes de recomendar reutilizar/adaptar/crear.
- Mantener `HTML aprobado = fuente de verdad visual y funcional`.
- Mantener `FIDELIDAD > CREATIVIDAD` y `REUTILIZAR > ADAPTAR > CREAR`.
- Prohibir rediseño o cambios visuales/funcionales no aprobados.
- Reforzar Git como verdad y HubSpot como publicación.
- Indicar fetch solo a staging + diff + revisión.
- Añadir el guardrail de alto riesgo antes de `hs cms upload`, deploy, creación de
  páginas/formularios o cualquier mutación del portal.
- Tras un módulo nuevo ya aprobado: registrar metadata y regenerar docs a demanda.
- Mantener el cuerpo conciso y bajo 500 líneas; enviar detalle operativo al catálogo
  y README en vez de duplicarlo.

### Validación

- Validar frontmatter y nombre con el validador de `skill-creator`.
- Comprobar que el frontmatter solo contiene `name` y `description`.
- Confirmar menos de 500 líneas.
- Buscar contradicciones con `docs/modules/README.md` y AGENTS.
- Ejecutar forward-test con subagente fresco y contexto mínimo sobre tres escenarios:
  1. Hero con nombre distinto pero contrato compatible.
  2. Hero visualmente parecido con fields/JS incompatibles.
  3. Presión para subir o hacer fetch sobre la ruta canónica.
- El agente debe producir análisis y detenerse antes de escribir/subir; no debe
  ejecutar comandos `hs` ni modificar archivos durante el forward-test.
- Guard de paths protegidos limpio.

---

## Task 9 — Validación final independiente y cierre

### Verificaciones globales

- [ ] `node --test scripts/hs-catalogo.test.mjs` pasa.
- [ ] `npm run docs:modulos` pasa a demanda.
- [ ] Idempotencia por hashes en entorno temporal.
- [ ] 34 módulos físicos, 34 registros y 34 docs; cero faltantes/huérfanos.
- [ ] Cero `admision-asesoria.module` y cero `admision-asesoria.md`.
- [ ] Relación `admision-asesoria → apoyos-asesoria` visible en registry, catálogo y
  documentación.
- [ ] 25 docs de módulos vivos completos; nueve stubs incrementales.
- [ ] Tier del catálogo proviene del registry; global técnico proviene de meta.
- [ ] Discrepancias se reportan y no se corrigen automáticamente.
- [ ] Candidatos semánticos incluyen evidencia y no equivalen a compatibilidad.
- [ ] `validate` y CI no fueron modificados.
- [ ] Ninguna dependencia npm nueva.
- [ ] Hashes de módulos/templates coinciden con Task 0 y no hay diff en páginas.
- [ ] No se ejecutaron `hs cms upload`, fetch, deploy, push ni mutaciones del portal.
- [ ] Revisor independiente emite reporte sin bloqueantes.

### Entrega

- Resumen de commits, archivos y pruebas.
- Discrepancias o deudas pendientes claramente separadas.
- Confirmación explícita de que no se tocó ni publicó código del theme.
- Ningún push, PR o deploy forma parte de este plan.
