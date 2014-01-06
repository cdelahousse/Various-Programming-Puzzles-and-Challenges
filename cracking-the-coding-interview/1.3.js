'use strict';
var assert = require('../utils').assert;

function isAnagram(s1, s2) {
  return isAnagramSort(s1, s2);
}

function isAnagramSort(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  s1 = s1.split('').sort().join('');
  s2 = s2.split('').sort().join('');
  return s1 === s2;
}

function assertAnagram(s1, s2, bool) {
  return assert(isAnagram(s1,s2), bool);
}

assertAnagram('','', true);
assertAnagram('a','a', true);
assertAnagram('ab','ab', true);
assertAnagram('ab','ba', true);
assertAnagram('abc','bca', true);
assertAnagram('bc','bca', false);
assertAnagram('zbc','bca', false);
