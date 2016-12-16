var start = document.querySelector('.start');
var displayX = document.querySelectorAll('.display-x li');
var displayY = document.querySelectorAll('.display-y li');
var displayValue = document.querySelector('.value');
var displayPoint = document.querySelector('.point');

// ARRAY OF RESULT POINTS ////////////////
var point = [
                  {x: 0,  y: 0},
                  {x: 1,  y: 1},
                  {x: -1, y: -1},
                  {x: 2,  y: -2}
];

// ARRAY OF TEMP POINTS /////////////////
var tempPoint = [
                  {x: 0,  y: 0},
                  {x: 1,  y: 1},
                  {x: -1, y: -1},
                  {x: 2,  y: -2}
];

// RANDOM INTEGER VARIABLES /////
var temp;
var rnd;

// START BUTTON ///////////////////
start.onclick = function() {

  for(var k = 0; k < 1000; k++) {

    for (var j = 0; j < 3; j++) {
      for (var i = 0; i < 3; i++) {
        // VALUE COMPARISON ///////////////////
        if (foo(point[i].x, point[i].y) > foo(point[i + 1].x, point[i + 1].y)) {
          temp = point[i];
          point[i] = point[i + 1];
          point[i + 1] = temp;
        }
      }
    }

    // PARABOLOID /////////////////////////////////////
    function foo(x, y) {
      return (Math.pow(x + 8, 2) + Math.pow(y + 6, 2));
    } /////////////////////////////////////////////////

    // CROSSOVER ////////////////////////////////////////////
    tempPoint[0].x = point[0].x; tempPoint[0].y = point[1].y;
    tempPoint[1].x = point[1].x; tempPoint[1].y = point[0].y;
    tempPoint[2].x = point[2].x; tempPoint[2].y = point[0].y;
    tempPoint[3].x = point[0].x; tempPoint[3].y = point[2].y;

    // GET RANDOM NUMBER /////
    getRandomInt(0, 3, -2, 2);

    // MUTATION ///////////////////////////////
    tempPoint[rnd].x = tempPoint[rnd].x + intX;
    tempPoint[rnd].y = tempPoint[rnd].y + intY;
    point = tempPoint;

  }


  // DISPLAY RESULT ////////////////////////////////////////////////////////////
  for (var i = 0; i < 4; i++) {
    console.log(point[i].x, point[i].y, 'value:', foo(point[i].x, point[i].y));
    displayX[i].innerHTML = point[i].x;
    displayY[i].innerHTML = point[i].y;
    displayValue.innerHTML = foo(point[0].x, point[0].y);
  }

  // RANDOM NUMBER FUNCTION ////////////////////////////////////
  function getRandomInt(min, max, int1, int2) {
    rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    intX = Math.floor(Math.random() * (int2 - int1 + 1)) + int1;
    intY = Math.floor(Math.random() * (int2 - int1 + 1)) + int1;
  }
}

// суббота с 10:15 до 11 в 253 (возле буфета)
// понедельник в 253 в 13:50 
