const CACHE_NAME = 'sih-2026-v2'
const urlsToCache = [
  '/',
  '/about',
  '/timeline',
  '/contact',
  '/guidelines',
  '/faq',
  '/announcements',
  '/privacy',
  '/terms',
  '/logo.png',
  '/logo-sharda.png',
  '/manifest.json'
]

// Install event - cache assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache)
      })
  )
})

// Fetch event - network first for HTML, cache first for assets
self.addEventListener('fetch', (event) => {
  // For HTML files, use network first to always get fresh content
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Clone the response
          const responseToCache = response.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache)
          })
          return response
        })
        .catch(() => {
          // If network fails, try cache
          return caches.match(event.request)
        })
    )
  } else {
    // For other assets, use cache first
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response
          }

          const fetchRequest = event.request.clone()

          return fetch(fetchRequest).then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response
            }

            const responseToCache = response.clone()

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache)
              })

            return response
          })
        })
    )
  }
})

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})
