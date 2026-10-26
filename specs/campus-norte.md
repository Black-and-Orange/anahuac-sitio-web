# Página: Campus Norte — Universidad Anáhuac México · **v1.1**
### Documento de handoff para diseño (estructura + copy final integrados)

> **Cómo leer este documento.** Módulo por módulo: qué componente va, en qué orden, con qué contenido, y el **copy literal** listo para publicar. Todo entre comillas «…» es texto literal: **no lo reescribas**. Los bloques `[VERIFICAR]` / `[PENDIENTE]` son datos reales sin confirmar: **no los inventes ni los borres**. Los avisos **⚠️** son restricciones de arquitectura: **respétalas tal cual**. Mobile-first.

> **Plantilla compartida.** Campus Norte y Campus Sur usan **la misma arquitectura** (11 módulos + footer, mismo orden, mismos componentes). Lo que cambia es la **narrativa**: Campus Norte se cuenta desde la **amplitud** («más posibilidades») y Campus Sur desde la **cercanía** («más pertenencia»). El territorio común de las dos páginas es **«La misma Anáhuac México. Dos maneras de vivirla.»** Hand-off hermano: `entregables/campus-sur.md`. Maqueta navegable de ambas: `maquetas/campus.html`.

> **Componentes:** se reutilizan los del sistema publicado: `lic-hero`, `lic-afinidad`, `lic-porque` con carrusel, chips de `area-card`, deslizador `campus-slider` + bloque «Tips», `stories`, el carrusel `events` de Inicio, el acordeón de fechas `fechas-accordion` de Proceso de admisión, `lic-faq`, `lic-pasos` y el footer con Newsletter. **Componente nuevo (uno solo):** la tabla comparativa Norte/Sur del módulo 7 (dos columnas, la del campus actual resaltada). Además, la **barra con CTA fijo en móvil** (botón estándar del sistema dentro de una barra inferior).

> **⚠️ Cambio de fondo frente a la página actual: no hay formulario genérico de registro.** La conversión de esta página es **agendar una visita**. El único formulario es el del **Tour Puertas Abiertas, incrustado en el módulo 8** con Campus Norte ya elegido; la cita con un asesor se agenda en su herramienta. Si alguien no está listo para venir, tiene «Habla con un asesor» en el módulo 11. En móvil, un **CTA fijo «Agenda tu visita»** acompaña todo el recorrido (ver Reglas globales).

> **Versión 1.1 (2026-10-13):** decisiones de la clienta: formulario del tour **incrustado** en M8 · **CTA fijo en móvil** · meta description **A** · Dirección de Empresas de Entretenimiento **confirmada** en Comunicación, Arquitectura y Diseño · **Anáhuac LABS y Hospital Virtual** se suman a M5 (son de Campus Norte).

> **⚠️ Cinco reglas de narrativa:**
> 1. **Nunca «Norte es grande / Sur es chico».** Campus Norte se presenta por la **amplitud** (variedad, red, actividad), no por ser «más grande que Sur». Las cifras de escala de Norte (alumnos, hectáreas, laboratorios) se usan **solo en esta página** y **nunca junto a las de Sur**.
> 2. **Ningún campus es «mejor».** La tabla del módulo 7 compara **experiencias**, no calidad. Mismo título, mismos profesores, mismo modelo educativo.
> 3. **Elegir campus no cierra el otro.** Todo módulo que hable de un servicio o instalación de Sur lo presenta como parte de la experiencia bicampus.
> 4. **Nunca compares una licenciatura con otra.** El módulo 4 solo lista las carreras.
> 5. **Nombre de la institución:** siempre «Universidad Anáhuac México» o «Anáhuac México», nunca «Anáhuac» solo. Incluye el módulo compartido **«Historias Anáhuac México»**. Solo se exceptúan «Modelo Anáhuac», «Leones Anáhuac» (nombre de los equipos) y nombres propios de programas («Acción Social Universidad Anáhuac»).

---

## 1. Ficha de la página

| Campo | Valor |
|---|---|
| **Slug / URL** | **Se conserva** `/licenciaturas/campus-norte-anahuac-mexico` (Mapeo, hoja *Sitemap*: acción *Reemplazar*, sin URL nueva). Se reemplaza el contenido; la URL no cambia, así que no hace falta redirect. |
| **Tipo** | `campus` — página de soporte y decisión (no es página de carrera ni de área) |
| **Etapa del funnel** | Consideration → Decision |
| **Audiencia** | (a) Aspirante que ya considera la Anáhuac México y quiere saber **cómo se vive** Campus Norte; (b) quien compara 2–3 universidades y usa el campus como desempate; (c) padres que buscan «que tenga todas las oportunidades»; (d) foráneos. |
| **Objetivo** | (1) Que el aspirante se identifique con la experiencia de Campus Norte; (2) **que agende una visita** (micro-conversión principal); (3) enrutar a su licenciatura. |
| **KPI** | Envíos del formulario del tour (M8) · clics en «Agenda tu cita» (M8) · clics en el CTA fijo móvil · clics a carreras (M4) · clics al otro campus (M2 y M7) |
| **Formulario** | **Solo el del Tour Puertas Abiertas**, incrustado en M8 (formulario de HubSpot actual de `/puertas-abiertas`, ID `924d72ee-3bb4-4f76-a9c7-4a129518fa91`), con «Campus de interés» = Campus Norte como campo oculto. La cita con un asesor se agenda en su herramienta. |
| **Datos del campus** | Av. Universidad Anáhuac 46, Col. Lomas Anáhuac, Huixquilucan, Estado de México, C.P. 52786 · +52 (55) 5627 0210 |

