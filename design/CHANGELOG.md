# CHANGELOG del design system

Registro de cambios al sistema (componentes, tokens, variantes, efectos, patrones).
Toda promoción a documento base (ver `docs/change-protocol.md`) se anota aquí. Lo más reciente arriba.

---

## 2026-08-31 — Nutrición · el muro de aliados se queda en dos grupos, y fuera una pregunta del FAQ

Segunda tanda de la misma revisión.

**Aliados (M9).** «Convenios nacionales» y «Convenios académicos
internacionales» pasan a **«Aliados nacionales»** y **«Aliados internacionales»**,
y cambian de orden: **nacionales primero**. El tercer grupo, «Cátedras
corporativas» —3M, Toks, Seguros Atlas, PwC, Phillips, Oracle, Manpower, Hospital
Ángeles y GE—, **se elimina**.

- **La rejilla de 3 columnas sigue siendo la correcta.** Se eligió porque los
  grupos de 3, 6 y 9 dividían exacto; ahora son 6 y 3 y siguen dividiendo exacto:
  dos filas llenas y una, cero huecos. El comentario del bloque 5 de
  `nutricion.css` queda actualizado.
- **Buena noticia para el bloqueante de logotipos:** los pendientes bajan de 17 a
  **8**, y con las cátedras se fueron ocho de las nueve marcas comerciales. De
  los que faltan, **solo Herdez** necesita autorización de uso.

**FAQ (M11).** Se elimina «¿Es lo mismo estudiar Nutrición que Medicina en la
Anáhuac?» —del acordeón y de su entrada en el `FAQPage`, que se validó después
del corte—. El acordeón queda en 7 preguntas y la 2, la que sostiene
`qué materias se ven en la carrera de nutricion`, no se mueve de su sitio.

⚠️ **Esa pregunta estaba marcada en el spec como no removible:** respondía una
objeción documentada por la Facultad, igual que la tarjeta de afinidad que se
retiró en la tanda anterior. Con las dos fuera, la página ya no contrasta
Nutrición con Medicina en ningún sitio. Es decisión de la clienta y queda
registrada por si la Facultad la revisa.

---

## 2026-08-31 — Nutrición · ajustes de copy de la clienta, y el H1 vuelve al molde

Once cambios de contenido pedidos en revisión. Dos tienen consecuencia en el
sistema:

**El bloque 2 (H1 a 64px) se elimina.** El titular pasó de «Licenciatura en
Nutrición en la Universidad Anáhuac México» (54 caracteres, cuatro renglones a
88px) a «Licenciatura en Nutrición» (25). Esa excepción existía *por* la longitud
del titular: con 25 caracteres el molde vuelve a ser correcto y, de paso, las dos
páginas de carrera comparten por fin el mismo tamaño de H1 —Psicología tiene 26
caracteres—. Verificado a 1440, 820 y 390.

**Mueren dos reglas con su contenido.** `.nut-aeo-nota` (la línea de créditos por
bloque bajo las cifras del perfil de egreso) y `.nut-plan-nota` (la salvedad del
plan de referencia bajo las pestañas): la clienta retiró los dos textos, así que
se borran las reglas en vez de dejarlas huérfanas. Con eso las desviaciones de
`nutricion.css` sobre el molde bajan de tres a dos: quedan la rejilla de aliados
(bloque 5) y la proporción de la foto de campo laboral (bloque 9).

El resto son cambios de texto y viven en `specs/nutricion.md`: las cuatro
tarjetas de afinidad, la intro del plan, los tres Prácticum sin negrita, el texto
de los bloques Profesional y Electivo, el RVOE sin fecha, y el H2 y la intro de
campo laboral.

### 🔴 Consecuencia de SEO que hay que decidir

El H2 de campo laboral pasa de «¿Dónde puedes ejercer como nutriólogo o
nutrióloga?» a «¿Dónde puedes ejercer como nutriólogo?». La keyword
`carrera de nutriologa` (260 búsquedas/mes) **está hoy en posición 1**, y el
propio spec advertía que el femenino tenía que seguir en ese H2 para no perderla.
Ahora «nutrióloga» no aparece en ningún encabezado de la página: solo sobrevive
en los `data-alt` de cuatro de los seis tiles de M6. Detalle y opciones en
`specs/nutricion.md` § 3.

---

## 2026-08-31 — La revisión de diseño de Nutrición sube al molde y llega a Psicología

Cierra la pregunta abierta del 2026-08-28. Se revisó Psicología con los cambios
puestos y **diez de los trece bloques suben** a `psicologia.css`: eran defectos
del molde y las dos páginas los tenían igual.

| # | Corrección | Efecto en Psicología |
|---|---|---|
| 1 | Medida de línea a 62ch | El texto corrido bajaba de 155 caracteres por línea |
| 2b | H2 a 56px | «¿Con qué perfil egresas…» pasa de 4 renglones a 2 |
| 3 | CTA del hero al tamaño grande | Deja de ser el botón más chico de la página |
| 4 | Hueco intro → contenido unificado en 50 | Tres valores distintos para el mismo papel |
| 6 | Campus alineado a la izquierda | Era el único módulo centrado del scroll |
| 7 | FAQ acotado a 1000px | Hasta 600px de naranja vacío entre pregunta y «+» |
| 8 | Campo bloqueado con contorno | «Psicología» dejaba de parecer un campo vacío |
| 10 | Texto de botón centrado | Defecto del botón del sitio en pantalla estrecha |
| 11 | Perfil de egreso: tarjetas a la columna y foto a alto completo | Desaparecen 346px de morado vacío y el borde desalineado |
| 12 | En móvil el perfil no se centra ni se encoge al 75% | Recupera eje izquierdo y ancho completo |

**Tres NO suben**, porque dependen del contenido de Nutrición y en Psicología
serían un error. Siguen en `nutricion.css` con su numeración original:

