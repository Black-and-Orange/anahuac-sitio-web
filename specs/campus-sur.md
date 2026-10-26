# Página: Campus Sur — Universidad Anáhuac México · **v1.1**
### Documento de handoff para diseño (estructura + copy final integrados)

> **Cómo leer este documento.** Módulo por módulo: qué componente va, en qué orden, con qué contenido, y el **copy literal** listo para publicar. Todo entre comillas «…» es texto literal: **no lo reescribas**. Los bloques `[VERIFICAR]` / `[PENDIENTE]` son datos reales sin confirmar: **no los inventes ni los borres**. Los avisos **⚠️** son restricciones de arquitectura: **respétalas tal cual**. Mobile-first.

> **Plantilla compartida.** Campus Sur y Campus Norte usan **la misma arquitectura** (11 módulos + footer, mismo orden, mismos componentes). Lo que cambia es la **narrativa**: Campus Sur se cuenta desde la **cercanía** («más pertenencia») y Campus Norte desde la **amplitud** («más posibilidades»). El territorio común de las dos páginas es **«La misma Anáhuac México. Dos maneras de vivirla.»** Hand-off hermano: `entregables/campus-norte.md`. Maqueta navegable de ambas: `maquetas/campus.html`.

> **Componentes:** se reutilizan los del sistema publicado: `lic-hero`, `lic-afinidad`, `lic-porque` con carrusel, chips de `area-card`, deslizador `campus-slider` + bloque «Tips», `stories`, el carrusel `events` de Inicio, el acordeón de fechas `fechas-accordion` de Proceso de admisión, `lic-faq`, `lic-pasos` y el footer con Newsletter. **Componente nuevo (uno solo, compartido con Norte):** la tabla comparativa Norte/Sur del módulo 7. Además, la **barra con CTA fijo en móvil** (botón estándar del sistema dentro de una barra inferior).

> **⚠️ Cambio de fondo frente a la página actual: no hay formulario genérico de registro.** La conversión de esta página es **agendar una visita**. El único formulario es el del **Tour Puertas Abiertas, incrustado en el módulo 8** con Campus Sur ya elegido; la cita con un asesor se agenda en su herramienta. Si alguien no está listo para venir, tiene «Habla con un asesor» en el módulo 11. En móvil, un **CTA fijo «Agenda tu visita»** acompaña todo el recorrido (ver Reglas globales).

> **Versión 1.1 (2026-10-13):** decisiones de la clienta: formulario del tour **incrustado** en M8 · **CTA fijo en móvil** · meta description **A** · Dirección de Empresas de Entretenimiento **confirmada** en Comunicación, Arquitectura y Diseño · **Engineering Management solo en Sur** y **Diseño Gráfico en ambos campus**, confirmados (M4 y FAQ 2).

> **⚠️ Cinco reglas de narrativa:**
> 1. **Cercanía nunca es «más chico».** Nunca escribas «campus pequeño», «menos alumnos» ni cifras de matrícula, número de aulas o laboratorios de Campus Sur. La escala se traduce en **beneficio**: te conocen, te acompañan, perteneces.
> 2. **Ningún campus es «mejor».** La tabla del módulo 7 compara **experiencias**, no calidad. Mismo título, mismos profesores, mismo modelo educativo.
> 3. **Elegir campus no cierra el otro.** Lo que vive en Campus Norte (equipos, centros, carreras) se presenta como parte de la experiencia bicampus, nunca como algo que «le falta» a Sur.
> 4. **Nunca compares una licenciatura con otra.** El módulo 4 solo lista las carreras.
> 5. **Nombre de la institución:** siempre «Universidad Anáhuac México» o «Anáhuac México», nunca «Anáhuac» solo. Incluye el módulo compartido **«Historias Anáhuac México»**. Solo se exceptúan «Modelo Anáhuac», «Leones Anáhuac» (nombre de los equipos) y nombres propios de programas («Acción Social Universidad Anáhuac»).

---

## 1. Ficha de la página

