//Coordonnées de la tête du serpent

let snakeX = snake[0].x;
let snakeY = snake[0].y; 

// Mise à jour de la position selon la direction

if (direction === "LEFT") { snakeX -= boxSize;
if (direction === "RIGHT") { snakeX += boxSize;
if (direction === "UP") { snakeY -= boxSize;
if (direction === "DOWN") { snakeY += boxSize;
}
}
}
}