# BnO Review — Capa de revisión visual (fase 1) — Plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir un módulo drop-in de comentarios visuales que se activa con `?review=true&token=XXX`, ancla cada comentario a un elemento estable del DOM (no coordenadas), persiste en `localStorage` y repinta los pins al recargar — sin alterar el sitio.

**Architecture:** Módulo autocontenido en `assets/review/` como ES modules. El núcleo no tiene referencias al proyecto: todo lo específico vive en `config.js`. La lógica pura (gate, resolución de ancla, motor de selector, store) se prueba con `node --test` + `jsdom`; la UI (Shadow DOM) se verifica en navegador. El almacenamiento es una interfaz con adaptadores intercambiables (`LocalStorageStore` ahora, `SupabaseStore` después).

**Tech Stack:** JavaScript ES modules (navegador, sin bundler), Shadow DOM, `localStorage`, `node --test` + `jsdom` (solo devDependency de pruebas), Stylelint (ya presente).

**Spec:** `docs/superpowers/specs/2026-09-10-bno-review-overlay-design.md`

## Global Constraints

- **Footprint cero sin activación:** sin `?review=true` + token válido, el módulo no monta nada, no captura eventos, no ejecuta lógica.
- **Núcleo sin datos del proyecto:** ni Anáhuac ni rutas/clases del sitio hardcodeadas fuera de `config.js`.
- **Sin coordenadas x/y:** cada comentario se ancla con `selector` + `fingerprint`; el pin se posiciona con `getBoundingClientRect()` y se recalcula en resize/scroll.
- **Aislamiento visual:** toda la UI vive en un Shadow DOM; ninguna regla del sitio la afecta ni al revés.
- **Config del proyecto:** `projectId: "anahuac-2026"`; tokens `["bno-interno", "cliente-anahuac"]`; `namespace: "bno-review"`.
- **Estados válidos:** `"pendiente" | "en-proceso" | "resuelto"`.
- **Prefijo CSS:** todas las clases de la UI usan el prefijo `bnor-`.
- **Idioma de commits:** español, imperativo, con alcance: `feat(review): …`.
- **No romper el sitio:** la única modificación a páginas existentes es añadir una línea `<script type="module">` antes de `</body>`.

---

### Task 1: Infra de pruebas + config + gate de activación

**Files:**
- Modify: `package.json` (añadir devDependency `jsdom` y script `test`)
- Create: `assets/review/config.js`
- Create: `assets/review/gate.js`
- Test: `assets/review/tests/gate.test.js`

**Interfaces:**
- Consumes: nada.
- Produces:
  - `CONFIG` (objeto) desde `config.js`: `{ projectId: string, tokens: string[], namespace: string, version: string, storage: "local" }`.
  - `shouldActivate(search: string, config): { active: boolean, token: string|null }` desde `gate.js`.

- [ ] **Step 1: Añadir jsdom y script de test a package.json**

En `package.json`, dentro de `"scripts"` añade `"test": "node --test assets/review/tests/"` y en `"devDependencies"` añade `"jsdom": "^24.0.0"`. Luego instala:

```bash
npm install
```

- [ ] **Step 2: Crear la config del proyecto**

Crea `assets/review/config.js`:

```js
// Configuración específica del proyecto. Es lo ÚNICO que cambia al replicar el
// módulo en otro sitio de Black & Orange. El núcleo no debe leer nada de aquí
// que no pase por este objeto.
export const CONFIG = {
  projectId: 'anahuac-2026',
  tokens: ['bno-interno', 'cliente-anahuac'],
  namespace: 'bno-review',
  storage: 'local', // 'local' (fase 1) | 'supabase' (fase 2)
  version: '1.0.0',
};
```

- [ ] **Step 3: Escribir el test del gate (falla primero)**

Crea `assets/review/tests/gate.test.js`:

```js
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shouldActivate } from '../gate.js';

const config = { tokens: ['bno-interno', 'cliente-anahuac'] };

test('activa con review=true y token válido', () => {
  const r = shouldActivate('?review=true&token=bno-interno', config);
  assert.deepEqual(r, { active: true, token: 'bno-interno' });
});

test('no activa con token inválido', () => {
  const r = shouldActivate('?review=true&token=hackeado', config);
  assert.deepEqual(r, { active: false, token: null });
});

test('no activa sin token', () => {
  assert.deepEqual(shouldActivate('?review=true', config), { active: false, token: null });
});

test('no activa sin review=true', () => {
  assert.deepEqual(shouldActivate('?token=bno-interno', config), { active: false, token: null });
});

test('no activa con querystring vacío', () => {
  assert.deepEqual(shouldActivate('', config), { active: false, token: null });
});
```

- [ ] **Step 4: Correr el test y verificar que falla**

Run: `npm test`
Expected: FAIL — `Cannot find module '../gate.js'`.

- [ ] **Step 5: Implementar el gate**

Crea `assets/review/gate.js`:

```js
// Decide si el modo revisión debe activarse. Puro: recibe el querystring como
// string para ser testeable sin navegador.
export function shouldActivate(search, config) {
  const params = new URLSearchParams(search);
  if (params.get('review') !== 'true') return { active: false, token: null };
  const token = params.get('token');
  const active = Boolean(token) && config.tokens.includes(token);
  return active ? { active: true, token } : { active: false, token: null };
}
```

- [ ] **Step 6: Correr los tests y verificar que pasan**

