var paddleHeight = 10;
var paddleWidth = 300;
var paddleX = (canvas.width - paddleWidth) / 2;

var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(event) {
    if(event.keyCode == 39) rightPressed = true;
    else if(event.keyCode == 37) leftPressed = true;
}

function keyUpHandler(event) {
    if(event.keyCode == 39) rightPressed = false;
    else if(event.keyCode == 37) leftPressed = false;
}

function mouseMoveHandler(event) {
    var relativeX = event.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        if(relativeX - paddleWidth / 2 <= canvas.width - paddleWidth) {
            paddleX = relativeX - paddleWidth / 2;
        }
        else paddleX = cavas.width - paddleWidth;
        if(relativeX - paddleWidth / 2 > 0) {
            paddleX = relativeX - paddleWidth / 2;
        }
        else paddleX = 0;

        
    }
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function movePaddle() {
    if (rightPressed && paddleX < canvas.width - paddleWidth) 
        paddleX += 7;
    else if (leftPressed && paddleX > 0) 
        paddleX -= 7;
}