## 2. Reglas globales

- **Journey rector:** «¿Cómo se siente estudiar aquí?» → «¿Está mi carrera?» → «¿Qué hay?» → «¿Y si quiero lo del otro campus?» → **«Quiero verlo en persona.»**
- **CTA primario de toda la página: «Agenda tu visita»** → `#visita`. Cada módulo de Deseo cierra con un CTA a `#visita`. Jerarquía: Agenda tu visita ▸ Habla con un asesor ▸ Inicia tu admisión ▸ Cotizador.
- **CTA fijo en móvil (solo < 768 px):** barra inferior con el botón «Agenda tu visita» → `#visita`. Aparece al pasar el hero, **se oculta mientras M8 está en pantalla** (para no tapar el formulario) y sobre el footer. No tapa el contenido: deja su altura como margen al final de la página. En desktop no va: el header ya trae «Agenda tu visita». `aria-label`: «Agenda tu visita a Campus Norte».
- **No repetir datos entre módulos:**
  - Historia, comunidad, deporte, cultura, liderazgo y servicios → **solo en M3** (como experiencia, sin nombrar espacios).
  - Nombres de laboratorios, centros, estudios y complejo deportivo → **solo en M5**.
  - Lista de carreras → **solo en M4** (la FAQ remite por ancla).
  - Bicampus (materias en ambos campus, intercampus) → **solo en M7**; la FAQ 4 lo resume en una línea.
  - Rutas de transporte, estacionamiento y dirección → **solo en M9**.
  - Fechas del tour → **solo en M8** (administrables).
- **Copy atemporal:** nunca escribas año ni ciclo. Las fechas del tour y los eventos salen de **HubDB/HubSpot**, no del texto.
- **Tono:** segunda persona («tú»), entusiasta y concreto. Norte habla de **posibilidades**: «siempre hay algo pasando», «construye tu propio camino».
- **Media 100% real:** recorrido del campus, estadio, biblioteca, eventos, alumnos. Banco real, nunca stock. Video del hero en lazy-load.

## 3. Metadatos SEO / AEO

- **Title (58 car.):** «Universidad Anáhuac México Campus Norte | Agenda tu visita»
- **Meta description (150 car.):** «Conoce la Universidad Anáhuac México Campus Norte, junto a Interlomas: más de 40 licenciaturas, deporte, cultura y vida universitaria. Agenda tu visita.» *(versión A, aprobada por la clienta 2026-10-13)*
- **Keyword principal:** `universidad anáhuac méxico campus norte` (33,100). Hoy la posiciona en 1.º lugar el blog `/blog/estudiar-en-la-anahuac-mexico`, no esta página.
- **Secundarias (Mapeo + Keywords por URL):** `anahuac campus norte` (1,300) · `lomas de anahuac` (1,000) · `universidad anahuac interlomas` (590) · `universidad anahuac campus norte` (480) · `anahuac interlomas` (390) · `campus norte anahuac` (260) · `campus norte` (140) · `anáhuac campus norte` (110)
- **Dónde vive cada keyword:** H1 y title = principal · «Interlomas» y «Lomas Anáhuac» en el eyebrow, en la FAQ 1 y en la meta A · «campus norte anahuac» en H2 de M3 y FAQ.
- **Open Graph:**
  - `og:title`: «Universidad Anáhuac México Campus Norte»
  - `og:description`: «Más personas, más espacios, más caminos por explorar. Agenda tu visita a Campus Norte.»
  - `og:image` (alt): «Explanada de la Universidad Anáhuac México Campus Norte con estudiantes entre clases»
- **Enlazado interno:** cada chip de M4 → su página de carrera · M2 y M7 → `/licenciaturas/campus-sur-anahuac-mexico` (ancla «Conoce Campus Sur») · M9 → `/transporte-anahuac-mexico` · M8 → tour y agendador.
- **Schema:** `CollegeOrUniversity` (el campus: nombre, `address`, `geo`, `telephone`, `parentOrganization` = Universidad Anáhuac México) · `BreadcrumbList` · `FAQPage` (M10, 6 preguntas) · `EducationEvent` por cada fecha del tour (M8, generado desde HubDB; se quita solo al pasar la fecha) · `ItemList` de `Course` (M4).

## 4. Mapa de encabezados

- **H1** — «Universidad Anáhuac México Campus Norte» (M1, `#inicio`) · claim no-heading
  - **H2** «¿Campus Norte va contigo?» (M2, `#afinidad`)
  - **H2** «¿Por qué estudiar en Campus Norte de la Anáhuac México?» (M3, `#por-que`) → 6× H3
  - **H2** «¿Qué licenciaturas puedes estudiar en Campus Norte?» (M4, `#licenciaturas`) → 8× H3 (áreas)
  - **H2** «Instalaciones de Campus Norte» (M5, `#instalaciones`) → H3 por ficha
  - **H2** «Historias Anáhuac México» (M6, `#historias`)
  - **H2** «La misma Anáhuac México. Dos maneras de vivirla.» (M7, `#bicampus`) → H3 «Sin importar el campus que elijas»
  - **H2** «Agenda tu visita a Campus Norte» (M8, `#visita`) → 2–3× H3 (opciones de visita)
  - **H2** «Cómo llegar a Campus Norte» (M9, `#como-llegar`)
  - **H2** «Preguntas frecuentes sobre Campus Norte» (M10, `#faq`) → 6× H3
  - **H2** «Elige el siguiente paso» (M11, `#siguiente-paso`) → H3 por tarjeta
  - Footer (M12): sin H2

