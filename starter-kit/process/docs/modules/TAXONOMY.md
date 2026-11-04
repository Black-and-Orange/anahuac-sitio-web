# Taxonomía de módulos HubSpot

Este documento separa las dimensiones que describen un módulo. Ninguna dimensión,
por sí sola, demuestra que dos módulos sean intercambiables.

## Fuentes y autoridad

| Dato | Fuente | Uso |
|---|---|---|
| `meta.global` | `meta.json` de HubSpot | Evidencia técnica: el módulo está configurado como global o local en HubSpot. |
| `meta.categories` | `meta.json` de HubSpot | Evidencia técnica para ubicarlo en el selector del editor. |
| `registry.tier` | `docs/modules/registry.json` | Decisión humana y autoridad arquitectónica sobre su alcance de reutilización. |
| `registry.familia` | `docs/modules/registry.json` | Agrupación funcional curada para buscar candidatos. |
| `registry.capacidades` | `docs/modules/registry.json` | Responsabilidades observables normalizadas. |
| `registry.relaciones` | `docs/modules/registry.json` | Vínculos explícitos de consumo, complemento, reemplazo o candidatura. |
| Compatibilidad | Evaluación comparativa | Resultado razonado por dimensión; no se persiste como consecuencia automática de una familia o un nombre. |

`registry.tier` prevalece sobre `meta.global` para decisiones arquitectónicas. Si
discrepan, el catálogo debe mostrar ambos valores y reportar la discrepancia; nunca
debe autocorregir ninguno.

## Categorías editoriales

La categoría describe dónde y para qué aparece un módulo en el editor. Es más amplia
que una familia funcional y no implica compatibilidad.

| Categoría editorial | Señal HubSpot habitual | Descripción |
|---|---|---|
| Global | `DESIGN` + alcance global | Elementos persistentes del sitio. |
| Header | `DESIGN` | Navegación y encabezado global. |
| Footer | `DESIGN` | Pie de página global. |
| Navigation | — | Navegación, menús o rutas entre contenidos. |
| Hero | `BODY_CONTENT` | Aperturas visuales y encabezados principales. |
| Content | `BODY_CONTENT` | Secciones de contenido general. |
| Cards | `BODY_CONTENT` | Colecciones de tarjetas o fichas. |
| CTA | `FORMS_AND_BUTTONS` o `BODY_CONTENT` | Llamadas a la acción. |
| Forms | `FORMS_AND_BUTTONS` o `BODY_CONTENT` | Formularios operativos e interfaces visuales relacionadas; las capacidades distinguen si existe captura real. |
| FAQ | `BODY_CONTENT` | Preguntas y respuestas, normalmente en acordeón. |
| Media | `BODY_CONTENT` | Video, imagen o galerías como responsabilidad principal. |
| Data | — | Consulta o presentación de datos, por ejemplo HubDB. |
| Utility | — | Función auxiliar que no encaja en las categorías anteriores. |

`meta.categories` se conserva como evidencia y no se reinterpreta en silencio. Por
ejemplo, `dudas-contacto` declara `FORMS_AND_BUTTONS`, pero su HTML no contiene un
formulario: sus capacidades observables corresponden a un CTA de contacto.

## Tiers de reutilización

### Global Module

Un cambio afecta múltiples páginas. El alcance es una decisión del equipo registrada
como `tier: "global"`; normalmente coincide con `meta.global: true`, pero no se deriva
de él.

### Reusable Module

Se usa o está diseñado para usarse en varias páginas, mientras cada instancia mantiene
su propia configuración o contenido.

### Page-specific Module

Fue creado para una página. No se reutiliza salvo decisión explícita; en ese caso se
promueve a `reusable` o `global` después del análisis de impacto.

Valores permitidos: `global`, `reusable`, `page-specific`.

## Familias funcionales

Una familia responde a «¿qué responsabilidad general resuelve?». Sirve para ampliar la
búsqueda de candidatos más allá del nombre técnico. No responde a «¿lo puedo sustituir
sin cambios?». Los valores son identificadores `kebab-case`.

