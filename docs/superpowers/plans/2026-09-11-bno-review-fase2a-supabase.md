# BnO Review — Fase 2a (Supabase + panel /admin) — Plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mover la persistencia del overlay de `localStorage` a Supabase para que el equipo vea los comentarios de los clientes, y entregar un panel `/admin` autenticado para consultarlos y gestionarlos.

**Architecture:** Se agrega un adaptador `SupabaseStore` con la MISMA interfaz `ReviewStore` (inyectable → testeable con un cliente falso). Un módulo browser-only crea el cliente `supabase-js` (CDN) y `boot()` (ahora async) lo selecciona por `config.storage`. La tarjeta de pin en la página pasa a solo-lectura; la gestión (estado/respuestas) vive en `/admin`, protegido por Supabase Auth. Deep-link `#comment=<id>` lleva del panel al elemento.

**Tech Stack:** JavaScript ES modules (sin bundler), `@supabase/supabase-js@2` desde `https://esm.sh`, Supabase (Postgres + RLS + Auth), `node --test` + jsdom para lo testeable offline.

**Spec:** `docs/superpowers/specs/2026-09-11-bno-review-fase2a-supabase-design.md`

## Global Constraints

- **Interfaz `ReviewStore` estable:** `list(projectId,page)`, `create(comment)`, `update(projectId,page,id,patch)`. `SupabaseStore` la respeta idéntica a `LocalStorageStore`.
- **Forma de `Comment` (camelCase en JS):** `{ id, projectId, page, selector, fingerprint, name, comment, status, replies, createdAt }`. La tabla usa snake_case (`project_id`, `created_at`); el mapeo vive solo en `SupabaseStore`.
- **Estados:** `pendiente | en-proceso | resuelto`.
- **Seguridad RLS:** anónimo = INSERT + SELECT; autenticado = todo. La tarjeta de pin en la página es **solo lectura** (sin botones de estado/respuesta).
- **Footprint / no romper el sitio:** `boot()` en try/catch; si Supabase falla, `console.warn` y no monta. Sin `?review=true`+token válido no pasa nada.
- **Credenciales (públicas):** URL `https://gvnnhkectrnwhqkcrlar.supabase.co`; publishable key `sb_publishable_Frc_cn6l4BfMbrSh7WFkIQ_6-fqqej4`. La `service_role`/secret NUNCA va en el cliente.
- **Aislamiento UI:** Shadow DOM, prefijo `bnor-` (overlay). El panel `/admin` es una página normal aparte con su propio CSS.
- **Commits:** español, imperativo, scope `feat(review): …` / `docs(review): …`.

---

### Task 1: Esquema SQL de Supabase (tabla `comments` + RLS)

**Files:**
- Create: `supabase/schema.sql`

**Interfaces:**
- Consumes: nada.
- Produces: el contrato de datos que `SupabaseStore` (Task 2) consumirá: tabla `public.comments` con columnas `id uuid`, `project_id text`, `page text`, `selector text`, `fingerprint jsonb`, `name text`, `comment text`, `status text`, `replies jsonb`, `clickup_task_id text`, `clickup_url text`, `created_at timestamptz`.

Este artefacto lo corre el usuario en Supabase; no hay test automatizado. La revisión valida corrección del SQL y de las políticas.

- [ ] **Step 1: Crear el archivo SQL**

Crea `supabase/schema.sql`:

```sql
-- BnO Review — esquema fase 2a. Correr una vez en el SQL Editor de Supabase.
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
  clickup_task_id text,   -- fase 2b
  clickup_url text,       -- fase 2b
  created_at timestamptz not null default now()
);

create index if not exists comments_project_page_idx
  on public.comments (project_id, page);

alter table public.comments enable row level security;

-- Cliente anónimo (publishable key): crear y ver, nada más.
drop policy if exists "anon can insert" on public.comments;
create policy "anon can insert" on public.comments
  for insert to anon with check (true);

drop policy if exists "anon can select" on public.comments;
create policy "anon can select" on public.comments
  for select to anon using (true);

-- Equipo autenticado (Supabase Auth): acceso total.
drop policy if exists "authenticated full access" on public.comments;
create policy "authenticated full access" on public.comments
  for all to authenticated using (true) with check (true);
```

