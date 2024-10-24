const sha256 = require("js-sha256");

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(numBuckets = 4) {
    this.count = 0;
    // this keeps track of how many elements are in the hashTable
    this.capacity = numBuckets;
    // this keeps track of how many indexes are available
    this.data = new Array(this.capacity).fill(null); // [null, null, null, null]
  }

  hash(key) {
    // Your code here
    // just use the first 8 characters
    const hashedString = sha256(key).slice(0, 8);
    // console.log("hashedString:", hashedString);
    // console.log(hashedString);
    const integer = parseInt(`${sha256(key).slice(0, 8)}`, 16);

    // console.log('hash',integer);
    return integer;
  }

  hashMod(key) {
    // let integer = this.hash(key);
    // console.log("integer:", integer);
    // console.log(integer % this.capacity);

    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {
    // get the index by pass the k/v to the hashMod function
    // create new k/v pair
    const index = this.hashMod(key);
    // console.log(key,index);

    // check is there a k/v pair at this index
    if (!this.data[index]) {
      this.data[index] = new KeyValuePair(key, value);
      this.count++;
    } else {
      throw new Error('hash collision or same key/value pair already exists!');
    }

    // this.count++;
    // if there isn't
    // insert the k/v pair at that position
    // increment count
    // if there is
    // throw an error
  }

  insertWithHashCollisions(key, value) {
    // get index of k/v pair
    const index = this.hashMod(key);
    // console.log(index);

    // create k/v pair
    const newPair = new KeyValuePair(key, value);

    // check if k/v is present at index
    if(!this.data[index]) {
      this.data[index] = newPair
    } else {
      newPair.next = this.data[index];
      this.data[index] = newPair;
    };

    this.count++;
    // if there isn't
    // insert k/v pair at the index
    // if there is
    //point new k/v pair next at the current k/v pair in the position
    // new k/v pair becomes the new head and a linked is created
    //reassign the value at the index to be the new pair
    // increment count
  }

  insert(key, value) {
    // get index of k/v pair
    const index = this.hashMod(key);

    let currentPair = this.data[index];
    // pair already exists at the index

    // traverse if there a linkedList
    // while(currentPair && currentPair.key !== key)
    while(currentPair) {

      if(currentPair.key === key) {
        break;
      }
      currentPair = currentPair.next;
    }

    if(currentPair) {
      currentPair.value = value;
      return;
    }

    const newPair = new KeyValuePair(key, value);
    newPair.next = this.data[index];

    this.data[index] = newPair;
    this.count++;

  }
}


// const hashTable = new HashTable(2);
// hashTable.insert("key-1", "val-1");// 0
// hashTable.insert("key-2", "val-2");// 1
// hashTable.insert("key-3", "val-3");//
// hashTable.insert("key-3", "NEW VAL 3");//
// hashTable.insert("key-1", "NEW VAL 1");//
// hashTable.data[0].next;
// console.log(hashTable.data[0].next);
// console.log(hashTable);
// hashTable.hashMod("A");// 0
// hashTable.hashMod("B");// 1
// hashTable.hashMod("C");// 1


  // check if there is a ll to traverse, if there is
    // traverse and check if any pairs have the same key
    // as soon as we find one that does, stop traversing
    // * overwrite the value
    // if we dont, then the pair doesnt exists in the linked list
    // * well want to add it as the newHead of the linked list
    // if there isnt a ll to traverse
    // create new pair
    // if a pair exists in the position
    // point the next of the new pair at the old head
    // if there is no old head, no need to point next at null
    // increment count
module.exports = HashTable;


// let set = {1};
