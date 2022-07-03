var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");

function main() {
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
setInterval(main, 10);


