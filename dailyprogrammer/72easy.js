/*
 * [7/4/2012] Challenge #72 [easy] (self.dailyprogrammer)
 *
 * The one-dimensional simple cellular automata [1] Rule 110 is the only such
 * cellular automata currently known to be turing-complete, and many people say it is
 * the simplest known turing-complete system.
 * Implement a program capable of outputting an ascii-art representation of applying
 * Rule 110 to some initial state. How many iterations and what your initial state is
 * is up to you!
 * You may chose to implement rule 124 instead if you like (which is the same thing,
 * albeit backwards).
 * Bonus points if your program can take an arbitrary rule integer from 0-255 as
 * input and run that rule instead!
 *
 */

function rule110(n) {
	switch (n) {
		case 0 :
		case 4:
		case 7:
			return 0;
		default:
			return 1;
	}
}

function automata(rule) {

	'use strict';

	var curGen = [],
			prevGen = [],
			size = 30,
			str = "",
			i,j;

	for (i = size; i--;) prevGen[i] = 0;


	//init
	prevGen[size-1] = 1;

	//console.log(prevGen);
	for (i = 0; i<size; i++) {


		for (j = 0; j<size; j++) {


			//console.log(prevGen);
			if (j > 0 && j < size-1) {
				str = "" + prevGen[j-1] + prevGen[j] + prevGen[j+1];

			}
			
			//Boundry Cases
			//Assume zero
			else if (j === 0) {
				str = "0";
				str += prevGen.slice(0,2).join("");
			} else {
				str = "0";
				str += prevGen.slice(-2);
			}

			curGen[j] = rule(parseInt(str,2));


		}
		//console.log(curGen.join("").replace("1","X").replace("0"," "));
		console.log(prevGen.join("").replace(/0/g," "));
		prevGen = curGen.slice();
		
	}


}
automata(rule110);
