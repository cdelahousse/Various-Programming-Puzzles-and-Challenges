
//if JS running in Rhino
if (typeof Packages === "object" && String(Packages) === "[JavaPackage ]") {
	load('init.js');
}
/* 
 * Christian Delahousse
 * Programming Praxis
 * May 26,2012
 * Ackerman Function
 * http://programmingpraxis.com/2012/05/25/ackermanns-function/
*/

function A(m,n) {
	return (m == 0) ?
			n + 1 :
		( m > 0 && n ==0 ) ?
			A(m - 1,1) :
		( m > 0 && n > 0) ?
			A(m - 1, A(m,n-1)) :
			undefined;
}

console.log(A(0,0) == 1);
console.log(A(1,1) == 3);
console.log(A(3,4) == 125);
console.log(A(4,2));


