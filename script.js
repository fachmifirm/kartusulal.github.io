var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


ctx.fillStyle = '#F5F5DC';
ctx.shadowColor = '#DCDCDC';
ctx.shadowBlur = 7;
ctx.shadowOffsetX = 0;
ctx.shadowOffseyY = 5;
var rect = { x: 200, y: 100, width: 200, height: 300 };
var rect1 = { x: 190, y: 90, width: 200, height: 300 };
var rect2 = { x: 380, y: 170, width: 200, height: 300 };
var rect3 = { x: 200, y: 250, width: 200, height: 300 };
var rect4 = { x: 250, y: 200, width: 200, height: 300 };

var image = new Image();

// draw the rectangle unrotated
ctx.fillRect(rect.x, rect.y, rect.width, rect.height);

ctx.translate(rect1.x + rect1.width / 2, rect1.y + rect1.height / 2);
ctx.rotate(Math.PI / 1);
ctx.translate(-rect1.x - rect1.width / 2, -rect1.y - rect1.height / 2);
ctx.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);

ctx.translate(rect1.x + rect1.width / 2, rect1.y + rect1.height / 2);
ctx.rotate(Math.PI / 1);
ctx.translate(-rect1.x - rect1.width / 2, -rect1.y - rect1.height / 2);
ctx.fillRect(rect1.x, rect1.y, rect1.width, rect1.height);

ctx.fillStyle = '#F5F5DC';
ctx.translate(rect4.x + rect4.width / 2, rect4.y + rect4.height / 2);
ctx.rotate(Math.PI / 55);
ctx.translate(-rect4.x - rect4.width / 2, -rect4.y - rect4.height / 2);
ctx.fillRect(rect4.x, rect4.y, rect4.width, rect4.height);

ctx.translate(rect3.x + rect3.width / 2, rect3.y + rect3.height / 2);
ctx.rotate(Math.PI / -5);
ctx.translate(-rect3.x - rect3.width / 2, -rect3.y - rect3.height / 2);
ctx.fillRect(rect3.x, rect3.y, rect3.width, rect3.height);

ctx.translate(rect3.x + rect3.width / 2, rect3.y + rect3.height / 2);
ctx.rotate(Math.PI / -20);
ctx.translate(-rect3.x - rect3.width / 2, -rect3.y - rect3.height / 2);
ctx.fillRect(rect3.x, rect3.y, rect3.width, rect3.height);