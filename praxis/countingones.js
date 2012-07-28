/*
 * Counting Ones - 2012/06/15
 *
 * Today’s exercise is a fun math problem:
 *
 * Consider a function f that takes a positive integer n and returns the number of 1s
 * in the decimal representation of all the integers from 0 to n, inclusive. For
 * example, f(13) = 6, for the numbers 1, 10, 11 (twice, for two 1s), 12 and 13.
 * Notice that f(1) = 1. After 1, what is the next largest n for which f(n) = n?
 */

function enumRange(start, end) {
	var range = new Array(end - start + 1);

	for (;start <= end; end--) {
		range[end-start] = end;
	}
	return range;
}


function countOnes(num) {
	num = "" + num;
	return (num.match(/1/g)||[]).length;
}

//console.log(countOnes(enumRange(0,13)))
console.log(countOnes(111));

function largest() {
	var i = 1;

	var sum = 1;

	do {
		i++;
		sum += countOnes(i);

	} while (i !== sum) ;
	return i;
}
console.log(largest());
