# King Fisher Residence — MTD Studio 2.0 (GitHub Pages)

Ready to upload to **salcedocristhian/19984-Kingfisher-Lane-App**, branch `main`, repository root.

## Install / update
1. Download and extract the ZIP.
2. Back up the currently published `index.html`, `sw.js`, `manifest.webmanifest`, and `assets` first.
3. In GitHub choose **Add file → Upload files** and upload the extracted **contents**, not the ZIP. Keep the `assets/` folder structure.
4. Commit the changes. In **Actions**, confirm the newest `pages build and deployment` run succeeds.
5. Open `https://salcedocristhian.github.io/19984-Kingfisher-Lane-App/` in Safari; close/reopen the Home Screen app to refresh.

## Changes in Studio 2.0
- iPhone navigation prioritizes **Design / Build / More**, de-emphasizes budget badge and hides advanced controls behind More tools.
- Compact **sparkle icon** captures the current camera/materials as PNG. Sharing is **provider-neutral** through iOS Share Sheet, with Download PNG, Copy render brief and local Saved Views.
- Design panel: **Undo / Redo** for direct user finish changes (in this session) and **Immersive Focus**; Escape / Exit focus returns to controls.
- **My selections → Save design** now saves camera angle, view, construction stage and selections; restoring also restores camera when available. Older versions without camera still work. Local only unless an actual connected DB is available.
- Local image gallery limit 15; explicit delete. Native CSV/PDF download fallback for GitHub Pages; PDF requires jsPDF to load.
- Network-first same-origin service worker, updated cache version. iPhone/Android icon is the MTD sunset-house image.

## Important limitations
- This **does not create photorealistic AI renders automatically**. It prepares the PNG and prompt for a compatible AI service/app. No automatic ChatGPT opening or embedded API credentials.
- **Sharing depends on the target app supporting iOS share extension**. You can save to Photos and attach manually.
- **Saved Views and locally saved designs are not synced to a shared cloud repository**. They can be lost if browser site data is cleared.
- Full Three.js/WebGL rendering and iPhone Home Screen behavior still need verification on an actual iPhone; static/mobile isolated tests do not replace device acceptance.
- Do not use visual model quantities as construction takeoffs unless checked against signed plans.
- External CDN resources may require internet, especially on first load.
- Undo/Redo records direct selection and look/preset/assistant applications. It is not a historical editing system for all camera movement or construction settings.
- Updating the zip **replaces the published HTML**. If you edited GitHub more recently, reconcile those changes before committing.
