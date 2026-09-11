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
