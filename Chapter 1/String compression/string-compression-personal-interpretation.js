const ASCII_CODES = 127

/*
 * Assuming the length of the string equals to n
 * The time complexity of the following algorithm is O(3n) => O(n)
 * Last assumptions: blank spaces are considered in the count and the algorithm
 * is case sensitive (so, for example, 'A' is different from 'a')
 */
exports.stringCompressionPI = function(str){
  var strCompressed = [];
  var pointer = 0;

  /*
   * Initialize an array of 127 boolean elements set to false.
   * This is because a character in a string could be only a character
   * of the ASCII table that is composed by 127 elements.
   * This array represents a sort of Hashing table to directly know if
   * a char of the string has already been encountered and therefore
   * it is not unique
   */
  var hashStr = [];

  // Time complexity of the cycle is O(1) (the time is constant independently
  // to the string length)
  for(var i = 0; i <= ASCII_CODES; i++){
    hashStr[i] = 0;
  }

  // Time complexity of the cycle is O(n) (it directly depends on the string
  // length). The time to complete the code inside the for cycle is constant
  // and the cycle is performed n times.
  for(var i=0; i < str.length; i++){
    var asciiCode = str.charCodeAt(i);
    hashStr[asciiCode]++;
  }

  // Time complexity of the cycle is O(n) (it directly depends on the string
  // length). The time to complete the code inside the for cycle is constant
  // and the cycle is performed n times.
  for(var i=0; i < str.length; i++){
    var asciiCode = str.charCodeAt(i);
    // hashStr[asciiCode] === false means the character has already been
    // encountered and compressed
    if(hashStr[asciiCode] !== false){
      strCompressed[pointer++] = str[i];
      strCompressed[pointer++] = hashStr[asciiCode];
      hashStr[asciiCode] = false;
    }
  }

  // I suppose the time complexity of the join prototype function is O(n)
  return strCompressed.join('');
}
