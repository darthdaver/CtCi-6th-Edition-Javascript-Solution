const ASCII_CODES = 127;

/*
 * Assuming the length of str1 and str2 equals to n
 * The time complexity of the following algorithm is O(2n) => O(n)
 */
exports.checkPermutation = function(str1,str2){
  // If the strings have different length it is impossible that one
  // is a permutation of the other
  if(str1.length !== str2.length){
    return false;
  }

  // Hashing vectors initialization
  var hashStr1 = [];
  var hashStr2 = [];
  // Time complexity of the cycle is O(1) (the time is constant independently
  // to the string length)
  for(var i=0; i <= ASCII_CODES; i++){
    hashStr1[i] = 0;
    hashStr2[i] = 0;
  }
  // Time complexity of the cycle is O(n) (the time is dependent to
  // the string length)
  for(var i=0; i < str1.length; i++){
    var asciiCode = str1.charCodeAt(i);
    hashStr1[asciiCode]++;
  }
  // Time complexity of the cycle is O(n) (the time is dependent to
  // the string length)
  for(var i=0; i < str2.length; i++){
    var asciiCode = str2.charCodeAt(i);
    hashStr2[asciiCode]++;
  }

  // Time complexity of the cycle is O(1) (the time is constant independently
  // to the string length)
  for(var i=0; i <= ASCII_CODES; i++){
    if(hashStr1[i] - hashStr2[i] !== 0){
      return false
    }
  }

  return true;
}
