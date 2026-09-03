import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import {
  buildSemanticProfile,
  derivePageUsage,
  discoverModules,
  evaluateCompatibility,
  extractFileEvidence,
  extractHtmlEvidence,
  findSemanticCandidates,
  flattenFields,
  replaceAutoBlock,
  validateRegistry,
} from './hs-catalogo.mjs';

const repoRoot = path.resolve(import.meta.dirname, '..');
const themeRoot = path.join(repoRoot, 'adapters/hubspot/theme');

function tempDir(t) {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'hs-catalogo-'));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  return directory;
}

function write(directory, relativePath, contents) {
  const target = path.join(directory, relativePath);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, contents);
  return target;
}

function digest(directory) {
  const hash = createHash('sha256');
  const visit = (current) => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true }).sort((a, b) => a.name.localeCompare(b.name))) {
      const target = path.join(current, entry.name);
      hash.update(path.relative(directory, target));
      if (entry.isDirectory()) visit(target);
      else hash.update(fs.readFileSync(target));
    }
  };
  visit(directory);
  return hash.digest('hex');
}

function record({
  name,
  family = null,
  capabilities = [],
  variants = [],
  fields = [],
  html = '<section></section>',
  css = { state: 'absent', selectors: [], mediaQueries: [], assets: [] },
  js = { state: 'absent', hooks: [], assets: [] },
  dependencies = { css: [], js: [] },
  pages = [],
  state = 'Approved',
  tier = 'page-specific',
  meta = { global: false, categories: ['BODY_CONTENT'], content_types: ['SITE_PAGE'] },
} = {}) {
  return {
    name,
    registry: {
      estado: state,
      tier,
      familia: family,
      capacidades: capabilities,
      variantes: variants,
      relaciones: [],
      notas: '',
      paginas_portal: pages,
    },
    meta,
    fields: flattenFields(fields),
    html: extractHtmlEvidence(html),
    files: {
      css,
      js,
      shared: { css: [], js: [] },
      dependencies: {
        declared: dependencies,
        shared: { css: [], js: [] },
      },
    },
    pages,
  };
}

test('discoverModules descubre únicamente directorios .module, ordenados y con metadata disponible', (t) => {
  const root = tempDir(t);
  write(root, 'zeta.module/meta.json', '{"global":false}');
  write(root, 'alfa.module/meta.json', '{"global":true}');
  write(root, 'archivo.module', 'no es directorio');
  fs.mkdirSync(path.join(root, 'ignorar'));

  const modules = discoverModules(root);

  assert.deepEqual(modules.map(({ name }) => name), ['alfa', 'zeta']);
  assert.deepEqual(modules[0].meta, { global: true });
  assert.equal(modules[0].directory, path.join(root, 'alfa.module'));
});

test('validateRegistry reporta faltantes, huérfanos, enums inválidos y discrepancias tier/global sin autocorregir', () => {
  const modules = [
    { name: 'global-tecnico', meta: { global: true } },
    { name: 'global-arquitectonico', meta: { global: false } },
    { name: 'sin-registro', meta: { global: false } },
  ];
  const registry = {
    'global-tecnico': {
      estado: 'Approved', tier: 'reusable', familia: null, capacidades: [], variantes: [], relaciones: [], notas: '', paginas_portal: [],
    },
    'global-arquitectonico': {
      estado: 'Development', tier: 'global', familia: null, capacidades: [], variantes: [], relaciones: [], notas: '', paginas_portal: [],
    },
    huerfano: {
      estado: 'Inventado', tier: 'otro', familia: null, capacidades: [], variantes: [], relaciones: [], notas: '', paginas_portal: [],
    },
  };

  const result = validateRegistry(modules, registry);

  assert.equal(result.valid, false);
  assert.deepEqual(result.missing, ['sin-registro']);
  assert.deepEqual(result.orphaned, ['huerfano']);
  assert.deepEqual(result.invalidEnums, [
    { module: 'huerfano', field: 'estado', value: 'Inventado' },
    { module: 'huerfano', field: 'tier', value: 'otro' },
  ]);
  assert.deepEqual(result.tierGlobalDiscrepancies, [
    { module: 'global-arquitectonico', tier: 'global', metaGlobal: false },
    { module: 'global-tecnico', tier: 'reusable', metaGlobal: true },
  ]);
  assert.equal(registry['global-tecnico'].tier, 'reusable');
});

