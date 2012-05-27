//if JS running in Rhino
if (typeof Packages === "object" && String(Packages) === "[JavaPackage ]") {
	load('init.js');
}

function isPalindrome(s,debug) {
	var snum = (s.constructor == Number ) ? "" + s : s,
			i,
			len = snum.length;
	middle_pos = Math.floor((len + 1) / 2) -1; //Zero Index 

	for (i = 0; i <= middle_pos; i++ ) {

		debug && print(snum[i] + " -> " + snum[len-1-i]);
		// front index does not equal back minux front index?
		if (snum[i] != snum[len-1-i]) {
			return false;
		}
	}
	return true;
}

var isp = isPalindrome;

//console.log(isp(123454321));
//console.log(isp(12345654321));
//console.log(isp(12344321));
//console.log(isp(1234554321));
//console.log(isp("hiih"));
//console.log(isp("hih"));
//console.log(isp(112211));
//console.log(isp("AnaanA"));
//console.log(isp("888"));
//console.log(isp(888));
//console.log(isp(1));

//console.log(isp(1234551));
//console.log(isp(112));
//console.log(isp(1248376201037632));


console.log(isp(956459));

function highestPalindrome (highest) {
	var i, j;

	for (i = highest; i >= 1; i--) {
		for (j = highest; j >= Math.sqrt(highest); j--) {
			if (isPalindrome(i*j)) return i*j;
		}
	}
	return false;


}

function enumPalindromes(highest) {
	var i, j;

	var palindromes = [];

	for (i = highest; i >= Math.sqrt(highest); i--) {
		for (j = highest; j >= Math.sqrt(highest); j--) {
			if (isPalindrome(i*j)) palindromes.push(i*j);
		}
	}
	return palindromes;
}

Array.max = function( array ){
	    return Math.max.apply( Math, array );
	};


var enumPals = enumPalindromes(999);
var max = Array.max(enumPals);
console.log(max);
