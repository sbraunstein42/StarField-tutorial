let canvas = document.getElementById("myCanvas");
let pencil = canvas.getContext("2d"); // This gives you the drawing context, like a pencil

import { Star } from "./star.js";

let mySpecialStar = new Star(canvas, pencil);
mySpecialStar.draw();

let stars = [
    mySpecialStar
];

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



