# Foráneos — propuesta de diseño

Fuente de contenido: `foraneos.md` v4 (handoff con arquitectura + copy final).
Destino: maqueta `foraneos.html` → módulos HubSpot en el theme `anahuac-mexico`.

El copy del handoff se usa **literal**. Este documento resuelve únicamente el
diseño: qué componente monta cada módulo, de dónde sale y qué hay que construir.

Antes de proponer nada se inventariaron los componentes existentes en las siete
maquetas del sitio. **De los 16 módulos, 12 se resuelven con componentes que ya
existen.** Solo dos son realmente nuevos.

---

## Mapa de reutilización

| # | Módulo | Componente | De dónde | Trabajo |
|---|---|---|---|---|
| 1 | Hero | `.apo-hero-inner` + `.apo-hero-info` (copy centrado → media + panel + CTAs) | `apoyos-economicos.html` | Adaptar: el video sustituye a la foto |
| 2 | ¿Quién es foráneo? | `.plan-bloques` / `.plan-bloque--prof` `--anahuac` | `psicologia.html` | Reutilizar con 2 tarjetas |
| 3 | ¿Por qué la CDMX? | `.consideraciones-grid` / `.consideracion` | `apoyos-economicos.html` | Adaptar a 6 ítems — **ver observación 4** |
| 4 | León Anáhuac | `.experience` completo | `Inicio.html` | Reutilizar sin tocar |
| 5 | Calculadora | — | — | **Nuevo** |
| 6 | Hospedaje | `.fechas-grid` + `.fechas-col--orange/--purple` + `.asesor-card` | `proceso-de-admision.html` + `apoyos-economicos.html` | Componer |
| 7 | Dos videos | `.video-card` (con su modal de YouTube) | `Inicio.html` | Reutilizar ×2 |
| 8 | Mapa de servicios | `.fechas-grid` (dos campus) + `.search-filters` (chips) | `proceso-de-admision.html` + `oferta-academica.html` | Componer |
| 9 | Salud y bienestar | `.consideraciones-grid` + `.fex-pasos` | `apoyos-economicos.html` + `fechas-de-examenes.html` | Reutilizar |
| 10 | Comunidad ADEFA + CAF | `.plan-bloques` + carrusel `.colab-docentes` | `psicologia.html` | Componer |
| 11 | Historias | `.stories` completo | `Inicio.html` | Reutilizar sin tocar |
| 12 | ¿De dónde nos contactas? | `.asesor-card` | `apoyos-economicos.html` | Reutilizar — **ver observación 1** |
| 13 | Proceso de admisión | `.adm-cta` (banda morada, 2 CTAs) + `.faq-item` para el H3 | `proceso-de-admision.html` | Componer |
| 14 | FAQ | `.faq-list` / `.faq-item` | compartido | Reutilizar sin tocar |
| 15 | Elige el siguiente paso | `.apo-siguiente-layout` + `.siguiente-cards` | `psicologia.html` | Reutilizar — **ver observación 2** |
| 16 | Footer + newsletter | footer global del theme | `pie-de-pagina.module` | Reutilizar sin tocar |

### Por qué estos y no otros

**M2 y M10 → `.plan-bloques`.** El handoff pide «2 columnas simétricas» y
`.plan-bloque` ya es exactamente eso: tarjeta con contorno de acento que alterna
naranja/morado. Es el mismo recurso visual que ya distingue «Bloque Profesional»
de «Bloque Anáhuac», así que la dupla nacional/internacional se lee sin explicar.

**M6 y M8 → `.fechas-grid`.** El sitio ya tiene un componente cuyo trabajo es
exactamente «Campus Norte a la izquierda, Campus Sur a la derecha, siempre
visibles»: es el calendario de exámenes, con su columna naranja y su columna
morada. Reaprovecharlo resuelve de golpe la regla global de «ambos campus
siempre visibles» y el requisito de accesibilidad de no ocultar ninguna columna.

**M13 → `.adm-cta` + `.faq-item`.** El módulo es corto por diseño (no duplica los
6 pasos). `.adm-cta` es la banda morada de dos CTAs que ya cierra secciones en
Proceso de admisión. El trámite migratorio va en un `<details>` del mismo
componente del FAQ: es contenido que solo interesa a una parte de la audiencia,
y el acordeón lo mantiene disponible sin imponerlo al resto.

---

## Componentes nuevos (solo dos)

### `.calc-*` — Calculadora de costo de vida (M5)

Único módulo sin referente. Se construye sobre el lenguaje ya existente:

- **Base sin JS:** tabla de tres columnas (Rubro · Campus Norte · Campus Sur) con
  el tratamiento de `.fecha-table` —etiqueta a la izquierda en tono secundario,
  valores a la derecha en negritas—. Es la vista por defecto, no un fallback
  degradado.
