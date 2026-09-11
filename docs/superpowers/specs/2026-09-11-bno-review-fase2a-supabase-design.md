# BnO Review — Fase 2a: persistencia Supabase + panel /admin (diseño)

**Fecha:** 2026-09-11
**Estado:** Diseño aprobado por el usuario ("va"). Base para el plan de implementación.
**Autor:** jcordova@black-n-orange.com (con asistencia de agente)
**Predecesor:** `docs/superpowers/specs/2026-09-10-bno-review-overlay-design.md` (fase 1, localStorage)

## 1. Objetivo

Mover la persistencia de `localStorage` a **Supabase** para que los comentarios que dejan los
clientes en línea sean **visibles para el equipo de Black & Orange**, y dar una **interfaz `/admin`**
donde el equipo consulta y gestiona los comentarios. ClickUp (crear tarea automática) es la fase 2b,
que se construye encima de esto.

## 2. Decisiones aprobadas

1. **Alcance 2a:** Supabase (almacenar) + panel `/admin` (ver/gestionar). ClickUp = 2b después.
2. **Modelo de seguridad (RLS):**
   - **Cliente (anónimo, publishable key):** puede **INSERT** (crear comentario) y **SELECT** (ver pins)
     de su proyecto. NO puede UPDATE ni DELETE.
   - **Equipo (autenticado, Supabase Auth):** acceso total (SELECT/UPDATE/DELETE).
   - Consecuencia: en la **página**, la tarjeta de un pin es **de solo lectura** para el cliente
     (autor, fecha, comentario, badge de estado; sin botones de estado ni respuestas). La gestión de
     estados y respuestas ocurre **solo en `/admin`**.
3. **Trade-off aceptado:** la publishable key es pública; quien active la revisión podría leer los
   comentarios de ese proyecto. Aceptable para una herramienta interna de baja sensibilidad. Lo que
   queda blindado: nadie sin login puede modificar/borrar ni entrar al panel global.
4. **Credenciales del proyecto:** URL `https://gvnnhkectrnwhqkcrlar.supabase.co`; publishable key
   `sb_publishable_Frc_cn6l4BfMbrSh7WFkIQ_6-fqqej4` (pública, va en `config.js`).

## 3. Contexto heredado de la fase 1

- Módulo drop-in en `assets/review/`, ES modules, sin bundler. Activación por `?review=true&token=`.
- Interfaz `ReviewStore` (`list`, `create`, `update`) con `LocalStorageStore` y un `store-factory.js`
  que ya contempla `config.storage` (`'local'` implementado; `'supabase'` pendiente — ESTA fase).
- UI aislada en Shadow DOM (`bnor-` prefix), pins anclados por selector+fingerprint.
- 13 páginas cargan `assets/review/review.js`. Sitio se publica en GitHub Pages (push a `main`).

## 4. Modelo de datos — tabla `comments`

SQL para pegar en el editor de Supabase (documentado en `supabase/schema.sql`):

```sql
create extension if not exists pgcrypto;

create table if not exists public.comments (
  id uuid primary key default gen_random_uuid(),
  project_id text not null,
  page text not null,
  selector text,
  fingerprint jsonb,
  name text not null,
  comment text not null,
  status text not null default 'pendiente'
    check (status in ('pendiente','en-proceso','resuelto')),
  replies jsonb not null default '[]'::jsonb,
  clickup_task_id text,          -- fase 2b (vacío por ahora)
  clickup_url text,              -- fase 2b
  created_at timestamptz not null default now()
);

create index if not exists comments_project_page_idx
  on public.comments (project_id, page);

alter table public.comments enable row level security;

-- Cliente anónimo: crear y ver (no modificar/borrar)
create policy "anon can insert" on public.comments
  for insert to anon with check (true);
create policy "anon can select" on public.comments
  for select to anon using (true);

-- Equipo autenticado: todo
create policy "authenticated full access" on public.comments
  for all to authenticated using (true) with check (true);
```

## 5. Arquitectura de código

### 5.1 SupabaseStore (misma interfaz, testeable)
`assets/review/supabase-store.js` — `class SupabaseStore { constructor(client, projectId) }`
implementa `ReviewStore`:
- `list(projectId, page)` → `client.from('comments').select().eq('project_id',projectId).eq('page',page).order('created_at')`
- `create(comment)` → `insert(row).select().single()`; mapea a la forma `Comment`.
- `update(projectId, page, id, patch)` → `update(patch).eq('id',id).select().single()`.

El `client` se inyecta en el constructor → se prueba con un **cliente falso** que registra llamadas y
devuelve datos canónicos (sin red). Node-testeable.

