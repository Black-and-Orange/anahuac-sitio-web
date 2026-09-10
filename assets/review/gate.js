// Decide si el modo revisión debe activarse. Puro: recibe el querystring como
// string para ser testeable sin navegador.
export function shouldActivate(search, config) {
  const params = new URLSearchParams(search);
  if (params.get('review') !== 'true') return { active: false, token: null };
  const token = params.get('token');
  const active = Boolean(token) && config.tokens.includes(token);
  return active ? { active: true, token } : { active: false, token: null };
}
