// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.length++;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        this.length++;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity

        // Your code here
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    averageValue() {
        // Returns the average value of all the nodes

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    findMid() {

        let curr = this.head;

        let midIndex;

        if(this.length % 2 === 0) {
            midIndex = ((this.length / 2) - 1);
        } else {
            midIndex = Math.ceil((this.length / 2) - 1)
        };

        let index = 0;
        while(curr) {

            if(index === midIndex) {
               return curr;
            };
            index++;
            curr = curr.next;
        }


        return curr;
    }


    reverse() {
        const newList = new SinglyLinkedList();

        let curr = this.head;

        while(curr) {

            const newNode = new SinglyLinkedNode(curr.value);
            newNode.next = newList.head;
            newList.head = newNode;
            newList.length++;

            curr = curr.next;
        };

        // console.log(newList);
        return newList;
    }

    reverseInPlace() {


        let curr = this.head;
        let next = curr;
        let prev = null;

        while(next) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        };

        this.head = prev;

        // console.log(this);
    }

};

const list = new SinglyLinkedList();
list.addToTail(1);
list.addToTail(2);
list.addToTail(3);

// console.log(list.reverse());
console.log(list)

// console.log(list.findMid());

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        // Returns a new reversed version of the linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
