/*
 * Assuming the length of str equals to n and k equals to the number
 * of blank spaces present in the string (obviously k <= n).
 * The time complexity of the following algorithm is O(2n + 2k) => O(n)
 * The O(n + 2k) is because for each blank space two additional
 * characters are added to the string so, 2*k additional characters
 * are finally added and the string is n + 2k terms long
 */
exports.URLfy = function(str){
  // I think split is a prototype function whose time complexity
  // is equal to O(n)
  var charArray = str.split('');
  var pointer = 0;

  // The time complexity of the following while cycle is O(n + 2k)
  while(pointer < charArray.length){
    if(charArray[pointer] === ' '){
      for(var i=charArray.length - 1; i > pointer; i--){
        charArray[i + 2] = charArray[i];
      }
      charArray[pointer] = '%';
      charArray[pointer + 1] = '2';
      charArray[pointer + 2] = '0';
    }
    pointer++;
  }

  return charArray.join('');
}