### 5.2 Creación del cliente (solo navegador)
`assets/review/supabase-client.js` — `export async function makeSupabaseStore(config)`:
importa `createClient` desde CDN (`https://esm.sh/@supabase/supabase-js@2`), crea el cliente con
`config.supabase.url` + `config.supabase.publishableKey`, y devuelve `new SupabaseStore(client, config.projectId)`.
Aislado aquí porque el import de CDN no corre en tests de node.

### 5.3 Boot
`review.js` `boot()` pasa a **async**: si `CONFIG.storage==='supabase'` → `await makeSupabaseStore(CONFIG)`;
si `'local'` → `createStore(CONFIG)` (síncrono, sin cambios). Todo envuelto en try/catch: si Supabase
no carga, `console.warn` y **no** rompe la página (footprint: el sitio normal sigue intacto).

### 5.4 Config
`config.js`: agregar `supabase: { url, publishableKey }` y cambiar `storage` a `'supabase'`.

### 5.5 Tarjeta de pin de solo lectura (cliente)
`pin-layer.js`: la tarjeta muestra autor, fecha, comentario y **badge de estado** (sin botones de
estado ni respuestas). La gestión se mueve a `/admin`. (Se actualiza el smoke test acorde.)

### 5.6 Deep-link a un comentario
`review.js`: si la URL trae `#comment=<id>`, tras pintar los pins hace scroll al elemento y lo resalta
(clase temporal). Usado por el panel `/admin` para "ir al elemento".

## 6. Panel `/admin`

`admin/index.html` + `admin/admin.js` + `admin/admin.css`:
- **Login** con Supabase Auth (email/contraseña). Sin sesión → formulario de login; con sesión → tabla.
- **Tabla de comentarios**: proyecto · página · elemento (selector) · usuario · estado · fecha.
- **Filtros**: por proyecto, página y estado.
- **Acciones por comentario**: abrir detalle; **ir al elemento** (deep-link
  `page.html?review=true&token=<token>#comment=<id>` en pestaña nueva); **responder** (append a
  `replies`); **cambiar estado**; **resolver**; opcional borrar.
- Usa el mismo `supabase-js` desde CDN + la publishable key; las acciones de escritura funcionan por
  estar **autenticado** (RLS `authenticated full access`).

Se verifica en navegador con datos reales (el usuario corre el SQL y crea su usuario admin).

## 7. Flujo completo (fase 2a)

1. Cliente abre `pagina.html?review=true&token=XXX` (sitio en GitHub Pages).
2. Comenta → `SupabaseStore.create()` → fila en Supabase. Pin visible; recarga los repinta (via `list`).
3. Equipo entra a `/admin`, hace login (Supabase Auth) → ve todos los comentarios.
4. Abre uno → "ir al elemento" abre la página con `#comment=<id>` y resalta el elemento.
5. Responde / cambia estado / resuelve → `SupabaseStore.update()` (autenticado).

## 8. Qué hace el usuario (fuera del código)
1. Correr `supabase/schema.sql` en el **SQL Editor** de Supabase.
2. Crear su **usuario admin** en Supabase → Authentication → Users → Add user (email + contraseña).

## 9. Estrategia de pruebas
- `SupabaseStore`: unit tests con cliente falso inyectado (node --test), verifican el mapeo de
  llamadas y la forma de los datos. Sin red.
- `store-factory` / boot async: test del branch local + throw (el branch supabase se valida en vivo).
- Deep-link: verificación en jsdom donde sea posible (resolver elemento), resto en navegador.
- **Panel `/admin` y el flujo Supabase en vivo**: verificación humana por el usuario (subagentes sin
  navegador ni acceso a la nube). Se entregan checklists explícitas.

## 10. Riesgos y limitaciones
- **Formato de llave nuevo (`sb_publishable_`)**: verificar que la versión de `supabase-js` lo acepte;
  si no, usar la anon key JWT legacy. Riesgo bajo, se confirma al construir/probar en vivo.
- **RLS es la única barrera**: si las políticas están mal, se expondrían datos. Se revisa el SQL con
  cuidado; escritura/borrado solo autenticado.
- **Pausa por inactividad** del free tier (~1 semana sin uso): primera carga puede tardar.
- **Migración**: los comentarios de la fase 1 vivían en `localStorage` (por navegador) — no se migran;
  se empieza limpio en Supabase. Aceptable (fase 1 fue validación de UX).
- Sin realtime (YAGNI): `list()` al cargar. Se puede agregar Supabase Realtime luego.

## 11. Fuera de alcance (2a)
- ClickUp (fase 2b: Edge Function + webhook on insert + secreto server-side).
- Realtime multiusuario. Migración de datos de la fase 1. Roles/permisos finos por usuario.
