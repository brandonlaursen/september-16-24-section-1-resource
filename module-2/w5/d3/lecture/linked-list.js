





class LinkedListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  };



  addToHead(val) {

    // { val: 2, next: null }
    const newNode = new LinkedListNode(val);


    newNode.next = this.head;

    this.head = newNode



    this.length++;

  }

  print(){
    
  }
}



// const node = new LinkedListNode(3);
// console.log(node);


const ll = new LinkedList();
console.log(ll);

ll.addToHead(3);
// LinkedList { head: LinkedListNode { val: 3, next: null }, length: 0 }
console.log(ll);
ll.addToHead(2);
console.log(ll);

ll.addToHead(1);