- [ ] **Step 2: Verificación de sintaxis básica**

No hay servidor Postgres local garantizado. Revisa manualmente que: hay exactamente 3 políticas; `status` tiene el CHECK con los 3 estados; RLS está habilitado; existe el índice. No se ejecuta aquí (lo corre el usuario).

- [ ] **Step 3: Commit**

```bash
git add supabase/schema.sql
git commit -m "feat(review): esquema Supabase (tabla comments + RLS) para fase 2a"
```

---

### Task 2: SupabaseStore (adaptador con la misma interfaz) + tests

**Files:**
- Create: `assets/review/supabase-store.js`
- Test: `assets/review/tests/supabase-store.test.js`

**Interfaces:**
- Consumes: el contrato de tabla de Task 1; un cliente estilo `supabase-js` inyectado.
- Produces: `class SupabaseStore { constructor(client, projectId) }` con `list`, `create`, `update` idénticos en forma a `LocalStorageStore`. Exporta también, para pruebas, nada más la clase (los mapeos son internos).

- [ ] **Step 1: Escribir el test (falla primero)**

Crea `assets/review/tests/supabase-store.test.js`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { SupabaseStore } from '../supabase-store.js';

// Cliente falso: registra la cadena de llamadas y responde con datos canónicos.
function makeFakeClient(responder) {
  const calls = [];
  function makeBuilder(table) {
    const state = { table, method: 'select', filters: {} };
    const builder = {
      select(cols) { state.select = cols ?? '*'; return builder; },
      insert(payload) { state.method = 'insert'; state.payload = payload; return builder; },
      update(payload) { state.method = 'update'; state.payload = payload; return builder; },
      eq(col, val) { state.filters[col] = val; return builder; },
      order(col, opts) { state.order = { col, opts }; return builder; },
      single() { state.single = true; return builder; },
      then(res, rej) { calls.push(state); return Promise.resolve(responder(state)).then(res, rej); },
    };
    return builder;
  }
  return { from: (t) => makeBuilder(t), calls };
}

const row = {
  id: 'r1', project_id: 'anahuac-2026', page: 'psicologia.html', selector: '#dos',
  fingerprint: { tag: 'p' }, name: 'Karen', comment: 'Cambiar', status: 'pendiente',
  replies: [], created_at: '2026-09-11T10:00:00Z', clickup_url: null,
};

test('list consulta por project_id+page, ordena por created_at y mapea a camelCase', async () => {
  const client = makeFakeClient(() => ({ data: [row], error: null }));
  const store = new SupabaseStore(client, 'anahuac-2026');
  const res = await store.list('anahuac-2026', 'psicologia.html');
  assert.equal(res.length, 1);
  assert.equal(res[0].projectId, 'anahuac-2026');
  assert.equal(res[0].createdAt, '2026-09-11T10:00:00Z');
  const call = client.calls[0];
  assert.equal(call.table, 'comments');
  assert.equal(call.filters.project_id, 'anahuac-2026');
  assert.equal(call.filters.page, 'psicologia.html');
  assert.equal(call.order.col, 'created_at');
});

test('create envía snake_case y devuelve el comentario mapeado', async () => {
  const client = makeFakeClient((state) => ({ data: { ...row, ...(state.payload || {}) }, error: null }));
  const store = new SupabaseStore(client, 'anahuac-2026');
  const created = await store.create({
    projectId: 'anahuac-2026', page: 'psicologia.html', selector: '#dos',
    fingerprint: { tag: 'p' }, name: 'Karen', comment: 'Cambiar',
  });
  const call = client.calls[0];
  assert.equal(call.method, 'insert');
  assert.equal(call.payload.project_id, 'anahuac-2026');
  assert.equal(call.payload.comment, 'Cambiar');
  assert.ok(call.single);
  assert.equal(created.projectId, 'anahuac-2026');
});

test('update envía el patch y filtra por id', async () => {
  const client = makeFakeClient((state) => ({ data: { ...row, ...(state.payload || {}) }, error: null }));
  const store = new SupabaseStore(client, 'anahuac-2026');
  const updated = await store.update('anahuac-2026', 'psicologia.html', 'r1', { status: 'resuelto' });
  const call = client.calls[0];
  assert.equal(call.method, 'update');
  assert.equal(call.payload.status, 'resuelto');
  assert.equal(call.filters.id, 'r1');
  assert.equal(updated.status, 'resuelto');
});

