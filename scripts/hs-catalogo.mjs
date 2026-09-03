import fs from 'node:fs';
import path from 'node:path';

const VALID_STATES = new Set(['Draft', 'Development', 'Approved', 'Deprecated']);
const VALID_TIERS = new Set(['global', 'reusable', 'page-specific']);
const VALID_RELATION_TYPES = new Set([
  'candidato', 'complementa', 'consume', 'consumido-por', 'reemplaza',
]);
const LOGICAL_ADMISSION_RELATION = Object.freeze({
  owner: 'apoyos-asesoria',
  type: 'consumido-por',
  reference: 'admision-asesoria',
});
const GENERIC_SHARED_HOOKS = new Set([
  '.active', '.container', '.hidden', '.is-active', '.on-orange', '.reveal',
  '.section-intro', '.section-pad', '.tagline', '[data-reveal]',
]);
const VOID_ELEMENTS = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta',
  'param', 'source', 'track', 'wbr',
]);

function compareText(a, b) {
  const left = String(a);
  const right = String(b);
  if (left < right) return -1;
  if (left > right) return 1;
  return 0;
}

function uniqueSorted(values) {
  return [...new Set((values ?? []).filter((value) => value !== undefined && value !== null && value !== ''))]
    .sort(compareText);
}

function isGenericSharedHook(hook) {
  return GENERIC_SHARED_HOOKS.has(hook) || /^\.btn(?:-|$)/.test(hook);
}

function readJsonIfPresent(filePath) {
  if (!fs.existsSync(filePath)) return { value: null, error: null };
  try {
    return { value: JSON.parse(fs.readFileSync(filePath, 'utf8')), error: null };
  } catch (error) {
    return { value: null, error: error.message };
  }
}

