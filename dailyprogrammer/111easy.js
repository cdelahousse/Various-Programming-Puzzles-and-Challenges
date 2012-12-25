/*
 * [11/6/2012] Challenge #111 [Easy] Star delete (self.dailyprogrammer)
submitted 1 month ago* by Cosmologicon Python
Write a function that, given a string, removes from the string any * character, or any character that's one to the left or one to the right of a * character. Examples:
"adf*lp" --> "adp"
"a*o" --> ""
"*dech*" --> "ec"
"de**po" --> "do"
"sa*n*ti" --> "si"
"abc" --> "abc"
Thanks to user larg3-p3nis for suggesting this problem in /r/dailyprogrammer_ideas[1] !

*/

		function unstar(str) {
			return str.replace(/.?\*+.?/g, '');
		}


		console.log(unstar ("adf*lp"))
		console.log(unstar ("a*o"))
		console.log(unstar ("*dech*"))
		console.log(unstar ("de**po"))
		console.log(unstar ("sa*n*ti"))
		console.log(unstar ("abc"))
