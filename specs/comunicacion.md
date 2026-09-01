# Página: Licenciatura en Comunicación — Anáhuac México · **v1**
### Documento de handoff para diseño (estructura + copy final integrados)

> **Estado de implementación (2026-08-31).** Maqueta construida en
> `comunicacion.html` + `comunicacion.css`, sobre el molde de `psicologia.html`.
> Los componentes se reutilizan íntegros desde `psicologia.css`;
> `comunicacion.css` solo lleva las desviaciones de retícula que impone el
> contenido. El JS es el compartido (`script.js` + `psicologia.js`), sin cambios.
> Cero componentes nuevos.
>
> El `<body>` lleva `class="pagina-carrera pagina-comunicacion"`. El primer
> alcance es el de las diez correcciones del molde promovidas el 2026-08-31 (ver
> `design/CHANGELOG.md`): esta página nace con la medida de línea acotada, la
> escala de titulares corregida, el CTA del hero al tamaño grande, el perfil de
> egreso alineado y el resto ya aplicados. **No repitas esa revisión aquí.**
>
> Desviaciones respecto de este documento, todas anotadas en el HTML:
> - **Fotografía: 7 de 27 puestas** el 2026-08-31, de la sesión RUA 2022 · Campus
>   Sur. Cubren hero, perfil de egreso, formulario, un retrato de historias y la
>   tira del Campus Sur. Detalle y origen en `assets/comunicacion/README.md`.
> - **Las 20 que faltan van como hueco marcado, no con relleno de otra carrera.**
>   No hay una sola imagen de Comunicación en el repositorio, y el banco de
>   Psicología no sirve: una consulta clínica no ilustra un foro de televisión.
>   `design/assets.md` y `AGENTS.md` prohíben el stock ajeno al dominio. Los 20
>   huecos usan la variante `.media-pendiente`, marcada `[PLACEHOLDER]`: portada
>   del hero, isla de postproducción, 6 de ámbito laboral, 2 tiras de campus, 12
>   de historias y la del formulario. Los 6 retratos del claustro **sí llevan foto
>   de relleno** (ver el punto del claustro más abajo).
> - **🔴 El módulo 6 queda INERTE hasta que lleguen las fotos.** Los seis tiles no
>   llevan `data-img` y el preview no lleva `.campo-media`; sin esa clase el
>   manejador de `psicologia.js` sale en su primera guarda. Es deliberado: con
>   `data-img` apuntando a archivos inexistentes pediría URLs rotas y en ≤900px
>   insertaría una imagen rota sobre la tarjeta activa. Se reactiva con dos
>   cambios, anotados en el HTML.
> - **El preview de campo laboral va a 1:1 y no al 4:5 que pide este documento.**
>   Esa proporción está calibrada para los siete ámbitos de Psicología; con seis,
>   la columna de tiles termina 175px antes que la imagen. Mismo ajuste que ya
>   lleva Nutrición.
> - **El breadcrumb no enlaza el área.** «Comunicación, Arquitectura y Diseño» va
>   como texto plano: esa página de área todavía no existe en el repositorio y un
>   enlace roto es peor que ninguno. En cuanto exista, se enlaza.
> - **Video del hero:** sin `data-yt-id` y sin botón de play hasta que llegue el
>   ID. Con el id vacío el clic abre un embed roto de YouTube.
> - **Claustro docente (M9):** seis tarjetas con nombres entre corchetes. Los
>   nombres no se inventan. Los **retratos sí son de relleno**: por decisión de la
>   clienta del 2026-08-31 se usan los seis del banco de Psicología, los mismos
>   que ya usa `nutricion.html`, para que la maqueta se pueda revisar. Son
>   personas reales presentadas como claustro de una facultad que no es la suya:
>   **no pueden llegar a producción.**
> - **Testimonios (M8):** citas con la plantilla literal a la vista.
> - **Logotipos de vinculación (M9):** tiles de texto con la variante
>   `.colab-logo-pendiente`, igual que en Nutrición. Ninguno de los siete
>   (Televisa, TV Azteca, Google, Microsoft, PepsiCo, Coca-Cola, OCESA) tiene
>   archivo, y **los siete son marcas comerciales**: necesitan archivo oficial y
>   permiso de publicación.
> - **RVOE:** «RVOE SEP · D.O.F.» sin fecha ni URL, como en Psicología y
>   Nutrición. Enlazará el **plan 2025**, nunca el 2016 ni el 2010.
> - **Slug de Dirección de Empresas de Entretenimiento (FAQ 6):** el enlace queda
>   sin `href` hasta que llegue la ruta.

> **Cómo leer este documento.** Módulo por módulo: qué componente va, en qué orden, con qué contenido, y el **copy literal** listo para publicar. Todo entre comillas «…» es texto literal: **no lo reescribas**. Los bloques `[VERIFICAR]` / `[PENDIENTE]` son datos reales sin confirmar: **no los inventes ni los borres**. Los avisos **⚠️** son restricciones de arquitectura: **respétalas tal cual**. Mobile-first.

