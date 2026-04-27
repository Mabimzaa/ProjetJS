function drawGame() {
    ctx.fillStyle = "#8aac4a";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#7a9c3a";
    ctx.lineWidth = 0.5;
    for (let i = 0; i < canvas.width; i += boxSize) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvas.height);
        ctx.stroke();
    }
    for (let j = 0; j < canvas.height; j += boxSize) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(canvas.width, j);
        ctx.stroke();
    }

    drawFood();
    moveSnake();
    drawSnake();

    if (
        snake[0].x < 0 || snake[0].x >= canvas.width ||
        snake[0].y < 0 || snake[0].y >= canvas.height
    ) {
        clearInterval(game);
        gameOver();
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            clearInterval(game);
            gameOver();
        }
    }
}

function gameOver() {
    document.getElementById("boutonRecommencer").style.display = "block";
}

function recommencer() {
    // Remettre les valeurs de départ
    snake = [{x: 9 * boxSize, y: 10 * boxSize}];
    direction = directions[Math.floor(Math.random() * directions.length)];
    score = 0;
    scoreDisplay.textContent = "Score : 0";
    food = randomFood();

    // Cacher le bouton
    document.getElementById("boutonRecommencer").style.display = "none";

    // Relancer le jeu
    game = setInterval(drawGame, gameSpeed);
}

game = setInterval(drawGame, gameSpeed);
