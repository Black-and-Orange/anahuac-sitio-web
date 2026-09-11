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
  // Último recurso, laxo a propósito: ni el selector ni el texto resolvieron.
  // `siblingIndex` se calculó entre hermanos del MISMO tag (indexOfType), pero
  // aquí se usa para indexar `candidates`, que son TODAS las ocurrencias del
  // tag en el scope (no necesariamente hermanas). Los espacios de índices no
  // son el mismo, así que este acierto puede ser casualidad y podría
  // mal-anclar el pin a un elemento distinto del original.
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