- **2 · tamaño del H1.** Calibrado para un titular de 54 caracteres. El de
  Psicología tiene 26 y a 88px cae en dos renglones equilibrados; bajarlo a 64
  sería encoger un titular que funciona.
- **5 · rejilla de aliados a 3 columnas.** Los grupos de Nutrición tienen 3, 6 y
  9 aliados y dividen exacto entre 3. Los de Psicología son 8 y 6, que dividen
  mejor entre las 4 columnas del molde.
- **9 · foto de campo laboral a 1/1.** Depende del número de ámbitos: 6 en
  Nutrición, 7 en Psicología. Con siete, la proporción 4/5 del molde ya cierra
  las dos columnas a la misma altura.

### Por qué van prefijadas con `.pagina-carrera` y no sin prefijo

`psicologia.css` lo cargan **tres** páginas, y la tercera —Área de Ciencias de la
Salud— no es una página de carrera: tiene su propio piloto `escala-2026`, que ya
resuelve por su cuenta la medida de línea y la escala de titulares, y está en
revisión en otra rama. Dejar las reglas sin prefijo le habría pisado ese trabajo.

Se añade `class="pagina-carrera"` al `<body>` de Psicología y Nutrición. Cuando
el piloto del área cierre, el prefijo se puede retirar y las reglas pasan a ser
el molde a secas.

### Verificación

- Psicología revisada módulo a módulo a 1440 y el perfil de egreso a 390.
- **Nutrición queda idéntica al píxel** en los ocho módulos afectados (hero,
  perfil de egreso, plan, campo laboral, campus, colaboradores, FAQ y
  formulario): la promoción no cambia lo que ya estaba bien.
- **Área de Ciencias de la Salud queda idéntica al píxel** en toda la página.
- `check:tokens` y `check:readiness` pasan.

---

## 2026-08-28 — Nutrición · muro de logotipos con los huecos marcados

- La clienta pidió que el módulo 9 se lea **como logotipos**, no como una lista
  de nombres, y que los que todavía no tenemos queden señalados para saber qué
  archivos hace falta que nos pasen.
- De los 18 aliados solo la UFV tiene archivo en el repositorio
  (`assets/psicologia/logos/ufv.webp`, compartido con Psicología). Ese tile va
  con su `<img>`; los otros 17 estrenan variante.
- **Variante nueva `.colab-logo-pendiente`** (aditiva, en el componente
  compartido): borde punteado, sin fondo, el nombre del aliado y la etiqueta
  «Logotipo pendiente». Marcada `[PLACEHOLDER]` — ningún tile con esa clase
  puede llegar a producción. Psicología no la usa y no cambia.
- **Se revierte el tratamiento de chips** de la revisión de diseño: se hizo
  *porque* los tiles eran texto de longitudes muy dispares, y con slots de ancho
  parejo la rejilla del molde vuelve a ser lo correcto. Va a **3 columnas** y no
  a las 4 del molde: los grupos tienen 3, 6 y 9 aliados, así que a 3 por fila
  dividen exacto —1, 2 y 3 filas llenas, cero huecos— mientras que a 4 quedaban
  1, 2 y 3 celdas vacías y el noveno tile de cátedras solo en su fila.
- En ≤640px la lista baja a **una columna**: a dos, la celda mide 155px y
  «LOGOTIPO PENDIENTE» no cabe en un renglón. Alarga el módulo en móvil; es
  temporal y se revierte con los archivos reales.
- **No se reutiliza `psicologia/logos/inp.webp`** para el Instituto Nacional de
  Perinatología: ese archivo es el Instituto Nacional de **Psiquiatría**.
- Verificado a 1440, 820 y 390.

---

## 2026-08-28 — El número de las pestañas del plan, a la tipografía de cuerpo

- Mismo origen que las cifras de display: en una fila de pestañas el estilo
  antiguo se nota **más** que en cualquier otro sitio, porque el ojo compara los
  ocho números entre sí. El 1 y el 2 quedaban bajos, el 3, 4, 5 y 7 colgaban por
  debajo de la línea y el 6 sobraba por arriba: la fila se veía descuadrada.
- Se cambia solo el número (`.plan-tab-num`), no la pestaña entera: pasar también
  la etiqueta dejaría estas pestañas sin el carácter slab del resto de la
  interfaz. Como el número ya va más grande y más pesado que la etiqueta, el
  cambio de familia se lee como parte de ese énfasis.
- El `<select>` equivalente de ≤540px **no** se toca: ahí el número va en una
  etiqueta suelta, sin otros con los que compararse, y a 16px el estilo antiguo
  es lo correcto.
- Beneficia igual a Psicología, que tiene el mismo componente.

### Inventario pendiente del mismo defecto

El barrido de las 10 páginas encontró más cifras en slab a ≥16px. **No se tocan
todavía**: viven en páginas que no están en revisión y una de ellas tiene rama
propia en curso (`cotizador-anahuac`). Decisión de la clienta.

| Tamaño | Clase | Ejemplo | Página |
|---|---|---|---|
| 100 / 80px | `stat` (`strong`) | «15», «18» | Inicio |
| 52px | `price-big` | «$85,000» | Costos y becas |
| 44px | `for-precio-monto` | «$14,300 – $26,500» | Foráneos |
| 40 / 26px | `panorama-rango` · `detalle-rango` | «10% – 50%» | Apoyos económicos |
| 30px | `for-dato-cifra` | «20%», «3%» | Foráneos |
| 22px | `fex-paso-num` | «1» | Foráneos |
| 20 / 18px | `step-num` · `step-card-num` · `steps-nav-dot` | «1», «2» | Admisión, Apoyos |

Los números **dentro de texto corrido** quedan fuera del inventario a propósito:
ahí el estilo antiguo es lo correcto y se ve bien.

## 2026-08-28 — Las cifras de display pasan a la tipografía de cuerpo

Zilla Slab trae **cifras de estilo antiguo** y su build de Google Fonts **no
incluye juego de caja alta**: comprobado, ni `font-variant-numeric: lining-nums`
ni `font-feature-settings: 'lnum' 1` cambian nada, porque el juego alternativo no
viene en el archivo. Medido a 200px:

