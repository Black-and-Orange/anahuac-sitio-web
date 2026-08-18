#!/usr/bin/env node
/* Genera los módulos 2, 5, 6, 7 y 9 de Proceso de admisión.
   Mismo patrón que Apoyos: cada texto plano lleva etiqueta HTML y color, los
   repeaters van a nivel raíz con min 0, y los estilos en la pestaña STYLE.

   Uso: node scripts/hs-crear-modulos-admision-2.mjs */

import { mkdirSync, writeFileSync } from "node:fs";

const BASE = "adapters/hubspot/theme/modules";

const ETIQUETAS = [
  ["h1", "Título 1 (H1)"], ["h2", "Título 2 (H2)"], ["h3", "Título 3 (H3)"],
  ["h4", "Título 4 (H4)"], ["h5", "Título 5 (H5)"], ["h6", "Título 6 (H6)"],
  ["p", "Párrafo"],
];
const SIN = ["ninguna", "Ninguna (texto simple)"];

function texto(pre, n, label, valor, o = {}) {
  const { tag = "p", envoltura = false, multilinea = false, ayuda } = o;
  const id = (x) => (pre ? `${pre}.${x}` : x);
  return [
    { id: id(n), name: n, label, ...(ayuda ? { help_text: ayuda } : {}),
      type: "text", allow_new_line: multilinea, default: valor },
    { id: id(`${n}_tag`), name: `${n}_tag`, label: `Etiqueta HTML de «${n}»`,
      help_text: envoltura
        ? "Envuelve el texto en la etiqueta elegida sin alterar su estilo. «Ninguna» lo deja como está."
        : "Cambia solo la etiqueta HTML; el estilo visual no cambia.",
      type: "choice", display: "select",
      choices: envoltura ? [SIN, ...ETIQUETAS] : ETIQUETAS,
      default: envoltura ? "ninguna" : tag },
    { id: id(`${n}_color`), name: `${n}_color`, label: `Color de texto de «${n}»`,
      help_text: "Déjalo vacío para usar el color que define el diseño.",
      type: "color", default: { color: "", opacity: 100 } },
  ];
}
const bool = (p, n, l, d = true, a) => ({ id: `${p}.${n}`, name: n, label: l,
  ...(a ? { help_text: a } : {}), type: "boolean", display: "toggle", default: d });
const color = (p, n, l, a) => ({ id: `${p}.${n}`, name: n, label: l,
  ...(a ? { help_text: a } : {}), type: "color", default: { color: "", opacity: 100 } });
const link = (p, n, l, href = "#") => ({ id: `${p}.${n}`, name: n, label: l, type: "link",
  supported_types: ["EXTERNAL", "CONTENT", "FILE", "EMAIL_ADDRESS", "BLOG"],
  show_advanced_rel_options: false,
  default: { url: { type: "EXTERNAL", href }, open_in_new_tab: false } });
const img = (p, n, l, alt, a) => ({ id: `${p}.${n}`, name: n, label: l,
  ...(a ? { help_text: a } : {}), type: "image", responsive: true, resizable: false,
  show_loading: false, default: { src: "", alt } });
const grupo = (n, l, hijos, o = {}) => ({ id: n, name: n, label: l,
  ...(o.ayuda ? { help_text: o.ayuda } : {}), type: "group",
  expanded: o.abierto !== false, tab: o.tab || "CONTENT", children: hijos });
const rep = (n, l, ayuda, hijos, def, max = 20) => ({
  id: n, name: n, label: l, help_text: ayuda, type: "group", expanded: true, tab: "CONTENT",
  occurrence: { min: 0, max, sorting_label_field: null, default: def.length },
  children: hijos, default: def });

/* Cabecera común: eyebrow + flecha + título + intro */
const intro = (eyebrow, heading, texto_intro) => [
  grupo("grupo_contenido", "Contenido", [
    ...(eyebrow !== null ? texto("grupo_contenido", "eyebrow", "Eyebrow (tagline)", eyebrow) : []),
    ...texto("grupo_contenido", "heading", "Título (H2)", heading, { tag: "h2" }),
    ...texto("grupo_contenido", "intro", "Texto de introducción", texto_intro, { multilinea: true }),
  ]),
];
const visib = (extra = []) => grupo("grupo_visibilidad", "Visibilidad", [
  bool("grupo_visibilidad", "mostrar_flecha", "Mostrar la flecha del eyebrow", true,
    "El elemento decorativo que antecede al texto pequeño."),
  ...extra,
], { abierto: false });
const estilos = (campos) => grupo("grupo_estilos", "Estilos", campos,
  { tab: "STYLE", ayuda: "Déjalos vacíos para usar los colores del design system." });

