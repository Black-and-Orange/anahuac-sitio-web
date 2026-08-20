# MEMORY.md — Memoria del proyecto

Estado y decisiones acumuladas del sitio que se construye. Es la **continuidad entre agentes, sesiones y modelos**:
ningún agente comparte memoria de chat, así que aquí vive el contexto persistente que **cualquiera** (Claude, Codex,
Antigravity…) lee al empezar y actualiza al avanzar. Versionado en git = memoria compartida y auditable.

---

## Estado actual
> Vivo (se sobrescribe). Qué está hecho, en progreso y lo siguiente.

- **Proyecto:** Sitio web institucional Universidad Anáhuac México — rediseño 2026.
- **Plataforma:** HubSpot (CMS Hub).
- **Fuentes configuradas:** Figma UI Kit, Figma Home, Figma Relume export.
- **Ingesta de Figma:** Completada y habilitada en `project.json`.
- **Tokens:** Colores, tipografía, espaciado y radios poblados en `design/01-tokens.md`.
- **Foundations:** Contenedor, breakpoints, nav-height y escala de espaciado en `design/02-foundations.md`.
- **Interactions:** Efectos base del Home documentados en `design/interactions.md`.
- **Componentes:** Ocho contratos de la LP Apoyos Económicos documentados; componentes generales del UI Kit y Home continúan pendientes.
- **Specs:** `specs/apoyos-economicos.md` documenta la versión local aprobada y el contrato para la futura migración a HubSpot.
- **Foráneos:** La revisión humana del 2026-08-20 está aplicada en la maqueta local; no se ha publicado ni migrado a HubSpot.

### Siguiente paso
1. Completar la revisión humana de Foráneos en local.
2. Completar la revisión humana de la versión local de Apoyos Económicos.
3. Confirmar el contenido definitivo de las fichas que aún contienen texto temporal.
4. Tras aprobación explícita, derivar los módulos HubSpot desde los contratos documentados.
5. Confirmar el mapeo institucional completo de preparatorias para CDMX y Estado de México.
6. Mantener asesoría con fuente local hasta definir la tabla y columnas de HubDB.

## Preferencias del proyecto
> Reglas/gustos específicos de este sitio que emergen y deben respetarse siempre.

- **Tipografía alternativa:** Sharp Slab es la tipografía oficial del brand (comercial); Zilla Slab es la alternativa de código abierto para uso digital. Usar siempre Zilla Slab en la implementación.
- **Font headings:** Zilla Slab (SemiBold 600 / Medium 500). Font body: Roboto (Regular 400).
- **Paleta principal:** Naranja Anáhuac (#FF5900) como brand primary; moradas como secundarias; negro/blanco como neutros.
- **Radio estándar:** 20px para tarjetas y elementos medianos; 10px para botones; 40px para secciones grandes.

## Decisiones

### 2026-08-20 — Foráneos se valida primero en local
- Los ajustes de mapa, asesoría y admisión se revisan en `foraneos.html` antes de cualquier publicación o migración a HubSpot.
- En móvil, la categoría del mapa usa `select` y el paginador avanza tres tarjetas; el selector de campus conserva las dos opciones visibles.
- Asesoría reutiliza el patrón visual de Apoyos Económicos y Proceso de admisión conserva un único mensaje general para toda la audiencia.
- La auditoría responsive mantiene los módulos dentro del viewport entre 320 y 900px; las razones de CDMX son fluidas al apilarse y la tarjeta horizontal del asesor conserva foto y datos dentro de sus límites.
- El aviso de responsabilidades del trámite migratorio deja `--space-9` antes de «Tramita tu visa» para que ambos bloques no se perciban pegados.
- Origen: revisión humana recibida el 2026-08-20.

### 2026-06-08 — Plataforma HubSpot (onboarding)
- Elegida por el usuario durante el onboarding interactivo.
- Impacto: adapter activo → `adapters/hubspot/`. Se usará `hs CLI` para deploy.

### 2026-06-08 — Zilla Slab como heading font (ingesta Figma)
- El UI Kit define Sharp Slab como tipografía original (comercial) y Zilla Slab como alternativa de código abierto.
- Decisión: usar Zilla Slab en toda la implementación digital para evitar costos de licencia.
- Referencia: `design/01-tokens.md → --font-heading`.

### 2026-07-30 — Apoyos Económicos se valida primero en local
- La LP se actualiza y revisa completamente en `apoyos-economicos.html` antes de crear o publicar módulos en HubSpot.
- Se documentaron ocho contratos autoadministrables como fuente neutral para los futuros `fields.json`.
- La sección de asesoría debe aceptar una fuente HubDB futura sin cambiar el contrato de render.
- Origen: instrucciones y capturas de revisión humana recibidas el 2026-07-30.

### 2026-07-30 — Asesoría usa una cascada de procedencia de tres niveles
- Primer nivel: `Extranjero` o `México`; segundo nivel: país o entidad federativa.
- El tercer selector aparece solo para Ciudad de México y Estado de México.
- El formulario público de Atención Preuniversitaria expone un catálogo plano de preparatorias, pero no la relación completa por estado; la versión local usa únicamente planteles con ubicación explícita y `Otra preparatoria`.
- La asignación del asesor continúa dependiendo del segundo nivel hasta definir una relación institucional por plantel.
- Origen: revisión humana del módulo de Asesoría recibida el 2026-07-30.

### 2026-06-08 — Framework de design system instanciado (onboarding)
- Se clonó el template `averasteguibno/BnO-website-design-system` en el workspace del proyecto.
- Se configuró `project.json` con los 3 links de Figma y plataforma HubSpot.

## Aprendizajes / gotchas
> Qué se intentó, qué falló, qué evitar.

- El repositorio del design system es privado en GitHub; `read_url_content` no puede leer raw URLs. Usar `git clone` o el GitHub MCP para acceder al contenido.

## Preguntas abiertas
> Decisiones pendientes que bloquean o condicionan trabajo futuro.

- ¿Hay páginas internas ya diseñadas en Figma además del Home? (el usuario indicó que sí, pendiente links concretos).
- ¿Se tiene cuenta sandbox de HubSpot para deploy?
- ¿Cuál es el mapeo institucional completo de preparatorias para Ciudad de México y Estado de México?
