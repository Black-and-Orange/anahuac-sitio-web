# Área de afinidad — propuesta de diseño y sistema

Piloto: **Ciencias de la Salud**. Fuente de contenido: `area-ciencias-de-la-salud.md`.
Destino: maqueta `area-ciencias-de-la-salud.html` → molde para las demás áreas.

El copy del handoff se usa **literal**. Este documento resuelve el diseño y, sobre
todo, **qué queda fijado como sistema** para las áreas siguientes.

---

## El hallazgo que ordena todo el sistema

La página de Oferta Académica ya tiene un componente —`.area-card`— que presenta
**las áreas**: imagen, nombre, gancho, descripción y CTA, dentro de un carrusel
que ya soporta un número variable de tarjetas mediante clones.

El módulo 4 de esta página necesita exactamente eso, un nivel más abajo del
embudo: presentar **las carreras** de un área.

No es una coincidencia aprovechable, es la forma correcta del sistema:

> **Oferta Académica → tarjeta de área → Página de área → tarjeta de carrera → Página de carrera**

El mismo componente en los dos escalones. Y el encadenamiento ya existe en el
contenido: el gancho de la tarjeta «Ciencias de la Salud» en Oferta Académica es
literalmente «¿Te interesa comprender cómo funciona el cuerpo humano?», que es el
H2 del módulo 2 de esta página. El usuario reconoce dónde entró.

Esto resuelve además el requisito del molde —«5 en Salud; hasta 11 en otras
áreas»— sin inventar nada: **el carrusel ya está construido para eso.**

---

## Mapa de componentes

| # | Módulo | Componente | De dónde | Tipo |
|---|---|---|---|---|
| 1 | Hero | patrón de hero del sistema (eyebrow + H1 + claim + 2 CTAs + media) | `apoyos-economicos.html` | **Reutilizable** |
| 2 | ¿Te interesa el cuerpo humano? | `.afinidad-grid` (4 tarjetas, icono + texto) | `psicologia.html` | **Reutilizable** |
| 3 | Por qué elegir el área | `.porque-grid` (3 col → 3+3 con 6 tarjetas) | `psicologia.html` | **Reutilizable** |
| 4 | **Encuentra la carrera** | **`.area-card` + su carrusel** | `oferta-academica.html` | **Núcleo del sistema** |
| 5 | Campo laboral | `.consideraciones-grid` (6 ámbitos) | `apoyos-economicos.html` | **Reutilizable** |
| 6 | Instalaciones y campus | **`.campus-grid` / `.campus-card`** | `psicologia.html` | **Global** |
| 7 | Clínicas internas | `.porque-card` con foto + banda destacada | `psicologia.html` | **Variable** |
| 8 | Historias Anáhuac | `.stories` completo | `Inicio.html` | **Global** |
| 9 | FAQ | `.faq-list` / `.faq-item` | compartido | **Global** |
| 10 | Elige el siguiente paso | `.pasos-grid` + `.paso-card` (intro + 5 tarjetas = 2 renglones exactos) | `psicologia.html` | **Global** |
| 11 | Footer + newsletter | footer global | `pie-de-pagina.module` | **Global** |

**Once módulos, cero componentes nuevos.** Todo se resuelve con lo que el sitio
ya tiene; lo único que hay que construir es una variante de retícula (ver abajo).

### Los tres tipos, aplicados

**Global — idéntico en las 8 áreas, contenido incluido:** campus (módulo 6),
Historias (8), Elige el siguiente paso (10) y footer (11). En HubSpot deben ser
módulos globales: se editan una vez y cambian en las ocho.

**Reutilizable — misma estructura, contenido distinto:** hero (1), afinidad (2),
diferenciadores (3), campo laboral (5) y FAQ (9). Mismo componente y mismas
reglas de espaciado; cambia el texto y la imagen.

**Variable — puede necesitar adaptación por área:** el módulo 4 —cambia el número
de carreras— y el módulo 7, que es el único genuinamente específico: «clínicas
universitarias internas» no existe en Negocios ni en Comunicación. En esas áreas
ese hueco lo ocupa su propio diferenciador tangible (laboratorios, estudios de
TV, aulas bursátiles). **La regla no es «todas tienen clínicas», es «cada área
tiene un módulo de instalación diferenciadora en la posición 7».**

---

## Lo que la construcción corrigió de esta propuesta

**No hizo falta construir nada.** La propuesta anunciaba una variante de tres
columnas para el cierre, porque `.siguiente-cards` es de dos y el handoff pide
cinco tarjetas. Al maquetar apareció que psicología ya lo había resuelto con otro
componente: `.pasos-grid` es de **tres** columnas y coloca la intro en la primera
celda, así que las cinco tarjetas llenan las cinco restantes — dos renglones
exactos, sin huérfanas. Es el componente correcto para el módulo 10 y no
necesita variante.

