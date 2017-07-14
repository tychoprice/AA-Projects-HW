document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById('myCanvas');
  canvas.height = '500';
  canvas.width = '500';
  const ctx = canvas.getContext('2d');

  // ctx.fillStyle = 'blue';
  // ctx.fillRect(100, 100, 400, 300);

  ctx.beginPath();
  ctx.arc(100, 100, 20, 0, 2*Math.PI, true);
  ctx.fillStyle = 'yellow';
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'blue';
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(200, 100, 20, 0, 2*Math.PI, true);
  ctx.fillStyle = 'yellow';
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'blue';
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(150, 150, 100, 9.5, 20*Math.PI, true);
  ctx.fillStyle = 'green';
  ctx.lineWidth = 6;
  ctx.strokeStyle = 'blue';
  ctx.stroke();

// ctx.fillStyle = 'red';
// ctx.beginPath();
// ctx.moveTo(10,30);
// ctx.bezierCurveTo(50,90,159,-30,200,30);
// ctx.lineTo(200,90);
// ctx.lineTo(10,90);
// ctx.closePath();
// ctx.fill();
// ctx.lineWidth = 4;
// ctx.strokeStyle = 'black';
// ctx.stroke();

});
