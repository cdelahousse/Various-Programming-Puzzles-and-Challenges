
/* [7/27/2012] Challenge #82 [easy] (Substring list) (self.dailyprogrammer)
 * submitted 5 days ago by nooodl Various
 * Write a function that takes a number n as an argument and returns (or outputs)
 * every possible unique substrings (not counting "") of the first n letters of the
 * alphabet (in any order you like). For example, substrings(5) could be:
 * a
 * ab
 * abc
 * abcd
 * abcde
 * b
 * bc
 * bcd
 * bcde
 * c
 * cd
 * cde
 * d
 * de
 * e
 * BONUS 1: Find a way to quickly determine how many strings this function returns
 * for a given input. If the alphabet were 500 letters long, how much possible
 * substrings would it have?
 * BONUS 2: Modify your function to take a string as an argument. Make sure all
 * substrings in your output are still unique (i.e., there are two "l" substrings in
 * "hello", but you should output only one).
 */


	function uniq(str) {
		var i
		,	len = str.length
		, alph= new Array(len)
		, ch;

		for (i = 0; i < len; i++) {

			ch = str.charAt(i);

			alph[i] = str.indexOf(ch, i+1) === -1 ? ch : null;
		}

		return alph.join("");
	}


	function subStr(str,num) {

		var i,j
		, str = uniq(str)
		,	len = num || str.length;

		console.log(len*(len + 1)/2 + " substrings");

		for (i = 0, j=len; i <= j; i++) {
			for (; j > i; j--) {
				console.log(str.substring(i,j));
			}
			j=len;
		}
		

	}
	subStr('hello');
	subStr('abcdefg',5);