/* ---------------- Módulo 2 · Pasos ---------------- */
const PASOS_DEF = [
  ["Inicia tu solicitud", "Paso 1", "Regístrate para iniciar tu solicitud en línea", "5 min.", "Empezar registro"],
  ["Sube tus documentos", "Paso 2", "Reúne y sube tus documentos", "15 min.", "Continuar proceso"],
  ["Completa tu información", "Paso 3", "Completa tu información", "", "Continuar proceso"],
  ["Agenda tus pruebas", "Paso 4", "Agenda tus pruebas", "", "Agendar mis pruebas"],
  ["Recibe resultados", "Paso 5", "Fechas disponibles para tu examen", "", "Continuar proceso"],
  ["Termina tu inscripción", "Paso 6", "Inversión en tu futuro profesional", "", "Calcular"],
].map(([dot, ind, tit, tiempo, cta], i) => ({
  etiqueta_dot: dot, indicador: ind, indicador_tag: "ninguna", titulo: tit, titulo_tag: "h3",
  descripcion: "<p>Describe este paso del proceso.</p>",
  mostrar_tiempo: !!tiempo, etiqueta_tiempo: "Tiempo estimado:", tiempo: tiempo || "5 min.",
  nota: "", nota_tag: "p",
  mostrar_enlace: false, enlace_texto: "Consultar próximas fechas de pruebas ›",
  enlace: { url: { type: "EXTERNAL", href: "#" }, open_in_new_tab: false },
  mostrar_cta: true, cta_texto: cta, cta_texto_tag: "ninguna",
  cta_enlace: { url: { type: "EXTERNAL", href: "#" }, open_in_new_tab: false },
  tipo_media: "imagen",
  imagen: { src: "", alt: `Paso ${i + 1} del proceso de admisión` },
  video_id: "", video_poster: { src: "", alt: "" },
}));

const pasos = [
  ...intro("Proceso de admisión", "Pasos hacia tu ingreso",
    "Conoce qué esperar en cada momento hacia tu ingreso a la Universidad Anáhuac ya seas estudiante nacional o internacional."),
  visib(),
  rep("pasos", "Pasos",
    "El número de cada paso y la línea de tiempo se generan solos desde este listado: agregar, borrar o reordenar aquí basta.",
    [
      ...texto("pasos", "etiqueta_dot", "Etiqueta en la línea de tiempo", "Inicia tu solicitud", { envoltura: true }),
      ...texto("pasos", "indicador", "Indicador del paso", "Paso 1", { envoltura: true }),
      ...texto("pasos", "titulo", "Título", "Regístrate para iniciar tu solicitud", { tag: "h3" }),
      { id: "pasos.descripcion", name: "descripcion", label: "Descripción",
        help_text: "Admite párrafos, listas numeradas y con viñetas.", type: "richtext",
        default: "<p>Describe este paso del proceso.</p>" },
      ...texto("pasos", "nota", "Nota al pie", "", { ayuda: "Aclaración en pequeño. Déjala vacía si no aplica." }),
      bool("pasos", "mostrar_tiempo", "Mostrar el tiempo estimado"),
      ...texto("pasos", "etiqueta_tiempo", "Etiqueta del tiempo", "Tiempo estimado:", { envoltura: true }),
      ...texto("pasos", "tiempo", "Tiempo estimado", "5 min.", { envoltura: true }),
      bool("pasos", "mostrar_enlace", "Mostrar enlace secundario", false),
      ...texto("pasos", "enlace_texto", "Enlace · texto", "Consultar próximas fechas de pruebas ›", { envoltura: true }),
      link("pasos", "enlace", "Enlace · destino"),
      bool("pasos", "mostrar_cta", "Mostrar botón"),
      ...texto("pasos", "cta_texto", "Botón · texto", "Continuar proceso", { envoltura: true }),
      link("pasos", "cta_enlace", "Botón · destino"),
      { id: "pasos.tipo_media", name: "tipo_media", label: "Recurso lateral",
        help_text: "Cada paso puede llevar imagen o video de YouTube.",
        type: "choice", display: "select",
        choices: [["imagen", "Imagen"], ["video", "Video de YouTube"]], default: "imagen" },
      img("pasos", "imagen", "Imagen", "Paso del proceso de admisión"),
      { id: "pasos.video_id", name: "video_id", label: "Video · ID de YouTube",
        help_text: "Solo el ID, no la URL completa. En youtu.be/AbC123 el ID es AbC123.",
        type: "text", allow_new_line: false, default: "" },
      img("pasos", "video_poster", "Video · miniatura", "Miniatura del video",
        "Se muestra antes de reproducir. Si la dejas vacía se usa la de YouTube."),
    ], PASOS_DEF, 12),
  estilos([
    color("grupo_estilos", "color_fondo", "Color de fondo de la sección"),
    color("grupo_estilos", "color_texto", "Color de texto de la sección"),
    color("grupo_estilos", "color_dot_texto", "Línea de tiempo · color de la etiqueta"),
    color("grupo_estilos", "color_dot_fondo", "Línea de tiempo · fondo del número"),
    color("grupo_estilos", "color_dot_activo_fondo", "Línea de tiempo · fondo del paso activo"),
    color("grupo_estilos", "color_dot_activo_texto", "Línea de tiempo · texto del paso activo"),
    color("grupo_estilos", "color_boton_fondo", "Botón · color de fondo"),
    color("grupo_estilos", "color_boton_texto", "Botón · color de texto"),
  ]),
];

