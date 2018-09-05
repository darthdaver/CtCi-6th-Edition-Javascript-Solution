/*
 * Assuming the length of the linked list equals to n
 * The time complexity of the following algorithm is O(n)
 * The space complexity, O(1)
 */
 exports.kthToLast = function(list,k){
   var p1 = list.head;
   var p2 = list.head;

   for(var i=0; i<k; i++){
     if(p1.next !== null){
       p1 = p1.next;
     } else{
       return null;
     }
   }

   while(p1 !== null){
     p1 = p1.next;
     p2 = p2.next;
   }
   return p2;
 }
