// Smoke test con jsdom para PinLayer: sustituye la verificación manual en
// navegador del Step 4 del brief (ver ruling del controlador). Prueba que
// renderAll() pinta un pin anclado por comentario, que un comentario cuyo
// selector/fingerprint no resuelve queda marcado como "perdido", que la
// tarjeta es de solo lectura (badge de estado, sin botones de edición ni
// llamadas a store.update), y que focusComment() resalta el pin
// correspondiente. jsdom siempre da rects en cero, así que no se asume nada
// sobre coordenadas: solo estructura y estado.
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { JSDOM } from 'jsdom';

let dom;
let PinLayer;
let CONFIG;

before(async () => {
  dom = new JSDOM(
    '<!doctype html><html><body><section id="s1"><p id="p1">Hola</p></section></body></html>',
    { url: 'http://localhost/test.html' },
  );
  global.window = dom.window;
  global.document = dom.window.document;
  global.requestAnimationFrame = (cb) => setTimeout(cb, 0);
  global.cancelAnimationFrame = (id) => clearTimeout(id);

  ({ PinLayer } = await import('../pin-layer.js'));
  ({ CONFIG } = await import('../config.js'));
});

after(() => {
  delete global.window;
  delete global.document;
  delete global.requestAnimationFrame;
  delete global.cancelAnimationFrame;
});

function fakeStore(comments) {
  const updateCalls = [];
  return {
    updateCalls,
    list: async () => comments,
    update: async (projectId, page, id, patch) => {
      updateCalls.push({ projectId, page, id, patch });
      const c = comments.find((x) => x.id === id);
      if (!c) return null;
      Object.assign(c, patch);
      return c;
    },
  };
}

function makeComments() {
  return [
    {
      id: 'c1',
      name: 'Ana',
      comment: 'Hola, revisar este párrafo',
      status: 'pendiente',
      createdAt: new Date().toISOString(),
      selector: '#p1',
      fingerprint: { sectionId: 's1', tag: 'p', textHash: '0', siblingIndex: 1 },
    },
    {
      id: 'c2',
      name: 'Beto',
      comment: 'Este elemento ya no existe',
      status: 'pendiente',
      createdAt: new Date().toISOString(),
      selector: '#no-existe-nunca',
      fingerprint: { sectionId: 'seccion-fantasma', tag: 'div', textHash: 'zzzz', siblingIndex: 99 },
    },
  ];
}

function makeRoot() {
  const host = document.createElement('div');
  document.body.appendChild(host);
  return host.attachShadow({ mode: 'open' });
}

test('renderAll() pinta un pin por comentario y marca "perdido" el que no resuelve', async () => {
  const root = makeRoot();
  const comments = makeComments();
  const store = fakeStore(comments);
  const pinLayer = new PinLayer({ root, store, config: CONFIG, page: 'test.html' });

  await pinLayer.renderAll();

  const pins = root.querySelectorAll('.bnor-pin');
  assert.equal(pins.length, 2, 'debe pintar exactamente un pin por comentario');

  const goodEntry = pinLayer.pins.find((p) => p.comment.id === 'c1');
  const lostEntry = pinLayer.pins.find((p) => p.comment.id === 'c2');
  assert.ok(goodEntry, 'debe existir la entrada del comentario resoluble');
  assert.ok(lostEntry, 'debe existir la entrada del comentario no localizado');

  assert.equal(goodEntry.pinEl.dataset.status, goodEntry.comment.status);
  assert.equal(goodEntry.pinEl.dataset.lost, 'false');
  assert.equal(lostEntry.pinEl.dataset.lost, 'true');
});

test('la tarjeta del pin es de solo lectura: muestra un badge de estado y no llama a store.update', async () => {
  const root = makeRoot();
  const comments = makeComments();
  // store.update lanza si se invoca: la tarjeta ya no debe llamarlo nunca.
  const store = {
    list: async () => comments,
    update: async () => { throw new Error('store.update no debe llamarse desde la tarjeta de solo lectura'); },
  };
  const pinLayer = new PinLayer({ root, store, config: CONFIG, page: 'test.html' });

  await pinLayer.renderAll();
  const goodEntry = pinLayer.pins.find((p) => p.comment.id === 'c1');

  // Equivale al clic en el pin: abre la tarjeta del comentario.
  pinLayer.openCard(goodEntry.comment, goodEntry.pinEl);

  const card = root.querySelector('.bnor-card');
  assert.ok(card, 'debe renderizar la tarjeta');

  const badge = card.querySelector('.bnor-badge');
  assert.ok(badge, 'debe mostrar un badge de estado');
  assert.equal(badge.dataset.status, 'pendiente');
  assert.equal(badge.textContent, 'Pendiente');

  const stateButtons = card.querySelectorAll('.bnor-state');
  assert.equal(stateButtons.length, 0, 'no debe mostrar botones de edición de estado');

  // Cualquier clic dentro de la tarjeta no debe disparar store.update.
  card.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }));
  await new Promise((resolve) => setTimeout(resolve, 0));
});

test('focusComment() resalta el pin correspondiente y hace scroll al elemento', async () => {
  const root = makeRoot();
  const comments = makeComments();
  const store = fakeStore(comments);
  const pinLayer = new PinLayer({ root, store, config: CONFIG, page: 'test.html' });

  await pinLayer.renderAll();
  const goodEntry = pinLayer.pins.find((p) => p.comment.id === 'c1');

  let scrollCalls = 0;
  goodEntry.el.scrollIntoView = () => { scrollCalls += 1; };

  pinLayer.focusComment('c1');

  assert.equal(scrollCalls, 1, 'debe hacer scroll al elemento anclado');
  assert.ok(goodEntry.pinEl.classList.contains('bnor-pin--focus'), 'debe agregar la clase de foco al pin');
});

test('focusComment() con id inexistente no lanza', async () => {
  const root = makeRoot();
  const comments = makeComments();
  const store = fakeStore(comments);
  const pinLayer = new PinLayer({ root, store, config: CONFIG, page: 'test.html' });

  await pinLayer.renderAll();

  assert.doesNotThrow(() => pinLayer.focusComment('no-existe'));
});
