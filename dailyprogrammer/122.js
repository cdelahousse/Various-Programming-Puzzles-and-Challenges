/*
[03/18/13] Challenge #122 [Easy] Words With Ordered Vowels (self.dailyprogrammer)
submitted 4 days ago by nint22 1 2
[1] (Easy): Words With Ordered Vowels
Find words in a word list that contain all the vowels in alphabetical order, non-repeated, where vowels are defined as A E I O U Y.
Author: ikea_riot
Formal Inputs & Outputs
Input Description
A text file with one word on each line.
Output Description
All words in the list that contains all the vowels A E I O U Y in alphabetical order.
Sample Inputs & Outputs
Sample Input
Use this word list[2]
Sample Output
abstemiously ...
Challenge Input
Nothing special, see sample input
Challenge Input Solution
Nothing special, see sample output
Note
We are starting to fill the queue with new challenges! Please help out by posting suggestions to /r/dailyprogrammer_ideas[3]

*/

	var fs = require('fs');
	var file = fs.readFileSync('122.txt','utf-8');
	var words = file.split('\r\n');

	//var r = words.filter(function(w) {
		//return w.replace(/[^aeiouy]/g,'') === 'aeiouy';
	//});

	var vowels= 'aeiouy'.split(''); 
	var l = words.filter(function(w) {
		var len = w.length;
		for (var wordIndex = 0, vowelIndex = 0; wordIndex < len; wordIndex++) {
			if (w[wordIndex] === vowels[vowelIndex]) vowelIndex++;
		}
		return vowelIndex === vowels.length;
	});

	console.log(l);


