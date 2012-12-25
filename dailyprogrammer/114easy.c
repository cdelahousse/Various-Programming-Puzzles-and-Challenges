/*
[12/4/2012] Challenge #114 [Easy] Word ladder steps (self.dailyprogrammer)
submitted 4 days ago by Cosmologicon Python
A word ladder is a sequence of words made by changing one letter at a time. For example:
cold â cord â card â ward â warm
Given a word, list all the words that can appear next to it in a word ladder, using this list of 3,807 four-letter words[1] . Sample input:
puma
Sample output:
duma
pima
puja
pula
pump
puna
pupa
How many words from the list can appear next to the word best in a word ladder?
Bonus 1: One word in the list has 33 other words that can appear next to it. What is this word?
Bonus 2: How many different words can be reached, starting from best, in 3 or fewer steps?
Thanks to Thomas1122 for suggesting this challenge on /r/dailyprogrammer_ideas[2] !
*/

		#include <stdio.h>
		#include <stdlib.h>
		#include <string.h>

		int compare(char*, char**,int);
		int distance(char*,char*);

		int main() {
			FILE *fp;

			char *line = NULL;
			size_t len = 0;
			ssize_t read;
			fp = fopen("./114.txt", "r");


			char *words[4000];

			if (fp == NULL)
				exit(EXIT_FAILURE);

			int i = 0;
			while ((read = getline(&line, &len, fp)) != -1) {
				words[i] = (char*) malloc(len);
				strcpy(words[i], line);
				words[i][4] = 0; //Remove newline
				i++;
			}

			words[i] = 0; //Terminate
			if (line) free(line);
			fclose(fp);

			//Question
			char *target = "puma";
			printf("Compare puma\n:");
			compare(target, words,1);


			int j = 0;
			int numWords;
			int best= 0;
			char* w;
			char* bestword;


			while ( (w = words[j]) ) {
				numWords = compare(w, words, 0);
				if (numWords > best) {
					best = numWords;
					bestword = w;
				}
				j++;
			}
			printf("Best word is '%s' with %d comparable words\n", bestword, best);


			int l = 0;
			while ( words[l]) {
				free(words[l]);
				l++;
			}

			return 0;
		}

		int compare(char *target, char **words, int print) {
			int j = 0;
			int count = 0;
			char* w;

			while ( (w = words[j]) ) {
				if (distance(target, w) == 1) {
					if (print) printf("%s\n", w);
					count++;
				}
				j++;
			}

			return count;
		}

		int distance(char *to,char *from) {
			int count = 0;
			int i = 0;

			while (to[i] && from[i]) {
				if (to[i] != from[i]) count++;
				i++;
			}
			return count;
		}
