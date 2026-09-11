# BnO Review — Capa de revisión visual (diseño)

**Fecha:** 2026-09-10
**Estado:** Aprobado el enfoque general; pendiente revisión del spec antes del plan de implementación.
**Autor:** jcordova@black-n-orange.com (con asistencia de agente)

## 1. Objetivo

Sistema propio y gratuito de comentarios visuales sobre la página real (estilo BugHerd/Pastel),
para que clientes de Black & Orange dejen anotaciones ancladas a elementos del DOM durante la
revisión de un sitio. Debe:

- Funcionar **sobre la página real** (sin iframe, sin proxy, sin herramienta de pago), conservando
  CSS, JS, imágenes, fuentes, animaciones, responsive, navegación y componentes actuales.
- Activarse solo con `?review=true&token=XXXXX`; sin ese parámetro el sitio se comporta idéntico.
- Anclar cada comentario a un **selector/huella estable del DOM**, no a coordenadas x/y, para
  sobrevivir a cambios de resolución, tamaño de ventana y desktop/mobile.
- Ser **replicable en cualquier proyecto de Black & Orange** como módulo drop-in.

## 2. Decisiones aprobadas

1. **Almacenamiento (arranque en 2 pasos):** empezar con **`localStorage`** (adaptador desechable)
   para validar la UX y el motor de anclaje; conectar **Supabase** después cambiando solo el
   adaptador de almacenamiento. Destino final: Supabase. Costo: $0.
2. **Inclusión:** una etiqueta explícita `<script defer src="assets/review/review.js"></script>`
   antes de `</body>` en cada página. Aislada del `script.js` de producción.
3. **Alcance de esta primera entrega:** SOLO la capa sobre la página (comentar → anclar → guardar →
   repintar pins al recargar → estados). El panel `/admin` es fase 2.
4. **Replicabilidad como driver de diseño de primera clase** (ver §4).
5. **Config de este proyecto:** `projectId: "anahuac-2026"`; tokens `bno-interno` (equipo) y
   `cliente-anahuac` (revisores del cliente), rotables en `config.js`.
6. **Nombre del revisor:** se pide una sola vez y se recuerda en `localStorage`
   (`bno-review:reviewer-name`), con opción de cambiarlo.

## 3. Contexto de la arquitectura actual

- Sitio **estático plano**: ~13 `.html` en la raíz, sin build ni includes. Se publica en
  **GitHub Pages** (`.github/workflows/static.yml`, sube el repo desde `main`). **Sin backend.**
- CSS/JS: global compartido `styles.css` (13 páginas) y `script.js` (~12); además CSS/JS por página.
- Identificación del DOM: las **secciones tienen `id` estables** (`#prestigio`, `#admisiones`…),
  pero la mayoría de elementos internos se identifican por **clases semánticas**, no por `id`.
  → El anclaje necesita selector estructural + huella de respaldo, no solo `id`.
- Lección registrada en `MEMORY.md`: el CSS del theme puede pisar CSS de módulos → usar **Shadow DOM**
  para aislar por completo la UI de review.

## 4. Diseño para replicabilidad (drop-in)

El módulo debe copiarse a otro sitio estático de B&O sin tocar su núcleo:

- **Carpeta autocontenida** `assets/review/` copiable tal cual.
- **Núcleo sin referencias al proyecto**: `review.js` no menciona Anáhuac ni ninguna ruta/clase
  específica. Todo lo específico vive en `config.js`.
- **Almacenamiento como interfaz con adaptadores intercambiables** (ver §5.4). Cambiar de backend
  = cambiar `config.storage`, no reescribir el núcleo.
- **Heurísticas de DOM genéricas** (sin selectores del sitio hardcodeados).
- **Namespacing por `projectId`**: claves `bno-review:<projectId>:<page>` en localStorage + Shadow DOM.
  Dos proyectos en el mismo origen nunca colisionan.
- **Contrato de módulo versionado**: `docs/modules/review-overlay.md` + `assets/review/README.md`,
  con constante `REVIEW_VERSION`.

## 5. Arquitectura de la capa

### 5.1 Activación y footprint cero

`review.js` corre siempre pero **se auto-inhibe** salvo que `?review=true` y el `token` esté en
`config.tokens`. Sin eso: no monta nada, no captura eventos, no ejecuta lógica. Para el visitante
normal es 1 request cacheado y cero efecto.

### 5.2 Aislamiento con Shadow DOM

Toda la UI (botón "Comentar", outline de hover, formulario, pins, tarjetas de comentario) se monta
en `#bno-review-root` con `attachShadow({mode:'open'})`. `review.css` se inyecta dentro del shadow
root. `pointer-events` se controla: el overlay solo intercepta clics con el "modo comentar" activo.

### 5.3 Módulos internos (una responsabilidad cada uno)

1. **Gate** — lee query params, valida token, decide si arranca.
2. **AnchorResolver** — sube desde el nodo clicado al "elemento significativo" (button, a, `[role]`,
   tarjeta, encabezado, sección) en vez del nodo de texto profundo. Evita seleccionar internos
   innecesarios (p. ej. `<span>` dentro de un botón → selecciona el botón).
3. **SelectorEngine** — genera y **resuelve** selector estable + huella (ver §6).
4. **Store** — interfaz de datos (adaptador localStorage ahora; Supabase después).
5. **UI** — botón flotante, hover outline, formulario, pins, tarjeta, estados, deep-link a comentario.

