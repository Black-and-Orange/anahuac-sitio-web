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
