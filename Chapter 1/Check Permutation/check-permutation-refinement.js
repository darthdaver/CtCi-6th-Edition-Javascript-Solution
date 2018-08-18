const ASCII_CODES = 127;

/*
 * Assuming the length of str1 and str2 equals to n
 * The time complexity of the following algorithm is O(2n) => O(n)
 */
exports.checkPermutationRefinement = function(str1,str2){
  // If the strings have different length it is impossible that one
  // is a permutation of the other
  if(str1.length !== str2.length){
    return false;
  }

  // Hashing vectors initialization
  var hashStr = [];
  // Time complexity of the cycle is O(1) (the time is constant independently
  // to the string length)
  for(var i=0; i <= ASCII_CODES; i++){
    hashStr[i] = 0;
  }
  // Time complexity of the cycle is O(n) (the time is dependent to
  // the string length)
  for(var i=0; i < str1.length; i++){
    var asciiCode = str1.charCodeAt(i);
    hashStr[asciiCode]++;
  }
  // Time complexity of the cycle is O(n) (the time is dependent to
  // the string length)
  for(var i=0; i < str2.length; i++){
    var asciiCode = str2.charCodeAt(i);
    hashStr[asciiCode]--;

    if(hashStr[asciiCode] < 0){
      return false;
    }
  }

  /*
   * No other control is necessary because the two strings have equal length
   * and if no value of the hash vector has dropped below zero, it means
   * that all the values of the hash vector are necessarily all zero,
   * at the end of the algorithm
   */
  return true;
}
