'use strict';

var assert = require('../utils').assert;

function reverse(str) {
  return reverseRecur(str, str.length);
}
function reverseRecur(str, len) {
  if (len === 1) {
    return str;
  } else {
    var newLen = len - 1;
    var subStr = str.slice(0, newLen);
    return str[newLen] + reverseRecur(subStr, newLen);
  }
}

function reverseIter(str) {
  var ar = str.split('');
  var len = ar.length;
  var start = 0;
  var end = len - start - 1;
  while (start < end) {
    swap(start, end);
    start++;
    end = start - len - 1;
  }

  function swap(a, b) {
    var tmp = ar[a];
    ar[a] = ar[b];
    ar[b] = tmp;
  }

  return ar.join('');
}

assert(reverse('a'), 'a');
assert(reverse('ab'), 'ba');
assert(reverse('abc'), 'cba');
assert(reverse('abcd'), 'dcba');
