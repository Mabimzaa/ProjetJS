snake.unshift(newHead);

for(let i=0; i < snake.length; i++) {
    drawBox(snake[i].x, snake[i].y, i === 0 ? "lime" : "green");
}