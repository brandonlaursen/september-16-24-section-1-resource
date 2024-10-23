


class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;

  }

  addToHead(val) {

    // create a newNode
    const newNode = new DoublyLinkedListNode(val);

    // check if the dll has length
    if(this.length >= 1) {
    // if there is length
      // point our current head prev pointer at the newNode
      this.head.prev = newNode

      // newNode next pointer at the current head
      newNode.next = this.head;

      // point the head pointer at the newNode
      this.head = newNode;

    } else {
    // if the length list is empty
      // set the and head tail to the newNode
      this.head = newNode;
      this.tail = newNode;
    }

      // increment length
      this.length++;

  }

  addToTail(val) {


    // create a newNode
    const newNode = new DoublyLinkedListNode(val);

    if(this.length >= 1) {

      // point the newNode prev at the current tail
      newNode.prev = this.tail;

      
    // if there is length
      // point our current tail next at the newNode
      this.tail.next = newNode;


      // point the tail pointer at the new node
      this.tail = newNode;

    } else {
    // if the length list is empty
      // set the head and tail to the newNode
      this.head = newNode;
      this.tail = newNode;
    }


    // increment length
    this.length++;

  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