test('validateRegistry valida forma, enum y referencias de relaciones con una sola excepción lógica documentada', () => {
  const entry = (relations = []) => ({
    estado: 'Approved', tier: 'reusable', familia: null, capacidades: [], variantes: [],
    relaciones: relations, notas: '', paginas_portal: [],
  });
  const modules = ['apoyos-asesoria', 'admision-cta', 'dudas-contacto'];
  const validRegistry = {
    'apoyos-asesoria': entry([{
      tipo: 'consumido-por',
      referencia: 'admision-asesoria',
      motivo: 'Admisión reutiliza este módulo físico; admision-asesoria no es una carpeta física.',
    }]),
    'admision-cta': entry([{
      tipo: 'consume', referencia: 'dudas-contacto', motivo: 'Consume su contrato editorial.',
    }]),
    'dudas-contacto': entry([{
      tipo: 'reemplaza', referencia: 'admision-cta', motivo: 'Sustitución aprobada para este fixture.',
    }]),
  };

  const valid = validateRegistry(modules, validRegistry);
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.invalidEnums, []);

  const invalidRegistry = structuredClone(validRegistry);
  invalidRegistry['admision-cta'].relaciones = [
    { tipo: 'inventado', referencia: 'dudas-contacto', motivo: 'No permitido.' },
    { tipo: 'candidato', referencia: 'fantasma', motivo: 'No existe.' },
    { tipo: 'candidato', referencia: 'admision-asesoria', motivo: 'Excepción desde propietario incorrecto.' },
    null,
  ];
  const invalid = validateRegistry(modules, invalidRegistry);

  assert.equal(invalid.valid, false);
  assert.ok(invalid.invalidEnums.some(({ field, value }) => field === 'relaciones[0].tipo' && value === 'inventado'));
  assert.ok(invalid.schemaErrors.some(({ field, message }) => field === 'relaciones[1].referencia' && message.includes('fantasma')));
  assert.ok(invalid.schemaErrors.some(({ field, message }) => field === 'relaciones[2].referencia' && message.includes('admision-asesoria')));
  assert.ok(invalid.schemaErrors.some(({ field }) => field === 'relaciones[3]'));
});

test('flattenFields conserva paths completos, occurrence, jerarquía y colisiones reales simplificadas', () => {
  const fields = [
    {
      name: 'grupo_boton1', type: 'group', children: [
        { name: 'texto', type: 'text', required: true, default: 'Primario' },
      ],
    },
    {
      name: 'grupo_boton2', type: 'group', children: [
        { name: 'texto', type: 'text', required: false, default: 'Secundario' },
      ],
    },
    {
      name: 'cards', type: 'group', occurrence: { min: 1, max: 4, default: 2 }, children: [
        { name: 'titulo', type: 'text' },
      ],
    },
  ];

  const flat = flattenFields(fields);
  const byPath = Object.fromEntries(flat.map((field) => [field.path, field]));

  assert.ok(byPath['grupo_boton1.texto']);
  assert.ok(byPath['grupo_boton2.texto']);
  assert.equal(byPath.grupo_boton1.repeater, false);
  assert.equal(byPath.cards.repeater, true);
  assert.deepEqual(byPath.cards.occurrence, { min: 1, max: 4, default: 2 });
  assert.deepEqual(byPath['cards.titulo'].repeaterAncestors, ['cards']);
  assert.deepEqual(byPath['grupo_boton2.texto'].hierarchy, ['grupo_boton2', 'texto']);
  assert.equal(byPath['grupo_boton1.texto'].required, true);
  assert.equal(byPath['grupo_boton2.texto'].default, 'Secundario');
});

