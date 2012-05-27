//if JS running in Rhino
if (typeof Packages === "object" && String(Packages) === "[JavaPackage ]") {
	load('init.js');
}

var start = (new Date).getTime() ;

//Formula for sum of squares sequence
function sumOfSquaresOfNaturalNum(n) {
	return n * ( n + 1) * ( 2 * n + 1) / 6;
}


//Formular for sum of natural numbers (see Gauss)
function sumNatNums(n) {
	return n * ( n + 1 ) / 2;
}

function prob6(n) {
	return Math.pow(sumNatNums(n),2) - sumOfSquaresOfNaturalNum(n) ;
}

console.log(sumOfSquaresOfNaturalNum(10));
console.log(Math.pow(sumNatNums(10),2));

console.log(prob6(100));
var diff = (new Date).getTime() - start;
console.log("In " + diff + " time");
