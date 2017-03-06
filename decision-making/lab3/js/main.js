var canvas = document.getElementById('canvas');
var clear = document.getElementById('clear');
// var showRadius = document.getElementById('show-radius');
var context = canvas.getContext('2d');
var objectsArray = [];
var colorsArray = [
                    'red', 'green', 'blue', 'Aquamarine', 'pink', 'turquoise', 'orange', 'purple', 'PeachPuff',
                    'GreenYellow', 'MediumSpringGreen', 'LightCoral', 'DeepPink', 'LightSalmon', 'maroon',
                    'teal', 'Magenta', 'Chocolate', 'LightSlateGrey', 'Lime'
                  ];
var clr = 0;
var notReached = false;
var radius = 7;
var outerRadius = 20;

canvas.width = window.innerWidth - 50;
canvas.height = window.innerHeight - 180;

///////////////////////////// MAIN ////////////////////////////////////////////////////

var putPoint = function(e) {
  addToObjectsArray(e.offsetX, e.offsetY, colorsArray[clr % (colorsArray.length - 1)]);

  // context.beginPath();
  // context.arc(e.offsetX, e.offsetY, outerRadius, 0, Math.PI*2);
  // context.strokeStyle = 'yellow';
  // context.stroke();
  // context.closePath();

   // В массиве должно быть больше 2-х элементов
  if(objectsArray.length > 1) {
    notReached = true;

    for(var i = objectsArray.length - 2; i >= 0 ; i--) {

      // Находится ли точка с зоне досягаемости
      if(isOwned(objectsArray[i].x, objectsArray[i].y, objectsArray[objectsArray.length-1].x, objectsArray[objectsArray.length-1].y)) { // Если ф-ия вернула true, то точка досигаема

        // Обе точки одинакового цвета
        if(isCurrentColor(objectsArray[i], objectsArray[objectsArray.length-1])) {
          drawPoint(objectsArray[i], objectsArray[objectsArray.length-1]);

        // Точки разного цвета
        } else {

          // Если есть связь с точкой текущего цвета
          if(isReached(objectsArray[objectsArray.length-1])) {
          redrawPoints(objectsArray[i], objectsArray[objectsArray.length-1]);

          // Иначе, есть ли связь только с досягаемыми точками
          } else {
            drawCurrentPoint(objectsArray[i], objectsArray[objectsArray.length-1]);
          }
        }
        notReached = false;
      }
    }

    // Если текущая точка не касается других точек
    if(notReached) {
      clr++;
      objectsArray[objectsArray.length-1].color = colorsArray[clr % (colorsArray.length - 1)];
      context.beginPath();
      context.arc(e.offsetX, e.offsetY, radius/2, 0, Math.PI*2);
      context.fillStyle = colorsArray[clr % (colorsArray.length - 1)];
      context.fill();
      context.closePath();
    }

  // Если в массиве один элемент
  } else {
    context.beginPath();
    context.arc(e.offsetX, e.offsetY, radius/2, 0, Math.PI*2);
    context.fillStyle = colorsArray[clr % (colorsArray.length - 1)];
    context.fill();
    context.closePath();

  } ///////////////////////////////////////////////////////////////////////
}

canvas.addEventListener('mousedown', putPoint);
clear.addEventListener('mousedown', clearCanvas);
// showRadius.addEventListener('mousedown', putPointWithRadius);


function addToObjectsArray(coordX, coordY, cluster) {
  objectsArray.push({x: coordX, y: coordY, color: cluster});
}

function isOwned(x1, y1, x2, y2) {
  if(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2)) <= outerRadius * 2) {
    return true;
  } else {
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
      if(isCurrentColor(objectsArray[i], currentPoint)) {
        return true;
      }
    }
  }
  return false;
}

function drawPoint(reachedPoint, currentPoint) {
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


function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  clr = 0;
  notReached = false;
  objectsArray = [];
}


// ВТ ГЗ  в 12:00, ауд 423с 425с

// ЧТ с 14:00 Числитель - УЛК, в 17:30 в ГЗ