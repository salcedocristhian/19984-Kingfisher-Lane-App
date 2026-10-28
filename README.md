# King Fisher Residence – MTD | Icono definitivo para iPhone

## Corrección de icono (27 oct 2026, v3)

La app ahora usa **el icono exacto del atardecer** proporcionado por el usuario.
No se modificaron los contenidos ni la geometría 3D del diseño: únicamente las referencias de iconos y la versión del Service Worker.

- iPhone: `assets/kingfisher-atardecer-apple-v3.png` (180 x 180)
- Manifest: `assets/kingfisher-atardecer-192-v3.png` y `assets/kingfisher-atardecer-512-v3.png`
- Se conservaron también los nombres anteriores de iconos con la nueva imagen, para compatibilidad.

## Instalar / actualizar

1. Descomprime el ZIP. Sube **todos los archivos y la carpeta `assets`**, no el ZIP, a la raíz del repositorio `19984-Kingfisher-Lane-App`. Sustituye los archivos existentes cuando GitHub lo indique.
2. En GitHub Actions, comprueba que `pages build and deployment` termine con éxito.
3. En Safari del iPhone, abre `https://salcedocristhian.github.io/19984-Kingfisher-Lane-App/?icon=atardecer-v3`, y usa **Compartir → Añadir a pantalla de inicio**.
4. Si hay un acceso anterior instalado con el icono viejo, retíralo de la pantalla de inicio y crea el nuevo. Comprueba primero los datos locales y exporta selecciones si las hubiese.

**Aviso:** si luego de este paquete se hicieron modificaciones más recientes a `index.html` directamente en GitHub, NO debes sobrescribir ese HTML: en ese caso modifica solo sus enlaces del icono y el registro del Service Worker, y sube la carpeta `assets`, `manifest.webmanifest` y `sw.js`.


## New: Render this view (October 28, 2026)

In the 3D Design / Build stages views, tap **Render this view** to capture the actual current camera view, with selected finish colors. From the preview you can **Download PNG**, **Share / Save to Photos** using the iPhone share menu, and **Save in My Renders**. The gallery is stored locally in the device's browser storage (IndexedDB), not on GitHub; it can be erased if the browser or home-screen app's data is cleared.

**Prepare AI render** copies a prompt and opens your system share sheet so you can send the image to ChatGPT or another image-editing tool. This action DOES NOT automatically invoke an AI model. A true one-tap photorealistic transformation requires a secure external backend with an authorized paid image-generation API and optional cloud storage. Never put an API key or GitHub personal access token in a public `index.html`.

Upload all unzipped files to your existing GitHub Pages repo, preserving `assets/`. The original 3D model is preserved. The previous Claude-only 4K download button remains unchanged; the new button works directly on GitHub Pages without Claude services.
