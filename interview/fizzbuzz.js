// from here
// https://github.com/blakeembrey/code-problems/tree/master/shortest-fizz-buzz
// Write a program that prints (to STDOUT) the numbers from 1 to 100. But for
// multiples of three print “Fizz” instead of the number and for the multiples
// of five print “Buzz”. For numbers which are multiples of both three and five
// print “FizzBuzz”.


// Do is as short as possible
//
function fizzBuzz(low, high) {
  low--; while (++low <= high) console.log( ( low % 3 ? '' :'Fizz') + ( low % 5? '' : 'Buzz') || low);
}

fizzBuzz(1,100);
