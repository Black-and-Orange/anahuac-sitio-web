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
  Fase 1: `LocalStorageStore`. Fase 2: `SupabaseStore`.
- **Estados:** `pendiente | en-proceso | resuelto`.

## Fuera de alcance (fase 1)
Panel `/admin` global, persistencia compartida (Supabase), autenticación real.

## Pruebas
`npm test` (node --test + jsdom) cubre la lógica pura. La UI se verifica en navegador.