| Campo | Valor |
|---|---|
| **Slug / URL** | **Se conserva** `/licenciaturas/campus-sur-anahuac-mexico` (Mapeo, hoja *Sitemap*: acción *Reemplazar*, prioridad 2, sin URL nueva). Se reemplaza el contenido; la URL no cambia. |
| **Tipo** | `campus` — página de soporte y decisión (no es página de carrera ni de área) |
| **Etapa del funnel** | Consideration → Decision |
| **Audiencia** | (a) Aspirante que ya considera la Anáhuac México y quiere saber **cómo se vive** Campus Sur; (b) quien compara 2–3 universidades y usa el campus como desempate; (c) padres que buscan «una gran universidad sin perder acompañamiento»; (d) foráneos que quieren una comunidad fácil de hacer propia. |
| **Objetivo** | (1) Que el aspirante se identifique con la experiencia de Campus Sur; (2) **que agende una visita** (micro-conversión principal); (3) enrutar a su licenciatura. |
| **KPI** | Envíos del formulario del tour (M8) · clics en «Agenda tu cita» (M8) · clics en el CTA fijo móvil · clics a carreras (M4) · clics al otro campus (M2 y M7) |
| **Formulario** | **Solo el del Tour Puertas Abiertas**, incrustado en M8 (formulario de HubSpot actual de `/puertas-abiertas`, ID `924d72ee-3bb4-4f76-a9c7-4a129518fa91`), con «Campus de interés» = Campus Sur como campo oculto. La cita con un asesor se agenda en su herramienta. |
| **Datos del campus** | Av. de los Tanques 865, Col. Torres de Potrero, Álvaro Obregón, Ciudad de México, C.P. 01840 · +52 (55) 5628 8800 |

## 2. Reglas globales

- **Journey rector:** «¿Cómo se siente estudiar aquí?» → «¿Está mi carrera?» → «¿Qué hay?» → «¿Y si quiero lo del otro campus?» → **«Quiero verlo en persona.»**
- **CTA primario de toda la página: «Agenda tu visita»** → `#visita`. Cada módulo de Deseo cierra con un CTA a `#visita`. Jerarquía: Agenda tu visita ▸ Habla con un asesor ▸ Inicia tu admisión ▸ Cotizador.
- **CTA fijo en móvil (solo < 768 px):** barra inferior con el botón «Agenda tu visita» → `#visita`. Aparece al pasar el hero, **se oculta mientras M8 está en pantalla** (para no tapar el formulario) y sobre el footer. No tapa el contenido: deja su altura como margen al final de la página. En desktop no va: el header ya trae «Agenda tu visita». `aria-label`: «Agenda tu visita a Campus Sur».
- **No repetir datos entre módulos:**
  - Comunidad, entorno, historia, deporte, liderazgo y servicios → **solo en M3** (como experiencia, sin nombrar espacios).
  - Nombres de laboratorios, estudios, cocinas y espacios deportivos → **solo en M5**.
  - Lista de carreras → **solo en M4** (la FAQ remite por ancla).
  - Bicampus (materias en ambos campus, intercampus) → **solo en M7**; la FAQ 4 lo resume en una línea.
  - Rutas de transporte, estacionamiento, accesos y dirección → **solo en M9**.
  - Fechas del tour → **solo en M8** (administrables).
- **Copy atemporal:** nunca escribas año ni ciclo. Las fechas del tour y los eventos salen de **HubDB/HubSpot**, no del texto. Única excepción: el año de apertura del campus (1981), que es un dato histórico.
- **Tono:** segunda persona («tú»), cálido y concreto. Sur habla de **pertenencia**: «te conocen», «te acompañan», «es más fácil sentirte parte».
- **Media 100% real:** áreas verdes, la vista de la ciudad, grupos pequeños en clase, convivencia, deporte al aire libre. Banco real, nunca stock. Video del hero en lazy-load.

## 3. Metadatos SEO / AEO

- **Title (56 car.):** «Universidad Anáhuac México Campus Sur | Agenda tu visita»
- **Meta description (154 car.):** «Conoce la Universidad Anáhuac México Campus Sur, en Álvaro Obregón, CDMX: una comunidad cercana, áreas verdes y más de 20 licenciaturas. Agenda tu visita.» *(versión A, aprobada por la clienta 2026-10-13)*
- **Keyword principal:** `universidad anáhuac méxico sur` (12,100) + `universidad anáhuac méxico campus sur` (4,400), las dos cubiertas por el H1. Hoy las posicionan el Home y blogs de 2020, no esta página.
- **Secundarias (Mapeo + Keywords por URL):** `anahuac sur` (8,100) · `universidad anahuac sur` (2,400) · `anáhuac campus sur` (1,000) · `anahuac campus sur` (1,000) · `universidad anahuac campus sur` (480) · `anahuac mexico sur` (320) · `anahuac sur cdmx` (260) · `campus sur anahuac` (140) · `anahuac mexico campus sur` (90)
- **Dónde vive cada keyword:** H1 y title = principal · «Anáhuac México Sur» en el `og:description` · «CDMX» en el eyebrow, la meta description y la FAQ 1.
- **Open Graph:**
  - `og:title`: «Universidad Anáhuac México Campus Sur»
  - `og:description`: «Anáhuac México Sur: aquí es más fácil sentir que perteneces. Agenda tu visita a Campus Sur.»
  - `og:image` (alt): «Estudiantes de la Universidad Anáhuac México en las áreas verdes de Campus Sur, con la Ciudad de México al fondo»
