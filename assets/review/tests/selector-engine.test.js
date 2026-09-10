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
