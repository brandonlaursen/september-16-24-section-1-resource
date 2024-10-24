class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // Default to empty
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const returnValue = this.head.value;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    this.length--;
    return returnValue;
  }

  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

/*
Above is the given linked list based queue; it should not be modified
Below is the NumSorter class that is to be refactored
*/
class NumSorter {
  constructor() {
    //!!START SILENT
    this.numList = new LinkedList();

    this.allowedNums = new Set();
    //!!END
    //!!ADD
    // this.numList = [];

    // this.allowedNums = [];
    //!!END_ADD
  }

  /*
  Add a number to the list of allowed numbers
  Should not have any duplicates in allowedNums
  */
  addAllowedNum(num) {
    //!!START SILENT
    if (!this.allowedNums.has(num)) {
      this.allowedNums.add(num);
      return `${num} added to allowedNums`;
    } else {
      return `${num} already in allowedNums`;
    }
    //!!END
    //!!ADD
    // if (!this.allowedNums.includes(num)) {
    //   this.allowedNums.push(num);
    //   return `${num} added to allowedNums`;
    // } else {
    //   return `${num} already in allowedNums`;
    // }
    //!!END_ADD
  }

  /* Returns true if the number is allowed, false otherwise */
  isNumAllowed(num) {
    //!!START SILENT
    return this.allowedNums.has(num);
    //!!END
    //!!ADD
    // return this.allowedNums.includes(num);
    //!!END_ADD
  }

  /*
  Add a new number to the back of the numList
  Returns value at the back of numList
  */
  addNumToBack(num) {
    //!!START SILENT
    if (this.isNumAllowed(num)) this.numList.enqueue(num);
    return this.numList.tail.value;
    //!!END
    //!!ADD
    // if (this.isNumAllowed(num)) this.numList.push(num);
    // return this.numList[this.numList.length - 1];
    //!!END_ADD
  }

  /*
  Remove and return the first number in the numList
  If numList is empty, return undefined
  */
  getFirstNum() {
    //!!START SILENT
    if (this.numList.length > 0) {
      return this.numList.dequeue();
    } else {
      return undefined;
    }
    //!!END
    //!!ADD
    // if(this.numList.length > 0){
    //   return this.numList.shift();
    // } else {
    //   return undefined;
    // }
    //!!END_ADD
  }

  /* Returns the count of nums in numList */
  numCount() {
    //!!START SILENT
    return this.numList.length;
    //!!END
    //!!ADD
    // let count = 0;
    // while (this.numList[count] !== undefined) {
    //   count++;
    // }
    //
    // return count;
    //!!END_ADD
  }

  /*
  Resets numList, builds a numlist of integers from 0 to amount
  Only include allowed numbers; returns amount of nums in numList
  */
  buildNumList(amount) {
    //!!START SILENT
    this.numList = new LinkedList();

    for (let i = 0; i <= amount; i++) {
      if (this.allowedNums.has(i)) {
        this.numList.enqueue(i);
      }
    }

    return this.numCount();
    //!!END
    //!!ADD
    // this.numList = [];

    // for (let i = 0; i <= amount; i++) {
    //   if (this.allowedNums.includes(i)) {
    //       this.numList.push(i);
    //   }
    // }

    // return this.numCount();
    //!!END_ADD
  }
}

/* Comment in code below to run local test */
// const newNumSort = new NumSorter(3);
// console.log(newNumSort.addAllowedNum(0));   // '0 added to allowedNums'
// console.log(newNumSort.addAllowedNum(1));   // '1 added to allowedNums'
// console.log(newNumSort.addAllowedNum(1));   // '1 already in allowedNums'
// console.log(newNumSort.addAllowedNum(2));   // '2 added to allowedNums'

// console.log(newNumSort.isNumAllowed(1));    // true
// console.log(newNumSort.isNumAllowed(5));    // false

// console.log(newNumSort.addNumToBack(1));    // 1
// console.log(newNumSort.addNumToBack(2));    // 2
// console.log(newNumSort.addNumToBack(5));    // 2

// console.log(newNumSort.getFirstNum());      // 1
// console.log(newNumSort.getFirstNum());      // 2
// console.log(newNumSort.getFirstNum());      // undefined

// console.log(newNumSort.numCount());         // 0

// console.log(newNumSort.buildNumList(5));    // 3

// console.log(newNumSort.numCount());         // 3

module.exports = { NumSorter, LinkedList };
