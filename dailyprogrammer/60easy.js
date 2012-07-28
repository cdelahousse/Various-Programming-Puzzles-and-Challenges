
/*A number is polite if it can be written as the sum of two or more consecutive
 * numbers; for instance, 7 is polite because it can be written at 3 + 4. Some
 * numbers can be written as the sum of two or more consecutive numbers in more than
 * one way; for instance, 15 = 1 + 2 + 3 + 4 + 5 = 4 + 5 + 6 = 7 + 8. The number of
 * ways that a number can be written as the sum of two or more consecutive numbers is
 * its politeness. Any number that is a power of 2 cannot be written as the sum of
 * two or more consecutive numbers; such a number has a politeness of 0, and is thus
 * impolite.
 * Here is an article helping in understanding Polite numbers
 * Your task is to write a program that calculates all the ways that a number can be
 * written as the sum of two or more consecutive numbers.*/


function polite(n) {
	//If Power of two
	//http://graphics.stanford.edu/~seander/bithacks.html#DetermineIfPowerOf2
	if ( (n & (n - 1)) === 0 ) {
		console.log ("Impolite number");
		return;
	}

	var sum = 0;

	for (var i = 1,count=0,politeness=0; i < n; i++) {

		sum += i;
		count++;
		if (sum >= n) {
			if (sum == n) {
				for (var j = i - count + 1, str = ''; j <= i; j++) {
					str += j + ' ';
				}
				console.log(str + '= ' + sum);
				politeness++;
			}
			i = i - count + 1; //Rewind and then step forward
			count = 0;
			sum = 0;
		} 
	}
	console.log(n + '\'s politeness: ' + politeness);
}

polite(63);
