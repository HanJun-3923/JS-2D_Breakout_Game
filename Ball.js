var x = canvas.width / 2;
var y = canvas.height - 30;

var dx = 2;
var dy = -2;

var ballRadius = 10;

function moveBall() {
    if (y + dy < ballRadius) {
        dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        } else {
            gameOver();
        }
    }
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) 
        dx = -dx;
    x += dx;
    y += dy;
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
