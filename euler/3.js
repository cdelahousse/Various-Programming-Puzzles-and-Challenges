
//if JS running in Rhino
if (typeof Packages === "object" && String(Packages) === "[JavaPackage ]") {
	load('init.js');
}

//Finds the biggest factor by factorizing 
function biggestdivisor (n) {
	var divisor = 2;
	var number = n;

	while ( number > 1) { //when reaches biggest factor, number will be 0;
		if ( number % divisor == 0 ) {
			number /= divisor;
			divisor--;//Try this factor again...
		}
		divisor++;
	}
	return divisor;
}

//console.log(biggestdivisor(600851475143));

//Skips over even numbers after factor becomes < 2
//Stop at sq
function bgstdivisorskp2 (n) {
	var number = n, divisor,sqrt;

	while ( number % 2 == 0 ) { 
		number /= 2;
	}

	if (number < 1) return 2;

	divisor = 3;
	sqrt = Math.sqrt(n);
	while ( number > 1 && divisor < sqrt ) { //when reaches biggest factor, number will be 0;
		if ( number % divisor == 0 ) {
			number /= divisor;
			divisor -= 2;//Try this factor again...
		}
		divisor += 2; //Skip over even numbers
	}
	return divisor;
}

console.log(bgstdivisorskp2(600851475143));
