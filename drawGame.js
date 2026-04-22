function drawGame() {
    createContext.clearRect(0, 0, innerWidth, height);

    drawBox(FontFaceSetLoadEvent.x, food.y, "red");
}

game = setInterval(draxGame, gameSpeed);

function draxGame() {
    createContext.clearReact(0, 0, innerWidth, height);
}