- **Enlazado interno:** cada chip de M4 → su página de carrera · M2 y M7 → `/licenciaturas/campus-norte-anahuac-mexico` (ancla «Conoce Campus Norte») · M9 → `/transporte-anahuac-mexico` · M8 → tour y agendador.
- **Schema:** `CollegeOrUniversity` (el campus: nombre, `address`, `geo`, `telephone`, `parentOrganization` = Universidad Anáhuac México) · `BreadcrumbList` · `FAQPage` (M10, 6 preguntas) · `EducationEvent` por cada fecha del tour (M8, desde HubDB) · `ItemList` de `Course` (M4).

## 4. Mapa de encabezados

- **H1** — «Universidad Anáhuac México Campus Sur» (M1, `#inicio`) · claim no-heading
  - **H2** «¿Campus Sur va contigo?» (M2, `#afinidad`)
  - **H2** «¿Por qué estudiar en Campus Sur de la Anáhuac México?» (M3, `#por-que`) → 6× H3
  - **H2** «¿Qué licenciaturas puedes estudiar en Campus Sur?» (M4, `#licenciaturas`) → 7× H3 (áreas)
  - **H2** «Instalaciones de Campus Sur» (M5, `#instalaciones`) → H3 por ficha
  - **H2** «Historias Anáhuac México» (M6, `#historias`)
  - **H2** «La misma Anáhuac México. Dos maneras de vivirla.» (M7, `#bicampus`) → H3 «Sin importar el campus que elijas»
  - **H2** «Agenda tu visita a Campus Sur» (M8, `#visita`) → 2–3× H3 (opciones de visita)
  - **H2** «Cómo llegar a Campus Sur» (M9, `#como-llegar`)
  - **H2** «Preguntas frecuentes sobre Campus Sur» (M10, `#faq`) → 6× H3
  - **H2** «Elige el siguiente paso» (M11, `#siguiente-paso`) → H3 por tarjeta
  - Footer (M12): sin H2

---

# Módulos (arquitectura + copy integrados)

## Módulo 1 — Hero · AIDA: Atención · **H1** · `#inicio`

**Componente:** `lic-hero`: breadcrumb + eyebrow + H1 + claim + subtítulo + 2 CTAs + video real. Sin chips.

**Copy final:**
- Breadcrumb: «Inicio > Campus Sur» `[VERIFICAR: si los campus cuelgan de «Estudia con nosotros» en el menú nuevo → «Inicio > Estudia con nosotros > Campus Sur»]`
- Eyebrow: «Torres de Potrero · Álvaro Obregón, CDMX»
- **H1:** «Universidad Anáhuac México Campus Sur»
- **Claim (dominante):** «Aquí es más fácil sentir que perteneces.»
- Subtítulo: «Vive toda la Universidad Anáhuac México en un campus tranquilo, rodeado de áreas verdes, donde profesores y compañeros te conocen desde el primer día.»
- **CTA:** primario «Agenda tu visita» → `#visita` · secundario «Explora las licenciaturas» → `#licenciaturas`

**Media:** video de 20–30 s: la vista de la ciudad desde el campus, jardines, una clase con conversación, amigos en la cafetería. Sin audio por defecto, con botón de pausa y subtítulos. **[PENDIENTE: video real; mientras tanto, foto de áreas verdes con la vista panorámica.]**
**Alt:** «Estudiantes de la Universidad Anáhuac México conversando en los jardines de Campus Sur, en Álvaro Obregón, Ciudad de México»

---

## Módulo 2 — Afinidad · AIDA: Interés · **H2** · `#afinidad`

**Componente:** `lic-afinidad` (lista escaneable con íconos), igual que en las páginas de área.

**Copy final:**
- **H2:** «¿Campus Sur va contigo?»
- Intro: «Este es tu campus si:»
- «**Quieres estudiar en una gran universidad** y que tus profesores y compañeros te conozcan.»
- «**Prefieres empezar la universidad acompañado**, con una transición a tu ritmo.»
- «**Te concentras mejor en un ambiente tranquilo**, con áreas verdes y espacio para respirar.»
- «**Te importa sentirte parte de una comunidad** desde el primer semestre.»
- Cierre: «Si te identificas con al menos dos, Campus Sur puede ser tu lugar.»
- Enlace secundario (texto, no botón): «¿Buscas un campus con más actividad y una comunidad más amplia? Conoce Campus Norte ›» → `/licenciaturas/campus-norte-anahuac-mexico`

> ⚠️ El enlace a Campus Norte **se queda**: quien no se identifica con Sur no debe salir del sitio, debe encontrar su campus.

**Alt (si aplica):** «Estudiantes de Campus Sur de la Universidad Anáhuac México conversando con un profesor en un jardín del campus»

---