Lo que sí hubo que hacer fue **mover cosas de sitio**, que es distinto de
construirlas — y es el hallazgo de sistema más útil de este piloto.

### Tres componentes compartidos vivían en la hoja de una sola página

La página de área es el segundo consumidor de varios componentes que, hasta
ahora, tenían un único dueño. Al enlazarlos simplemente no aparecían:

| Componente | Vivía en | Síntoma al reutilizarlo |
|---|---|---|
| `.area-card` (+ `.btn-sm`) | `oferta.css` | la tarjeta perdía su retícula y el botón se quedaba sin padding |
| `.consideracion*` | `apoyos-economicos.css` | la rejilla se volvía una lista y los iconos crecían a 1200 px |
| carrusel de fotos de campus | `psicologia.js` | las tarjetas de campus salían sin navegación |

Los tres subieron a `styles.css` / `script.js`. Las reglas responsive propias de
cada página se quedaron en su hoja: como cargan después, siguen ganando donde
deben. Ninguna de las 7 páginas del sitio cambió — se verificó midiendo.

**La regla para las otras siete áreas:** si un módulo necesita un componente que
sólo existe en la hoja de una página, no se copia — se sube. Con ocho páginas por
delante, copiar es multiplicar por ocho el mismo mantenimiento.

---

## Decisiones de UX

**El orden del handoff se respeta.** La secuencia descubrimiento → consideración
→ decisión → acción está bien resuelta: afinidad (2) antes que oferta (4), y el
campo laboral (5) justo después de elegir carrera, que es cuando aparece la
objeción de los padres. No propongo cambios de orden.

**El módulo 4 sube en peso visual.** Es la micro-conversión principal —el clic a
una carrera— y en una lectura rápida compite con los módulos 3 y 5, que también
son rejillas de tarjetas. Se le da fondo propio y más aire para que destaque como
el momento de decisión de la página.

**Los módulos 3 y 5 no pueden usar el mismo componente.** Ambos son «seis cosas
con icono»; usar `.consideraciones-grid` en los dos crearía dos pantallas
idénticas separadas por el módulo 4. El 3 usa las tarjetas con contorno de acento
y el 5 la rejilla de iconos, que además es más ligera y le corresponde por ser
información de apoyo.

**El indicador de campus va como chip, no como texto.** Es el dato que más se
consulta —«¿dónde se estudia esto?»— y el handoff insiste en no afirmar que todas
son bicampus. Un chip lo hace escaneable sin leer la tarjeta entera.

**Sin formulario, por decisión del handoff.** La página cierra con un menú de
decisión. Eso baja la fricción y encaja con el objetivo: enrutar, no capturar.

---

## Reglas que quedan fijadas para las otras áreas

Lo que **no** se toca al duplicar:

- **Retícula y anchos:** contenedor de 1280px, margen lateral de 80/24px.
- **Espaciado:** padding de sección 100/80/60 por breakpoint; separación intro →
  contenido de 50px; remates de 40px. La escala del sistema es 20/40/60/100, no
  múltiplos de 8.
- **Tipografía:** escala del sistema; un solo H1 por página, H2 por módulo, H3 por
  tarjeta o pregunta.
- **Tarjetas:** radio 20px, borde de 2px, padding 28px (32 en tarjeta grande),
  elevación de 4px al pasar el puntero.
- **Botones:** un CTA primario por módulo, con la jerarquía del handoff.
- **Ritmo de fondos:** blanco / gris alternando, con las bandas de acento
  reservadas para el cierre. Nunca dos acentos seguidos.
- **Orden de los 11 módulos.**

Lo que **sí** cambia por área: textos, imágenes, número de tarjetas del módulo 4,
el diferenciador tangible del módulo 7, y los enlaces a carreras.

---

## Notas de la maqueta

**El módulo 4 no va en carrusel.** En Oferta Académica la tarjeta de área vive en
un carrusel de dos columnas y dos renglones visibles. Aquí no: con 5 carreras,
esconder cuatro detrás de una flecha trabaja justo en contra de la
micro-conversión. Van todas a la vista.

**Cómo soporta el número variable de tarjetas.** Dos columnas y, cuando el total
es impar, la última ocupa el renglón completo — CSS puro, sin JS. Da 2+2+1 con
cinco carreras y 2+2+2+2+2+1 con once. Al duplicar la página basta con poner las
tarjetas que haya.

**La foto de la tarjeta ancha lleva proporción fija, no `height: 100%`.** Con
`height: 100%` la altura la acaba marcando el tamaño natural del archivo: esa
misma tarjeta pasaba de 380 a 605 px sólo por cambiar de foto. Es el mismo
mecanismo que hacía bailar las tarjetas en foráneos. La proporción 7/5 sobre una
franja de 420 px da exactamente los 300 px de alto que deja el `min-height` del
componente.