test('extractHtmlEvidence ignora comentarios HubL/HTML y extrae estructura, clases, hooks, assets y formularios reales', () => {
  const html = `
    {# Esto no existe: <form id="fantasma" data-fake="yes"><img src="fake.png"></form> #}
    <!-- Tampoco: <aside class="fake" data-hook="fake"></aside> -->
    <section class="feature feature--wide" id="principal" data-controller="tabs">
      <img class="feature__image" src="{{ module.image.src or get_asset_url('../../images/real.jpg') }}" />
      <button data-step="{{ loop.index0 }}">Abrir</button>
      <article class="feature__item{% if loop.index0 >= 4 %} feature__item--hidden{% endif %}"></article>
      <form class="feature__form"><input type="email" /></form>
    </section>`;

  const evidence = extractHtmlEvidence(html);

  assert.deepEqual(evidence.rootElements, ['section']);
  assert.deepEqual(evidence.classes, [
    'feature',
    'feature--wide',
    'feature__form',
    'feature__image',
    'feature__item',
    'feature__item--hidden',
  ]);
  assert.deepEqual(evidence.ids, ['principal']);
  assert.deepEqual(evidence.dataAttributes.map(({ name }) => name), ['data-controller', 'data-step']);
  assert.equal(evidence.forms.htmlCount, 1);
  assert.equal(evidence.forms.hubspotTagCount, 0);
  assert.equal(evidence.forms.operational, true);
  assert.deepEqual(evidence.assets, ['../../images/real.jpg']);
  assert.ok(evidence.hooks.includes('#principal'));
  assert.ok(evidence.hooks.includes('[data-controller]'));
  assert.ok(!evidence.elements.includes('aside'));
});

test('extractHtmlEvidence conserva tags HubL dinámicos, atributos y headings fallback de módulos reales', () => {
  const moduleHtml = fs.readFileSync(path.join(themeRoot, 'modules/apoyos-pasos.module/module.html'), 'utf8');
  const evidence = extractHtmlEvidence(moduleHtml);

  assert.ok(evidence.elements.includes('dynamic'));
  assert.ok(evidence.elementCounts.dynamic >= 5);
  assert.ok(evidence.classes.includes('tagline'));
  assert.ok(evidence.ids.includes('pasos-title'));
  assert.ok(evidence.hooks.includes('#pasos-title'));
  assert.ok(evidence.dynamicTags.some(({ expression, fallbackTags }) => (
    expression === "c.heading_tag|default('h2', true)" && fallbackTags.includes('h2')
  )));
  assert.ok(evidence.dynamicTags.some(({ fallbackTags }) => fallbackTags.includes('h3')));
  assert.ok(evidence.parentChildShape.some((edge) => edge.startsWith('div>dynamic:')));
});

test('extractHtmlEvidence excluye cuerpos macro de la estructura renderizada', () => {
  const evidence = extractHtmlEvidence(`
    {% macro icono(tipo) %}
      <svg class="macro-icon" data-macro-root><path d="M0 0"></path></svg>
    {% endmacro %}
    <section class="render-root" id="contenido">
      <div>{{ icono('ok') }}</div>
    </section>
  `);

  assert.deepEqual(evidence.rootElements, ['section']);
  assert.deepEqual(evidence.rootClasses, ['render-root']);
  assert.deepEqual(evidence.rootIds, ['contenido']);
  assert.deepEqual(evidence.elements, ['div', 'section']);
  assert.equal(evidence.elementCounts.svg, undefined);
  assert.equal(evidence.elementCounts.path, undefined);
  assert.ok(!evidence.hooks.includes('.macro-icon'));
  assert.ok(!evidence.hooks.includes('[data-macro-root]'));
  assert.deepEqual(evidence.parentChildShape, ['section>div:1']);
});

test('smoke de macros reales mantiene section como única raíz renderizada', () => {
  for (const name of ['apoyos-consideraciones', 'admision-siguiente-paso']) {
    const moduleHtml = fs.readFileSync(path.join(themeRoot, `modules/${name}.module/module.html`), 'utf8');
    const evidence = extractHtmlEvidence(moduleHtml);
    assert.deepEqual(evidence.rootElements, ['section'], name);
    assert.equal(evidence.rootElementCounts.section, 1, name);
    assert.equal(evidence.rootElementCounts.svg, undefined, name);
  }
});

