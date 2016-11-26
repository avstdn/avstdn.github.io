onmessage = function(e) {

  var rand = Math.round(Math.random() * (500 - 200)) + 200;

  var counter = 0;
  var stop = setInterval(fill, rand / 10);
  function fill() {
    if(counter < 100) {
      counter += 10;
      postMessage(counter);
    } else {
      counter = 0;
      console.log('worker: ', rand);
      postMessage('stop');
      clearInterval(stop);
    }
  }

  // function callback() {
  //   console.log('worker: ', rand);
  //   postMessage('stop');
  // }
  // setTimeout(callback, rand);

}