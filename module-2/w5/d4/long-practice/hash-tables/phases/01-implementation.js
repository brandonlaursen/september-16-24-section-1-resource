class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    // Your code here
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here
    // add if statement
    // 3 / 3 = 1 > .7
    // 7 / 8
    // resize
    // 7 / 16]
    // 14 / 32
    // 1052
    if(this.count / this.capacity > .8) this.resize();
  }


  read(key) {
    // Your code here
  }


  resize() {


    // variable to hold old data = [ 1,2,3 ]
                                  // 4
    // double capacity
    // reset count
    // create new array with new capacity = [n, n, 1, 2, 3, 4]
    // iterate through old data -> 1 2 3
                  //               4
    // while you have the current pair
      // insert the currentPair into this(hashTable)
  }


  delete(key) {
    // Your code here
  }
}


module.exports = HashTable;
