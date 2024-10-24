




class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  constructor(numBuckets) {
    this.count = 0;
    this.capacity = numBuckets;
    //* we initialize an array of a fixed size for data
    this.data = new Array(this.capacity).fill(null);
  }

  // * We will then need a hashing function which coverts keys/input to integers
  // * A hash function maps arbitrary data to a deterministic, fixed-size output.
  // * Hashing, unlike encryption, only works in one direction.
  // * Cannot decrypt a hash output to find the input
  // ! Note: Our hashing function is not the most secure, we will instead use SHA256

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    // console.log(hashValue);
    return hashValue;
  };


  // *  Finally, you will need a function to convert the key hash into a valid array index
  // * result of modulo will always be in range of 0 - number - 1
  hashMod(key) {
    // Code below will always return an index from 0 through to data.length - 1
    return this.hash(key) % this.capacity;
  }

  // * you'll be creating your own functions to resize the array whenever we hit the load factor in the practice
}

const myHash = new HashTable(3);


console.log(myHash.hashMod('key1'));
console.log(myHash.hashMod('key2'));
console.log(myHash.hashMod('key3'));
console.log(myHash.hashMod('key4'));