test('smoke de headings dinámicos reales conserva fallbacks h1/h2/h3', () => {
  const modules = ['oferta-hero', 'apoyos-pasos'];
  const fallbacks = new Set();
  for (const name of modules) {
    const moduleHtml = fs.readFileSync(path.join(themeRoot, `modules/${name}.module/module.html`), 'utf8');
    for (const tag of extractHtmlEvidence(moduleHtml).dynamicTags) {
      for (const fallback of tag.fallbackTags) fallbacks.add(fallback);
    }
  }
  assert.deepEqual([...fallbacks].filter((tag) => /^h[1-3]$/.test(tag)).sort(), ['h1', 'h2', 'h3']);
});

test('extractHtmlEvidence no confunde la frase sin <form> de oferta-form con un formulario real', () => {
  const moduleHtml = fs.readFileSync(path.join(themeRoot, 'modules/oferta-form.module/module.html'), 'utf8');
  const evidence = extractHtmlEvidence(moduleHtml);

  assert.equal(evidence.forms.htmlCount, 0);
  assert.equal(evidence.forms.hubspotTagCount, 0);
  assert.equal(evidence.forms.operational, false);
  assert.ok(evidence.elements.includes('input'));
  assert.ok(evidence.elements.includes('textarea'));
});

test('extractHtmlEvidence reconoce el tag HubSpot form fuera de comentarios como formulario operativo', () => {
  const evidence = extractHtmlEvidence('{# {% form form_to_use="fake" %} #}{% form form_to_use="{{ module.form.form_id }}" %}');
  assert.equal(evidence.forms.htmlCount, 0);
  assert.equal(evidence.forms.hubspotTagCount, 1);
  assert.equal(evidence.forms.operational, true);
});

test('extractFileEvidence distingue archivos ausentes, vacíos y con contenido y explica shared CSS/JS responsive', (t) => {
  const theme = tempDir(t);
  const moduleDir = path.join(theme, 'modules/demo.module');
  write(theme, 'modules/demo.module/module.html', '<section class="demo" data-demo><img src="asset-local.svg"></section>');

  let evidence = extractFileEvidence(moduleDir, { themeDir: theme });
  assert.equal(evidence.css.state, 'absent');
  assert.equal(evidence.js.state, 'absent');

  write(theme, 'modules/demo.module/module.css', '');
  write(theme, 'modules/demo.module/module.js', '  \n');
  evidence = extractFileEvidence(moduleDir, { themeDir: theme });
  assert.equal(evidence.css.state, 'empty');
  assert.equal(evidence.js.state, 'empty');

  write(theme, 'modules/demo.module/module.css', '.demo { background: url("local.png"); }\n@media (max-width: 40em) { .demo { display:block; } }');
  write(theme, 'modules/demo.module/module.js', 'document.querySelector(".otro, .demo[data-demo]")?.addEventListener("click", run);');
  write(theme, 'css/main.css', '.other{}\n@media (max-width: 64em) { .demo { display:grid; } }');
  write(theme, 'css/tokens.css', '/* .demo solo aparece en documentación; no es un selector real. */\n:root { --demo-name: ".demo"; }');
  write(theme, 'js/main.js', 'document.querySelector(".demo");');
  evidence = extractFileEvidence(moduleDir, { themeDir: theme });

  assert.equal(evidence.css.state, 'content');
  assert.equal(evidence.js.state, 'content');
  assert.ok(evidence.css.selectors.includes('.demo'));
  assert.ok(evidence.css.mediaQueries.includes('(max-width: 40em)'));
  assert.ok(evidence.css.assets.includes('local.png'));
  assert.ok(evidence.js.hooks.includes('[data-demo]'));
  assert.ok(evidence.js.hooks.includes('.demo'));
  assert.equal(evidence.shared.css.length, 1);
  assert.equal(evidence.shared.css[0].path, 'css/main.css');
  assert.deepEqual(evidence.shared.css[0].matchingSelectors, ['.demo']);
  assert.deepEqual(evidence.shared.css[0].mediaQueries, ['(max-width: 64em)']);
  assert.deepEqual(evidence.shared.js[0].matchingHooks, ['.demo']);
});

