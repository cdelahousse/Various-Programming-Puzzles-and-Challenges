/* [8/3/2012] Challenge #85 [difficult] (Bitwise arithmetic) (self.dailyprogrammer)
 * http://www.reddit.com/r/dailyprogrammer/comments/xq385/832012_challenge_85_difficult_bitwise_arithmetic/
 * submitted 1 day ago* by nooodl Various
 * While basic arithmetic operations like addition, subtraction, multiplication, etc.
 * seem 'natural' to us, computers think on a very different level: under the hood,
 * computations work with [1] bitwise operations, using operators like ~, &, |, ^,
 * and <<. Your task is to implement functions for (integer) addition, subtraction,
 * negation, multiplication, division, modulo, and exponentiation, without using any
 * "high-level" operators like + and *. Other statements like "if" and "while", or
 * recursion for functional languages, are fine.
 * As a hint, you could start with a helper function that increments a binary number,
 * and work from there. Your functions should take signed integer arguments and
 * return signed integer values, rounding down (e.g. binary_div(14, 4) == 3, not
 * 3.5).
 * Use your set of functions to implement [2] this function :
 * f(a, b, c, d, e) = (a % e) * (b / (c - a) + exp(d * (-b), e))
 * What is the result of f(50, -40, 300, 2, 3)?
 *
 */

#include <stdio.h>

int add(int, int);
int sub(int, int);
int mul(int, int);
int quo(int, int);
int mod(int, int);
/*int exp(int, int);*/
int negate(int);

void assert(int,int);

int testNum = 0;

int main() {
	assert (mul(4,5), 20);
	assert (mul(5,-5), -25);
	assert (mul(-5,-5), 25);
	assert (quo(25,5), 5);
	assert (add(6,7), 13);
	assert (add(6,-7), -1);
	assert (sub(6,7), -1);
	assert (sub(7,4), 3);
	assert (mod(1,2), 1);
	assert (mod(23,10), 3);
	assert (mod(36,6), 0);
	assert (mod(14,10), 4);


	return 0;
}

int add(int a, int b) {
	int carry, result;


	do {
		carry = a & b;
		result = a ^ b;
	
		carry <<= 1;

		a = carry;
		b = result;

	} while (carry);

	return result;
	
}
int sub(int a, int b) {
	//Assuming two's complement binary representation
	//Converting to minus number
	return add(a,negate(b));
}

int mul(int a, int b) {
	int result = 0;
	int counter = b;

	//Absolute value
	if ( counter < 0) {
		counter = negate(counter);
	}

	while (counter) {
		result = add(result, a);
		counter = sub(counter,1);
	}
	//Convert back from absolute value
	if (b < 0) {
		result = negate(result);
	}
	return result;
}
int quo(int a, int b) {
	
	int counter = 0;
	while (a > 0) {
		a = sub(a,b);
		if (a >= 0) counter++;
	}
	return counter;
}
int mod(int a, int b) {
	int divi = quo(a, b);
	int mult = mul(divi,b);
	return sub(a,mult);
}
int mul2(int a, int b) {
	//Peasant multiplication
	//See http://mathforum.org/dr.math/faq/faq.peasant.html
	int result = 0;

	while (b != 0) {

		//Add to result if odd
		if ((b & 1) == 1) {
			add(result,a);
		}
		a <<= 1;
		b >>= 1;
	}
	return result;
}

int negate(int a) {
	return add(1, ~a); 
}

void assert(int a, int b) {
	testNum++;
	if (a == b) {
		printf("Test %d SUCCESS", testNum);
	}
	else {
		printf("Test %d FAIL, %d != %d", testNum, a, b);
	}
	printf("\n");
}
