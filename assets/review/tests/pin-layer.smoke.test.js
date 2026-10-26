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
  const deleteCalls = [];
  const replyCalls = [];
  return {
    updateCalls,
    deleteCalls,
    replyCalls,
    reply: async (parent, { name, text }) => {
      replyCalls.push({ parentId: parent.id, name, text });
      return { id: 'child-' + replyCalls.length, parentId: parent.id, name, comment: text };
    },
    list: async () => comments,
    update: async (projectId, page, id, patch) => {
      updateCalls.push({ projectId, page, id, patch });
      const c = comments.find((x) => x.id === id);
      if (!c) return null;
      Object.assign(c, patch);
      return c;
    },
    delete: async (projectId, page, id) => {
      deleteCalls.push({ projectId, page, id });
      return true;
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

test('dos comentarios sobre el mismo elemento se despliegan en abanico (posiciones distintas)', async () => {
  const root = makeRoot();
  const comments = [
    { id: 'a1', name: 'Ana', comment: 'uno', status: 'pendiente', createdAt: new Date().toISOString(), selector: '#p1', fingerprint: { sectionId: 's1', tag: 'p', textHash: '0', siblingIndex: 1 } },
    { id: 'a2', name: 'Beto', comment: 'dos', status: 'pendiente', createdAt: new Date().toISOString(), selector: '#p1', fingerprint: { sectionId: 's1', tag: 'p', textHash: '0', siblingIndex: 1 } },
  ];
  const pinLayer = new PinLayer({ root, store: fakeStore(comments), config: CONFIG, page: 'test.html' });
  await pinLayer.renderAll();

  const e1 = pinLayer.pins.find((p) => p.comment.id === 'a1');
  const e2 = pinLayer.pins.find((p) => p.comment.id === 'a2');
  assert.equal(e1.el, e2.el, 'ambos anclan al mismo elemento');
  assert.notEqual(e1.pinEl.style.left, e2.pinEl.style.left, 'los pins no deben quedar en la misma posición');
  assert.equal(e2.pinEl.style.left, '22px', 'el segundo pin sobre el mismo elemento se desplaza 22px');
});

test('la tarjeta muestra las respuestas del equipo (visibles para el cliente)', async () => {
  const root = makeRoot();
  const comments = [
    { id: 'r1', name: 'Ana', comment: 'cambiar texto', status: 'en-proceso', createdAt: new Date().toISOString(), selector: '#p1', fingerprint: { sectionId: 's1', tag: 'p' }, replies: [{ name: 'Equipo', text: 'Ya quedó listo', createdAt: new Date().toISOString() }] },
  ];
  const pinLayer = new PinLayer({ root, store: fakeStore(comments), config: CONFIG, page: 'test.html' });
  await pinLayer.renderAll();
  const entry = pinLayer.pins.find((p) => p.comment.id === 'r1');
  pinLayer.openCard(entry.comment, entry.pinEl);

  const card = root.querySelector('.bnor-card');
  const reply = card.querySelector('.bnor-reply');
  assert.ok(reply, 'debe renderizar el hilo de respuestas');
  assert.match(reply.textContent, /Ya quedó listo/);
});

test('la tarjeta muestra "Eliminar" en cualquier comentario (no solo los propios) y lo borra', async () => {
  const root = makeRoot();
  const comments = [
    { id: 'ajeno', name: 'Maria P', comment: 'comentario de otra persona', status: 'pendiente', createdAt: new Date().toISOString(), selector: '#p1', fingerprint: { sectionId: 's1', tag: 'p' } },
  ];
  const store = fakeStore(comments);
  // NO se marca como "mío": aun así debe poder borrarse desde el front.
  dom.window.localStorage.removeItem('bno-review:mine');
  dom.window.confirm = () => true;

  const pinLayer = new PinLayer({ root, store, config: CONFIG, page: 'test.html' });
  await pinLayer.renderAll();
  const entry = pinLayer.pins.find((p) => p.comment.id === 'ajeno');
  pinLayer.openCard(entry.comment, entry.pinEl);

  const card = root.querySelector('.bnor-card');
  const del = card.querySelector('[data-act="delete"]');
  assert.ok(del, 'debe mostrar el botón Eliminar aunque el comentario no sea propio');

  del.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
  await new Promise((resolve) => setTimeout(resolve, 0));

  assert.equal(store.deleteCalls.length, 1, 'debe llamar a store.delete');
  assert.equal(store.deleteCalls[0].id, 'ajeno');
  assert.equal(pinLayer.pins.find((p) => p.comment.id === 'ajeno'), undefined, 'debe quitar el pin borrado');
});

test('con confirm() cancelado NO borra', async () => {
  const root = makeRoot();
  const comments = [
    { id: 'x1', name: 'Ana', comment: 'no borrar', status: 'pendiente', createdAt: new Date().toISOString(), selector: '#p1', fingerprint: { sectionId: 's1', tag: 'p' } },
  ];
  const store = fakeStore(comments);
  dom.window.confirm = () => false;

  const pinLayer = new PinLayer({ root, store, config: CONFIG, page: 'test.html' });
  await pinLayer.renderAll();
  const entry = pinLayer.pins.find((p) => p.comment.id === 'x1');
  pinLayer.openCard(entry.comment, entry.pinEl);

  root.querySelector('[data-act="delete"]').dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
  await new Promise((resolve) => setTimeout(resolve, 0));

  assert.equal(store.deleteCalls.length, 0, 'no debe llamar a store.delete si se cancela');
  assert.ok(pinLayer.pins.find((p) => p.comment.id === 'x1'), 'el pin debe seguir en la página');
  dom.window.confirm = () => true;
});

test('marcar como listo guarda status=resuelto, cierra la tarjeta y quita el pin de la página', async () => {
  const root = makeRoot();
  const comments = [
    { id: 't1', name: 'Ana', comment: 'ajustar espaciado', status: 'pendiente', createdAt: new Date().toISOString(), selector: '#p1', fingerprint: { sectionId: 's1', tag: 'p' } },
  ];
  const store = fakeStore(comments);
  const pinLayer = new PinLayer({ root, store, config: CONFIG, page: 'test.html' });
  await pinLayer.renderAll();
  const entry = pinLayer.pins.find((p) => p.comment.id === 't1');
  pinLayer.openCard(entry.comment, entry.pinEl);

  const card = root.querySelector('.bnor-card');
  const mark = card.querySelector('[data-act="mark-done"]');
  assert.ok(mark, 'debe mostrar el botón de marcar como listo');
  assert.match(mark.textContent, /Marcar como listo/);

  mark.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
  await new Promise((resolve) => setTimeout(resolve, 0));

  assert.equal(store.updateCalls.length, 1, 'debe llamar a store.update');
  assert.deepEqual(store.updateCalls[0].patch, { status: 'resuelto' });
  assert.equal(root.querySelector('.bnor-card'), null, 'debe cerrar la tarjeta');
  assert.equal(pinLayer.pins.find((p) => p.comment.id === 't1'), undefined, 'debe quitar el pin de la página');
  assert.equal(root.querySelector('.bnor-pin'), null, 'no debe quedar ningún pin visible');
});

test('renderAll() no pinta los comentarios ya resueltos', async () => {
  const root = makeRoot();
  const comments = [
    { id: 'pend', name: 'Ana', comment: 'pendiente', status: 'pendiente', createdAt: new Date().toISOString(), selector: '#p1', fingerprint: { sectionId: 's1', tag: 'p' } },
    { id: 'res', name: 'Beto', comment: 'ya resuelto', status: 'resuelto', createdAt: new Date().toISOString(), selector: '#p1', fingerprint: { sectionId: 's1', tag: 'p' } },
  ];
  const pinLayer = new PinLayer({ root, store: fakeStore(comments), config: CONFIG, page: 'test.html' });
  await pinLayer.renderAll();

  assert.equal(pinLayer.pins.length, 1, 'solo debe pintar el no resuelto');
  assert.ok(pinLayer.pins.find((p) => p.comment.id === 'pend'), 'debe pintar el pendiente');
  assert.equal(pinLayer.pins.find((p) => p.comment.id === 'res'), undefined, 'no debe pintar el resuelto');
});

test('responder desde la tarjeta llama a store.reply y muestra la respuesta nueva', async () => {
  const root = makeRoot();
  const comments = [
    { id: 'p1', name: 'Ana', comment: 'texto a revisar', status: 'pendiente', createdAt: new Date().toISOString(), selector: '#p1', fingerprint: { sectionId: 's1', tag: 'p' }, replies: [] },
  ];
  const store = fakeStore(comments);
  const pinLayer = new PinLayer({ root, store, config: CONFIG, page: 'test.html' });
  await pinLayer.renderAll();
  const entry = pinLayer.pins.find((p) => p.comment.id === 'p1');
  pinLayer.openCard(entry.comment, entry.pinEl);

  let card = root.querySelector('.bnor-card');
  card.querySelector('.bnor-reply-input').value = 'de acuerdo, lo cambio';
  card.querySelector('[data-act="reply"]').dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }));
  await new Promise((resolve) => setTimeout(resolve, 30)); // deja que el re-render y sus timers de 0ms se vacíen

  assert.equal(store.replyCalls.length, 1, 'debe llamar a store.reply');
  assert.equal(store.replyCalls[0].text, 'de acuerdo, lo cambio');
  assert.equal(store.replyCalls[0].parentId, 'p1');
  card = root.querySelector('.bnor-card');
  assert.match(card.textContent, /de acuerdo, lo cambio/, 'la respuesta debe verse en el hilo');
});
