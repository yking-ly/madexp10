const CACHE_NAME = "luxshop-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/static/js/bundle.js",
    "/favicon.ico",
    "/logo192.png",
    "/manifest.json",
];

// ✅ Install Service Worker
self.addEventListener("install", (event) => {
    console.log("✅ Service Worker: Installed");

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("📥 Caching app shell...");
            return cache.addAll(urlsToCache);
        })
    );

    self.skipWaiting(); // Forces immediate activation
});

// ✅ Activate Service Worker
self.addEventListener("activate", (event) => {
    console.log("🚀 Service Worker: Activated");

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log("🗑 Clearing old cache:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );

    self.clients.claim(); // Ensure new Service Worker takes control immediately
});

// ✅ Intercept Fetch Requests & Serve Cached Files
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cacheResponse) => {
            return (
                cacheResponse ||
                fetch(event.request)
                    .then((fetchResponse) => {
                        return caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, fetchResponse.clone());
                            return fetchResponse;
                        });
                    })
                    .catch(() => {
                        console.log("⚠️ Fetch failed for:", event.request.url);
                    })
            );
        })
    );
});

// ✅ Listen for Push Notifications (Optional)
self.addEventListener("push", (event) => {
    const options = {
        body: "New promotions available!",
        icon: "/logo192.png",
        badge: "/favicon.ico",
    };

    event.waitUntil(
        self.registration.showNotification("LuxShop Alert", options)
    );
});