- **Mejora progresiva:** los controles de ajuste aparecen solo si hay JS y
  reescriben los valores de esa misma tabla. Ninguna cifra vive únicamente en el
  slider.
- **Estado vacío:** mientras no haya rangos reales, el módulo muestra el texto de
  espera del handoff y el CTA a hospedaje, con el mismo `.fechas-vacio` que ya
  usa el calendario.

### `.mapa-*` — filtros del mapa de servicios (M8)

Los chips de filtro se toman de `.search-filters` del buscador de licenciaturas;
lo nuevo es solo el agrupado por categoría dentro de cada columna de campus. Sin
JS se muestran todas las categorías, una tras otra: los filtros nunca son la
única vía al contenido.

---

## Observaciones que requieren decisión

### 1. El M12 se contradice consigo mismo — la más importante

El handoff pide para el módulo 12 «**exactamente el mismo componente de
apoyos-economicos.html**» y, en la misma línea, «**sin selector de estado**».

Son incompatibles. El componente de Apoyos **es** un selector: una cascada
región → estado → preparatoria cuyo propósito es resolver a qué asesor te toca.
La tarjeta de asesor es su resultado, no el componente entero.

Como el M12 declara un asesor único y confirmado (Angel René Islas, con tres
estados), lo coherente es montar **solo `.asesor-card`** —foto, nombre, rol,
WhatsApp, agenda y correo— sin la cascada. Eso es lo que asumo.

Si en cambio se quiere que cada persona vea a su asesor según su estado, entonces
sí hace falta la cascada completa, y lo que sobra es la frase «sin selector».
Hay que decidir cuál de las dos.

### 2. «Elige el siguiente paso» pide 5 tarjetas y el componente tiene 4

`.siguiente-cards` es una retícula de **dos columnas**. Con 5 tarjetas la última
queda huérfana en una fila propia, desbalanceando el cierre de la página.

Tres salidas: dejar 4 tarjetas (la quinta, «Habla con un asesor», es un ancla
interna y ya vive como CTA en el hero); pasar la retícula a 3 columnas solo en
esta página (rompe la consistencia que el propio brief pide); o aceptar la fila
huérfana. **Recomiendo la primera.**

### 3. El hero no puede tener video de fondo y CTA sin scroll a la vez

El handoff pide «CTA visible sin scroll» y, al mismo tiempo, video de fondo con
subtítulos y control de pausa. Con el `padding-top` de 191px que el sistema
reserva para el nav fijo y el H1 a 88px, un hero con video no deja los CTAs
arriba del pliegue en una laptop de 900px de alto.

Ya nos pasó en Fechas de examen y ahí se resolvió priorizando la escala del
sistema. Propongo lo mismo: hero con la estructura de Apoyos y los CTAs justo
debajo del pliegue, que es además lo que el propio wireframe del handoff describe
para móvil («el video del hero y sus 2 CTAs se revelan justo debajo del primer
scroll»). El texto de la ficha y el del wireframe no coinciden entre sí.

### 4. El M3 depende de un banco de fotos que no existe

«Mosaico de bullets sobre imágenes/video reales» — pero el propio handoff lista
el banco de fotografía real como pendiente, y prohíbe expresamente el stock.

Propongo publicar el módulo con `.consideraciones-grid` (icono + texto, sin
fotos), que es escaneable, ya existe y no depende de material inexistente. Cuando
llegue la fotografía real se sustituye el icono por la imagen sin tocar la
retícula.

### 5. Dos módulos saldrían vacíos el día uno

La calculadora (M5) y el mapa de servicios (M8) son los dos módulos más caros de
construir y **ninguno tiene datos reales**: ambos figuran como bloqueantes en el
handoff. Publicados hoy, mostrarían su estado vacío.

Conviene decidir si la página sale con ellos en estado de espera o si se pospone
su construcción a una segunda fase. No es una decisión de diseño.

### 6. El texto que el handoff marca como bloqueante ya está en nuestra maqueta

El handoff advierte de un placeholder falso sobre «proceso especial para
estudiantes internacionales con evaluación de idioma» y pregunta en qué URL vive.

**Vive en `proceso-de-admision.html`, línea 560**, dentro del FAQ:

> «Sí, contamos con un proceso especial para estudiantes internacionales que
> incluye evaluaciones de idioma y documentación adicional…»

Contradice de frente el mensaje central de Foráneos —«el proceso es el mismo para
todos»—. Es un cambio de una línea en una página ya publicada; lo corrijo en
cuanto se autorice el texto sustituto.

---

## Respuesta a una pregunta abierta del handoff

**«¿"León Anáhuac" es componente global reutilizable home↔foráneos o requiere
sincronización manual?»** — Es **global**: `experiencia.module` tiene
`global: true` en el theme. Una sola instancia de contenido para todo el sitio.

La consecuencia importante: editar sus tarjetas desde Foráneos **también las
cambia en el home**. Hoy eso es una ventaja —se edita una vez— pero si algún día
se quiere una variante propia para foráneos, habrá que dejar de usar el global.

