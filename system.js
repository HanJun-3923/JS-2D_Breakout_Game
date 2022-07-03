var life = 3;

function win() {
    alert("YOU WIN, CONGRATULATIONS!");
    document.location.reload();
}

function gameOver() {
    life--;
    if(life <= 0) {
        alert("GAME OVER");
        document.location.reload();
        clearInterval(interval);
    }
    else {    
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 2;
        dy = -2;
    }
}

function drawLife() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Lives: "+life, canvas.width-65, 20);
}