Run: `npm test`
Expected: PASS (5 tests del gate).

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json assets/review/config.js assets/review/gate.js assets/review/tests/gate.test.js
git commit -m "feat(review): config del módulo y gate de activación por token"
```

---

### Task 2: AnchorResolver — subir al elemento significativo

**Files:**
- Create: `assets/review/anchor-resolver.js`
- Test: `assets/review/tests/anchor-resolver.test.js`

**Interfaces:**
- Consumes: nada.
- Produces: `resolveAnchor(el: Element): Element` desde `anchor-resolver.js`. Dado el nodo clicado, devuelve el ancestro "significativo" más cercano (interactivo > bloque > el mismo), evitando nodos de texto internos.

- [ ] **Step 1: Escribir el test (falla primero)**

Crea `assets/review/tests/anchor-resolver.test.js`:

```js
import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { resolveAnchor } from '../anchor-resolver.js';

let document;
beforeEach(() => {
  const dom = new JSDOM(`<!doctype html><body>
    <button class="cta"><span id="txt">Conoce la oferta</span></button>
    <a href="#" id="link"><img id="img" src="x.png" alt=""></a>
    <p id="para">Un párrafo suelto</p>
    <div id="bare"><em id="em">solo texto</em></div>
  </body>`);
  document = dom.window.document;
});

test('un span dentro de un botón resuelve al botón', () => {
  assert.equal(resolveAnchor(document.getElementById('txt')).tagName, 'BUTTON');
});

test('una imagen dentro de un enlace resuelve al enlace', () => {
  assert.equal(resolveAnchor(document.getElementById('img')).id, 'link');
});

test('un párrafo se resuelve a sí mismo', () => {
  assert.equal(resolveAnchor(document.getElementById('para')).id, 'para');
});

test('sin ancestro significativo devuelve el mismo elemento', () => {
  assert.equal(resolveAnchor(document.getElementById('em')).id, 'em');
});
```

- [ ] **Step 2: Correr el test y verificar que falla**

Run: `npm test`
Expected: FAIL — `Cannot find module '../anchor-resolver.js'`.

- [ ] **Step 3: Implementar el resolver**

Crea `assets/review/anchor-resolver.js`:

```js
// Sube desde el nodo clicado al elemento "significativo" más cercano.
// Prioriza interactivos (botón/enlace) sobre bloques de contenido.
const INTERACTIVE = 'a, button, [role="button"], [role="menuitem"], [role="tab"], input, select, textarea, label, summary';
const BLOCK = 'li, figure, article, blockquote, h1, h2, h3, h4, h5, h6, p, img, [class*="card" i]';

export function resolveAnchor(el) {
  if (!el || el.nodeType !== 1) return el;
  const doc = el.ownerDocument;
  if (el === doc.body || el === doc.documentElement) return el;
  const interactive = el.closest(INTERACTIVE);
  if (interactive) return interactive;
  const block = el.closest(BLOCK);
  if (block) return block;
  return el;
}
```

- [ ] **Step 4: Correr los tests y verificar que pasan**

Run: `npm test`
Expected: PASS (gate + anchor-resolver).

- [ ] **Step 5: Commit**

```bash
git add assets/review/anchor-resolver.js assets/review/tests/anchor-resolver.test.js
git commit -m "feat(review): resuelve el elemento significativo al seleccionar"
```

---

### Task 3: SelectorEngine — selector estable + huella + resolución

**Files:**
- Create: `assets/review/selector-engine.js`
- Test: `assets/review/tests/selector-engine.test.js`

**Interfaces:**
- Consumes: nada.
- Produces (desde `selector-engine.js`):
  - `buildSelector(el: Element): string` — ruta CSS robusta; usa `#id` si existe, si no construye cadena de hijos con `:nth-of-type` anclada al ancestro con `id` más cercano.
  - `buildFingerprint(el: Element): { tag: string, sectionId: string|null, textHash: string, siblingIndex: number }`.
  - `resolveElement(anchor: {selector, fingerprint}, root: Document|Element): Element|null`.

- [ ] **Step 1: Escribir el test (falla primero)**

Crea `assets/review/tests/selector-engine.test.js`:

```js
import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';
import { buildSelector, buildFingerprint, resolveElement } from '../selector-engine.js';

let document;
beforeEach(() => {
  const dom = new JSDOM(`<!doctype html><body>
    <section id="prestigio">
      <div class="wrap">
        <p>Uno</p>
        <p id="dos">Dos</p>
        <p>Tres</p>
      </div>
    </section>
    <section id="costos">
      <p>Precio</p>
    </section>
  </body>`);
  document = dom.window.document;
  // jsdom no siempre expone CSS.escape en el módulo bajo prueba; el motor no
  // debe depender de él para ids simples.
});

test('buildSelector usa el id si el elemento lo tiene', () => {
  assert.equal(buildSelector(document.getElementById('dos')), '#dos');
});

test('buildSelector ancla al id ancestro con nth-of-type', () => {
  const tres = document.querySelectorAll('#prestigio p')[2];
  const sel = buildSelector(tres);
  assert.equal(sel, '#prestigio > div:nth-of-type(1) > p:nth-of-type(3)');
  assert.equal(document.querySelector(sel), tres);
});

test('buildFingerprint captura tag, sección, hash y posición', () => {
  const uno = document.querySelectorAll('#prestigio p')[0];
  const fp = buildFingerprint(uno);
  assert.equal(fp.tag, 'p');
  assert.equal(fp.sectionId, 'prestigio');
  assert.equal(fp.siblingIndex, 1);
  assert.equal(typeof fp.textHash, 'string');
});

test('resolveElement encuentra por selector', () => {
  const tres = document.querySelectorAll('#prestigio p')[2];
  const anchor = { selector: buildSelector(tres), fingerprint: buildFingerprint(tres) };
  assert.equal(resolveElement(anchor, document), tres);
});

test('resolveElement cae al fingerprint si el selector ya no matchea', () => {
  const uno = document.querySelectorAll('#prestigio p')[0];
  const anchor = { selector: '#prestigio > div:nth-of-type(9) > p:nth-of-type(1)', fingerprint: buildFingerprint(uno) };
  assert.equal(resolveElement(anchor, document), uno);
});

test('resolveElement devuelve null si nada matchea', () => {
  const anchor = { selector: '#no-existe', fingerprint: { tag: 'p', sectionId: 'no-existe', textHash: 'zzz', siblingIndex: 99 } };
  assert.equal(resolveElement(anchor, document), null);
});
```