---

# Módulos (arquitectura + copy integrados)

## Módulo 1 — Hero · AIDA: Atención · **H1** · `#inicio`

**Componente:** `lic-hero`: breadcrumb + eyebrow + H1 + claim + subtítulo + 2 CTAs + video real. Sin chips.

**Copy final:**
- Breadcrumb: «Inicio > Campus Norte» `[VERIFICAR: si los campus cuelgan de «Estudia con nosotros» en el menú nuevo → «Inicio > Estudia con nosotros > Campus Norte»]`
- Eyebrow: «Lomas Anáhuac · Huixquilucan, junto a Interlomas»
- **H1:** «Universidad Anáhuac México Campus Norte»
- **Claim (dominante):** «Más personas, más espacios, más caminos por explorar.»
- Subtítulo: «En Campus Norte siempre hay algo pasando. Vive la experiencia universitaria completa, con deporte, cultura y una comunidad tan amplia como tus planes.»
- **CTA:** primario «Agenda tu visita» → `#visita` · secundario «Explora las licenciaturas» → `#licenciaturas`

**Media:** video de 20–30 s de un día en Campus Norte: llegada, clases, explanada, estadio, un evento al atardecer. Sin audio por defecto, con botón de pausa y subtítulos. **[PENDIENTE: video real; mientras tanto, foto aérea o de la explanada.]**
**Alt:** «Estudiantes de la Universidad Anáhuac México caminando por la explanada de Campus Norte, en Huixquilucan»

---

## Módulo 2 — Afinidad · AIDA: Interés · **H2** · `#afinidad`

**Componente:** `lic-afinidad` (lista escaneable con íconos), igual que en las páginas de área.

**Copy final:**
- **H2:** «¿Campus Norte va contigo?»
- Intro: «Este es tu campus si:»
- «**Quieres que la universidad sea el centro de tu vida social:** eventos, deporte y cultura todos los días.»
- «**Te gusta conocer gente nueva** y construir una red de contactos amplia y diversa.»
- «**Te mueves bien en espacios grandes** y prefieres construir tu propio camino.»
- «**Quieres combinar tu carrera con algo más:** un equipo representativo, un programa de liderazgo o una sociedad de alumnos.»
- Cierre: «Si te identificas con al menos dos, Campus Norte puede ser tu lugar.»
- Enlace secundario (texto, no botón): «¿Prefieres una comunidad más cercana y un ambiente tranquilo? Conoce Campus Sur ›» → `/licenciaturas/campus-sur-anahuac-mexico`

> ⚠️ El enlace a Campus Sur **se queda**: quien no se identifica con Norte no debe salir del sitio, debe encontrar su campus.

**Alt (si aplica):** «Grupo de estudiantes de Campus Norte de la Universidad Anáhuac México conversando en un jardín del campus»

---

## Módulo 3 — Por qué Campus Norte · AIDA: Interés · **H2** + 6× H3 · `#por-que`

**Componente:** `lic-porque`: carrusel de fotos a la izquierda (sticky) + enlace «Ver instalaciones ›» → `#instalaciones` + 6 tarjetas a la derecha. Opcional bajo la tarjeta 6: tira de logos de establecimientos (componente de logos que ya usa la landing actual de Sur).

**Copy final:**
- **H2:** «¿Por qué estudiar en Campus Norte de la Anáhuac México?»

1. **H3 — Donde nació la Anáhuac México:** «La Universidad Anáhuac México nació en 1964 y desde 1968 tiene su casa en Lomas Anáhuac: un campus de 22 hectáreas con tradición, historia y espíritu de León.»
2. **H3 — Una comunidad tan amplia como tus planes:** «Compartes campus con más de 11,000 estudiantes de licenciatura y con cerca de 3,500 foráneos de todo México y de otros países: una red que te acompaña durante la carrera y después de ella.» `[VERIFICAR: periodo de la numeralia (11,426) y cifra de foráneos del Manual BIU 2026]`
3. **H3 — La casa de los Leones:** «27 equipos representativos, del futbol americano al esgrima y los esports, entre los primeros lugares del ranking nacional CONADEIP, con Clínica de Medicina del Deporte para cuidar tu rendimiento.»
   - ⚠️ No escribas el lugar exacto en CONADEIP: el Informe del Rector 2025 dice 2.º y la página de Leones Norte, 3.º.
4. **H3 — Cultura que se vive en escena:** «Teatro, danza y música con compañías y talleres de alto nivel, y una agenda cultural que cada año reúne a más de 60,000 asistentes en el campus.»
5. **H3 — Liderazgo a tu medida:** «Programas de Liderazgo y Excelencia como Vértice, Genera, Culmen, CREA o Acción, sociedades de alumnos y voluntariado con Acción Social Universidad Anáhuac. Tú eliges cómo crecer fuera del aula.» `[VERIFICAR: lista vigente de programas abiertos en Campus Norte]`
6. **H3 — Todo a unos pasos de tu salón:** «Cafeterías, restaurantes, librería, papelería, banco y enfermería dentro del campus, con vigilancia las 24 horas.»
   - Tira de logos (opcional, administrable): Starbucks · Toks · Café Punta del Cielo · Lumen · Santander · Cafetería Le Cordon Bleu `[VERIFICAR: permiso de uso de logos; lista del Manual BIU 2026]`

