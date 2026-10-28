/* King Fisher Residence – network-first update; native iPhone app icon uses v3 path. */
const CACHE = 'king-fisher-mtd-studio-20261104-v22-mockup';
const ASSETS = [
 './index.html', './manifest.webmanifest',
 './assets/kingfisher-atardecer-apple-v3.png',
 './assets/kingfisher-atardecer-192-v3.png',
 './assets/kingfisher-atardecer-512-v3.png',
 './assets/favicon-32.png'
];
self.addEventListener('install', event => {
 event.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
 event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('king-fisher-mtd-') && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
 const req=event.request;
 if(req.method !== 'GET') return;
 const url=new URL(req.url);
 if(url.origin !== self.location.origin || !url.pathname.startsWith(new URL('./', self.registration.scope).pathname)) return;
 event.respondWith(fetch(req).then(response => {
   if(response && response.ok && response.type === 'basic') {
     const clone=response.clone();
     event.waitUntil(caches.open(CACHE).then(c => c.put(req,clone)));
   }
   return response;
 }).catch(() => caches.match(req).then(r => r || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error()))));
});
