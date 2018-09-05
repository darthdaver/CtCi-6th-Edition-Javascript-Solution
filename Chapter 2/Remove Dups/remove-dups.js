/*
 * Assuming the length of the linked list equals to n
 * The time complexity of the following algorithm should be O(n)
 */
exports.removeDups = function(list){
  var hashSet = {}
  if(list.len > 0){
    var iterator = list.head;
    hashSet[iterator.data] = true;

    while(iterator.next !== null){
      if(hashSet[iterator.next.data] === true){
        if(iterator.next.next === null){
          list.tail = iterator;
        }
        iterator.next = iterator.next.next;
        list.len -= 1;
      } else{
        hashSet[iterator.next.data] = true;
        iterator = iterator.next;
      }
    }
  }
}
