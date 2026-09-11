import { resolveAnchor } from './anchor-resolver.js';
import { buildSelector, buildFingerprint } from './selector-engine.js';
import { PinLayer } from './pin-layer.js';
import { rememberMine } from './mine.js';

const REVIEWER_KEY = 'bno-review:reviewer-name';

export class ReviewUI {
  constructor({ store, config, token, page }) {
    this.store = store;
    this.config = config;
    this.token = token;
    this.page = page;
    this.mode = false;
    this.onCommentCreated = () => {};
    this._onDocMove = this._onDocMove.bind(this);
    this._onDocClick = this._onDocClick.bind(this);
  }

  mount() {
    const host = document.createElement('div');
    host.id = 'bno-review-root';
    document.body.appendChild(host);
    this.root = host.attachShadow({ mode: 'open' });

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL('./review.css', import.meta.url).href;
    this.root.appendChild(link);

    this.fab = document.createElement('button');
    this.fab.className = 'bnor-fab';
    this.fab.textContent = '💬 Comentar';
    this.fab.addEventListener('click', () => this.setMode(!this.mode));
    this.root.appendChild(this.fab);

    this.outline = document.createElement('div');
    this.outline.className = 'bnor-hover-outline bnor-hidden';
    this.root.appendChild(this.outline);

    this.pinLayer = new PinLayer({ root: this.root, store: this.store, config: this.config, page: this.page });
    this.onCommentCreated = (comment) => this.pinLayer.addPin(comment, this.pinLayer.pins.length + 1);
    this.ready = this.pinLayer.renderAll().catch((e) => {
      console.warn('[BnO Review] no se pudieron cargar los comentarios:', e);
    });
  }

  setMode(on) {
    this.mode = on;
    this.fab.dataset.active = String(on);
    this.fab.textContent = on ? '✕ Cancelar' : '💬 Comentar';
    if (on) {
      document.addEventListener('mousemove', this._onDocMove, true);
      document.addEventListener('click', this._onDocClick, true);
    } else {
      document.removeEventListener('mousemove', this._onDocMove, true);
      document.removeEventListener('click', this._onDocClick, true);
      this.outline.classList.add('bnor-hidden');
    }
  }

  _fromOverlay(target) {
    // Ignora eventos originados en nuestra propia UI (host en light DOM).
    return target && target.closest && target.closest('#bno-review-root');
  }

  _onDocMove(e) {
    if (this._fromOverlay(e.target)) { this.outline.classList.add('bnor-hidden'); return; }
    const el = resolveAnchor(e.target);
    if (!el || el === document.body) { this.outline.classList.add('bnor-hidden'); return; }
    const r = el.getBoundingClientRect();
    Object.assign(this.outline.style, {
      left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px',
    });
    this.outline.classList.remove('bnor-hidden');
  }

  _onDocClick(e) {
    if (this._fromOverlay(e.target)) return;
    e.preventDefault();
    e.stopPropagation();
    const el = resolveAnchor(e.target);
    if (!el || el === document.body) return;
    this.setMode(false);
    this.openForm(el, e.clientX, e.clientY);
  }

  openForm(el, x, y) {
    const anchor = { selector: buildSelector(el), fingerprint: buildFingerprint(el) };
    const form = document.createElement('div');
    form.className = 'bnor-form';
    const savedName = localStorage.getItem(REVIEWER_KEY) || '';
    form.innerHTML = `
      <h3>Nuevo comentario</h3>
      <input class="bnor-name" placeholder="Tu nombre" value="${savedName.replace(/"/g, '&quot;')}">
      <textarea class="bnor-text" placeholder="Escribe tu comentario…"></textarea>
      <div class="bnor-row">
        <button class="bnor-btn bnor-btn--ghost" data-act="cancel">Cancelar</button>
        <button class="bnor-btn bnor-btn--primary" data-act="save">Guardar</button>
      </div>`;
    const left = Math.min(x, window.innerWidth - 292);
    const top = Math.min(y, window.innerHeight - 200);
    form.style.left = Math.max(12, left) + 'px';
    form.style.top = Math.max(12, top) + 'px';
    this.root.appendChild(form);
    form.querySelector('.bnor-text').focus();

    form.addEventListener('click', async (ev) => {
      const act = ev.target.dataset.act;
      if (act === 'cancel') { form.remove(); return; }
      if (act === 'save') {
        const name = form.querySelector('.bnor-name').value.trim() || 'Anónimo';
        const text = form.querySelector('.bnor-text').value.trim();
        if (!text) { form.querySelector('.bnor-text').focus(); return; }
        localStorage.setItem(REVIEWER_KEY, name);
        const created = await this.store.create({
          projectId: this.config.projectId,
          page: this.page,
          selector: anchor.selector,
          fingerprint: anchor.fingerprint,
          name,
          comment: text,
        });
        rememberMine(created.id);
        form.remove();
        this.onCommentCreated(created);
      }
    });
  }
}
