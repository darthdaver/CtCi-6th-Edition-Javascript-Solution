/*
 * Assuming the length of the string equals to n
 * The time complexity of the following algorithm is approximately O(2n) => O(n)
 * Approximately because before to perform any comparison, the eventual blank
 * spaces present in the string are removed
 * The algorithm assumes that the string is not characterized by consecutive
 * blank spaces
 * Last assumption: blank spaces are not considered in the count
 */
exports.isPalindrome = function(str){
  // I think split is a prototype function whose time complexity
  // is equal to O(n)
  var charArray = str.split("");
  var pointerUp = 0;
  var pointerDown = str.length - 1;

  // The time complexity of the following while cycle is O(n)
  // Note that the internal while does not change the external time
  // complexity
  while(pointerUp < pointerDown){
    while(charArray[pointerUp] === " "){
      pointerUp++;
    }
    var firstHalf = charArray[pointerUp];

    while(charArray[pointerDown] === " "){
      pointerDown--;
    }
    var secondHalf = charArray[pointerDown];

    if(firstHalf !== secondHalf && pointerUp < pointerDown){
      return false;
    }

    pointerUp++;
    pointerDown--;
  }
  return true;
}
