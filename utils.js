'use strict';

module.exports.assert = (function () {
  var assertNumber = 1;
  return function (actual, expected) {
    if (actual !== expected) {
      var msg = 'Assert ' + assertNumber + ' raises exception.\n';
      msg += 'Expected: ' + expected + '\n';
      msg += 'Actual: ' + actual + '\n';

      throw new Error(msg);
    }
    console.log('Assert ' + assertNumber + ' passed');
    assertNumber++;
  };
})();

module.exports.binaryTree = {
  Node: function Node(val, left, right) {
    if (this instanceof Node) {
      return new Node(val, left, right);
    }
    this.val = val;
    this.right = right;
    this.left = left;
  }
};
