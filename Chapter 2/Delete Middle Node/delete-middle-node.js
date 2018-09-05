/*
 * Assuming the length of the linked list equals to n
 * The time complexity of the following algorithm is O(1)
 */
exports.deleteMiddleNode = function(node){
  if(node === null || node.next === null){
    return false;
  }
  node.data = node.next.data;
  node.next = node.next.next;
  return true;
}
