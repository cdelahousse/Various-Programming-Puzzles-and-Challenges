//if JS running in Rhino
if (typeof Packages === "object" && String(Packages) === "[JavaPackage ]") {
	load('init.js');
}

var LIMIT = 700;
var squares = (function () {
	var i, array = [];
	for (i = 0; i <= LIMIT; i++) {
		
		array[i] = Math.pow(i,2);
	}
	return array;
})();

var a = 0,
		b,
		c_squared,
		c,
		sumTriple = 0;
do {

	a++;

	for (b = 1; b < LIMIT; b++) {

		c_squared = squares[a] + squares[b];
		
		if ((c = squares.indexOf(c_squared)) != -1) {
			sumTriple = a + b + c;
			if (sumTriple >= 1000) {
				break;
			}
				
		}

		if (a + b > 1000) console.log("opt"); //Optimisation

	}

}while (sumTriple != 1000)

console.log(a);
console.log(b);
console.log(c);
console.log("Result is: " +  a*b*c);
