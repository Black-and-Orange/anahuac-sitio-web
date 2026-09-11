import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';
import { CONFIG } from '../assets/review/config.js';

const SUPABASE_URL = CONFIG.supabase.url;
const PUBLISHABLE_KEY = CONFIG.supabase.publishableKey;
const REVIEW_TOKEN = CONFIG.tokens[0]; // para armar el deep-link a la página
const sb = createClient(SUPABASE_URL, PUBLISHABLE_KEY);

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

async function refreshSessionUI() {
  const { data } = await sb.auth.getSession();
  const authed = Boolean(data.session);
  $('login').classList.toggle('adm-hidden', authed);
  $('panel').classList.toggle('adm-hidden', !authed);
  $('logout').classList.toggle('adm-hidden', !authed);
  if (authed) load();
}

$('signin').addEventListener('click', async () => {
  $('login-error').textContent = '';
  const { error } = await sb.auth.signInWithPassword({ email: $('email').value.trim(), password: $('password').value });
  if (error) { $('login-error').textContent = error.message; return; }
  refreshSessionUI();
});

$('logout').addEventListener('click', async () => { await sb.auth.signOut(); refreshSessionUI(); });
$('refresh').addEventListener('click', load);
['f-project', 'f-page', 'f-status'].forEach((id) => $(id).addEventListener('change', load));

async function load() {
  const { data, error } = await sb.from('comments').select('*').order('created_at', { ascending: false });
  if (error) { $('rows').innerHTML = `<tr><td colspan="7" class="adm-error">${esc(error.message)}</td></tr>`; return; }
  // Anidar respuestas (filas hijas) bajo su comentario padre.
  const tops = data.filter((r) => !r.parent_id);
  tops.forEach((t) => { t.replies = []; });
  const byId = new Map(tops.map((t) => [t.id, t]));
  data.filter((r) => r.parent_id).forEach((r) => {
    const p = byId.get(r.parent_id);
    if (p) p.replies.push({ name: r.name, text: r.comment, createdAt: r.created_at });
  });
  tops.forEach((t) => t.replies.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));

  populateFilters(tops);
  const proj = $('f-project').value, page = $('f-page').value, status = $('f-status').value;
  const filtered = tops.filter((r) =>
    (!proj || r.project_id === proj) &&
    (!page || r.page === page) &&
    (!status || r.status === status));
  // Agrupar por elemento: misma página + mismo selector quedan juntos.
  filtered.sort((a, b) =>
    (a.page || '').localeCompare(b.page || '') ||
    (a.selector || '').localeCompare(b.selector || '') ||
    new Date(a.created_at) - new Date(b.created_at));
  render(filtered);
}

function populateFilters(rows) {
  const fill = (sel, values, label) => {
    const cur = $(sel).value;
    const opts = [`<option value="">${label}</option>`].concat([...new Set(values)].filter(Boolean).map((v) => `<option value="${esc(v)}">${esc(v)}</option>`));
    $(sel).innerHTML = opts.join('');
    $(sel).value = cur;
  };
  fill('f-project', rows.map((r) => r.project_id), 'Todos los proyectos');
  fill('f-page', rows.map((r) => r.page), 'Todas las páginas');
}

function render(rows) {
  let prevKey = null;
  $('rows').innerHTML = rows.map((r) => {
    const key = `${r.page}|${r.selector || ''}`;
    const groupStart = key !== prevKey;
    prevKey = key;
    const replies = Array.isArray(r.replies) ? r.replies : [];
    const repliesHtml = replies.length
      ? `<div class="adm-replies">${replies.map((rep) => `<div class="adm-reply-item"><b>${esc(rep.name || 'Equipo')}</b> ${esc(rep.text)}</div>`).join('')}</div>`
      : '';
    return `
    <tr class="${groupStart ? 'adm-group-start' : ''}">
      <td><span class="adm-badge" data-status="${esc(r.status)}">${esc(r.status)}</span></td>
      <td>${esc(r.page)}</td>
      <td><code>${esc(r.selector || '')}</code></td>
      <td>${esc(r.name)}</td>
      <td>${esc(r.comment)}${repliesHtml}</td>
      <td>${new Date(r.created_at).toLocaleString('es-MX')}</td>
      <td class="adm-actions">
        <a class="adm-link" href="../${esc(r.page)}?review=true&token=${REVIEW_TOKEN}#comment=${esc(r.id)}" target="_blank" rel="noopener">Ir</a>
        <select class="adm-status" data-id="${esc(r.id)}">
          <option value="pendiente"${r.status==='pendiente'?' selected':''}>Pendiente</option>
          <option value="en-proceso"${r.status==='en-proceso'?' selected':''}>En proceso</option>
          <option value="resuelto"${r.status==='resuelto'?' selected':''}>Resuelto</option>
        </select>
        <button class="adm-reply" data-id="${esc(r.id)}">Responder</button>
        <button class="adm-delete" data-id="${esc(r.id)}">Eliminar</button>
      </td>
    </tr>`;
  }).join('');

  $('rows').querySelectorAll('.adm-status').forEach((sel) => sel.addEventListener('change', async () => {
    const { error } = await sb.from('comments').update({ status: sel.value }).eq('id', sel.dataset.id);
    if (error) alert(error.message); else load();
  }));
  $('rows').querySelectorAll('.adm-reply').forEach((btn) => btn.addEventListener('click', async () => {
    const text = prompt('Respuesta:');
    if (!text) return;
    const parent = rows.find((r) => r.id === btn.dataset.id);
    if (!parent) return;
    // Una respuesta es una fila hija (INSERT) — sin carreras al escribir el hilo.
    const { error } = await sb.from('comments').insert({
      project_id: parent.project_id, page: parent.page, parent_id: parent.id,
      name: 'Equipo', comment: text,
    });
    if (error) alert(error.message); else load();
  }));
  $('rows').querySelectorAll('.adm-delete').forEach((btn) => btn.addEventListener('click', async () => {
    if (!confirm('¿Eliminar este comentario? No se puede deshacer.')) return;
    const { error } = await sb.from('comments').delete().eq('id', btn.dataset.id);
    if (error) alert(error.message); else load();
  }));
}

sb.auth.onAuthStateChange(() => refreshSessionUI());
refreshSessionUI();
