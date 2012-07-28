/*
 * Daily Programmer, reddit
 * http://www.reddit.com/r/dailyprogrammer/comments/urqcx/682012_challenge_62_easy/
 *
 * Given a list of n real numbers, a real number t, and an integer k, determine if
 * there exists a k-element subset of the original list of n real numbers that is
 * less than t.
 * For instance, given the list of 25 real numbers 18.1, 55.1, 91.2, 74.6, 73.0,
 * 85.9, 73.9, 81.4, 87.1, 49.3, 88.8, 5.7, 26.3, 7.1, 58.2, 31.7, 5.8, 76.9, 16.5,
 * 8.1, 48.3, 6.8, 92.4, 83.0, 19.6, t = 98.2 and k = 3, the 3-element subset 31.7,
 * 16.5 and 19.6 sums to 67.8, which is less than 98.2, so the result is true.
 * Write a function that makes that determination */

function f(list,t,k) {
	list.sort();
	var sum = 0;
	//sum = l[k-1] + l[k-2] + ... + l[0]; Goes backwards
	while (k--)  sum += list[k];
	return sum < t;
}

var list = [18.1, 55.1, 91.2, 74.6, 73.0, 85.9, 73.9, 81.4, 87.1, 49.3, 88.8, 5.7, 26.3, 7.1, 58.2, 31.7, 5.8, 76.9, 16.5, 8.1, 48.3, 6.8, 92.4, 83.0, 19.6]

//Should be true
console.log(f(list,98.2,3));

//Should be false
console.log(f([100,220,19.2,111.89],98.2,3));
