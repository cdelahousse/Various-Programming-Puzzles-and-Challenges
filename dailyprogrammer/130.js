/*
[06/17/13] Challenge #130 [Easy] Roll the Dies (self.dailyprogrammer)

submitted 13 days ago by nint22 1 2
[1] (Easy): Roll the Dies

In many board games, you have to roll multiple multi-faces dies[2] .jpg) to generate random numbers as part of the game mechanics. A classic die used is the d20 (die of 20 faces) in the game Dungeons & Dragons. This notation, often called the Dice Notation[3] , is where you write NdM, where N is a positive integer representing the number of dies to roll, while M is a positive integer equal to or grater than two (2), representing the number of faces on the die. Thus, the string "2d20" simply means to roll the 20-faced die twice. On the other hand "20d2" means to roll a two-sided die 20 times.

Your goal is to write a program that takes in one of these Dice Notation commands and correctly generates the appropriate random numbers. Note that it does not matter how you seed your random number generation[4] , but you should try to as good programming practice.

Author: nint22
Formal Inputs & Outputs
Input Description

You will be given a string of the for NdM, where N and M are describe above in the challenge description. Essentially N is the number of times to roll the die, while M is the number of faces of this die. N will range from 1 to 100, while M will range from 2 to 100, both inclusively. This string will be given through standard console input.
Output Description

You must simulate the die rolls N times, where if there is more than one roll you must space-delimit (not print each result on a separate line). Note that the range of the random numbers must be inclusive of 1 to M, meaning that a die with 6 faces could possibly choose face 1, 2, 3, 4, 5, or 6.
Sample Inputs & Outputs
Sample Input

2d20
4d6

Sample Output

19 7
5 3 4 6

*/

function dice (str) {
  if (!/[0-9]{1,3}d[0-9]{1,3}/.test(str)) return null;
  var vals = str.split('d');
  var n = parseInt(vals[0],10);
  var m = parseInt(vals[1],10);
  if (n > 100 || m > 100 || n < 1 || m < 2 ) return null;
  
  var result = '';

  for (var i = 0; i < n; i++){
    var whitespace = i < n - 1 ? ' ' : '';
    result += Math.floor(Math.random() * m) + whitespace;
  }
  return result;
}

console.log(dice('30d50'));
console.log(dice('10d10'));
console.log(dice('0d10')); //Null
console.log(dice('d10')); //Null
