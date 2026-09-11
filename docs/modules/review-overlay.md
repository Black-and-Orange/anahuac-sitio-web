# Módulo: review-overlay (capa de revisión visual)

Herramienta de tooling interno (NO es un componente del design system). Vive
aislada en `assets/review/` y no toca tokens, componentes ni el diseño del sitio.

## Responsabilidad
Permitir comentarios visuales anclados a elementos estables del DOM durante la
revisión con clientes, activados por `?review=true&token=XXX`.

## Contrato
- **Activación:** footprint cero salvo `?review=true` + token en `config.tokens`.
- **Aislamiento:** toda la UI en Shadow DOM; prefijo de clases `bnor-`.
- **Anclaje:** `selector` + `fingerprint` (nunca coordenadas); reposición en resize/scroll.
- **Almacenamiento:** interfaz `ReviewStore` (`list`, `create`, `update`, `delete`).
  - Fase 1: `LocalStorageStore` (cliente).
  - Fase 2a: `SupabaseStore` (compartida, RLS: anon INSERT/SELECT/DELETE, authenticated todas).
- **Tarjeta de pin:** solo-lectura de estado en página; muestra el hilo de **respuestas** del equipo (visible para el cliente) y un botón **Eliminar** solo en los comentarios creados desde ese navegador (`mine.js`; alcance de interfaz, no de servidor).
- **Pins encimados:** varios comentarios sobre el mismo elemento se despliegan en abanico (offset 22px) para que todos sean visibles/clicables.
- **Deep-link:** `#comment=<id>` para scroll y highlight de comentarios.
- **Estados:** `pendiente | en-proceso | resuelto`.
- **Panel `/admin`:** requiere autenticación Supabase; agrupa por elemento, muestra respuestas, y permite cambiar estado, responder, eliminar e ir al elemento.
- **Borrado:** la política RLS permite DELETE anónimo (para que el cliente corrija errores); el "solo los míos" es de interfaz. Para blindarlo, mover el borrado a una función server-side.

## Fuera de alcance (fase 2b)
Integración con ClickUp vía Edge Function + webhook.

## Pruebas
`npm test` (node --test + jsdom) cubre la lógica pura. La UI se verifica en navegador.
