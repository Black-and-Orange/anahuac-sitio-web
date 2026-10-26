# Página: Área académica — Turismo, Gastronomía y Hospitalidad · Anáhuac México · **v2.1**
### Documento de handoff para diseño (estructura + copy final integrados)

> **Cómo leer este documento.** Módulo por módulo: qué componente va, en qué orden, con qué contenido, y el **copy literal** listo para publicar. Todo entre comillas «…» es texto literal: **no lo reescribas**. Los bloques `[VERIFICAR]` / `[PENDIENTE]` son datos reales sin confirmar: **no los inventes ni los borres**. Los avisos **⚠️** son restricciones de arquitectura: **respétalas tal cual**. Mobile-first.

> **Molde:** esta página replica la **versión final publicada de Ciencias de la Salud** (`area-ciencias-de-la-salud.html`): mismos módulos, mismo orden y mismos componentes (`lic-hero`, `lic-afinidad`, `lic-porque` con carrusel, `area-card`, mosaico de campo laboral, deslizador de instalaciones + bloque «Tips», `stories`, `lic-faq`, `lic-pasos`, footer con Newsletter). **No hay componentes nuevos.** Solo cambia el contenido.

> **Versión 2.1 (2026-10-06):** H1 unificado con el molde de área («Licenciaturas en…»); la keyword «carreras de…» pasa a la FAQ 1 y a la meta description. La FAQ 4 y el intro de Campo laboral (M5) se replantean en positivo, sin enunciar objeciones.

> **Versión 2 (2026-10-06):** alineada con los hand-offs de las 4 licenciaturas del área (Gastronomía en su versión final publicada, Administración Turística, Dirección Internacional de Hoteles y Dirección de Restaurantes). Cambios vs. v1: campus confirmados en M4 y FAQ 2 · ranking QS confirmado en M3 · detalle de Le Cordon Bleu por carrera en la FAQ 3 · competencias de Gastronomía en M3 · instalaciones con los mismos nombres que en las páginas de carrera · viñedo marcado `[VERIFICAR]`.

> **⚠️ Cinco particularidades de esta área:**
> 1. **Son 4 licenciaturas**, no 5. *Dirección de Empresas de Entretenimiento* **no** forma parte de esta página por ahora (decisión de la clienta, 2026-10-01).
> 2. **No todas son bicampus.** **Gastronomía** y **Administración Turística** se imparten en **Campus Norte y Campus Sur**; **Dirección Internacional de Hoteles** y **Dirección de Restaurantes**, **solo en Campus Norte**. Afecta a los chips de M4 y a la FAQ 2.
> 3. **Le Cordon Bleu es el diferenciador central del área**, pero **lo que se obtiene cambia por carrera**: Bachelor en Gastronomía, Administración Turística y Dirección Internacional de Hoteles; **solo diplomas** (sin Bachelor) en Dirección de Restaurantes. En el copy general se dice «un Bachelor o diplomas de Le Cordon Bleu, según tu licenciatura»: **no generalices «Bachelor» para las 4.** El detalle por carrera vive solo en la FAQ 3.
> 4. **El ranking QS es de la Universidad en la disciplina Hospitality & Leisure Management**, no de una carrera. Cítalo siempre con su fuente, tal como está en M3. No lo conviertas en «la mejor carrera de turismo».
> 5. **Nunca compares una licenciatura con otra.** Cada tarjeta habla solo de su carrera.

> **⚠️ Nombre de la institución:** siempre «Universidad Anáhuac México» o «Anáhuac México», nunca «Anáhuac» solo. Incluye el módulo compartido **«Historias Anáhuac México»**. Solo se exceptúan «Modelo Anáhuac» y «Bloque Anáhuac».

---

## 1. Ficha de la página

