let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil

import { Star } from "./star.js";

//add all stars to the array
let stars = [];

let howManyStars = 100;


for(let i = 0; i < howManyStars; i++) {
    let newStar = new Star(canvas, pencil);
    stars.push(newStar)
}

function drawSpace() {
    // Set the fill color
    pencil.fillStyle = 'black';
    // Draw a filled rectangle at (10, 10) with width 100 and height 50
    pencil.fillRect(0, 0, canvas.width, canvas.height);
}

//erase the canvas
function clearScreen() {
    pencil.clearRect(0, 0, canvas.width, canvas.height);
}

function gameLoop() {
    
    clearScreen();
    drawSpace();
    for(let i = 0; i < stars.length; i++) {
        stars[i].move();
        stars[i].draw();
        stars[i].tryToRecycle();
    }

}

setInterval(gameLoop, 10);



