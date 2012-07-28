/* Challenge 64 Easy - 2012/06/13
 *
 * The divisors of a number are those numbers that divide it evenly; for example, the
 * divisors of 60 are 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, and 60. The sum of the
 * divisors of 60 is 168, and the number of divisors of 60 is 12.
 * The totatives of a number are those numbers less than the given number and coprime
 * to it; two numbers are coprime if they have no common factors other than 1. The
 * number of totatives of a given number is called its totient. For example, the
 * totatives of 30 are 1, 7, 11, 13, 17, 19, 23, and 29, and the totient of 30 is 8.
 * Your task is to write a small library of five functions that compute the divisors
 * of a number, the sum and number of its divisors, the totatives of a number, and
 * its totient.
 */

function divisors(n) {

	var divisors = [],
			i = 1;
	while (i <= n) {

		if (n % i == 0) {
			divisors.push(i);
		}
		i++;

	}
	return divisors;
}

function numDivisors(n) {
	return divisors(n).length;
}
function sumDivisors(n) {
	//Use accumulator
	return divisors(n).reduce(function (a,b) {
		return a + b;
	}, 0);
}

//Clever implementation
//Why reinvent the wheel?
function sumDivisors2(n) {
	var divs = divisors(n).join("+");
	return (new Function("return " + divs ))();
}

function gcd(a,b) { 
	if (b == 0) {return a}
	else {
		return gcd(b, a % b)
	}
}
function totatives(n) {
	var tots = [],
			i = 1;
	while (i < n) {
		if (gcd(i,n) == 1) {
			tots.push(i);
		}

		i++;
	}
	return tots;
}

function totient(n) {
	return totatives(n).length;
}
console.log(divisors(60));
console.log(numDivisors(60));
console.log(sumDivisors(60));
console.log(sumDivisors2(60));

console.log(totatives(30));
console.log(totient(30));