/* ---------------- Módulo 5 · Propedéuticos ---------------- */
const CURSOS_DEF = [
  ["Medicina", "naranja", "Curso propedéutico Medicina Anáhuac", "Curso pre ingreso a Medicina"],
  ["Música", "morado", "Curso propedéutico Música Anáhuac", "Curso pre ingreso a Música"],
].map(([tab, acento, ind, tit]) => ({
  tab_texto: tab, acento, indicador: ind, indicador_tag: "ninguna", titulo: tit, titulo_tag: "h3",
  descripcion: "<p>Una vez completado tu proceso de admisión general hasta pasar tus pruebas y entrevista, es necesario realizar un curso propedéutico.</p>",
  video_id: "", video_poster: { src: "", alt: `Curso propedéutico de ${tab}` },
  mostrar_cta: true, cta_texto: "Más información", cta_texto_tag: "ninguna",
  cta_enlace: { url: { type: "EXTERNAL", href: "#" }, open_in_new_tab: false },
}));

const prop = [
  ...intro("Requisitos", "Cursos propedéuticos",
    "Si vas a ingresar a la licenciatura en Médico Cirujano o Música Contemporánea es importante que revises tu entrada al curso propedéutico correspondiente."),
  visib([bool("grupo_visibilidad", "mostrar_tabs", "Mostrar las pestañas", true,
    "Apágalo para mostrar una sola opción sin barra de pestañas.")]),
  rep("cursos", "Cursos", "Cada curso es una pestaña con su panel.", [
    ...texto("cursos", "tab_texto", "Texto de la pestaña", "Medicina", { envoltura: true }),
    { id: "cursos.acento", name: "acento", label: "Color de acento",
      help_text: "Variantes aprobadas del design system.",
      type: "choice", display: "select",
      choices: [["naranja", "Naranja"], ["morado", "Morado"]], default: "naranja" },
    ...texto("cursos", "indicador", "Indicador", "Curso propedéutico Medicina Anáhuac", { envoltura: true }),
    ...texto("cursos", "titulo", "Título", "Curso pre ingreso a Medicina", { tag: "h3" }),
    { id: "cursos.descripcion", name: "descripcion", label: "Descripción",
      help_text: "Admite párrafos y listas numeradas.", type: "richtext",
      default: "<p>Describe el curso.</p>" },
    { id: "cursos.video_id", name: "video_id", label: "Video · ID de YouTube",
      help_text: "Solo el ID. Si lo dejas vacío se muestra únicamente la imagen.",
      type: "text", allow_new_line: false, default: "" },
    img("cursos", "video_poster", "Imagen del curso", "Curso propedéutico"),
    bool("cursos", "mostrar_cta", "Mostrar botón"),
    ...texto("cursos", "cta_texto", "Botón · texto", "Más información", { envoltura: true }),
    link("cursos", "cta_enlace", "Botón · destino"),
  ], CURSOS_DEF, 6),
  estilos([
    color("grupo_estilos", "color_fondo", "Color de fondo de la sección"),
    color("grupo_estilos", "color_texto", "Color de texto de la sección"),
    color("grupo_estilos", "color_tab_texto", "Color del texto de las pestañas"),
  ]),
];

