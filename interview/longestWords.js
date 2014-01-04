// Returns longest word in string
// See https://github.com/blakeembrey/code-problems/tree/master/problems/longest-words

function longest_words(str) {
  var max = 0,
      ret = [],
      len = str.length,
      cache = '',
      c = ''
        ;

  for (var i = 0; i < len; i++) {
    c = str[i];

    if (i == (len-1)) {
      cache += c;
      c = ' ';
    }
    if (c === ' ' ) {
      var l = cache.length;
      if (l > max) {
        ret = [];
        ret.push(cache);
        max = l;
      } else if (l === max){
        ret.push(cache);
      }
      cache = '';
    } else {
      cache += c;
    }
  }
  console.log(ret);
  return ret;
}

function longest_words(str) {
  var a = str.split(' '),
      max = 0,
      biggest = 0,
      ret = {};


  a.forEach(function(e) {
    var len = e.length;
    if ( max < len ) {
      max  = len;
      ret = {};
      ret[e.toLowerCase()] = len;
    } else if (max === len) {
      ret [e.toLowerCase()] = len;
    }
  });

  console.log (ret);

}


longest_words("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longest_words("I gave a present to my parents") // ["present", "parents"]
longest_words("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]
