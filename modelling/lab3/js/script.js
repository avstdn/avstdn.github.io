var generator   = document.querySelector('.generator'),
    queue       = document.querySelector('.queue'),
    workerDiv   = document.querySelector('.worker'),
    statTotal   = document.querySelector('#stat-total'),
    statQueue   = document.querySelector('#stat-queue'),
    queueLength = document.querySelector('#queue-length'),
    maxGenTime  = document.querySelector('#max-gen-time'),
    minGenTime  = document.querySelector('#min-gen-time'),
    start       = document.querySelector('#start'),
    stop        = document.querySelector('#stop'),
    flag        = false,
    workerQueue = 1,
    count       = 0;

var workerObject = {
  queue        : 0,
  isBusy       : false ,
  totalRequest : 0,
  countdown    : 0
}

if (window.Worker) {
  var worker = new Worker("js/worker.js");
}

stop.addEventListener('click', function() {
  flag = true;
});

start.addEventListener('click', function() {
  worker.postMessage(null);
  workerObject.queue--;
  console.log(maxGenTime.value, minGenTime.value);

  (function loop() {
    if(!flag) {
      var rand = Math.round(Math.random() * (maxGenTime.value - minGenTime.value)) + parseInt(minGenTime.value);
      console.log(rand);
      setTimeout(function() {
        generate();
        loop();
      }, rand);
    } else {
      console.log('stop');
    }
  }());

});

function generate() {
    count++;
    workerObject.queue++;
    generator.innerHTML = statTotal.innerHTML = count;
    queue.innerHTML = statQueue.innerHTML = workerObject.queue;
  }

function checkForEmpty(i) {
  if(workerObject.queue == 0 && workerObject.isBusy == false) {
    return true;
  } else {
    return false;
  }
}

worker.onmessage = function(e) {
  if(e.data == 'stop') {
    workerDiv.innerHTML = 'READY';
    console.log('worker', e.data);
    worker.postMessage(null);
    workerObject.queue--;
    queue.innerHTML = statQueue.innerHTML = workerObject.queue;
  } else {
    workerDiv.innerHTML = e.data + '%';
  }
}