| Campo | Valor |
|---|---|
| **Slug / URL** | `/turismo-gastronomia-hospitalidad` — definida en el «Mapeo de Sitio Web 2025» (fila 27, acción *Crear/Publicar*). La landing actual `/facultad-turismo-gastronomia` está como *Por definir*: se sugiere **redirect 301** hacia la nueva. |
| **Tipo** | `area` — hub de área académica (embudo: Oferta Académica → **Área** → Carrera) |
| **Etapa del funnel (mapeo)** | Awareness + Consideration |
| **Audiencia** | Aspirante Gen Z/Alpha al que le atraen viajar, la cocina, el servicio y crear experiencias (y sus padres, cuya objeción principal es la estabilidad laboral y el retorno de inversión), que aún **no decide** cuál de las 4 licenciaturas es la suya |
| **Objetivo** | (a) confirmar afinidad; (b) **enrutar a la página de la carrera correcta — el clic a una carrera es la micro-conversión principal**; (c) dar un siguiente paso de baja fricción (visita / asesor / cotizar / becas / admisión) |
| **KPI** | CTR a cada página de carrera (por tarjeta) · clics en «Elige el siguiente paso» |
| **Licenciaturas (4)** | Gastronomía · Administración Turística · Dirección Internacional de Hoteles · Dirección de Restaurantes |
| **Unidad académica** | Facultad de Turismo y Gastronomía |
| **Campus por carrera** | Gastronomía y Administración Turística: **Campus Norte y Campus Sur** · Dirección Internacional de Hoteles y Dirección de Restaurantes: **solo Campus Norte** (confirmado en sus hand-offs, 2026-10-06) |
| **Formulario** | **No hay formulario** en esta página (igual que el molde). El cierre es el clúster del módulo 9. |

## 2. Reglas globales

- **Journey rector:** el aspirante llega explorando. La conversión principal es el **clic a una carrera** (módulo 4).
- **No repetir datos entre módulos:**
  - Le Cordon Bleu, prácticas, ranking QS, acreditaciones, profesores, investigación y experiencia internacional → **solo en el módulo 3**. El **detalle de Le Cordon Bleu por carrera** vive **solo en la FAQ 3**.
  - Cocinas, laboratorios, simuladores y viñedo por nombre → **solo en el módulo 6**. En el módulo 3 la tarjeta de Le Cordon Bleu **no** enumera instalaciones.
  - Campo laboral agregado → **solo en el módulo 5**. Las tarjetas del módulo 4 **no** llevan campo laboral.
  - Costos, becas y admisión → **solo se enlazan** desde el módulo 9.
- **Sin cifras institucionales presentadas como del área** (mismo criterio que Salud): no usar 17,440 estudiantes, +55,000 egresados, 70% de empleabilidad ni «+250 convenios» como si fueran de la Facultad.
- **⚠️ Prácticas:** son **dos semestres** con valor curricular (Prácticum I y II). **No escribas «prácticas desde el primer semestre».**
- **Tono:** segunda persona («tú»), aspiracional pero honesto: la hospitalidad exige disciplina, horarios intensos y atención al detalle. Las dos dudas del área (si la carrera tiene alcance profesional y si hay trabajo estable) se responden **en positivo**, mostrando todo lo que aprendes y dónde puedes trabajar. **No las enuncies como objeción** («no es solo ser guía de turistas», «no es solo cocinar»).
- **Copy atemporal:** nunca hardcodear año o ciclo. Única excepción: el año de la edición del ranking QS (M3), que es parte de la cita de la fuente.
- **Media 100% real:** cocinas, salón de cata, laboratorios, viñedo, prácticas y egresados. Banco real, nunca stock. Video del hero en lazy-load (PageSpeed móvil = 35).
- **Un CTA primario por módulo.** Jerarquía: Agenda tu visita ▸ Solicita información ▸ Habla con un asesor ▸ Inicia tu admisión ▸ Cotizador.

## 3. Metadatos SEO / AEO

- **Title (50 car.):** «Carreras de Turismo y Gastronomía | Anáhuac México» `[VERIFICAR: decisión de la clienta — alternativa unificada con Salud: «Licenciaturas en Turismo y Gastronomía | Anáhuac México» (55 car.)]`
- **Meta description** — *dos versiones, elige la clienta:*
  - **A (158 car.):** «Descubre las 4 carreras de Turismo, Gastronomía y Hospitalidad de la Anáhuac México, única universidad del país con alianza Le Cordon Bleu. Encuentra la tuya.»
  - **B (157 car.):** «Estudia Gastronomía, Turismo, Hoteles o Restaurantes en la Anáhuac México: alianza con Le Cordon Bleu, 8 cocinas y un año de prácticas. Encuentra tu carrera.»
