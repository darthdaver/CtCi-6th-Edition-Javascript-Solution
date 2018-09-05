/*
 * Assuming the length of the linked list equals to n
 * The time complexity of the following algorithm is O(n)
 */
exports.partition = function(node,value){
  var head = node;
  var tail = node;

  while(node !== null){
    var next = node.next;
    if(node.data < value){
      node.next = head;
      head = node;
    } else{
      tail.next = node;
      tail = node;
    }
    node = next;
  }
  tail.next = null;

  return head;
}