- [ ] **Step 2: Correr el test y verificar que falla**

Run: `npm test`
Expected: FAIL — `Cannot find module '../selector-engine.js'`.

- [ ] **Step 3: Implementar el motor**

Crea `assets/review/selector-engine.js`:

```js
// Genera y resuelve una referencia estable a un elemento del DOM, sin coordenadas.
// Doble señal: selector CSS + huella (fingerprint) de respaldo.

function cssEscapeId(id) {
  // Escape mínimo suficiente para ids de HTML reales; evita depender de CSS.escape.
  return id.replace(/([^a-zA-Z0-9_-])/g, '\\$1');
}

function indexOfType(node) {
  let i = 1;
  let sib = node.previousElementSibling;
  while (sib) {
    if (sib.tagName === node.tagName) i++;
    sib = sib.previousElementSibling;
  }
  return i;
}

function hashText(text) {
  const norm = (text || '').replace(/\s+/g, ' ').trim().slice(0, 120);
  let h = 0;
  for (let i = 0; i < norm.length; i++) {
    h = (h * 31 + norm.charCodeAt(i)) | 0;
  }
  return String(h >>> 0);
}

export function buildSelector(el) {
  if (!el || el.nodeType !== 1) return null;
  if (el.id) return '#' + cssEscapeId(el.id);
  const path = [];
  let node = el;
  while (node && node.nodeType === 1 && node.tagName !== 'BODY' && node.tagName !== 'HTML') {
    if (node.id) {
      path.unshift('#' + cssEscapeId(node.id));
      break;
    }
    path.unshift(`${node.tagName.toLowerCase()}:nth-of-type(${indexOfType(node)})`);
    node = node.parentElement;
  }
  return path.join(' > ');
}

export function buildFingerprint(el) {
  const section = el.closest('[id]');
  return {
    tag: el.tagName.toLowerCase(),
    sectionId: section ? section.id : null,
    textHash: hashText(el.textContent),
    siblingIndex: indexOfType(el),
  };
}

function matchInList(list, fingerprint) {
  for (const cand of list) {
    if (cand.tagName.toLowerCase() === fingerprint.tag && hashText(cand.textContent) === fingerprint.textHash) {
      return cand;
    }
  }
  return null;
}

function matchByFingerprint(fingerprint, root) {
  const scope = (fingerprint.sectionId && root.querySelector('#' + cssEscapeId(fingerprint.sectionId))) || root;
  const candidates = scope.querySelectorAll(fingerprint.tag);
  const byText = matchInList(candidates, fingerprint);
  if (byText) return byText;
  // Último recurso: la n-ésima ocurrencia del tag en el scope.
  const nth = candidates[fingerprint.siblingIndex - 1];
  return nth || null;
}

export function resolveElement(anchor, root) {
  root = root || document;
  const { selector, fingerprint } = anchor || {};
  if (selector) {
    try {
      const matches = root.querySelectorAll(selector);
      if (matches.length === 1) return matches[0];
      if (matches.length > 1 && fingerprint) {
        const byFp = matchInList(matches, fingerprint);
        if (byFp) return byFp;
        return matches[0];
      }
    } catch (_) {
      // selector inválido: continúa al fingerprint
    }
  }
  if (fingerprint) return matchByFingerprint(fingerprint, root);
  return null;
}
```

- [ ] **Step 4: Correr los tests y verificar que pasan**

Run: `npm test`
Expected: PASS (gate + anchor-resolver + selector-engine).

- [ ] **Step 5: Commit**

```bash
git add assets/review/selector-engine.js assets/review/tests/selector-engine.test.js
git commit -m "feat(review): motor de selector estable con huella de respaldo"
```

---

### Task 4: LocalStorageStore — persistencia con interfaz intercambiable

**Files:**
- Create: `assets/review/local-store.js`
- Test: `assets/review/tests/local-store.test.js`

**Interfaces:**
- Consumes: nada.
- Produces (desde `local-store.js`): clase `LocalStorageStore` con la interfaz `ReviewStore`:
  - `constructor(storage?, namespace?)` — `storage` por defecto `window.localStorage`.
  - `list(projectId, page): Promise<Comment[]>`
  - `create(comment): Promise<Comment>` — asigna `id`, `createdAt`, `status`, `replies` si faltan.
  - `update(projectId, page, id, patch): Promise<Comment|null>`
  - Forma de `Comment`: `{ id, projectId, page, selector, fingerprint, name, comment, createdAt, status, replies }`.

- [ ] **Step 1: Escribir el test (falla primero)**

Crea `assets/review/tests/local-store.test.js`:

```js
import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { LocalStorageStore } from '../local-store.js';

function memStorage() {
  const m = new Map();
  return {
    getItem: (k) => (m.has(k) ? m.get(k) : null),
    setItem: (k, v) => m.set(k, v),
    removeItem: (k) => m.delete(k),
  };
}

let store;
beforeEach(() => { store = new LocalStorageStore(memStorage(), 'bno-review'); });

const base = { projectId: 'anahuac-2026', page: 'psicologia.html', selector: '#dos', fingerprint: {}, name: 'Karen', comment: 'Cambiar este texto' };

test('create asigna id, createdAt, status pendiente y replies vacío', async () => {
  const c = await store.create({ ...base });
  assert.ok(c.id);
  assert.ok(c.createdAt);
  assert.equal(c.status, 'pendiente');
  assert.deepEqual(c.replies, []);
});

test('list devuelve los comentarios de esa página', async () => {
  await store.create({ ...base });
  await store.create({ ...base, comment: 'Otro' });
  const list = await store.list('anahuac-2026', 'psicologia.html');
  assert.equal(list.length, 2);
});

test('list de otra página está vacío', async () => {
  await store.create({ ...base });
  assert.deepEqual(await store.list('anahuac-2026', 'medicina.html'), []);
});

test('update cambia el estado', async () => {
  const c = await store.create({ ...base });
  const updated = await store.update('anahuac-2026', 'psicologia.html', c.id, { status: 'resuelto' });
  assert.equal(updated.status, 'resuelto');
  const list = await store.list('anahuac-2026', 'psicologia.html');
  assert.equal(list[0].status, 'resuelto');
});

test('update devuelve null si el id no existe', async () => {
  assert.equal(await store.update('anahuac-2026', 'psicologia.html', 'nope', { status: 'resuelto' }), null);
});
```

