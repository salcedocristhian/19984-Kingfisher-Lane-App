# Studio 2.0 — release QA checklist

## Implemented / statically validated
- [x] iPhone compact tabs / more menu markup and handlers.
- [x] Compact AI action and provider-neutral share handler.
- [x] Undo, redo, immersive mode, design version camera metadata added.
- [x] Cache version updated to distinguish from previous installs.
- [x] Original 3D model definition and geometry left untouched.

## Verify on the actual iPhone before declaring a final production release
- [ ] Model loads and orbit/zoom works in Design and Build.
- [ ] AI sparkle captures current angle and does not modify selected colors.
- [ ] Share sheet and Save to Photos / Files work in Safari and installed web app.
- [ ] Undo/Redo reverses 3 consecutive finish choices and restores on Redo.
- [ ] Immersive focus hides panels and Exit focus reliably restores navigation.
- [ ] Save a named design under My selections, change materials/view, restore version.
- [ ] Try a long session, rotate device, close/reopen, verify stable navigation.
- [ ] CSV export; PDF export when online.
- [ ] Newest GitHub Actions Pages deployment is green after uploading.
- [ ] Confirm icon after Safari cache refresh.

**Note:** This is an enhanced GitHub Pages web app, not a native App Store/SwiftUI build.