| Dígitos | Comportamiento |
|---|---|
| 0 · 8 | altura de mayúscula |
| 1 · 2 | altura de x (más bajos) |
| 3 · 4 · 5 · 7 · 9 | bajan de la línea base |
| 6 | sube por encima de la mayúscula |

En texto corrido es una virtud: las cifras se mezclan con las minúsculas sin dar
saltos. En una cifra de display es un defecto: a 64px, «398» se lee con el 3 y el
9 caídos y el 8 flotando, y el «+1» se veía más pequeño que el «8» de al lado
siendo del mismo cuerpo. Parece un error de render, no una decisión.

- Las tres clases de cifra de display del sitio pasan a `--font-body`, que sí
  tiene cifras de caja alta: `.stat-card strong` (Inicio, Descubre),
  `.plan-aeo-dato strong` (páginas de licenciatura) y `.campo-stat > strong`.
  Peso 700 y `letter-spacing: -1px` para compensar el cambio de familia.
- **Los números dentro de un párrafo NO cambian** (`.salud-cifra`): ahí el estilo
  antiguo es lo correcto y se ve bien.
- Es la excepción deliberada a «todo titular va en la slab»: una cifra de display
  no es un titular, es un dato, y necesita leerse como un conjunto parejo. El
  porqué queda documentado en la sección «CIFRAS DE DISPLAY» de `styles.css`.
- **Este sí toca el componente compartido**, a diferencia del resto de la
  revisión: acotarlo a Nutrición habría dejado sus cifras distintas de las de
  Psicología y las de Inicio, que es la inconsistencia que se quería evitar.
  Verificado en las tres.
- Origen: revisión humana del 2026-08-28.

## 2026-08-28 — Las flechas del deslizador dejan de esconderse

- `.campus-slider-arrow` solo aparece al pasar el cursor. Es correcto en su uso
  original —adorno sobre una tira de miniaturas dentro de una tarjeta de campus,
  que se ve entera— y es un error en el deslizador de instalaciones: hay seis
  fichas y se ven tres, así que la flecha es la única señal de que el módulo
  continúa. Escondida hasta el hover, esconde el contenido. Se queda siempre a la
  vista, con sombra para despegarla de la foto y del fondo de sección.
- La flecha deshabilitada sigue oculta: en la primera posición no hay «anterior».
- Solo se cambia en `.salud-inst-slider`; las tiras de miniaturas de campus de
  Psicología y Nutrición conservan su comportamiento.

## 2026-08-28 — Cierre de la revisión

- **Área · módulo 6.** El H2 pasa a «Instalaciones de la Facultad de Ciencias de
  la Salud»: al salir las tarjetas de campus, «y campus» prometía un contenido
  que el módulo ya no tiene.
- **Área · deslizador.** Sube de 3 a 6 instalaciones para que el carrusel se lea
  como carrusel. Las tres nuevas salen del handoff, no se inventaron: el
  servicio médico de la Facultad (nombrado al cierre de la ficha dental), los
  laboratorios (copy literal, que estaba suelto en la intro del módulo) y el
  Hospital Virtual. Dos quedan marcadas `[VERIFICAR CON CLIENTE]`: el servicio
  médico no tiene descripción propia en el handoff, y el Hospital Virtual repite
  el módulo 3, donde el handoff pide que viva en exclusiva.
- **Nutrición · perfil de egreso.** Dos defectos más del molde: `.plan-aeo`
  llevaba `max-width: 530px` y quedaba 180px más estrecha que la tarjeta de
  arriba con la que comparte columna, y `.plan-top-media` iba con
  `align-self: end`, que dejaba 346px de morado vacío arriba a la derecha y dos
  columnas de 953 contra 635. Se igualan anchos y la foto ocupa el alto de la
  columna.
- **Nutrición · perfil de egreso en móvil.** El molde centra el módulo y lo acota
  al 75% por debajo de 900px. Con este copy la medida caía a ~30 caracteres por
  línea y era el único módulo centrado de la página. Se apila alineado a la
  izquierda y a ancho completo.
- Alcance local: nada publicado ni migrado a HubSpot.
- Origen: revisión humana del 2026-08-28.

## 2026-08-28 — Ciencias de la Salud: los módulos 6 y 7 se fusionan

- Las dos tarjetas de Campus Norte / Sur desaparecen y el módulo 6 pasa a
  mostrar las instalaciones de la Facultad en un deslizador de tarjetas con
  fotografía. El antiguo módulo 7 (clínicas internas) se elimina: sus tres
  tarjetas son ahora las diapositivas.
- La banda de cierre con `#TIPSANÁHUAC` se conserva y baja con el módulo 6.
- La distribución de carreras por campus no se pierde: los chips de Campus Norte
  y Sur de las fichas del módulo 4 ya la llevaban. Las direcciones postales
  quedan solo en el footer.
- El módulo deja de ser GLOBAL replicable a las 8 áreas: las instalaciones que
  muestra son propias del área.
- La numeración de módulos NO se recorre: son los números del handoff de la
  clienta y renumerarlos desincronizaría el código de su documento.
- **Mejora del componente compartido `campus-slider`** (`script.js`): cuántas
  diapositivas se ven a la vez se deducía de una constante `3` en el JS. Ahora se
  mide del layout, así que los breakpoints viven en el CSS. Sin esto, el módulo
  de instalaciones se rompía en móvil —tres tarjetas a un tercio de ancho, fuera
  de pantalla y sin navegación, porque el guard `slides.length <= 3` impedía
  montarla—. Para las tiras de miniaturas de campus el cálculo da 3 y su
  comportamiento no cambia: verificado en Psicología a 1440/1100/900/390.
- Los dos CTA de la banda morada dejan de desbordar en móvil: llevaban
  `flex-shrink: 0` para no aplastarse junto al texto y, apilados, se salían.
