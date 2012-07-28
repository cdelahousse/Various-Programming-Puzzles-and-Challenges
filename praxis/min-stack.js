//if JS running in Rhino
if (typeof Packages === "object" && String(Packages) === "[JavaPackage ]") {
	load('init.js');
}
/* 
 * Christian Delahousse
 * Programming Praxis
 * 2012/07/27  
 * Min stack
 * http://programmingpraxis.com/2012/07/27/min-stack/
 *
 * Create a stack that does push and pop operations in O(1), but
 * also finds (but doesn't remove) the minimum element, also in 
 * O(1) time;
 *
*/



function MinStack() {
	var pushPopStack= []
		, minimumsStack = []
		, n = 0 //Num of elems in structure
		, m = 0;// num of elems in min stack


	this.push = function (elem) {

		//If num of elems is zero, push to both stacks. 1st elem
		//is also a minimum
		if (n === 0) {
			minimumsStack.push(elem);
			m++;
		}
		//If new elem is lower than current min, we push a new min
		else if (elem < minimumsStack[m-1]) {
			minimumsStack.push(elem);
			m++;
		}

		pushPopStack.push(elem);
		n++;

	};

	
	this.pop = function () {

		if (n === 0) {
			throw "No elems";
		}

		var elem = pushPopStack.pop();
		n--;

		//If elem matches pop of min stack, pop that one
		//off too
		if (elem === minimumsStack[m-1]) {
			m--;
			minimumsStack.pop();
		}
		return elem;
	};

	//Return minimun
	this.min = function () {
		return minimumsStack[m-1];
	};

	this.toString = function () {
		var str = pushPopStack + " | " + minimumsStack;
		return str;
	};
}