- **CTA:** «Agenda tu visita» → `#visita` (secundario, bajo las tarjetas)

**Alt carrusel:** «Estadio de Campus Norte de la Universidad Anáhuac México durante un partido de los Leones Anáhuac» / «Estudiantes de Campus Norte en un ensayo de teatro, Universidad Anáhuac México» / «Estudiantes de la Universidad Anáhuac México en una cafetería de Campus Norte».
**[PENDIENTE: fotos reales para el carrusel — deporte, cultura, vida social.]**

---

## Módulo 4 — Licenciaturas en Campus Norte · AIDA: Interés · **H2** + 8× H3 · `#licenciaturas` · *enrutamiento*

**Componente:** listado por área académica. Cada área = **H3** + chips de carrera enlazados (mismo estilo de chip de `area-card`). En desktop, rejilla de 2 columnas de áreas; en móvil, acordeón con la 1.ª área abierta. Las carreras que también se imparten en Campus Sur llevan una **etiqueta pequeña «También en Sur»** dentro del chip (texto, no solo color). **Administrable desde HubDB** (la misma tabla de carreras × campus alimenta esta página, la de Sur y los chips de campus de cada carrera).

**Copy final:**
- **H2:** «¿Qué licenciaturas puedes estudiar en Campus Norte?»
- Línea de apoyo: «Más de 40 licenciaturas de las 8 áreas académicas de la Universidad Anáhuac México. Elige la tuya y conoce su plan de estudios.»

| H3 (área) | Carreras (chip → `/licenciaturas/<slug>`) |
|---|---|
| **Ciencias de la Salud** | Médico Cirujano `medicina` *(También en Sur)* · Médico Cirujano Dentista `cirujano-dentista` · Nutrición `nutricion` *(También en Sur)* · Terapia Física y Rehabilitación `terapia-fisica-y-rehabilitacion` · Biotecnología `biotecnologia` |
| **Ingenierías y Ciencias** | Actuaría `actuaria` *(También en Sur)* · Ciencia de Datos `cienciadedatos` · Ingeniería Ambiental `ingenieria-ambiental` · Ingeniería Biomédica `ingenieria-biomedica` · Ingeniería Civil `ingenieria-civil` · Ingeniería en Sistemas y Tecnologías de Información `ingenieria-en-sistemas-y-tecnologia-de-la-informacion` · Ingeniería Industrial para la Dirección `ingenieria-industrial-para-la-direccion` *(También en Sur)* · Ingeniería Mecatrónica `ingenieria-mecatronica` *(También en Sur)* · Ingeniería Química `ingenieria-quimica` *(También en Sur)* |
| **Negocios y Economía** | Administración y Dirección de Empresas `administracion-y-direccion-de-empresas` *(También en Sur)* · Business and Wealth Management `licenciatura-wealth-and-business-management` · Dirección del Deporte `direccion-del-deporte` · Dirección Financiera `direccion-financiera` *(También en Sur)* · Economía `economia` *(También en Sur)* · Finanzas y Contaduría Pública `finanzas-y-contaduria-publica` *(También en Sur)* · Global Management `global-management` · Mercadotecnia Estratégica `mercadotecnia-estrategica` *(También en Sur)* · Negocios Internacionales `negocios-internacionales` *(También en Sur)* |
| **Comunicación, Arquitectura y Diseño** | Arquitectura `arquitectura` *(También en Sur)* · Arquitectura de Interiores `arquitectura-de-interiores` · Comunicación `comunicacion` *(También en Sur)* · Dirección de Empresas de Entretenimiento `direccion-de-empresas-de-entretenimiento` *(También en Sur)* · Diseño de Moda e Innovación `diseno-de-moda-e-innovacion` · Diseño Gráfico `diseno-grafico` *(También en Sur)* · Diseño Industrial `diseno-industrial` *(También en Sur)* · Diseño Multimedia `diseno-multimedia` *(También en Sur)* |
| **Ciencias Sociales y Derecho** | Derecho `derecho` *(También en Sur)* · Global Development `global-development` · Pedagogía Organizacional y Educativa `pedagogia-organizacional-y-educativa` · Psicología `psicologia` *(También en Sur)* · Relaciones Internacionales `relaciones-internacionales` *(También en Sur)* |
| **Artes y Humanidades** | Artes Visuales `artes-visuales` · Historia `historia` · Música Contemporánea `musica-contemporanea` · Teatro y Actuación `teatro-y-actuacion` |
| **Turismo, Gastronomía y Hospitalidad** | Administración Turística `administracion-turistica` *(También en Sur)* · Dirección de Restaurantes `direccion-de-restaurantes` · Dirección Internacional de Hoteles `direccion-internacional-de-hoteles` · Gastronomía `gastronomia` *(También en Sur)* |
| **Ejecutivas** | Licenciatura Ejecutiva en Educación `licenciatura-ejecutiva-en-educación-anahuac-mexico` |

- Nota bajo la rejilla: «¿Aún no decides tu carrera? Explora la oferta por áreas ›» → `/licenciaturas/oferta-academica`
- **CTA:** N/A (cada chip es un enlace).

