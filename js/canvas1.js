/*jshint esversion: 6 */
const canvasElem = document.getElementById('canvas');
const ctx = canvasElem.getContext('2d');

ctx.fillRect(25, 25, 100, 100);

ctx.clerRect(45, 45, 60, 60);

for( var i = 0; i < 10; i++){
  ctx.strokeRect(50 + i * 2, 50 + i * 2, 50 - i * 2, 50 - i * 2);
}

ctx.clearRect(10, 10, 50, 50);

ctx.strokeRect(50, 50, 50, 50);


ctx.font = 'italic bold 30px arial';

ctx.textBaseLine = 'middle';
ctx.fillText('Witaj w Canvas', 5, 210);


ctx.font = 'italic bold 20px arial';
ctx.fillStyle = 'blue';

ctx.textBaseLine = 'middle';
ctx.textAlign = 'ceter';
ctx.fillText('Wstawiamy tekst', 90, 260);

ctx.fillStyle = 'green';
ctx.beginPath();
//
ctx.arc(150, 150, 50, 0, 2*Math.PI);
ctx.fill();
ctx.strokeStyle = 'xffffff';
ctx.arc(150, 150, 40, 0, 1.5*Math.PI);
ctx.stroke();
