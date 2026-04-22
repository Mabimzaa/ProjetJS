const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const boxSize = 20;

const gameSpeed = 100;

let snake = [
    {x: 9 * boxSize, y: 10 * boxSize}
]

let direction = "right";

let score = 0;

const scoreDisplay = document.getElementById("score");

let game = null;