test('propaga el error de Supabase', async () => {
  const client = makeFakeClient(() => ({ data: null, error: { message: 'boom' } }));
  const store = new SupabaseStore(client, 'anahuac-2026');
  await assert.rejects(() => store.list('anahuac-2026', 'psicologia.html'), /boom/);
});
```

- [ ] **Step 2: Correr el test y verificar que falla**

Run: `npm test`
Expected: FAIL — `Cannot find module '../supabase-store.js'`.

- [ ] **Step 3: Implementar el store**

Crea `assets/review/supabase-store.js`:

```js
// Adaptador Supabase. Implementa la interfaz ReviewStore, idéntica a LocalStorageStore.
// El cliente supabase-js se inyecta (para poder probar sin red).
function toRow(c) {
  const row = {};
  if (c.id !== undefined) row.id = c.id;
  if (c.projectId !== undefined) row.project_id = c.projectId;
  if (c.page !== undefined) row.page = c.page;
  if (c.selector !== undefined) row.selector = c.selector;
  if (c.fingerprint !== undefined) row.fingerprint = c.fingerprint;
  if (c.name !== undefined) row.name = c.name;
  if (c.comment !== undefined) row.comment = c.comment;
  if (c.status !== undefined) row.status = c.status;
  if (c.replies !== undefined) row.replies = c.replies;
  if (c.createdAt !== undefined) row.created_at = c.createdAt;
  return row;
}

function fromRow(r) {
  return {
    id: r.id,
    projectId: r.project_id,
    page: r.page,
    selector: r.selector,
    fingerprint: r.fingerprint,
    name: r.name,
    comment: r.comment,
    status: r.status,
    replies: r.replies || [],
    createdAt: r.created_at,
    clickupUrl: r.clickup_url || null,
  };
}

export class SupabaseStore {
  constructor(client, projectId) {
    this.client = client;
    this.projectId = projectId;
  }

  async list(projectId, page) {
    const { data, error } = await this.client
      .from('comments')
      .select('*')
      .eq('project_id', projectId)
      .eq('page', page)
      .order('created_at', { ascending: true });
    if (error) throw new Error(error.message || String(error));
    return (data || []).map(fromRow);
  }

  async create(comment) {
    const { data, error } = await this.client
      .from('comments')
      .insert(toRow(comment))
      .select()
      .single();
    if (error) throw new Error(error.message || String(error));
    return fromRow(data);
  }

  async update(projectId, page, id, patch) {
    const { data, error } = await this.client
      .from('comments')
      .update(toRow(patch))
      .eq('id', id)
      .select()
      .single();
    if (error) throw new Error(error.message || String(error));
    return data ? fromRow(data) : null;
  }
}
```

- [ ] **Step 4: Correr los tests y verificar que pasan**

Run: `npm test`
Expected: PASS (todos los previos + 4 nuevos de supabase-store).

- [ ] **Step 5: Commit**

```bash
git add assets/review/supabase-store.js assets/review/tests/supabase-store.test.js
git commit -m "feat(review): SupabaseStore con la interfaz ReviewStore y tests"
```

---

### Task 3: Cableado del navegador (cliente CDN, config, boot async)

**Files:**
- Create: `assets/review/supabase-client.js`
- Modify: `assets/review/config.js`
- Modify: `assets/review/review.js`

**Interfaces:**
- Consumes: `SupabaseStore` (Task 2); `CONFIG` (fase 1); `shouldActivate`, `createStore`, `ReviewUI`.
- Produces: `makeSupabaseStore(config): Promise<SupabaseStore>` desde `supabase-client.js`; `boot()` async que elige el store por `config.storage` con manejo de error.

- [ ] **Step 1: Crear el creador de cliente (solo navegador)**

Crea `assets/review/supabase-client.js`:

```js
// Solo navegador: importa supabase-js desde CDN y devuelve un SupabaseStore listo.
// Aislado aquí porque el import de CDN no corre en tests de node.
import { SupabaseStore } from './supabase-store.js';

