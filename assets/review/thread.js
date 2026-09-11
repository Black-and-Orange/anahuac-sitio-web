// Convierte una lista plana de filas (comentarios + respuestas hijas) en solo
// los comentarios de nivel superior, cada uno con su arreglo `replies` anidado
// y ordenado por fecha. Una respuesta es una fila con `parentId`; su texto vive
// en `comment`. Se normaliza a { id, name, text, createdAt } para el render.
export function nestReplies(rows) {
  const tops = rows.filter((r) => !r.parentId);
  tops.forEach((t) => { t.replies = []; });
  const byId = new Map(tops.map((t) => [t.id, t]));
  rows.filter((r) => r.parentId).forEach((r) => {
    const parent = byId.get(r.parentId);
    if (parent) {
      parent.replies.push({ id: r.id, name: r.name, text: r.comment, createdAt: r.createdAt });
    }
  });
  tops.forEach((t) => t.replies.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)));
  return tops;
}