- Alcance local: no publicado ni migrado a HubSpot.
- Origen: revisión humana recibida el 2026-08-28.

## 2026-08-28 — Nutrición: revisión de diseño

Diez ajustes, todos prefijados con `.pagina-nutricion` porque **corrigen defectos
del molde compartido** (`psicologia.css`), no de esta página. Se acotan para no
mover Psicología sin revisarla; quedan propuestos para promoción al componente.

- **Medida de línea.** El molde no acota el texto corrido en ningún sitio: las
  respuestas del FAQ y las intros de sección corrían a 155 caracteres por línea,
  más del doble de lo legible. Se acota a 62ch.
- **Escala de titulares.** El H1 caía en cuatro renglones (282px) y, al bajarlo,
  apareció la inversión de fondo: H1 88 / H2 72. La escala del molde está
  calibrada para titulares de ~29 caracteres y los de una página de carrera pasan
  de 54. Queda 64 / 56 / 24.
- **Jerarquía de CTA.** Los botones del hero medían 195×38 con tipo de 16 y todos
  los CTA secundarios de más abajo, 53 de alto con tipo de 21: el botón de la
  conversión principal era el más pequeño de la página. Se igualan al tamaño
  grande. El CTA de la banda del Modelo Anáhuac se queda chico a propósito.
- **Ritmo vertical.** El hueco intro → contenido tenía tres valores distintos
  (32 / 40 / 50 / 60) para el mismo papel. Se unifica en 50.
- **Aliados.** La rejilla de 4 columnas fijas dejaba 1, 2 y 3 huecos al final de
  cada grupo, y con 18 tiles de 92px «¿Con quién te formas?» era la sección más
  alta de la página (1810px) por encima de las de conversión. Pasa a flujo
  horizontal: 1388px y sin huecos.
- **Eje izquierdo.** El módulo de campus era el único centrado de la página y
  rompía el eje a mitad del scroll. Se alinea el módulo completo —intro, rejilla
  y nota—, no solo la intro. Verificado: las 13 secciones arrancan en el mismo x.
- **Acordeón del FAQ.** Medía 1240px contra un titular de 690: hasta 600px de
  naranja vacío entre la pregunta y su «+». Se acota a 1000.
- **Campo bloqueado del formulario.** «Nutrición» venía prellenado pero pintado
  con el gris de texto secundario: idéntico a un placeholder. Se invierte —valor
  en color pleno, campo sin relleno y con contorno— para que se lea como dato
  resuelto y no como campo pendiente.
- **Campo laboral.** La proporción 4/5 de la foto está calibrada para los siete
  ámbitos de Psicología; con los seis de Nutrición sobraban 170px por debajo de
  los tiles. Se cuadra a 1/1 y las dos columnas cierran a la misma altura.
- **Botones de dos renglones.** `.btn` centra el bloque de texto pero no el texto
  dentro: al partirse, el segundo renglón se pegaba a la izquierda.
- Alcance local: no publicado ni migrado a HubSpot.
- Origen: revisión de diseño solicitada el 2026-08-28.

## 2026-08-27 — Nutrición: segunda página de licenciatura sobre el molde

- Nueva página `nutricion.html`, construida 1:1 sobre el molde validado en
  `psicologia.html`. Es la primera vez que el molde de licenciatura se reutiliza,
  y aguantó: **cero componentes nuevos**. Los 14 módulos salen de `psicologia.css`
  y el JS compartido (`script.js` + `psicologia.js`) funciona sin tocarlo.
- `nutricion.css` solo lleva lo que el contenido de esta carrera desvía del
  molde:
  - `.plan-tabs-nav` a 5 columnas: el plan tiene 10 pestañas (8 semestres + los
    periodos 09 y 10 de servicio social) y 8/4/2 dejaba filas cojas. La cascada
    pasa a 5 → 2 → dropdown, que son los divisores exactos de 10.
  - `.plan-aeo-datos` a 3 columnas: la tarjeta de datos duros de Nutrición lleva
    un tercer dato —el año de servicio social— que hoy el sitio vivo omite y que
    es lo que distingue de verdad la duración de la carrera.
  - Tres piezas de texto auxiliar que el molde no tenía: la nota del plan de
    referencia, el panel de los periodos de servicio social y el dato de Facultad
    de M9, este último al tamaño de nota para que no se lea como cifra de la
    carrera.
- El tercer bloque del Modelo Anáhuac se rotula **«Bloque Electivo»**, no
  «Interdisciplinario»: es la única carrera del lote con esa denominación. Se
  conserva la clase `--inter` porque es la del color del componente, no la del
  nombre.
- Alcance local: la página no se ha publicado ni migrado a HubSpot.
- Origen: handoff de diseño «Licenciatura en Nutrición v1», recibido el 2026-08-27.

## 2026-08-27 — Ciencias de la Salud: remate de campo laboral y #TIPSANÁHUAC

- El remate del módulo 5 pasa de fila con `space-between` a columna contra el eje
  izquierdo: primero la nota «Conoce el detalle de campo laboral…» y debajo los
  dos CTA. Enfrentadas a los dos extremos del renglón, la nota quedaba flotando
  sola a la derecha sin nada con qué alinearse.
- La banda de cierre del módulo 7 estrena el rótulo `#TIPSANÁHUAC` y cambia su
  texto por el que entrega la clienta. El rótulo reutiliza el tratamiento de
  Foráneos (`.for-roomies-tag`) con el color adaptado al fondo morado: `--lilac-1`
  da 4.9:1 donde el marrón de acento no se ve y el naranja se queda en 3.7:1.
  Va como `<p>` con clase y no como `<h3>`: es etiqueta, no nivel de encabezado.
- Alcance local: este ajuste no se ha publicado ni migrado a HubSpot.
- Origen: revisión humana recibida el 2026-08-27.

## 2026-08-27 — Ciencias de la Salud: router de carreras (módulo 4)

