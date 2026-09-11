// Smoke test con jsdom: sustituye la verificación manual en navegador del
// Step 4 del brief (ver ruling del controlador en task-5-report.md). Prueba
// que el Shadow DOM monta y que el toggle de modo no truena, sin depender de
// layout real (getBoundingClientRect de jsdom siempre da ceros).
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';

let dom;
let ReviewUI;
let CONFIG;

before(async () => {
  dom = new JSDOM('<!doctype html><html><body></body></html>', {
    url: 'http://localhost/test.html',
  });
  global.window = dom.window;
  global.document = dom.window.document;
  global.localStorage = dom.window.localStorage;
  global.requestAnimationFrame = (cb) => setTimeout(cb, 0);

  ({ ReviewUI } = await import('../ui.js'));
  ({ CONFIG } = await import('../config.js'));
});

after(() => {
  delete global.window;
  delete global.document;
  delete global.localStorage;
  delete global.requestAnimationFrame;
});

function fakeStore() {
  return { list: async () => [], create: async (c) => c };
}

test('mount() crea #bno-review-root con Shadow DOM y el fab "Comentar"', () => {
  const ui = new ReviewUI({ store: fakeStore(), config: CONFIG, token: 'bno-interno', page: 'test.html' });
  ui.mount();

  const host = document.getElementById('bno-review-root');
  assert.ok(host, 'debe existir #bno-review-root en el light DOM');
  assert.ok(host.shadowRoot, 'el host debe tener shadowRoot');

  const fab = host.shadowRoot.querySelector('.bnor-fab');
  assert.ok(fab, 'debe existir el botón .bnor-fab dentro del shadow root');
  assert.match(fab.textContent, /Comentar/);
});

test('setMode(true/false) alterna dataset.active sin lanzar errores', () => {
  const ui = new ReviewUI({ store: fakeStore(), config: CONFIG, token: 'bno-interno', page: 'test.html' });
  ui.mount();

  ui.setMode(true);
  assert.equal(ui.fab.dataset.active, 'true');

  ui.setMode(false);
  assert.equal(ui.fab.dataset.active, 'false');
});
