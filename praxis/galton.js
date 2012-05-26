//if JS running in Rhino
if (typeof Packages === "object" && String(Packages) === "[JavaPackage ]") {
	load('init.js');
}
/* 
 * Christian Delahousse
 * Programming Praxis
 * Galton Machine Simulation
 * http://programmingpraxis.com/2012/04/10/galton/
*/


/* 
 * I'm shaping the Galton machine as follows:
 *
 * 0
 * 01
 * 012
 * 0123
 * 01234
 *
 * Where the last row represents slots 
 *
 * */

/*
 * Galton machine
 * Input: number of rows
 * */
function galton(rows,balls) {


	//Create slots. We need row+1 worth of slots
	//There's +1 more slots than rows. Notice the 
	//zero index
	var slots = new Array(rows+1),
			len = rows+1; 

	while (len--) slots[len] = 0;


	for (var j = 0; j < balls; j++) {
		dropBall(rows,slots);
	}


	/* Drop ball. r: num rows, s: slots array */
	function dropBall(r,s) {

		var index = 0;
		for (var i = 0; i < r; i++) {
			if (randomBool()) {
				index++;
			} else {
				//do nothing
				//The ball goes down one row, 
				//but since I've represented the galton machine/triangle
				//as a right triangle, the index doesn't change
			}
		}
		//increment the slot where the ball landed
		s[index]++;
	}

	return slots;
}

function init() {
	printGalton(galton(20,1000));
}


function randomBool(probability) {
	var p = probability || 0.5;
	return Math.random() < p;
}

//Prints the galton fn
function printGalton(slots) {
	slots.map(function (num) {

		num = Math.ceil(num/4);
		var str = "";
		for (var i = 0; i < num; i++) {
			str += "*";
		}
		console.log(str);
	});
}

init();
