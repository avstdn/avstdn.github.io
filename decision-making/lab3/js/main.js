var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var objectsArray = [];
var colorsArray = ['yellow', 'green', 'blue', 'red', 'pink', 'teal', 'turquoise', 'orange', 'purple', 'maroon'];
var clr = 0;
var notReached = false;
var otherColors = false;

var radius = 7;

var outerRadius = 20;

canvas.width = window.innerWidth - 50;
canvas.height = 400;

var putPoint = function(e) {

  addToObjectsArray(e.offsetX, e.offsetY, colorsArray[clr]);

  context.beginPath();
  context.arc(e.offsetX, e.offsetY, outerRadius, 0, Math.PI*2);
  context.strokeStyle = 'yellow';
  context.stroke();
  context.closePath();


///////////////////////////// MAIN //////////////////////////////////////////////
  if(objectsArray.length > 1) { // В массиве должно быть больше 2-х элементов

    notReached = true;

    for(var i = objectsArray.length - 2; i >= 0 ; i--) {
      if(isOwned(objectsArray[i].x, objectsArray[i].y, objectsArray[objectsArray.length-1].x, objectsArray[objectsArray.length-1].y)) { // Если ф-ия вернула true, то точка досигаема
        if(isCurrentColor(objectsArray[i], objectsArray[objectsArray.length-1])) {
          drawPoint(objectsArray[i], objectsArray[objectsArray.length-1]);
        } else {
          // Если есть связь с точкой текущего цвета

          if(isReached(objectsArray[objectsArray.length-1])) {
          redrawPoints(objectsArray[i], objectsArray[objectsArray.length-1]);
          console.log('is not current color');
          // Если связь только с досягаемыми точками
          } else {
            drawCurrentPoint(objectsArray[i], objectsArray[objectsArray.length-1]);
          }
        }
        notReached = false;
      }
    }
    if(notReached) {
      clr %= colorsArray.length - 1;
      clr++;
      objectsArray[objectsArray.length-1].color = colorsArray[clr];
      context.beginPath();
      context.arc(e.offsetX, e.offsetY, radius/2, 0, Math.PI*2);
      context.fillStyle = colorsArray[clr];
      context.fill();
      context.closePath();
      console.log('Is not owned');
    }

  } else { // Если в массиве один элемент
    context.beginPath();
    context.arc(e.offsetX, e.offsetY, radius/2, 0, Math.PI*2);
    context.fillStyle = colorsArray[clr];
    context.fill();
    context.closePath();
    console.log('length = 1');

  } ///////////////////////////////////////////////////////////////////////
}

canvas.addEventListener('mousedown', putPoint);


function addToObjectsArray(coordX, coordY, cluster) {
  objectsArray.push({x: coordX, y: coordY, color: cluster});
}

function isOwned(x1, y1, x2, y2) {
  if(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) <= outerRadius * 2) {
    console.log('isOwned', true);
    return true;
  } else {
    console.log('isOwned', false);
    return false;
  }
}

function isCurrentColor(reachedPoint, currentPoint) {
  if(reachedPoint.color == currentPoint.color) {
    return true;
  } else {
    return false;
  }
}

function isReached(currentPoint) {
  for(var i = 0; i < objectsArray.length - 1; i++) {
    if(isOwned(currentPoint.x, currentPoint.y, objectsArray[i].x, objectsArray[i].y)) {
        console.log('I see you!');
      if(isCurrentColor(objectsArray[i], currentPoint)) {
        return true;
      }
    }
  }
  return false;
}

function drawPoint(reachedPoint, currentPoint) {
  // currentPoint.color = reachedPoint.color;
  context.beginPath();
  context.arc(currentPoint.x, currentPoint.y, radius/2, 0, Math.PI*2);
  context.fillStyle = currentPoint.color;
  context.fill();
  context.closePath();
  reachedPoint.color = currentPoint.color;
}

function drawCurrentPoint(reachedPoint, currentPoint) {
  context.beginPath();
  context.arc(currentPoint.x, currentPoint.y, radius/2, 0, Math.PI*2);
  context.fillStyle = reachedPoint.color;
  context.fill();
  context.closePath();
  currentPoint.color = reachedPoint.color;
}

function redrawPoints(reachedPoint, currentPoint) {
  for(var i = 0; i < objectsArray.length - 1; i++) {
    if(objectsArray[i].color == currentPoint.color) {
      objectsArray[i].color = reachedPoint.color;
      context.beginPath();
      context.arc(objectsArray[i].x, objectsArray[i].y, radius/2, 0, Math.PI*2);
      context.fillStyle = reachedPoint.color;
      context.fill();
      context.closePath();
    }
  }
  currentPoint.color = reachedPoint.color;
  context.beginPath();
  context.arc(currentPoint.x, currentPoint.y, radius/2, 0, Math.PI*2);
  context.fillStyle = reachedPoint.color;
  context.fill();
  context.closePath();
}



  // } else {
  //   if(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) <= outerRadius * 2) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }