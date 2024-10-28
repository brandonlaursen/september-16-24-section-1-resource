# `Week 6 Day 3`


## What is a Logarithm?
  * inverse of an exponent
  * super-efficient
  * The logarithm base-n of a number is how many times it must be divided by n to reach 1

### Exponents
```
    * 2^5 === 2 * 2 * 2 * 2 * 2 = 32
      ? 2 multiplied by itself 5 times is 32
```
### Logarithm
  * log base(n)
  * log2(32) = 5
    * How many times would we need to divide 32 by 2 to equal 5

### Binary search
  * finding an item from a sorted list of items
  * Time complexity
    * Average - O(log n)
    * Best - O(1) <-  find it first try
  * Space complexity: O(N)
  * Divide and conquer

Binary Search utilizes the divide and conquer approach.
  * You've already used this without even knowing...
          ex: Phone books, dictionaries, etc.
  * Binary search method first looks at the midpoint of a SORTED array, and then checks to see if that element is greater than, less than, or equal to the element you are looking for.


### In order to perform a binary search in logarithmic time, your data must satisfy two conditions.
  * 1.Data must be sorted
  * 2.Data can be accessed by index in constant time
```
  Binary search logarithm
   * A binary logarithm is a base-2 logarithm
    log2( 1 )    = 0     |      2 ** 0   // 1
    log2( 2 )    = 1     |      2 ** 1   // 2
    log2( 4 )    = 2     |      2 ** 2   // 4
    log2( 8 )    = 3     |      2 ** 3   // 8
    log2( 16 )   = 4     |      2 ** 4   // 16
    log2( 32 )   = 5     |      2 ** 5   // 32
    log2( 64 )   = 6     |      2 ** 6   // 64
    log2( 128 )  = 7     |      2 ** 7   // 128
    log2( 256 )  = 8     |      2 ** 8   // 256
    log2( 512 )  = 9     |      2 ** 9   // 512
    log2( 1024 ) = 10    |      2 ** 10  // 1024

    Math.log2(2);    // 1
    Math.log2(4);    // 2
    Math.log2(8);    // 3
    Math.log2(16);   // 4
    Math.log2(32);   // 5
```
  O(log n) - logarithmic growth
  * Logarithmic curves grow so slowly that they are virtually constant.
  * slower than O(1) - constant
  * faster than O(n) - linear

## `Binary Search Tree`
* Binary search is a powerful and elegant algorithm that allows you to search through enormous data sets with just a handful of comparisons.
* Data MUST be sorted
  * Can use a O(n log n) to sort data
  * Quicksort
  * Mergesort
* Binary search trees are a node-and-pointer-based data structure, similar to a doubly linked list
* same O(log n) search as a sorted array
* but with O(log n) insertion and deletion as well.

### Binary tree vs Binary Search Tree
* binary trees are nodes than have more than one child node
* binary search tree is a sorted binary tree with search properties
! All binary search trees are binary trees, but not all binary trees are binary search trees

### Key difference
* every node contained in the left branch of any node will be less than the value of the node itself
* every node in the right branch will be greater than the node value

### Properties of Binary Search Tree
* node with left and right pointers
  * note they always point downward

### There are three possible implementations for handling values that are equal to a value in an existing node:
  * Discard the duplicate, similar to a set
  * Place equal values to the left
  * Place equal values to the right
```
  ? Is this a binary search tree?
    * yes
          4
        /   \
       2     6
      / \   / \
     1   3 5   7

   ? Is this a binary search tree?
    * no - normal binary tree
          5
        /   \
       2     6
      / \   / \
     1   3 4   7
```
```js
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let a = new TreeNode(4);
let b = new TreeNode(2);
let c = new TreeNode(6);
let d = new TreeNode(1);
let e = new TreeNode(3);
let f = new TreeNode(5);
let g = new TreeNode(7);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

class Tree {
  constructor(node) {
    this.root = node;
  }
}

const myTree = new Tree(a);

// console.log('myTree:', myTree);
/*
          4
        /   \
       2     6
      / \   / \
     1   3 5   7
*/
```


### Time complexity
* O(log n)
* Each comparison in a binary search tree moves down by one level
* so the worst-case number of calls is equal to the height of the tree.
* Since adding a level doubles the capacity, moving down a level reduces the number of values to search by half. Just like binary search, this divide-and-conquer approach results in a time complexity of O(log n).

### Search a binary tree
### Searching a binary tree recursively
```js
function searchBST(root, target) {

  if (root === null) return false;

  if (target === root.val) return true;

  if (target < root.val) return searchBST(root.left, target);

  if (target > root.val) return searchBST(root.right, target);
}


// console.log(searchBST(myTree.root, 5));// true
// console.log(searchBST(myTree.root, 27));// false
```

#### searching a binary tree iteratively
```js
function searchBST(root, target) {

  let currentNode = root;

  while (currentNode !== null) {

      if (target === currentNode.value) return true

      else if (target < currentNode.value) currentNode = currentNode.left

      else currentNode = currentNode.right;
  }

  return false;

}

// console.log(searchBST(myTree.root, 5));// true
// console.log(searchBST(myTree.root, 27));// false
```


## `Binary Tree Search Tree Phase 1 - 30m(SOLO)`
## `Binary Tree Search Tree Phase 1 Walkthrough`
## `Binary Tree Search Tree Phase 2 - 30m(SOLO)`
## `Binary Tree Search Tree Phase 2 Walkthrough`
## `Binary Tree Search Tree Phase 3 - 30m(SOLO)`
## `Binary Tree Search Tree Phase 3 Walkthrough`
## `Binary Tree Search Tree Phase 4 - 30m(SOLO)`
## `Binary Tree Search Tree Phase 4 Walkthrough`

## `Binary Search Tree Long Practice Till EOD(Paired)`
