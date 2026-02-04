# Decap CMS en Casi Divino (Astro + JAMstack)

Configuración de Decap CMS desde cero para gestionar contenido del blog vía Git.

## Archivos del CMS

| Archivo | Descripción |
|--------|-------------|
| `public/admin/index.html` | Panel de administración (Decap CMS v2 + Netlify Identity) |
| `public/admin/config.yml` | Configuración: backend, media y colecciones |

## Rutas de contenido

- **Blog**: archivos Markdown en `src/content/blog/` (compatible con Astro Content Collections).
- **Imágenes del CMS**: se guardan en `public/images/uploads/` y se sirven en `/images/uploads/`.

## Pasos para activar en Netlify

1. **Identity**: En el sitio de Netlify → **Site settings** → **Identity** → activar.
2. **Git Gateway**: **Identity** → **Services** → **Enable Git Gateway** y autorizar el acceso al repo.
3. **Usuarios**: **Identity** → **Invite users** e invitar a quien vaya a usar el panel.

## Uso

1. Despliega el sitio en Netlify (o sube los archivos de `public/`).
2. Entra en `https://tu-dominio.netlify.app/admin`.
3. Inicia sesión con una cuenta invitada (Netlify Identity).
4. Edita o crea entradas en **Artículos del Blog**; los cambios se guardan en el repo como commits.

## Script de Identity en la web

El script de Netlify Identity está incluido en:

- **Panel**: `public/admin/index.html` (en el `<head>`), para el login en `/admin`.
- **Sitio**: `src/layouts/Layout.astro` (en el `<head>`), para que el callback de autenticación funcione al volver desde Netlify (p. ej. tras iniciar sesión).

Así el login y la redirección tras autenticarse funcionan correctamente en cualquier página del sitio.

## Notas

- Rama por defecto: `main`. Si usas otra, cámbiala en `public/admin/config.yml` (`backend.branch`).
- Las entradas del blog deben respetar el schema de `src/content/config.ts` (título, descripción, fecha, etc.) para que Astro las procese bien.