- [ ] **Step 2: Correr el test y verificar que falla**

Run: `npm test`
Expected: FAIL — `Cannot find module '../local-store.js'`.

- [ ] **Step 3: Implementar el store**

Crea `assets/review/local-store.js`:

```js
// Adaptador de almacenamiento en localStorage. Implementa la interfaz ReviewStore.
// En fase 2 se añade SupabaseStore con la MISMA interfaz y se elige en config.
function uuid() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) return crypto.randomUUID();
  return 'c-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8);
}

export class LocalStorageStore {
  constructor(storage, namespace) {
    this.storage = storage || (typeof localStorage !== 'undefined' ? localStorage : null);
    this.namespace = namespace || 'bno-review';
  }

  _key(projectId, page) {
    return `${this.namespace}:${projectId}:${page}`;
  }

  async list(projectId, page) {
    const raw = this.storage.getItem(this._key(projectId, page));
    return raw ? JSON.parse(raw) : [];
  }

  async create(comment) {
    const list = await this.list(comment.projectId, comment.page);
    const full = {
      ...comment,
      id: comment.id || uuid(),
      createdAt: comment.createdAt || new Date().toISOString(),
      status: comment.status || 'pendiente',
      replies: comment.replies || [],
    };
    list.push(full);
    this.storage.setItem(this._key(comment.projectId, comment.page), JSON.stringify(list));
    return full;
  }

  async update(projectId, page, id, patch) {
    const list = await this.list(projectId, page);
    const idx = list.findIndex((c) => c.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...patch };
    this.storage.setItem(this._key(projectId, page), JSON.stringify(list));
    return list[idx];
  }
}
```

- [ ] **Step 4: Correr los tests y verificar que pasan**

Run: `npm test`
Expected: PASS (gate + anchor + selector + store).

- [ ] **Step 5: Commit**

```bash
git add assets/review/local-store.js assets/review/tests/local-store.test.js
git commit -m "feat(review): almacenamiento en localStorage con interfaz intercambiable"
```

---

### Task 5: UI base — Shadow DOM, botón "Comentar", modo selección y formulario

**Files:**
- Create: `assets/review/review.css`
- Create: `assets/review/ui.js`
- Create: `assets/review/review.js` (entry — boot mínimo para poder verificar en navegador)

**Interfaces:**
- Consumes: `resolveAnchor` (Task 2), `buildSelector`/`buildFingerprint` (Task 3), `LocalStorageStore` (Task 4), `CONFIG` (Task 1), `shouldActivate` (Task 1).
- Produces (desde `ui.js`): clase `ReviewUI`
  - `constructor({ store, config, token, page })`
  - `mount(): void` — crea el host con Shadow DOM, inyecta CSS y el botón "Comentar".
  - `setMode(on: boolean): void` — activa/desactiva el modo selección (hover outline + captura de clic).
  - Interno: al hacer clic en modo selección → `resolveAnchor` → `openForm(anchorEl)`; al guardar → `store.create(...)` y cierra el formulario.
  - Deja un hook `this.onCommentCreated(comment)` (no-op por defecto) que Task 6 usará para pintar el pin.

Esta task se verifica en navegador (Shadow DOM no se presta a prueba unitaria útil).

- [ ] **Step 1: Crear los estilos de la UI**

Crea `assets/review/review.css` (se inyecta dentro del Shadow DOM, por eso puede usar `:host` y no colisiona con el sitio):

```css
:host { all: initial; }
* { box-sizing: border-box; font-family: system-ui, -apple-system, Roboto, sans-serif; }

.bnor-fab {
  position: fixed; right: 20px; bottom: 20px; z-index: 2147483000;
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 16px; border: 0; border-radius: 999px; cursor: pointer;
  background: #1f2937; color: #fff; font-size: 14px; font-weight: 600;
  box-shadow: 0 4px 14px rgba(0,0,0,.25);
}
.bnor-fab[data-active="true"] { background: #2563eb; }

.bnor-hover-outline {
  position: fixed; z-index: 2147482000; pointer-events: none;
  border: 2px solid #2563eb; background: rgba(37,99,235,.08); border-radius: 4px;
  transition: all .05s linear;
}

.bnor-form {
  position: fixed; z-index: 2147483001; width: 280px; max-width: calc(100vw - 24px);
  background: #fff; color: #111; border-radius: 10px; padding: 14px;
  box-shadow: 0 10px 30px rgba(0,0,0,.28); border: 1px solid #e5e7eb;
}
.bnor-form h3 { margin: 0 0 8px; font-size: 13px; color: #6b7280; font-weight: 600; }
.bnor-form input, .bnor-form textarea {
  width: 100%; padding: 8px; margin-bottom: 8px; border: 1px solid #d1d5db;
  border-radius: 6px; font-size: 14px;
}
.bnor-form textarea { min-height: 72px; resize: vertical; }
.bnor-row { display: flex; gap: 8px; justify-content: flex-end; }
.bnor-btn { padding: 8px 12px; border-radius: 6px; border: 0; cursor: pointer; font-size: 13px; font-weight: 600; }
.bnor-btn--primary { background: #2563eb; color: #fff; }
.bnor-btn--ghost { background: transparent; color: #6b7280; }

.bnor-hidden { display: none !important; }
```