## Módulo 3 — Por qué Campus Sur · AIDA: Interés · **H2** + 6× H3 · `#por-que`

**Componente:** `lic-porque`: carrusel de fotos a la izquierda (sticky) + enlace «Ver instalaciones ›» → `#instalaciones` + 6 tarjetas a la derecha. Opcional bajo la tarjeta 6: tira de logos de establecimientos (el componente de logos que ya usa la landing actual).

**Copy final:**
- **H2:** «¿Por qué estudiar en Campus Sur de la Anáhuac México?»

1. **H3 — Una comunidad donde te conocen:** «En Campus Sur la convivencia es cercana: profesores y compañeros te ubican desde el primer semestre. Y si vienes de otro estado o país, la comunidad foránea de ADEFA te recibe desde el primer día.»
2. **H3 — Un campus para concentrarte:** «Áreas verdes, espacios abiertos y una vista panorámica de la Ciudad de México: lejos del ruido, pero conectado con San Ángel, Santa Fe y el Periférico Sur.»
3. **H3 — Una historia propia desde 1981:** «Campus Sur abrió sus puertas en 1981 y hoy forma, junto con Campus Norte, una sola Universidad Anáhuac México: el mismo título, el mismo modelo y los mismos profesores.»
4. **H3 — Deporte al aire libre:** «Equipos de Leones Anáhuac en soccer, rugby, básquetbol, tochito, triatlón, cheer y dance, y el Programa de Excelencia Deportiva ELITE para quienes compiten en serio.» `[VERIFICAR: vigencia de ELITE y equipos activos en Campus Sur]`
5. **H3 — Liderazgo con compromiso social:** «Programas de Liderazgo y Excelencia como Vértice, Genera y Alpha, sociedad de alumnos y voluntariado con Acción Social Universidad Anáhuac, que en Campus Sur acompaña a la comunidad de Casa del Éxodo, en el Ajusco Medio.» `[VERIFICAR: lista vigente de programas abiertos en Campus Sur]`
6. **H3 — Todo lo que necesitas, sin salir:** «Cafeterías, tienda de conveniencia, papelería, banco y enfermería dentro del campus, con vigilancia las 24 horas.»
   - Tira de logos (opcional, administrable): Starbucks · Café Punta del Cielo · Oxxo · Lumen · Santander `[VERIFICAR: permiso de uso de logos; lista del Manual BIU 2026]`

- **CTA:** «Agenda tu visita» → `#visita` (secundario, bajo las tarjetas)

> ⚠️ **Sin cifras de escala** en este módulo (ni alumnos, ni foráneos, ni hectáreas).

**Alt carrusel:** «Vista panorámica de la Ciudad de México desde Campus Sur de la Universidad Anáhuac México» / «Equipo de soccer de los Leones Anáhuac de Campus Sur entrenando» / «Estudiantes de Campus Sur de la Universidad Anáhuac México en una jornada de Acción Social».
**[PENDIENTE: fotos reales para el carrusel — comunidad, entorno, deporte.]**

---

## Módulo 4 — Licenciaturas en Campus Sur · AIDA: Interés · **H2** + 7× H3 · `#licenciaturas` · *enrutamiento*

**Componente:** listado por área académica. Cada área = **H3** + chips de carrera enlazados (mismo estilo de chip de `area-card`). En desktop, rejilla de 2 columnas de áreas; en móvil, acordeón con la 1.ª área abierta. **Administrable desde HubDB** (la misma tabla de carreras × campus de la página de Norte).

**Copy final:**
- **H2:** «¿Qué licenciaturas puedes estudiar en Campus Sur?»
- Línea de apoyo: «Más de 20 licenciaturas de 7 áreas académicas de la Universidad Anáhuac México. Elige la tuya y conoce su plan de estudios.»

| H3 (área) | Carreras (chip → `/licenciaturas/<slug>`) |
|---|---|
| **Ciencias de la Salud** | Médico Cirujano `medicina` · Nutrición `nutricion` |
| **Ingenierías y Ciencias** | Actuaría `actuaria` · Engineering Management `engineering-management` · Ingeniería Industrial para la Dirección `ingenieria-industrial-para-la-direccion` · Ingeniería Mecatrónica `ingenieria-mecatronica` · Ingeniería Química `ingenieria-quimica` |
| **Negocios y Economía** | Administración y Dirección de Empresas `administracion-y-direccion-de-empresas` · Dirección Financiera `direccion-financiera` · Economía `economia` · Finanzas y Contaduría Pública `finanzas-y-contaduria-publica` · Mercadotecnia Estratégica `mercadotecnia-estrategica` · Negocios Internacionales `negocios-internacionales` |
| **Comunicación, Arquitectura y Diseño** | Arquitectura `arquitectura` · Comunicación `comunicacion` · Dirección de Empresas de Entretenimiento `direccion-de-empresas-de-entretenimiento` · Diseño Gráfico `diseno-grafico` · Diseño Industrial `diseno-industrial` · Diseño Multimedia `diseno-multimedia` |
| **Ciencias Sociales y Derecho** | Derecho `derecho` · Psicología `psicologia` · Relaciones Internacionales `relaciones-internacionales` |
| **Turismo, Gastronomía y Hospitalidad** | Administración Turística `administracion-turistica` · Gastronomía `gastronomia` |
| **Ejecutivas** | Administración de Negocios (Licenciatura Empresarial) `administracion-de-negocios` |

