import { resolveElement } from './selector-engine.js';
import { isMine, forgetMine } from './mine.js';

const STATE_LABEL = { 'pendiente': 'Pendiente', 'en-proceso': 'En proceso', 'resuelto': 'Resuelto' };

export class PinLayer {
  constructor({ root, store, config, page }) {
    this.root = root;
    this.store = store;
    this.config = config;
    this.page = page;
    this.pins = []; // { comment, el (target), pinEl }
    this._raf = null;
    this._reposition = this._reposition.bind(this);
    window.addEventListener('resize', this._scheduleReposition.bind(this), { passive: true });
    window.addEventListener('scroll', this._scheduleReposition.bind(this), { passive: true, capture: true });
  }

  async renderAll() {
    const list = await this.store.list(this.config.projectId, this.page);
    list.forEach((c, i) => this.addPin(c, i + 1));
  }

  addPin(comment, number) {
    const target = resolveElement(comment, document);
    const pinEl = document.createElement('button');
    pinEl.className = 'bnor-pin';
    pinEl.dataset.status = comment.status;
    pinEl.dataset.lost = String(!target);
    pinEl.textContent = number != null ? String(number) : '•';
    pinEl.addEventListener('click', (e) => { e.stopPropagation(); this.openCard(comment, pinEl); });
    this.root.appendChild(pinEl);
    // Si no resolvió, ancla a la sección para no perderlo.
    const anchorEl = target || (comment.fingerprint && comment.fingerprint.sectionId
      ? document.getElementById(comment.fingerprint.sectionId) : null);
    const entry = { comment, el: anchorEl, pinEl, lost: !target };
    this.pins.push(entry);
    this._place(entry);
  }

  // Cuántos pins previos comparten el mismo elemento (para desplazarlos en abanico).
  _stackIndex(entry) {
    let k = 0;
    for (const e of this.pins) {
      if (e === entry) break;
      if (e.el && e.el === entry.el) k++;
    }
    return k;
  }

  _place(entry) {
    if (!entry.el) { entry.pinEl.style.display = 'none'; return; }
    const r = entry.el.getBoundingClientRect();
    const k = this._stackIndex(entry); // 0 = primero sobre este elemento
    entry.pinEl.style.left = (r.left + Math.min(r.width, 14) + k * 22) + 'px';
    entry.pinEl.style.top = (r.top + 12) + 'px';
  }

  _scheduleReposition() {
    if (this._raf) return;
    this._raf = requestAnimationFrame(this._reposition);
  }

  _reposition() {
    this._raf = null;
    this.pins.forEach((entry) => this._place(entry));
  }

  openCard(comment, pinEl) {
    if (this._closeCardHandler) {
      document.removeEventListener('click', this._closeCardHandler, true);
      this._closeCardHandler = null;
    }
    const existing = this.root.querySelector('.bnor-card');
    if (existing) existing.remove();
    const card = document.createElement('div');
    card.className = 'bnor-card';
    const date = new Date(comment.createdAt).toLocaleString('es-MX');
    const entry = this.pins.find((p) => p.comment === comment || p.comment.id === comment.id);
    const lost = entry ? entry.lost : false;
    const replies = Array.isArray(comment.replies) ? comment.replies : [];
    const repliesHtml = replies.length
      ? `<div class="bnor-replies">${replies.map((rep) => `
          <div class="bnor-reply"><span class="bnor-reply-author">${escapeHtml(rep.name || 'Equipo')}</span> ${escapeHtml(rep.text)}</div>`).join('')}</div>`
      : '';
    const mine = isMine(comment.id);
    const deleteHtml = mine ? '<button class="bnor-btn bnor-btn--danger" data-act="delete">Eliminar</button>' : '';
    card.innerHTML = `
      <div class="bnor-author">${escapeHtml(comment.name)}</div>
      <div class="bnor-date">${date}</div>
      ${lost ? '<div class="bnor-lost">Elemento no localizado — anclado a la sección</div>' : ''}
      <div class="bnor-body">${escapeHtml(comment.comment)}</div>
      <div class="bnor-badge" data-status="${comment.status}">${STATE_LABEL[comment.status] || comment.status}</div>
      ${repliesHtml}
      ${deleteHtml ? `<div class="bnor-card-actions">${deleteHtml}</div>` : ''}`;
    const r = pinEl.getBoundingClientRect();
    card.style.left = Math.max(12, Math.min(r.left, window.innerWidth - 312)) + 'px';
    card.style.top = Math.max(12, Math.min(r.bottom + 8, window.innerHeight - 160)) + 'px';
    this.root.appendChild(card);

    if (mine) {
      card.querySelector('[data-act="delete"]').addEventListener('click', async (ev) => {
        ev.stopPropagation();
        if (!window.confirm('¿Eliminar este comentario? No se puede deshacer.')) return;
        try {
          await this.store.delete(this.config.projectId, this.page, comment.id);
        } catch (e) { console.warn('[BnO Review] no se pudo eliminar:', e); return; }
        forgetMine(comment.id);
        card.remove();
        this._removePin(comment.id);
      });
    }

    const closeOnOutside = (ev) => {
      if (!ev.target.closest || !ev.target.closest('#bno-review-root')) {
        card.remove();
        document.removeEventListener('click', closeOnOutside, true);
        this._closeCardHandler = null;
      }
    };
    this._closeCardHandler = closeOnOutside;
    setTimeout(() => document.addEventListener('click', closeOnOutside, true), 0);
  }

  _removePin(id) {
    const idx = this.pins.findIndex((p) => p.comment.id === id);
    if (idx === -1) return;
    this.pins[idx].pinEl.remove();
    this.pins.splice(idx, 1);
  }

  focusComment(id) {
    const entry = this.pins.find((p) => p.comment.id === id);
    if (!entry) return;
    if (entry.el && entry.el.scrollIntoView) {
      entry.el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    entry.pinEl.classList.add('bnor-pin--focus');
    setTimeout(() => entry.pinEl.classList.remove('bnor-pin--focus'), 2600);
  }
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
