
function powerset(ary) {
	var ps = [[]];
	for (var i=0; i < ary.length; i++) {
		for (var j = 0, len = ps.length; j < len; j++) {
			ps.push(ps[j].concat(ary[i]));
		}
	}
	return ps;
}


function challenge(pwset) {
	var sum,count = 0,subset;
	for (var i = 3,len = pwset.length; i < len; i++) { //skip first few
		sum = 0;
		subset = pwset[i];
		for (var j = 0,len2 =subset.length; j < len2-1; j++) {
			sum += subset[j];
		}
		if (sum === subset[len2 - 1]) {

			//console.log(subset);
			count++;
		}
	}
	return count;
}


var res = powerset2([1,2,3,4,6]);

console.log(challenge(res));

res = powerset([3, 4, 9, 14, 15, 19, 28, 37, 47, 50, 54, 56, 59, 61, 70, 73, 78, 81, 92, 95, 97, 99]);


console.log(challenge(res));


function powerset2(array) {
	var len = Math.pow(2,array.length), //powerset is 2^n
	//var len = array.length;
	pwst = [],
	subset;


	var binstring,j;
	//Build bin string representation of powerset
	for (binstring = 0; binstring < len; binstring++) {
		subset = [];
		//Match bits to element
		for (j = 0; j < array.length; j++) {
			if (binstring & (1 << j)) {
				subset.push(array[j]);
			}
		}
		pwst.push(subset);
	}
	return pwst;
}
