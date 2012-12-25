
		#include <stdio.h>
		#include <string.h>
		#include <stdlib.h>

		void unstar(char * str) {
			int len = strlen(str);
			int mask[len + 2];
			char newstr[len+1];
			
			int j;
			for (j=0; j < len + 2; j++)
				mask[j] = 0;

			int i;
			for (i = 1; i < len + 1; i++) {
				if (str[i-1] == '*') {
					mask[i-1] = mask[i] = mask[i+1] = -1;
				}
			}

			int l,s;
			for (l = 0, s = 0; l < len; l++) {
				if (mask[l+1] == 0) {
					newstr[s] = str[l];
					s++;
				}

			}
			newstr[s] = 0;

			printf("%s --> %s\n", str, newstr);
		}

		int main() {

			unstar ("adf*lp");
			unstar ("a*o");
			unstar ("*dech*");
			unstar ("de**po");
			unstar ("sa*n*ti");
			unstar ("abc");

			return 0;
		}

