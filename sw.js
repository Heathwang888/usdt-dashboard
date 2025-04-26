const CACHE_NAME = 'usdt-manager-v1';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll([
                '/usdt-dashboard/',
                '/usdt-dashboard/index.html',
                '/usdt-dashboard/manifest.json',
                '/usdt-dashboard/icon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
