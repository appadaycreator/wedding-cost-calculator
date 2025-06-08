const CACHE_NAME = 'wedding-calculator-v1';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './favicon.ico',
    './icon-192.png',
    './icon-512.png',
    './privacy.html',
    './disclaimer.html',
    './contact.html'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch(error => {
                console.error('Cache failed:', error);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then(response => {
                        // キャッシュに保存
                        if (response && response.status === 200) {
                            const responseToCache = response.clone();
                            caches.open(CACHE_NAME)
                                .then(cache => {
                                    cache.put(event.request, responseToCache);
                                });
                        }
                        return response;
                    });
            })
            .catch(error => {
                console.error('Fetch failed:', error);
            })
    );
}); 