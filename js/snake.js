function drawBox(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, boxSize - 1, boxSize - 1);
}

function drawSnake() {
    for (let i = 0; i < snake.length; i++) {
        drawBox(snake[i].x, snake[i].y, "#1a2a0a");
    }
}

function moveSnake() {
    let newHead = {x: snake[0].x, y: snake[0].y};

    if (direction === "RIGHT") newHead.x += boxSize;
    if (direction === "LEFT")  newHead.x -= boxSize;
    if (direction === "UP")    newHead.y -= boxSize;
    if (direction === "DOWN")  newHead.y += boxSize;

    snake.unshift(newHead);

    if (newHead.x === food.x && newHead.y === food.y) {
        score++;
        scoreDisplay.textContent = "Score : " + score;
        food = randomFood();
    } else {
        snake.pop();
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight" && direction !== "LEFT")  direction = "RIGHT";
    if (e.key === "ArrowLeft"  && direction !== "RIGHT") direction = "LEFT";
    if (e.key === "ArrowUp"    && direction !== "DOWN")  direction = "UP";
    if (e.key === "ArrowDown"  && direction !== "UP")    direction = "DOWN";
});