function stripTemplateComments(source) {
  return String(source ?? '')
    .replace(/\{#[\s\S]*?#\}/g, '')
    .replace(/<!--[\s\S]*?-->/g, '');
}

function stripMacroDefinitions(source) {
  return String(source ?? '').replace(
    /\{%-?\s*macro\b[\s\S]*?-?%\}[\s\S]*?\{%-?\s*endmacro\s*-?%\}/g,
    '',
  );
}

function normalizeModuleName(modulePath) {
  const base = path.posix.basename(String(modulePath).replaceAll('\\', '/'));
  return base.endsWith('.module') ? base.slice(0, -'.module'.length) : base;
}

function asModuleRecords(moduleNames) {
  return (moduleNames ?? []).map((entry) => (
    typeof entry === 'string' ? { name: normalizeModuleName(entry), meta: null } : entry
  ));
}

export function discoverModules(modulesDir) {
  if (!fs.existsSync(modulesDir)) return [];

  return fs.readdirSync(modulesDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && entry.name.endsWith('.module'))
    .map((entry) => {
      const directory = path.join(modulesDir, entry.name);
      const parsedMeta = readJsonIfPresent(path.join(directory, 'meta.json'));
      return {
        name: entry.name.slice(0, -'.module'.length),
        directory,
        meta: parsedMeta.value,
        metaError: parsedMeta.error,
      };
    })
    .sort((a, b) => compareText(a.name, b.name));
}

export function validateRegistry(moduleNames, registry) {
  const modules = asModuleRecords(moduleNames);
  const physicalNames = uniqueSorted(modules.map(({ name }) => name));
  const registeredNames = uniqueSorted(Object.keys(registry ?? {}));
  const missing = physicalNames.filter((name) => !registeredNames.includes(name));
  const orphaned = registeredNames.filter((name) => !physicalNames.includes(name));
  const invalidEnums = [];
  const schemaErrors = [];
  const tierGlobalDiscrepancies = [];
  const requiredKeys = ['estado', 'tier', 'familia', 'capacidades', 'variantes', 'relaciones', 'notas', 'paginas_portal'];

  for (const name of registeredNames) {
    const entry = registry[name];
    if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
      schemaErrors.push({ module: name, field: null, message: 'El registro debe ser un objeto.' });
      continue;
    }
    for (const key of requiredKeys) {
      if (!(key in entry)) schemaErrors.push({ module: name, field: key, message: 'Falta el campo requerido.' });
    }
    if (!VALID_STATES.has(entry.estado)) {
      invalidEnums.push({ module: name, field: 'estado', value: entry.estado });
    }
    if (!VALID_TIERS.has(entry.tier)) {
      invalidEnums.push({ module: name, field: 'tier', value: entry.tier });
    }
    for (const arrayKey of ['capacidades', 'variantes', 'relaciones', 'paginas_portal']) {
      if (arrayKey in entry && !Array.isArray(entry[arrayKey])) {
        schemaErrors.push({ module: name, field: arrayKey, message: 'Debe ser una lista.' });
      }
    }
    if (entry.familia !== null && typeof entry.familia !== 'string') {
      schemaErrors.push({ module: name, field: 'familia', message: 'Debe ser string o null.' });
    }
    if ('notas' in entry && typeof entry.notas !== 'string') {
      schemaErrors.push({ module: name, field: 'notas', message: 'Debe ser string.' });
    }
    for (const arrayKey of ['capacidades', 'variantes', 'paginas_portal']) {
      if (!Array.isArray(entry[arrayKey])) continue;
      entry[arrayKey].forEach((value, index) => {
        if (typeof value !== 'string' || !value.trim()) {
          schemaErrors.push({ module: name, field: `${arrayKey}[${index}]`, message: 'Debe ser un string no vacío.' });
        }
      });
    }
    if (Array.isArray(entry.relaciones)) {
      entry.relaciones.forEach((relation, index) => {
        const field = `relaciones[${index}]`;
        if (!relation || typeof relation !== 'object' || Array.isArray(relation)) {
          schemaErrors.push({ module: name, field, message: 'La relación debe ser un objeto.' });
          return;
        }
        if (!VALID_RELATION_TYPES.has(relation.tipo)) {
          invalidEnums.push({ module: name, field: `${field}.tipo`, value: relation.tipo });
        }
        if (typeof relation.referencia !== 'string' || !relation.referencia.trim()) {
          schemaErrors.push({ module: name, field: `${field}.referencia`, message: 'Debe ser un string no vacío.' });
        } else if (relation.referencia === name) {
          schemaErrors.push({ module: name, field: `${field}.referencia`, message: 'Una relación no puede referenciar el mismo módulo.' });
        } else if (!registeredNames.includes(relation.referencia)) {
          const isAllowedLogicalReference = name === LOGICAL_ADMISSION_RELATION.owner
            && relation.tipo === LOGICAL_ADMISSION_RELATION.type
            && relation.referencia === LOGICAL_ADMISSION_RELATION.reference
            && typeof relation.motivo === 'string'
            && /reutiliza/i.test(relation.motivo)
            && /m[oó]dulo f[ií]sico/i.test(relation.motivo)
            && /no es[\s\S]*(?:clave|carpeta) f[ií]sica/i.test(relation.motivo);
          if (!isAllowedLogicalReference) {
            schemaErrors.push({ module: name, field: `${field}.referencia`, message: `Referencia desconocida: ${relation.referencia}.` });
          }
        }
        if (typeof relation.motivo !== 'string' || !relation.motivo.trim()) {
          schemaErrors.push({ module: name, field: `${field}.motivo`, message: 'Debe ser un string no vacío.' });
        }
      });
    }
  }

  for (const module of modules) {
    const entry = registry?.[module.name];
    if (!entry || typeof module.meta?.global !== 'boolean' || !VALID_TIERS.has(entry.tier)) continue;
    const architecturallyGlobal = entry.tier === 'global';
    if (architecturallyGlobal !== module.meta.global) {
      tierGlobalDiscrepancies.push({
        module: module.name,
        tier: entry.tier,
        metaGlobal: module.meta.global,
      });
    }
  }

  invalidEnums.sort((a, b) => compareText(a.module, b.module) || compareText(a.field, b.field));
  schemaErrors.sort((a, b) => compareText(a.module, b.module) || compareText(a.field, b.field));
  tierGlobalDiscrepancies.sort((a, b) => compareText(a.module, b.module));

  const errors = [
    ...missing.map((module) => ({ type: 'missing', module })),
    ...orphaned.map((module) => ({ type: 'orphaned', module })),
    ...invalidEnums.map((detail) => ({ type: 'invalid-enum', ...detail })),
    ...schemaErrors.map((detail) => ({ type: 'invalid-schema', ...detail })),
  ];
  const warnings = tierGlobalDiscrepancies.map((detail) => ({ type: 'tier-global-discrepancy', ...detail }));

  return {
    valid: errors.length === 0,
    missing,
    orphaned,
    invalidEnums,
    schemaErrors,
    tierGlobalDiscrepancies,
    errors,
    warnings,
  };
}

export function flattenFields(fields) {
  const flattened = [];

  const visit = (items, parentNames = [], repeaterAncestors = []) => {
    for (const field of items ?? []) {
      if (!field || typeof field !== 'object') continue;
      const fallbackName = typeof field.id === 'string' ? field.id.split('.').at(-1) : '';
      const name = field.name || fallbackName;
      if (!name) continue;

      const hierarchy = [...parentNames, name];
      const fieldPath = hierarchy.join('.');
      const occurrence = field.occurrence && typeof field.occurrence === 'object'
        ? { ...field.occurrence }
        : null;
      const repeater = occurrence !== null;

      flattened.push({
        path: fieldPath,
        id: field.id ?? null,
        name,
        label: field.label ?? null,
        type: field.type ?? null,
        required: field.required === true,
        default: field.default,
        occurrence,
        repeater,
        parentPath: parentNames.length ? parentNames.join('.') : null,
        hierarchy,
        depth: parentNames.length,
        repeaterAncestors: [...repeaterAncestors],
        occursWithinRepeater: repeaterAncestors.length > 0,
        hasChildren: Array.isArray(field.children) && field.children.length > 0,
      });

      visit(
        field.children,
        hierarchy,
        repeater ? [...repeaterAncestors, fieldPath] : repeaterAncestors,
      );
    }
  };

  visit(Array.isArray(fields) ? fields : []);
  return flattened;
}

function parseAttributes(fragment) {
  const attributes = [];
  const pattern = /([^\s=/>]+)(?:\s*=\s*(?:(["'])([\s\S]*?)\2|([^\s>]+)))?/g;
  for (const match of fragment.matchAll(pattern)) {
    attributes.push({
      name: match[1].toLowerCase(),
      value: match[3] ?? match[4] ?? null,
    });
  }
  return attributes;
}

function staticClassTokens(value) {
  return String(value ?? '')
    .replace(/\{\{[\s\S]*?\}\}/g, ' ')
    .replace(/\{%[\s\S]*?%\}/g, ' ')
    .split(/\s+/)
    .filter((token) => /^[A-Za-z_-][\w-]*$/.test(token));
}

function normalizeExpression(value) {
  return String(value ?? '').trim().replace(/\s+/g, ' ');
}

function parseTagPrefix(source, start) {
  let cursor = start + 1;
  while (/\s/.test(source[cursor] ?? '')) cursor += 1;
  const closing = source[cursor] === '/';
  if (closing) {
    cursor += 1;
    while (/\s/.test(source[cursor] ?? '')) cursor += 1;
  }

  if (source.startsWith('{{', cursor)) {
    const expressionEnd = source.indexOf('}}', cursor + 2);
    if (expressionEnd < 0) return null;
    const expression = normalizeExpression(source.slice(cursor + 2, expressionEnd));
    if (!expression) return null;
    return {
      closing,
      dynamic: true,
      expression,
      tag: 'dynamic',
      stackKey: `dynamic:${expression}`,
      end: expressionEnd + 2,
    };
  }

  const staticTag = source.slice(cursor).match(/^([A-Za-z][\w:-]*)\b/);
  if (!staticTag) return null;
  const tag = staticTag[1].toLowerCase();
  return {
    closing,
    dynamic: false,
    expression: null,
    tag,
    stackKey: tag,
    end: cursor + staticTag[0].length,
  };
}

function htmlTags(source) {
  const tags = [];
  let cursor = 0;

  while (cursor < source.length) {
    const start = source.indexOf('<', cursor);
    if (start < 0) break;

    const prefix = parseTagPrefix(source, start);
    if (!prefix) {
      cursor = start + 1;
      continue;
    }

    let quote = null;
    let templateEnd = null;
    let end = -1;
    for (let index = prefix.end; index < source.length; index += 1) {
      const pair = source.slice(index, index + 2);

      if (templateEnd) {
        if (pair === templateEnd) {
          templateEnd = null;
          index += 1;
        }
        continue;
      }
      if (pair === '{{') {
        templateEnd = '}}';
        index += 1;
        continue;
      }
      if (pair === '{%') {
        templateEnd = '%}';
        index += 1;
        continue;
      }
      if (quote) {
        if (source[index] === quote) quote = null;
        continue;
      }
      if (source[index] === '"' || source[index] === "'") {
        quote = source[index];
        continue;
      }
      if (source[index] === '>') {
        end = index;
        break;
      }
    }

    if (end < 0) break;
    tags.push({
      ...prefix,
      fragment: source.slice(prefix.end, end),
    });
    cursor = end + 1;
  }

  return tags;
}

export function extractHtmlEvidence(moduleHtml) {
  const source = stripMacroDefinitions(stripTemplateComments(moduleHtml));
  const elements = [];
  const rootElements = [];
  const classes = [];
  const ids = [];
  const dataAttributes = [];
  const rootClasses = [];
  const rootIds = [];
  const rootDataAttributes = [];
  const attributes = [];
  const dynamicTags = [];
  const parentChild = [];
  const hierarchy = [];
  const stack = [];
  let htmlFormCount = 0;

  for (const { closing, dynamic, expression, tag, stackKey, fragment } of htmlTags(source)) {
    if (closing) {
      const index = stack.map((entry) => entry.stackKey).lastIndexOf(stackKey);
      if (index >= 0) stack.splice(index);
      continue;
    }

    elements.push(tag);
    if (stack.length === 0) rootElements.push(tag);
    if (tag === 'form') htmlFormCount += 1;
    if (dynamic) {
      const fallbackTags = uniqueSorted(
        [...expression.matchAll(/\bdefault\(\s*(["'])([A-Za-z][\w:-]*)\1/g)]
          .map((match) => match[2].toLowerCase()),
      );
      dynamicTags.push({ expression, tag, fallbackTags });
    }

    const ancestors = stack.map((entry) => entry.tag);
    if (ancestors.length) parentChild.push(`${ancestors.at(-1)}>${tag}`);
    hierarchy.push([...ancestors, tag].join('>'));

    const isRoot = stack.length === 0;
    const parsedAttributes = parseAttributes(fragment);
    for (const attribute of parsedAttributes) {
      attributes.push({ element: tag, ...attribute });
      if (attribute.name === 'class') {
        const tokens = staticClassTokens(attribute.value);
        classes.push(...tokens);
        if (isRoot) rootClasses.push(...tokens);
      }
      if (attribute.name === 'id' && /^[A-Za-z][\w:.-]*$/.test(attribute.value ?? '')) {
        ids.push(attribute.value);
        if (isRoot) rootIds.push(attribute.value);
      }
      if (attribute.name.startsWith('data-')) {
        dataAttributes.push(attribute);
        if (isRoot) rootDataAttributes.push(attribute);
      }
    }

    const selfClosing = /\/\s*$/.test(fragment) || VOID_ELEMENTS.has(tag);
    if (!selfClosing) stack.push({ tag, stackKey });
  }

  const assetReferences = getAssetReferences(source);
  const assets = assetReferences.map(assetReferenceKey);
  for (const match of source.matchAll(/\b(?:src|href|poster)\s*=\s*(["'])(.*?)\1/g)) {
    const value = match[2];
    if (!value.includes('{{') && /\.(?:avif|css|gif|ico|jpe?g|js|json|mp4|png|svg|webm|webp)(?:[?#].*)?$/i.test(value)) {
      assets.push(value);
    }
  }

  const hubspotTagCount = [...source.matchAll(/\{%\s*form\b[\s\S]*?%\}/g)].length;
  const sortedClasses = uniqueSorted(classes);
  const sortedIds = uniqueSorted(ids);
  const sortedDataAttributes = [...new Map(
    dataAttributes.map((attribute) => [`${attribute.name}\u0000${attribute.value ?? ''}`, attribute]),
  ).values()].sort((a, b) => compareText(a.name, b.name) || compareText(a.value, b.value));
  const hooks = uniqueSorted([
    ...sortedClasses.map((className) => `.${className}`),
    ...sortedIds.map((id) => `#${id}`),
    ...sortedDataAttributes.map(({ name }) => `[${name}]`),
  ]);
  const elementCounts = {};
  for (const element of elements) elementCounts[element] = (elementCounts[element] ?? 0) + 1;
  const countValues = (values) => Object.fromEntries(
    uniqueSorted(values).map((value) => [value, values.filter((candidate) => candidate === value).length]),
  );
  const parentChildCounts = countValues(parentChild);
  const hierarchyCounts = countValues(hierarchy);

  return {
    rootElements: uniqueSorted(rootElements),
    rootElementCounts: Object.fromEntries(
      uniqueSorted(rootElements).map((element) => [element, rootElements.filter((value) => value === element).length]),
    ),
    rootClasses: uniqueSorted(rootClasses),
    rootIds: uniqueSorted(rootIds),
    rootDataAttributes: uniqueSorted(rootDataAttributes.map(({ name }) => name)),
    elements: uniqueSorted(elements),
    elementCounts: Object.fromEntries(Object.entries(elementCounts).sort(([a], [b]) => compareText(a, b))),
    classes: sortedClasses,
    ids: sortedIds,
    dataAttributes: sortedDataAttributes,
    attributes,
    dynamicTags: [...new Map(
      dynamicTags.map((entry) => [`${entry.expression}\u0000${entry.fallbackTags.join(',')}`, entry]),
    ).values()].sort((a, b) => compareText(a.expression, b.expression)),
    parentChildCounts,
    parentChildShape: Object.entries(parentChildCounts).map(([edge, count]) => `${edge}:${count}`),
    hierarchyCounts,
    hierarchyShape: Object.entries(hierarchyCounts).map(([branch, count]) => `${branch}:${count}`),
    hooks,
    forms: {
      htmlCount: htmlFormCount,
      hubspotTagCount,
      operational: htmlFormCount + hubspotTagCount > 0,
    },
    assetReferences,
    assets: uniqueSorted(assets),
  };
}

function fileState(filePath) {
  if (!fs.existsSync(filePath)) return { path: filePath, state: 'absent', content: '' };
  const content = fs.readFileSync(filePath, 'utf8');
  return { path: filePath, state: content.trim() ? 'content' : 'empty', content };
}

function stripCssComments(source) {
  return String(source ?? '').replace(/\/\*[\s\S]*?\*\//g, '');
}

function splitSelectorList(value) {
  const selectors = [];
  let start = 0;
  let quote = null;
  let parentheses = 0;
  let brackets = 0;
  for (let index = 0; index < value.length; index += 1) {
    const char = value[index];
    if (quote) {
      if (char === quote && value[index - 1] !== '\\') quote = null;
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      continue;
    }
    if (char === '(') parentheses += 1;
    else if (char === ')') parentheses = Math.max(0, parentheses - 1);
    else if (char === '[') brackets += 1;
    else if (char === ']') brackets = Math.max(0, brackets - 1);
    else if (char === ',' && parentheses === 0 && brackets === 0) {
      selectors.push(value.slice(start, index));
      start = index + 1;
    }
  }
  selectors.push(value.slice(start));
  return selectors;
}

function extractCssSelectors(source) {
  const selectors = [];
  const clean = stripCssComments(source);
  for (const match of clean.matchAll(/([^{}]+)\{/g)) {
    const prelude = match[1].trim();
    if (!prelude || prelude.startsWith('@') || /^(?:from|to|\d+(?:\.\d+)?%)$/.test(prelude)) continue;
    for (const selector of splitSelectorList(prelude)) {
      const normalized = selector.trim().replace(/\s+/g, ' ');
      if (normalized && !normalized.includes(': ')) selectors.push(normalized);
    }
  }
  return uniqueSorted(selectors);
}

function matchingBraceIndex(source, openIndex) {
  let depth = 0;
  let quote = null;
  for (let index = openIndex; index < source.length; index += 1) {
    const char = source[index];
    const previous = source[index - 1];
    if (quote) {
      if (char === quote && previous !== '\\') quote = null;
      continue;
    }
    if (char === '"' || char === "'") {
      quote = char;
      continue;
    }
    if (char === '{') depth += 1;
    if (char === '}') {
      depth -= 1;
      if (depth === 0) return index;
    }
  }
  return -1;
}

function markerAppears(source, marker) {
  if (marker.startsWith('.')) {
    return new RegExp(`\\.${escapeRegex(marker.slice(1))}(?![\\w-])`).test(source);
  }
  if (marker.startsWith('#')) {
    return new RegExp(`#${escapeRegex(marker.slice(1))}(?![\\w-])`).test(source);
  }
  return source.includes(marker);
}

function extractConditionalQueries(source, directive, markers = []) {
  const queries = [];
  const clean = stripCssComments(source);
  const pattern = new RegExp(`@${directive}\\s*([^{}]+)\\{`, 'g');
  for (const match of clean.matchAll(pattern)) {
    const openIndex = match.index + match[0].lastIndexOf('{');
    const closeIndex = matchingBraceIndex(clean, openIndex);
    if (closeIndex < 0) continue;
    const block = clean.slice(openIndex + 1, closeIndex);
    if (!markers.length || markers.some((marker) => markerAppears(block, marker))) {
      queries.push(match[1].trim().replace(/\s+/g, ' '));
    }
  }
  return uniqueSorted(queries);
}

function getAssetReferences(source) {
  const references = [];
  const pattern = /\bget_asset_url\s*\(/g;
  for (const match of String(source ?? '').matchAll(pattern)) {
    const openIndex = match.index + match[0].lastIndexOf('(');
    let depth = 0;
    let quote = null;
    let closeIndex = -1;
    for (let index = openIndex; index < source.length; index += 1) {
      const char = source[index];
      if (quote) {
        if (char === quote && source[index - 1] !== '\\') quote = null;
        continue;
      }
      if (char === '"' || char === "'") {
        quote = char;
        continue;
      }
      if (char === '(') depth += 1;
      else if (char === ')') {
        depth -= 1;
        if (depth === 0) {
          closeIndex = index;
          break;
        }
      }
    }
    if (closeIndex < 0) continue;
    const expression = normalizeExpression(source.slice(openIndex + 1, closeIndex));
    const literal = expression.match(/^(?:"([^"\\]|\\.)*"|'([^'\\]|\\.)*')$/);
    const staticParts = uniqueSorted(
      [...expression.matchAll(/(["'])(.*?)\1/g)].map((part) => part[2]).filter(Boolean),
    );
    references.push(literal
      ? { kind: 'literal', value: expression.slice(1, -1), expression, staticParts: [expression.slice(1, -1)] }
      : { kind: 'expression', value: null, expression, staticParts });
  }
  return [...new Map(
    references.map((reference) => [`${reference.kind}\u0000${reference.expression}`, reference]),
  ).values()].sort((a, b) => compareText(a.expression, b.expression));
}

function assetReferenceKey(reference) {
  return reference.kind === 'literal'
    ? reference.value
    : `get_asset_url(${reference.expression})`;
}

function extractCssAssets(source) {
  const assets = [];
  for (const match of String(source ?? '').matchAll(/url\(\s*(["']?)(.*?)\1\s*\)/g)) {
    const value = match[2].trim();
    if (value && !value.startsWith('data:') && !value.includes('{{')) assets.push(value);
  }
  return uniqueSorted(assets);
}

function extractCssAssetsForMarkers(source, markers) {
  const assets = [];
  const clean = stripCssComments(source);
  for (const match of clean.matchAll(/([^{}]+)\{/g)) {
    const prelude = match[1].trim();
    if (!prelude || prelude.startsWith('@')) continue;
    const selectors = splitSelectorList(prelude).map((selector) => selector.trim());
    if (!markers.some((marker) => selectors.some((selector) => markerAppears(selector, marker)))) continue;
    const openIndex = match.index + match[0].lastIndexOf('{');
    const closeIndex = matchingBraceIndex(clean, openIndex);
    if (closeIndex < 0) continue;
    assets.push(...extractCssAssets(clean.slice(openIndex + 1, closeIndex)));
  }
  return uniqueSorted(assets);
}

function camelToKebab(value) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}

function extractJsHooks(source) {
  const hooks = [];
  const selectorPattern = /\.(?:querySelector(?:All)?|closest|matches)\(\s*(["'`])([^"'`]+)\1\s*\)/g;
  for (const match of String(source ?? '').matchAll(selectorPattern)) {
    hooks.push(match[2]);
    for (const atom of match[2].matchAll(/(?:\.[A-Za-z_-][\w-]*|#[A-Za-z_-][\w-]*|\[data-[\w-]+(?:\s*[*^$|~]?=\s*[^\]]+)?\])/g)) {
      hooks.push(atom[0].replace(/\s+/g, ''));
    }
  }
  for (const match of String(source ?? '').matchAll(/\.getElementById\(\s*(["'`])([^"'`]+)\1\s*\)/g)) hooks.push(`#${match[2]}`);
  for (const match of String(source ?? '').matchAll(/\.dataset\.([A-Za-z_$][\w$]*)/g)) hooks.push(`[data-${camelToKebab(match[1])}]`);
  for (const match of String(source ?? '').matchAll(/\.dataset\[\s*(["'])(.*?)\1\s*\]/g)) hooks.push(`[data-${camelToKebab(match[2])}]`);
  return uniqueSorted(hooks);
}

function extractJsAssets(source) {
  const assets = [];
  for (const match of String(source ?? '').matchAll(/(["'`])([^"'`]+\.(?:css|gif|jpe?g|js|json|mp4|png|svg|webm|webp)(?:[?#][^"'`]*)?)\1/gi)) {
    assets.push(match[2]);
  }
  return uniqueSorted(assets);
}

function cssEvidence(filePath) {
  const file = fileState(filePath);
  const mediaQueries = file.state === 'content' ? extractConditionalQueries(file.content, 'media') : [];
  const containerQueries = file.state === 'content' ? extractConditionalQueries(file.content, 'container') : [];
  return {
    path: file.path,
    state: file.state,
    selectors: file.state === 'content' ? extractCssSelectors(file.content) : [],
    mediaQueries,
    containerQueries,
    responsiveQueries: [
      ...mediaQueries.map((query) => `@media ${query}`),
      ...containerQueries.map((query) => `@container ${query}`),
    ],
    assets: file.state === 'content' ? extractCssAssets(file.content) : [],
  };
}

function jsEvidence(filePath) {
  const file = fileState(filePath);
  return {
    path: file.path,
    state: file.state,
    hooks: file.state === 'content' ? extractJsHooks(file.content) : [],
    assets: file.state === 'content' ? extractJsAssets(file.content) : [],
  };
}

function declaredDependencies(moduleHtml) {
  const source = stripTemplateComments(moduleHtml);
  const result = { css: [], js: [] };
  for (const type of ['css', 'js']) {
    const pattern = new RegExp(`require_${type}\\([\\s\\S]*?get_asset_url\\(\\s*(["'])(.*?)\\1\\s*\\)[\\s\\S]*?\\)`, 'g');
    for (const match of source.matchAll(pattern)) result[type].push(match[2]);
    result[type] = uniqueSorted(result[type]);
  }
  return result;
}

function listFiles(directory, extension) {
  if (!fs.existsSync(directory)) return [];
  return fs.readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isFile() && entry.name.endsWith(extension))
    .map((entry) => path.join(directory, entry.name))
    .sort(compareText);
}

export function extractFileEvidence(moduleDir, options = {}) {
  const themeDir = options.themeDir ?? path.resolve(moduleDir, '../..');
  const moduleHtmlPath = path.join(moduleDir, 'module.html');
  const moduleHtml = fs.existsSync(moduleHtmlPath) ? fs.readFileSync(moduleHtmlPath, 'utf8') : '';
  const html = extractHtmlEvidence(moduleHtml);
  const markers = html.hooks;
  const specificMarkers = markers.filter((marker) => !isGenericSharedHook(marker));
  const genericMarkers = markers.filter(isGenericSharedHook);
  const css = cssEvidence(path.join(moduleDir, 'module.css'));
  const js = jsEvidence(path.join(moduleDir, 'module.js'));
  const sharedCss = [];
  const sharedJs = [];
  const genericSharedCss = [];
  const genericSharedJs = [];

  for (const filePath of listFiles(path.join(themeDir, 'css'), '.css')) {
    const state = fileState(filePath);
    if (state.state !== 'content') continue;
    const selectors = extractCssSelectors(state.content);
    const matchingSelectors = specificMarkers.filter((marker) => (
      selectors.some((selector) => markerAppears(selector, marker))
    ));
    const matchingGenericSelectors = genericMarkers.filter((marker) => (
      selectors.some((selector) => markerAppears(selector, marker))
    ));
    const evidenceFor = (matched) => ({
      path: path.relative(themeDir, filePath).replaceAll('\\', '/'),
      state: state.state,
      matchingSelectors: uniqueSorted(matched),
      selectors: selectors.filter((selector) => matched.some((marker) => markerAppears(selector, marker))),
      mediaQueries: extractConditionalQueries(state.content, 'media', matched),
      containerQueries: extractConditionalQueries(state.content, 'container', matched),
      assets: extractCssAssetsForMarkers(state.content, matched),
    });
    if (matchingSelectors.length) sharedCss.push(evidenceFor(matchingSelectors));
    if (matchingGenericSelectors.length) genericSharedCss.push(evidenceFor(matchingGenericSelectors));
  }

  for (const filePath of listFiles(path.join(themeDir, 'js'), '.js')) {
    const evidence = jsEvidence(filePath);
    if (evidence.state !== 'content') continue;
    const matchingHooks = evidence.hooks.filter((hook) => specificMarkers.includes(hook));
    const matchingGenericHooks = evidence.hooks.filter((hook) => genericMarkers.includes(hook));
    const evidenceFor = (matched) => ({
      path: path.relative(themeDir, filePath).replaceAll('\\', '/'),
      state: evidence.state,
      matchingHooks: matched,
      hooks: evidence.hooks,
      assets: evidence.assets,
    });
    if (matchingHooks.length) sharedJs.push(evidenceFor(matchingHooks));
    if (matchingGenericHooks.length) genericSharedJs.push(evidenceFor(matchingGenericHooks));
  }

  const declared = declaredDependencies(moduleHtml);
  return {
    css,
    js,
    shared: {
      css: sharedCss,
      js: sharedJs,
      genericCss: genericSharedCss,
      genericJs: genericSharedJs,
    },
    dependencies: {
      declared,
      shared: {
        css: sharedCss.map(({ path: filePath }) => filePath),
        js: sharedJs.map(({ path: filePath }) => filePath),
      },
      sharedGeneric: {
        css: genericSharedCss.map(({ path: filePath }) => filePath),
        js: genericSharedJs.map(({ path: filePath }) => filePath),
      },
    },
    responsive: uniqueSorted([
      ...(css.responsiveQueries ?? []),
      ...sharedCss.flatMap(({ mediaQueries }) => mediaQueries.map((query) => `@media ${query}`)),
      ...sharedCss.flatMap(({ containerQueries }) => containerQueries.map((query) => `@container ${query}`)),
    ]),
  };
}

function walkFiles(directory, extension, result = []) {
  if (!fs.existsSync(directory)) return result;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true }).sort((a, b) => compareText(a.name, b.name))) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) walkFiles(target, extension, result);
    else if (entry.isFile() && entry.name.endsWith(extension)) result.push(target);
  }
  return result;
}

function pageLabel(relativePath, pageNames) {
  const normalized = relativePath.replaceAll('\\', '/');
  const basename = path.posix.basename(normalized);
  const slug = normalized.replace(/\.html$/i, '');
  if (pageNames && !Array.isArray(pageNames) && typeof pageNames === 'object') {
    return pageNames[normalized] ?? pageNames[basename] ?? pageNames[slug] ?? pageNames[path.posix.basename(slug)] ?? slug;
  }
  return slug;
}

export function derivePageUsage(templatesDir, pageNames = {}) {
  const usage = {};
  const files = walkFiles(templatesDir, '.html');
  files.forEach((filePath, index) => {
    const relative = path.relative(templatesDir, filePath).replaceAll('\\', '/');
    const label = Array.isArray(pageNames) ? (pageNames[index] ?? relative.replace(/\.html$/i, '')) : pageLabel(relative, pageNames);
    const source = stripTemplateComments(fs.readFileSync(filePath, 'utf8'));
    const statements = source.matchAll(/\{%[\s\S]*?%\}/g);
    for (const statement of statements) {
      if (!/^\{%\s*(?:dnd_module|module)\b/.test(statement[0])) continue;
      const pathMatch = statement[0].match(/\bpath\s*=\s*(["'])(.*?)\1/);
      if (!pathMatch) continue;
      const name = normalizeModuleName(pathMatch[2]);
      if (!name) continue;
      usage[name] ??= [];
      usage[name].push(label);
    }
  });

  return Object.fromEntries(
    Object.entries(usage)
      .sort(([a], [b]) => compareText(a, b))
      .map(([name, pages]) => [name, uniqueSorted(pages)]),
  );
}

function stableValue(value) {
  if (value === undefined) return 'undefined';
  if (value === null || typeof value !== 'object') return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableValue).join(',')}]`;
  return `{${Object.keys(value).sort(compareText).map((key) => `${JSON.stringify(key)}:${stableValue(value[key])}`).join(',')}}`;
}

function normalizeFields(fields) {
  if (!Array.isArray(fields)) return [];
  return fields.every((field) => field && typeof field.path === 'string') ? fields : flattenFields(fields);
}

function stateOf(evidence) {
  return evidence?.state ?? 'absent';
}

function countedValues(counts) {
  return Object.entries(counts ?? {}).flatMap(([value, count]) => (
    Array(Math.max(0, Number(count) || 0)).fill(value)
  ));
}

export function buildSemanticProfile(moduleRecord) {
  if (moduleRecord?._semanticProfile === true) return moduleRecord;
  const registry = moduleRecord?.registry ?? {};
  const meta = moduleRecord?.meta ?? {};
  const fields = normalizeFields(moduleRecord?.fields ?? []);
  const html = typeof moduleRecord?.html === 'string'
    ? extractHtmlEvidence(moduleRecord.html)
    : (moduleRecord?.html ?? moduleRecord?.htmlEvidence ?? extractHtmlEvidence(''));
  const files = moduleRecord?.files ?? {};
  const css = files.css ?? { state: 'absent', selectors: [], mediaQueries: [], assets: [] };
  const js = files.js ?? { state: 'absent', hooks: [], assets: [] };
  const sharedCss = files.shared?.css ?? [];
  const sharedJs = files.shared?.js ?? [];
  const genericSharedCss = files.shared?.genericCss ?? [];
  const genericSharedJs = files.shared?.genericJs ?? [];
  const declaredDependencies = files.dependencies?.declared ?? { css: [], js: [] };
  const sharedDependencies = files.dependencies?.shared ?? { css: [], js: [] };
  const genericSharedDependencies = files.dependencies?.sharedGeneric ?? { css: [], js: [] };
  const pages = uniqueSorted([
    ...(moduleRecord?.pages ?? []),
    ...(registry.paginas_portal ?? []),
  ]);

  const fieldContract = fields.map((field) => [
    field.path,
    field.type ?? 'unknown',
    field.required === true ? 'required' : 'optional',
    field.repeater === true ? 'repeater' : 'single',
    stableValue(field.occurrence),
    stableValue(field.default),
  ].join('|'));
  const fieldShape = fields.map((field) => [
    field.depth ?? Math.max(0, String(field.path).split('.').length - 1),
    field.type ?? 'unknown',
    field.required === true ? 'required' : 'optional',
    field.repeater === true ? 'repeater' : 'single',
    field.occursWithinRepeater === true ? 'inside-repeater' : 'standalone',
  ].join('|'));
  const elementCounts = html.elementCounts ?? Object.fromEntries(
    (html.elements ?? []).map((element) => [element, 1]),
  );
  const elementShape = Object.entries(elementCounts)
    .sort(([a], [b]) => compareText(a, b))
    .map(([element, count]) => `${element}:${count}`);
  const rootElementCounts = html.rootElementCounts ?? {};
  const parentChildCounts = html.parentChildCounts ?? {};
  const hierarchyCounts = html.hierarchyCounts ?? {};
  const cssSelectors = uniqueSorted([
    ...(css.selectors ?? []),
    ...sharedCss.flatMap((entry) => entry.selectors ?? entry.matchingSelectors ?? []),
  ]);
  const jsHooks = uniqueSorted([
    ...(js.hooks ?? []),
    ...sharedJs.flatMap((entry) => entry.matchingHooks ?? entry.hooks ?? []),
  ]);
  const responsive = uniqueSorted(files.responsive ?? [
    ...(css.mediaQueries ?? []).map((query) => `@media ${query}`),
    ...(css.containerQueries ?? []).map((query) => `@container ${query}`),
    ...sharedCss.flatMap((entry) => (entry.mediaQueries ?? []).map((query) => `@media ${query}`)),
    ...sharedCss.flatMap((entry) => (entry.containerQueries ?? []).map((query) => `@container ${query}`)),
  ]);
  const assets = uniqueSorted([
    ...(html.assets ?? []),
    ...(css.assets ?? []),
    ...(js.assets ?? []),
    ...sharedCss.flatMap((entry) => entry.assets ?? []),
    ...sharedJs.flatMap((entry) => entry.assets ?? []),
  ]);
  const dependencies = {
    css: uniqueSorted([...(declaredDependencies.css ?? []), ...(sharedDependencies.css ?? [])]),
    js: uniqueSorted([...(declaredDependencies.js ?? []), ...(sharedDependencies.js ?? [])]),
  };

  return {
    _semanticProfile: true,
    name: moduleRecord?.name ?? null,
    metadata: {
      estado: registry.estado ?? null,
      tier: registry.tier ?? null,
      family: registry.familia ?? registry.family ?? null,
      capabilities: uniqueSorted(registry.capacidades ?? registry.capabilities ?? []),
      global: typeof meta.global === 'boolean' ? meta.global : null,
      categories: uniqueSorted(meta.categories ?? []),
      contentTypes: uniqueSorted(meta.content_types ?? []),
    },
    fields: {
      entries: fields,
      contract: uniqueSorted(fieldContract),
      shape: [...fieldShape].sort(compareText),
      types: uniqueSorted(fields.map(({ type }) => type)),
      repeaters: uniqueSorted(fields.filter(({ repeater }) => repeater).map(({ path: fieldPath }) => fieldPath)),
    },
    html: {
      rootElements: uniqueSorted(html.rootElements ?? []),
      rootElementCounts,
      rootClasses: uniqueSorted(html.rootClasses ?? []),
      rootIds: uniqueSorted(html.rootIds ?? []),
      rootDataAttributes: uniqueSorted(html.rootDataAttributes ?? []),
      elements: uniqueSorted(html.elements ?? []),
      elementCounts,
      elementShape,
      parentChildCounts,
      parentChildShape: Object.entries(parentChildCounts)
        .sort(([a], [b]) => compareText(a, b))
        .map(([edge, count]) => `${edge}:${count}`),
      hierarchyCounts,
      hierarchyShape: Object.entries(hierarchyCounts)
        .sort(([a], [b]) => compareText(a, b))
        .map(([branch, count]) => `${branch}:${count}`),
      dynamicTags: (html.dynamicTags ?? []).map((entry) => ({
        expression: entry.expression,
        tag: entry.tag ?? 'dynamic',
        fallbackTags: uniqueSorted(entry.fallbackTags ?? []),
      })),
      classes: uniqueSorted(html.classes ?? []),
      ids: uniqueSorted(html.ids ?? []),
      dataAttributes: uniqueSorted((html.dataAttributes ?? []).map(({ name }) => name)),
      hooks: uniqueSorted(html.hooks ?? []),
      forms: html.forms ?? { htmlCount: 0, hubspotTagCount: 0, operational: false },
      assetReferences: (html.assetReferences ?? []).map((reference) => ({ ...reference })),
    },
    css: {
      state: stateOf(css),
      selectors: cssSelectors,
    },
    js: {
      state: stateOf(js),
      hooks: jsHooks,
    },
    variants: uniqueSorted(registry.variantes ?? registry.variants ?? []),
    relations: (registry.relaciones ?? registry.relations ?? []).map((relation) => ({ ...relation })),
    responsive,
    assets,
    dependencies,
    sharedGeneric: {
      cssSelectors: uniqueSorted(genericSharedCss.flatMap((entry) => entry.matchingSelectors ?? entry.selectors ?? [])),
      jsHooks: uniqueSorted(genericSharedJs.flatMap((entry) => entry.matchingHooks ?? entry.hooks ?? [])),
      dependencies: {
        css: uniqueSorted(genericSharedDependencies.css ?? []),
        js: uniqueSorted(genericSharedDependencies.js ?? []),
      },
    },
    pages,
    nameTokens: uniqueSorted(String(moduleRecord?.name ?? '').toLowerCase().split(/[^a-z0-9áéíóúñ]+/).filter(Boolean)),
  };
}

function jaccard(left, right) {
  const a = new Set(left ?? []);
  const b = new Set(right ?? []);
  if (!a.size || !b.size) return 0;
  const intersection = [...a].filter((value) => b.has(value)).length;
  return intersection / (a.size + b.size - intersection);
}

function multisetJaccard(left, right) {
  if (!(left?.length) || !(right?.length)) return 0;
  const counts = (values) => {
    const result = new Map();
    for (const value of values) result.set(value, (result.get(value) ?? 0) + 1);
    return result;
  };
  const a = counts(left);
  const b = counts(right);
  const keys = new Set([...a.keys(), ...b.keys()]);
  let intersection = 0;
  let union = 0;
  for (const key of keys) {
    intersection += Math.min(a.get(key) ?? 0, b.get(key) ?? 0);
    union += Math.max(a.get(key) ?? 0, b.get(key) ?? 0);
  }
  return union ? intersection / union : 0;
}

function roundScore(score) {
  return Math.round(score * 1000) / 1000;
}

function candidateComparison(left, right) {
  const evidence = [];
  let score = 0;
  let substantiveSignals = 0;
  const add = (dimension, similarity, weight, matches, substantive = true) => {
    if (similarity <= 0) return;
    score += similarity * weight;
    if (substantive) substantiveSignals += 1;
    evidence.push({ dimension, score: roundScore(similarity), matches: uniqueSorted(matches) });
  };

  if (left.metadata.family && left.metadata.family === right.metadata.family) {
    add('metadata', 1, 0.16, [`familia:${left.metadata.family}`]);
  }
  const capabilityMatches = left.metadata.capabilities.filter((value) => right.metadata.capabilities.includes(value));
  add('metadata', jaccard(left.metadata.capabilities, right.metadata.capabilities), 0.18, capabilityMatches);
  const platformMetadataMatches = [
    ...left.metadata.categories.filter((value) => right.metadata.categories.includes(value)).map((value) => `category:${value}`),
    ...left.metadata.contentTypes.filter((value) => right.metadata.contentTypes.includes(value)).map((value) => `content_type:${value}`),
  ];
  add(
    'metadata-plataforma',
    jaccard(
      [...left.metadata.categories.map((value) => `category:${value}`), ...left.metadata.contentTypes.map((value) => `content_type:${value}`)],
      [...right.metadata.categories.map((value) => `category:${value}`), ...right.metadata.contentTypes.map((value) => `content_type:${value}`)],
    ),
    0.01,
    platformMetadataMatches,
  );

  const fieldSimilarity = multisetJaccard(left.fields.shape, right.fields.shape);
  const fieldMatches = uniqueSorted(left.fields.shape.filter((value) => right.fields.shape.includes(value)));
  add('fields', fieldSimilarity, 0.20, fieldMatches);

  const htmlMatches = left.html.elementShape.filter((value) => right.html.elementShape.includes(value));
  const elementSimilarity = multisetJaccard(
    countedValues(left.html.elementCounts),
    countedValues(right.html.elementCounts),
  );
  const parentChildSimilarity = multisetJaccard(
    countedValues(left.html.parentChildCounts),
    countedValues(right.html.parentChildCounts),
  );
  const hierarchySimilarity = multisetJaccard(
    countedValues(left.html.hierarchyCounts),
    countedValues(right.html.hierarchyCounts),
  );
  let htmlSimilarity = (elementSimilarity * 0.45) + (parentChildSimilarity * 0.30) + (hierarchySimilarity * 0.25);
  if (left.html.forms.operational !== right.html.forms.operational) htmlSimilarity *= 0.25;
  add('html', htmlSimilarity, 0.13, htmlMatches);

  const structureMatches = uniqueSorted([
    ...left.html.parentChildShape.filter((value) => right.html.parentChildShape.includes(value)),
    ...left.html.hierarchyShape.filter((value) => right.html.hierarchyShape.includes(value)),
  ]);
  add(
    'html/estructura',
    (parentChildSimilarity + hierarchySimilarity) / 2,
    0.04,
    structureMatches,
  );

  const leftRootSignature = [
    ...left.html.rootElements.map((value) => `tag:${value}`),
    ...left.html.rootClasses.map((value) => `class:${value}`),
    ...left.html.rootIds.map((value) => `id:${value}`),
    ...left.html.rootDataAttributes.map((value) => `data:${value}`),
  ];
  const rightRootSignature = [
    ...right.html.rootElements.map((value) => `tag:${value}`),
    ...right.html.rootClasses.map((value) => `class:${value}`),
    ...right.html.rootIds.map((value) => `id:${value}`),
    ...right.html.rootDataAttributes.map((value) => `data:${value}`),
  ];
  const rootMatches = leftRootSignature.filter((value) => rightRootSignature.includes(value));
  add('html/raiz', jaccard(leftRootSignature, rightRootSignature), 0.04, rootMatches);

  const hookMatches = left.html.hooks.filter((value) => right.html.hooks.includes(value));
  add('html', jaccard(left.html.hooks, right.html.hooks), 0.08, hookMatches);

  const cssMatches = left.css.selectors.filter((value) => right.css.selectors.includes(value));
  add('css', jaccard(left.css.selectors, right.css.selectors), 0.05, cssMatches);

  const jsMatches = left.js.hooks.filter((value) => right.js.hooks.includes(value));
  add('js/hooks', jaccard(left.js.hooks, right.js.hooks), 0.07, jsMatches);

  const variantMatches = left.variants.filter((value) => right.variants.includes(value));
  add('variantes', jaccard(left.variants, right.variants), 0.04, variantMatches);

  const responsiveMatches = left.responsive.filter((value) => right.responsive.includes(value));
  add('responsive', jaccard(left.responsive, right.responsive), 0.03, responsiveMatches);

  const assetMatches = left.assets.filter((value) => right.assets.includes(value));
  add('assets', jaccard(left.assets, right.assets), 0.02, assetMatches);

  const dependencyMatches = [
    ...left.dependencies.css.filter((value) => right.dependencies.css.includes(value)),
    ...left.dependencies.js.filter((value) => right.dependencies.js.includes(value)),
  ];
  add(
    'dependencias',
    jaccard([...left.dependencies.css, ...left.dependencies.js], [...right.dependencies.css, ...right.dependencies.js]),
    0.025,
    dependencyMatches,
  );

  const pageMatches = left.pages.filter((value) => right.pages.includes(value));
  add('paginas', jaccard(left.pages, right.pages), 0.015, pageMatches);

  const nameMatches = left.nameTokens.filter((value) => right.nameTokens.includes(value));
  add('nombre', jaccard(left.nameTokens, right.nameTokens), 0.03, nameMatches, false);

  const capabilitySimilarity = jaccard(left.metadata.capabilities, right.metadata.capabilities);
  const hookSimilarity = jaccard(left.js.hooks, right.js.hooks);
  const cssSimilarity = jaccard(left.css.selectors, right.css.selectors);
  const explicitRelation = [
    ...(left.relations ?? []),
    ...(right.relations ?? []),
  ].some((relation) => relation?.tipo === 'candidato'
    && (relation.referencia === left.name || relation.referencia === right.name));
  const familyMatch = Boolean(left.metadata.family && left.metadata.family === right.metadata.family);
  const semanticAnchor = explicitRelation
    || (familyMatch && (capabilitySimilarity >= 0.20 || (fieldSimilarity >= 0.50 && htmlSimilarity >= 0.50)))
    || (capabilitySimilarity >= 0.35 && (fieldSimilarity >= 0.45 || htmlSimilarity >= 0.55))
    || (fieldSimilarity >= 0.80 && htmlSimilarity >= 0.75 && (hookSimilarity >= 0.25 || cssSimilarity >= 0.25));

  if (explicitRelation) {
    score += 0.10;
    evidence.push({ dimension: 'relacion-curada', score: 1, matches: ['candidato'] });
    substantiveSignals += 1;
  }

  return { score: roundScore(score), substantiveSignals, evidence, semanticAnchor, explicitRelation };
}

export function findSemanticCandidates(records, target, options = {}) {
  const targetProfile = buildSemanticProfile(target);
  const threshold = options.threshold ?? 0.30;

  return (records ?? [])
    .map((record) => buildSemanticProfile(record))
    .filter((profile) => profile.name !== targetProfile.name)
    .map((profile) => ({ profile, ...candidateComparison(targetProfile, profile) }))
    .filter(({ score, substantiveSignals, semanticAnchor, explicitRelation }) => (
      semanticAnchor && substantiveSignals >= 2 && (score >= threshold || (explicitRelation && score >= 0.20))
    ))
    .map(({ profile, score, evidence }) => ({
      name: profile.name,
      score,
      isCandidate: true,
      evidence,
      reasons: evidence.map(({ dimension, matches }) => `${dimension}: ${matches.join(', ')}`),
    }))
    .sort((a, b) => b.score - a.score || compareText(a.name, b.name));
}

function missing(required, available) {
  const set = new Set(available ?? []);
  return uniqueSorted((required ?? []).filter((value) => !set.has(value)));
}

function dimension(evidence, gaps) {
  return { evidence, gaps: uniqueSorted(gaps) };
}

export function evaluateCompatibility(source, targetRequirements) {
  const current = buildSemanticProfile(source);
  const required = buildSemanticProfile(targetRequirements);
  const dimensions = {};

  const metadataGaps = [];
  if (required.metadata.family && current.metadata.family !== required.metadata.family) {
    metadataGaps.push(`familia requerida=${required.metadata.family}; disponible=${current.metadata.family ?? 'sin-evidencia'}`);
  }
  for (const capability of missing(required.metadata.capabilities, current.metadata.capabilities)) {
    metadataGaps.push(`falta capacidad:${capability}`);
  }
  if (required.metadata.tier && current.metadata.tier !== required.metadata.tier) {
    metadataGaps.push(`tier requerido=${required.metadata.tier}; disponible=${current.metadata.tier ?? 'sin-evidencia'}`);
  }
  if (required.metadata.global !== null && current.metadata.global !== required.metadata.global) {
    metadataGaps.push(`meta.global requerido=${required.metadata.global}; disponible=${current.metadata.global ?? 'sin-evidencia'}`);
  }
  if (required.metadata.estado && current.metadata.estado !== required.metadata.estado) {
    metadataGaps.push(`estado requerido=${required.metadata.estado}; disponible=${current.metadata.estado ?? 'sin-evidencia'}`);
  }
  for (const category of missing(required.metadata.categories, current.metadata.categories)) {
    metadataGaps.push(`falta category:${category}`);
  }
  for (const contentType of missing(required.metadata.contentTypes, current.metadata.contentTypes)) {
    metadataGaps.push(`falta content_type:${contentType}`);
  }
  dimensions.metadata = dimension([
    `familia:${current.metadata.family ?? 'null'}`,
    `estado:${current.metadata.estado ?? 'null'}`,
    `tier:${current.metadata.tier ?? 'null'}`,
    `meta.global:${current.metadata.global ?? 'null'}`,
    ...current.metadata.capabilities.map((value) => `capacidad:${value}`),
    ...current.metadata.categories.map((value) => `category:${value}`),
    ...current.metadata.contentTypes.map((value) => `content_type:${value}`),
  ], metadataGaps);

  const fieldGaps = missing(required.fields.contract, current.fields.contract).map((value) => `falta field:${value}`);
  dimensions.fields = dimension(current.fields.contract, fieldGaps);

  const htmlGaps = [
    ...missing(required.html.rootElements, current.html.rootElements).map((value) => `falta raíz:${value}`),
    ...missing(required.html.rootClasses, current.html.rootClasses).map((value) => `falta clase raíz:.${value}`),
    ...missing(required.html.rootIds, current.html.rootIds).map((value) => `falta id raíz:#${value}`),
    ...missing(required.html.rootDataAttributes, current.html.rootDataAttributes).map((value) => `falta atributo raíz:${value}`),
    ...missing(required.html.elements, current.html.elements).map((value) => `falta elemento:${value}`),
    ...missing(required.html.classes, current.html.classes).map((value) => `falta clase:.${value}`),
    ...missing(required.html.ids, current.html.ids).map((value) => `falta id:#${value}`),
    ...missing(required.html.dataAttributes, current.html.dataAttributes).map((value) => `falta atributo:${value}`),
  ];
  for (const [element, count] of Object.entries(required.html.elementCounts)) {
    const availableCount = current.html.elementCounts[element] ?? 0;
    if (availableCount < count) htmlGaps.push(`faltan elementos:${element} requeridos=${count}; disponibles=${availableCount}`);
  }
  for (const [element, count] of Object.entries(required.html.rootElementCounts)) {
    const availableCount = current.html.rootElementCounts[element] ?? 0;
    if (availableCount < count) htmlGaps.push(`faltan raíces:${element} requeridas=${count}; disponibles=${availableCount}`);
  }
  for (const [edge, count] of Object.entries(required.html.parentChildCounts)) {
    const availableCount = current.html.parentChildCounts[edge] ?? 0;
    if (availableCount < count) htmlGaps.push(`falta relación padre-hijo:${edge} requeridas=${count}; disponibles=${availableCount}`);
  }
  for (const [branch, count] of Object.entries(required.html.hierarchyCounts)) {
    const availableCount = current.html.hierarchyCounts[branch] ?? 0;
    if (availableCount < count) htmlGaps.push(`falta jerarquía:${branch} requeridas=${count}; disponibles=${availableCount}`);
  }
  if (required.html.forms.operational && !current.html.forms.operational) htmlGaps.push('falta formulario operativo');
  dimensions.html = dimension([
    ...current.html.rootElements.map((value) => `raíz:${value}`),
    ...current.html.rootClasses.map((value) => `clase-raíz:.${value}`),
    ...current.html.rootIds.map((value) => `id-raíz:#${value}`),
    ...current.html.rootDataAttributes.map((value) => `atributo-raíz:${value}`),
    ...current.html.elements.map((value) => `elemento:${value}`),
    ...current.html.classes.map((value) => `clase:.${value}`),
    ...current.html.parentChildShape.map((value) => `padre-hijo:${value}`),
    ...current.html.hierarchyShape.map((value) => `jerarquía:${value}`),
    `formulario-operativo:${current.html.forms.operational}`,
  ], htmlGaps);

  const cssGaps = missing(required.css.selectors, current.css.selectors).map((value) => `falta selector:${value}`);
  if (required.css.state === 'content' && current.css.state !== 'content') {
    cssGaps.push(`CSS requerido con contenido; disponible=${current.css.state}`);
  }
  dimensions.css = dimension([`estado:${current.css.state}`, ...current.css.selectors], cssGaps);

  const jsGaps = missing(required.js.hooks, current.js.hooks).map((value) => `falta hook:${value}`);
  if (required.js.state === 'content' && current.js.state !== 'content') {
    jsGaps.push(`JS requerido con contenido; disponible=${current.js.state}`);
  }
  dimensions['js/hooks'] = dimension([`estado:${current.js.state}`, ...current.js.hooks], jsGaps);

  dimensions.variantes = dimension(
    current.variants,
    missing(required.variants, current.variants).map((value) => `falta variante:${value}`),
  );

  dimensions.responsive = dimension(
    current.responsive,
    missing(required.responsive, current.responsive).map((value) => `falta regla responsive:${value}`),
  );

  dimensions.assets = dimension(
    current.assets,
    missing(required.assets, current.assets).map((value) => `falta asset:${value}`),
  );

  const currentDependencies = [...current.dependencies.css.map((value) => `css:${value}`), ...current.dependencies.js.map((value) => `js:${value}`)];
  const requiredDependencies = [...required.dependencies.css.map((value) => `css:${value}`), ...required.dependencies.js.map((value) => `js:${value}`)];
  dimensions.dependencias = dimension(
    currentDependencies,
    missing(requiredDependencies, currentDependencies).map((value) => `falta dependencia:${value}`),
  );

  const pageGaps = missing(required.pages, current.pages).map((value) => `uso objetivo no observado:${value}`);
  for (const page of current.pages.filter((value) => !required.pages.includes(value))) {
    pageGaps.push(`impacto existente a revisar:${page}`);
  }
  dimensions.paginas = dimension(current.pages, pageGaps);

  const gaps = Object.entries(dimensions).flatMap(([dimensionName, detail]) => (
    detail.gaps.map((gap) => ({ dimension: dimensionName, detail: gap }))
  ));

  return {
    source: current.name,
    target: required.name,
    compatible: gaps.length === 0,
    decision: null,
    dimensions,
    gaps,
  };
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function replaceAutoBlock(document, blockName, content) {
  const start = `<!-- AUTO:${blockName}:START -->`;
  const end = `<!-- AUTO:${blockName}:END -->`;
  const startCount = String(document).split(start).length - 1;
  const endCount = String(document).split(end).length - 1;
  if (startCount !== 1 || endCount !== 1) {
    throw new Error(`Bloque AUTO "${blockName}" ausente o ambiguo: START=${startCount}, END=${endCount}.`);
  }
  const pattern = new RegExp(`(${escapeRegex(start)}[^\\S\\r\\n]*\\r?\\n)[\\s\\S]*?(\\r?\\n${escapeRegex(end)})`);
  const normalized = String(content).replace(/^\r?\n|\r?\n$/g, '');
  return String(document).replace(pattern, `$1${normalized}$2`);
}
