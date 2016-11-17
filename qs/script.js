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

var queue = [
              { workerQueue: 0, isBusy: false , totalRequest: 0, countdown: 0 },
              { workerQueue: 0, isBusy: false , totalRequest: 0, countdown: 0 },
              { workerQueue: 0, isBusy: false , totalRequest: 0, countdown: 0 },
              { workerQueue: 0, isBusy: false , totalRequest: 0, countdown: 0 },
              { workerQueue: 0, isBusy: false , totalRequest: 0, countdown: 0 },
];
var request = 0;
var total = 0;

$('#countdown-1').text('READY').css('background', '#68E768');
$('#countdown-2').text('READY').css('background', '#68E768');
$('#countdown-3').text('READY').css('background', '#68E768');
$('#countdown-4').text('READY').css('background', '#68E768');
$('#countdown-5').text('READY').css('background', '#68E768');

var generate = document.querySelector("#generate");
generate.addEventListener("click", function() {
  createRequest();
})
var start = document.querySelector("#start");
start.addEventListener("click", function() {
  createRequest();
  setInterval(createRequest, 100);
})
function createRequest() {
  var minimum = 0;
  request++;
  document.querySelector(".request-tab").innerHTML = request;
  document.querySelector("#total-req").innerHTML = request;
  minimum = findMin();
  if(checkForEmpty(minimum)) {
    queue[minimum].isBusy = true;
    queue[minimum].workerQueue++;
    showWorkerParams(minimum);
    workers[minimum].postMessage(null);
  } else {
    queue[minimum].workerQueue++;
    showWorkerParams(minimum);
  }
}

function checkForEmpty(i) {
    if(queue[i].workerQueue == 0 && queue[i].isBusy == false) {
      return true;
    } else {
      return false;
    }
}
function findMin() {
  var min = queue[0].workerQueue;
  var indexOfMin = 0;
  for (var i = 0; i < 4; i++) {
    if(min > queue[i+1].workerQueue) {
      indexOfMin = i+1;
      min = queue[i+1].workerQueue;
    }
  }
  return indexOfMin;
}
function addToWorker(i) {
    // queue[i].workerQueue--;
    queue[i].isBusy = true;
    workers[i].postMessage(null);
}

function showWorkerParams(i) { // GUI ////////////////////////////
    document.querySelector('#proc-req').innerHTML = total;
    document.querySelector('.result-tab').innerHTML = total;
  switch(i) {
    case 0:
  // document.querySelector('#countdown-1').innerHTML = queue[0].countdown + '%';
  document.querySelector('.bar-fill-1').innerHTML = queue[0].totalRequest;
  document.querySelector('#worker-1').innerHTML = queue[0].totalRequest;
  document.querySelector('#queue-1').innerHTML = queue[0].workerQueue;
  break;
    case 1:
  // document.querySelector('#countdown-2').innerHTML = queue[1].countdown + '%';
  document.querySelector('.bar-fill-2').innerHTML = queue[1].totalRequest;
  document.querySelector('#worker-2').innerHTML = queue[1].totalRequest;
  document.querySelector('#queue-2').innerHTML = queue[1].workerQueue;
  break;
    case 2:
  // document.querySelector('#countdown-3').innerHTML = queue[2].countdown + '%';
  document.querySelector('.bar-fill-3').innerHTML = queue[2].totalRequest;
  document.querySelector('#worker-3').innerHTML = queue[2].totalRequest;
  document.querySelector('#queue-3').innerHTML = queue[2].workerQueue;
  break;
    case 3:
  // document.querySelector('#countdown-4').innerHTML = queue[3].countdown + '%';
  document.querySelector('.bar-fill-4').innerHTML = queue[3].totalRequest;
  document.querySelector('#worker-4').innerHTML = queue[3].totalRequest;
  document.querySelector('#queue-4').innerHTML = queue[3].workerQueue;
  break;
    case 4:
  // document.querySelector('#countdown-5').innerHTML = queue[4].countdown + '%';
  document.querySelector('.bar-fill-5').innerHTML = queue[4].totalRequest;
  document.querySelector('#worker-5').innerHTML = queue[4].totalRequest;
  document.querySelector('#queue-5').innerHTML = queue[4].workerQueue;
  break;
  }
}

worker1.onmessage = function(e) {
  if(e.data != 'stop') {
    $('#countdown-1').text(e.data + '%');
  } else {
    queue[0].totalRequest++;
    $('#countdown-1').text('READY');
    queue[0].workerQueue--;
    total++;
    queue[0].isBusy = false;
    if(queue[0].workerQueue > 0) {
      addToWorker(0);
      showWorkerParams(0);
    }
    else {
      showWorkerParams(0);
    }
    // document.querySelector('#worker-1').innerHTML++;
    // document.querySelector('#proc-req').innerHTML++;
    // document.querySelector('.result-tab').innerHTML++;
  }
}
worker2.onmessage = function(e) {
  if(e.data != 'stop') {
    $('#countdown-2').text(e.data + '%');
  } else {
    queue[1].totalRequest++;
    $('#countdown-2').text('READY');
    queue[1].workerQueue--;
    total++;
    queue[1].isBusy = false;
    if(queue[1].workerQueue > 0) {
      addToWorker(1);
      showWorkerParams(1);
    }
    else {
      showWorkerParams(1);
    }
      // document.querySelector('#worker-2').innerHTML++;
      // document.querySelector('#proc-req').innerHTML++;
      // document.querySelector('.result-tab').innerHTML++;
  }
}
worker3.onmessage = function(e) {
  if(e.data != 'stop') {
    $('#countdown-3').text(e.data + '%');
  } else {
    queue[2].totalRequest++;
    $('#countdown-3').text('READY');
    queue[2].workerQueue--;
    total++;
    queue[2].isBusy = false;
    if(queue[2].workerQueue > 0) {
      addToWorker(2);
      showWorkerParams(2);
      }
    else {
      showWorkerParams(2);
    }
      // document.querySelector('#worker-3').innerHTML++;
      // document.querySelector('#proc-req').innerHTML++;
      // document.querySelector('.result-tab').innerHTML++;
  }
}
worker4.onmessage = function(e) {
  if(e.data != 'stop') {
    $('#countdown-4').text(e.data + '%');
  } else {
    queue[3].totalRequest++;
    $('#countdown-4').text('READY');
    queue[3].workerQueue--;
    total++;
    queue[3].isBusy = false;
    if(queue[3].workerQueue > 0) {
      addToWorker(3);
      showWorkerParams(3);
      }
    else {
      showWorkerParams(3);
    }
      // document.querySelector('#worker-4').innerHTML++;
      // document.querySelector('#proc-req').innerHTML++;
      // document.querySelector('.result-tab').innerHTML++;
  }
}
worker5.onmessage = function(e) {
  if(e.data != 'stop') {
    $('#countdown-5').text(e.data + '%');
  } else {
    queue[4].totalRequest++;
    $('#countdown-5').text('READY');
    queue[4].workerQueue--;
    total++;
    queue[4].isBusy = false;
    if(queue[4].workerQueue > 0) {
      addToWorker(4);
      showWorkerParams(4);
      }
    else {
      showWorkerParams(4);
    }
      // document.querySelector('#worker-5').innerHTML++;
      // document.querySelector('#proc-req').innerHTML++;
      // document.querySelector('.result-tab').innerHTML++;
  }
}

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