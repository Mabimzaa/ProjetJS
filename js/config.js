const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const boxSize = 20;
const gameSpeed = 100;

let snake = [
    {x: 9 * boxSize, y: 10 * boxSize}
];

const directions = ["RIGHT", "LEFT", "UP", "DOWN"];
let direction = directions[Math.floor(Math.random() * directions.length)];

let score = 0;
let game = null;

const scoreDisplay = document.getElementById("score");