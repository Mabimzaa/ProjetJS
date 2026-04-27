const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const boxSize = 20;
const gameSpeed = 100;

let snake = [
    {x: 9 * boxSize, y: 10 * boxSize}
];

let direction = "RIGHT";
let score = 0;
let game = null;

const scoreDisplay = document.getElementById("score");