> ⚠️ **Fuente:** filtro oficial `oferta-academica?campus=Norte`, consultado el 2026-10-12 (45 licenciaturas presenciales). No agregues ni quites carreras a mano: la lista sale de HubDB.
> ⚠️ **Dirección de Empresas de Entretenimiento** va en **Comunicación, Arquitectura y Diseño** (confirmado por la clienta, 2026-10-13). **Ciencias Religiosas** (en línea) no se lista: es modalidad en línea, no de campus.
> ⚠️ El chip **no** dice «bicampus»: la etiqueta es «También en Sur».

**`aria-label` por chip:** «Conoce la Licenciatura en [Carrera]».

---

## Módulo 5 — Instalaciones · AIDA: Deseo · **H2** + H3 por ficha · `#instalaciones`

**Componente:** `campus-slider` (fichas con foto grande + H3 + texto; flechas, puntos y swipe; 3 a la vista en desktop) + 1 CTA.

**Copy final:**
- **H2:** «Instalaciones de Campus Norte»
- Línea de apoyo: «48 laboratorios, 52 talleres, 3 bibliotecas y espacios para cada interés, en 22 hectáreas.» *(Informe del Rector 2025)*

**Fichas (H3 + texto):**
1. **Centro Anáhuac de Simulación Clínica (CASIC)** — «acreditado por FLASIC: el primero con esta acreditación en la Ciudad de México y su zona metropolitana.»
2. **Biblioteca con Sala de Experiencias Inmersivas** — «salas de estudio individuales y grupales, hemeroteca, comicteca y una sala para aprender con realidad inmersiva.»
3. **Estudio profesional de televisión y estudio de fotografía** — «para producir como lo harás en la industria.»
4. **Trading Room** — «sigue los mercados financieros en tiempo real y toma decisiones de inversión.»
5. **Aula de juicios orales** — «para litigar un caso antes de pisar un tribunal.»
6. **Clínicas universitarias y cámaras de Gesell** — «5 clínicas y 5 cámaras de Gesell donde practicas con acompañamiento de tus profesores.»
7. **Centro Cultural Mexiquense Anáhuac** — «sede de la Escuela de Artes, con más de 60,000 asistentes al año.»
8. **Academia de Alta Cocina Le Cordon Bleu-Anáhuac** — «cocinas profesionales para Gastronomía y la Facultad de Turismo y Gastronomía.»
9. **Complejo deportivo Leones Anáhuac** — «estadio con pasto y luz LED renovados, pista, gimnasio, canchas techadas, pádel y muro de escalar.»
10. **Hospital Virtual** *(etiqueta «Próximamente»)* — «edificio de simulación de 5 pisos con consultorios, quirófanos, realidad virtual, robots y actores estandarizados, para todas las carreras de Ciencias de la Salud.»
11. **Anáhuac LABS** *(etiqueta «Próximamente»)* — «un clúster de laboratorios de ingeniería para experimentar, prototipar e innovar.» `[VERIFICAR: descripción oficial y fecha de apertura]`

- **CTA:** primario «Agenda tu visita y recórrelas» → `#visita`

> ⚠️ Los H3 usan los nombres oficiales del Informe del Rector 2025. No los parafrasees.
> ⚠️ **Hospital Virtual y Anáhuac LABS** son de Campus Norte (confirmado por la clienta, 2026-10-13). Mientras no abran, llevan la etiqueta **«Próximamente»** (administrable) y van **al final** del deslizador; al inaugurarse, la etiqueta se quita. El texto del Hospital Virtual es el mismo de la página del área de Ciencias de la Salud, sin «hoy en construcción» (lo dice la etiqueta).

**Alt por ficha:** «[Nombre de la instalación], Campus Norte, Universidad Anáhuac México».
**[PENDIENTE: fotografía real de las 9 instalaciones abiertas; render o foto de obra para Hospital Virtual y Anáhuac LABS.]**

---

## Módulo 6 — Historias Anáhuac México *(módulo compartido)* · AIDA: Deseo · **H2** · `#historias`

**Componente:** carrusel `stories` (foto + logro o cita + nombre + carrera), **filtrado por campus** (campo «campus» en la fuente de historias).

**Copy final:**
- **H2:** «Historias Anáhuac México»
- Bajada: «Leones de Campus Norte que encontraron aquí su camino»
- **[PENDIENTE: 3 historias de alumnos o egresados de Campus Norte, con permiso. Ideal: 1 deportista representativo, 1 foráneo y 1 alumno de un programa de liderazgo o sociedad de alumnos.]**
- ⚠️ Sin cita textual confirmada no se escribe entre comillas en primera persona: se cuenta el logro.
- **CTA:** N/A.

**Alt:** «[Nombre], estudiante de [carrera] en Campus Norte de la Universidad Anáhuac México».

---

## Módulo 7 — Una universidad, dos campus · AIDA: Deseo · **H2** + H3 · `#bicampus`

**Componente nuevo (el único):** tabla comparativa de **dos columnas** (Campus Norte | Campus Sur). La columna del campus actual va **resaltada** («Estás aquí»). En móvil, las dos columnas se apilan por fila (cada fila muestra Norte y Sur juntos) para que la comparación no se pierda. Debajo, bloque de 4 íconos «Sin importar el campus que elijas» + CTA al otro campus.
**Este módulo es idéntico en la página de Campus Sur** (solo cambia qué columna se resalta y el CTA).

