/* eslint-disable no-undef */
/* Occult Fitness — Service Worker for Push Notifications */

self.addEventListener('push', function(event) {
    const data = event.data ? event.data.json() : {};
    const title = data.title || 'Occult Fitness';
    const options = {
        body: data.body || '',
        icon: '/logo.png',
        badge: '/logo.png',
        tag: data.tag || 'default',
        data: { url: data.url || '/' },
        vibrate: [100, 50, 100],
        actions: data.actions || []
    };
    event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    const url = event.notification.data?.url || '/';
    event.waitUntil(
        clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
            for (const client of clientList) {
                if (client.url.includes(self.location.origin) && 'focus' in client) {
                    client.navigate(url);
                    return client.focus();
                }
            }
            return clients.openWindow(url);
        })
    );
});
