const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');

canvas.width = canvas.height = PIXELS_PER_UNIT * UNITS * 2;
const center = new Point(canvas.width/2, canvas.height/2);

let x = (innerWidth/2 - canvas.width/2 - 3); //-3 because of the border ewww
let y = (innerHeight/2 - canvas.height/2 - 3);

canvas.style.left = x + "px";
canvas.style.top = y + "px";

const plane = new Plane();
plane.draw();