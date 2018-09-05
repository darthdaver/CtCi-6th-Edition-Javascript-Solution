const chai = require('chai');
const LinkedListNode = require('../Chapter 2/Auxiliary Classes/LinkedListNode/LinkedListNode.js').LinkedListNode;
const removeDups = require('../Chapter 2/Remove Dups/remove-dups.js').removeDups;
const kthToLast = require('../Chapter 2/Kth To Last/kth-to-last.js').kthToLast;

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
});
