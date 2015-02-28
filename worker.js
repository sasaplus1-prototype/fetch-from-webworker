importScripts('es6-promise-2.0.1.min.js', 'fetch.js');

self.addEventListener('message', function(event) {
  fetch(event.data.uri)
    .then(function(res) {
      return res.json();
    })
    .then(function(json) {
      self.postMessage(json);
    })
    ['catch'](function(err) {
      self.postMessage(err);
    });
}, false);
