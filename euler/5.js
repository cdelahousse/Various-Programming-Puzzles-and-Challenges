//if JS running in Rhino
if (typeof Packages === "object" && String(Packages) === "[JavaPackage ]") {
	load('init.js');
}


//Brute force solution, ew.
//Will rework into a better solution soon

var start = (new Date).getTime() ;
var n = 0;

do {
	flag = true;
	n++;
	for (i = 20; i > 0; i--) {
		if (!(n % i == 0)) {
			flag = false;
			break;
		}
	}
} while (flag == false)

var diff = (new Date).getTime() - start;
console.log(n);
console.log("In " + diff + " time");
