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

  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

  // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
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

module.exports = { BinarySearchTree, TreeNode };
