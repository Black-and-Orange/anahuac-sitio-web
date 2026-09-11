# BnO Review — capa de revisión visual (drop-in)

Comentarios visuales anclados a elementos del DOM, activados con
`?review=true&token=XXX`. Sin backend en fase 1 (persiste en `localStorage`).

## Cómo replicar en otro sitio estático de Black & Orange

1. Copia la carpeta `assets/review/` completa al otro proyecto.
2. Edita `assets/review/config.js`:
   - `projectId`: identificador único del proyecto.
   - `tokens`: uno o más tokens de revisión (rotables).
3. Añade antes de `</body>` en cada página:
   `<script type="module" src="assets/review/review.js"></script>`
   (ajusta la ruta si `assets/` no está en la raíz).
4. Abre `pagina.html?review=true&token=<uno de tus tokens>`.

## Migrar a persistencia compartida (fase 2)

Implementa `SupabaseStore` con la misma interfaz que `LocalStorageStore`
(`list`, `create`, `update`) y selecciónalo desde `config.storage`.

## Pruebas

`npm test` corre la lógica pura (gate, anchor, selector, store) con `node --test`.