- Nota bajo la rejilla: «¿No ves tu carrera? Puede impartirse en Campus Norte. Consulta la oferta completa por áreas ›» → `/licenciaturas/oferta-academica`
- **CTA:** N/A (cada chip es un enlace).

> ⚠️ **Fuente:** filtro oficial `oferta-academica?campus=Sur`, consultado el 2026-10-12 (25 licenciaturas presenciales). No agregues ni quites carreras a mano: la lista sale de HubDB. **Engineering Management se imparte solo en Campus Sur** y **Diseño Gráfico en los dos campus** (confirmado por la clienta, 2026-10-13).
> ⚠️ **En esta página los chips no llevan etiqueta de campus.** En Campus Sur casi todas las carreras se imparten también en Norte; etiquetar las 25 sería ruido. La nota bajo la rejilla cubre el caso de quien busca una carrera que solo está en Norte.
> ⚠️ **Artes y Humanidades no aparece** (sus 4 licenciaturas son de Campus Norte). No dejes el área vacía ni con un mensaje de «no disponible».
> ⚠️ **Dirección de Empresas de Entretenimiento** va en **Comunicación, Arquitectura y Diseño** (confirmado por la clienta, 2026-10-13). **Ciencias Religiosas** (en línea) no se lista.

**`aria-label` por chip:** «Conoce la Licenciatura en [Carrera]».

---

## Módulo 5 — Instalaciones · AIDA: Deseo · **H2** + H3 por ficha · `#instalaciones`

**Componente:** `campus-slider` (fichas con foto grande + H3 + texto; flechas, puntos y swipe; 3 a la vista en desktop) + 1 CTA.

**Copy final:**
- **H2:** «Instalaciones de Campus Sur»
- Línea de apoyo: «Espacios especializados para tu carrera, rodeados de áreas verdes.»

**Fichas (H3 + texto):**
1. **Centro Anáhuac de Simulación Clínica (CASIC)** — «con acreditación FLASIC, la primera en la Ciudad de México y su zona metropolitana.»
2. **Cocinas Le Cordon Bleu-Anáhuac** — «cuatro cocinas, salón de cata de vino y laboratorio de cocina de vanguardia.»
3. **Trading Room** — «sigue los mercados financieros en tiempo real y toma decisiones de inversión.»
4. **Estudio de televisión y estudio de fotografía** — «para producir como lo harás en la industria.»
5. **Aula de juicios orales** — «para litigar un caso antes de pisar un tribunal.»
6. **Biblioteca y cámara de Gesell** — «salas de estudio individuales y grupales, y una cámara de Gesell para las prácticas de Psicología.»
7. **Salas de cómputo de la Torre 3** — «equipos con el software especializado de tu carrera.» `[VERIFICAR: número de salas y equipos — el Informe del Rector dice 9 salas/183 equipos y el Manual BIU, 11 salas/234 equipos]`
8. **Centro de Cultura Internacional** — `[PENDIENTE: qué ofrece (idiomas, certificaciones…) para redactar la línea]`
9. **Espacios deportivos al aire libre** — «pista de tartán con medidas oficiales, gimnasio al aire libre, campos de soccer, voleibol de playa, pádel, tenis y circuito de calistenia.»

- **CTA:** primario «Agenda tu visita y recórrelas» → `#visita`

> ⚠️ Los H3 usan los nombres oficiales del Informe del Rector 2025 y del Manual BIU Campus Sur 2026. No los parafrasees. La ficha 2 usa los mismos datos que la página de área de Turismo, Gastronomía y Hospitalidad (4 cocinas en Campus Sur).
> ⚠️ **Sin totales** («X laboratorios», «X aulas») en esta página.

**Alt por ficha:** «[Nombre de la instalación], Campus Sur, Universidad Anáhuac México».
**[PENDIENTE: fotografía real de las 9 instalaciones.]**

---

## Módulo 6 — Historias Anáhuac México *(módulo compartido)* · AIDA: Deseo · **H2** · `#historias`

**Componente:** carrusel `stories` (foto + logro o cita + nombre + carrera), **filtrado por campus**.

