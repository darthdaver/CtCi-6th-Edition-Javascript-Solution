const Node = require('../Node/Node.js').Node;

/*
 * LinkedListNode Constructor
 */
function LinkedListNode(){
  this.len = 0;
  this.head = null;

  // in order to achieve better performances
  this.tail = null;
}

/*
 * Add an element to the singly linked node list
 * Time complexity O(n)
 * This function should not be called: it's only for academic purpose and to
 * compare the efficiency of a structure with a tail respect toa structure
 * without a tail reference
 */
LinkedListNode.prototype.add = function(value){
  var newNode = new Node(value);
  if(this.len === 0){
    this.head = newNode;
  } else {
    var iterator = this.head;
    while(iterator.next !== null){
      iterator = iterator.next;
    }
    iterator.next = newNode;
  }
  this.len += 1;
}

/*
 * Add an element to the singly linked node list
 * BP stands for Better Performance
 * Time complexity O(1)
 * N.B.: The add and addBP method cannot be used interchangeably, so if you use
 * addBP the first time you want to add a node, you must continue to use
 * addBP the next times (otherwise this method does not work anymore).
 * The reason why I propose both methods is only for academic purposes
 * (I want to compare a structure that uses a tail and implement solution
 * with reduced time complexity, respect to a structure that does not use
 * a tail)
 */
LinkedListNode.prototype.addBP = function(value){
  var newNode = new Node(value);
  if(this.len === 0){
    this.head = newNode;
    this.tail = newNode;
  } else{
    this.tail.next = newNode;
    this.tail = this.tail.next;
  }

  this.len += 1;
}

/*
 * Add all the elements of the array passed as parameter to the
 * singly linked node list
 */
LinkedListNode.prototype.addAll = function(list){
  for(var i=0; i<list.length; i++){
    this.addBP(list[i]);
  }
}

/*
 * Delete the first occurrence (if present) of the value, in the singly
 * linked node list.
 * Time complexity is O(n)
 */
LinkedListNode.prototype.deleteFirstOccurrence = function(value){
  if(this.len > 0){
    if(this.head.data === value){
      this.head = this.head.next;
      this.len -= 1;
      if(this.len === 0){
        this.tail = null;
      }
      return;
    } else{
      var iterator = this.head;
      while(iterator.next !== null){
        if(iterator.next.data === value){
          if(iterator.next.next === null){
            this.tail = iterator;
          }
          iterator.next = iterator.next.next;
          this.len -= 1;
          return;
        }
        iterator = iterator.next;
      }
    }
  }
}

/*
 * Delete all the occurrences (if present) of the value, in the singly
 * linked node list.
 * Time complexity is O(n)
 */
LinkedListNode.prototype.deleteAllOccurrences = function(value){
  if(this.len > 0){
    while(this.head !== null && this.head.data === value){
      this.head = this.head.next;
      this.len -= 1;
    }

    if(this.len > 0){
      var iterator = this.head;
      while(iterator.next !== null){
        if(iterator.next.data === value){
          if(iterator.next.next === null){
            this.tail = iterator;
          }
          iterator.next = iterator.next.next;
          this.len -= 1;
        } else{
          iterator = iterator.next;
        }
      }
    } else{
      this.tail = null;
    }
  }
}

/*
 * Return a corresponding array of the linked list
 */
 LinkedListNode.prototype.toArray = function(){
   var iterator = this.head;
   var arrayList = [];

   while(iterator !== null){
     arrayList.push(iterator.data);
     iterator = iterator.next;
   }
   return arrayList;
 }

/*
 * Return the size of the singly linked node list
 * Time complexity is O(1)
 */
LinkedListNode.prototype.size = function(){
  return this.len;
}

exports.LinkedListNode = LinkedListNode;