export async function makeSupabaseStore(config) {
  const { createClient } = await import('https://esm.sh/@supabase/supabase-js@2');
  const client = createClient(config.supabase.url, config.supabase.publishableKey);
  return new SupabaseStore(client, config.projectId);
}
```

- [ ] **Step 2: Actualizar la config**

En `assets/review/config.js`, cambia `storage` a `'supabase'` y agrega el bloque `supabase`. El objeto debe quedar así (conserva `projectId`, `tokens`, `namespace`, `version`):

```js
export const CONFIG = {
  projectId: 'anahuac-2026',
  tokens: ['bno-interno', 'cliente-anahuac'],
  namespace: 'bno-review',
  storage: 'supabase', // 'local' | 'supabase'
  supabase: {
    url: 'https://gvnnhkectrnwhqkcrlar.supabase.co',
    publishableKey: 'sb_publishable_Frc_cn6l4BfMbrSh7WFkIQ_6-fqqej4',
  },
  version: '2.0.0',
};
```

- [ ] **Step 3: Hacer `boot()` async con selección de store y manejo de error**

En `assets/review/review.js`, reemplaza la función `boot` y su import. Añade al inicio el import:

```js
import { makeSupabaseStore } from './supabase-client.js';
```

Y reemplaza `boot()` por:

```js
async function boot() {
  const { active, token } = shouldActivate(window.location.search, CONFIG);
  if (!active) return; // footprint cero

  let store;
  try {
    store = CONFIG.storage === 'supabase'
      ? await makeSupabaseStore(CONFIG)
      : createStore(CONFIG);
  } catch (e) {
    console.warn('[BnO Review] no se pudo iniciar el almacenamiento:', e);
    return;
  }

  const ui = new ReviewUI({ store, config: CONFIG, token, page: currentPage() });
  ui.mount();
}
```

(El `import { createStore } from './store-factory.js';` y `import { ReviewUI } from './ui.js';` de la fase 1 se conservan. `LocalStorageStore` ya no se importa directo en review.js si solo lo usaba el factory; deja el factory intacto.)

- [ ] **Step 4: Verificar que la suite sigue verde**

Run: `npm test`
Expected: PASS. Los tests no importan `review.js` ni `supabase-client.js` (evitan el import de CDN), así que no se ven afectados. Si algún test fallara por el cambio de `config.js`, ajusta el test solo si asume `storage:'local'` (el test del factory prueba branches con configs literales, no CONFIG).

- [ ] **Step 5: Verificación en navegador (delegada al usuario — documéntala, no la ejecutes)**

En el reporte, incluye esta checklist para el usuario (requiere haber corrido el SQL de Task 1):
1. `python3 -m http.server 8000`, abrir `Inicio.html?review=true&token=bno-interno`.
2. Crear un comentario → en Supabase → Table editor → `comments` aparece la fila.
3. Recargar → el pin reaparece (viene de Supabase, no de localStorage).
4. Sin parámetros → el sitio queda idéntico, consola sin errores.

- [ ] **Step 6: Commit**

```bash
git add assets/review/supabase-client.js assets/review/config.js assets/review/review.js
git commit -m "feat(review): cablear SupabaseStore via config.storage y boot async"
```

---

### Task 4: Tarjeta de pin solo-lectura + deep-link a comentario

**Files:**
- Modify: `assets/review/pin-layer.js`
- Modify: `assets/review/review.css`
- Modify: `assets/review/review.js`
- Modify: `assets/review/tests/pin-layer.smoke.test.js` (o el nombre real del smoke test de pins)

**Interfaces:**
- Consumes: `PinLayer` (fase 1), `resolveElement`.
- Produces: tarjeta de pin de solo lectura (badge de estado, sin botones de edición); `PinLayer.focusComment(id)`; `review.js` maneja `#comment=<id>` tras render.

- [ ] **Step 1: Hacer la tarjeta de solo lectura en pin-layer.js**

En `assets/review/pin-layer.js`, dentro de `openCard`, reemplaza el bloque de estados (`<div class="bnor-states">…</div>` y su listener de cambio de estado) por un badge de solo lectura. La tarjeta debe mostrar autor, fecha, (nota "no localizado" si `lost`), comentario y un badge con el estado. Elimina el `card.addEventListener` que llamaba `store.update`. El markup del badge:

