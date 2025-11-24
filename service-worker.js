const CACHE_NAME = 'calculator-v3.0.0';
const urlsToCache = [
  '/super-calculator-pro/',
  '/super-calculator-pro/index.html',
  '/super-calculator-pro/manifest.json',
  '/super-calculator-pro/icon192.webp',
  '/super-calculator-pro/icon512.webp'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