- [ ] **Step 2: Implementar la UI base**

Crea `assets/review/ui.js`:

```js
import { resolveAnchor } from './anchor-resolver.js';
import { buildSelector, buildFingerprint } from './selector-engine.js';

const REVIEWER_KEY = 'bno-review:reviewer-name';

export class ReviewUI {
  constructor({ store, config, token, page }) {
    this.store = store;
    this.config = config;
    this.token = token;
    this.page = page;
    this.mode = false;
    this.onCommentCreated = () => {};
    this._onDocMove = this._onDocMove.bind(this);
    this._onDocClick = this._onDocClick.bind(this);
  }

  mount() {
    const host = document.createElement('div');
    host.id = 'bno-review-root';
    document.body.appendChild(host);
    this.root = host.attachShadow({ mode: 'open' });

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL('./review.css', import.meta.url).href;
    this.root.appendChild(link);

    this.fab = document.createElement('button');
    this.fab.className = 'bnor-fab';
    this.fab.textContent = '💬 Comentar';
    this.fab.addEventListener('click', () => this.setMode(!this.mode));
    this.root.appendChild(this.fab);

    this.outline = document.createElement('div');
    this.outline.className = 'bnor-hover-outline bnor-hidden';
    this.root.appendChild(this.outline);
  }

  setMode(on) {
    this.mode = on;
    this.fab.dataset.active = String(on);
    this.fab.textContent = on ? '✕ Cancelar' : '💬 Comentar';
    if (on) {
      document.addEventListener('mousemove', this._onDocMove, true);
      document.addEventListener('click', this._onDocClick, true);
    } else {
      document.removeEventListener('mousemove', this._onDocMove, true);
      document.removeEventListener('click', this._onDocClick, true);
      this.outline.classList.add('bnor-hidden');
    }
  }

  _fromOverlay(target) {
    // Ignora eventos originados en nuestra propia UI (host en light DOM).
    return target && target.closest && target.closest('#bno-review-root');
  }

  _onDocMove(e) {
    if (this._fromOverlay(e.target)) { this.outline.classList.add('bnor-hidden'); return; }
    const el = resolveAnchor(e.target);
    if (!el || el === document.body) { this.outline.classList.add('bnor-hidden'); return; }
    const r = el.getBoundingClientRect();
    Object.assign(this.outline.style, {
      left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px',
    });
    this.outline.classList.remove('bnor-hidden');
  }

  _onDocClick(e) {
    if (this._fromOverlay(e.target)) return;
    e.preventDefault();
    e.stopPropagation();
    const el = resolveAnchor(e.target);
    if (!el || el === document.body) return;
    this.setMode(false);
    this.openForm(el, e.clientX, e.clientY);
  }

  openForm(el, x, y) {
    const anchor = { selector: buildSelector(el), fingerprint: buildFingerprint(el) };
    const form = document.createElement('div');
    form.className = 'bnor-form';
    const savedName = localStorage.getItem(REVIEWER_KEY) || '';
    form.innerHTML = `
      <h3>Nuevo comentario</h3>
      <input class="bnor-name" placeholder="Tu nombre" value="${savedName.replace(/"/g, '&quot;')}">
      <textarea class="bnor-text" placeholder="Escribe tu comentario…"></textarea>
      <div class="bnor-row">
        <button class="bnor-btn bnor-btn--ghost" data-act="cancel">Cancelar</button>
        <button class="bnor-btn bnor-btn--primary" data-act="save">Guardar</button>
      </div>`;
    const left = Math.min(x, window.innerWidth - 292);
    const top = Math.min(y, window.innerHeight - 200);
    form.style.left = Math.max(12, left) + 'px';
    form.style.top = Math.max(12, top) + 'px';
    this.root.appendChild(form);
    form.querySelector('.bnor-text').focus();

    form.addEventListener('click', async (ev) => {
      const act = ev.target.dataset.act;
      if (act === 'cancel') { form.remove(); return; }
      if (act === 'save') {
        const name = form.querySelector('.bnor-name').value.trim() || 'Anónimo';
        const text = form.querySelector('.bnor-text').value.trim();
        if (!text) { form.querySelector('.bnor-text').focus(); return; }
        localStorage.setItem(REVIEWER_KEY, name);
        const created = await this.store.create({
          projectId: this.config.projectId,
          page: this.page,
          selector: anchor.selector,
          fingerprint: anchor.fingerprint,
          name,
          comment: text,
        });
        form.remove();
        this.onCommentCreated(created);
      }
    });
  }
}
```

- [ ] **Step 3: Implementar el boot mínimo**

Crea `assets/review/review.js`:

```js
import { CONFIG } from './config.js';
import { shouldActivate } from './gate.js';
import { LocalStorageStore } from './local-store.js';
import { ReviewUI } from './ui.js';

function currentPage() {
  const path = window.location.pathname.split('/').pop();
  return path || 'index.html';
}

function boot() {
  const { active, token } = shouldActivate(window.location.search, CONFIG);
  if (!active) return; // footprint cero

  const store = new LocalStorageStore(window.localStorage, CONFIG.namespace);
  const ui = new ReviewUI({ store, config: CONFIG, token, page: currentPage() });
  ui.mount();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}
```

- [ ] **Step 4: Verificar en navegador**

```bash
python3 -m http.server 8000
```

