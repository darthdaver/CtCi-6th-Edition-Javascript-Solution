//Import the StringBuilder constructor
const StringBuilder = require('./StringBuilder.js').StringBuilder;

/*
 * Assuming the length of the string equals to n
 * The time complexity of the following algorithm should be O(2n) => O(n)
 * (O(n) to scroll through all the characters in the string and O(n) to
 * generate the compressed string from the array in the StringBuilder)
 */
exports.stringCompression = function(str){
  var strCompressionBuilder = new StringBuilder();
  var count = 0;

  for(var i=0; i < str.length; i++){
    count++;

    if(i+1 >= str.length || str[i] !== str[i+1]){
      strCompressionBuilder.append(str[i]);
      strCompressionBuilder.append(count);
      count = 0;
    }
  }
  return strCompressionBuilder.toString();
}
