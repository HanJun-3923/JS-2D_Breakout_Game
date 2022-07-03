var button = document.getElementById("startButton");
var board = document.getElementById("myCanvas");


document.addEventListener("click", onclickHandler);

function onclickHandler(event) {
    /*
    1. 버튼 숨기기
    2. 캔버스 보여주기
    3. 게임 시작하기
    */
    console.log(event);
    board.classList.remove("hidden");
    button.classList.add("hidden");
    main();
}

