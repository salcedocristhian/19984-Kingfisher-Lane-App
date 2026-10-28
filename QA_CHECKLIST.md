# Studio 2.2 — QA & acceptance checklist

## Static checks (completed)
- [x] HTML contains original WebGL 3D model and material options.
- [x] JavaScript parsing passed for all nine inline scripts.
- [x] No duplicate element IDs.
- [x] All four mobile tabs exist with correctly mapped destination views.
- [x] iPhone-safe top header and bottom navigation are separate from desktop view.
- [x] Service Worker cache version incremented to reduce stale deployments.
- [x] Standalone mobile layout simulation: 390 × 844 screen, 72px header, 640px 3D viewport, 64px material sheet, 76px bottom tabs; no overlap.
- [x] Standalone mobile layout simulation: secondary menu opens without clipping.

## 2.2 browser checks (completed, 390 × 844 simulated iPhone)
- [x] All scripts parse; no runtime errors on load, Home, Design plan, a room, Build.
- [x] Home, Design plan with room pins, Kitchen/Primary suite room views, Build stage card render as in the mockup.
- [x] Room chip opens Materials & finishes; Back from a room returns to the Design plan.
- [x] Design screens restore the finished house when coming from an earlier build stage.
- [x] Desktop (1400 px) shows none of the new phone controls.

## Real-device acceptance (pending)
- [ ] Open on iPhone Home Screen; verify model loads and orbit/touch/pinch work.
- [ ] Navigate Explore / Design / Build / Saved; inspect each destination.
- [ ] Tap Materials & finishes to expand and select a finish; confirm the 3D scene updates.
- [ ] Tap Undo; ensure material selection reverts.
- [ ] Tap AI sparkles; confirm current view capture and share sheet.
- [ ] More → Camera views; verify all view shortcuts fit and are horizontally scrollable.
- [ ] More → Immersive view; exit and restore controls.
- [ ] Confirm save, export, and older saved versions still function.
- [ ] Repeat in landscape; check accessibility with larger system text.

Note: Direct end-to-end testing in a full local browser was blocked in this environment, so the real 3D interaction is not certified. The interface-only layout was validated in a separate browser simulation without the 3D engine. The layout screenshots contain placeholders and are not 3D renderings.