- La tarjeta a doble ancho pasa de la última posición a la primera: la regla del
  molde ahora es `:first-child:nth-last-child(odd)`. Con 5 carreras da 1+2+2 en
  lugar de 2+2+1, y el tamaño doble lo recibe Médico Cirujano —la carrera ancla
  del área— en vez de Biotecnología, que lo tenía solo por ir al final.
- Se retira la variante `.salud-campus--bi`: las carreras de Norte y Sur llevan
  ahora dos chips de campus, uno por sede, con la misma marca que las de campus
  único. «Bicampus» era vocabulario interno y el chip ya nombraba ambos campus
  entre paréntesis. Nuevo contenedor `.salud-campus-grupo` (flex con wrap).
- Los cinco `.salud-dato` cambian de registro: dejan de ser datos distintivos
  (descuentos, semestres, convenios con farmacéuticas) y pasan a ser la
  descripción de la carrera. Es contenido que entrega la clienta.
- Alcance local: este ajuste no se ha publicado ni migrado a HubSpot.
- Origen: revisión humana recibida el 2026-08-27.

## 2026-08-27 — Ciencias de la Salud: tarjeta protagonista en «Por qué elegir»

- Nueva variante de `.porque-grid`: una tarjeta puede ocupar 2 columnas × 2 filas
  y llevar fotografía a sangre en lugar de icono suelto. Las demás se reparten
  alrededor (columna derecha) y debajo (fila inferior), y la retícula queda
  llena: con 6 tarjetas y 3 columnas es la única distribución sin huecos.
- Se estrena en el módulo 3 del Área de Ciencias de la Salud con el Hospital
  Virtual, que estaba resuelto como una más de seis tarjetas idénticas siendo el
  diferenciador más memorable del área.
- La tarjeta destacada sube un escalón de titular (H3-L, 32px) y un escalón de
  cuerpo (párrafo L, 18px) sobre las secundarias, dentro del piloto `escala-2026`.
- A 2 columnas la destacada pasa a fila completa y gira a horizontal —foto a la
  izquierda—; la última secundaria toma la fila entera para no quedar huérfana.
  A 1 columna vuelve a apilarse.
- La variante va prefijada por `.salud-porque-grid` y **no toca** `.porque-card`:
  el componente es compartido con Psicología y con el módulo 7 de esta página.
- Pendiente: fotografía real del edificio (hoy va relleno) y el nombre definitivo
  del espacio — «Hospital Virtual» es provisional.
- Alcance local: este ajuste no se ha publicado ni migrado a HubSpot.
- Origen: revisión humana recibida el 2026-08-27.

## 2026-08-27 — Foráneos: Salud, #TIPSANÁHUAC y admisión en línea

- Salud y bienestar cambia su jerarquía: cuatro tarjetas antes del párrafo de
  acompañamiento, en una retícula local 2×2 que se apila en móvil.
- Las tarjetas actualizan Servicios de salud y Seguro, e incorporan Gimnasio
  Anáhuac con una variante de `consideracion` que admite imagen institucional.
- La guía de enfermedad se mueve al contenedor `#TIPSANÁHUAC` bajo el subtítulo
  «¿Te enfermaste?» y conserva cuatro opciones generales enlazadas.
- Proceso de admisión y la primera pregunta frecuente explicitan que el proceso
  se realiza en línea; el énfasis naranja conserva la misma escala tipográfica
  que el resto de la respuesta y el JSON-LD refleja el mismo contenido.
- Se mejora localmente el contraste del texto en las tarjetas de roomies, sin
  modificar el componente compartido.
- Alcance local: este ajuste no se ha publicado ni migrado a HubSpot.
- Origen: revisión humana recibida el 2026-08-27.

## 2026-08-27 — Foráneos: áreas generales y modal de ubicación

- El mapa reduce los filtros a cinco áreas generales: Salud, Entretenimiento,
  Servicios, Religión y Cultura, más la vista inicial «Todas».
- Los tipos específicos permanecen en las fichas y se agrupan por una relación
  documentada; una ficha puede participar también en Cultura cuando corresponde.
- Cada ficha recibe por mejora progresiva el CTA `Ver ubicación` y una modal
  accesible con Google Maps centrado en la zona de referencia, cierre por
  botón/backdrop/Escape, trampa de foco y retorno al disparador.
- El mapa externo se carga solo después de abrir la modal y ofrece continuidad
  en Google Maps. La dirección exacta del proveedor queda pendiente del
  directorio institucional validado.
- Alcance local: este ajuste no se ha publicado ni migrado a HubSpot.
- Origen: revisión humana recibida el 2026-08-27.

## 2026-08-27 — Foráneos: ajustes editoriales de costos y hospedaje

- La calculadora de costo de vida incorpora al final el aviso institucional que
  aclara el carácter aproximado y orientativo de los montos y recomienda
  verificarlos directamente con cada proveedor.
- El aviso reutiliza el tratamiento tipográfico `for-disclaimer` y añade solo
  una variante de espaciado local para la calculadora; no altera el patrón del
  trámite migratorio ni componentes compartidos.
- La calculadora suma el rótulo «Estimado de inversión», elimina el rubro Salud
  y recalcula los totales de ambos campus para mantenerlos alineados con los
  cuatro rubros visibles.
- Inés Vásquez cambia su puesto visible a «Coordinadora de Alumnos Foráneos» y
  el bloque de roomies incorpora el encabezado destacado `#TIPSANÁHUAC`.
- La maqueta local incorpora los tokens tipográficos de título que ya existen
  en el adapter de HubSpot, evitando valores sueltos en los dos rótulos nuevos.
- Alcance local: este ajuste no se ha publicado ni migrado a HubSpot.
- Origen: revisión humana recibida el 2026-08-27.

## 2026-08-21 — Foráneos: cascada completa de preparatoria en asesoría

- `¿De dónde nos contactas?` deja de mostrar una tarjeta fija y reutiliza el
  componente `support-advisor` completo de Apoyos Económicos.
