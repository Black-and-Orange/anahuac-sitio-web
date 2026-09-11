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
- **Almacenamiento:** interfaz `ReviewStore` (`list`, `create`, `update`).
  - Fase 1: `LocalStorageStore` (cliente).
  - Fase 2a: `SupabaseStore` (compartida, RLS: anon INSERT/SELECT, authenticated todas).
- **Tarjeta de pin:** solo-lectura en página (sin edición desde cliente); gestión completa en `/admin`.
- **Deep-link:** `#comment=<id>` para scroll y highlight de comentarios.
- **Estados:** `pendiente | en-proceso | resuelto`.
- **Panel `/admin`:** requiere autenticación Supabase; permite cambiar estado, responder e ir al elemento.

## Fuera de alcance (fase 2b)
Integración con ClickUp vía Edge Function + webhook.

## Pruebas
`npm test` (node --test + jsdom) cubre la lógica pura. La UI se verifica en navegador.