**Copy final:**
- **H2:** «Historias Anáhuac México»
- Bajada: «Leones de Campus Sur que encontraron aquí su comunidad»
- **[PENDIENTE: 3 historias de alumnos o egresados de Campus Sur, con permiso. Ideal: 1 foráneo que se integró con ADEFA, 1 alumno que llegó de una prepa pequeña y 1 de Acción Social o deporte.]**
- ⚠️ Sin cita textual confirmada no se escribe entre comillas en primera persona: se cuenta el logro.
- **CTA:** N/A.

**Alt:** «[Nombre], estudiante de [carrera] en Campus Sur de la Universidad Anáhuac México».

---

## Módulo 7 — Una universidad, dos campus · AIDA: Deseo · **H2** + H3 · `#bicampus`

**Componente nuevo (compartido con Norte):** tabla comparativa de **dos columnas** (Campus Norte | Campus Sur). La columna de **Campus Sur** va **resaltada** («Estás aquí»). En móvil, las dos columnas se apilan por fila. Debajo, bloque de 4 íconos + CTA al otro campus.
**Este módulo es idéntico en la página de Campus Norte** (solo cambia la columna resaltada y el CTA). **El orden de columnas no cambia** (Norte | Sur) en ninguna de las dos páginas.

**Copy final:**
- **H2:** «La misma Anáhuac México. Dos maneras de vivirla.»
- Intro: «Los dos campus comparten título, profesores y modelo educativo. Lo que cambia es cómo se vive el día a día: elige el que se parece más a la vida que quieres tener durante tu carrera.»

| | **Campus Norte** | **Campus Sur** *(Estás aquí)* |
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
- **CTA:** secundario «Conoce Campus Norte» → `/licenciaturas/campus-norte-anahuac-mexico` · primario «Agenda tu visita» → `#visita`

> ⚠️ **Sin cifras en esta tabla.** El texto de las celdas es **idéntico** en las dos páginas.

---

## Módulo 8 — Agenda tu visita · AIDA: Acción · **H2** + H3 por opción · `#visita` · *conversión principal*

**Componente:** 2 tarjetas grandes de opción de visita, la 1.ª destacada + acordeón de próximas fechas del tour (`fechas-accordion`) + bloque «Tips» + carrusel `events` de Inicio **filtrado por Campus Sur** (se oculta si no hay eventos). Tarjeta 3 condicional.

**Copy final:**
- **H2:** «Agenda tu visita a Campus Sur»
- Subtítulo: «Ven a conocer la comunidad que te va a recibir. Trae a tu familia, recorre el campus y resuelve tus dudas en persona.»

1. **H3 — Tour Puertas Abiertas** *(destacada)*
   - «Recorre Campus Sur con un guía: instalaciones académicas y deportivas, servicios y vida universitaria.»
   - Dato: «Miércoles por la tarde y sábados por la mañana.» *(días y horas exactos en el acordeón de fechas)*
   - **Paso 1 · «Elige tu fecha»:** las 4 siguientes fechas del tour como opciones seleccionables (día + hora), con el acordeón `fechas-accordion` para ver más. **Administrable** (HubDB, mismo origen que `/licenciaturas/puertas-abiertas`); cada fecha pasada se oculta sola. `[PENDIENTE: el formulario actual no tiene campo de fecha — crear la propiedad en HubSpot (p. ej. «fecha_tour») para guardar la fecha elegida]`
   - **Paso 2 · formulario incrustado** (HubSpot, el mismo de `/puertas-abiertas`), con estos campos y en este orden:
     - Nombre · Apellido paterno · Apellido materno · Email · Celular
     - Estado de procedencia · Preparatoria · ¿Cuál es tu grado escolar? · Licenciatura · Periodo de interés
     - **«Campus de interés» = Campus Sur: campo oculto, prellenado.** No se muestra.
     - Bloque plegable **«¿Vienes acompañado?»** (cerrado por defecto) con los 2 acompañantes opcionales: nombre completo y correo de cada uno.
     - Casilla obligatoria del Aviso de privacidad (enlace al aviso de APREU que ya usa el formulario).
   - **Botón de envío:** «Reserva tu lugar en el tour»
   - **Mensaje de confirmación** (sustituye al formulario al enviar): «¡Listo! Te esperamos en Campus Sur. Te enviamos a tu correo la confirmación con la fecha, la hora y cómo llegar.» + enlace «Ver cómo llegar ›» → `#como-llegar`
2. **H3 — Cita con un asesor, presencial o virtual**
   - «Resuelve tus dudas sobre carreras, admisión y apoyos en una cita de hasta 90 minutos. Si vienes al campus, pueden acompañarte hasta 2 personas.»
   - **CTA:** «Agenda tu cita» → `/licenciaturas/agenda-tu-cita-online` (con Campus Sur preseleccionado si la herramienta lo permite)