**Copy final:**
- **H2:** «La misma Anáhuac México. Dos maneras de vivirla.»
- Intro: «Los dos campus comparten título, profesores y modelo educativo. Lo que cambia es cómo se vive el día a día: elige el que se parece más a la vida que quieres tener durante tu carrera.»

| | **Campus Norte** *(Estás aquí)* | **Campus Sur** |
|---|---|---|
| **Se vive desde** | «La amplitud: variedad de personas, actividades y oportunidades para construir tu propio camino.» | «La cercanía: una comunidad donde es más fácil conocer y conectar.» |
| **El ambiente** | «Dinámico y cosmopolita: siempre hay algo pasando.» | «Tranquilo, con áreas verdes y vista panorámica de la ciudad.» |
| **Tu comunidad** | «Una red amplia y diversa para hacer contactos.» | «Vínculos cercanos con profesores y compañeros.» |
| **Va contigo si** | «Quieres explorar y combinar tu carrera con deporte, cultura o liderazgo.» | «Quieres sentirte acompañado desde el primer día.» |
| **Dónde está** | «Huixquilucan, Estado de México, junto a Interlomas.» | «Álvaro Obregón, Ciudad de México, cerca de San Ángel.» |

- **H3:** «Sin importar el campus que elijas»
  - «**El mismo título** de la Universidad Anáhuac México.»
  - «**Materias en ambos campus:** puedes cursar algunas en el otro campus, siempre que la mayoría sean en el tuyo.»
  - «**Transporte intercampus gratuito** con tu credencial de alumno.»
  - «**Instalaciones de los dos campus** según tu carrera, tus equipos y tus actividades.»
- **CTA:** secundario «Conoce Campus Sur» → `/licenciaturas/campus-sur-anahuac-mexico` · primario «Agenda tu visita» → `#visita`

> ⚠️ **Sin cifras en esta tabla** (ni alumnos, ni hectáreas, ni número de carreras). Poner números lado a lado convierte la tabla en «grande vs. chico».
> ⚠️ El texto de las celdas es **idéntico** en las dos páginas. Si cambia uno, cambia en ambas.

---

## Módulo 8 — Agenda tu visita · AIDA: Acción · **H2** + H3 por opción · `#visita` · *conversión principal*

**Componente:** 2 tarjetas grandes de opción de visita, la 1.ª destacada (tarjetas de `lic-pasos` en tamaño grande) + acordeón de próximas fechas del tour (`fechas-accordion` de Proceso de admisión) + bloque «Tips» + carrusel `events` de Inicio **filtrado por Campus Norte** (se oculta si no hay eventos próximos). Tarjeta 3 condicional.

**Copy final:**
- **H2:** «Agenda tu visita a Campus Norte»
- Subtítulo: «Nada se compara con caminarlo. Ven solo o con tu familia, conoce las instalaciones y resuelve tus dudas en persona.»

1. **H3 — Tour Puertas Abiertas** *(destacada)*
   - «Recorre Campus Norte con un guía: instalaciones académicas, deportivas y culturales, servicios y vida universitaria.»
   - Dato: «Miércoles por la tarde y sábados por la mañana.» *(días y horas exactos en el acordeón de fechas)*
   - **Paso 1 · «Elige tu fecha»:** las 4 siguientes fechas del tour como opciones seleccionables (día + hora), con el acordeón `fechas-accordion` para ver más. **Administrable** (HubDB, mismo origen que `/licenciaturas/puertas-abiertas`); cada fecha pasada se oculta sola. `[PENDIENTE: el formulario actual no tiene campo de fecha — crear la propiedad en HubSpot (p. ej. «fecha_tour») para guardar la fecha elegida]`
   - **Paso 2 · formulario incrustado** (HubSpot, el mismo de `/puertas-abiertas`), con estos campos y en este orden:
     - Nombre · Apellido paterno · Apellido materno · Email · Celular
     - Estado de procedencia · Preparatoria · ¿Cuál es tu grado escolar? · Licenciatura · Periodo de interés
     - **«Campus de interés» = Campus Norte: campo oculto, prellenado.** No se muestra.
     - Bloque plegable **«¿Vienes acompañado?»** (cerrado por defecto) con los 2 acompañantes opcionales: nombre completo y correo de cada uno.
     - Casilla obligatoria del Aviso de privacidad (enlace al aviso de APREU que ya usa el formulario).
   - **Botón de envío:** «Reserva tu lugar en el tour»
   - **Mensaje de confirmación** (sustituye al formulario al enviar): «¡Listo! Te esperamos en Campus Norte. Te enviamos a tu correo la confirmación con la fecha, la hora y cómo llegar.» + enlace «Ver cómo llegar ›» → `#como-llegar`
2. **H3 — Cita con un asesor, presencial o virtual**
   - «Resuelve tus dudas sobre carreras, admisión y apoyos en una cita de hasta 90 minutos. Si vienes al campus, pueden acompañarte hasta 2 personas.»
   - **CTA:** «Agenda tu cita» → `/licenciaturas/agenda-tu-cita-online` (con Campus Norte preseleccionado si la herramienta lo permite)
3. **H3 — Tour de tu carrera** *(condicional: solo se muestra si hay un tour por carrera activo en Campus Norte)*
   - «Algunas carreras abren tours especiales para conocer sus laboratorios y hablar con su coordinación. Hoy: Medicina.»
   - **CTA:** «Ver tour de Medicina» → `/licenciaturas/tour-medicina` *(el nombre y la URL cambian según el tour activo; administrable)*