test('extractFileEvidence conserva dependencias require_css/require_js declaradas', (t) => {
  const theme = tempDir(t);
  const moduleDir = path.join(theme, 'modules/demo.module');
  write(theme, 'modules/demo.module/module.html', `
    {{ require_css(get_asset_url('../../css/widget.css')) }}
    {{ require_js(get_asset_url('../../js/widget.js'), 'footer') }}
    <section class="demo"></section>`);

  const evidence = extractFileEvidence(moduleDir, { themeDir: theme });
  assert.deepEqual(evidence.dependencies.declared.css, ['../../css/widget.css']);
  assert.deepEqual(evidence.dependencies.declared.js, ['../../js/widget.js']);
});

test('extractHtmlEvidence conserva assets literales y expresiones concatenadas sin inventar la ruta final', () => {
  const pasosHtml = fs.readFileSync(path.join(themeRoot, 'modules/apoyos-pasos.module/module.html'), 'utf8');
  const asesoriaHtml = fs.readFileSync(path.join(themeRoot, 'modules/apoyos-asesoria.module/module.html'), 'utf8');
  const literalConcatenation = extractHtmlEvidence(`<img src="{{ get_asset_url('../../images/' ~ 'fallback.jpg') }}">`);
  const pasos = extractHtmlEvidence(pasosHtml);
  const asesoria = extractHtmlEvidence(asesoriaHtml);

  const concatenated = pasos.assetReferences.find(({ kind }) => kind === 'expression');
  assert.ok(concatenated);
  assert.equal(concatenated.expression, "'../../images/' ~ pasos_fallback[loop.index0 % (pasos_fallback|length)]");
  assert.deepEqual(concatenated.staticParts, ['../../images/']);
  assert.ok(pasos.assets.includes(`get_asset_url(${concatenated.expression})`));
  assert.ok(!pasos.assets.some((asset) => asset.includes('pasos-1.jpg')));
  assert.deepEqual(literalConcatenation.assetReferences, [{
    kind: 'expression',
    value: null,
    expression: "'../../images/' ~ 'fallback.jpg'",
    staticParts: ['../../images/', 'fallback.jpg'],
  }]);

  assert.ok(asesoria.assetReferences.some(({ kind, value }) => (
    kind === 'literal' && value === '../../images/proceso-de-admision/asesor-anahuac-hombre.jpg'
  )));
  assert.ok(asesoria.assetReferences.some(({ kind, value }) => (
    kind === 'literal' && value === '../../images/proceso-de-admision/asesor-anahuac-mujer.jpg'
  )));
});

test('selectores funcionales no se parten por comas internas y hooks genéricos quedan separados', (t) => {
  const theme = tempDir(t);
  const scopedModule = path.join(theme, 'modules/scoped.module');
  const genericModule = path.join(theme, 'modules/generic.module');
  write(theme, 'modules/scoped.module/module.html', '<section class="widget container"></section>');
  write(theme, 'modules/generic.module/module.html', '<section class="container section-pad"><div class="reveal" data-reveal></div></section>');
  write(theme, 'css/main.css', `
    :where(.widget, .widget--wide), .unrelated { color: red; }
    .container, .section-pad, .reveal, [data-reveal] { display: block; }
  `);

  const scoped = extractFileEvidence(scopedModule, { themeDir: theme });
  const generic = extractFileEvidence(genericModule, { themeDir: theme });

  assert.deepEqual(scoped.shared.css[0].selectors, [':where(.widget, .widget--wide)']);
  assert.deepEqual(scoped.shared.css[0].matchingSelectors, ['.widget']);
  assert.ok(scoped.shared.genericCss[0].matchingSelectors.includes('.container'));
  assert.deepEqual(generic.shared.css, []);
  assert.equal(generic.shared.genericCss.length, 1);
  assert.deepEqual(buildSemanticProfile({ name: 'generic', html: extractHtmlEvidence('<section class="container reveal"></section>'), files: generic }).css.selectors, []);
});