**Enlaces dentro de la banda naranja del FAQ.** Heredan el blanco del párrafo, así
que quedan del mismo color y grosor que el texto: invisibles como enlaces. Llevan
subrayado. Vale para las ocho áreas.

---

## Regla de fidelidad del copy

**El texto del handoff no se toca.** Ni una palabra, ni un signo. Vale para las
ocho áreas y no admite excepciones «de diseño».

Al maquetar aparecen tres tentaciones y las tres hay que resistirlas:

**Rotular lo que el handoff no rotula.** Las páginas de licenciatura llevan un
eyebrow sobre cada H2. El handoff de área solo especifica el del hero. Poner los
otros ocho es escribir copy que nadie aprobó, aunque parezca decoración. Si el
cliente los quiere por consistencia con psicología, que los entregue.

**Filtrar notas internas a la pantalla.** El handoff marca el Programa Investiga
como dato en verificación; eso es una instrucción para el equipo, no una etiqueta
para un aspirante. Va en comentario del HTML, nunca en la página.

**Recomponer una frase para que encaje en el componente.** El carrusel de
Historias pide una cita y un pie. El handoff entrega una **semblanza** en tercera
persona, no una cita. Entrecomillarla y firmarla con el nombre de un egresado
real le inventa una declaración que nunca hizo. Se presenta como enunciado, sin
comillas, respetando minúsculas y la forma exacta («egresado de X», no
«Egresado, X»).

**Lo único que sí hubo que escribir** son los cinco rótulos de botón del módulo
10 —«Agendar», «Contactar», «Cotizar», «Ver apoyos», «Empezar»—: el handoff da el
destino de cada tarjeta pero no el texto del enlace, y una tarjeta de decisión no
puede quedarse sin él. Están pendientes de aprobación.

Para comprobarlo hay dos pasadas, y hacen falta las dos: una verifica que el copy
del handoff **esté** en la página; la otra, que en la página **no haya** texto que
no venga del handoff. La segunda es la que encuentra lo que uno se inventó sin
darse cuenta.

---

## Observaciones

### 1. ¿Seis áreas u ocho?

El encargo habla de **8 áreas académicas**; el handoff dice «es la primera de las
**6** áreas de afinidad». No es un detalle: cambia el cálculo de esfuerzo y la
navegación cruzada del footer, que debe listar las demás áreas. Hay que confirmar
el número antes de construir la segunda.

### 2. El módulo 7 no es replicable como está

Es el único módulo cuyo *concepto* —clínicas internas— no existe fuera de
Ciencias de la Salud. Propongo tratarlo en el sistema como «instalación
diferenciadora del área» y no como «clínicas», para que las otras siete tengan
dónde poner lo suyo sin inventar un módulo nuevo.

### 3. Historias repite contenido con Foráneos

Los tres testimonios del módulo 8 —Urquieta, Cueva y Artes— son **los mismos** que
ya están en la página de Foráneos. Como módulo global es coherente: se edita una
vez y aparece igual en todas. Pero conviene saber que un usuario que recorra
varias páginas verá los mismos tres perfiles.

### 4. Toda la fotografía está pendiente

El handoff exige media 100% real y prohíbe el stock, y marca como pendientes las
fotos de las 3 clínicas, el Hospital Virtual, los testimonios y las 5 imágenes de
carrera. La maqueta va con relleno, marcado en los comentarios del HTML.

De las 100 piezas de copy literal del handoff, **88 están en la maqueta**. De las
12 restantes, 7 son textos alternativos de módulos que no llevan imagen o
alternativas que el propio handoff ofrece («o …»), 3 son falsos negativos de
marcado (el breadcrumb y las dos líneas de campus del footer van repartidos en
varios elementos) y **2 faltan de verdad**: los mensajes de éxito y error del
newsletter, que pertenecen al footer global y se implementan en HubSpot.

Cuando entre la fotografía real, los dos alt de fachada de campus del handoff
—«Fachada del Campus Norte…» y «Fachada del Campus Sur…»— van en la primera foto
de cada tira.

### 5. La ruta nueva da 404

El handoff avisa de que `/oferta-academica/ciencias-de-la-salud` no existe hoy y
que la equivalente viva es `/facultad-salud`. Los 301 hay que planearlos antes de
publicar, y multiplicado por el número de áreas.

---

## Pendientes heredados del handoff

URL de «Agenda tu visita» · enrutamiento del asesor (¿del área o genérico?) ·
validación por escrito de la distribución de campus · claim del Programa
Investiga · ortografía de las farmacéuticas del chip de Biotecnología · texto y
frecuencia del newsletter · keyword principal sin validar por volumen.
