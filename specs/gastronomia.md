# Página: Licenciatura en Gastronomía — Anáhuac México · **v1**
### Documento de handoff para diseño (estructura + copy final integrados)

> **Estado de implementación (2026-09-01).** Maqueta construida en
> `gastronomia.html` + `gastronomia.css`, sobre el molde de `psicologia.html`.
> Los componentes se reutilizan íntegros desde `psicologia.css`; `gastronomia.css`
> solo lleva las desviaciones de retícula que impone su contenido. El JS es el
> compartido (`script.js` + `psicologia.js`), sin cambios. Cero componentes nuevos.
>
> El `<body>` lleva `class="pagina-carrera pagina-gastronomia"`. El primer alcance
> es el de las diez correcciones del molde promovidas el 2026-08-31 (ver
> `design/CHANGELOG.md`): la página nace con la medida de línea acotada, la escala
> de titulares corregida, el CTA del hero al tamaño grande y el perfil de egreso
> alineado. **No repitas esa revisión aquí.**
>
> Desviaciones respecto de este documento, todas anotadas en el HTML:
> - **Fotografía: dos fotos reales cubriendo 24 posiciones**, repetidas por
>   decisión de la clienta del 2026-09-01, más una prestada del banco de
>   Comunicación en el formulario. No quedan huecos, pero la fotografía no está
>   resuelta: detalle y prioridades en `assets/gastronomia/README.md`. Lo que
>   sigue vale como referencia de por qué no se rellenó con material ajeno. No hay una sola imagen de
>   Gastronomía en el repositorio y ningún banco del proyecto sirve: ni una escena
>   clínica ni una cabina de radio ilustran una cocina. `AGENTS.md` y
>   `design/assets.md` prohíben el stock ajeno al dominio.
> - **El breadcrumb no enlaza el área.** «Turismo, Gastronomía y Hospitalidad» va
>   como texto plano: esa página de área no existe todavía en el repositorio.
> - **Video del hero:** sin `data-yt-id` y sin botón de play hasta que llegue el
>   ID. Con el id vacío el clic abre un embed roto de YouTube.
> - **Coordinación académica (M9):** los tres nombres y cargos van tal cual —son
>   reales y están en el folleto—, pero **sin foto**: el propio documento marca
>   `[VERIFICAR]` la autorización para publicarla. Usan el recurso propio del
>   molde para ese caso, el avatar de iniciales de `.docente-avatar`.
> - **Le Cordon Bleu (M6):** la banda va sin logotipo hasta que llegue el archivo
>   con autorización. Se omite en vez de dejar el hueco: una tira de logo vacía se
>   lee como error de carga.
> - **RVOE:** «RVOE SEP · D.O.F.» sin fecha ni URL, como en las otras tres
>   carreras.
> - **Composición del H1:** dos líneas controladas —«Licenciatura» / «en
>   Gastronomía»—. La segunda es una unidad de lectura y baja ligeramente de
>   escala para no invadir la imagen. Revisión humana del 2026-09-01.

> **Cómo leer este documento.** Módulo por módulo: qué componente va, en qué orden, con qué contenido, y el **copy literal** listo para publicar. Todo entre comillas «…» es texto literal: **no lo reescribas**. Los bloques `[VERIFICAR]` / `[PENDIENTE]` son datos reales sin confirmar: **no los inventes ni los borres**. Los avisos **⚠️** son restricciones de arquitectura: **respétalas tal cual**. Mobile-first.

