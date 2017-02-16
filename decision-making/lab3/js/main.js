var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var objectsArray = [];

var radius = 7;

var outerRadius = 40;

canvas.width = window.innerWidth - 50;
canvas.height = 400;

var putPoint = function(e) {

  addToObjectsArray(e.offsetX, e.offsetY, 'undefined');

  context.beginPath();
  context.arc(e.offsetX, e.offsetY, outerRadius, 0, Math.PI*2);
  context.strokeStyle = 'yellow';
  context.stroke();
  context.closePath();

  context.beginPath();
  context.arc(e.offsetX, e.offsetY, radius/2, 0, Math.PI*2);
  context.fillStyle = 'black';
  context.fill();
  context.closePath();

  if(objectsArray.length > 0) { // В массиве должно быть больше 2-х элементов
    for(var i = 0; i < objectsArray.length - 1; i++) { 
      if(isOwned(objectsArray[i].x, objectsArray[i].y, objectsArray[objectsArray.length-1].x, objectsArray[objectsArray.length-1].y)) { // Если ф-ия вернула true, то объединяем точки в кластер
        if(setColor(objectsArray[i], objectsArray[objectsArray.length-1])) { // Если ф-ия вернула true, то красим обе точки
          redrawPoints(objectsArray[i], objectsArray[objectsArray.length-1]);
        } else { // Иначе, красим только одну точку
          drawPoint(objectsArray[objectsArray.length-1]);
        }
      }
    }
  }

  console.log(e.offsetX, e.offsetY);
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

function setColor(obj1, obj2) {
  if(obj1.color == 'undefined') {
    obj1.color = 'red';
    obj2.color = 'red';
    console.log('setColor', true);
    return true;
  } else {
    obj2.color = 'red';
    console.log('setColor', false);
    return false;
  }
}

function drawPoint(obj2) {
  context.beginPath();
  context.fillStyle = obj2.color;
  context.arc(obj2.x, obj2.y, radius/2, 0, Math.PI*2);
  context.fill();
  context.closePath();
}

function redrawPoints(obj1, obj2) {
  context.beginPath();
  context.arc(obj1.x, obj1.y, radius/2, 0, Math.PI*2);
  context.fillStyle = obj2.color;
  context.fill();
  context.closePath();
  context.beginPath();
  context.arc(obj2.x, obj2.y, radius/2, 0, Math.PI*2);
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