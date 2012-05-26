//if JS running in Rhino
if (typeof Packages === "object" && String(Packages) === "[JavaPackage ]") {
	load('init.js');
}
/* 
 * Christian Delahousse
 * Programming Praxis
 * Even Odd partition
 * http://programmingpraxis.com/2012/05/04/even-odd-partition/
*/


function isEven(num) {
	return num % 2 === 0;
}
function isOdd(num) {
	return !isEven(num);
}


function evenOddPartition2 (array) {
	function swap(i,j) {
		var tmp;
		tmp = array[i];
		array[i] = array[j];
		array[j] = tmp;

	}

	var index_even = 0,
			index_odd = array.length - 1;

	while (index_even < index_odd) {
		if (isEven(array[index_even])) {
			index_even++;
			continue;
		}
		if (isOdd(array[index_odd])) {
			index_odd--;
			continue;
		}

		swap(index_even, index_odd);
	}
}

function evenOddPartition (array) {
	function swap(i,j) {
		var tmp;
		tmp = array[i];
		array[i] = array[j];
		array[j] = tmp;

	}

	var index_even = array.length - 1,
			index_odd = 0;

	while (index_even > index_odd) {
		if (isOdd(array[index_odd])) {
			index_odd++;
			continue;
		}
		if (isEven(array[index_even])) {
			index_even--;
			continue;
		}

		swap(index_even, index_odd);
	}

	//i = index_even;
	//j = array.length - 1;
	//console.log(i, j);
	//swap(i,j);
	//while (i < j) {
		//i++;
		//j--;
		//swap(i,j);
	//}


}
var array = [1,2,3,4,5,6,7,8]
evenOddPartition(array);
console.log(array);


var array2 = [1,2,3,4,5,6,7,8,9]
evenOddPartition(array2);
console.log(array2);

var array3 = [1,2,3,4,5,6,7,8,9]
evenOddPartition2(array2);
console.log(array2);
//var array3 = [1,1,1,1,1,1]
//evenOddPartition(array2);
//console.log(array3);