- **Bloque «Tips Anáhuac México» — Antes de tu visita:**
  «Llega 15 minutos antes: el tour arranca puntual y solo hay 10 minutos de tolerancia para sumarte. Si vienes en auto, revisa los accesos y el estacionamiento en Cómo llegar.» → `#como-llegar`
- **Sub-bloque de eventos** (H3 «Próximos eventos en Campus Norte»): carrusel `events` filtrado por campus. Se oculta si no hay eventos.

> ⚠️ **El formulario del tour va incrustado; no se sustituye por un botón a otra página** (decisión de la clienta, 2026-10-13). En móvil ocupa todo el ancho de la tarjeta 1 y las tarjetas 2 y 3 bajan después. **Nunca** uses el formulario genérico «Regístrate y resuelve tus dudas».
> ⚠️ El tour virtual 360 **no se enlaza** por ahora: la demo existente tiene datos de 2020 y texto de relleno.

**Alt:** «Aspirantes y sus familias en un Tour Puertas Abiertas por Campus Norte de la Universidad Anáhuac México».

---

## Módulo 9 — Cómo llegar · AIDA: Acción · **H2** · `#como-llegar`

**Componente:** dos columnas: mapa embebido (Google Maps, con fallback de imagen estática + enlace) | datos de llegada. Chips de rutas.

**Copy final:**
- **H2:** «Cómo llegar a Campus Norte»
- **Dirección:** «Av. Universidad Anáhuac 46, Col. Lomas Anáhuac, Huixquilucan, Estado de México, C.P. 52786»
- **Teléfono:** «+52 (55) 5627 0210»
- Botones: «Abrir en Google Maps» · «Abrir en Waze»
- **Transporte de la universidad:** «Llega con las rutas de transporte de la universidad, que se reservan desde su app.»
  - Chips de rutas: «Del Valle–Condesa» · «Lindavista» · «Lomas Verdes–San Mateo» · «Periférico Norte» · «Perisur–Patriotismo» · «Polanco–Camarones» · «Santa Fe» · «Satélite» · «Valle Dorado» · «Zona Esmeralda» · «Toluca–Metepec» · «Tollocan–Lerma» *(rutas del semestre en curso; administrable)*
- **Estacionamiento:** «11 estacionamientos dentro del campus, con pase semestral o boleto por día, y centro de carga para autos eléctricos.»
- **Entre campus:** «Como alumno, viajas gratis a Campus Sur en el transporte intercampus.»
- **CTA:** secundario «Consulta rutas, horarios y costos» → `/transporte-anahuac-mexico`

> ⚠️ **No publiques precios del transporte** en esta página: cambian cada semestre y viven en la página de Transporte.
> ⚠️ Usa siempre **Huixquilucan**. La página actual de Foráneos dice «Naucalpan de Juárez»: es un error de esa página (reportado aparte).

---

## Módulo 10 — Preguntas frecuentes · AIDA: Acción · **H2** + 6× H3 · `#faq`

**Componente:** `lic-faq` (acordeón `<details>`/`<summary>`; 1.ª abierta). `schema.org/FAQPage`. Respuesta directa primero.

**Copy final:**
- **H2:** «Preguntas frecuentes sobre Campus Norte»

1. **¿Dónde está la Universidad Anáhuac México Campus Norte?** *(abierta)*
   «En Av. Universidad Anáhuac 46, colonia Lomas Anáhuac, Huixquilucan, Estado de México, junto a Interlomas. Puedes llegar en auto, con las rutas de transporte de la universidad o desde Campus Sur con el transporte intercampus.» → `#como-llegar`
2. **¿Qué licenciaturas hay en Campus Norte?**
   «En Campus Norte se imparten más de 40 licenciaturas de las 8 áreas académicas de la Universidad Anáhuac México, de Medicina e Ingeniería a Artes, Turismo y Negocios. Consulta la lista completa por área.» → `#licenciaturas`
3. **¿Cómo puedo conocer Campus Norte antes de inscribirme?**
   «Regístrate a un Tour Puertas Abiertas, que se ofrece los miércoles por la tarde y los sábados por la mañana, o agenda una cita con un asesor, presencial en el campus o virtual.» → `#visita`
4. **¿Puedo tomar clases en Campus Sur si me inscribo en Campus Norte?**
   «Sí. La Universidad Anáhuac México es bicampus: puedes cursar algunas materias en Campus Sur, siempre que la mayoría sean en tu campus, y moverte entre ambos con el transporte intercampus gratuito.»
5. **¿Qué diferencia hay entre Campus Norte y Campus Sur?**
   «Los dos campus dan el mismo título y comparten modelo educativo y profesores. Campus Norte se vive desde la amplitud, con una comunidad grande y diversa y muchas actividades a la vez; Campus Sur, desde la cercanía, con una comunidad más próxima y un ambiente tranquilo.» → `#bicampus`
6. **¿Campus Norte tiene estacionamiento y transporte?**
   «Sí. Tiene 11 estacionamientos dentro del campus y rutas de transporte de la universidad desde distintas zonas de la Ciudad de México, el Estado de México y Toluca.» → `#como-llegar`

> ⚠️ FAQ 5 se responde **en positivo** y sin jerarquía entre campus. No la conviertas en «¿cuál es mejor?».

---

## Módulo 11 — Elige el siguiente paso *(clúster de 5 tarjetas)* · AIDA: Acción · **H2** + H3 por tarjeta · `#siguiente-paso`

