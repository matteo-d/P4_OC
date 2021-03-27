const cacheName = "cache-v1";
const assets = [
  "/",
  "fonts/fontawesome-webfont.woff2?v=4.7.0",
  "fonts/et-line.woff",
  "img/la-chouette-agence-banniere.webp",
  "img/image-de-presentation.jpg",
  "js/jquery-2.1.0.js",
  "css/bootstrap.css",
  "img/magazine.jpg",
  "img/ordinateur.jpg",
  "img/photographe.jpg",
  "img/materiel.jpg",
  "js/bootstrap.js",
  "css/font-awesome.css",
  "/P4_OpenClassroom/style.css",
  "js/jquery.touchSwipe.js",
  "img/la-chouette-agence.jpg",
  "js/blocs.js",
  "img/logo.png",
  "css/et-line.css",
  "js/index.js",
];

// mettre en cache
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});

// fetcher le cache
self.addEventListener("fetch", (e) => {
  console.log(e.request);
  e.respondWith(
    caches.match(e.request).then((cache) => {
      return cache || fetch(e.request);
    })
  );
});