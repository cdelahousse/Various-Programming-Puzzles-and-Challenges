/*
[10/27/2012] Challenge #108 [Easy] (Scientific Notation Translator) (self.dailyprogrammer)
submitted 2 days ago* by ttaylorr
If you haven't gathered from the title, the challenge here is to go from decimal notation -> scientific notation. For those that don't know, scientific notation allows for a decimal less than ten, greater than zero, and a power of ten to be multiplied.
For example: 239487 would be 2.39487 x 10^5
And .654 would be 6.54 x 10-1
Bonus Points:
Have you program randomly generate the number that you will translate.
Go both ways (i.e., given 0.935 x 103, output 935.)
Good luck, and have fun!
*/


	//String way
	function convertToSci(str) {
		str = "" + str;
		var len
			, array
			, index = str.indexOf(".");
		var array;

		if (index === -1) {
			len = str.length;
			array = str.split("");
			array.splice(1,0,".");
			console.log(array.join("") + " x 10^" + (len-1));
		}
		else {
			str = str.split(".")[1];
			array = str.split("");
			len = str.length;
			array.splice(1,0,".");
			console.log(array.join("") + " x 10^-" + (len-2));
			
		}
	}

	//Loops way
	function convertToSci(num) {

		var counter = 0;
		if ( num >= 1 ) {
			while ( num >= 10 ) {
				num /= 10;
				counter++;
			}
		}
		else {
			while ( num <= 1) {
				num *= 10;
				counter--;
			}
		}
		console.log(num + " x 10^" + counter);
	}

	function convertToSci(num) {
		function log10(val) {
			return Math.log(val) / Math.log(10);
		}
		var exp = Math.floor(log10(num));

		//Notice the division
		console.log( (num / (Math.pow(10,exp))) + " x 10^" +exp);
	}

convertToSci(239487);
convertToSci(.654);

