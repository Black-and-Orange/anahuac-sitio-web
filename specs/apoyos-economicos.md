# Página: Apoyos económicos

## Meta
- Ruta / slug: `/apoyos-economicos.html`
- Lugar en el sitemap: Costos y becas → Apoyos económicos.
- Objetivo: explicar, comparar y orientar sobre apoyos y opciones de financiamiento.
- Plataforma futura: plantilla HubSpot con módulos independientes.

## Secciones aprobadas
| # | Sección | Contrato | Estado local |
|---|---|---|---|
| 1 | Hero | `design/components/support-hero.md` | Implementado |
| 2 | Tipos de apoyo | `design/components/support-overview.md` | Implementado |
| 3 | Detalle por apoyo | `design/components/support-detail.md` | Implementado |
| 4 | Financiamiento | `design/components/financing-options.md` | Implementado |
| 5 | Consideraciones generales | `design/components/support-considerations.md` | Implementado |
| 6 | Pasos para solicitar | `design/components/support-steps.md` | Implementado |
| 7 | Dudas frecuentes | `design/components/support-faq.md` | Implementado |
| 8 | Asesoría | `design/components/support-advisor.md` | Implementado con fuente local |

## Reglas de contenido aprobadas
- Usar `Requisito`, no `Requisito mínimo`, en las tarjetas de apoyo.
- Expresar comparaciones de promedio como texto: `mayor o igual a`, sin el símbolo matemático.
- Mostrar la tarjeta de crédito institucional Anáhuac antes de proveedores externos.
- El aviso sobre concursos académicos es opcional y aparece antes de la secuencia de pasos.
- Asesoría conserva un contrato de datos reemplazable por HubDB; no acoplar la vista a una tabla hasta definir sus columnas.
- En Asesoría, el primer selector muestra únicamente `Extranjero` y `México`.
- El segundo selector muestra países para `Extranjero` y las 32 entidades para `México`, y arranca en el primer elemento del catálogo sin precargar `Ciudad de México`.
- El tercer selector de preparatoria aparece solo al elegir `Ciudad de México` o `Estado de México`; en la carga inicial permanece oculto.
- El catálogo local de preparatorias es parcial; la relación institucional completa `estado → preparatoria` debe confirmarse antes de migrar o publicar.

## Estados y casos borde
- Los CTAs opcionales no dejan contenedores vacíos cuando se ocultan.
- Los metadatos opcionales de tarjetas no dejan espacios reservados.
- Los pasos regeneran su navegación móvil al agregar o quitar elementos.
- FAQ admite respuestas rich text y enlaces.
- Consideraciones admite de 1 a 6 tarjetas.
- La página conserva una sola H1; cada módulo principal usa H2 y cada tarjeta usa H3 cuando corresponde.

## Responsive
- Carrusel de apoyos: 3 tarjetas en escritorio, 2 en tablet y 1 en móvil.
- Financiamiento: 3 columnas en escritorio y 1 columna cuando las tres ya no caben.
- Pasos: grid adaptable en escritorio/tablet y una tarjeta activa en móvil.
- Asesoría: dos columnas en escritorio y controles apilados con tarjeta vertical en móvil.

## SEO / metadata
- Title: `Apoyos Económicos | Universidad Anáhuac México`
- H1: `Impulsa tu carrera con apoyos hechos para tu talento y perfil`
- Slug: `/apoyos-economicos`
- Datos estructurados futuros: `FAQPage` cuando el contenido definitivo sea aprobado y publicado.

## Fuentes de revisión
- HTML local aprobado: `apoyos-economicos.html`.
- Capturas por módulo recibidas el 2026-07-30.
- Instrucciones de autoadministración recibidas el 2026-07-30.

## Notas de validación
- No publicar ni sincronizar con HubSpot durante esta etapa.
- La migración debe derivar cada `fields.json` de los contratos enumerados arriba.
- Validar escritorio y móvil contra las capturas antes de iniciar el adapter.

## Notas de revisión humana
- [ ] Aprobar el diseño del disclaimer de concursos académicos.
- [ ] Confirmar contenido definitivo de fichas que aún usan texto temporal.
- [ ] Entregar o aprobar el mapeo completo de preparatorias para CDMX y Estado de México.
- [ ] Aprobar la versión local completa antes de iniciar HubSpot.
