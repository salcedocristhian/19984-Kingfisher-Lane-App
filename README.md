# King Fisher Residence — ChatGPT sharing fix

This package preserves the existing interactive Design Studio, camera, materials, floor plan, gallery, render capture and icons. Only the ChatGPT handoff controls and service-worker cache version were changed.

## Upload to GitHub

1. Keep a copy of your currently published `index.html` in case you made additional changes later.
2. Extract this ZIP and upload the **contents** to the repository root, preserving the `assets/` folder. Replace existing files.
3. Confirm GitHub Pages deployment in Actions.
4. Close and reopen the Home Screen web app. If cached, open the site in Safari and reload.

## ChatGPT on iPhone

1. Tap `Render this view` to capture the selected camera, materials and finishes.
2. Tap `1. Copy image for ChatGPT`, then `2. Open ChatGPT`.
3. In ChatGPT, long press the prompt composer and select Paste (if supported). You can then ask for a photorealistic architectural render while preserving the camera and materials.
4. **Fallback:** use `Share / Save to Photos` and tap `Save Image`. In ChatGPT tap `+` > `Add photos & files` to attach it. Then tap `Copy AI instructions` in the Studio if desired.

Important: iOS controls the native Share app list, and a static site cannot attach an image into ChatGPT automatically. This version does not add any AI API or server/database. Saved images remain local unless manually exported.