test('extractFileEvidence captura @container relevante de apoyos-asesoria', () => {
  const moduleDir = path.join(themeRoot, 'modules/apoyos-asesoria.module');
  const evidence = extractFileEvidence(moduleDir, { themeDir: themeRoot });

  assert.ok(evidence.shared.css.some(({ matchingSelectors }) => matchingSelectors.includes('.asesor-card')));
  assert.ok(evidence.responsive.includes('@container (max-width: 34.9375rem)'));
});

test('derivePageUsage deriva módulos globales y dnd desde templates y admite nombres humanos', (t) => {
  const templates = tempDir(t);
  write(templates, 'home.html', `
    {% module "header" path="../modules/encabezado" %}
    {% module "sin-path" %}
    {% set path="../modules/fantasma" %}
    {# {% dnd_module path="../modules/falso" %} #}
    {% dnd_module path='../modules/hero' %}`);
  write(templates, 'nested/admission.html', `{% dnd_module path="../../modules/hero" %}`);

  const usage = derivePageUsage(templates, {
    'home.html': 'Home',
    'nested/admission.html': 'Admisión',
  });

  assert.deepEqual(usage.encabezado, ['Home']);
  assert.deepEqual(usage.hero, ['Admisión', 'Home']);
  assert.equal(usage.falso, undefined);
  assert.equal(usage.fantasma, undefined);
});

test('findSemanticCandidates encuentra nombres distintos por evidencia equivalente y explica señales', () => {
  const fields = [{ name: 'items', type: 'group', occurrence: { min: 1, max: 8 }, children: [{ name: 'title', type: 'text' }] }];
  const alpha = record({
    name: 'ruta-academica', family: 'pasos', capabilities: ['pasos-repetibles', 'navegacion-movil'], fields,
    html: '<section class="journey"><button data-step="0"></button><article data-panel="0"></article></section>',
    js: { state: 'content', hooks: ['[data-step]', '[data-panel]'], assets: [] },
    pages: ['Página A'],
  });
  const beta = record({
    name: 'itinerario-ingreso', family: 'pasos', capabilities: ['pasos-repetibles', 'navegacion-movil'], fields,
    html: '<section class="journey"><button data-step="0"></button><article data-panel="0"></article></section>',
    js: { state: 'content', hooks: ['[data-step]', '[data-panel]'], assets: [] },
    pages: ['Página B'],
  });

  const candidates = findSemanticCandidates([alpha, beta], alpha);

  assert.equal(candidates.length, 1);
  assert.equal(candidates[0].name, 'itinerario-ingreso');
  assert.equal(candidates[0].isCandidate, true);
  assert.equal('compatible' in candidates[0], false);
  assert.ok(candidates[0].evidence.some((item) => item.dimension === 'fields'));
  assert.ok(candidates[0].evidence.some((item) => item.dimension === 'html'));
  assert.ok(candidates[0].evidence.some((item) => item.dimension === 'html/estructura'));
  assert.ok(candidates[0].evidence.some((item) => item.dimension === 'html/raiz'));
  assert.ok(candidates[0].evidence.some((item) => item.dimension === 'metadata'));
});

test('findSemanticCandidates no usa un nombre parecido como única evidencia frente a contratos incompatibles', () => {
  const staticHero = record({
    name: 'oferta-hero',
    fields: [{ name: 'heading', type: 'text' }],
    html: '<section><h1></h1></section>',
  });
  const transactionalHero = record({
    name: 'oferta-hero-nuevo',
    fields: [{ name: 'formulario', type: 'form', required: true }],
    html: '<form data-payment><input></form>',
    js: { state: 'content', hooks: ['[data-payment]'], assets: [] },
  });

  const candidates = findSemanticCandidates([staticHero, transactionalHero], staticHero);
  assert.deepEqual(candidates, []);
});

