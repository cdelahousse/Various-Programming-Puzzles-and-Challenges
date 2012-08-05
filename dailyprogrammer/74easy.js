
/* http://www.reddit.com/r/dailyprogrammer/comments/wa0mc/792012_challenge_74_easy/
 *
 * [7/9/2012] Challenge #74 [easy] (self.dailyprogrammer)
 * submitted 19 days ago by oskar_s
 * The Fibonacci numbers, which we are all familiar with, start like this:
 * 0,1,1,2,3,5,8,13,21,34,...
 * Where each new number in the sequence is the sum of the previous two.
 * It turns out that by summing different Fibonacci numbers with each other, you can
 * create every single positive integer. In fact, a much stronger statement holds:
 * Every single positive integer can be represented in one and only one way as a sum
 * of non-consecutive Fibonacci numbers. This is called the number's [1] "Zeckendorf
 * representation".
 * For instance, the Zeckendorf representation of the number 100 is 89 + 8 + 3, and
 * the Zeckendorf representation of 1234 is 987 + 233 + 13 + 1. Note that all these
 * numbers are Fibonacci numbers, and that they are non-consecutive (i.e. no two
 * numbers in a Zeckendorf representation can be next to each other in the Fibonacci
 * sequence).
 * There are other ways of summing Fibonacci numbers to get these numbers. For
 * instance, 100 is also equal to 89 + 5 + 3 + 2 + 1, but 1, 2, 3, 5 are all
 * consecutive Fibonacci numbers. If no consecutive Fibonacci numbers are allowed,
 * the representation is unique.
 * Finding the Zeckendorf representation is actually not very hard. Lets use the
 * number 100 as an example of how it's done:
 * First, you find the largest fibonacci number less than or equal to 100. In this
 * case that is 89. This number will always be of the representation, so we remember
 * that number and proceed recursively, and figure out the representation of 100 - 89
 * = 11.
 * The largest Fibonacci number less than or equal to 11 is 8. We remember that
 * number and proceed recursively with 11 - 8 = 3.
 * 3 is a Fibonacci number itself, so now we're done. The answer is 89 + 8 + 3.
 * Write a program that finds the Zeckendorf representation of different numbers.
 * What is the Zeckendorf representation of 3^15 ?
 *
 */

function fibGen(max) {
	var pprev = 0,
			prev = 1,
			vals = [pprev],
			f = 0;
	while (prev <= max) {
		f = prev + pprev;
		vals.push(prev);
		pprev = prev;
		prev = f;
	}

	return vals;
}

//console.log(fibGen(100));

function z(num) {
	var fibs = fibGen(num);

	function zeck(n,rep) {
		if (n <= 0) {
			return rep;
		}
		else {
			var i = 0;
			while (fibs[i] <= n) i++ ;
			return zeck(n-fibs[i-1],rep.concat([fibs[i-1]]));
		}

	}
	return zeck(num,[]);
}


console.log(z(100));
//console.log(Math.pow(3,15));
console.log(z(Math.pow(3,15)));