```js
      <div class="bnor-badge" data-status="${comment.status}">${STATE_LABEL[comment.status] || comment.status}</div>
```

Agrega cerca de `STATES` un mapa de etiquetas:

```js
const STATE_LABEL = { 'pendiente': 'Pendiente', 'en-proceso': 'En proceso', 'resuelto': 'Resuelto' };
```

Conserva el cierre por clic afuera y la corrección de listeners de la fase 1. La gestión de estado ahora vive en `/admin` (Task 5).

- [ ] **Step 2: Agregar `focusComment` a PinLayer**

En `assets/review/pin-layer.js`, agrega el método:

```js
  focusComment(id) {
    const entry = this.pins.find((p) => p.comment.id === id);
    if (!entry) return;
    if (entry.el && entry.el.scrollIntoView) {
      entry.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    entry.pinEl.classList.add('bnor-pin--focus');
    setTimeout(() => entry.pinEl.classList.remove('bnor-pin--focus'), 2600);
  }
```

- [ ] **Step 3: Exponer el render listo y manejar el deep-link en review.js**

En `assets/review/ui.js`, en `mount()`, cambia la llamada existente `this.pinLayer.renderAll();` por:

```js
    this.ready = this.pinLayer.renderAll();
```

En `assets/review/review.js`, dentro de `boot()`, después de `ui.mount();`, agrega:

```js
  const m = window.location.hash.match(/comment=([\w-]+)/);
  if (m) {
    try { await ui.ready; ui.pinLayer.focusComment(m[1]); } catch (_) {}
  }
```

- [ ] **Step 4: Estilos del badge y del foco**

Añade al final de `assets/review/review.css`:

```css
.bnor-badge {
  display: inline-block; padding: 3px 10px; border-radius: 999px;
  font-size: 11px; font-weight: 700; background: #fef3c7; color: #92400e;
}
.bnor-badge[data-status="en-proceso"] { background: #dbeafe; color: #1e40af; }
.bnor-badge[data-status="resuelto"] { background: #d1fae5; color: #065f46; }
.bnor-pin--focus { animation: bnor-pulse 1.3s ease-in-out 2; }
@keyframes bnor-pulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.5); } }
```

- [ ] **Step 5: Actualizar el smoke test de pins**

En `assets/review/tests/pin-layer.smoke.test.js`, reemplaza la parte que hacía clic en "Resuelto" y esperaba `store.update`. Ahora asserta: al abrir la tarjeta hay un `.bnor-badge` con el texto del estado y NO existe ningún `.bnor-state`; y que un fake store cuyo `update` lanza si se llama NO es invocado. Añade además un test de `focusComment`: con un pin resuelto por selector, `layer.focusComment(id)` agrega la clase `bnor-pin--focus` al pin (usa un stub de `scrollIntoView`).

- [ ] **Step 6: Correr la suite**

Run: `npm test`
Expected: PASS (incluye los tests de pins actualizados).

- [ ] **Step 7: Commit**

```bash
git add assets/review/pin-layer.js assets/review/review.css assets/review/review.js assets/review/ui.js assets/review/tests/pin-layer.smoke.test.js
git commit -m "feat(review): tarjeta de pin solo-lectura y deep-link a comentario"
```

---

### Task 5: Panel /admin (login + tabla + gestión)

**Files:**
- Create: `admin/index.html`
- Create: `admin/admin.js`
- Create: `admin/admin.css`

**Interfaces:**
- Consumes: Supabase (Auth + tabla `comments`) vía `supabase-js` CDN + publishable key.
- Produces: página autenticada que lista/gestiona comentarios y hace deep-link a la página.

Se verifica en navegador con datos reales (usuario corrió el SQL y creó su usuario admin). No hay test automatizado de esta task.

- [ ] **Step 1: HTML del panel**

Crea `admin/index.html`:

```html
<!doctype html>
<html lang="es-MX">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>BnO Review — Admin</title>
    <link rel="stylesheet" href="admin.css" />
  </head>
  <body>
    <header class="adm-header"><h1>BnO Review — Comentarios</h1><button id="logout" class="adm-btn adm-hidden">Salir</button></header>

    <section id="login" class="adm-login">
      <h2>Acceso equipo</h2>
      <input id="email" type="email" placeholder="correo" />
      <input id="password" type="password" placeholder="contraseña" />
      <button id="signin" class="adm-btn adm-btn--primary">Entrar</button>
      <p id="login-error" class="adm-error"></p>
    </section>

    <section id="panel" class="adm-panel adm-hidden">
      <div class="adm-filters">
        <select id="f-project"></select>
        <select id="f-page"></select>
        <select id="f-status">
          <option value="">Todos los estados</option>
          <option value="pendiente">Pendiente</option>
          <option value="en-proceso">En proceso</option>
          <option value="resuelto">Resuelto</option>
        </select>
        <button id="refresh" class="adm-btn">Actualizar</button>
      </div>
      <table class="adm-table">
        <thead><tr><th>Estado</th><th>Página</th><th>Elemento</th><th>Usuario</th><th>Comentario</th><th>Fecha</th><th></th></tr></thead>
        <tbody id="rows"></tbody>
      </table>
    </section>

    <script type="module" src="admin.js"></script>
  </body>
</html>
```

- [ ] **Step 2: Lógica del panel**

Crea `admin/admin.js`. Debe: crear el cliente supabase; manejar login/logout con Supabase Auth; al haber sesión, cargar comentarios (`select` con filtros), poblar filtros, y por fila ofrecer: cambiar estado (`update status`), responder (append a `replies`), resolver, y "ir al elemento" (abrir `../<page>?review=true&token=cliente-anahuac#comment=<id>` en pestaña nueva). Escapar el contenido de usuario antes de inyectarlo.

```js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://gvnnhkectrnwhqkcrlar.supabase.co';
const PUBLISHABLE_KEY = 'sb_publishable_Frc_cn6l4BfMbrSh7WFkIQ_6-fqqej4';
const REVIEW_TOKEN = 'cliente-anahuac'; // para armar el deep-link a la página
const sb = createClient(SUPABASE_URL, PUBLISHABLE_KEY);

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

async function refreshSessionUI() {
  const { data } = await sb.auth.getSession();
  const authed = Boolean(data.session);
  $('login').classList.toggle('adm-hidden', authed);
  $('panel').classList.toggle('adm-hidden', !authed);
  $('logout').classList.toggle('adm-hidden', !authed);
  if (authed) load();
}

$('signin').addEventListener('click', async () => {
  $('login-error').textContent = '';
  const { error } = await sb.auth.signInWithPassword({ email: $('email').value.trim(), password: $('password').value });
  if (error) { $('login-error').textContent = error.message; return; }
  refreshSessionUI();
});

$('logout').addEventListener('click', async () => { await sb.auth.signOut(); refreshSessionUI(); });
$('refresh').addEventListener('click', load);
['f-project', 'f-page', 'f-status'].forEach((id) => $(id).addEventListener('change', load));

async function load() {
  let q = sb.from('comments').select('*').order('created_at', { ascending: false });
  const proj = $('f-project').value, page = $('f-page').value, status = $('f-status').value;
  if (proj) q = q.eq('project_id', proj);
  if (page) q = q.eq('page', page);
  if (status) q = q.eq('status', status);
  const { data, error } = await q;
  if (error) { $('rows').innerHTML = `<tr><td colspan="7" class="adm-error">${esc(error.message)}</td></tr>`; return; }
  populateFilters(data);
  render(data);
}

function populateFilters(rows) {
  const fill = (sel, values, label) => {
    const cur = $(sel).value;
    const opts = [`<option value="">${label}</option>`].concat([...new Set(values)].filter(Boolean).map((v) => `<option value="${esc(v)}">${esc(v)}</option>`));
    $(sel).innerHTML = opts.join('');
    $(sel).value = cur;
  };
  fill('f-project', rows.map((r) => r.project_id), 'Todos los proyectos');
  fill('f-page', rows.map((r) => r.page), 'Todas las páginas');
}

function render(rows) {
  $('rows').innerHTML = rows.map((r) => `
    <tr>
      <td><span class="adm-badge" data-status="${r.status}">${esc(r.status)}</span></td>
      <td>${esc(r.page)}</td>
      <td><code>${esc(r.selector || '')}</code></td>
      <td>${esc(r.name)}</td>
      <td>${esc(r.comment)}</td>
      <td>${new Date(r.created_at).toLocaleString('es-MX')}</td>
      <td class="adm-actions">
        <a class="adm-link" href="../${esc(r.page)}?review=true&token=${REVIEW_TOKEN}#comment=${esc(r.id)}" target="_blank" rel="noopener">Ir</a>
        <select class="adm-status" data-id="${esc(r.id)}">
          <option value="pendiente"${r.status==='pendiente'?' selected':''}>Pendiente</option>
          <option value="en-proceso"${r.status==='en-proceso'?' selected':''}>En proceso</option>
          <option value="resuelto"${r.status==='resuelto'?' selected':''}>Resuelto</option>
        </select>
        <button class="adm-reply" data-id="${esc(r.id)}">Responder</button>
      </td>
    </tr>`).join('');

  $('rows').querySelectorAll('.adm-status').forEach((sel) => sel.addEventListener('change', async () => {
    const { error } = await sb.from('comments').update({ status: sel.value }).eq('id', sel.dataset.id);
    if (error) alert(error.message); else load();
  }));
  $('rows').querySelectorAll('.adm-reply').forEach((btn) => btn.addEventListener('click', async () => {
    const text = prompt('Respuesta:');
    if (!text) return;
    const { data, error } = await sb.from('comments').select('replies').eq('id', btn.dataset.id).single();
    if (error) { alert(error.message); return; }
    const replies = (data.replies || []).concat([{ name: 'Equipo', text, createdAt: new Date().toISOString() }]);
    const up = await sb.from('comments').update({ replies }).eq('id', btn.dataset.id);
    if (up.error) alert(up.error.message); else load();
  }));
}

sb.auth.onAuthStateChange(() => refreshSessionUI());
refreshSessionUI();
```