| Familia | Evidencia funcional que la justifica | Miembros actuales |
|---|---|---|
| `hero` | Encabezado principal, contenido de apertura y CTA/panel opcional. | `hero`, `admision-hero`, `apoyos-hero`, `oferta-hero` |
| `formulario` | Propósito visual relacionado con solicitud o contacto. Solo los miembros con un elemento/field de formulario real capturan o envían datos. | `admision-formulario`, `apoyos-formulario`, `oferta-form` |
| `faq` | Repeater de preguntas con respuestas richtext y acordeón `details/summary`. | `admision-faq`, `apoyos-faq` |
| `pasos` | Presentación de un proceso ordenado mediante items repetibles. | `admision-pasos`, `apoyos-pasos` |
| `cta` | Cierre promocional con texto y dos llamadas a la acción. | `admision-cta`, `dudas-contacto` |
| `experiencia` | Layout sticky con slides repetibles de imagen o video y CTA. | `experiencia`, `oferta-experiencia` |
| `asesoria` | Selección geográfica y asignación/contacto con asesor. | `apoyos-asesoria` |
| `navegacion-tarjetas` | Destinos relacionados presentados como cards enlazables. | `siguiente-paso`, `admision-siguiente-paso`, `comienza-tu-camino` |
| `exploracion-academica` | Descubrimiento, navegación, búsqueda o filtrado de oferta académica. | `licenciaturas`, `oferta-areas`, `oferta-search`, `descubre` |
| `catalogo-apoyos` | Resumen y detalle enlazados del catálogo de apoyos económicos. | `apoyos-panorama`, `apoyos-detalle` |

`familia: null` es deliberado cuando un módulo es único y no hay evidencia suficiente
para agruparlo. No se crea una familia a partir de un prefijo ni para evitar un valor
nulo. `asesoria` es la excepción aparente: aunque existe un solo módulo físico, tiene
dos contextos de consumo documentados —Apoyos y la sección lógica de Admisión—, de modo
que la familia describe una función reutilizada, no un nombre aislado.

## Capacidades

Las capacidades describen comportamientos o responsabilidades verificables en
`fields.json`, `module.html`, CSS, JS, assets o uso en templates. Se escriben en
`kebab-case`, como listas sin duplicados; ejemplos: `formulario-hubspot`,
`interfaz-formulario-estatica`, `inputs-sin-envio`, `acordeon-nativo`,
`video-youtube-diferido`, `filtros-por-campus` y `tarjetas-repetibles`.

No se agrega una capacidad solo porque una palabra aparezca en el nombre. Debe existir
evidencia como un tipo de field, un repeater/occurrence, una estructura HTML, una clase,
un `data-*`, una dependencia o un uso de página. Dos módulos de una misma familia pueden
tener capacidades incompatibles: `oferta-form` es una interfaz estática con inputs,
textarea, checkbox y botón, pero no contiene un elemento `<form>`, no usa un field
`type: form` de HubSpot y no envía datos. Solo `admision-formulario` y
`apoyos-formulario` renderizan un field `form` operativo de HubSpot.

## Variantes

`variantes` registra opciones reales observadas, no posibilidades imaginadas. Cuando
la variante pertenece a un field o item repetible se conserva su ruta para evitar
ambigüedad, por ejemplo `stories.layout=img-first`. Una lista vacía significa que no se
identificó una variante explícita; no equivale a que el módulo carezca de fields de
estilo.

## Relaciones

Cada relación contiene `tipo`, `referencia` y `motivo`.

| Tipo | Significado |
|---|---|
| `candidato` | Vale la pena comparar ambos módulos; no declara compatibilidad. |
| `complementa` | Los módulos colaboran, pero cumplen responsabilidades distintas. |
| `reemplaza` | Existe una decisión explícita de sustitución; no se infiere. |
| `consume` | Este registro usa otro módulo o contrato identificado. |
| `consumido-por` | Otra sección o página usa este módulo físico. |

Las referencias a módulos físicos deben existir en el registry. Se permite una
referencia lógica únicamente cuando el motivo la identifica expresamente como no
física. Este es el caso obligatorio de `admision-asesoria → apoyos-asesoria`:
`apoyos-asesoria` registra `consumido-por: admision-asesoria`, pero
`admision-asesoria` no es una clave del registry ni una carpeta `.module`.

## Familia, candidato y compatibilidad

El flujo correcto tiene tres pasos distintos:

1. **Familia:** amplía el conjunto de búsqueda según la función y capacidades curadas.
2. **Candidato:** señala que existe evidencia suficiente para hacer una comparación.
3. **Compatibilidad:** compara el contrato real antes de decidir reutilizar, adaptar o crear.

La compatibilidad debe revisar, como mínimo:

- metadata y tier;
- paths completos, tipos, defaults y occurrence de fields;
- estructura HTML, elementos raíz y semántica;
- clases, selectores CSS y responsive/breakpoints;
- JS, hooks, IDs y atributos `data-*`;
- variantes;
- assets y dependencias;
- uso e impacto en páginas.

Coincidir en nombre, prefijo, categoría, familia o algunas capacidades nunca basta. La
evaluación devuelve evidencia y brechas por dimensión; una persona decide después
**REUTILIZAR / ADAPTAR / CREAR**.

## Estado y páginas de portal

Valores permitidos de `estado`: `Draft`, `Development`, `Approved`, `Deprecated`.

`paginas_portal` conserva usos conocidos que no pueden derivarse de los templates
versionados. Las páginas detectables desde templates se calculan después y no deben
duplicarse manualmente. Una relación prevista o lógica tampoco se convierte
automáticamente en un uso confirmado del portal.