### 5.4 Interfaz Store (clave para replicar y para migrar a Supabase)

```
interface ReviewStore {
  list(projectId, page): Promise<Comment[]>
  create(comment): Promise<Comment>
  update(id, patch): Promise<Comment>   // estado, respuestas
}
```

- `LocalStorageStore`: persiste en `localStorage` bajo `bno-review:<projectId>:<page>`.
- `SupabaseStore` (fase posterior): misma interfaz, tabla `comments` + RLS.
- `config.storage` selecciona el adaptador. El núcleo solo conoce la interfaz.

### 5.5 Modelo de datos (Comment)

```
{
  id: uuid,
  projectId: string,
  page: string,          // ruta/nombre de archivo, p.ej. "psicologia.html"
  selector: string,      // ruta CSS robusta
  fingerprint: {         // respaldo si el selector falla
    tag, sectionId, textHash, siblingIndex
  },
  name: string,
  comment: string,
  createdAt: ISO8601,
  status: "pendiente" | "en-proceso" | "resuelto",
  replies: [{ name, text, createdAt }]   // preparado para responder
}
```

## 6. Motor de anclaje (requisito fundamental)

No se guardan coordenadas. Por cada comentario se guarda:

- `selector`: ruta CSS construida desde el ancestro con `id` más cercano, usando clases estables y
  `:nth-of-type` donde haga falta.
- `fingerprint`: `{ tag, sectionId, textHash, siblingIndex }`.

**Al reabrir en modo review:**
1. Intentar `selector`. Si resuelve a un único elemento → usar.
2. Si falla o es ambiguo → usar `fingerprint` (buscar dentro de `sectionId` por tag + hash de texto).
3. Si aún falla → anclar el pin a la sección con estado visual "elemento no localizado".

La posición del pin se calcula con `getBoundingClientRect()` y se **recalcula en `resize` y `scroll`**,
por lo que sobrevive a cambios de resolución/ventana/desktop-mobile.

## 7. Flujo completo (fase 1)

1. Cliente abre `pagina.html?review=true&token=XXXXX`. Gate valida; si no, no pasa nada.
2. Se monta el Shadow DOM y aparece el botón **"Comentar"**. La página sigue 100% usable.
3. Cliente activa el modo → hover/tap muestra outline sobre el **elemento significativo**.
4. Clic/tap selecciona → abre formulario (`nombre` + `comentario`).
5. Submit → SelectorEngine calcula `selector` + `fingerprint` → `Store.create(...)` (localStorage) →
   se dibuja el pin (estado "pendiente").
6. Al recargar en modo review → `Store.list(projectId, page)` → cada comentario resuelve su elemento
   y posiciona su pin (recolocado en resize/scroll). Colores por estado.
7. Sobre un pin: abrir tarjeta → responder / cambiar estado / resolver → `Store.update(...)`.

## 8. Archivos

**Crear:**
```
assets/review/
  review.js          # entrada única: Gate + AnchorResolver + SelectorEngine + Store + UI (Shadow DOM)
  review.css         # estilos namespaced, inyectados en el shadow root
  config.js          # projectId, tokens, storage backend
  README.md          # cómo copiar el módulo a otro proyecto
docs/modules/
  review-overlay.md  # contrato del módulo (convención del repo)
```

**Modificar (añadir 1 línea antes de `</body>`):**
`Inicio.html`, `oferta-academica.html`, `proceso-de-admision.html`, `apoyos-economicos.html`,
`foraneos.html`, `costos-becas.html`, `fechas-de-examenes.html`, `area-ciencias-de-la-salud.html`,
`psicologia.html`, `medicina.html`, `nutricion.html`, `gastronomia.html`, `comunicacion.html`.

**Registrar:** `MEMORY.md` (decisión + módulo nuevo).

## 9. Seguridad (fase 1)

- Token en URL = **ofuscación, no autenticación**. Aceptable para una herramienta interna de
  comentarios de baja sensibilidad, como puerta de activación por proyecto. Token rotable.
- En localStorage no hay superficie de servidor; los datos viven en el navegador del revisor.
- Al migrar a Supabase: `anon key` público acotado con **RLS** (INSERT/SELECT por `projectId`,
  sin vista global); el panel `/admin` irá detrás de **auth real** (Supabase Auth). Fase 2.

## 10. Riesgos y limitaciones

- **Fragilidad del selector** si el HTML cambia entre sesiones → mitigado con doble señal
  (selector + fingerprint) y estado "no localizado" anclado a la sección.
- **localStorage no cruza dispositivos/navegadores** — es intencional en fase 1 (validar UX). La
  persistencia compartida llega con Supabase.
- **Colisión CSS/z-index** con el sitio → Shadow DOM.
- **Intercepción de clics** → modo comentar apagado por defecto; captura solo cuando está activo.
- **Mobile** → desambiguar tap de scroll con umbral de movimiento.
- Sin realtime en fase 1 (YAGNI): `list()` al cargar.

## 11. Fuera de alcance (fase 1)

- Panel `/admin` global (fase 2).
- Supabase / persistencia compartida entre dispositivos (fase 2).
- Autenticación real (fase 2, solo para admin).
- Realtime multiusuario.
