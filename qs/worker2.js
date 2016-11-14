onmessage = function(e) {

  // console.log('Message received from main script to worker2');
  // var worker2Result = 'Result: ' + (e.data);
  //  console.log('var e: ', e.data);
  // postMessage(worker2Result);

    var test = function() {
    postMessage('set timeout 2s from second worker!');
  }

  setInterval(test, 2000);
}