- La primera selección ofrece `Interior de la república`, `Estado de México y
  CDMX` y `Extranjeros`; la segunda carga el estado o país correspondiente y la
  tercera aparece solo para CDMX y Estado de México.
- Los catálogos y asignaciones permanecen en una sola fuente compartida. Las
  consultas del resultado se acotan a la instancia del componente para no
  alterar las tarjetas de contacto del módulo de hospedaje de Foráneos.
- Alcance local: este ajuste no se ha publicado ni migrado a HubSpot.
- Origen: revisión humana recibida el 2026-08-21.

## 2026-08-20 — Foráneos: filtros móviles, asesoría y admisión

- El filtro de categorías del mapa cambia de píldoras a `select` por debajo de
  640px; el campus conserva dos pestañas visibles. Ambos controles comparten el
  mismo estado y el menú del `select` se eleva sobre las tarjetas animadas.
- El mapa pagina en bloques de 10 tarjetas en escritorio y de 3 en móvil; al
  cambiar campus o categoría vuelve al primer bloque.
- `¿De dónde nos contactas?` reutiliza la composición visual de
  `support-advisor`: banda naranja punteada, texto blanco de display y tarjeta
  vertical del asesor.
- Las tarjetas dobles de Comunidad foránea y «¿Quién es foráneo?» se apilan en
  una sola columna por debajo de 900px; el breakpoint iguala la especificidad de
  la retícula base para evitar que la segunda tarjeta quede recortada.
- Las cuatro tarjetas de «Mucho más que solo una Universidad» incorporan una
  variante local de *stacking cards* en móvil: cada tarjeta queda sticky y la
  siguiente se superpone durante el scroll. La lista normal se conserva con
  movimiento reducido o en viewports menores a 560px de alto; dentro del efecto
  se compactan imagen, padding y separación para mantener el contenido visible.
- La auditoría móvil completa corrige dos desbordes locales: las razones de CDMX
  pasan de ancho fijo al ancho de su contenedor cuando la composición se apila,
  y la ficha horizontal del asesor recupera el ancho intrínseco de su foto entre
  661 y 900px. Se verificó sin recortes entre 320 y 900px. El aviso del trámite
  migratorio conserva además `--space-9` antes de la lista de pasos; una regla
  compartida del acordeón anulaba por especificidad el margen previsto.
- El módulo `Proceso de admisión` elimina el calificativo «para foráneos», deja
  un solo párrafo introductorio y renombra el acordeón internacional como
  «Si vienes de otro país recuerda tu trámite migratorio».
- Alcance local: no se publicaron cambios ni se modificó el theme de HubSpot.
- Origen: revisión humana recibida el 2026-08-20.

## 2026-08-04 — HubSpot: arranca la migración de Proceso de admisión

- Spec completa en `specs/proceso-de-admision-hubspot.md`: 9 módulos, campos por
  módulo y consideraciones técnicas. Módulos **3 (fechas)** y **8 (asesoría)**
  congelados por decisión del cliente.
- Decisiones del cliente (2026-08-04): iconos por **subida libre** con el SVG del
  design system como default; vídeo por **YouTube**; la asesoría **se reutiliza**
  de `apoyos-asesoria` con un `mostrar_preparatoria`, no se duplica.
- **Trabajo previo.** 8 imágenes webp → JPEG (750 KB → 684 KB). Token `--size-60`.
- **El CSS no se anexó completo.** De sus 141 selectores, 87 ya estaban en el
  theme (los componentes compartidos llegaron con Apoyos) y en 8 la versión del
  theme era la nueva, con los hooks `--support-*`. Anexar todo los habría pisado.
  Nuevo `scripts/hs-extraer-css-nuevo.mjs` anexa solo las 54 reglas nuevas.
- **El JS no necesitó bloques nuevos**: timeline, propedéuticos y asesoría ya
  estaban, y la asesoría del theme es la versión más reciente. Solo se generalizó
  el manejador de formulario, que cubría `.apo-form` pero no `.adm-form`.
- Construidos los **7 módulos** (211 campos) y la plantilla
  `templates/proceso-de-admision.html` («Proceso de admisión — Anáhuac»):
  `admision-hero` (27), `admision-pasos` (56), `admision-cta` (26),
  `admision-propedeuticos` (36), `admision-siguiente-paso` (29),
  `admision-faq` (18) y `admision-formulario` (19).
- **Fuera por decisión del cliente:** Fechas de exámenes (espera HubDB) y
  Asesoría (reutiliza `apoyos-asesoria`, no se duplica).
- En Pasos, el número del dot y los `data-step`/`data-panel` se generan con
  `loop.index`: en la maqueta estaban escritos a mano y editar el listado habría
  desincronizado la línea de tiempo.
- Los hooks de las clases compartidas con Apoyos (`.step-dot`, `.siguiente-card`,
  `.faq-item`, `.prop-tab`) van acotados con el prefijo de sección `.adm-*` para
  no afectar a la página de Apoyos.

## 2026-07-31 — HubSpot: color de texto por campo

- Cada campo de texto plano expone ahora su propio **«Color de texto de «x»»**,
  justo debajo de su selector de etiqueta HTML. 65 campos en los 9 módulos.
- Vacío = manda el CSS del design system: el HubL solo emite `style="color:…"`
  cuando el campo trae valor, así que el render por defecto no cambia.
- Cuando el texto vive dentro de un contenedor que hay que conservar (`dt`,
  `dd`, `summary`, enlaces) y no se eligió etiqueta, se envuelve en un `<span>`
  **solo si hay color**, para no meter marcado de más.
- Los colores de sección siguen existiendo para fondos, botones, iconos y
  superficies de tarjeta; el color por campo tiene prioridad sobre ellos.
- Origen: solicitud de Marketing del 2026-07-31.

## 2026-07-31 — HubSpot: el color de texto ya alcanza a todo el contenido