> **Molde base.** Replica **1:1 el molde validado en la maqueta de Psicología** → [`psicologia.html`](https://black-and-orange.github.io/anahuac-sitio-web/psicologia.html). Reutiliza sus componentes y clases (`lic-hero`, `lic-afinidad`, `lic-porque`, `lic-plan`, `lic-plan-est`, `lic-campo`, `lic-campus`, `stories`, `lic-colab`, `lic-pasos`, `lic-faq`, `experience`, `lic-form`). **No se diseñan componentes nuevos.**

> **⚠️ Dos particularidades de esta página:**
> 1. **El módulo de campus lleva un bloque extra de instalaciones de la Facultad** (foro, cabinas, MOCAP, Radio Anáhuac) antes de las dos tarjetas de campus. Es el activo más fuerte de la carrera.
> 2. **La página entera está construida para desmontar una objeción:** que Comunicación es «una carrera fácil» con «campo laboral limitado». Esa respuesta aparece en M1, M3, M6 y M11, en cuatro registros distintos. **No la recortes por concisión.**

---

## 1. Ficha de la página

| Campo | Valor |
|---|---|
| **Slug / URL** | `/licenciaturas/comunicacion` — confirmado en el «Mapeo de Sitio Web 2025» |
| **Tipo** | Página de licenciatura (molde estándar de carrera) |
| **Área académica** | Comunicación, Arquitectura y Diseño |
| **Audiencia** | Preuniversitario creativo + padres/madres escépticos sobre la seriedad y el futuro laboral de la carrera |
| **Objetivo** | Convertir en **solicitud de información** (M13) o en **inicio de admisión** (`/admision-general`) |
| **Campus** | Anáhuac México: **Norte** (Huixquilucan, Edo. Méx.) y **Sur** (Álvaro Obregón, CDMX) — presencial, ambos con instalaciones de producción |
| **KPI** | Envíos del formulario M13 · descargas de plan y folleto · interacción con las tabs (M5) y los tiles (M6) · scroll-depth al FAQ (donde viven las respuestas a las objeciones) |

## 2. Reglas globales

- **Un mensaje por módulo, sin redundancia.** El **detalle completo de instalaciones** va **solo en M7**; M3 lo menciona en una línea. El **listado de empresas y organizaciones** va **solo en M9**. Las **acreditaciones** van **solo en M3**. La **internacionalización** va **solo en M9**. El **foro** se trata en tres niveles (M3 enuncia · banda de M6 desarrolla · M7 inventaría).
- En el clúster «Elige el siguiente paso», la tarjeta se titula **«Apoyos socioeconómicos»**. En copy corrido sí puede decirse «becas y apoyos».
- **El RVOE no es chip del hero.** Es enlace discreto al cierre del plan de estudios (M5).
- **El formulario (M13) es de ENVÍO DE MATERIAL, no de contacto con asesor.**
- **Sin CTA sticky.**
- **AIDA:** Atención (M1) → Interés (M2–M5) → Deseo (M6–M9) → Acción (M10–M13) → cierre (M14).
- **Fallback estático obligatorio** en tabs, tiles y sliders.

## 3. Metadatos SEO / AEO

- **Title (57 car.):** «Licenciatura en Comunicación | Universidad Anáhuac México»
- **Meta description (136 car.):** «Descubre la Licenciatura en Comunicación de la Universidad Anáhuac México y fórmate en medios, contenidos y estrategias de comunicación.»
  - *Versión aprobada en el «Mapeo de Sitio Web 2025». ⚠️ Esta es la definitiva: no la sustituyas por la del mapeo ni por otra.*
- **Keyword principal:** `comunicacion carrera` · **Secundarias:** `licenciatura en comunicacion` · `licenciatura en ciencias de la comunicacion` · `carrera de comunicacion` · `plan de estudios comunicacion` · `materias de comunicacion`
- **⚠️ La keyword principal (`comunicacion carrera`) NO va en el H1.** Es un orden de palabras de buscador, no una frase gramatical. El H1 usa `licenciatura en comunicacion`; la variante natural **«carrera de Comunicación»** se coloca en el subtítulo y en las primeras ~100 palabras (M2 la abre así). No forzar la sintaxis.
- **⚠️ Keywords del «Mapeo de Sitio Web 2025» (documento del cliente):** `comunicacion carrera` (2,400) · `licenciatura en comunicacion` (1,900) · `carrera de comunicacion` (1,600) · `lic en comunicacion` (320) · `plan de estudios comunicacion` (170) · `ciencias de la comunicacion plan de estudios` (170) · `comunicacion anahuac` (140). Coincide con lo ya trabajado.
- **Open Graph:**
  - `og:title`: «Licenciatura en Comunicación — Universidad Anáhuac México»
  - `og:description`: «Imagina, crea y produce contenido en el foro de producción audiovisual más grande a nivel universitario en Latinoamérica. Conoce el plan de estudios de Comunicación.»
  - `og:image` (alt): «Estudiantes de la Licenciatura en Comunicación de la Universidad Anáhuac México trabajando en el estudio de producción audiovisual.»
- **Schema:** `Course` · `CollegeOrUniversity` · `FAQPage` (M11) · `BreadcrumbList` (en `<head>`).

## 4. Mapa de encabezados

- **H1** — «Licenciatura en Comunicación en la Universidad Anáhuac México» (M1, `#inicio`)
  - **H2** «¿Te apasiona contar historias y crear contenido que conecte con las audiencias?» (M2, `#afinidad`)
  - **H2** «¿Por qué estudiar Comunicación en la Anáhuac?» (M3, `#por-que`)
  - **H2** «¿Con qué perfil egresas de la Licenciatura en Comunicación?» (M4, `#perfil-egreso`) → H3 «Perfil de egreso» · H3 «¿Cuánto dura la carrera de Comunicación?»
  - **H2** «¿Cuál es el plan de estudios de la Licenciatura en Comunicación?» (M5, `#plan-estudios`) → H3 por bloque (Profesional / Anáhuac / Interdisciplinario)
  - **H2** «¿Dónde puedes ejercer como comunicólogo?» (M6, `#campo-laboral`) → H3 de la banda destacada
  - **H2** «Estudia Comunicación en el campus que elijas» (M7, `#instalaciones`) → H3 «Instalaciones de la Facultad» · H3 «Campus Norte» · H3 «Campus Sur»
  - **H2** «Historias Anáhuac» (M8)
  - **H2** «¿Con quién te formas?» (M9, `#colaboradores`) → H3 «Claustro docente» · H3 «Vinculación profesional» · H3 «Internacionalización» · H3 «Movilidad Anáhuac»
  - **H2** «Elige el siguiente paso para tu futuro» (M10, `#siguiente-paso`)
  - **H2** «Preguntas frecuentes sobre la Licenciatura en Comunicación» (M11, `#faq`) → H3 por pregunta (8)
  - **H2** «Descubre por qué ser un León Anáhuac» (M12, `#experiencia`) → H3 por eje (4)
  - **H2** «Solicita información sobre la Licenciatura en Comunicación» (M13, `#solicita`)
  - Footer + Newsletter (M14, sin H2 indexable)

---

# Módulos (arquitectura + copy integrados)

## Módulo 1 — Hero · AIDA: Atención · **H1** · `#inicio`

**Componente:** `lic-hero`, dos columnas. Izquierda: breadcrumb + eyebrow + H1 + claim + chips. Derecha: `video-card` + `button-row`.

**⚠️ Sin chip de RVOE. Exactamente 3 chips.**

- **Breadcrumb:** Inicio › Oferta Académica › Comunicación, Arquitectura y Diseño › Comunicación
- **Eyebrow (`tagline`):** «Comunicación, Arquitectura y Diseño»
- **H1:** «Licenciatura en Comunicación en la Universidad Anáhuac México»
- **Claim (`lic-hero-claim`):** «Imagina. Crea. Produce.» *(claim del folleto — **confirmado por la clienta** como el vigente, por encima del claim descriptivo del sitio vivo)*
- **Subtítulo bajo el claim (⚠️ obligatorio, no lo elimines — es donde entra la keyword principal y donde arranca la respuesta a la objeción):** «Convierte tu voz y tu talento en impacto real. Estudia la **carrera de Comunicación** en el foro de producción audiovisual más grande a nivel universitario en Latinoamérica y prepárate para liderar la comunicación en cualquier industria.»
- **Chips (3, `lic-chip`):** «8 semestres» · «Modalidad presencial» · «Bicampus · Norte - Sur»
- **CTA primario (`btn btn-dark`):** «Solicitar información» → `#solicita`
- **CTA secundario (`btn btn-light`):** «Explorar licenciatura» → `#plan-estudios`
- **Video:** `data-yt-id` **[PENDIENTE: ID del video institucional de Comunicación]**
- **Alt de la portada:** «Estudiante de Comunicación de la Universidad Anáhuac México produciendo contenido de audio en un estudio profesional.»

---

## Módulo 2 — ¿Te apasiona contar historias y crear contenido que conecte con las audiencias? · AIDA: Interés · **H2** · `#afinidad`

**Componente:** `lic-afinidad` — intro + grid de 4 `afinidad-card` + bloque `afinidad-enfoque` (párrafo + dos grupos de chips).

- **Eyebrow:** «¿Es para ti?»
- **H2:** «¿Te apasiona contar historias y crear contenido que conecte con las audiencias?»
- **Intro:** «La carrera de Comunicación es para ti si te reconoces en lo siguiente.»
- **Tarjetas (4):**
  1. «Te imaginas creando videos, podcasts o campañas que la gente comparte y recuerda.»
  2. «Te interesa entender cómo la tecnología cambia la forma en que consumimos noticias, series y redes sociales.»
  3. «Quieres liderar la estrategia de comunicación de una marca, un medio o una institución.»
  4. «Buscas una carrera creativa, pero con bases sólidas de investigación, ética y pensamiento crítico.»
- **Párrafo del bloque de enfoque:** «En la Anáhuac formamos comunicólogos con **visión transmedia e interdisciplinaria**: produces, investigas y piensas de forma estratégica a lo largo de toda la carrera.»
- **Chips — grupo «Producción»:** «Audiovisual» · «Guion» · «Fotografía» · «Diseño sonoro»
- **Chips — grupo «Estrategia»:** «Publicidad» · «Periodismo» · «Comunicación organizacional» · «Investigación»
- **CTA:** ninguno.
- **Alt:** «Grupo de estudiantes de Comunicación grabando contenido en video dentro del campus Anáhuac.»

---

## Módulo 3 — ¿Por qué estudiar Comunicación en la Anáhuac? · AIDA: Interés · **H2** · `#por-que`

**Componente:** `lic-porque` — intro + grid de `porque-card` + banda `porque-plan`.

**⚠️ Exactamente 6 tarjetas. ⚠️ No listar aquí las instalaciones** (van en M7) **ni las empresas** (van en M9).

- **Eyebrow:** «¿Por qué la Anáhuac?»
- **H2:** «¿Por qué estudiar Comunicación en la Anáhuac?»
- **Intro:** «No solo estudias teoría de la comunicación: produces, investigas y practicas en instalaciones de nivel profesional, con visión de negocio.»
- **Tarjetas (6):**
  1. **«El foro de producción audiovisual más grande a nivel universitario en Latinoamérica»** — «Produces en instalaciones de nivel profesional desde tus primeros semestres.» · Enlace: «Conoce las instalaciones ›» → `#instalaciones`
  2. **«Enfoque estratégico y empresarial»** — «Comprendes el modelo de negocio de todas las industrias de la comunicación, no solo su parte creativa: te preparamos para liderar, no solo para producir.»
  3. **«Experiencia real desde el primer semestre»** — «Produces, cubres eventos y participas en voluntariados desde tus primeros semestres —conciertos, festivales, coberturas periodísticas nacionales e internacionales— y cursas tu Prácticum profesional, con valor curricular, en los últimos semestres.»
  4. **«Vinculación con más de 200 empresas líderes»** — «Puedes vincularte con medios, agencias y marcas a través de la red de más de 300 organizaciones con las que colabora la Facultad.» · Enlace: «Conoce con quién te vinculas ›» → `#colaboradores`
  5. **«Acreditaciones y reconocimientos»** — «Programa acreditado internacionalmente por el ACEJMC y el CLAEP, y nacionalmente por el CONAC y el CIEES. Somos además organizadores del Premio Nacional de Expresión Oral y Escrita "Octavio Paz" y sede de la Medalla Anáhuac en Comunicación.» · Chips: «ACEJMC» · «CLAEP» · «CONAC» · «CIEES»
  6. **«Investigación aplicada en el CICA»** — «El Centro de Comunicación Aplicada de la Facultad, avalado por el PNPC del CONACYT, genera conocimiento de alta calidad en el que puedes participar.»
- **Banda `porque-plan`:**
  - Texto: «**Prepárate para ser el comunicólogo que quieres ser** y la persona que quieres llegar a ser. Nuestro Modelo Anáhuac integra tu carrera en tres bloques —Profesional, Anáhuac e Interdisciplinario— para que curses materias de otras licenciaturas y sumes un **Minor** a tu formación en Comunicación.»
  - CTA (`btn btn-purple`): «Descubre la formación de un comunicólogo Anáhuac» → `#plan-estudios`
- **Alt:** «Estudiantes de Comunicación de la Anáhuac México produciendo contenido en el estudio de televisión de la Facultad.»

---

## Módulo 4 — ¿Con qué perfil egresas? · AIDA: Interés · **H2** · `#perfil-egreso`

**Componente:** `lic-plan` — dos columnas. Izquierda: intro + `plan-card plan-perfil` + `plan-card plan-aeo`. Derecha: foto vertical 4:5.

- **Eyebrow:** «Perfil de egreso» · **H2:** «¿Con qué perfil egresas de la Licenciatura en Comunicación?»
- **Tarjeta «Perfil de egreso» (H3) — bullets:**
  - «Produces contenido y estrategias de comunicación con alcance transmedial, pensando en audiencias reales.»
  - «Resuelves los problemas que las empresas mediáticas enfrentan en un contexto digital donde la tecnología es protagonista.»
  - «Lideras proyectos como agente de transformación, con visión nacional e internacional y respeto a la diversidad.»
  - «Comunicas con pensamiento crítico y sentido ético.»
- **Tarjeta AEO (H3):** «¿Cuánto dura la carrera de Comunicación?»
  - Dato 1: **«8»** / «Semestres (4 años)»
  - Dato 2: **«369»** / «Créditos totales»
  - Línea de apoyo bajo los números: «Modelo 2025: Bloque Profesional 273 + Bloque Anáhuac 54 + Bloque Interdisciplinario 42.»
- **Alt de la foto:** «Estudiante de Comunicación de la Anáhuac editando en una isla de postproducción.»

---

## Módulo 5 — ¿Cuál es el plan de estudios? · AIDA: Interés · **H2** · `#plan-estudios`

**Componente:** `lic-plan-est` — intro + `plan-tabs` (`<select>` en ≤540px) + 3 tarjetas `plan-bloque` + `plan-cta` + `plan-rvoe`.

**⚠️ Las tabs son 9 y son por área temática, no por semestre.** Con 9 tabs, revisa el scroll horizontal de la barra en tablet.

- **Eyebrow:** «Plan de estudios» · **H2:** «¿Cuál es el plan de estudios de la Licenciatura en Comunicación?»
- **Intro:** «Tu plan combina teoría de la comunicación con producción real desde los primeros semestres —proyectos, coberturas de eventos y voluntariados— y prácticas formales (Prácticum) en los últimos.»
- **Tabs (9):**
  | Tab | Materias |
  |---|---|
  | **Fundamentos de comunicación** | Introducción a la comunicación · Comunicación creativa oral y escrita · Comunicación visual y cultura digital · Psicología social y persuasión · Antropología fundamental |
  | **Laboratorios de producción audiovisual** | Laboratorio de fotografía digital · Laboratorio de producción de audio · Laboratorio de plataformas audiovisuales · Laboratorio de diseño sonoro · Laboratorio de postproducción digital · Laboratorio de realización cinematográfica y audiovisual · Laboratorio de montaje y postproducción · Laboratorio de producción de cortometrajes |
  | **Narrativa, guion y contenidos inmersivos** | Narración literaria · Narrativas transmedia · Laboratorio de guionismo · Laboratorio de comunicación inmersiva |
  | **Publicidad y creación de marca** | Creatividad e innovación publicitaria · Publicidad y creación de marca · Producción publicitaria digital · Semiótica aplicada |
  | **Comunicación estratégica y organizacional** | Comunicación organizacional · Comunicación corporativa y talento humano · Relaciones públicas · Plan de comunicación estratégica · Comunicación estratégica para productos y servicios · Presupuestos para proyectos de comunicación |
  | **Periodismo** | Periodismo · Periodismo digital · Lenguajes periodísticos especializados · Periodismo de inmersión (regional) |
  | **Investigación de la comunicación** | Fundamentos de investigación de la comunicación y el entretenimiento · Investigación cuantitativa · Investigación cualitativa · Análisis de contenido · Habilidades analíticas para la comunicación · Sociología de la comunicación y el entretenimiento |
  | **Prácticas y especialización regional** | Prácticum I y II: Proyectos y prácticas de comunicación · Laboratorio de comunicación digital (regional) · Periodismo de inmersión (regional) |
  | **Ética, legislación y perspectivas globales** | Ética de la comunicación y el entretenimiento · Legislación de la comunicación y el entretenimiento · Perspectivas norteamericanas, europeas e iberoamericanas de la comunicación y el entretenimiento |
- **Bloques del Modelo Anáhuac (3 tarjetas):**
  - **Bloque Profesional** — «El corazón de tu carrera. Aquí desarrollas las competencias de la profesión, produces en los laboratorios, cursas tu Prácticum y sigues la ruta de liderazgo y emprendimiento. Además eliges tus [Minors] —diplomas profesionales universitarios— que amplían tu perfil.» *(el enlace «Minors» abre el modal de video, `data-yt-modal="IgwjRh2o2x8"`)*
  - **Bloque Anáhuac** — «El sello que nos distingue. Un espacio de autoconocimiento, ética y sentido de vida que te forma como persona íntegra y como líder de acción positiva, consciente de su vocación y de su impacto en los demás.»
  - **Bloque Interdisciplinario** — «Sales de tu carrera para entender el mundo real. Cursas asignaturas de otras disciplinas y conectas saberes que hoy el entorno profesional exige integrados, ampliando tu visión más allá de tu área de estudio.»
- **CTAs (`plan-cta`):** «Descargar plan de estudios» (`btn btn-orange`) · «Descargar folleto» (`btn btn-light`) — ambos → `#solicita`.
- **Enlace RVOE (`plan-rvoe`):** «RVOE SEP D.O.F.» + icono externo + `sr-only` → **enlaza el plan 2025** (confirmado por la clienta). ⚠️ El sitio vivo publica también los planes 2016 y 2010: **no los enlaces**.

---

## Módulo 6 — ¿Dónde puedes ejercer como comunicólogo? · AIDA: Deseo · **H2** · `#campo-laboral`

**Componente:** `lic-campo` — intro + `campo-layout` (tiles + `campo-preview`) + banda `campo-band` con los dos CTAs duros.

**⚠️ Este módulo carga la respuesta a la objeción de campo laboral. Los ejemplos con nombre (Amazon, Google, streaming) son el argumento, no adorno.**

- **Eyebrow:** «Campo laboral» · **H2:** «¿Dónde puedes ejercer como comunicólogo?»
- **Intro:** «Como egresado de Comunicación de la Anáhuac puedes ejercer en medios digitales y producción audiovisual, la industria cinematográfica, agencias de contenido y noticias, medios periodísticos, agencias de publicidad y mercadotecnia, y comunicación institucional dentro de empresas e instituciones —también en industrias no ligadas a los medios, como salud, tecnología o el tercer sector.»
- **Tiles (6):**
  1. **«Medios y producción audiovisual»** — «Plataformas de video, televisoras, broadcasting, podcasting, locución y conducción.»
  2. **«Industria cinematográfica»** — «Producción de cortometrajes, largometrajes y documentales; distribución, comercialización y festivales de cine.»
  3. **«Periodismo y editorial»** — «Agencias de contenido y noticias, medios impresos y digitales, e industria editorial.»
  4. **«Publicidad y mercadotecnia»** — «Manejo de cuentas digitales y redes sociales, áreas creativas, imagen de marca y comercio electrónico.»
  5. **«Comunicación institucional»** — «Relaciones públicas, imagen corporativa, comunicación interna y cultura organizacional en cualquier industria.»
  6. **«Industrias no mediáticas»** — «Salud, tecnología, corporativos y organizaciones sin fines de lucro: toda organización necesita comunicar.»
- **Preview:** formato 4:5, alt descriptivo por ámbito (p. ej. «Egresado de Comunicación de la Anáhuac trabajando en un set de producción televisiva»).
- **Bloque «Dónde trabajan nuestros egresados», bajo los tiles:** «Egresados de Comunicación de la Anáhuac ocupan hoy posiciones de liderazgo en empresas globales como **Amazon, Google** y plataformas de streaming, además de medios internacionales; otros fundan sus propias agencias y productoras.»
- **Dato de empleabilidad:** «En la Red Anáhuac, el 70% de nuestros egresados se emplea al poco tiempo de graduarse (Top 10 de América Latina en el QS Graduate Employability Ranking). El resultado depende también del compromiso y la proactividad de cada egresado, respaldado por la exigencia académica y el acompañamiento de la Facultad.» **[VERIFICAR: cifra propia de Comunicación.]**
- **Banda destacada (`campo-band`)** — mismo componente que la banda de doble titulación de Psicología:
  - **H3:** «El foro de producción audiovisual más grande a nivel universitario en Latinoamérica»
  - Texto: «Cabinas de audio, doblaje y Foley, estudio de cine y televisión en FullHD, captura de movimiento (MOCAP) y Radio Anáhuac: produces en instalaciones de nivel profesional **desde tus primeros semestres**, no al final de la carrera.»
  - Dato: «**+300 organizaciones** aliadas · **+200 empresas** líderes para tus prácticas»
  - CTAs: «Iniciar proceso de admisión» (`btn btn-orange`) → `/admision-general` · «Solicitar más información» (`btn btn-light`) → `#solicita`
  - Imagen: **[PENDIENTE: fotografía del foro o del estudio de televisión — es la imagen más importante de la página.]**
  - **⚠️ El foro aparece en tres lugares con tres profundidades distintas, y así debe quedarse:** la **tarjeta de M3** lo enuncia y enlaza, **esta banda** lo desarrolla y carga los CTAs, y **M7** lista el inventario completo de instalaciones. No unifiques ni elimines ninguno.

---

## Módulo 7 — Estudia Comunicación en el campus que elijas · AIDA: Deseo · **H2** · `#instalaciones`

**Componente:** `lic-campus`, con **un bloque adicional de instalaciones antes de las dos tarjetas de campus**. Después, las 2 `campus-card` (Norte naranja, Sur morada) con slider 1:1, y abajo `campus-note`.

**⚠️ Este es el único módulo con el detalle de instalaciones, y es el activo más fuerte de la carrera: dale peso visual real, no lo escondas bajo las tarjetas de campus.**

- **Eyebrow:** «Instalaciones y campus» · **H2:** «Estudia Comunicación en el campus que elijas»
- **Intro:** «La licenciatura es presencial y se imparte en nuestros dos campus, con instalaciones de producción de nivel profesional.»
- **«Instalaciones de la Facultad» (H3)** — lista visual (tiles o chips con icono):
  - Cabinas de audio, doblaje y Foley · Sala e islas de postproducción · Estudio de cine/televisión y cabina de producción · Producción audiovisual en FullHD · Estudio de producción musical · Equipo para eventos masivos (sonido lineal, pantalla LED de 2.5 × 4 m, piso de escenario e iluminación) · Sistema de captura de movimiento (MOCAP) para animación digital · Salas de cómputo Mac y PC con software actualizado · Laboratorio de central de medios y contenidos · Radio Anáhuac
- **Campus Norte (H3):** «Av. Universidad Anáhuac 46, Lomas Anáhuac, Huixquilucan, Estado de México.» · CTA: «Conoce el campus ›» → `/campus-norte-anahuac-mexico`
- **Campus Sur (H3):** «Av. de los Tanques 865, Torres de Potrero, Álvaro Obregón, Ciudad de México.» · CTA: «Conoce el campus ›» → `/campus-sur-anahuac-mexico`
- **Slider:** 6 fotos por campus, 1:1. **[PENDIENTE: fotos reales del foro, las cabinas, el MOCAP y Radio Anáhuac — son el argumento visual de la página.]**
- **`campus-note`:** «Transporte intercampus **gratuito**» · «**38 hectáreas** de instalaciones en la Red»

---

## Módulo 8 — Historias Anáhuac · AIDA: Deseo · **H2** *(módulo compartido — no rediseñar)*

**Componente:** `stories` de Inicio, tal cual (6 filas alternando `img, img, blockquote` / `blockquote, img, img`).

- **H2:** «Historias Anáhuac» · **Bajada:** «Leones Anáhuac que han transformado sus vidas con nosotros»
- **[PENDIENTE: testimonios reales con nombre de la Facultad de Comunicación. ⚠️ Los ejemplos agregados de M6 (egresados en Amazon, Google, streaming) NO son testimonios: no los conviertas en citas entre comillas ni les inventes autor.]** Plantilla: «"[cita en primera persona]" — [Nombre], egresado(a) de Comunicación, generación [año], Campus [Norte/Sur].»

---

## Módulo 9 — ¿Con quién te formas? · AIDA: Deseo · **H2** · `#colaboradores`

**Componente:** `lic-colab` — intro + `colab-docentes` (carrusel) + `colab-aliados`.

**⚠️ No repetir aquí las acreditaciones** (viven en M3). **La internacionalización SÍ vive aquí**, en su propio H3.

- **Eyebrow:** «Docencia y colaboradores» · **H2:** «¿Con quién te formas?»
- **Intro:** «Aprendes de profesores vinculados a la industria y te formas en contacto con cientos de organizaciones y empresas del sector.»
- **«Claustro docente» (H3):** carrusel de `docente-card` → foto + nombre + **cargo o logro profesional** (⚠️ no el grado ni la materia). Texto de apoyo: «Incluye profesores visitantes extranjeros y webinars con profesores internacionales.» **[PENDIENTE: nombres, fotos y cargos reales.]**
- **«Vinculación profesional» (H3):** «La Facultad mantiene convenios con **más de 300 organizaciones** —institucionales y cátedras corporativas, en los sectores público, privado y tercer sector— y sus estudiantes realizan prácticas en **más de 200 empresas líderes "triple A"**.» Logos: Televisa · TV Azteca · Google · Microsoft · PepsiCo · Coca-Cola · OCESA **[PENDIENTE: archivos de logotipo; mientras tanto, tiles de texto.]**
- **«Internacionalización» (H3):** «Intercambios académicos en destinos como **Madrid, Corea, Australia, Japón, Chile y Argentina**, cursos de verano en el extranjero —por ejemplo, fotografía en Nueva York— y clases remotas con profesores internacionales (COILs y MOOCs), con **opción de doble titulación**.» Chips de destino: «Madrid» · «Corea» · «Australia» · «Japón» · «Chile» · «Argentina»
- **«Movilidad Anáhuac» (H3):** «Puedes cursar parte de tu formación en alguno de los **7 campus de la Red Anáhuac** en la República Mexicana.»

---

## Módulo 10 — Elige el siguiente paso para tu futuro · AIDA: Acción · **H2** · `#siguiente-paso`

**Componente:** `lic-pasos` — encabezado + **5 `paso-card`**. Fondo blanco.

- **Eyebrow:** «Siguiente paso» · **H2:** «Elige el siguiente paso para tu futuro»
- **Bajada:** «Avanza a tu ritmo: explora costos y apoyos, revisa fechas, inicia tu admisión o habla con un asesor.»
- **Tarjetas:**
  1. **«Cotiza tu carrera»** — «Calcula la inversión de tu licenciatura y conoce las opciones de pago.» · «Cotizar ›» → `/cotizador`
  2. **«Inicia tu admisión»** — «Comienza tu proceso 100% en línea en solo 6 pasos.» · «Empezar ›» → `/admision-general`
  3. **«Fechas de examen»** — «Consulta el calendario de exámenes de admisión a lo largo del año.» · «Consultar ›» → `/fechas-de-examenes`
  4. **«Apoyos socioeconómicos»** — «Descubre las becas y apoyos económicos disponibles para estudiar aquí.» · «Ver apoyos ›» → `/apoyos-educativos-universidad-anahuac-mexico`
  5. **«Habla con un asesor»** — «Resuelve tus dudas con un asesor preuniversitario, por campus.» · «Contactar ›» → `proceso-de-admision.html#asesoria`
- **⚠️ Esta tarjeta NO muestra datos de asesor.** Igual que en la maqueta de Psicología, es **solo un CTA** que lleva al bloque de asesoría de la página de Proceso de Admisión. No pongas aquí nombre, foto, WhatsApp ni correo de nadie.

---

## Módulo 11 — Preguntas frecuentes · AIDA: Acción · **H2** · `#faq`

**Componente:** `lic-faq` — acordeón `details.faq-item` con `name` compartido, fondo naranja, + `FAQPage` en JSON-LD.

**⚠️ Las preguntas 4 y 5 responden objeciones reales documentadas por la Facultad. No las suavices ni las quites: son de las razones por las que un padre abandona la página.**

- **Eyebrow:** «Preguntas frecuentes» · **H2:** «Preguntas frecuentes sobre la Licenciatura en Comunicación»
- **Acordeón (8 preguntas):**
  1. **«¿Cuántos años dura la carrera de Comunicación?»** → «La Licenciatura en Comunicación dura 8 semestres, es decir, 4 años, en modalidad presencial.»
  2. **«¿Qué materias se ven en la carrera de Comunicación?»** → «Cursarás laboratorios de producción audiovisual, fotografía y guionismo, además de materias de publicidad, periodismo, comunicación organizacional e investigación de la comunicación, entre otras.»
  3. **«¿La Licenciatura en Comunicación tiene prácticas profesionales?»** → «Sí. Produces y participas en coberturas y voluntariados desde tus primeros semestres, y cursas Prácticum I y II —con valor curricular— en los últimos, con acceso a la red de más de 200 empresas líderes con las que colabora la Facultad, entre ellas Televisa, TV Azteca, Google, Microsoft, PepsiCo, Coca-Cola y OCESA.»
  4. **«¿Es una carrera fácil o poco exigente?»** → «No. La Licenciatura en Comunicación de la Anáhuac tiene un alto nivel de exigencia académica y profesional: exige trabajo en equipo, compromiso y profundidad en cada proyecto, además de que entiendes el modelo de negocio de toda la industria de la comunicación.»
  5. **«¿El campo laboral de Comunicación se limita a los medios tradicionales o a ser influencer?»** → «No. El campo laboral de un comunicólogo es amplio y transversal a cualquier industria: salud, tecnología, entretenimiento, empresas corporativas y organizaciones sin fines de lucro, entre otras.»
  6. **«¿Cuál es la diferencia entre Comunicación y Dirección de Empresas de Entretenimiento?»** → «Comunicación tiene un enfoque más integral y estratégico en medios y mensajes, mientras que Dirección de Empresas de Entretenimiento se especializa en la gestión y producción de proyectos creativos y eventos masivos.» *(enlace interno a la página de esa carrera. **Nombre público confirmado: «Dirección de Empresas de Entretenimiento»** —* **[PENDIENTE: su slug en el sitio final]** *)*
  7. **«¿Es lo mismo Comunicación que Ciencias de la Comunicación?»** → «Sí. En la Anáhuac, la Licenciatura en Comunicación es también conocida como Licenciatura en Ciencias de la Comunicación; el plan de estudios y el título son los mismos.»
  8. **«¿Cuánto cuesta estudiar Comunicación en la Anáhuac?»** → «Puedes calcular tu colegiatura y conocer opciones de beca en nuestro cotizador.» *(enlace a `/cotizador`)*
- **Reserva (redactadas, fuera del acordeón):** «¿En qué campus se imparte Comunicación?» (respondida en M7) · «¿En qué puedo trabajar al terminar?» (respondida en M6).
- **⚠️ El texto del `FAQPage` debe ser idéntico al del acordeón, sin markup dentro.**

---

## Módulo 12 — Descubre por qué ser un León Anáhuac · AIDA: Deseo (refuerzo) · **H2** · `#experiencia` *(módulo compartido — no rediseñar)*

**Componente:** `experience` de Inicio, tal cual.

- **Eyebrow:** «Mucho más que solo una Universidad.» · **H2:** «Descubre por qué ser un León Anáhuac» · **Bajada:** «Conoce por qué vivirás una experiencia universitaria única con nosotros.» · CTA: «Conoce la experiencia Anáhuac»
- **Copy de las 4 tarjetas:** el compartido del molde. **Única adaptación admitida:** en la tarjeta de formación integral, mencionar **CREA**, el programa de liderazgo específico del área de Comunicación, Arquitectura y Diseño, dentro de los 9 Programas de Liderazgo. *(Mismo tratamiento que ALPHA en Medicina y Nutrición: es una línea dentro del módulo compartido, no un módulo nuevo.)*

---

## Módulo 13 — Solicita información · AIDA: Acción · **H2** · `#solicita`

**Componente:** `lic-form` — foto vertical 4:5 + `lic-form-card`.

**⚠️ Formulario de envío de material, no de contacto con asesor. La bajada que lo declara es obligatoria y visible.**

- **Eyebrow:** «Solicita información» · **H2:** «Solicita información sobre la Licenciatura en Comunicación»
- **Bajada:** «Cuéntanos qué te interesa y te enviaremos el material directamente a tu correo o WhatsApp. No recibirás la llamada de un asesor; si prefieres hablar con alguien, escríbenos desde «Elige el siguiente paso».»
- **Campos:**
  | Campo | Tipo | Detalle |
  |---|---|---|
  | «Nombre completo» | text | `autocomplete="name"` |
  | «Correo electrónico» | email | `autocomplete="email"` |
  | «WhatsApp / teléfono» | tel | `inputmode="numeric"`, `maxlength="15"` |
  | «Preparatoria de origen» | text | — |
  | «Licenciatura de interés» | text `readonly` | prellenado: **«Comunicación»** |
  | «Periodo de ingreso de interés» | select | «Agosto 2026» · «Enero 2027» · «Aún no lo decido» |
  | «Campus de preferencia» | select | «Campus Norte» · «Campus Sur» · «Sin preferencia» |
- **Fieldset «¿Qué te gustaría recibir?»:** «Plan de estudios» · «Costos y becas» · «Proceso de admisión»
- **Aviso:** «He leído y acepto el [Aviso de Privacidad].» (checkbox `required`)
- **CTA (`btn btn-orange`):** «Solicitar información»
- **Confirmación:** «¡Listo! Te enviaremos por correo y WhatsApp el material que elegiste sobre la Licenciatura en Comunicación.»
- **Error (ejemplo):** «Revisa tu correo: parece que falta el @.»
- **Alt de la foto:** «Estudiante de Comunicación de la Anáhuac consultando información de la licenciatura.»
- **[PENDIENTE: conexión a HubSpot y foto real.]**

---

## Módulo 14 — Footer con Newsletter integrado · sin H2 de contenido

**Componente:** `site-footer` compartido, sin cambios.

---

# Datos estructurados (JSON-LD)

- **`BreadcrumbList`** (en `<head>`): Inicio › Oferta Académica › Comunicación, Arquitectura y Diseño › Comunicación.
- **`Course`**: `name`="Licenciatura en Comunicación" · `description`= intro de M4 · `provider`=`CollegeOrUniversity` "Universidad Anáhuac México" · `timeRequired`="P4Y" · `educationalCredentialAwarded`="Licenciatura" · `numberOfCredits`=369.
- **`FAQPage`** (junto a M11): las 8 preguntas/respuestas verbatim.
- **`CollegeOrUniversity`**: nombre, url, direcciones de Campus Norte y Sur (M7), `sameAs` a redes oficiales.

# Accesibilidad (WCAG 2.1 AA)

- Tabs de M5 con `role="tablist"` / `role="tab"` / `role="tabpanel"`, `aria-selected`, `aria-controls` y navegación por flechas; `<select>` equivalente en ≤540px. **Con 9 tabs, verificar el scroll horizontal de la barra en tablet.**
- Tiles de M6 son `<button>` con `aria-pressed`; el alt de la preview se actualiza con el tile activo.
- Sliders de M7 con botones etiquetados y dots navegables por teclado.
- Acordeón de M11 con `<details>` nativo.
- Videos con subtítulos; el del hero carga al clic, con `aria-label` descriptivo.
- Contraste AA en la banda naranja del FAQ y en las tarjetas de campus.
- La lista de instalaciones de M7 debe ser texto navegable, no una imagen.

# Wireframe en texto (orden de scroll)

```
Header
1  Hero (breadcrumb · H1 · claim · subtítulo obligatorio · 3 chips | video + 2 CTAs)
2  ¿Es para ti? (4 tarjetas + chips Producción/Estrategia)
3  ¿Por qué la Anáhuac? (6 tarjetas + banda Modelo Anáhuac → CTA morado)
4  Perfil de egreso (bullets + tarjeta AEO 8 sem./369 créditos | foto)
5  Plan de estudios (9 tabs por área + 3 bloques + 2 descargas + RVOE)
6  Campo laboral (6 tiles + egresados en Amazon/Google | banda EL FORO)
7  Campus (LISTA DE INSTALACIONES + 2 tarjetas con slider)
8  Historias Anáhuac (compartido)
9  ¿Con quién te formas? (claustro + vinculación + internacionalización + movilidad)
10 Elige el siguiente paso (5 tarjetas)
11 FAQ (8, acordeón naranja + FAQPage; incluye las 2 de objeción)
12 León Anáhuac (compartido)
13 Solicita información (formulario de material)
14 Footer + Newsletter
```

# Pendientes antes de implementar

| # | Pendiente | Módulo | Prioridad | Quién lo cierra |
|---|---|---|---|---|
| 4 | Slug de Dirección de Empresas de Entretenimiento (el nombre público ya está confirmado) | M11 | 🟢 | Cliente |
| 6 | Cifra de empleabilidad propia de Comunicación | M6 | 🟡 | Cliente |
| 7 | Testimonios reales de la Facultad de Comunicación | M8 | 🟡 | Cliente |
| 8 | Claustro docente, incluidos profesores visitantes extranjeros | M9 | 🟡 | Facultad |
| 9 | Fotos reales del foro, cabinas, MOCAP y Radio Anáhuac | M1, M4, M7, M13 | 🟡 | Producción fotográfica |
| 10 | ID del video institucional | M1 | 🟡 | Cliente |
| 12 | Logotipos de empresas vinculadas | M9 | 🟢 | Cliente |
| 13 | Conexión del formulario a HubSpot | M13 | 🟡 | HubSpot |
