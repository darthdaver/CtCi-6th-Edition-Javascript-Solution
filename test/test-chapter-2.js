const chai = require('chai');
const LinkedListNode = require('../Chapter 2/Auxiliary Classes/LinkedListNode/LinkedListNode.js').LinkedListNode;
const removeDups = require('../Chapter 2/Remove Dups/remove-dups.js').removeDups;
const kthToLast = require('../Chapter 2/Kth To Last/kth-to-last.js').kthToLast;
const deleteMiddleNode = require('../Chapter 2/Delete Middle Node/delete-middle-node.js').deleteMiddleNode;
const partition = require('../Chapter 2/Partition/partition.js').partition;

describe('Chapter 2', function(){
  describe('Remove Dups', function(){
    it('Remove duplicates from linked list', function(){
      var list = new LinkedListNode();
      list.addAll([5,4,5,7,8,10,10,4]);

      removeDups(list);
      var result = list.toArray();

      chai.expect(result).to.eql([5,4,7,8,10]);
      chai.assert.strictEqual(list.head.data, 5, 'Unexpected behavior');
      chai.assert.strictEqual(list.tail.data, 10, 'Unexpected behavior');
      chai.assert.strictEqual(list.len, 5, 'Unexpected behavior');
    });
  });
  describe('Kth to last', function(){
    it('Find the Kth elements from the end of a linked list', function(){
      var list = new LinkedListNode();
      list.addAll([5,4,5,7,8,10,10,4]);
      chai.assert.strictEqual(kthToLast(list,5).data,7,'Unexpected behavior');
    });
    it('Linked list length < k', function(){
      var list = new LinkedListNode();
      list.addAll([5,4,5,7,8,10,10,4]);
      chai.assert.strictEqual(kthToLast(list,9),null,'Unexpected behavior');
    });
  });
  describe('Delete Middle Node', function(){
    it('Empty list', function(){
      var list = new LinkedListNode();
      chai.assert.isNotTrue(deleteMiddleNode(list.head),'Unexpected behavior');
    });
    it('Last node', function(){
      var list = new LinkedListNode();
      list.addAll([5,4,5,7,8,10,10,4]);
      var last = list.head;
      while(last.next !== null){
        last = last.next;
      }
      chai.assert.isNotTrue(deleteMiddleNode(last),'Unexpected behavior');
    });
    it('Deletion correctly performed', function(){
      var list = new LinkedListNode();
      list.addAll([5,4,5,7,8,10,10,4]);
      var middleNode = list.head.next.next.next.next;
      deleteMiddleNode(middleNode);
      chai.expect(list.toArray()).to.eql([5,4,5,7,10,10,4]);
    });
  });
  describe('Partition', function(){
    it('Partition of a linked list respect to a referring value', function(){
      var list = new LinkedListNode();
      list.addAll([5,4,10,3,9,8,7,8,10,5,6,3,10,4]);
      list.head = partition(list.head,7);
      chai.expect(list.toArray()).to.eql([4,3,6,5,3,4,5,10,9,8,7,8,10,10]);
    });
  });
});
