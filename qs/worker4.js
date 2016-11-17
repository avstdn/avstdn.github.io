onmessage = function(e) {

  // console.log('Message received from main script to worker1');
  // var worker1Result = 'Result: ' + (e.data);
  // console.log('var e: ', e.data);
  var counter = 0;
  var stop = setInterval(fill, 100);
  function fill() {
    if(counter < 100) {
      counter += 10;
      postMessage(counter);
    } else {
      counter = 0;
      postMessage('stop');
      clearInterval(stop);
    }
  }
}