3. **H3 — Tour de tu carrera** *(condicional)*
   - «Algunas carreras abren tours especiales para conocer sus laboratorios y hablar con su coordinación. Hoy: Medicina.»
   - **CTA:** «Ver tour de Medicina» → `/licenciaturas/tour-medicina` *(administrable)*

- **Bloque «Tips Anáhuac México» — Antes de tu visita:**
  «Llega 15 minutos antes: el tour arranca puntual y solo hay 10 minutos de tolerancia para sumarte. Si vienes en auto, revisa los accesos en Cómo llegar.» → `#como-llegar`
- **Sub-bloque de eventos** (H3 «Próximos eventos en Campus Sur»): carrusel `events` filtrado por campus. Se oculta si no hay eventos.

> ⚠️ **El formulario del tour va incrustado; no se sustituye por un botón a otra página** (decisión de la clienta, 2026-10-13). En móvil ocupa todo el ancho de la tarjeta 1 y las tarjetas 2 y 3 bajan después. **Nunca** uses el formulario genérico «Regístrate y resuelve tus dudas».

**Alt:** «Aspirantes y sus familias en un Tour Puertas Abiertas por Campus Sur de la Universidad Anáhuac México».

---

## Módulo 9 — Cómo llegar · AIDA: Acción · **H2** · `#como-llegar`

**Componente:** dos columnas: mapa embebido (Google Maps, con fallback de imagen estática + enlace) | datos de llegada. Chips de rutas.

**Copy final:**
- **H2:** «Cómo llegar a Campus Sur»
- **Dirección:** «Av. de los Tanques 865, Col. Torres de Potrero, Álvaro Obregón, Ciudad de México, C.P. 01840»
- **Teléfono:** «+52 (55) 5628 8800»
- Botones: «Abrir en Google Maps» · «Abrir en Waze»
- **Accesos:** «Llegas por Periférico y Av. Luis Cabrera, por Av. Toluca o por la Supervía Poniente.» `[VERIFICAR: redacción de accesos con Servicios Generales]`
- **Transporte de la universidad:** «Llega con las rutas de transporte de la universidad, que se reservan desde su app.»
  - Chips de rutas: «Vaqueritos por Tlalpan» · «Vaqueritos por Perisur» · «WTC» · «Narvarte» · «Toluca» *(rutas del semestre en curso; administrable)*
- **Estacionamiento:** «Estacionamiento dentro del campus y centro de carga para autos eléctricos.»
- **Entre campus:** «Como alumno, viajas gratis a Campus Norte en el transporte intercampus.»
- **CTA:** secundario «Consulta rutas, horarios y costos» → `/transporte-anahuac-mexico`

> ⚠️ **No publiques precios del transporte** en esta página: cambian cada semestre y viven en la página de Transporte.

---

## Módulo 10 — Preguntas frecuentes · AIDA: Acción · **H2** + 6× H3 · `#faq`

**Componente:** `lic-faq` (acordeón; 1.ª abierta). `schema.org/FAQPage`. Respuesta directa primero.

**Copy final:**
- **H2:** «Preguntas frecuentes sobre Campus Sur»

1. **¿Dónde está la Universidad Anáhuac México Campus Sur?** *(abierta)*
   «En Av. de los Tanques 865, colonia Torres de Potrero, alcaldía Álvaro Obregón, Ciudad de México, cerca de San Ángel. Puedes llegar en auto, con las rutas de transporte de la universidad o desde Campus Norte con el transporte intercampus.» → `#como-llegar`
2. **¿Qué licenciaturas hay en Campus Sur?**
   «En Campus Sur se imparten más de 20 licenciaturas de 7 áreas académicas de la Universidad Anáhuac México, de Medicina e Ingeniería a Derecho, Diseño, Gastronomía y Negocios, incluida Engineering Management, que solo se imparte en este campus. Consulta la lista completa por área.» → `#licenciaturas`
3. **¿Cómo puedo conocer Campus Sur antes de inscribirme?**
   «Regístrate a un Tour Puertas Abiertas, que se ofrece los miércoles por la tarde y los sábados por la mañana, o agenda una cita con un asesor, presencial en el campus o virtual.» → `#visita`
4. **¿Puedo tomar clases en Campus Norte si me inscribo en Campus Sur?**
   «Sí. La Universidad Anáhuac México es bicampus: puedes cursar algunas materias en Campus Norte, siempre que la mayoría sean en tu campus, y moverte entre ambos con el transporte intercampus gratuito.»
5. **¿Qué diferencia hay entre Campus Sur y Campus Norte?**
   «Los dos campus dan el mismo título y comparten modelo educativo y profesores. Campus Sur se vive desde la cercanía, con una comunidad próxima y un ambiente tranquilo; Campus Norte, desde la amplitud, con una comunidad grande y diversa y muchas actividades a la vez.» → `#bicampus`
