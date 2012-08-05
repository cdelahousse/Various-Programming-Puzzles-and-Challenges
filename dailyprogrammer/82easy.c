/* [7/27/2012] Challenge #82 [easy] (Substring list) (self.dailyprogrammer)
 * submitted 5 days ago by nooodl Various
 * Write a function that takes a number n as an argument and returns (or outputs)
 * every possible unique substrings (not counting "") of the first n letters of the
 * alphabet (in any order you like). For example, substrings(5) could be:
 * a
 * ab
 * abc
 * abcd
 * abcde
 * b
 * bc
 * bcd
 * bcde
 * c
 * cd
 * cde
 * d
 * de
 * e
 * BONUS 1: Find a way to quickly determine how many strings this function returns
 * for a given input. If the alphabet were 500 letters long, how much possible
 * substrings would it have?
 * BONUS 2: Modify your function to take a string as an argument. Make sure all
 * substrings in your output are still unique (i.e., there are two "l" substrings in
 * "hello", but you should output only one).
 */


//NOTE: I implemented subsets instead of substrings.... Woops

#include <stdio.h>

	void subStr(const char *alph, const int num) {
		int cardinality = (1 << num); //2^num


		printf("There will be %d strings\n",cardinality);

		int i,j;
		for (i = 0; i <cardinality; i++) {

			for (j = 0; j < num; j++) {
				if ( i & (1 << j) ) { //Will be zero if not included
					printf("%c", alph[j]);
				}
			}
			printf("\n");
		}
	}


	int main() {

		char alph[] = "abcdefghijklmnopqrstuvwxyz";
		subStr(alph,5);

		return 0;
	}