- **Keyword principal (mapeo):** `turismo carrera` (3,600) · **Secundarias:** `carrera de turismo` (2,400) · `gastronomia carrera` (2,400) · `carrera de gastronomia` (1,900) · `hoteleria y turismo carrera` (320) · `carrera de hoteleria y turismo` (170) · `plan de estudios gastronomia anahuac` (30) · `universidad anahuac turismo` (30) · `anahuac turismo` (20) · `facultad de turismo y gastronomia anahuac` (20) · `plan de estudios turismo anahuac` (20)
- **⚠️ El H1 sigue el patrón unificado de las páginas de área** («Licenciaturas en [Área]»), igual que Salud. Como las 4 keywords con volumen del área usan **«carrera»**, la frase **«carreras de Turismo, Gastronomía y Hospitalidad»** vive en la **pregunta 1 del FAQ** (H3 + `FAQPage`), en la meta description A y en el cierre de M2. **No la sustituyas por «licenciaturas»** en esos lugares.
- **Open Graph:**
  - `og:title`: «Licenciaturas en Turismo, Gastronomía y Hospitalidad | Universidad Anáhuac México»
  - `og:description`: «4 carreras para crear experiencias que el mundo recuerda: Gastronomía, Administración Turística, Hoteles y Restaurantes, con alianza Le Cordon Bleu.»
  - `og:image` (alt): «Estudiantes de Gastronomía de la Universidad Anáhuac México trabajando en una de las cocinas de la Facultad de Turismo y Gastronomía»
- **Enlazado interno (anclas → carreras hijas):** `licenciatura en gastronomía` → `/licenciaturas/gastronomia` · `administración turística` → `/licenciaturas/administracion-turistica` · `dirección internacional de hoteles` → `/licenciaturas/direccion-internacional-de-hoteles` · `dirección de restaurantes` → `/licenciaturas/direccion-de-restaurantes`
- **Schema:** `BreadcrumbList` · `ItemList` (4 `Course`, módulo 4) · `FAQPage` (módulo 8, 6 preguntas) · `CollegeOrUniversity` como `provider`. Sin schema de formulario.

## 4. Mapa de encabezados

- **H1** — «Licenciaturas en Turismo, Gastronomía y Hospitalidad» (M1, `#inicio`) · claim no-heading
  - **H2** «¿Te gustaría crear experiencias que conecten a las personas con nuevas culturas, destinos y sabores?» (M2, `#afinidad`)
  - **H2** «Por qué elegir Turismo, Gastronomía y Hospitalidad en la Universidad Anáhuac México» (M3, `#por-que`) → 6× H3
  - **H2** «Encuentra la carrera que va contigo» (M4, `#carreras`) → 4× H3
  - **H2** «Campo laboral: hacia dónde te pueden llevar el turismo, la gastronomía y la hospitalidad» (M5, `#campo-laboral`) → 6× H3
  - **H2** «Instalaciones de la Facultad de Turismo y Gastronomía» (M6, `#instalaciones`) → H3 por ficha
  - **H2** «Historias Anáhuac México» (M7, `#historias`)
  - **H2** «Preguntas frecuentes sobre Turismo, Gastronomía y Hospitalidad» (M8, `#faq`) → 6× H3
  - **H2** «Elige el siguiente paso» (M9, `#siguiente-paso`) → H3 por tarjeta
  - Footer (M10): sin H2

---

# Módulos (arquitectura + copy integrados)

## Módulo 1 — Hero · AIDA: Atención · **H1** · `#inicio`

**Componente:** `lic-hero` (igual que Salud): breadcrumb + eyebrow + H1 + claim dominante + 2 CTAs + video/imagen real. Sin chips, sin bloque «En resumen».

**Copy final:**
- Breadcrumb: «Inicio > Oferta Académica > Turismo, Gastronomía y Hospitalidad»
- Eyebrow: «Área académica»
- **H1:** «Licenciaturas en Turismo, Gastronomía y Hospitalidad»
- **Claim (dominante):** «Conviértete en quien crea las experiencias que el mundo recuerda.»
- **CTA:** primario «Agenda tu visita» `[VERIFICAR: URL del agendador]` · secundario «Explorar licenciaturas» → `#carreras`

