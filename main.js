const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d');
const div = document.querySelector("div");

canvas.width = PIXELS_PER_UNIT * UNITS * 2;
canvas.height = PIXELS_PER_UNIT * UNITS * 2;
const center = new Point(canvas.width/2, canvas.height/2);

let x = (innerWidth/2 - canvas.width/2 - 3);
let y = (innerHeight/2 - canvas.height/2 - 3);

canvas.style.left = x + "px";
canvas.style.top = y + "px";

div.style.left = x + 3 + "px";
div.style.top = y + 3 + "px";

const plane = new Plane();
plane.draw();

function trans(...points) {
	let str = "";
	for(let i = 0; i < points.length; i+=2) {
		let obj = scalePoint(points[i], points[i+1]) ;
		str+= " " + obj.x + " " + obj.y;
	}
	return str;
}

function scalePoint(x, y) {
    x = center.x + PIXELS_PER_UNIT*x;
    y = center.y + -PIXELS_PER_UNIT*y;
    return {x, y};
}

/*

let arr = [];
for(let i = 1/6; i < 6; i+= 0.1) {
	arr.push(Number(1/i).toFixed(3))
	arr.push(Number(i).toFixed(3))
}
console.log(trans(...arr));

let arr = [];
for(let i = 6; i >= 1/6; i-= 0.1) {
	arr.push(Number(1/i).toFixed(3))
	arr.push(Number(i).toFixed(3))
}
console.log(trans(...arr));

let arr = [];
for(let i = 1/6; i < 6; i+= 0.1) {
	arr.push(Number(i).toFixed(3))
	arr.push(Number(1/i).toFixed(3))
}
console.log(trans(...arr));

var path = document.querySelector('.path');
var length = path.getTotalLength();

$(".path").getTotalLength();

*/