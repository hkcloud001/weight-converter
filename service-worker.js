self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("weight-converter").then(cache => {
      return cache.addAll(["./", "./index.html", "./manifest.json", "./qrcode.min.js"]);
    })
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
