function isFive(num) {

  return num === 5;

};


// const num1 = 5;

// const actual1 = isFive(num1);
// console.log("actual1:", actual1);

// const otherInput = "not 5";
// const actual3 = isFive(otherInput); // should be false
// console.log("actual3:", actual3);

function isOdd(number) {
  // Your code here

  if(typeof number !== 'number') {
    throw Error('not a number')
  };

  return number % 2 !== 0;
}

function myRange(min, max, step = 1) {
  // Your code here

  const arr = [];
  for(let i = min; i <= max; i += step){
    arr.push(i);
  };

  return arr;

}

// console.log(Error);

// console.log(Error.captureStackTrace());

// if (Error.captureStackTrace) {
//   Error.captureStackTrace(this);
// }





// constructor(fieldName = 'field', ...params) {
//   // Pass remaining arguments to parent constructor
//   super(...params);



class Parent {
  constructor(name, age, height) {
    this.name = name;
    this.age = age;
    this.height = height;
  }
}

class Child extends Parent {
  constructor(newProperty,...params){
    super(...params);
    this.newProperty = newProperty;
  }
}


// const newChild = new Child('brandon', '30', '5"11');

module.exports = { isFive, isOdd, myRange };