**Media:** video/foto real de servicio en sala, cocina en acción o estudiantes en prácticas. **[PENDIENTE: video o foto real del área.]**
**Alt:** «Estudiantes de la Facultad de Turismo y Gastronomía de la Universidad Anáhuac México durante una práctica de servicio y cocina»

---

## Módulo 2 — Afinidad · AIDA: Interés · **H2** · `#afinidad`

**Componente:** `lic-afinidad` (lista escaneable con íconos). Sin nombrar carreras todavía.

**Copy final:**
- **H2:** «¿Te gustaría crear experiencias que conecten a las personas con nuevas culturas, destinos y sabores?» *(pregunta detonante aprobada en Oferta Académica)*
- Intro: «Este es tu punto de partida si:»
- «**Te emociona viajar, conocer otras culturas y descubrir nuevos sabores.**»
- «**Disfrutas atender a las personas** y que cada detalle de su experiencia salga perfecto.»
- «**Te ves al frente de un hotel, un restaurante, un destino turístico o tu propio negocio.**»
- «**Quieres una carrera que se vive en la práctica** — y sabes que la hospitalidad exige disciplina, trabajo en equipo y atención al detalle todos los días.»
- Cierre: «Si te identificas con al menos dos de estos puntos, sigue leyendo: una de las 4 carreras de Turismo, Gastronomía y Hospitalidad de la Anáhuac México puede ser la tuya.»
- **CTA:** N/A.

**Alt (si aplica):** «Estudiantes de Turismo y Gastronomía de la Universidad Anáhuac México conversando en el campus»

---

## Módulo 3 — Por qué elegir el área · AIDA: Interés · **H2** + 6× H3 · `#por-que`

**Componente:** `lic-porque` del molde: carrusel de fotos a la izquierda (sticky) + enlace «Ver instalaciones ›» → `#instalaciones` + 6 tarjetas a la derecha.

**Copy final:**
- **H2:** «Por qué elegir Turismo, Gastronomía y Hospitalidad en la Universidad Anáhuac México»
- Enlace bajo el carrusel: «Ver instalaciones ›» → `#instalaciones`

1. **H3 — Alianza con Le Cordon Bleu:** «La Universidad Anáhuac México es la única universidad del país con alianza estratégica con Le Cordon Bleu, Francia. Según tu licenciatura, obtienes a la par de tu título un Bachelor o diplomas de Le Cordon Bleu con reconocimiento internacional.»
2. **H3 — Un año de experiencia antes de graduarte:** «Todas las licenciaturas incluyen dos semestres de prácticas profesionales con valor curricular, en hoteles, restaurantes con estrella Michelin, aerolíneas, parques temáticos y empresas de eventos de México y del extranjero.»
   - Chips de destinos (máx. 8 visibles, opcional): «Nueva York» · «París» · «Londres» · «Roma» · «Dubái» · «Hong Kong» · «San Sebastián» · «Los Cabos» *(mismos destinos del mapa de las páginas de carrera; son de la Facultad, no de una sola carrera)*
3. **H3 — N.º 1 de México en Hospitality & Leisure Management:** «La Anáhuac México es la universidad número 1 del país y está entre las 50 mejores del mundo en Hospitality & Leisure Management, según el QS World University Rankings by Subject 2026. Además, todas las licenciaturas cuentan con acreditación nacional CIEES y certificación internacional tedQual de ONU Turismo.»
   - ⚠️ El año del ranking («2026») es el único dato fechado de la página: actualízalo cuando QS publique la siguiente edición.
4. **H3 — Aprendes de quienes están en la industria:** «Tus profesores son chefs, hoteleros y directivos activos en el sector, y te acercas a líderes nacionales e internacionales del turismo y la hospitalidad en conferencias, seminarios y encuentros.»
5. **H3 — Investigación con voz propia:** «Puedes sumarte a proyectos de investigación culinaria y turística, con el respaldo del Centro de Investigación y Competitividad Turística de la Facultad y de investigadores del Sistema Nacional de Investigadores.»
6. **H3 — Experiencia internacional:** «Intercambios, cursos de verano, viajes académicos y competencias internacionales. Administración Turística ofrece además la posibilidad de doble titulación con la Università Europea di Roma, y Gastronomía participa cada año en la competencia culinaria Young Chef Olympiad, en India, y en el festival Gastronomika, en San Sebastián, España.»
- **CTA:** N/A.

