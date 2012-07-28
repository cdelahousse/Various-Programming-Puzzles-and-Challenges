
/*
 * http://www.reddit.com/r/dailyprogrammer/comments/vsv3g/6292012_challenge_70_easy/
 *
 * Write a program that takes a filename and a parameter n and prints the n most
 * common words in the file, and the count of their occurrences, in descending order.
 */

//RUNS IN NODE JS

	function wordFreq(filename, num) {
		'use strict';
		var fs = require('fs'),
		text = fs.readFileSync(filename,'ascii');

		//Sanitize
		text = text.toLowerCase();
		text = text.replace(/[\.'",\/\\|\#!$%\^&\*;:{}=_`~()\[\]]/g, " ");

		var words = text.split(/\s+/),
			freq = {},
			numWords = 0;

		words.forEach(function(word) {
			if (freq[word] === undefined) {
				freq[word] = 1;
				numWords++;
			}
			else {
				freq[word]++;
			}
		});


		//Creating a new array with predefined space is
		//faster
		var wordsArray = new Array(numWords),
				i = 0;

		for (var word in freq) {
			if (freq.hasOwnProperty(word)) {
				wordsArray[i] = {
					"word" : word,
					occurences : freq[word]
				};
				i++;
			}
		}

		wordsArray.sort(function (a,b) {
			return b.occurences - a.occurences;
		});

		for (i = 0; i < num; i++) {
			console.log(wordsArray[i]);
		}

	}

	wordFreq('70easy.txt',5);

