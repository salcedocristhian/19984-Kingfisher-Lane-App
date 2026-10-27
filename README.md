# King Fisher Residence · MTD (GitHub Pages / iPhone)

**Versión:** 27 de octubre de 2026. `index.html` proviene exactamente del archivo más reciente **King Fisher Residence _ MTD Painting & Construction.html**, con cambios mínimos en la cabecera para habilitar instalación móvil y registro del service worker. **No se ha reemplazado por la versión anterior.**

## Instalar en GitHub

1. Descarga el ZIP y **extráelo** en tu computadora. No subas el ZIP sin extraer: la interfaz web de GitHub no lo descomprime automáticamente.
2. Abre `salcedocristhian/19984-Kingfisher-Lane-App` → **Add file → Upload files**.
3. Arrastra **el contenido** de la carpeta extraída (no la carpeta que lo contiene): `index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll` y **la carpeta `assets/` completa**.
4. En el campo de descripción puedes poner `Update final 3D HTML and MTD iPhone icon`, luego **Commit changes**.
5. Si no está habilitado: **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**.
6. Comprueba el enlace publicado que GitHub muestra en Settings → Pages. La URL probable es: `https://salcedocristhian.github.io/19984-Kingfisher-Lane-App/` (puede cambiar si se modifica el repositorio).

## iPhone

1. Abre la dirección HTTPS de GitHub Pages en **Safari**.
2. Pulsa **Compartir → Añadir a pantalla de inicio**.
3. Verifica que el icono sea el de la fachada al atardecer con logo MTD, luego **Añadir**.
4. Si la app ya estaba instalada con un icono anterior, elimínala de la pantalla de inicio y vuelve a añadirla después de refrescar Safari (a veces iOS conserva el icono en caché).

## Contenido

- `index.html`: **último HTML del usuario**, conserva las pestañas Home, Design, Build stages, Finishes y My selections, Three.js, herramientas de diseño, etc.
- `assets/mtd-king-fisher-icon-original.png`: imagen original final proporcionada por el usuario (sin cambio de diseño).
- `assets/apple-touch-icon.png` (180×180): icono final para iPhone.
- `assets/icon-192.png`, `assets/icon-512.png`, `assets/icon-1024.png`: iconos para Android/PWA y alta resolución.
- `assets/favicon-32.png`, `assets/favicon-48.png`, `assets/favicon.ico`: iconos del navegador.
- `manifest.webmanifest`: configuración de la aplicación instalable.
- `sw.js`: cache de archivos locales; no convierte en offline las librerías de CDNs externos.
- `assets/mtd-logo.png`, `assets/king-fisher-reference.png`: identidad y referencia guardadas de la versión anterior, no sustituyen el icono final.

## Advertencias

- El HTML carga **Three.js, OrbitControls, jsPDF y Google Fonts de internet**; puede no funcionar sin red en la primera visita.
- Los diseños guardados funcionan mediante almacenamiento local del navegador; **no hay sincronización centralizada entre teléfonos**.
- Para actualizar la app, reemplaza `index.html` y haz un commit. Si se ve la versión antigua, recarga y/o borra caché del sitio.
- GitHub Pages es público en un sitio publicado típico; **no subas contratos privados, credenciales ni datos sensibles** al mismo repositorio.
- Los datos y modelos arquitectónicos de la aplicación deben contrastarse con los planos oficiales antes de usarse para takeoffs o construcción.