Abre `http://localhost:8000/Inicio.html?review=true&token=bno-interno`. Verifica:
1. Aparece el botón flotante "💬 Comentar" abajo a la derecha; el sitio se ve idéntico.
2. Al hacer clic en el botón, pasa a "✕ Cancelar" (azul) y al mover el mouse aparece un outline azul sobre el elemento significativo (pasa el mouse sobre un texto dentro de un botón → resalta el botón).
3. Al hacer clic en un elemento, se abre el formulario con "Tu nombre" y "Escribe tu comentario…".
4. Escribe nombre + comentario → Guardar. En DevTools → Application → Local Storage, existe la clave `bno-review:anahuac-2026:Inicio.html` con un array de 1 comentario que incluye `selector`, `fingerprint`, `status: "pendiente"`.
5. Abre `http://localhost:8000/Inicio.html` (sin parámetros) → NO aparece el botón ni nada; consola sin errores.

Expected: los 5 puntos se cumplen.

- [ ] **Step 5: Correr la suite y el lint**

Run: `npm test && npm run lint:css` (el lint no cubre `assets/`, pero confirma que no rompiste config).
Expected: PASS de los tests.

- [ ] **Step 6: Commit**

```bash
git add assets/review/review.css assets/review/ui.js assets/review/review.js
git commit -m "feat(review): UI base con Shadow DOM, selección de elemento y formulario"
```

---

### Task 6: Pins — pintar, anclar, reposicionar y cambiar estado

**Files:**
- Create: `assets/review/pin-layer.js`
- Modify: `assets/review/review.css` (estilos de pin y tarjeta)
- Modify: `assets/review/ui.js` (instanciar PinLayer, enganchar `onCommentCreated`, repintar al cargar)

**Interfaces:**
- Consumes: `resolveElement` (Task 3), `store.list`/`store.update` (Task 4).
- Produces (desde `pin-layer.js`): clase `PinLayer`
  - `constructor({ root, store, config, page })` — `root` es el shadow root.
  - `renderAll(): Promise<void>` — `store.list()` y pinta un pin por comentario.
  - `addPin(comment): void` — pinta un pin y engancha su reposición.
  - Interno: posiciona cada pin con `resolveElement(...).getBoundingClientRect()`; si no resuelve, marca el pin como "no localizado" anclado a su sección; reposiciona en `resize`/`scroll` con `requestAnimationFrame`.
  - Al hacer clic en un pin, abre una tarjeta con el comentario y botones de estado (Pendiente/En proceso/Resuelto) → `store.update(...)`.

Se verifica en navegador.

- [ ] **Step 1: Añadir estilos de pin y tarjeta a review.css**

Añade al final de `assets/review/review.css`:

```css
.bnor-pin {
  position: fixed; z-index: 2147482500; width: 26px; height: 26px; margin: -13px 0 0 -13px;
  border-radius: 50% 50% 50% 2px; cursor: pointer; border: 2px solid #fff;
  background: #f59e0b; color: #fff; font-size: 12px; font-weight: 700;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,.3);
}
.bnor-pin[data-status="en-proceso"] { background: #3b82f6; }
.bnor-pin[data-status="resuelto"] { background: #10b981; }
.bnor-pin[data-lost="true"] { outline: 2px dashed #ef4444; outline-offset: 2px; }

.bnor-card {
  position: fixed; z-index: 2147483002; width: 300px; max-width: calc(100vw - 24px);
  background: #fff; color: #111; border-radius: 10px; padding: 14px;
  box-shadow: 0 10px 30px rgba(0,0,0,.28); border: 1px solid #e5e7eb;
}
.bnor-card .bnor-author { font-weight: 700; font-size: 14px; }
.bnor-card .bnor-date { color: #9ca3af; font-size: 11px; margin-bottom: 8px; }
.bnor-card .bnor-body { font-size: 14px; white-space: pre-wrap; margin-bottom: 10px; }
.bnor-card .bnor-lost { color: #ef4444; font-size: 11px; margin-bottom: 8px; }
.bnor-states { display: flex; gap: 6px; }
.bnor-state { flex: 1; padding: 6px; border: 1px solid #d1d5db; border-radius: 6px; background: #fff; cursor: pointer; font-size: 11px; }
.bnor-state[aria-pressed="true"] { border-color: #2563eb; color: #2563eb; font-weight: 700; }
```

- [ ] **Step 2: Implementar la capa de pins**

Crea `assets/review/pin-layer.js`:

