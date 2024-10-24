






/*


  Sets
  * The name "set" comes from mathematics. In mathematics, a set is a well-defined collection of distinct elements or members. In computer science a set is an abstract data type which is used to store a collection of unique, unordered values.

  Properties of a set
    Sets have three important properties that will tell you when they are appropriate to use:
    * A set contains no duplicate elements
    * A set's elements are unordered
    * A set can check if an element is contained in O(1) time

  Syntax
  * const set = new Set(iterable);
  * iterable - strings and arrays

  ! Use whenever you need to find unique values


*/


let nums = [1,2,3,3,4];


let numbersSets = new Set(nums);// { 1, 2, 3, 4 }
// console.log("numbersSets:", numbersSets);

let unique = [...new Set(nums)];
// console.log("unique:", unique);//  [ 1, 2, 3, 4 ]

// includes - O(n);
// console.log(nums.includes(2));//

// has - O(1)
// console.log(numbersSets.has(2));//

// delete
numbersSets.delete(2);
// console.log(numbersSets);

// .push() - O(1)
numbersSets.add(6);
// console.log(numbersSets);

console.log(nums.length);

// size
console.log(numbersSets.size);// 4

// clear
numbersSets.clear();
// console.log(numbersSets);


