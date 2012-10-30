/*
[8/8/2012] Challenge #86 [easy] (run-length encoding) (self.dailyprogrammer)
http://www.reddit.com/r/dailyprogrammer/comments/xxbbo/882012_challenge_86_easy_runlength_encoding/
submitted 23 hours ago by Steve132
Run-Length encoding is a simple form of compression that detects 'runs' of repeated instances of a symbol in a string and compresses them to a list of pairs of 'symbol' 'length'. For example, the string
"Heeeeelllllooooo nurse!"
Could be compressed using run-length encoding to the list of pairs [(1,'H'),(5,'e'),(5,'l'),(5,'o'),(1,'n'),(1,'u'),(1,'r'),(1,'s'),(1,'e')]
Which seems to not be compressed, but if you represent it as an array of 18bytes (each pair is 2 bytes), then we save 5 bytes of space compressing this string.
Write a function that takes in a string and returns a run-length-encoding of that string. (either as a list of pairs or as a 2-byte-per pair array)
BONUS: Write a decompression function that takes in the RLE representation and returns the original string
*/


	function encode(str) {
		var len = str.length
			, list = []
			, prev
			, ch
			, i
			, count;

		count = 1;
		prev = str.charAt(0);
		for (i = 1; i < len ; i++) {
			ch = str.charAt(i);
			if (prev === ch) {
				count++;
			} else {
				list.push([count,prev]);
				count = 1;
			}
			prev = ch;
		}

		list.push([count,prev]);

		return list;
	}
	console.log(code = encode("Heeeeelllllooooo nurse!"));

	function decode(code) {
		function times(s,num) {
			return num === 0 ?  "" : s + times(s,--num);
		}

		return code.reduce(function(a,b) {
			return a + times(b[1],b[0]);
		},"");
	}
	console.log(decode(code));