> **Molde base.** Replica **1:1 el molde validado en la maqueta de Psicología** → [`psicologia.html`](https://black-and-orange.github.io/anahuac-sitio-web/psicologia.html). Reutiliza sus componentes y clases (`lic-hero`, `lic-afinidad`, `lic-porque`, `lic-plan`, `lic-plan-est`, `lic-campo`, `lic-campus`, `stories`, `lic-colab`, `lic-pasos`, `lic-faq`, `experience`, `lic-form`). **No se diseñan componentes nuevos.**

> **⚠️ Dos particularidades de esta página:**
> 1. **Le Cordon Bleu es el diferenciador que sostiene la conversión.** Su detalle completo vive **solo** en la banda de M6, con el mayor peso visual de la página.
> 2. **El módulo de colaboradores sustituye el segundo grupo de logos por una lista de destinos** (ciudades), porque la fuente no nombra empresas: da categorías y ciudades.

---

## 1. Ficha de la página

| Campo | Valor |
|---|---|
| **Slug / URL** | `/licenciaturas/gastronomia` — confirmado en el «Mapeo de Sitio Web 2025» |
| **Tipo** | Página de licenciatura (molde estándar de carrera) |
| **Área académica** | Turismo, Gastronomía y Hospitalidad |
| **Audiencia** | Preuniversitario con perfil creativo/culinario + padres/madres (objeción «esto es solo cocinar» respondida en M2, M3 y M6) |
| **Objetivo** | Convertir en **solicitud de información** (M13) o en **inicio de admisión** (`/admision-general`) |
| **Campus** | Anáhuac México: **Norte** (Huixquilucan, Edo. Méx.) y **Sur** (Álvaro Obregón, CDMX) — presencial, ambos con cocinas propias |
| **KPI** | Envíos del formulario M13 · descargas de plan y folleto · interacción con las tabs (M5) y los tiles (M6) · clics en la banda de Le Cordon Bleu |

## 2. Reglas globales

- **Un mensaje por módulo, sin redundancia.** El **detalle del beneficio Le Cordon Bleu** (Bachelor in Gastronomy + diplomas parciales) va **solo en la banda de M6**; en M3 se nombra la alianza sin desglosarla. Los **convenios y destinos de prácticas** van **solo en M9**.
- En el clúster «Elige el siguiente paso», la tarjeta se titula **«Apoyos socioeconómicos»**. En copy corrido sí puede decirse «becas y apoyos».
- **⚠️ No mezclar las dos cifras de convenios en una misma tarjeta:** «+150 universidades en 30 países» es institucional (M12) y «+250 convenios» es de la Facultad de Turismo y Gastronomía (M9). No se contradicen, pero son alcances distintos.
- **El RVOE no es chip del hero.** Es enlace discreto al cierre del plan de estudios (M5).
- **El formulario (M13) es de ENVÍO DE MATERIAL, no de contacto con asesor.**
- **Sin CTA sticky.**
- **AIDA:** Atención (M1) → Interés (M2–M5) → Deseo (M6–M9) → Acción (M10–M13) → cierre (M14).
- **Fallback estático obligatorio** en tabs, tiles y sliders.

## 3. Metadatos SEO / AEO

- **Title (56 car.):** «Licenciatura en Gastronomía | Universidad Anáhuac México»
- **Meta description (156 car.):** «Estudia Gastronomía en la Universidad Anáhuac México: única alianza con Le Cordon Bleu del país, 8 cocinas y 2 semestres de prácticas. Solicita información.»
  - *Versión propuesta de B&O, **elegida por la clienta** por encima de la del mapeo. ⚠️ Esta es la definitiva: no la sustituyas por la del mapeo ni por otra.*
- **Keyword principal:** `licenciatura en gastronomia` (3,600, **hoy en posición 24**) · **Secundarias:** `carrera de gastronomia` (1,900, pos. 18) · `escuelas de gastronomia en mexico` (390) · `gastronomia cdmx` (320) · `universidades de gastronomia en cdmx` (260, pos. 8) · `que estudia la gastronomia` (260) · `materias de gastronomia` (260 — **hoy en posición 1: no perderla**)
- **⚠️ El clúster «CDMX» está desatendido:** la pregunta 3 del FAQ lo cubre nombrando ambos campus. Conserva las menciones explícitas a Ciudad de México en M7.
- **⚠️ Keywords del «Mapeo de Sitio Web 2025» (documento del cliente):** `materias de gastronomia` (260) · `plan de estudios gastronomia` (210) · `anahuac gastronomia` (210) · `plan de estudios gastronomia anahuac` (170) · `universidades con gastronomia en cdmx` (110) · `carrera de chef materias` (70). **Confirma el clúster CDMX** y añade la variante «chef», que conviene mencionar de forma natural en M6.
- **Open Graph:**
  - `og:title`: «Licenciatura en Gastronomía — Universidad Anáhuac México»
  - `og:description`: «Fórmate como chef y líder gastronómico con la única alianza Le Cordon Bleu de México, 8 cocinas de vanguardia y prácticas nacionales e internacionales.»
  - `og:image` (alt): «Estudiantes de la Licenciatura en Gastronomía de la Universidad Anáhuac México en clase práctica de cocina con chef.»
- **Schema:** `Course` · `CollegeOrUniversity` · `FAQPage` (M11) · `BreadcrumbList` (en `<head>`).
- **Técnico:** el LCP móvil actual de esta página es 35. El video del hero carga solo al clic y la portada lleva `fetchpriority="high"`.

## 4. Mapa de encabezados

- **H1** — «Licenciatura en Gastronomía en la Universidad Anáhuac México» (M1, `#inicio`)
  - **H2** «¿Te encanta explorar nuevas culturas, sabores y experiencias?» (M2, `#afinidad`)
  - **H2** «¿Por qué estudiar Gastronomía en la Anáhuac?» (M3, `#por-que`)
  - **H2** «¿Con qué perfil egresas de la Licenciatura en Gastronomía?» (M4, `#perfil-egreso`) → H3 «Perfil de egreso» · H3 «¿Cuánto dura la carrera de Gastronomía?»
  - **H2** «¿Cuál es el plan de estudios de la Licenciatura en Gastronomía?» (M5, `#plan-estudios`) → H3 por bloque (Profesional / Anáhuac / Interdisciplinario)
  - **H2** «¿Dónde puedes ejercer como egresado de Gastronomía?» (M6, `#campo-laboral`) → H3 de la banda destacada
  - **H2** «Estudia Gastronomía en el campus que elijas» (M7, `#instalaciones`) → H3 «Campus Norte» · H3 «Campus Sur»
  - **H2** «Historias Anáhuac» (M8)
  - **H2** «¿Con quién te formas?» (M9, `#colaboradores`) → H3 «Coordinación académica y chefs» · H3 «Convenios de prácticas» · H3 «Destinos de prácticas»
  - **H2** «Elige el siguiente paso para tu futuro» (M10, `#siguiente-paso`)
  - **H2** «Preguntas frecuentes sobre la Licenciatura en Gastronomía» (M11, `#faq`) → H3 por pregunta (7)
  - **H2** «Descubre por qué ser un León Anáhuac» (M12, `#experiencia`) → H3 por eje (4)
  - **H2** «Solicita información sobre la Licenciatura en Gastronomía» (M13, `#solicita`)
  - Footer + Newsletter (M14, sin H2 indexable)

---

# Módulos (arquitectura + copy integrados)

## Módulo 1 — Hero · AIDA: Atención · **H1** · `#inicio`

**Componente:** `lic-hero`, dos columnas. Izquierda: breadcrumb + eyebrow + H1 + claim + chips. Derecha: `video-card` + `button-row`.

**⚠️ Sin chip de RVOE. Exactamente 3 chips.**

- **Breadcrumb:** Inicio › Oferta Académica › Turismo, Gastronomía y Hospitalidad › Gastronomía
- **Eyebrow (`tagline`):** «Turismo, Gastronomía y Hospitalidad»
- **H1:** «Licenciatura en Gastronomía en la Universidad Anáhuac México»
- **Claim (`lic-hero-claim`):** «Imagina. Planea. Prepara.» *(claim del folleto — **confirmado por la clienta** como el vigente, por encima del claim descriptivo del sitio vivo)*
- **Chips (3, `lic-chip`):** «8 semestres» · «Modalidad presencial» · «Bicampus · Norte - Sur»
- **CTA primario (`btn btn-dark`):** «Solicitar información» → `#solicita`
- **CTA secundario (`btn btn-light`):** «Explorar licenciatura» → `#plan-estudios`
- **Video:** `data-yt-id` **[PENDIENTE: ID del video institucional de Gastronomía]**
- **Alt de la portada:** «Estudiantes de Gastronomía de la Universidad Anáhuac México preparando un platillo bajo la supervisión de un chef.»

---

## Módulo 2 — ¿Te encanta explorar nuevas culturas, sabores y experiencias? · AIDA: Interés · **H2** · `#afinidad`

**Componente:** `lic-afinidad` — intro + grid de 4 `afinidad-card` + bloque `afinidad-enfoque` (párrafo + dos grupos de chips).

- **Eyebrow:** «¿Es para ti?»
- **H2:** «¿Te encanta explorar nuevas culturas, sabores y experiencias?»
- **Intro:** «Si te reconoces en lo siguiente, la Gastronomía puede ser tu lugar.»
- **Tarjetas (4):**
  1. «Te apasiona la cocina, la creatividad y la innovación culinaria.»
  2. «Sueñas con una formación internacional, reconocida en cualquier parte del mundo.»
  3. «Quieres emprender o liderar tu propio proyecto gastronómico.»
  4. «Te llama viajar, conocer otras culturas y trabajar en el extranjero.»
- **Párrafo del bloque de enfoque:** «En la Anáhuac no solo aprenderás a cocinar: formarás las habilidades de **gestión, creatividad y emprendimiento** para liderar cualquier negocio de alimentos y bebidas.»
- **Chips — grupo «Técnica»:** «Cocina» · «Pastelería» · «Cocina de vanguardia» · «Mixología»
- **Chips — grupo «Negocio»:** «Costos» · «Mercadotecnia» · «Gestión de talento» · «Emprendimiento»
- **CTA:** ninguno.
- **Alt:** «Grupo de estudiantes de Gastronomía trabajando en equipo en una de las cocinas de la Universidad Anáhuac México.»

---

## Módulo 3 — ¿Por qué estudiar Gastronomía en la Anáhuac? · AIDA: Interés · **H2** · `#por-que`

**Componente:** `lic-porque` — intro + grid de `porque-card` + banda `porque-plan`.

**⚠️ Exactamente 6 tarjetas. ⚠️ No desglosar aquí el beneficio de Le Cordon Bleu** (Bachelor + diplomas): vive en la banda de M6.

- **Eyebrow:** «¿Por qué la Anáhuac?»
- **H2:** «¿Por qué estudiar Gastronomía en la Anáhuac?»
- **Intro:** «No solo dominarás la técnica: practicarás en cocinas reales, con chefs y con visión de negocio desde el primer semestre.»
- **Tarjetas (6):**
  1. **«Única alianza con Le Cordon Bleu en México»** — «Eres de la única universidad del país con alianza estratégica con Le Cordon Bleu, Francia.»
  2. **«Dos semestres de prácticas profesionales»** — «Vives un año de experiencia real en el sector gastronómico, nacional o internacional, con valor curricular.» · Enlace: «Conoce con quién practicas ›» → `#colaboradores`
  3. **«Ocho cocinas y un viñedo propio»** — «Practicas en ocho cocinas modernas (cuatro en cada campus), salones de cata, laboratorio de mixología, laboratorio de cocina de vanguardia y el Viñedo Anáhuac en Querétaro.»
  4. **«Aprendes con chef, no solo con libro»** — «Tus clases incluyen demostración del chef y trabajo individual en cocina, siempre supervisado y asesorado.»
  5. **«Acreditaciones que respaldan tu título»** — «Programa con acreditación nacional CIEES y certificación internacional tedQual de la Organización Mundial del Turismo (UNWTO).»
  6. **«Cocina + negocio, en un solo plan»** — «Combinas técnica culinaria con costos, mercadotecnia, gestión de talento y emprendimiento: sales listo para cocinar y para dirigir.»

  **⚠️ NO incluir una tarjeta de «todo incluido en tu colegiatura»** (uniformes, insumos, kit de cuchillos, set de copas). La clienta decidió **no publicarlo**: solo aparecía en el sitio vivo, no en el folleto, y funcionaría como un compromiso económico ante la familia. No lo reintroduzcas desde el sitio vivo.
- **Banda `porque-plan`:**
  - Texto: «**Prepárate para ser el chef que quieres ser** y la persona que quieres llegar a ser. Nuestro Modelo Anáhuac integra tu carrera en tres bloques —Profesional, Anáhuac e Interdisciplinario— para que desarrolles una visión integral y estés listo para crear, liderar y emprender en la industria gastronómica.»
  - CTA (`btn btn-purple`): «Descubre la formación de un chef Anáhuac» → `#plan-estudios`
- **Alt:** «Estudiante de Gastronomía de la Universidad Anáhuac México cursando un taller de repostería.»

---

## Módulo 4 — ¿Con qué perfil egresas? · AIDA: Interés · **H2** · `#perfil-egreso`

**Componente:** `lic-plan` — dos columnas. Izquierda: intro + `plan-card plan-perfil` + `plan-card plan-aeo`. Derecha: foto vertical 4:5.

- **Eyebrow:** «Perfil de egreso» · **H2:** «¿Con qué perfil egresas de la Licenciatura en Gastronomía?»
- **Tarjeta «Perfil de egreso» (H3) — bullets:**
  - «Diseñas y creas productos gastronómicos innovadores, investigando y generando conocimiento gastronómico a nivel global.»
  - «Diriges, asesoras y desarrollas productos para empresas de alimentos y bebidas.»
  - «Promueves la cultura, historia y tradiciones gastronómicas, cuidando su identidad y el comercio justo.»
  - «Planeas y gestionas proyectos y oportunidades de negocio gastronómico, nacional o internacional.»
- **Tarjeta AEO (H3):** «¿Cuánto dura la carrera de Gastronomía?»
  - Dato 1: **«8»** / «Semestres (4 años)»
  - Dato 2: **«342»** / «Créditos totales»
  - Línea de apoyo bajo los números: «Modelo 2025: Bloque Profesional 246 + Bloque Anáhuac 54 + Bloque Interdisciplinario 42. Incluye dos semestres de prácticas profesionales con valor curricular.»
- **Alt de la foto:** «Estudiante de Gastronomía de la Anáhuac emplatando en una cocina profesional.»

---

## Módulo 5 — ¿Cuál es el plan de estudios? · AIDA: Interés · **H2** · `#plan-estudios`

**Componente:** `lic-plan-est` — intro + `plan-tabs` (`<select>` en ≤540px) + 3 tarjetas `plan-bloque` + `plan-cta` + `plan-rvoe`.

**⚠️ Las tabs son 7 y son por área temática, no por semestre.**

- **Eyebrow:** «Plan de estudios» · **H2:** «¿Cuál es el plan de estudios de la Licenciatura en Gastronomía?»
- **Intro:** «Tu plan avanza de las bases del manejo de alimentos a la técnica especializada y la gestión del negocio.»
- **Tabs (7):**
  | Tab | Materias |
  |---|---|
  | **Fundamentos y manejo de alimentos** | Manejo higiénico de los alimentos · Taller de insumos de origen vegetal · Taller de insumos de origen animal · Taller de productos lácteos · Fisicoquímica para la gastronomía · Química de los alimentos · Evaluación sensorial |
  | **Cultura gastronómica** | Cultura gastronómica de México · Cultura gastronómica internacional · Protocolo y etiqueta · Responsabilidad social y sustentabilidad |
  | **Técnica culinaria y repostería** | Técnicas y aplicaciones culinarias I y II · Cocina intermedia I y II · Cocina mexicana · Pastelería I y II · Investigación aplicada a cocina de vanguardia |
  | **Bebidas y enología** | Bebidas · Fundamentos de cata de vinos y consumo responsable *(minor de vinos disponible con tus electivas profesionales)* |
  | **Gestión y negocio gastronómico** | Introducción a la empresa · Contabilidad financiera para la dirección · Costos de alimentos y bebidas · Control presupuestal · Operación de empresas de alimentos y bebidas · Catering · Gestión de talento en la industria de la hospitalidad · Derecho y empresa · Nutrición |
  | **Especialización regional** | Introducción a la industria de la hospitalidad · Mercadotecnia turística II |
  | **Prácticas e integración** | Prácticum de Gastronomía I y II (12 créditos cada uno) · Proyecto integrador: Diseño y evaluación de productos gastronómicos |
- **Bloques del Modelo Anáhuac (3 tarjetas):**
  - **Bloque Profesional** — «El corazón de tu carrera. Aquí desarrollas la técnica culinaria y la visión de negocio, cursas tus dos semestres de prácticas profesionales y sigues la ruta de liderazgo y emprendimiento. Además eliges tus [Minors] —diplomas profesionales universitarios— como el minor de vinos.» *(el enlace «Minors» abre el modal de video, `data-yt-modal="IgwjRh2o2x8"`)*
  - **Bloque Anáhuac** — «El sello que nos distingue. Un espacio de autoconocimiento, ética y sentido de vida que te forma como persona íntegra y como líder de acción positiva, consciente de su vocación y de su impacto en los demás.»
  - **Bloque Interdisciplinario** — «Sales de tu carrera para entender el mundo real. Cursas asignaturas de otras disciplinas y conectas saberes que hoy el entorno profesional exige integrados, ampliando tu visión más allá de tu área de estudio.»
- **CTAs (`plan-cta`):** «Descargar plan de estudios» (`btn btn-orange`) · «Descargar folleto» (`btn btn-light`) — ambos → `#solicita`.
- **Enlace RVOE (`plan-rvoe`):** «RVOE SEP D.O.F.» + icono externo + `sr-only` **[PENDIENTE: URL del documento oficial]**

---

## Módulo 6 — ¿Dónde puedes ejercer como egresado de Gastronomía? · AIDA: Deseo · **H2** · `#campo-laboral`

**Componente:** `lic-campo` — intro + `campo-layout` (tiles + `campo-preview`) + banda `campo-band` con los dos CTAs duros.

- **Eyebrow:** «Campo laboral» · **H2:** «¿Dónde puedes ejercer como egresado de Gastronomía?»
- **Intro:** «Como egresado de Gastronomía de la Anáhuac puedes trabajar en restaurantes, operadoras de alimentos, empresas banqueteras, pastelerías y bares; emprender tu propio negocio gastronómico; o dedicarte a la investigación, la educación, la consultoría y el desarrollo de productos en la industria de alimentos y bebidas.»
- **Tiles (6):**
  1. **«Cocina y producción»** — «Restaurantes, operadoras de alimentos y cocinas de la industria de la hospitalidad.»
  2. **«Pastelería y panadería»** — «Producción y dirección creativa en pastelerías y obradores.»
  3. **«Banquetes y catering»** — «Empresas banqueteras, catering y servicios de eventos.»
  4. **«Emprendimiento»** — «Abre tu propio negocio gastronómico: restaurante, pastelería, marca de producto o servicio de catering.»
  5. **«Consultoría y desarrollo de producto»** — «Asesora a negocios en desarrollo de menús, maridaje, innovación de platillos y conceptualización.»
  6. **«Investigación, educación y cultura»** — «Investigación gastronómica, docencia y promoción de la cultura, historia y tradiciones culinarias.»
- **Preview:** formato 4:5, alt descriptivo por ámbito (p. ej. «Chef egresado de la Anáhuac dirigiendo la cocina de un restaurante»).
- **Revisión humana (2026-09-04):** no se muestra texto adicional entre los tiles y la banda destacada.
- **Dato de empleabilidad:** «En la Red Anáhuac, el 70% de nuestros egresados se emplea al poco tiempo de graduarse (Top 10 de América Latina en el QS Graduate Employability Ranking).» **[VERIFICAR: cifra propia de Gastronomía.]**
- **Banda destacada (`campo-band`)** — mismo componente que la banda de doble titulación de Psicología. **⚠️ Es el módulo de mayor peso persuasivo de la página: dale la jerarquía visual que tiene la banda de Hull en Psicología.**
  - **H3:** «Doble credencial internacional · Bachelor in Gastronomy, Le Cordon Bleu»
  - Texto: «Somos la **única universidad de México** con alianza estratégica con **Le Cordon Bleu, Francia**. Además de tu título Anáhuac, obtienes el ***Bachelor in Gastronomy*** con reconocimiento internacional y **diplomas parciales de técnicas de cocina y repostería** a lo largo de la carrera.»
  - Dato: «**+250 convenios** con universidades y empresas en el mundo»
  - CTAs: «Iniciar proceso de admisión» (`btn btn-orange`) → `/admision-general` · «Solicitar más información» (`btn btn-light`) → `#solicita`
  - Logo: Le Cordon Bleu **[PENDIENTE: archivo de logotipo con autorización de uso]**

---

## Módulo 7 — Estudia Gastronomía en el campus que elijas · AIDA: Deseo · **H2** · `#instalaciones`

**Componente:** `lic-campus` — intro + 2 `campus-card` (Norte naranja, Sur morada), cada una con icono de pin, H3, dirección, **slider de fotos 1:1** y CTA de texto; abajo, `campus-note`.

**⚠️ Cada campus tiene instalaciones distintas:** el copy de cada tarjeta no es intercambiable.

- **Eyebrow:** «Instalaciones y campus» · **H2:** «Estudia Gastronomía en el campus que elijas»
- **Intro:** «La licenciatura es presencial y practicas en cocinas propias en ambos campus. Elige el que mejor te quede: los dos comparten la misma comunidad y experiencia Anáhuac.»
- **Campus Norte (H3):** «Av. Universidad Anáhuac 46, Lomas Anáhuac, Huixquilucan, Estado de México. Cuatro cocinas modernas y laboratorio de mixología.» · CTA: «Conoce el campus ›» → `/campus-norte-anahuac-mexico`
- **Campus Sur (H3):** «Av. de los Tanques 865, Torres de Potrero, Álvaro Obregón, Ciudad de México. Cuatro cocinas modernas y laboratorio de cocina de vanguardia.» · CTA: «Conoce el campus ›» → `/campus-sur-anahuac-mexico`
- **Slider:** 6 fotos por campus, 1:1. **[PENDIENTE: fotos reales de las cocinas, el laboratorio de mixología, el de cocina de vanguardia y los salones de cata.]**
- **`campus-note`:** «Transporte intercampus **gratuito**» · «**38 hectáreas** de instalaciones en la Red»
- **Línea bajo la nota:** «Ambos campus cuentan con salón de cata de vinos; además, tienes acceso al **Viñedo Anáhuac** en el estado de Querétaro.»

---

## Módulo 8 — Historias Anáhuac · AIDA: Deseo · **H2** *(módulo compartido — no rediseñar)*

**Componente:** `stories` de Inicio, tal cual (6 filas alternando `img, img, blockquote` / `blockquote, img, img`).

- **H2:** «Historias Anáhuac» · **Bajada:** «Leones Anáhuac que han transformado sus vidas con nosotros»
- **[PENDIENTE: testimonios reales con nombre. El folleto menciona en general egresados que abrieron restaurantes propios, trabajaron en restaurantes Michelin o lideraron equipos en hoteles internacionales, y participaciones premiadas en concursos internacionales: sirve como guía para buscar casos concretos. ⚠️ No convertir esas menciones genéricas en testimonios con comillas.]** Plantilla: «"[cita en primera persona]" — [Nombre], egresado(a) de Gastronomía, generación [año], Campus [Norte/Sur].»

---

## Módulo 9 — ¿Con quién te formas? · AIDA: Deseo · **H2** · `#colaboradores`

**Componente:** `lic-colab` — intro + `colab-docentes` (carrusel) + `colab-aliados`.

**⚠️ El segundo grupo NO es de logos, es una lista de destinos** (ciudades en formato chip). La fuente no nombra empresas: da categorías y ciudades. **No inventar logotipos de restaurantes u hoteles.**

- **Eyebrow:** «Docencia y colaboradores» · **H2:** «¿Con quién te formas?»
- **Intro:** «Aprendes de chefs y profesores activos en la industria, y practicas en instituciones y destinos gastronómicos líderes del mundo.»
- **«Coordinación académica y chefs» (H3):** carrusel de `docente-card` → foto + nombre + **cargo o logro profesional** (⚠️ no el grado ni la materia).
  - Mtro. José Ángel Díaz Rebolledo — «Director»
  - Mtra. María Teresa Hernández del Pando — «Coordinadora Académica»
  - Dra. Jacqueline Moreno Potignon — «Coordinadora de Promoción»
  - **[VERIFICAR: vigencia de nombres y cargos, y autorización para publicar foto y correo institucional.]** **[PENDIENTE: chefs y profesores destacados, distintos de la coordinación administrativa.]**
- **«Convenios de prácticas» (H3):** tiles de categoría (no logos) — «Restaurantes con estrella Michelin» · «Hoteles» · «Aerolíneas» · «Empresas de catering» · «Parques temáticos» · «Museos» · «Asociaciones empresariales». En la variante local de Gastronomía, las tarjetas tienen fondo `--surface-muted` y cambian a `--surface` al pasar el mouse.
- **«Destinos de prácticas» (H3):** dos listas de chips.
  - **Internacionales:** Montreal · Miami · Aspen · Dallas · Chicago · Orlando · Nueva York · Punta Cana · Buenos Aires · Hong Kong · Ibiza · Barcelona · Madrid · San Sebastián · París · Londres · Roma · Melbourne · Phuket · Seúl · Dubái · Vietnam · Tailandia · Shanghái
  - **Nacionales:** Ciudad de México · Cancún · Ensenada · Los Cabos · Mérida · Oaxaca · Riviera Maya · San Miguel de Allende · Punta Mita
  - Nota al pie del grupo: «Destinos donde han realizado prácticas alumnos de la Facultad de Turismo y Gastronomía.»

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

- **Eyebrow:** «Preguntas frecuentes» · **H2:** «Preguntas frecuentes sobre la Licenciatura en Gastronomía»
- **Acordeón (7 preguntas):**
  1. **«¿Cuántos años dura la carrera de Gastronomía?»** → «La Licenciatura en Gastronomía dura 8 semestres, es decir, 4 años, bajo el Modelo 2025, en modalidad presencial.»
  2. **«¿Qué materias se ven en la carrera de Gastronomía?»** → «Cursarás materias como Técnicas y aplicaciones culinarias, Pastelería, Cultura gastronómica de México e internacional, Evaluación sensorial, Costos de alimentos y bebidas y Fundamentos de cata de vinos, entre otras.»
  3. **«¿Dónde puedo estudiar Gastronomía en México?»** → «La Universidad Anáhuac México es la única universidad del país con alianza estratégica con Le Cordon Bleu, Francia, e imparte la Licenciatura en Gastronomía en Campus Norte y Campus Sur.»
  4. **«¿La Licenciatura en Gastronomía tiene prácticas profesionales?»** → «Sí. Cursas dos semestres de prácticas profesionales con valor curricular, en el sector gastronómico nacional o internacional.»
  5. **«¿Qué obtengo al estudiar Gastronomía en la Anáhuac además de mi título?»** → «Obtienes el Bachelor in Gastronomy con reconocimiento internacional y diplomas parciales de Le Cordon Bleu a lo largo de la carrera.»
  6. **«¿En qué puedo trabajar al terminar la carrera de Gastronomía?»** → «Puedes trabajar en restaurantes, pastelerías, empresas banqueteras y bares; emprender tu propio negocio gastronómico; o dedicarte a la consultoría, la investigación y la docencia.»
  7. **«¿Cuánto cuesta estudiar Gastronomía en la Anáhuac?»** → «Puedes calcular tu colegiatura y conocer opciones de beca en nuestro cotizador.» *(enlace a `/cotizador`)*
- **⚠️ El texto del `FAQPage` debe ser idéntico al del acordeón, sin markup dentro.**

---

## Módulo 12 — Descubre por qué ser un León Anáhuac · AIDA: Deseo (refuerzo) · **H2** · `#experiencia` *(módulo compartido — no rediseñar)*

**Componente:** `experience` de Inicio, tal cual.

- **Eyebrow:** «Mucho más que solo una Universidad.» · **H2:** «Descubre por qué ser un León Anáhuac» · **Bajada:** «Conoce por qué vivirás una experiencia universitaria única con nosotros.» · CTA: «Conoce la experiencia Anáhuac»
- **Copy de las 4 tarjetas:** el compartido del molde, sin adaptación para esta carrera.
- **⚠️ Recordatorio:** la cifra institucional «+150 universidades en 30 países» de este módulo **no se mezcla** con los «+250 convenios» de la Facultad (M9).

---

## Módulo 13 — Solicita información · AIDA: Acción · **H2** · `#solicita`

**Componente:** `lic-form` — foto vertical 4:5 + `lic-form-card`.

**⚠️ Formulario de envío de material, no de contacto con asesor. La bajada que lo declara es obligatoria y visible.**

- **Eyebrow:** «Solicita información» · **H2:** «Solicita información sobre la Licenciatura en Gastronomía»
- **Bajada:** «Cuéntanos qué te interesa y te enviaremos el material directamente a tu correo o WhatsApp. No recibirás la llamada de un asesor; si prefieres hablar con alguien, escríbenos desde «Elige el siguiente paso».»
- **Campos:**
  | Campo | Tipo | Detalle |
  |---|---|---|
  | «Nombre completo» | text | `autocomplete="name"` |
  | «Correo electrónico» | email | `autocomplete="email"` |
  | «WhatsApp / teléfono» | tel | `inputmode="numeric"`, `maxlength="15"` |
  | «Preparatoria de origen» | text | — |
  | «Licenciatura de interés» | text `readonly` | prellenado: **«Gastronomía»** |
  | «Periodo de ingreso de interés» | select | «Agosto 2026» · «Enero 2027» · «Aún no lo decido» |
  | «Campus de preferencia» | select | «Campus Norte» · «Campus Sur» · «Sin preferencia» |
- **Fieldset «¿Qué te gustaría recibir?»:** «Plan de estudios» · «Costos y becas» · «Proceso de admisión»
- **Aviso:** «He leído y acepto el [Aviso de Privacidad].» (checkbox `required`)
- **CTA (`btn btn-orange`):** «Solicitar información»
- **Confirmación:** «¡Listo! Te enviaremos por correo y WhatsApp el material que elegiste sobre la Licenciatura en Gastronomía.»
- **Error (ejemplo):** «Revisa tu correo: parece que falta el @.»
- **Alt de la foto:** «Estudiante de Gastronomía de la Anáhuac consultando información de la licenciatura.»
- **[PENDIENTE: conexión a HubSpot y foto real.]**

---

## Módulo 14 — Footer con Newsletter integrado · sin H2 de contenido

**Componente:** `site-footer` compartido, sin cambios.

---

# Datos estructurados (JSON-LD)

- **`BreadcrumbList`** (en `<head>`): Inicio › Oferta Académica › Turismo, Gastronomía y Hospitalidad › Gastronomía.
- **`Course`**: `name`="Licenciatura en Gastronomía" · `description`= intro de M4 · `provider`=`CollegeOrUniversity` "Universidad Anáhuac México" · `timeRequired`="P4Y" · `educationalCredentialAwarded`="Licenciatura" · `numberOfCredits`=342.
- **`FAQPage`** (junto a M11): las 7 preguntas/respuestas verbatim.
- **`CollegeOrUniversity`**: nombre, url, direcciones de Campus Norte y Sur (M7), `sameAs` a redes oficiales.

# Accesibilidad (WCAG 2.1 AA)

- Tabs de M5 con `role="tablist"` / `role="tab"` / `role="tabpanel"`, `aria-selected`, `aria-controls` y navegación por flechas; `<select>` equivalente en ≤540px con `<label class="sr-only">`.
- Tiles de M6 son `<button>` con `aria-pressed`; el alt de la preview se actualiza con el tile activo.
- Sliders de M7 con botones etiquetados y dots navegables por teclado.
- Acordeón de M11 con `<details>` nativo.
- Videos con subtítulos; el del hero carga al clic, con `aria-label` descriptivo. **Vigilar el LCP móvil: es la página con peor marca del lote (35).**
- Contraste AA en la banda naranja del FAQ y en las tarjetas de campus.
- Las listas de chips de destinos (M9) deben ser navegables y no una imagen.

# Wireframe en texto (orden de scroll)

```
Header
1  Hero (breadcrumb · H1 · claim · 3 chips | video + 2 CTAs)
2  ¿Es para ti? (4 tarjetas + chips Técnica/Negocio)
3  ¿Por qué la Anáhuac? (6 tarjetas + banda Modelo Anáhuac → CTA morado)
4  Perfil de egreso (bullets + tarjeta AEO 8 sem./342 créditos | foto)
5  Plan de estudios (7 tabs por área + 3 bloques + 2 descargas + RVOE)
6  Campo laboral (6 tiles + preview | banda LE CORDON BLEU + 2 CTAs duros)
7  Campus Norte / Sur (2 tarjetas con cocinas distintas + viñedo)
8  Historias Anáhuac (compartido)
9  ¿Con quién te formas? (coordinación + categorías + chips de destinos)
10 Elige el siguiente paso (5 tarjetas; la 5ª es CTA, sin datos de asesor)
11 FAQ (7, acordeón naranja + FAQPage)
12 León Anáhuac (compartido)
13 Solicita información (formulario de material)
14 Footer + Newsletter
```

# Pendientes antes de implementar

| # | Pendiente | Módulo | Prioridad | Quién lo cierra |
|---|---|---|---|---|
| 4 | Vigencia de nombres y cargos de la coordinación académica + autorización de foto | M9 | 🟡 | Facultad |
| 5 | Logotipo de Le Cordon Bleu con autorización de uso | M6 | 🟡 | Cliente |
| 6 | URL del documento oficial del RVOE | M5 | 🟡 | Cliente |
| 7 | Cifra de empleabilidad propia de Gastronomía | M6 | 🟡 | Cliente |
| 8 | Testimonios reales de egresados de Gastronomía | M8 | 🟡 | Cliente |
| 9 | Chefs y profesores destacados (distintos de la coordinación) | M9 | 🟡 | Facultad |
| 10 | Fotos reales de cocinas, laboratorios, salones de cata y viñedo | M1, M4, M7, M13 | 🟡 | Producción fotográfica |
| 11 | ID del video institucional | M1 | 🟡 | Cliente |
| 12 | ¿Aplica doble titulación con la Università Europea di Roma a Gastronomía? | — | 🟡 | Facultad |
| 13 | Conexión del formulario a HubSpot | M13 | 🟡 | HubSpot |
