
// var counter2 = 0;
// var fill2 = function() {
//   if(counter2 <= 100) {
//   $('.bar-fill2').css('width', counter2 + '%');
//   counter2 += 1;
//   // console.log(counter2);
//   }
//   else {
//     counter2 = 0;
//   }
// }

// setInterval(fill2, 100);



////////////////////////

if (window.Worker) {
  var worker1 = new Worker("worker1.js");
  var worker2 = new Worker("worker2.js");
  var worker3 = new Worker("worker3.js");
  var worker4 = new Worker("worker4.js");
  var worker5 = new Worker("worker5.js");
}

var workers = [
  worker1,
  worker2,
  worker3,
  worker4,
  worker5
];

//     // worker2.postMessage('message from main stream to worker2');

//   var test = function() {
//       // worker1.postMessage('message from main stream to worker1');
//       console.log('Message posted to workers');
//   }

//   setInterval(test, 10000);
  
//     worker1.onmessage = function(e) {
//     console.log(e.data);
//   };

//   // worker2.onmessage = function(e) {
//   //   console.log(e.data);
//   // };
// }

var request = 0;
var queue = [
              { workerQueue: 0, isBusy: false , totalRequest: 0 },
              { workerQueue: 0, isBusy: false , totalRequest: 0 },
              { workerQueue: 0, isBusy: false , totalRequest: 0 },
              { workerQueue: 0, isBusy: false , totalRequest: 0 },
              { workerQueue: 0, isBusy: false , totalRequest: 0 },
];


function findMin() { // FIND MINIMUM & INCREMENT WORKER'S QUEUE & DECREMENT REQUEST QUEUE ////
  var min = queue[0].workerQueue;
  var indexOfMin = 0;
  for (var i = 0; i < 4; i++) {
    if(min > queue[i+1].workerQueue) {
      indexOfMin = i + 1;
      min = queue[i+1].workerQueue;
    }
  }
  queue[indexOfMin].workerQueue += 1;
  request -= 1;
}

function showWorkerQueue() { // GUI ////////////////////////////
  document.querySelector('#queue-1').innerHTML = queue[0].workerQueue;
  document.querySelector('#queue-2').innerHTML = queue[1].workerQueue;
  document.querySelector('#queue-3').innerHTML = queue[2].workerQueue;
  document.querySelector('#queue-4').innerHTML = queue[3].workerQueue;
  document.querySelector('#queue-5').innerHTML = queue[4].workerQueue;
}

function addToWorker() {
  for(var i = 0; i < 5; i++) {
    if(queue[i].workerQueue > 0 && !queue[i].isBusy) {

      queue[i].workerQueue--;
      queue[i].isBusy = true;
      workers[i].postMessage(null);
      runStatusBar(i);
    }
  }
}

function runStatusBar(i) {
  var counter1 = 0;
  var counter2 = 0;
  var counter3 = 0;
  var counter4 = 0;
  var counter5 = 0;

  switch(i) {
    case 0:
      var stopFirst = setInterval(fillFirst, 50);
      function fillFirst() {
  
        if(counter1 <= 100) {
          $('.bar-fill-1').css('width', counter1 + '%');
          counter1 += 1;
        } else {
          counter1 = 0;
          $('.bar-fill-1').css('width', counter1 + '%');
          clearInterval(stopFirst);
        }
      }
    break;

    case 1:
      var stopSecond = setInterval(fillSecond, 50);
      function fillSecond() {
  
        if(counter2 <= 100) {
          $('.bar-fill-2').css('width', counter2 + '%');
          counter2 += 1;
        } else {
          counter2 = 0;
          $('.bar-fill-2').css('width', counter2 + '%');
          clearInterval(stopSecond);
        }
      }
    break;

    case 2:
      var stopThird = setInterval(fillThird, 50);
      function fillThird() {
  
        if(counter3 <= 100) {
          $('.bar-fill-3').css('width', counter3 + '%');
          counter3 += 1;
        } else {
          counter3 = 0;
          $('.bar-fill-3').css('width', counter3 + '%');
          clearInterval(stopThird);
        }
      }
    break;

    case 3:
      var stopFourth = setInterval(fillFourth, 50);
      function fillFourth() {
  
        if(counter4 <= 100) {
          $('.bar-fill-4').css('width', counter4 + '%');
          counter4 += 1;
        } else {
          counter4 = 0;
          $('.bar-fill-4').css('width', counter4 + '%');
          clearInterval(stopFourth);
        }
      }
    break;

    case 4:
      var stopFifth = setInterval(fillFifth, 50);
      function fillFifth() {
  
        if(counter5 <= 100) {
          $('.bar-fill-5').css('width', counter5 + '%');
          counter5 += 1;
        } else {
          counter5 = 0;
          $('.bar-fill-5').css('width', counter5 + '%');
          clearInterval(stopFifth);
        }
      }
    break;
  }
}

var total = document.querySelector('#total-req');
var totalFirst = document.querySelector('#worker-1');
var totalSecond = document.querySelector('#worker-2');
var totalThird = document.querySelector('#worker-3');
var totalFourth = document.querySelector('#worker-4');
var totalFifth = document.querySelector('#worker-5');
var totalRequest = 0;

function createRequest() {
  totalRequest += 1;
  request += 1;
  total.innerHTML = totalRequest;
  findMin();
  addToWorker();
  showWorkerQueue();
}

var button = document.querySelector("#button");
button.addEventListener("click", function() {
  createRequest();
  setInterval(createRequest, 1000);
})

worker1.onmessage = function(e) {
  if(queue[0].workerQueue != 0) {
    queue[0].workerQueue--;
    workers[0].postMessage(null);
    runStatusBar(0);
  }
};
worker2.onmessage = function(e) {
  if(queue[1].workerQueue != 0) {
    queue[1].workerQueue--;
    workers[1].postMessage(null);
    runStatusBar(1);
  }
};
worker3.onmessage = function(e) {
  if(queue[2].workerQueue != 0) {
    queue[2].workerQueue--;
    workers[2].postMessage(null);
    runStatusBar(2);
  }
};
worker4.onmessage = function(e) {
  if(queue[3].workerQueue != 0) {
    queue[3].workerQueue--;
    workers[3].postMessage(null);
    runStatusBar(3);
  }
};
worker5.onmessage = function(e) {
  if(queue[4].workerQueue != 0) {
    queue[4].workerQueue--;
    workers[4].postMessage(null);
    runStatusBar(4);
  }
};


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