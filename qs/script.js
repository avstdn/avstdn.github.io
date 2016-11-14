

var button = document.querySelector("button");

addEventListener("click", function() {

if (window.Worker) { // Check if Browser supports the Worker api.
  // Requries script name as input
  var worker1 = new Worker("worker1.js");
  var worker2 = new Worker("worker2.js");
// onkeyup could be used instead of onchange if you wanted to update the answer every time
// an entered value is changed, and you don't want to have to unfocus the field to update its .value

    // worker2.postMessage('message from main stream to worker2');

  var test = function() {
      worker1.postMessage('message from main stream to worker1');
      console.log('Message posted to workers');
  }

  setInterval(test, 10000);
  
    worker1.onmessage = function(e) {
    console.log(e.data);
  };

  // worker2.onmessage = function(e) {
  //   console.log(e.data);
  // };
}
});

var counter = 0;
var fill = function() {
  if(counter <= 100) {
  $('.bar-fill').css('width', counter + '%');
  counter += 1;
  console.log(counter);
  } else {
    counter = 0;
    $('.bar-fill').css('width', counter + '%');
  }
}

setInterval(fill, 50);

var counter2 = 0;
var fill2 = function() {
  if(counter2 <= 100) {
  $('.bar-fill2').css('width', counter2 + '%');
  counter2 += 1;
  console.log(counter2);
  }
  else {
    counter2 = 0;
  }
}

setInterval(fill2, 100);



// var blob1 = new Blob([
//   "onmessage = function(e) {postMessage('msg from worker1'); console.log(e.data);}"
// ]);
// // Obtain a blob URL reference to our worker 'file'.
// var blobURL1 = window.URL.createObjectURL(blob1);

// var worker1 = new Worker(blobURL1);
// worker1.onmessage = function(e) {
//   // e.data == 'msg from worker'
//   console.log(e.data);
//   console.log('hello! i\'m worker1!');
// };
// // Start the worker.
// worker1.postMessage('hello! this is the message to worker!'); 

// var blob2 = new Blob(["onmessage = function(e) {" +
//   "postMessage('msg from worker2');" +
//   "console.log(e.data);"+
//   "}"
// ]);
// // Obtain a blob URL reference to our worker 'file'.
// var blobURL2 = window.URL.createObjectURL(blob2);

// var worker2 = new Worker(blobURL2);
// worker2.onmessage = function(e) {
//   // e.data == 'msg from worker'
//   console.log(e.data);
//   console.log('hello! i\'m worker2!');
// };
// // Start the worker.
// worker2.postMessage('hello! this is the message to worker!'); 