**Alt carrusel:** «Estudiantes de Gastronomía de la Universidad Anáhuac México en clase práctica con un chef» / «Estudiantes de Dirección Internacional de Hoteles en el laboratorio de hospedaje, Anáhuac México» / «Estudiantes de la Facultad de Turismo y Gastronomía en una práctica de servicio de alimentos y bebidas, Anáhuac México».
**[PENDIENTE: fotos reales para el carrusel.]**

---

## Módulo 4 — Encuentra la carrera que va contigo · AIDA: Deseo · **H2** + 4× H3 · `#carreras` · *núcleo de enrutamiento*

**Componente:** `area-card` del molde. Cada tarjeta: imagen real + **H3** + gancho (`area-hook`) + descripción (`salud-dato`) + chips de campus (uno por campus, **sin la palabra «bicampus»**) + CTA «Conoce la carrera». Grid de 4 (2×2 en desktop, apiladas en móvil). `aria-label` único por tarjeta.

**Copy final:**
- **H2:** «Encuentra la carrera que va contigo»
- Línea de apoyo: «Explora las 4 licenciaturas de Turismo, Gastronomía y Hospitalidad de la Anáhuac México y descubre cuál es la tuya.»

1. **H3 — Gastronomía**
   - Gancho: «Tu pasión es la cocina y quieres convertirla en una carrera con impacto global.»
   - Descripción: «Diseña y crea productos gastronómicos, dirige proyectos de alimentos y bebidas y promueve la cultura culinaria de México y del mundo.»
   - Campus: «Campus Norte» · «Campus Sur»
   - CTA «Conoce la carrera» (`aria-label`: «Conoce la Licenciatura en Gastronomía») → `/licenciaturas/gastronomia`
2. **H3 — Administración Turística**
   - Gancho: «Te mueve descubrir el mundo y quieres liderar la industria que lo hace posible.»
   - Descripción: «Dirige empresas turísticas, crea productos y experiencias innovadoras y posiciona destinos con una visión sostenible y digital.»
   - Campus: «Campus Norte» · «Campus Sur»
   - CTA «Conoce la carrera» (`aria-label`: «Conoce la Licenciatura en Administración Turística») → `/licenciaturas/administracion-turistica`
3. **H3 — Dirección Internacional de Hoteles**
   - Gancho: «Te apasiona la hospitalidad y te ves al frente de un hotel en cualquier parte del mundo.»
   - Descripción: «Dirige hoteles, resorts y desarrollos turísticos con visión empresarial, multicultural y humana.»
   - Campus: «Campus Norte»
   - CTA «Conoce la carrera» (`aria-label`: «Conoce la Licenciatura en Dirección Internacional de Hoteles») → `/licenciaturas/direccion-internacional-de-hoteles`
4. **H3 — Dirección de Restaurantes**
   - Gancho: «Quieres unir el gusto por la buena mesa con la visión para dirigir un negocio.»
   - Descripción: «Gestiona negocios de alimentos y bebidas, crea conceptos restauranteros originales y anticipa las tendencias del sector.»
   - Campus: «Campus Norte»
   - CTA «Conoce la carrera» (`aria-label`: «Conoce la Licenciatura en Dirección de Restaurantes») → `/licenciaturas/direccion-de-restaurantes`

> ⚠️ Las tarjetas de Dirección Internacional de Hoteles y Dirección de Restaurantes llevan **un solo chip** («Campus Norte»). No las completes con «Campus Sur» para emparejarlas visualmente con las otras dos.

**Alt por tarjeta:**
- «Estudiante de Gastronomía de la Universidad Anáhuac México emplatando en una cocina profesional»
- «Estudiante de Administración Turística de la Universidad Anáhuac México en una práctica en un destino turístico»
- «Estudiante de Dirección Internacional de Hoteles de la Universidad Anáhuac México en el laboratorio de hospedaje»
- «Estudiante de Dirección de Restaurantes de la Universidad Anáhuac México dirigiendo el servicio en sala»

---

## Módulo 5 — Campo laboral · AIDA: Deseo · **H2** + 6× H3 · `#campo-laboral`

