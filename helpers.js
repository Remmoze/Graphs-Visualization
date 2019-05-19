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