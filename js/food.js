function randomFood() {
    return {
        x: Math.floor(Math.random() * 20) * boxSize,
        y: Math.floor(Math.random() * 20) * boxSize
    };
}

let food = randomFood();

function drawFood() {
    ctx.fillStyle = "#1a2a0a";
    ctx.fillRect(food.x + 4, food.y + 4, boxSize - 8, boxSize - 8);
}