var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");

function main() {
    setInterval(gameStart, 10);
}

function gameStart() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    drawLife();
    moveBall();
    movePaddle();
    collisionDetection();
    drawScore();
    drawBricks();
    x += dx;
    y += dy;
}


