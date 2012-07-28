/* 
 * Daily programmer - 2012/06/16 
 *
 * Write a program that given a floating point number, gives the number of American
 * dollar coins and bills needed to represent that number (rounded to the nearest
 * 1/100, i.e. the nearest penny). For instance, if the float is 12.33, the result
 * would be 1 ten-dollar bill, 2 one-dollar bills, 1 quarter, 1 nickel and 3 pennies.
 * For the purposes of this problem, these are the different denominations of the
 * currency and their values:
 * Penny: 1 cent
 * Nickel: 5 cent
 * Dime: 10 cent
 * Quarter: 25 cent
 * One-dollar bill
 * Five-dollar bill
 * Ten-dollar bill
 * Fifty-dollar bill
 * Hundred-dollar bill
 * Sorry Thomas Jefferson, JFK and Sacagawea, but no two-dollar bills, half-dollars
 * or dollar coins!
 * Your program can return the result in whatever format it wants, but I recommend
 * just returning a list giving the number each coin or bill needed to make up the
 * change. So, for instance, 12.33 could return [0,0,1,0,2,1,0,1,3] (here the
 * denominations are ordered from most valuable, the hundred-dollar bill, to least
 * valuable, the penny)
 * */

	function makeChange(amt, denom) {
		var len = denom.length,
				count,str = "",correction = 100;

		//Sort descending
		denom.sort(function (a,b) {return b-a});
		
		//Floating point issues. Get rid of floating point numbers
		denomCorrected = denom.map(function(a) {return a*correction;});
		amt *= correction;

		
		for (var i = 0; i < len; i++) {
			count = 0;
			while (amt >= denomCorrected[i]) {
				amt -= denomCorrected[i];
				count++;
			}
			str += count +"x" + denom[i] + "$ + ";
		}

		return str.slice(0,-3); //Remove last bit
	}
	console.log(makeChange( 12.33,[100,50,10,5,1,0.25, 0.10,0.05,0.01]));