test('findSemanticCandidates no eleva scaffolding, CSS/JS y dependencias globales a evidencia semántica suficiente', () => {
  const genericFiles = {
    css: { state: 'empty', selectors: ['.container', '.section-pad'], mediaQueries: ['(max-width: 40em)'], assets: [] },
    js: { state: 'empty', hooks: ['[data-reveal]'], assets: [] },
    dependencies: { css: ['css/main.css'], js: ['js/main.js'] },
  };
  const informative = record({
    name: 'estadisticas',
    fields: [{ name: 'cifras', type: 'group', occurrence: { min: 3, max: 6 }, children: [{ name: 'valor', type: 'number' }] }],
    html: '<section class="section-pad"><div class="container" data-reveal><strong></strong></div></section>',
    ...genericFiles,
  });
  const navigation = record({
    name: 'navegacion-secundaria',
    fields: [{ name: 'enlaces', type: 'group', occurrence: { min: 2, max: 8 }, children: [{ name: 'url', type: 'link' }] }],
    html: '<nav class="section-pad"><div class="container" data-reveal><a></a></div></nav>',
    ...genericFiles,
  });

  assert.deepEqual(findSemanticCandidates([informative, navigation], informative), []);
});

test('la firma estructural conserva multiplicidad de fields y elementos HTML', () => {
  const one = buildSemanticProfile(record({
    name: 'uno',
    fields: [{ name: 'item', type: 'text' }],
    html: '<section><article></article></section>',
  }));
  const many = buildSemanticProfile(record({
    name: 'muchos',
    fields: [{ name: 'item', type: 'text' }, { name: 'otro', type: 'text' }],
    html: '<section><article></article><article></article><article></article></section>',
  }));

  assert.equal(one.fields.shape.length, 1);
  assert.equal(many.fields.shape.length, 2);
  assert.deepEqual(one.html.elementShape, ['article:1', 'section:1']);
  assert.deepEqual(many.html.elementShape, ['article:3', 'section:1']);
  assert.deepEqual(one.html.rootElements, ['section']);
  assert.deepEqual(one.html.parentChildShape, ['section>article:1']);
  assert.deepEqual(one.html.hierarchyShape, ['section:1', 'section>article:1']);

  const comparison = evaluateCompatibility(one, many);
  assert.ok(comparison.dimensions.html.gaps.some((gap) => gap.includes('article')));
});

test('árboles con los mismos tags pero distinta jerarquía producen gap y menor similitud', () => {
  const fields = [{ name: 'contenido', type: 'text' }];
  const target = record({
    name: 'arbol-objetivo', family: 'contenido', capabilities: ['contenido-anidado'], fields,
    html: '<section class="tree" id="tree"><article><div><span></span></div></article></section>',
  });
  const sameTree = record({
    name: 'arbol-equivalente', family: 'contenido', capabilities: ['contenido-anidado'], fields,
    html: '<section class="tree" id="tree"><article><div><span></span></div></article></section>',
  });
  const differentTree = record({
    name: 'arbol-distinto', family: 'contenido', capabilities: ['contenido-anidado'], fields,
    html: '<section class="tree" id="tree"><span><div><article></article></div></span></section>',
  });

  const comparison = evaluateCompatibility(differentTree, target);
  assert.equal(comparison.compatible, false);
  assert.ok(comparison.dimensions.html.gaps.some((gap) => gap.includes('padre-hijo') || gap.includes('jerarquía')));

  const candidates = findSemanticCandidates([sameTree, differentTree], target, { threshold: 0 });
  const sameScore = candidates.find(({ name }) => name === 'arbol-equivalente').score;
  const differentScore = candidates.find(({ name }) => name === 'arbol-distinto').score;
  assert.ok(sameScore > differentScore, `${sameScore} debe superar ${differentScore}`);
});

