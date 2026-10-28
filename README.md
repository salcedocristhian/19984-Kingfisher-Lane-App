# King Fisher Studio 2.1 — iPhone layout correction

Production candidate from the prior Studio 2.0 release. Uses the same 3D geometry, finishes, camera views, menus, logo and save/export functionality. Changes are restricted to the native-inspired phone layout and mobile controller.

## What changed
- Fixed top header with current room and small Undo, AI and More actions.
- Four-button fixed bottom navigation: Explore / Design / Build / Saved.
- Reduced overlapping floating toolbar; camera views and other advanced tools moved under More.
- Material and build sheet moved above the bottom navigation with correct iPhone safe-area spacing.
- WebGL viewport resized to avoid being covered by the sheet and tab bar.
- Sharper solid control surfaces instead of excessively blurred panels.
- Saved section opens existing selections and saved design combinations, preserving budget functionality.
- Mobile AI icon shares a capture via neutral iOS share sheet, not a specific AI provider.
- Updated service worker cache version.

## Deploy to GitHub
1. Back up the existing `index.html` and app data before modifying.
2. Extract the ZIP. Upload the **contents** of the folder to the root of the `19984-Kingfisher-Lane-App` repository, replacing existing files.
3. Confirm GitHub Actions Pages deployment succeeds.
4. On iPhone, close the home-screen app completely and reopen with internet.
5. Check camera orbit, bottom tabs, expandable Materials & Finishes, More > Camera views, and AI capture/share.

## Caveats
- The desktop 3D/model code remains unchanged; no new photorealistic generation API.
- Saved designs remain device-specific unless integrated with external storage.
- Browser testing does not replace a final physical iPhone acceptance test.