**Componente:** mosaico de 6 ámbitos con iconografía (igual que Salud) + nota + 2 CTAs.

**Copy final:**
- **H2:** «Campo laboral: hacia dónde te pueden llevar el turismo, la gastronomía y la hospitalidad»
- Intro: «Estudiar una carrera de Turismo, Gastronomía y Hospitalidad en la Anáhuac México te abre caminos en una de las industrias que más crecen en el mundo, en México y en el extranjero.»
- **H3 — Hoteles, resorts y cadenas internacionales**
- **H3 — Restaurantes, grupos restauranteros y empresas de alimentos y bebidas**
- **H3 — Agencias de viaje, aerolíneas, cruceros y plataformas digitales**
- **H3 — Eventos, congresos, banquetes y parques temáticos**
- **H3 — Tu propio negocio: restaurante, hotel, agencia o concepto gastronómico**
- **H3 — Consultoría, investigación, docencia y sector público de turismo**
- Nota: «Conoce el detalle de campo laboral de cada licenciatura en su página» → `#carreras`
- **CTA:** primario «Inicia tu admisión» → `/admision-general` · secundario «Explorar licenciaturas» → `#carreras`

**Alt:** «Egresada de la Facultad de Turismo y Gastronomía de la Universidad Anáhuac México trabajando en un hotel internacional»

---

## Módulo 6 — Instalaciones · AIDA: Deseo · **H2** + H3 por ficha · `#instalaciones`

**Componente:** deslizador `campus-slider` del molde (fichas con foto grande + H3 + texto; flechas, puntos y swipe) + bloque «Tips» + 2 CTAs. Ocho fichas, tres a la vista en desktop.

**Copy final:**
- **H2:** «Instalaciones de la Facultad de Turismo y Gastronomía»
- Línea de apoyo: «Transporte intercampus gratuito entre Campus Norte y Campus Sur.»

**Fichas (H3 + texto)** — ⚠️ los H3 usan **los mismos nombres** que las fichas de instalaciones de las páginas de carrera; no los parafrasees:
1. **Ocho cocinas con espacios y equipos especializados** — «cuatro en Campus Norte y cuatro en Campus Sur, con áreas para repostería y panadería.»
2. **Laboratorios de cata y de mixología** — «salón de cata de vino en ambos campus y laboratorio de mixología en Campus Norte.»
3. **Laboratorio de cocina de vanguardia** — «en Campus Sur.»
4. **Laboratorios de hospedaje y de servicio de alimentos y bebidas** — «para practicar la operación de un hotel y el servicio en sala antes de tus prácticas profesionales.»
5. **Simuladores de vanguardia para negocios turísticos, hoteleros y restauranteros** — «para tomar decisiones de negocio como lo harías en la industria.»
6. **Laboratorios de cómputo con software hotelero especializado** — «con programas que usa la industria, como OPERA, HOTS y Beefeaters.»
7. **Programas de georreferenciación y bases de datos académicas especializadas** — «incluida la biblioteca virtual de ONU Turismo.»
8. **Un viñedo en el estado de Querétaro** — «para vivir el mundo del vino desde su origen.» `[VERIFICAR: nombre y ubicación del viñedo]`

**Bloque «Tips Anáhuac México»** *(componente del molde; ver nota de nombre en pendientes)*:
«Planea tus prácticas profesionales desde los primeros semestres: la coordinación de la Facultad te orienta para elegir el destino, en México o en el extranjero, que más sume a tu perfil.»

- **CTA:** primario «Inicia tu admisión» → `/admision-general` · secundario «Explorar licenciaturas» → `#carreras`

**Alt por ficha:** «[Nombre de la instalación], Facultad de Turismo y Gastronomía, Universidad Anáhuac México».
**[PENDIENTE: fotografía real de las 8 instalaciones — sumar a la shot list de ambos campus. El viñedo requiere salida a Querétaro.]**

---

## Módulo 7 — Historias Anáhuac México *(módulo compartido)* · AIDA: Deseo · **H2** · `#historias`

**Componente:** carrusel `stories` del molde (foto + cita/logro + nombre + carrera).

