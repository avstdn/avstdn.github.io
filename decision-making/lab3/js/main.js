var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var radius = 10000000;

canvas.width = window.innerWidth;
canvas.height = 500;

var putPoint = function(e) {
  context.beginPath();
  context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI * 2);
  context.fill();
}

canvas.addEventListener('mousedown', putPoint);