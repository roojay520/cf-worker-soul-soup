import handleRequest from './src';

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
