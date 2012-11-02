/*[10/25/2012] Challenge #107 [Easy] (All possible decodings) (self.dailyprogrammer)
submitted 7 days ago by Cosmologicon Python
Consider the translation from letters to numbers a -> 1 through z -> 26. Every sequence of letters can be translated into a string of numbers this way, with the numbers being mushed together. For instance hello -> 85121215. Unfortunately the reverse translation is not unique. 85121215 could map to hello, but also to heaubo. Write a program that, given a string of digits, outputs every possible translation back to letters.
Sample input:
123
Sample output:
abc
aw
lc
Thanks to ashashwat for posting this idea in /r/dailyprogrammer_ideas!
*/


	var letters = new Array(26);
	for (var i = 0; i < 26; i++) {
		letters[i] = String.fromCharCode(i+97);
	}

	function decode(ls, res) {
		if (ls.length == 0) {
			console.log(res);
			return;
		}

		var one,two;
		if (ls.length > 1 && (two = parseInt(ls.substr(0,2))) < 26) {
				decode(ls.substr(2), res + letters[two-1])
		}

		one = parseInt(ls.substr(0,1));
		decode(ls.substr(1), res + letters[one-1])
		
	}

	decode('85121215', "");
