function drawBox(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, boxSize, boxSize);
}

function spawnFood() {
    return {
        x: Math.floor(Math.random() * (width / boxSize)) * boxSize,
        y: Math.floor(Math.random() * (height / boxSize)) * boxSize
    }
}

let food = spawnFood();
document.addEventListener("keydown", changeDirection);
function changeDirection(e){

    if(e.key === "ArrowLeft" && direction !== "RIGHT") {
        direction = "LEFT";
    } else if(e.key === "ArrowUp" && direction !== "DOWN") {
        direction = "UP";
    } else if(e.key === "ArrowRight" && direction !== "LEFT") {
        direction = "RIGHT";
    } else if(e.key === "ArrowDown" && direction !== "UP") {
        direction = "DOWN";
    }
}

function colisionWithBody(head, body) {

    for(let i = 0; i < body.length; i++) {
        if(head.x === body[i].x && head.y === body[i].y)
        return true;
        }
}

//fonction principale drawGame
function drawGame() {
    createContext.clearRect(0, 0, innerWidth, height);

    drawBox(FontFaceSetLoadEvent.x, food.y, "red");
}

game = setInterval(draxGame, gameSpeed);

function draxGame() {
    createContext.clearReact(0, 0, innerWidth, height);
}

// lance la boucle 
