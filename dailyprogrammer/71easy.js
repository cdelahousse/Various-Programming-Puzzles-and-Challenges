
/*
 * [7/2/2012] Challenge #71 [easy] 
 *
 * http://www.reddit.com/r/dailyprogrammer/comments/vx3bk/722012_challenge_71_easy/
 *
 * If a right angled triangle has three sides A, B and C (where C is the
 * hypothenuse), the pythagorean theorem tells us that A2 + B2 = C2
 * When A, B and C are all integers, we say that they are a pythagorean triple. For
 * instance, (3, 4, 5) is a pythagorean triple because 32 + 42 = 52 .
 * When A + B + C is equal to 240, there are four possible pythagorean triples: (15,
 * 112, 113), (40, 96, 104), (48, 90, 102) and (60, 80, 100).
 * Write a program that finds all pythagorean triples where A + B + C = 504.
 *
 */

function triples(n) {
	function sqr(num) {
		return num*num;
	}
	var a,b,c
		, limit = n - 2
		, result = [];

	for (a = 1; a < limit; a++) {

		//Start from a because we don't want doubles
		for (b = a; b < limit; b++) {

			for (c = b; c < limit; c++) {
				if (a+b+c === n && sqr(a) + sqr(b) === sqr(c)) {
					result.push("(" + a + ", " + b + ", " + c + ")");
				}
			}
		}
	}

	return result;
}

console.log(triples(240));

function triplesFaster(n) {
	function sqr(num) {
		return num*num;
	}
	var a,b,c,
		limit = n-2,
		result = [];

	for (a = 1; a < limit; a++) {

		//Start from a because we don't want doubles
		for (b = a; b < limit; b++) {

			c = n - b - a; //We know a + b, so c is easy to find
			if (sqr(a) + sqr(b) === sqr(c)) {
					result.push("(" + a + ", " + b + ", " + c + ")");

			}
		}
	}

	return result;
}
console.log(triplesFaster(240));
