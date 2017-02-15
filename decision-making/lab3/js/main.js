var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var ctx = canvas.getContext('2d');

var radius = 7;

canvas.width = window.innerWidth - 50;
canvas.height = 400;

var putPoint = function(e) {

  context.beginPath();
  context.arc(e.offsetX, e.offsetY, 40, 0, Math.PI*2);
  context.strokeStyle = 'yellow';
  context.stroke();
  context.closePath();

  context.beginPath();
  context.arc(e.offsetX, e.offsetY, radius/2, 0, Math.PI*2);
  // coords.innerHTML = 'X: ' + e.offsetX + ' and Y: ' + e.offsetY;
  context.fill();
  context.closePath();

  console.log(e.offsetX, e.offsetY);
}

canvas.addEventListener('mousedown', putPoint);

// var coords = document.getElementById('coords');