# King Fisher Studio 2.2 – Mockup-inspired iPhone UI

## What changed
- Home is a real full-screen 3D home overview with only the MTD header, individual quick tools, camera chips, and fixed bottom navigation. Duplicate homepage calls-to-action are removed on mobile.
- Design starts with the actual floor-plan camera and floating room-select chips. Tapping a room opens its real 3D camera; a small floor-plan button brings the picker back.
- No more persistent large room drop-down or camera-button bar. Material choices remain in the small slide-up drawer.
- Walk, Tour, floor plan, and Light are four independent 44px floating round controls (not a bar).
- Build stages is a compact stage card with progress and previous/next controls, plus playback using existing animation.
- Existing Three.js model, finishes, 12 construction stages, CSV/PDF export, saved options, and provider-neutral AI share remain in the package.
- Original MTD logo and manifest icons preserved; Service Worker version bumped.

## Deployment
Back up the currently published HTML first. Unzip, upload the *contents* to repository root, commit to `main`, and verify a green Pages deployment. Relaunch the iPhone home-screen app with Wi-Fi. Do not install the ZIP as a web app directly.

## Known limitations
The mockup was a visualization; this version uses the existing live 3D geometry instead of replacing it with AI photos. It is not a pixel-perfect match to a static photorealistic image. AI sharing prepares an image/prompt for external apps; it does not generate a new photorealistic render automatically. The final iOS touch/camera/performance acceptance test must occur on your actual phone.
