


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
    // increment length
    // check if the dll has length
    // if the length list is empty
      // set the and head tail to the newNode
    // if there is length
      // point our current head prev pointer at the newNode
      // newNode next pointer at the current head
      // point the head pointer at the newNode
  }

  addToTail(val) {


    // create a newNode
    // increment length
    // if the length list is empty
      // set the head and tail to the newNode
    // if there is length
      // point our current tail next at the newNode
      // point the newNode prev at the current tail
      // point the tail pointer at the new node

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
