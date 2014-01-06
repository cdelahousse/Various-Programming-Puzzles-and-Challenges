'use strict';
var assert = require('../utils').assert;

function uniq(str) {
  return uniqHash(str);
}

function uniqHash(str) {
  var hash = {};
  var arr = str.split('');

  for (var i = 0; i < arr.length; i++) {
    var c = arr[i];
    var wasSeen = hash[c];
    if (wasSeen) {
      return shortCircuit();
    } else {
      hash[c] = true;
    }
  }
  return true;
}

//Sort and then compare doubles
function uniqInPlace(str) {
  var arr = str.split('');
  arr = arr.sort();
  var last = arr[0];
  for (var i = 1; i < arr.length; i++) {
    var cur = arr[i];
    if (last === cur) {
      return shortCircuit();
    }
    last = cur;
  }
  return true;
}

function shortCircuit() {
  return false;
}

assert(uniq('abcde'), true);
assert(uniq('abdeac'), false);

