/*
 * Assuming the length of str equals to n and k equals to the number
 * of blank spaces present in the string (obviously k <= n).
 * The time complexity of the following algorithm is O(2n + 2k) => O(n)
 * The O(2n + 2k) is because for each blank space two additional
 * characters are added to the string so, 2*k additional characters
 * are finally added and the string is n + 2k terms long
 */
exports.URLfy = function(str){
  var count = 0;
  var index = 0;

  var support = str.split('');

  for(var i=0; i < support.length; i++){
    if(str[i] === ' '){
      count++;
    }
  }

  index = support.length - 1 + 2*count;

  for(var i=support.length-1; i >= 0; i--){
    if(support[i] === ' '){
      support[index--] = '0';
      support[index--] = '2';
      support[index--] = '%';
    } else{
      support[index--] = support[i];
    }
  }

  return support.join('');
}