---

## Decisiones que sí tomo por mi cuenta

- **H1 único** en el hero; el resto H2, y H3 para el trámite migratorio y cada
  pregunta del FAQ, tal como marca el mapa de encabezados.
- **Ritmo de fondos** alternando blanco / gris / blanco, con las bandas de acento
  (naranja y morada) repartidas para que no queden dos seguidas: hero blanco →
  M2 gris → M3 blanco → M4 (experience, tiene su propio fondo) → M5 gris →
  M6 blanco → M7 gris → M8 blanco → M9 gris → M10 blanco → M11 (stories) →
  M12 naranja → M13 morado → M14 casi blanco → M15 naranja → footer.
- **Separación intro → contenido de 50px** y remates de 40px, que es la escala
  real del sistema (20/40/60/100), no una escala de 8.
- **Los repeaters van a nivel raíz** cuando esto pase a HubSpot, y toda etiqueta
  HTML se emite con `|default(x, true)`: las dos reglas que este theme ya tiene
  escritas con sangre.
- **`FAQPage` y `BreadcrumbList`** se implementan; `CollegeOrUniversity` también,
  con las dos sedes.

## Conformidad con el handoff (verificada, no asumida)

Se cruzaron las **102 frases de copy literal** del documento contra el HTML.
Todo el copy de cuerpo está presente. Quedan dos desviaciones, ambas por causas
externas al diseño:

**1. Cinco de los diez `alt text` no se pueden aplicar.** El handoff da un texto
alternativo por módulo, pero cinco corresponden a fotos que la página no tiene:
la calculadora (M5), el mapa (M8), salud (M9), comunidad (M10) y admisión (M13)
se resolvieron sin imagen porque no existe material real y el propio handoff
prohíbe el stock. Los cinco restantes sí están aplicados literalmente. En cuanto
haya banco de fotografía, esos cinco textos entran con su imagen.

**2. El newsletter del módulo 16 usa el copy del footer global**, no el que
especifica el handoff («Mantente al día con la comunidad foránea Anáhuac»). El
footer es un componente compartido por todo el sitio: cambiar su copy afectaría
a las siete páginas. Requiere decisión — o se acepta el genérico, o el footer
necesita un newsletter configurable por página.

## Pendientes heredados del handoff

Bloqueantes: WhatsApp de René Islas, Inés y Carlos · el 301 de
`/admision-extranjeros` · rangos de costo de vida (M5) · los 2 videos de
experiencia y los mini-testimonios del hero · ubicación, horario y foto del CAF.

Importantes: vigencia del dato 20%/3% · roster de asesores · listado del mapa de
servicios · contactos de servicio médico y Bienestar · canal de roomies de ADEFA
· datos exactos de los tres testimonios del M11.

---

## Revisión humana local — 2026-08-20

Decisiones aceptadas para la maqueta local:

- El mapa de servicios filtra primero por Campus Norte o Campus Sur y después
  por categoría. En móvil, la categoría usa un `select`; en escritorio conserva
  las píldoras. La paginación avanza de 10 en 10 en escritorio y de 3 en 3 en
  móvil.
- El módulo de asesoría reutiliza la composición de Apoyos Económicos: fondo
  naranja punteado, copy blanco de mayor escala y tarjeta vertical del asesor.
  El texto editorial queda fijado a las tres piezas entregadas en revisión:
  título, explicación por estado/país y fallback a
  `preuniversitarios@anahuac.mx`.
- El H2 del módulo 13 es «Proceso de admisión». Debajo lleva un solo párrafo:
  «El proceso de admisión de la Universidad Anáhuac México es el mismo para
  todos. Conoce el proceso completo de admisión en un solo lugar.»
- El acordeón internacional se titula «Si vienes de otro país recuerda tu
  trámite migratorio».
- En móvil, las tarjetas de «Mucho más que solo una Universidad» usan una
  variante local de tarjetas apilables durante el scroll. El efecto no modifica
  el componente global y se desactiva si el viewport no permite mostrar una
  tarjeta completa (menos de 560px de alto) o si el usuario prefiere movimiento
  reducido. En la variante se compactan imagen y espaciado, sin ocultar copy.
- La auditoría responsive conserva un margen efectivo uniforme de 44px en los
  módulos con `section-pad`. Al apilarse, las razones de CDMX ocupan el ancho del
  contenedor; entre 661 y 900px la ficha horizontal del asesor recupera el ancho
  intrínseco de la foto para que sus datos permanezcan dentro de la tarjeta.
- En el acordeón migratorio, el aviso de responsabilidades conserva
  `--space-9` de separación antes de la lista que comienza con «Tramita tu
  visa»; la regla del acordeón no debe colapsar ese margen.

Esta revisión sigue en etapa local; no autoriza publicación ni migración a
HubSpot.
