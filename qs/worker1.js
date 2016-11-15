onmessage = function(e) {

  // console.log('Message received from main script to worker1');
  // var worker1Result = 'Result: ' + (e.data);
  // console.log('var e: ', e.data);

  var timeout = function() {
    postMessage(null);
  }
  setTimeout(timeout, 5000);
}