```js
import { resolveElement } from './selector-engine.js';

const STATES = [
  { key: 'pendiente', label: 'Pendiente' },
  { key: 'en-proceso', label: 'En proceso' },
  { key: 'resuelto', label: 'Resuelto' },
];

export class PinLayer {
  constructor({ root, store, config, page }) {
    this.root = root;
    this.store = store;
    this.config = config;
    this.page = page;
    this.pins = []; // { comment, el (target), pinEl }
    this._raf = null;
    this._reposition = this._reposition.bind(this);
    window.addEventListener('resize', this._scheduleReposition.bind(this), { passive: true });
    window.addEventListener('scroll', this._scheduleReposition.bind(this), { passive: true, capture: true });
  }

  async renderAll() {
    const list = await this.store.list(this.config.projectId, this.page);
    list.forEach((c, i) => this.addPin(c, i + 1));
  }

  addPin(comment, number) {
    const target = resolveElement(comment, document);
    const pinEl = document.createElement('button');
    pinEl.className = 'bnor-pin';
    pinEl.dataset.status = comment.status;
    pinEl.dataset.lost = String(!target);
    pinEl.textContent = number != null ? String(number) : '•';
    pinEl.addEventListener('click', (e) => { e.stopPropagation(); this.openCard(comment, pinEl); });
    this.root.appendChild(pinEl);
    // Si no resolvió, ancla a la sección para no perderlo.
    const anchorEl = target || (comment.fingerprint && comment.fingerprint.sectionId
      ? document.getElementById(comment.fingerprint.sectionId) : null);
    const entry = { comment, el: anchorEl, pinEl, lost: !target };
    this.pins.push(entry);
    this._place(entry);
  }

  _place(entry) {
    if (!entry.el) { entry.pinEl.style.display = 'none'; return; }
    const r = entry.el.getBoundingClientRect();
    entry.pinEl.style.left = (r.left + Math.min(r.width, 14)) + 'px';
    entry.pinEl.style.top = (r.top + 12) + 'px';
  }

  _scheduleReposition() {
    if (this._raf) return;
    this._raf = requestAnimationFrame(this._reposition);
  }

  _reposition() {
    this._raf = null;
    this.pins.forEach((entry) => this._place(entry));
  }

  openCard(comment, pinEl) {
    const existing = this.root.querySelector('.bnor-card');
    if (existing) existing.remove();
    const card = document.createElement('div');
    card.className = 'bnor-card';
    const date = new Date(comment.createdAt).toLocaleString('es-MX');
    card.innerHTML = `
      <div class="bnor-author">${escapeHtml(comment.name)}</div>
      <div class="bnor-date">${date}</div>
      <div class="bnor-body">${escapeHtml(comment.comment)}</div>
      <div class="bnor-states">
        ${STATES.map((s) => `<button class="bnor-state" data-state="${s.key}" aria-pressed="${s.key === comment.status}">${s.label}</button>`).join('')}
      </div>`;
    const r = pinEl.getBoundingClientRect();
    card.style.left = Math.max(12, Math.min(r.left, window.innerWidth - 312)) + 'px';
    card.style.top = Math.max(12, Math.min(r.bottom + 8, window.innerHeight - 160)) + 'px';
    this.root.appendChild(card);

    card.addEventListener('click', async (ev) => {
      const st = ev.target.dataset.state;
      if (!st) return;
      const updated = await this.store.update(this.config.projectId, this.page, comment.id, { status: st });
      if (updated) {
        comment.status = st;
        pinEl.dataset.status = st;
        card.querySelectorAll('.bnor-state').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.state === st)));
      }
    });

    const closeOnOutside = (ev) => {
      if (!ev.target.closest || !ev.target.closest('#bno-review-root')) { card.remove(); document.removeEventListener('click', closeOnOutside, true); }
    };
    setTimeout(() => document.addEventListener('click', closeOnOutside, true), 0);
  }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
```

- [ ] **Step 3: Enganchar PinLayer en ui.js**

En `assets/review/ui.js`, añade el import al inicio:

```js
import { PinLayer } from './pin-layer.js';
```

Y al final de `mount()`, después de crear `this.outline`, añade:

```js
    this.pinLayer = new PinLayer({ root: this.root, store: this.store, config: this.config, page: this.page });
    this.onCommentCreated = (comment) => this.pinLayer.addPin(comment, this.pinLayer.pins.length + 1);
    this.pinLayer.renderAll();
```

- [ ] **Step 4: Verificar en navegador**

```bash
python3 -m http.server 8000
```

Abre `http://localhost:8000/Inicio.html?review=true&token=bno-interno`. Verifica:
1. Los comentarios creados en la Task 5 aparecen como **pins numerados** anclados sobre sus elementos.
2. Crear un comentario nuevo pinta su pin inmediatamente.
3. **Redimensiona la ventana** y cambia a vista móvil en DevTools → los pins se recolocan sobre sus elementos (no quedan en coordenadas fijas).
4. **Recarga** la página con el parámetro → los pins reaparecen sobre sus elementos.
5. Clic en un pin → abre la tarjeta con nombre, fecha, texto y los 3 estados; al elegir "Resuelto" el pin cambia a verde y persiste tras recargar.
6. En Local Storage, el comentario refleja `status: "resuelto"`.

Expected: los 6 puntos se cumplen.

- [ ] **Step 5: Correr la suite**

Run: `npm test`
Expected: PASS (sin regresiones en los módulos puros).

- [ ] **Step 6: Commit**

```bash
git add assets/review/pin-layer.js assets/review/review.css assets/review/ui.js
git commit -m "feat(review): pins anclados con reposición y cambio de estado"
```

---

### Task 7: Activar el módulo en las páginas del sitio

**Files:**
- Modify (añadir 1 línea antes de `</body>`): `Inicio.html`, `oferta-academica.html`, `proceso-de-admision.html`, `apoyos-economicos.html`, `foraneos.html`, `costos-becas.html`, `fechas-de-examenes.html`, `area-ciencias-de-la-salud.html`, `psicologia.html`, `medicina.html`, `nutricion.html`, `gastronomia.html`, `comunicacion.html`

**Interfaces:**
- Consumes: `assets/review/review.js` (Task 5).
- Produces: cada página carga el módulo, que se auto-inhibe sin el parámetro.

- [ ] **Step 1: Añadir el include a cada página**

En cada archivo de la lista, inserta **justo antes de `</body>`** exactamente esta línea (mismo indentado que el HTML circundante):

```html
    <script type="module" src="assets/review/review.js"></script>
```

Nota: los `<script type="module">` se difieren por defecto; no interfiere con el `script.js` de producción existente.

- [ ] **Step 2: Verificar que las 13 páginas tienen exactamente un include**

Run:
```bash
grep -c 'assets/review/review.js' Inicio.html oferta-academica.html proceso-de-admision.html apoyos-economicos.html foraneos.html costos-becas.html fechas-de-examenes.html area-ciencias-de-la-salud.html psicologia.html medicina.html nutricion.html gastronomia.html comunicacion.html
```
Expected: cada archivo reporta `1`.

- [ ] **Step 3: Verificar en navegador que no hay footprint sin activar**

```bash
python3 -m http.server 8000
```
Abre 3 páginas sin parámetros (`Inicio.html`, `psicologia.html`, `oferta-academica.html`): el sitio se ve y funciona idéntico, sin botón de review, consola sin errores. Luego abre `psicologia.html?review=true&token=cliente-anahuac` y confirma que el botón aparece y puedes comentar (los pins de `psicologia.html` son independientes de los de `Inicio.html`).

