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
