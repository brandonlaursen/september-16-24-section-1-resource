










class DynamicArray {

  constructor(defaultSize=4) {

    // data -> array that holds the value
    this.data = new Array(defaultSize);
    // capacity -> how many values the array can hold before having to resize
    this.capacity = defaultSize;
    // length -> the amount of values the array currently holds
    this.length = 0;

  }

  read(index) {

    if(index >= this.length) return undefined;
    // Your code here
    return this.data[index];
  }

  // [<empty>, <empty>, <empty>, <empty>]
  // [1, 2, 3, 4]
  unshift(val) {

    // console.log(val);
    // console.log('=')
    for(let i  = this.length; i > 0; i--) {

      // let curr = this.data[i];
      // let prev = this.data[i - 1];
      // console.log(curr, prev)
      this.data[i] = this.data[i - 1];
      console.log(this.data);

    };

    this.data[0] = val;
    this.length++;
    console.log(this.data)

  }

};


const arr = new DynamicArray();
console.log(arr);
console.log(arr.data[0] === undefined);
// arr.data[0] = 1
// arr.data[1] = 2
// arr.data[2] = 3
// arr.data[3] = 4
// arr.length = 4;
// console.log(arr);
// console.log(arr.length)
arr.unshift(0);// [0, 1, 2, 3, 4 ]
console.log(arr);

// arr.data[0] = 99;
// console.log(arr);
// console.log(arr.read(0));
// console.log(arr.read(1));


// const arr2 = new DynamicArray(20);
// console.log(arr2);


module.exports = DynamicArray;