- [ ] **Step 3: Estilos del panel**

Crea `admin/admin.css` con estilos sobrios (tabla legible, badges por estado, formulario de login centrado). No usa el Shadow DOM del overlay; es una página normal.

```css
:root { font-family: system-ui, -apple-system, Roboto, sans-serif; color: #111; }
body { margin: 0; background: #f8fafc; }
.adm-header { display: flex; align-items: center; justify-content: space-between; padding: 14px 20px; background: #1f2937; color: #fff; }
.adm-header h1 { font-size: 16px; margin: 0; }
.adm-login { max-width: 320px; margin: 60px auto; background: #fff; padding: 22px; border-radius: 10px; box-shadow: 0 6px 20px rgba(0,0,0,.08); display: flex; flex-direction: column; gap: 10px; }
.adm-login input { padding: 9px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px; }
.adm-panel { padding: 20px; }
.adm-filters { display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap; }
.adm-filters select { padding: 8px; border: 1px solid #d1d5db; border-radius: 6px; }
.adm-table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 14px rgba(0,0,0,.06); }
.adm-table th, .adm-table td { text-align: left; padding: 10px 12px; border-bottom: 1px solid #eef2f7; font-size: 13px; vertical-align: top; }
.adm-table th { background: #f1f5f9; font-size: 12px; text-transform: uppercase; letter-spacing: .03em; color: #475569; }
.adm-actions { display: flex; gap: 6px; align-items: center; white-space: nowrap; }
.adm-badge { padding: 3px 9px; border-radius: 999px; font-size: 11px; font-weight: 700; background: #fef3c7; color: #92400e; }
.adm-badge[data-status="en-proceso"] { background: #dbeafe; color: #1e40af; }
.adm-badge[data-status="resuelto"] { background: #d1fae5; color: #065f46; }
.adm-btn { padding: 8px 12px; border: 0; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 600; background: #e5e7eb; }
.adm-btn--primary { background: #2563eb; color: #fff; }
.adm-link { color: #2563eb; font-weight: 600; text-decoration: none; }
.adm-error { color: #dc2626; font-size: 13px; }
.adm-hidden { display: none !important; }
code { background: #f1f5f9; padding: 1px 5px; border-radius: 4px; font-size: 12px; }
```