test('evaluateCompatibility reporta evidence y gaps por cada dimensión sin decidir reutilizar/adaptar/crear', () => {
  const source = record({
    name: 'fuente', family: 'formulario', capabilities: ['interfaz-estatica'], variants: ['compacta'],
    fields: [{ name: 'heading', type: 'text' }],
    html: '<section class="visual"><input></section>',
    css: { state: 'content', selectors: ['.visual'], mediaQueries: [], assets: [] },
    js: { state: 'empty', hooks: [], assets: [] },
    dependencies: { css: ['tokens.css'], js: [] },
    pages: ['Home'],
    state: 'Development',
    meta: { global: false, categories: ['BODY_CONTENT'], content_types: ['SITE_PAGE'] },
  });
  const requirements = record({
    name: 'objetivo', family: 'formulario', capabilities: ['formulario-hubspot'], variants: ['amplia'],
    fields: [{ name: 'formulario', type: 'form', required: true }],
    html: '<form class="operativo" data-submit><input></form>',
    css: { state: 'content', selectors: ['.operativo'], mediaQueries: ['(max-width: 40em)'], assets: ['form-bg.png'] },
    js: { state: 'content', hooks: ['[data-submit]'], assets: ['validation.json'] },
    dependencies: { css: ['forms.css'], js: ['forms.js'] },
    pages: ['Admisión'],
    state: 'Approved',
    tier: 'reusable',
    meta: { global: true, categories: ['BLOG_POST', 'BODY_CONTENT'], content_types: ['LANDING_PAGE', 'SITE_PAGE'] },
  });

  const result = evaluateCompatibility(source, requirements);

  assert.equal(result.compatible, false);
  assert.equal(result.decision, null);
  assert.deepEqual(Object.keys(result.dimensions), [
    'metadata', 'fields', 'html', 'css', 'js/hooks', 'variantes', 'responsive', 'assets', 'dependencias', 'paginas',
  ]);
  for (const [dimension, detail] of Object.entries(result.dimensions)) {
    assert.ok(Array.isArray(detail.evidence), `${dimension} debe incluir evidence`);
    assert.ok(Array.isArray(detail.gaps), `${dimension} debe incluir gaps`);
    assert.ok(detail.gaps.length > 0, `${dimension} debe detectar una brecha`);
  }
  assert.ok(result.gaps.some((gap) => gap.dimension === 'fields'));
  assert.ok(result.gaps.some((gap) => gap.dimension === 'js/hooks'));
  assert.ok(result.dimensions.metadata.evidence.includes('estado:Development'));
  assert.ok(result.dimensions.metadata.evidence.includes('category:BODY_CONTENT'));
  assert.ok(result.dimensions.metadata.evidence.includes('content_type:SITE_PAGE'));
  assert.ok(result.dimensions.metadata.gaps.some((gap) => gap.includes('estado requerido=Approved')));
  assert.ok(result.dimensions.metadata.gaps.some((gap) => gap.includes('category:BLOG_POST')));
  assert.ok(result.dimensions.metadata.gaps.some((gap) => gap.includes('content_type:LANDING_PAGE')));
});

test('replaceAutoBlock reemplaza solo el bloque solicitado y preserva toda la prosa circundante', () => {
  const document = `Intro humana.
<!-- AUTO:fields:START -->
viejo fields
<!-- AUTO:fields:END -->
Puente humano.
<!-- AUTO:technical:START -->
viejo técnico
<!-- AUTO:technical:END -->
Cierre humano.`;

  const updated = replaceAutoBlock(document, 'fields', 'nuevo fields');

  assert.equal(updated, `Intro humana.
<!-- AUTO:fields:START -->
nuevo fields
<!-- AUTO:fields:END -->
Puente humano.
<!-- AUTO:technical:START -->
viejo técnico
<!-- AUTO:technical:END -->
Cierre humano.`);
  assert.throws(() => replaceAutoBlock(document, 'inexistente', 'x'), /inexistente/);
});

test('las funciones de Task 2 son de solo lectura respecto al theme real', () => {
  const modulesDir = path.join(themeRoot, 'modules');
  const before = digest(themeRoot);
  const modules = discoverModules(modulesDir);
  for (const module of modules) extractFileEvidence(module.directory, { themeDir: themeRoot });
  derivePageUsage(path.join(themeRoot, 'templates'));
  const after = digest(themeRoot);

  assert.equal(modules.length, 34);
  assert.equal(after, before);
});