/* ---------------- Módulo 6 · Siguiente paso ---------------- */
const TARJETAS_DEF = [
  ["calendario", "Fechas de examen", "Consulta el calendario completo de pruebas para tu ingreso a la universidad.", "Consultar ›"],
  ["documento", "Curso para el examen de admisión", "Regístrate a nuestro curso gratuito de preparación para el examen de admisión.", "Revisar ›"],
  ["documento-check", "Guía para tu examen de admisión", "Descarga la guía para el examen de admisión.", "Descargar ›"],
  ["contacto", "Contacta con un asesor", "Si tienes dudas sobre el proceso estamos para ayudarte.", "Contactar ›"],
].map(([icono, tit, txt, enl]) => ({
  mostrar: true, icono, icono_imagen: { src: "", alt: tit },
  titulo: tit, titulo_tag: "h3", texto: txt, texto_tag: "p",
  enlace_texto: enl, enlace_texto_tag: "ninguna",
  enlace: { url: { type: "EXTERNAL", href: "#" }, open_in_new_tab: false },
}));

const siguiente = [
  ...intro(null, "Elige el siguiente paso para tu futuro", "En la Universidad Anáhuac te estamos esperando."),
  rep("tarjetas", "Tarjetas", "Se pueden agregar, ocultar o reordenar.", [
    bool("tarjetas", "mostrar", "Mostrar esta tarjeta"),
    { id: "tarjetas.icono", name: "icono", label: "Icono del design system",
      help_text: "Se usa cuando no subes una imagen propia.",
      type: "choice", display: "select",
      choices: [["calendario", "Calendario"], ["documento", "Documento"],
                ["documento-check", "Documento con check"], ["contacto", "Tarjeta de contacto"]],
      default: "calendario" },
    img("tarjetas", "icono_imagen", "Icono propio (opcional)", "",
      "Si subes uno, sustituye al del design system. Se recomienda SVG. Ojo: una imagen subida no se recolorea con el campo «Color del icono»."),
    ...texto("tarjetas", "titulo", "Título", "Fechas de examen", { tag: "h3" }),
    ...texto("tarjetas", "texto", "Descripción", "Consulta el calendario completo de pruebas.", { multilinea: true }),
    ...texto("tarjetas", "enlace_texto", "Enlace · texto", "Consultar ›", { envoltura: true }),
    link("tarjetas", "enlace", "Enlace · destino"),
  ], TARJETAS_DEF, 12),
  estilos([
    color("grupo_estilos", "color_fondo", "Color de fondo de la sección"),
    color("grupo_estilos", "color_texto", "Color de texto de la sección"),
    color("grupo_estilos", "color_tarjeta_fondo", "Tarjetas · color de fondo"),
    color("grupo_estilos", "color_tarjeta_texto", "Tarjetas · color del título"),
    color("grupo_estilos", "color_tarjeta_desc", "Tarjetas · color de la descripción"),
    color("grupo_estilos", "color_tarjeta_enlace", "Tarjetas · color del enlace"),
    color("grupo_estilos", "color_icono", "Tarjetas · color del icono",
      "Solo afecta a los iconos del design system, no a las imágenes subidas."),
  ]),
];

