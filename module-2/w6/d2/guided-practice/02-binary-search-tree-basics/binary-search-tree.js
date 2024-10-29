// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val, currentNode = this.root) {
    // check if there is no root; if there isnt the newNode becomes the root
    if (!this.root) {
      this.root = new TreeNode(val);
      return;
    }
    // if val is smaller than the currentNode
    if (val < currentNode.val) {
      // check is there a left node?
      if (!currentNode.left) {
        currentNode.left = new TreeNode(val);
      } else {
        this.insert(val, currentNode.left);
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = new TreeNode(val);
      } else {
        this.insert(val, currentNode.right);
      }
    }

    // if there isnt; newNode becomes the left of the currentNode
    // if there is; call insert and pass the currentNode.left
    // if val is greater than current
    // check is there a right?
    // if there isnt; newNode becomes the right of the currentNode
    // if there is; call insert and pass the currentNode.right
  }

  search(val) {
    let currentNode = this.root;

    while (currentNode) {
      if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else if (val > currentNode.val) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }

    return false;
  }

  search(val, currentNode = this.root) {
    if (currentNode === null) return false;

    if (val === currentNode.val) return true;

    if (val < currentNode.val) return this.search(val, currentNode.left);

    if (val > currentNode.val) return this.search(val, currentNode.right);
  }

  // prints the nodes in the order we call stack frames
  preOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  // prints the nodes after the current nodes
  // left stack frame is popped off
  inOrderTraversal(currentNode = this.root) {
    if (!currentNode) return;

    this.inOrderTraversal(currentNode.left);
    console.log(currentNode.val);
    this.inOrderTraversal(currentNode.right);
  }



  postOrderTraversal(currentNode = this.root) {


    if (!currentNode) return;

    this.postOrderTraversal(currentNode.left);
    this.postOrderTraversal(currentNode.right);
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
   // 4 2 6 1 3 5 7
  breadthFirstTraversal() {

    const queue = [this.root];

    while(queue.length > 0) {

      let currentNode = queue.shift();

      console.log(currentNode.val);

      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);

    }
  }

  // Depth First Traversal - Iterative
  // 4 6 7 5 2 3 1
  depthFirstTraversal() {
    // Your code here
    const stack = [this.root];

    while(stack.length) {

      let currentNode = stack.pop();

      console.log(currentNode.val);

      if(currentNode.right) stack.push(currentNode.right);
      if(currentNode.left) stack.push(currentNode.left);



    }
  }
}

const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);
// bst.preOrderTraversal();
// bst.inOrderTraversal();
// bst.postOrderTraversal();
bst.depthFirstTraversal()

module.exports = { BinarySearchTree, TreeNode };
