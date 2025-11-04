let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil

import { Star } from "./star.js";

//add all stars to the array
let stars = [];

for(let i = 0; i < 100; i++) {
    let newStar = new Star(canvas, pencil);
    stars.push(newStar)
}

console.log(stars.length);

function gameLoop() {
    


    //erase the canvas
    pencil.clearRect(0, 0, canvas.width, canvas.height);
    //draw background
    //draw stars
    //move stars
    for(let i = 0; i < stars.length; i++) {
        stars[i].move();
        stars[i].draw();
    }
    //recycle stars/restart stars



}

setInterval(gameLoop, 50);



