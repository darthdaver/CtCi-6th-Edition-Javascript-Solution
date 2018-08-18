const ASCII_CODES = 127;

/*
 * Assuming the length of any string equals to n
 * The time complexity of the following algorithm is O(n)
 */
exports.checkIsUnique = function (str){
  if(str.length > ASCII_CODES){
    return false;
  }

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
    hashStr[i] = false;
  }

  // Time complexity of the cycle is O(n) (it directly depends on the string
  // length). The time to complete the code inside the for cycle is constant
  // and the cycle is performed n times.
  for(var i = 0; i < str.length; i++){
    // from char to correspondent ASCII code. Example: 'A'.charCodeAt(0) -> 65
    var asciiCode = str.charCodeAt(i);

    // verify if the char has already been encountered
    if(hashStr[asciiCode]){
      return false;
    }
    // if the character has not been already encountered set it has "now
    // encountered"
    hashStr[asciiCode] = true;
  }

  return true;
}