/* ---------------- Módulo 7 · FAQ ---------------- */
const FAQ_DEF = [
  ["¿Cuándo son los exámenes?", "Las fechas de examen se publican en nuestro calendario anual. Puedes elegir la que mejor se ajuste a tu preparación y disponibilidad."],
  ["¿Qué documentos necesito?", "Requerimos tu certificado de bachillerato, identificación oficial y comprobante de domicilio. Algunos programas como medicina solicitan documentación adicional."],
  ["¿Hay opciones para internacionales?", "Sí, contamos con un proceso especial para estudiantes internacionales que incluye evaluaciones de idioma y documentación adicional."],
  ["¿Cuánto cuesta estudiar aquí?", "Las colegiaturas varían según el programa que elijas. Ofrecemos becas y apoyos financieros para estudiantes calificados."],
  ["¿Cambia el proceso si quiero solicitar una beca?", "Comienza explorando nuestras licenciaturas en la oferta académica. Luego regístrate en el portal y prepara tu documentación."],
].map(([p, r]) => ({ pregunta: p, pregunta_tag: "ninguna", respuesta: `<p>${r}</p>` }));

const faq = [
  ...intro(null, "Dudas frecuentes", "Resuelve tus dudas sobre el proceso de admisión en Anáhuac."),
  rep("preguntas", "Preguntas y respuestas",
    "Acordeón: solo una respuesta abierta a la vez. La respuesta admite formato y enlaces.", [
    ...texto("preguntas", "pregunta", "Pregunta", "¿Cuándo son los exámenes?", { envoltura: true }),
    { id: "preguntas.respuesta", name: "respuesta", label: "Respuesta", type: "richtext",
      default: "<p>Escribe aquí la respuesta.</p>" },
  ], FAQ_DEF),
  estilos([
    color("grupo_estilos", "color_fondo", "Color de fondo de la sección"),
    color("grupo_estilos", "color_texto", "Color de texto de la sección"),
    color("grupo_estilos", "color_pregunta", "Color de las preguntas"),
    color("grupo_estilos", "color_respuesta", "Color de las respuestas"),
    color("grupo_estilos", "color_enlace", "Color de los enlaces de la respuesta"),
  ]),
];

/* ---------------- Módulo 9 · Formulario ---------------- */
const formulario = [
  ...intro("¡Estás en el primer paso!", "Inicia tu proceso aquí",
    "Llena el formulario de solicitud y cuando finalices te llevará al siguiente paso para continuar con el proceso."),
  visib(),
  grupo("grupo_imagen", "Imagen", [
    img("grupo_imagen", "mascota", "Mascota", "Leonel, mascota Anáhuac"),
  ], { abierto: false }),
  grupo("grupo_formulario", "Formulario", [
    { id: "grupo_formulario.formulario", name: "formulario", label: "Formulario de HubSpot",
      help_text: "Elige el formulario que recibe las solicitudes. Los envíos llegan al CRM del portal.",
      type: "form", embed_version: "v4",
      default: { form_type: "HUBSPOT", response_type: "inline",
        message: "Gracias por enviar el formulario.", gotowebinar_webinar_key: null,
        form_type_display: "HUBSPOT" } },
  ]),
  estilos([
    color("grupo_estilos", "color_fondo", "Color de fondo de la sección"),
    color("grupo_estilos", "color_texto", "Color de texto de la sección"),
  ]),
];

const MODULOS = {
  "admision-pasos": { label: "Admisión · Pasos del proceso — Anáhuac", fields: pasos },
  "admision-propedeuticos": { label: "Admisión · Cursos propedéuticos — Anáhuac", fields: prop },
  "admision-siguiente-paso": { label: "Admisión · Siguiente paso — Anáhuac", fields: siguiente },
  "admision-faq": { label: "Admisión · Dudas frecuentes — Anáhuac", fields: faq },
  "admision-formulario": { label: "Admisión · Formulario — Anáhuac", fields: formulario },
};

for (const [nombre, { label, fields }] of Object.entries(MODULOS)) {
  const dir = `${BASE}/${nombre}.module`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/fields.json`, JSON.stringify(fields, null, 2) + "\n");
  writeFileSync(`${dir}/meta.json`, JSON.stringify({
    global: false, content_types: ["LANDING_PAGE", "SITE_PAGE"],
    categories: ["BODY_CONTENT"], host_template_types: ["PAGE"], label,
    is_available_for_new_content: true,
  }, null, 2) + "\n");
  writeFileSync(`${dir}/module.css`, "");
  writeFileSync(`${dir}/module.js`, "");
  const n = (f) => f.reduce((a, x) => a + 1 + (x.children ? n(x.children) : 0), 0);
  console.log(`${nombre.padEnd(26)} ${n(fields)} campos`);
}
