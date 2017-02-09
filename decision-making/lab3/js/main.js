var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 7;

canvas.width = window.innerWidth;
canvas.height = 500;

var putPoint = function(e) {
  context.beginPath();
  context.arc(e.offsetX, e.offsetY, radius/2, 0, Math.PI*2);
  context.fill();
  console.log(e.offsetX, e.offsetY);
}

canvas.addEventListener('mousedown', putPoint);