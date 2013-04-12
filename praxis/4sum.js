/* 
 * http://programmingpraxis.com/2012/08/14/4sum/2/
 *
 * We have today another exercise from our inexhaustible stock of interview questions:

Given an array of integers, output a list of four integers that sum to zero (the same input integer can be used multiple times), or indicate that no such set of four integers exists. For example, given the array (2 3 1 0 -4 -1), the set of four integers (3 1 0 -4) sums to zero, as does the set (0 0 0 0).

Your task is to write a program that solves the interview question. When you are finished, you are welcome to read or run a suggested solution, or to post your own solution or discuss the exercise in the comments below.
 *
 */

var under = require('underscore');
function zeroSum() {
	var map = {}
		, args = under(arguments).toArray()
		, i, j, sum;


		//Note:
		//let a, b, c, d be the foursome that sums to zero
		//then: 
		//a + b + c + d = 0 is equivalent to 
		//a + b = -(c+d)
		

		//Save a + b to map
		for (i = 0; i < args.length; i++) {
			for (j = i; j < args.length; j++) {
				sum = args[i] + args[j];
				map["r" + sum] = "" + args[i] + " " + args[j];
			}
		}

		//Fine the -(c + d) that equals to (a + b)
		for (i = 0; i < args.length; i++) {
			for (j = i; j < args.length; j++) {
				sum = -(args[i] + args[j]);
				if (map["r" + sum] !== undefined ) {
					console.log(map["r" + sum] + " " + args[i] + " " + args[j] );
				}
			}
		}

}


zeroSum (2,3, 1, 0, -4, -1);
