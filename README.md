# King Fisher Residence — MTD Design Studio

Web app interactiva de la residencia de **19984 King Fisher Ln, Loxahatchee, Florida**.

## Qué incluye

- `index.html`: modelo Three.js y Design Studio del HTML ya disponible en el proyecto.
- `assets/mtd-logo.png`: logotipo oficial aportado por el usuario.
- `assets/king-fisher-reference.png`: imagen arquitectónica conceptual aportada por el usuario.
- `assets/icon-192.png`, `assets/icon-512.png`, `assets/apple-touch-icon.png`, `assets/favicon.ico`: identidad para web y pantalla de inicio.
- `manifest.webmanifest`: identificación e iconos de la app.
- `sw.js`: caché local del documento y archivos propios (no garantiza disponibilidad offline de Three.js).
- `assets/brand-preview.jpg`: banner de marca.

## Publicar en GitHub Pages (subiendo archivos por la web)

1. **Descomprime** el ZIP en tu computadora. GitHub NO descomprime un archivo ZIP que se suba directamente al repositorio.
2. En el repositorio `salcedocristhian/19984-Kingfisher-Lane-App`, abre **Add file → Upload files**.
3. Arrastra **todos los archivos y la carpeta `assets/`** desde dentro de `King_Fisher_MTD_GitHub_Ready`, manteniendo la estructura. `index.html` debe estar en la raíz del repo, no dentro de otra carpeta.
4. Pulsa **Commit changes**.
5. Abre **Settings → Pages → Build and deployment → Deploy from a branch**, selecciona **main** y **/(root)** y guarda.
6. Abre la dirección de GitHub Pages que muestre Settings → Pages. La dirección usual para este repo es `https://salcedocristhian.github.io/19984-Kingfisher-Lane-App/` (verificar después de habilitarlo).
7. En iPhone: Safari → Compartir → **Add to Home Screen**. En Android: Chrome → Menú → **Add to Home screen / Install app**.

## Limitaciones y seguridad

- El modelo 3D usa `Three.js` y `OrbitControls` desde CDNs externos; requiere **internet al menos para la primera carga** y podría requerir internet nuevamente si se borran cachés.
- La versión incluida se construyó sobre `Loxahatchee_Design_Studio_Interactive_3D.html`, la versión HTML disponible en este chat. Si existe un HTML más nuevo creado fuera del chat, reemplaza solo `index.html` después de integrar los enlaces del manifiesto, iconos y marca.
- Las geometrías y cantidades son conceptuales/preliminares; **no son un BIM validado ni planos aprobados**.
- GitHub Pages sirve contenido público en muchas configuraciones: no subas presupuestos confidenciales, registros privados, contratos ni datos sensibles a un repo público.
- Para actualizar, cambia los archivos y ejecuta otro commit. Cuando modifiques recursos del service worker, cambia el nombre `CACHE` (por ejemplo v2) para evitar contenido antiguo.
