//Collision avec les murs

if(snakeX < 0 || snakeX >=width || snakeY < 0 || snakeY >= height){
    clearInterval(game);
    alert(`Partie terminée ! Votre score est de : ${score} `);
    return;
}

//Collision avec le corps

if(collisionWithBody(newHead, snake)){
    clearInterval(game);
    alert(`Partie terminée ! Votre score est de : ${score} `);
    return;
}