- Auditoría: **81 declaraciones de color eran fijas** e ignoraban el campo
  «Color de texto». El caso peor era Asesoría, con `h2` y párrafo forzados a
  blanco: su campo no hacía prácticamente nada.
- Todo texto de contenido de los 9 módulos pasa ahora por un hook
  `--support-*` / `--financing-*` con el token actual como respaldo: con el
  campo vacío el diseño no cambia.
- La regla global `.section-intro > p:not(.tagline)` pisaba el color heredado en
  los 9 módulos; se acotó a las secciones `.apo-*` con `color: inherit` para no
  tocar el resto del sitio.
- Financiamiento suma 6 campos de color (tarjeta, etiquetas, píldora, botón) y
  Asesoría 1 (tarjeta de asesor), que antes no eran configurables.
- Quedan fijos a propósito: controles de formulario (`.cselect`, selects), el
  número sobre el círculo naranja de los pasos, los indicadores «+» y los
  iconos. No son texto editorial y recolorearlos rompería el contraste.

## 2026-07-31 — HubSpot: correcciones de render en los módulos apoyos-*

- **Móvil · desbordamiento del Detalle.** `grid-template-columns: 1fr` no encoge
  por debajo del *min-content* de sus hijos: `.detalle-rango` con `white-space:
  nowrap` («Reembolso de inscripción») ensanchaba el track a 365 px dentro de un
  contenedor de 310 px. Ahora `minmax(0, 1fr)` y el rango envuelve en su fila.
- **Móvil · imágenes.** Dos causas: el CSS de las fotos de asesor usaba rutas
  relativas que HubSpot reescribe a `hub_generated/…` (404) — ahora se inyectan
  con `get_asset_url` como custom property; y el JS del acordeón traía
  hardcodeada la ruta local `assets/apoyos-economicos/` de la maqueta — ahora la
  deriva del `src` que ya resolvió HubSpot.
- Repuestas las 9 imágenes `apoyo-*.jpg`: las usa ese JS (`BASE + item.id`), no
  estaban referenciadas en el HubL y las había retirado por creerlas sin uso.

- **Etiqueta vacía.** Los `*_tag` nuevos llegan vacíos en items de repeater ya
  guardados (HubSpot solo rellena defaults a nivel de módulo). El HubL emitía
  `<>` y el navegador se comía el resto de la tarjeta. Las 76 sustituciones
  llevan ahora `|default('<etiqueta>', true)`.
- **Macro `et()` eliminado.** Un macro invocado con un atributo inexistente
  tumbaba el módulo completo — imagen incluida — porque HubSpot no imprime nada
  ante un error de ejecución. Sustituido por 27 condicionales en línea; ningún
  módulo estable del theme usa macros.
- **`choices` con valor vacío** (27 campos) → `"ninguna"`; valor no estándar.
- **`sorting_label_field`** (7 repeaters) → `null`, como en `oferta-areas`.
- **Repeaters aplanados a nivel raíz** (los 8). Anidados dentro de un grupo y
  con array de `default`, el editor guardaba el repeater vacío en la primera
  edición y se perdían todos los items. Los 18 repeaters en producción del
  theme están a nivel raíz; ahora los nuestros también, con `min: 0`.
- **Imágenes**: el Design Manager descarta `.webp`; convertidas a JPEG/PNG y
  redimensionadas (1.8 MB → 765 KB).
- **Indicador «+» del acordeón de Detalle** siempre alineado a la derecha: el
  espacio libre lo absorbe ahora `.detalle-nombre` (`flex: 1 1 auto`) en vez
  del `margin-left:auto` del rango, que desaparecía al ocultar el porcentaje.
  En móvil ya era correcto (el «+» es una columna del grid).
- Verificado descargando el HTML servido del preview: 0 etiquetas rotas,
  0 errores de HubL, 0 imágenes rotas, las 8 fichas y las 8 tarjetas completas.

## 2026-07-31 — HubSpot: control editorial de etiquetas, colores y visibilidad

- **65 de los 68** campos de texto plano exponen un selector de **etiqueta HTML**
  (`h1`–`h6` o `p`) que no altera el estilo visual. Cuando el texto vive dentro
  de un contenedor que debe conservarse (`dt`, `dd`, `summary`, enlaces), el
  selector lo *envuelve* y trae «Ninguna» por defecto; una regla de herencia en
  `main.css` evita que el elemento elegido cambie el diseño.
- Quedan fuera 3 campos a propósito: el `ancla` de cada ficha (es un `id`, no
  texto) y las dos etiquetas `<label for>` de los selectores de Asesoría
  (convertirlas en encabezado rompería la asociación con el `<select>`).
- Los 9 módulos exponen color de fondo y color de texto de sección.
- Nuevo grupo **Estilos** (pestaña STYLE del editor) por módulo: color de fondo,
  de texto y, donde aplica, de botones e iconos. Vacío = token del design system.
- Nuevo grupo **Visibilidad** en Panorama, Detalle, Financiamiento y
  Consideraciones: oculta datos sin borrar su contenido.
- El porcentaje de Panorama y Detalle se puede ocultar y cambiar de tamaño desde
  una lista cerrada de tokens (`--size-22` … `--size-48`).
- El CSS expone `--support-*` por sección con *fallback* al token, así el render
  por defecto no cambia y los campos solo sobreescriben lo que se llene.
- Los cambios son **aditivos**: no se renombró ni eliminó ningún campo, para no
  perder contenido ya capturado en páginas.
- Origen: revisión humana de Marketing recibida el 2026-07-31.

## 2026-07-30 — HubSpot: módulos de Apoyos Económicos y tokens nuevos

- Se materializan en el theme `anahuac-mexico` (portal 3807214) los 8 contratos
  de la LP más el formulario: `apoyos-hero`, `apoyos-panorama`, `apoyos-detalle`,
  `apoyos-financiamiento`, `apoyos-consideraciones`, `apoyos-pasos`, `apoyos-faq`,
  `apoyos-asesoria` y `apoyos-formulario`.
