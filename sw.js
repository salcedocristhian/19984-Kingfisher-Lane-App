/* MTD King Fisher Residence: same-origin app shell cache; internet required for external 3D libraries on first visit. */
const CACHE = 'king-fisher-mtd-final-20261027-v2';
const ASSETS = ['./index.html','./manifest.webmanifest','./assets/apple-touch-icon.png','./assets/icon-192.png','./assets/icon-512.png','./assets/favicon-32.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('king-fisher-mtd-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(new URL('./', self.registration.scope).pathname)) return;
  event.respondWith(fetch(req).then(resp => {
    if (resp && resp.ok && resp.type === 'basic') {
      const copy = resp.clone();
      event.waitUntil(caches.open(CACHE).then(c => c.put(req,copy)));
    }
    return resp;
  }).catch(() => caches.match(req).then(r => r || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
});