- [ ] **Step 4: Verificación en navegador (delegada al usuario — documéntala)**

Checklist para el reporte (requiere SQL corrido + usuario admin creado):
1. Abrir `http://localhost:8000/admin/` → aparece login.
2. Entrar con el usuario admin → aparece la tabla con los comentarios.
3. Cambiar un estado en el `select` → se guarda (recarga y persiste).
4. "Ir" → abre la página en pestaña nueva y resalta el elemento comentado.
5. Sin sesión, la tabla no es accesible (RLS: anon no puede UPDATE; el login gobierna la vista).

- [ ] **Step 5: Commit**

```bash
git add admin/index.html admin/admin.js admin/admin.css
git commit -m "feat(review): panel /admin con login Supabase y gestión de comentarios"
```

---

### Task 6: Documentación y memoria

**Files:**
- Modify: `assets/review/README.md`
- Modify: `docs/modules/review-overlay.md`
- Modify: `MEMORY.md`

**Interfaces:**
- Consumes: todo lo anterior.
- Produces: docs actualizadas a fase 2a (Supabase + admin + pasos de setup).

- [ ] **Step 1: Actualizar README de replicación**

En `assets/review/README.md`, agrega una sección "Fase 2a — Supabase" que explique: correr `supabase/schema.sql`, poner `url`+`publishableKey` en `config.js`, `storage:'supabase'`, crear usuario admin, y que `/admin` es el panel. Mantén la guía de réplica: para otro proyecto se cambia `projectId`, tokens y credenciales Supabase.

- [ ] **Step 2: Actualizar el contrato del módulo**

En `docs/modules/review-overlay.md`, actualiza la sección de almacenamiento: fase 2a usa `SupabaseStore` (RLS: anon INSERT/SELECT, authenticated todo); tarjeta de pin solo-lectura; gestión en `/admin`; ClickUp pendiente (2b).

- [ ] **Step 3: Registrar en MEMORY.md**

Agrega una entrada (fecha 2026-09-11, formato del archivo) que registre: fase 2a completada — persistencia en Supabase (proyecto `gvnnhkectrnwhqkcrlar`), panel `/admin` con Supabase Auth, tarjeta de pin solo-lectura, deep-link `#comment=`; pendiente fase 2b (ClickUp vía Edge Function + webhook). Nota: la publishable key es pública; la seguridad real es RLS + Auth del admin.

- [ ] **Step 4: Commit**

```bash
git add assets/review/README.md docs/modules/review-overlay.md MEMORY.md
git commit -m "docs(review): actualizar módulo y memoria a fase 2a (Supabase + admin)"
```

---

## Self-Review (verificación del plan contra el spec)

**Cobertura del spec:**
- Tabla `comments` + RLS (anon INSERT/SELECT, auth all) → Task 1. ✓
- SupabaseStore misma interfaz, mapeo snake/camel, testeable → Task 2. ✓
- Cliente CDN + config (`storage:'supabase'`, credenciales) + boot async con try/catch → Task 3. ✓
- Tarjeta de pin solo-lectura (sin edición del cliente) → Task 4. ✓
- Deep-link `#comment=<id>` scroll+highlight → Task 4. ✓
- Panel `/admin` con Auth, tabla, filtros, cambio de estado, responder, ir al elemento → Task 5. ✓
- Pasos del usuario (SQL, usuario admin) → documentados en Tasks 3/5 checklists y Task 6. ✓
- Docs + memoria → Task 6. ✓

**Consistencia de tipos/nombres:** `ReviewStore.list/create/update(projectId,page,id,patch)` consistente con fase 1 y SupabaseStore; `Comment` camelCase mapeado en SupabaseStore; `focusComment(id)`, `ui.ready`, `#comment=<id>` usados igual en Task 4. ✓

**Placeholders:** el código testeable (Tasks 1-4) está completo; Task 5 (admin) lleva HTML/JS/CSS completos; solo la verificación en vivo se delega al usuario por falta de navegador/nube en los subagentes. ✓

**Riesgo conocido llevado al plan:** formato de llave `sb_publishable_` — se valida en la verificación en vivo (Task 3 Step 5); si `supabase-js` no lo acepta, el fallback es la anon key JWT legacy (ledger si ocurre).