- Header y footer **reutilizan** los módulos globales existentes (`encabezado`,
  `pie-de-pagina`): no se creó ninguno nuevo.
- Plantilla `templates/apoyos-economicos.html` (`templateType: page`), con los 9
  módulos precargados en un `dnd_area` reordenable desde el editor.
- El CSS y el JS de la LP se integran a `css/main.css` y `js/main.js` del theme,
  no a `module.css` por módulo (convención vigente del theme).
- Tokens de tamaño añadidos: `--size-15`, `--size-19`, `--size-36`, `--size-48`,
  `--size-52`, `--size-56`, `--size-58`, `--size-70`.
- Tokens de color añadidos: `--orange-hover`, `--text-invert-85`,
  `--text-invert-70`, `--purple-tint`, `--surface-tint-soft`.
- `adapters/hubspot/theme/` queda como espejo versionado del theme del portal.
- Origen: solicitud de migración a HubSpot recibida el 2026-07-30.

## 2026-07-30 — support-advisor: cascada de procedencia y preparatoria

- El primer selector se limita a `Extranjero` y `México`.
- El segundo selector carga países o las 32 entidades federativas según la procedencia.
- Se documenta un tercer selector condicional de preparatoria para Ciudad de México y Estado de México.
- El tercer selector permanece oculto en la carga inicial y solo se revela tras una selección explícita de estado.
- La carga inicial no precarga `Ciudad de México`: el segundo selector arranca en el primer estado del catálogo.
- El contrato separa `origins`, `countries`, `states` y `schoolsByState` para permitir su sustitución futura por HubDB.
- La relación institucional completa de preparatorias permanece pendiente de aprobación.
- Origen: revisión humana del módulo de Asesoría recibida el 2026-07-30.

## 2026-07-30 — componentes: contratos de Apoyos Económicos

- Documentados ocho contratos neutrales para la LP: hero, panorama, detalle, financiamiento, consideraciones, pasos, FAQ y asesoría.
- Definidos los campos editables, controles de visibilidad, repeaters y límites solicitados para la futura migración a HubSpot.
- `support-steps` incorpora un disclaimer opcional para concursos académicos y navegación generada desde el número real de pasos.
- `support-advisor` conserva una interfaz de datos reemplazable para una futura fuente HubDB.
- La semántica aprobada mantiene una sola H1, H2 por módulo, H3 por tarjeta y controles `details/summary` sin headings inválidos dentro de `summary`.
- Origen: revisión humana e instrucciones de contenido recibidas el 2026-07-30.

## 2026-06-08 — token: ingesta inicial de Figma UI Kit

- **Tokens poblados** desde el Figma UI Kit (`Xn92P26S9mq9xYsHyoPUjz`):
  - Colores primarios: Naranja Anáhuac (#FF5900), Café Anáhuac (#6B3F23), Negro, Blanco.
  - Colores secundarios: escala morada monocromática (5 tonos: Jacarta → Biloba Flower).
  - Colores de acento: Cinnabar, School bus Yellow, Denim, Grape, Korma, Tuatara.
  - Colores de sistema: Black Web (#0C1115), Texto (#788592).
  - Tipografía heading: Zilla Slab (alternativa open-source de Sharp Slab).
  - Tipografía body: Roboto.
  - Escala tipográfica: H1 (75px) → H6 (18px) + Párrafo (16px) + Frase (37px italic) + Botones.
  - Radios: 10px (botones), 20px (estándar), 40px (secciones).
  - Escala de espaciado: 14 niveles (4px → 120px).
- **Foundations** pobladas: container 1280px, nav-height 80px, breakpoints desktop/tablet/mobile.
- **Interactions** documentadas: scroll reveal, counter animado, hover effects, motion tokens.
- Documentos actualizados: `design/01-tokens.md`, `design/02-foundations.md`, `design/interactions.md`, `design/assets.md`.
- Origen: ingesta Figma (onboarding).

## 0.3.0 — memoria del proyecto
- `MEMORY.md`: continuidad entre agentes/sesiones/modelos (decisiones, estado, preferencias, aprendizajes, preguntas abiertas).
- Da a modelos no-Claude la memoria persistente que Claude tiene nativa, pero compartida en git.
- Alcance delimitado para no duplicar CHANGELOG/inventory/specs; con disciplina de curación y tope de tamaño.
- Integrado en AGENTS.md (lectura + regla), workflow, onboarding (Paso 5) y human-review.

## 0.2.1 — adaptador Antigravity
- `GEMINI.md` (adaptador delgado → `AGENTS.md`) para Google Antigravity, que prioriza `GEMINI.md` sobre `AGENTS.md`.
- Verificado: Antigravity lee `AGENTS.md` nativo (v1.20.3+, límite 12k chars; el nuestro = 5.9k) y soporta Figma vía MCP → el gate por capacidad aplica sin cambios.

## 0.2.0 — gate Figma-MCP-first + reglas de calidad
- Gate de readiness (`docs/readiness.md` + `scripts/check-readiness.mjs`): no se construye sin Figma ingestado (`status.figmaIngested`), sin `TODO` en tokens ni `[PLACEHOLDER]`.
- Figma obligatorio: el agente que corre el sistema hace la ingesta; sin acceso, se detiene.
- Gate **por capacidad, no por tool**: vale cualquier integración de Figma (Dev Mode MCP `get_*`, o `use_figma`/`figma-use`, etc.). Descubierto al validar en Codex, que usa un MCP de Figma distinto al Dev Mode.
- Tipografía: tokens `--font-heading`/`--font-body` + escala obligatoria; lint contra font literal.
- Imágenes: política de pertinencia + placeholders que rompen CI.
- Ritmo vertical + `--nav-height` (safe-area del hero) para evitar recortes.

## 0.1.0 — framework template
- Estructura inicial del framework (núcleo neutral + adapters + roles + onboarding + enforcement).
- Sin tokens ni componentes de proyecto: estado de clean install. Se pueblan en el onboarding (ver `START-HERE.md`).
