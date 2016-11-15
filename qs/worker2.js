onmessage = function(e) {
  var timeout = function() {
    postMessage(null);
  }
  setTimeout(timeout, 5000);
}