Expected: sin footprint sin parámetro; funcional con el parámetro; comentarios namespaced por página.

- [ ] **Step 4: Commit**

```bash
git add Inicio.html oferta-academica.html proceso-de-admision.html apoyos-economicos.html foraneos.html costos-becas.html fechas-de-examenes.html area-ciencias-de-la-salud.html psicologia.html medicina.html nutricion.html gastronomia.html comunicacion.html
git commit -m "feat(review): activar la capa de revisión en las páginas del sitio"
```

---

### Task 8: Documentación del módulo y registro en memoria

**Files:**
- Create: `assets/review/README.md`
- Create: `docs/modules/review-overlay.md`
- Modify: `MEMORY.md`

**Interfaces:**
- Consumes: todo lo anterior.
- Produces: documentación para replicar el módulo y contrato del módulo.

- [ ] **Step 1: Escribir el README de replicación**

Crea `assets/review/README.md`:

```markdown
# BnO Review — capa de revisión visual (drop-in)

Comentarios visuales anclados a elementos del DOM, activados con
`?review=true&token=XXX`. Sin backend en fase 1 (persiste en `localStorage`).

## Cómo replicar en otro sitio estático de Black & Orange

1. Copia la carpeta `assets/review/` completa al otro proyecto.
2. Edita `assets/review/config.js`:
   - `projectId`: identificador único del proyecto.
   - `tokens`: uno o más tokens de revisión (rotables).
3. Añade antes de `</body>` en cada página:
   `<script type="module" src="assets/review/review.js"></script>`
   (ajusta la ruta si `assets/` no está en la raíz).
4. Abre `pagina.html?review=true&token=<uno de tus tokens>`.

## Migrar a persistencia compartida (fase 2)

Implementa `SupabaseStore` con la misma interfaz que `LocalStorageStore`
(`list`, `create`, `update`) y selecciónalo desde `config.storage`.

## Pruebas

`npm test` corre la lógica pura (gate, anchor, selector, store) con `node --test`.
```

- [ ] **Step 2: Escribir el contrato del módulo**

Crea `docs/modules/review-overlay.md`:

```markdown
# Módulo: review-overlay (capa de revisión visual)

Herramienta de tooling interno (NO es un componente del design system). Vive
aislada en `assets/review/` y no toca tokens, componentes ni el diseño del sitio.

## Responsabilidad
Permitir comentarios visuales anclados a elementos estables del DOM durante la
revisión con clientes, activados por `?review=true&token=XXX`.

## Contrato
- **Activación:** footprint cero salvo `?review=true` + token en `config.tokens`.
- **Aislamiento:** toda la UI en Shadow DOM; prefijo de clases `bnor-`.
- **Anclaje:** `selector` + `fingerprint` (nunca coordenadas); reposición en resize/scroll.
- **Almacenamiento:** interfaz `ReviewStore` (`list`, `create`, `update`).
  Fase 1: `LocalStorageStore`. Fase 2: `SupabaseStore`.
- **Estados:** `pendiente | en-proceso | resuelto`.

## Fuera de alcance (fase 1)
Panel `/admin` global, persistencia compartida (Supabase), autenticación real.

## Pruebas
`npm test` (node --test + jsdom) cubre la lógica pura. La UI se verifica en navegador.
```

- [ ] **Step 3: Registrar la decisión en MEMORY.md**

Añade una entrada en `MEMORY.md` (respetando el formato del archivo) que registre: se creó el módulo `assets/review/` (BnO Review) para revisión visual con clientes; fase 1 en localStorage; diseñado drop-in para replicar en otros proyectos B&O; destino final Supabase (fase 2). Fecha 2026-09-10.

- [ ] **Step 4: Commit**

```bash
git add assets/review/README.md docs/modules/review-overlay.md MEMORY.md
git commit -m "docs(review): contrato del módulo, guía de replicación y registro en memoria"
```

---

## Self-Review (verificación del plan contra el spec)

**Cobertura del spec:**
- Activación por `?review=true&token` → Task 1 (gate) + Task 5/7. ✓
- Footprint cero sin parámetro → Task 5 (boot) + Task 7 (verificación). ✓
- No iframe / no proxy / página real → toda la arquitectura es capa cliente sobre la página. ✓
- Selección del elemento significativo → Task 2. ✓
- Anclaje estable sin coordenadas (selector + fingerprint) + reposición → Task 3 + Task 6. ✓
- Modelo de comentario (nombre, comentario, página, selector, fecha, estado, id) → Task 4. ✓
- Estados pendiente/en-proceso/resuelto → Task 4 + Task 6. ✓
- Persistencia localStorage con interfaz intercambiable → Task 4. ✓
- Aislamiento Shadow DOM + prefijo `bnor-` → Task 5/6. ✓
- Módulo drop-in replicable (config.js, namespacing, README) → Tasks 1, 4, 8. ✓
- Mobile por tap → los handlers usan `click` (dispara en tap); el outline usa mousemove (desktop). El tap en móvil selecciona vía `click`. ✓ (limitación: sin hover-outline en móvil, aceptable en fase 1).
- Un único include por página → Task 7. ✓
- Admin / Supabase / auth → correctamente fuera de alcance (fase 2). ✓

**Consistencia de tipos/nombres:** `store.list/create/update`, `resolveAnchor`, `buildSelector`, `buildFingerprint`, `resolveElement`, `ReviewUI`, `PinLayer`, `CONFIG`, `shouldActivate` — usados con la misma firma en todas las tasks. `update(projectId, page, id, patch)` consistente entre Task 4 y Task 6. ✓

**Placeholders:** sin TODOs ni "implementar después"; todo el código está escrito. ✓