6. **¿Campus Sur tiene estacionamiento y transporte?**
   «Sí. Tiene estacionamiento dentro del campus y rutas de transporte de la universidad desde el sur y el centro de la Ciudad de México y desde Toluca.» → `#como-llegar`

> ⚠️ FAQ 5 se responde **en positivo** y sin jerarquía entre campus.

---

## Módulo 11 — Elige el siguiente paso *(clúster de 5 tarjetas)* · AIDA: Acción · **H2** + H3 por tarjeta · `#siguiente-paso`

**Componente:** `lic-pasos`, sin cambios.

**Copy final:**
- **H2:** «Elige el siguiente paso»
- Subtítulo: «Estés donde estés en tu decisión, aquí tienes por dónde seguir.»
- **Agenda tu visita** — «Recorre Campus Sur en un tour o en una cita con un asesor.» · «Agendar ›» → `#visita`
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
| Carreras × campus | M4 (esta página y Norte) · chips de campus en cada página de carrera | Tabla HubDB única |
| Fechas del Tour Puertas Abiertas | M8 acordeón · schema `EducationEvent` | Mismo origen que `/puertas-abiertas` |
| Tour por carrera activo | M8 tarjeta 3 (se oculta si no hay) | HubDB |
| Eventos por campus | M8 carrusel `events` | Origen de eventos de Inicio, filtro «Campus Sur» |
| Historias por campus | M6 | Fuente de `stories`, filtro «Campus Sur» |
| Rutas de transporte del semestre | M9 chips | Página de Transporte |
| Formulario del tour | M8 tarjeta 1 (incrustado, campus oculto) | Formulario HubSpot de `/puertas-abiertas` |

# Datos estructurados (guía JSON-LD)

- **`CollegeOrUniversity`:** «Universidad Anáhuac México Campus Sur», `address` (Av. de los Tanques 865, Torres de Potrero, Álvaro Obregón, Ciudad de México, 01840, MX), `geo`, `telephone`, `parentOrganization` → «Universidad Anáhuac México», `sameAs` a redes.
- **`BreadcrumbList`:** Inicio > Campus Sur.
- **`FAQPage`** (M10): 6 `Question`/`acceptedAnswer`, texto idéntico al acordeón.
- **`EducationEvent`** por fecha del tour: `name` «Tour Puertas Abiertas Campus Sur», `startDate`, `location`, `organizer`, `eventAttendanceMode` = Offline, `isAccessibleForFree` = true.
- **`ItemList`** (M4): `ListItem` → `Course` con `name`, `url` y `provider`.

# Accesibilidad (WCAG 2.1 AA)

- Alt descriptivo en todas las fotos. Video del hero con subtítulos y pausa.
- Tabla del M7 con `<th scope>`; en móvil, cada fila conserva su encabezado.
- Mapa con alternativa de texto (dirección + enlaces a Maps/Waze).
- Acordeones con `aria-expanded`; deslizador navegable por teclado. Foco visible en chips, tarjetas y CTAs.
- Formulario del tour: etiquetas visibles (no solo placeholder), errores en texto junto al campo, fechas seleccionables con teclado y estado seleccionado que no dependa solo del color; el mensaje de confirmación se anuncia con `aria-live`.
- CTA fijo móvil: no tapa contenido ni el foco del teclado; se oculta mientras el formulario está en pantalla.

# Fuentes

- Investigación de perfiles «Campus Norte vs. Sur» (Daniela, oct-2026): territorio «La misma Anáhuac. Dos maneras de vivirla», narrativa amplitud/cercanía, perfiles y zonas. Los perfiles se usan como **lenguaje de afinidad** (M2), no como datos.
- Filtro oficial de oferta académica por campus (consultado el 2026-10-12).
- Informe del Rector 2025 (infraestructura por campus, pp. 164-165; CASIC, p. 37) · Manual BIU Campus Sur, agosto 2026 (servicios, deporte, foráneos, ELITE) · Historia institucional · Nuestros Campus (vista panorámica, accesos).
- Página oficial de Transporte (rutas KOLORS y AllRide, intercampus) · Tour Puertas Abiertas · Cita de informes · Leones Anáhuac Campus Sur.
- «Mapeo de Sitio Web 2025» (URL, acción, keywords) · «Keywords Por URL».
- Página de área Turismo, Gastronomía y Hospitalidad v2.1 (cocinas de Campus Sur).
- Sistema publicado (github): Inicio (`events`), Proceso de admisión (`fechas-accordion`), Ciencias de la Salud (`lic-afinidad`, `lic-porque`, `campus-slider`, `lic-pasos`).
