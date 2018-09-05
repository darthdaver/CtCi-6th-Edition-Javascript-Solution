/*
 * The time complexity of the following algorithm is O(n^2) and represents
 * the best solution (in this terms) because we need to modify the position of
 * all the cells in the matrix and in a square matrix of n rows and n columns
 * there are n^2 elements
 */ 
exports.rotateMatrix = function(matrix){
  if(matrix.length <= 0 || matrix.length !== matrix[0].length){
    return matrix;
  }

  var len = matrix.length;
  for(var layer = 0; layer < len/2; layer++){
    first = layer;
    last = len - 1 - layer;

    for(var i = first; i < last; i++){
      offset = i - first;

      // save the top
      var top = matrix[first][i];

      // left -> top
      matrix[first][i] = matrix[last-offset][first];

      // bottom -> left
      matrix[last-offset][first] = matrix[last][last-offset];

      // right -> bottom
      matrix[last][last-offset] = matrix[i][last];

      // top -> right
      matrix[i][last] = top;
    }
  }
  return matrix;
}