**Componente:** `lic-pasos`, sin cambios. Orden por nivel de intención.

**Copy final:**
- **H2:** «Elige el siguiente paso»
- Subtítulo: «Estés donde estés en tu decisión, aquí tienes por dónde seguir.»
- **Agenda tu visita** — «Recorre Campus Norte en un tour o en una cita con un asesor.» · «Agendar ›» → `#visita`
- **Habla con un asesor** — «Resuelve tus dudas con un asesor preuniversitario.» · «Contactar ›» → `proceso-de-admision.html#asesoria`
- **Cotiza tu carrera** — «Calcula el costo de tu licenciatura y conoce tus opciones de pago.» · «Cotizar ›» → `/cotizador`
- **Conoce los apoyos socioeconómicos** — «Descubre los apoyos disponibles para tu ingreso.» · «Ver apoyos ›» → `/apoyos-educativos-universidad-anahuac-mexico`
- **Inicia tu admisión** — «Comienza tu proceso 100% en línea, en 6 pasos.» · «Empezar ›» → `/admision-general`

`aria-label` diferenciado en cada CTA.

---

## Módulo 12 — Footer con Newsletter integrado

- **Idéntico al del sitio** (Newsletter, Admisiones, datos de ambos campus, legales, redes, RVOE SEP D.O.F. 26/11/1982).
- En la columna de campus, «Campus Norte» y «Campus Sur» enlazan a sus páginas.

---

# Elementos administrables (HubSpot / HubDB)

| Dato | Dónde se usa | Fuente |
|---|---|---|
| Carreras × campus | M4 (esta página y Sur) · chips de campus en cada página de carrera | Tabla HubDB única |
| Fechas del Tour Puertas Abiertas | M8 acordeón · schema `EducationEvent` | Mismo origen que `/puertas-abiertas` |
| Tour por carrera activo | M8 tarjeta 3 (se oculta si no hay) | HubDB |
| Eventos por campus | M8 carrusel `events` | Origen de eventos de Inicio, filtro «Campus Norte» |
| Historias por campus | M6 | Fuente de `stories`, filtro «Campus Norte» |
| Rutas de transporte del semestre | M9 chips | Página de Transporte |
| Formulario del tour | M8 tarjeta 1 (incrustado, campus oculto) | Formulario HubSpot de `/puertas-abiertas` |
| Etiqueta «Próximamente» | M5 fichas de Hospital Virtual y Anáhuac LABS (se quita al inaugurarse) | HubDB |

# Datos estructurados (guía JSON-LD)

- **`CollegeOrUniversity`:** «Universidad Anáhuac México Campus Norte», `address` (Av. Universidad Anáhuac 46, Lomas Anáhuac, Huixquilucan, Estado de México, 52786, MX), `geo`, `telephone`, `parentOrganization` → «Universidad Anáhuac México», `sameAs` a redes.
- **`BreadcrumbList`:** Inicio > Campus Norte.
- **`FAQPage`** (M10): 6 `Question`/`acceptedAnswer`, texto idéntico al acordeón.
- **`EducationEvent`** por fecha del tour: `name` «Tour Puertas Abiertas Campus Norte», `startDate`, `location` (el campus), `organizer`, `eventAttendanceMode` = Offline, `isAccessibleForFree` = true.
- **`ItemList`** (M4): `ListItem` → `Course` con `name`, `url` y `provider`.

# Accesibilidad (WCAG 2.1 AA)

- Alt descriptivo en todas las fotos. Video del hero con subtítulos y pausa.
- Etiqueta «También en Sur» como texto dentro del chip, no solo color.
- Tabla del M7 con `<th scope>`; en móvil, cada fila conserva su encabezado.
- Mapa con alternativa de texto (dirección + enlaces a Maps/Waze).
- Acordeones con `aria-expanded`; deslizador navegable por teclado. Foco visible en chips, tarjetas y CTAs.
- Formulario del tour: etiquetas visibles (no solo placeholder), errores en texto junto al campo, fechas seleccionables con teclado y estado seleccionado que no dependa solo del color; el mensaje de confirmación se anuncia con `aria-live`.
- CTA fijo móvil: no tapa contenido ni el foco del teclado; se oculta mientras el formulario está en pantalla.

# Fuentes

- Investigación de perfiles «Campus Norte vs. Sur» (Daniela, oct-2026): territorio «La misma Anáhuac. Dos maneras de vivirla», narrativa amplitud/cercanía, perfiles y zonas. Los perfiles se usan como **lenguaje de afinidad** (M2), no como datos.
- Filtro oficial de oferta académica por campus (consultado el 2026-10-12).
- Informe del Rector 2025 (infraestructura por campus, pp. 164-165; deporte, p. 80; CASIC, p. 37) · Manual BIU Campus Norte, agosto 2026 (servicios, deporte, foráneos) · Numeralia institucional · Historia institucional.
- Página oficial de Transporte (rutas TRAXI y AllRide, intercampus) · Tour Puertas Abiertas · Cita de informes · Leones Anáhuac Campus Norte.
- «Mapeo de Sitio Web 2025» (URL, acción, keywords) · «Keywords Por URL».
- Sistema publicado (github): Inicio (`events`), Proceso de admisión (`fechas-accordion`), Ciencias de la Salud (`lic-afinidad`, `lic-porque`, `campus-slider`, `lic-pasos`).