**Copy final:**
- **H2:** «Historias Anáhuac México»
- Bajada: «Leones Anáhuac México que han transformado sus vidas con nosotros»
- **Historias (logro, no cita en primera persona):**
  1. «Estrella Michelin como jefe de pastelería y otra como jefe de cocina en el restaurante Andreu Genestra; hoy es Chef Ejecutivo de Melassa en Mallorca, España.» — **David Moreno Gallegos** · «Egresado de Gastronomía (gen. '10)»
  2. «Primera puertorriqueña en ganar una competencia internacional de Food Network.» — **Natalia Rosario** · «Egresada de Gastronomía (gen. '12)»
  3. «Restaurant Manager en St. Regis Hotels & Resorts, con una amplia trayectoria en hotelería y gastronomía.» — **Alejandra Sordo Durán** · «Egresada de Administración Turística (gen. 2013)»
- `[VERIFICAR: vigencia de los cargos y permiso de los egresados — datos del sitio vivo]`
- ⚠️ No convertir estos logros en citas entre comillas atribuidas a la persona: no tenemos su testimonio textual.
- **CTA:** N/A.

**Alt:** «David Moreno Gallegos, egresado de Gastronomía de la Universidad Anáhuac México, chef ejecutivo en Mallorca» (equivalente por historia).

---

## Módulo 8 — Preguntas frecuentes · AIDA: Acción · **H2** + 6× H3 · `#faq`

**Componente:** acordeón `<details>`/`<summary>`; 1ª pregunta abierta. `schema.org/FAQPage`. Respuesta directa primero.

**Copy final:**
- **H2:** «Preguntas frecuentes sobre Turismo, Gastronomía y Hospitalidad»

1. **¿Qué carreras de Turismo, Gastronomía y Hospitalidad hay en la Anáhuac México?** *(abierta)*
   «La Universidad Anáhuac México ofrece 4 carreras de Turismo, Gastronomía y Hospitalidad, impartidas por la Facultad de Turismo y Gastronomía: las licenciaturas en Gastronomía, Administración Turística, Dirección Internacional de Hoteles y Dirección de Restaurantes.»
   - ⚠️ Esta pregunta concentra la keyword del área (`turismo carrera`, `carrera de turismo`, `gastronomia carrera`). No cambies «carreras» por «licenciaturas» en la pregunta.
2. **¿En qué campus se imparten las carreras de Turismo, Gastronomía y Hospitalidad?**
   «Gastronomía y Administración Turística se imparten en Campus Norte y Campus Sur; Dirección Internacional de Hoteles y Dirección de Restaurantes, en Campus Norte. Además, cuentas con transporte intercampus gratuito entre ambos campus.»
3. **¿Qué obtengo con la alianza con Le Cordon Bleu?**
   «Además de tu título oficial de la Universidad Anáhuac México, según tu licenciatura puedes obtener: en Gastronomía, un Bachelor y certificaciones de cocina y pastelería de Le Cordon Bleu; en Administración Turística, el Bachelor Degree of Business Tourism Management; en Dirección Internacional de Hoteles, un Bachelor y hasta cuatro certificados parciales; y en Dirección de Restaurantes, hasta cuatro diplomas de reconocimiento de Le Cordon Bleu.»
   - ⚠️ El nombre exacto del Bachelor de Gastronomía y de Hoteles **no se escribe** aquí hasta que se confirme (ver pendientes); por eso dice «un Bachelor».
4. **¿Qué aprendes en una licenciatura de Turismo, Gastronomía y Hospitalidad?**
   «En la Anáhuac México combinas la práctica —cocina, servicio, operación hotelera y gestión de destinos— con dirección de empresas, finanzas, mercadotecnia, innovación y sostenibilidad. Así te preparas para dirigir hoteles y restaurantes, crear tus propios conceptos y agencias, organizar eventos o dedicarte a la consultoría y la investigación, y antes de graduarte sumas un año de prácticas profesionales.»
5. **¿Cuánto cuesta estudiar una carrera de Turismo, Gastronomía y Hospitalidad en la Anáhuac México?**
   «El costo varía por licenciatura y periodo; usa el cotizador de la Universidad Anáhuac México para obtener el desglose exacto de tu carrera de interés.» → `/cotizador`
6. **No sé cuál de estas 4 carreras elegir, ¿qué hago?**
   «Habla con un asesor preuniversitario de la Universidad Anáhuac México: te ayuda a identificar cuál de las 4 licenciaturas de Turismo, Gastronomía y Hospitalidad va mejor con tu perfil y tus intereses.» → `#siguiente-paso` («Habla con un asesor»)

---

## Módulo 9 — Elige el siguiente paso *(clúster de 5 tarjetas)* · AIDA: Acción · **H2** + H3 por tarjeta · `#siguiente-paso`

**Componente:** `lic-pasos` del molde, sin cambios. Orden por nivel de intención.

**Copy final:**
- **H2:** «Elige el siguiente paso»
- Subtítulo: «Estés donde estés en tu decisión, aquí tienes por dónde seguir.»
- **Agenda una visita** — «Conoce el campus, las cocinas y a la comunidad en persona.» · «Agendar ›» `[VERIFICAR: URL]`
- **Habla con un asesor** — «Resuelve tus dudas y encuentra con un asesor preuniversitario la carrera que va contigo.» · «Contactar ›» → `proceso-de-admision.html#asesoria` (mismo destino que en las páginas de carrera del área)
- **Cotiza tu carrera** — «Calcula el costo de tu licenciatura y conoce tus opciones de pago.» · «Cotizar ›» → `/cotizador`
- **Conoce las becas y apoyos** — «Descubre los apoyos económicos disponibles para tu ingreso.» · «Ver apoyos ›» → `/apoyos-educativos-universidad-anahuac-mexico`
- **Inicia tu admisión** — «Comienza tu proceso 100% en línea, en 6 pasos.» · «Empezar ›» → `/admision-general`

`aria-label` diferenciado en cada CTA.

---

## Módulo 10 — Footer con Newsletter integrado

- **Columna del área («Turismo, Gastronomía y Hospitalidad»):** Gastronomía · Administración Turística · Dirección Internacional de Hoteles · Dirección de Restaurantes.
- **Columna «Áreas académicas»** (las otras 7): Ciencias de la Salud · Ingenierías y Ciencias · Negocios y Economía · Comunicación, Arquitectura y Diseño · Ciencias Sociales y Derecho · Artes y Humanidades · Ejecutivas.
- Resto del footer **idéntico al molde** (Newsletter, Admisiones, datos de campus, legales, redes, RVOE SEP D.O.F. 26/11/1982).

---

# Datos estructurados (guía JSON-LD)

- **`BreadcrumbList`:** Inicio > Oferta Académica > Turismo, Gastronomía y Hospitalidad.
- **`ItemList`** (M4): 4 `ListItem` → `Course` con `name`, `url`, `description` (gancho) y `provider`.
- **`FAQPage`** (M8): 6 `Question`/`acceptedAnswer`, texto idéntico al del acordeón.
- **`CollegeOrUniversity`** como `provider`: «Universidad Anáhuac México», direcciones de ambos campus, `sameAs` a redes.

# Accesibilidad (WCAG 2.1 AA)

- Alt descriptivo en todas las fotos. Video del hero con subtítulos.
- Las 4 tarjetas comparten CTA visible → `aria-label` con el nombre de la carrera.
- Chips de campus y de destinos: no depender solo del color.
- Deslizador de instalaciones navegable por teclado; con menos de 4 fichas se lee como fila fija (comportamiento ya resuelto en el JS del molde).
- Acordeón con `aria-expanded`. Foco visible en tarjetas, acordeón y CTAs.

# Fuentes

- Molde: versión final publicada de `area-ciencias-de-la-salud.html` (revisada 2026-10-01).
- Hand-offs de carrera del área (v2, 2026-10-06): `licenciatura-administracion-turistica.md` · `licenciatura-direccion-internacional-de-hoteles.md` · `licenciatura-direccion-de-restaurantes.md` · versión final publicada de `gastronomia.html`.
- Folleto oficial «Facultad de Turismo y Gastronomía» (Modelo 2025) · plan de comunicación del área (`tgh-plancom.md`, mar. 2026) · levantamiento con la coordinación de Gastronomía.
- «Mapeo de Sitio Web 2025» (URL, keywords y etapa) · «Keywords Por URL».
- Sitio vivo (2026-10-01): `/facultad-turismo-gastronomia` y las 4 páginas `/licenciaturas/{carrera}` · maqueta de Oferta Académica (pregunta detonante).
