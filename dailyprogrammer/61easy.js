/*
 * http://www.reddit.com/r/dailyprogrammer/comments/uo11f/662012_challenge_61_easy/
 *
 * The number 19 is can be represented in binary as 10011. Lets define the
 * operation of "rotating a number" as taking the last binary digit of that
 * number and moving it so it becomes the first binary digit, and moving the
 * other digits one step forward. I.e. if you rotate 10011, you get 11001 (i.e. 25),
 * because the 1 that was in the last position has now moved to the first
 * position. If you rotate it again, you get 11100 (i.e. 28).
 * If you rotate it again, something curious happens: you get 01110, which is the
 * same as 1110 (i.e. 14) since leading zeroes don't count in a binary
 * representation. That is to say, when you rotate it this time, the zero
 * disappears. If you rotate it once more, you get 0111, which is the same as 111
 * (i.e. 7). Again, the zero has disappeared.
 * After that, the number remains the same regardless of how much you rotate it,
 * since the binary number representation of 7 only has 1's in it.
 * This gives us a sequence of numbers. Starting with 19 and then rotating it step
 * by step until we get a number with only 1's in the binary representation, we get
 * 19 -> 25 -> 28 -> 14 -> 7
 * Lets call this a "binary rotation sequence" for 19. Here are the binary
 * rotation sequences for the numbers 69, 205 and 357, with the numbers written
 * first in decimal and then in binary to show what is going on:
 * 69 -> 98 -> 49 -> 56 -> 28 -> 14 -> 7
 * 1000101 -> 1100010 -> 110001 -> 111000 -> 11100 -> 1110 -> 111
 *
 * 205 -> 230 -> 115 -> 121 -> 124 -> 62 -> 31
 * 11001101 -> 11100110 -> 1110011 -> 1111001 -> 1111100 -> 111110 -> 11111
 *
 * 357 -> 434 -> 217 -> 236 -> 118 -> 59 -> 61 -> 62 -> 31
 * 101100101 -> 110110010 -> 11011001 -> 11101100 -> 1110110 -> 111011 ->
 * 111101 -> 111110 -> 11111
 * Write a program that given a number will print out the binary rotation
 * sequence for that number (you only need to print out the sequence in decimal).
 * What is the binary rotation sequence for 54321?
 * */

function rotate(num) {

	var bin = num.toString(2).split('');
	if (bin.indexOf('0') == -1) return num;

	bin.pop();
	bin.unshift( num & 1); //Set first char of string to least significant bit of num
	return num + "-->" + rotate(parseInt(bin.join(""),2));
}
console.log( rotate (205));

//Binary arithmitic and cool stuff
function rotate2(num) {

	//base case when "1111" = 2^n - 1 ---> 100 & 011 === 0
	if ((num & (num + 1)) === 0) return num;

	var lastbit = num & 1,
			//(last bit: 1 or 0)*highest power of 2 that is less than num + shifted num
			rotated = lastbit*Math.pow(2,Math.floor(logbase2(num))) + (num >> 1);

	return num + "->" + rotate2(rotated);
}

function logbase2(n) {
	return Math.log(n)/Math.log(2);
}
console.log( rotate2 (54321));
