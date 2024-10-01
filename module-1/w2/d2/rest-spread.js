




/*

  Rest and Spread Operator

  What is the rest parameter?
    * The rest parameter syntax allows a function to accept an indefinite number of arguments as an array
     ** Represent variadic function
    * The rest parameter will the gather any additional arguments and place them in a an array

  Rest operator
  * Rest operator collects multiple elements and 'condenses' them into a single data type.
  * Can be used outside function parameter

*/


// function sentenceMaker(word1, word2) {
function sentenceMaker(word1, ...words) {
  // console.log(word1, words, arguments);
  // return word1 + ' ' + word2;

  return words.join(' ');
}


// console.log(sentenceMaker('hello', 'world'));
// console.log(sentenceMaker('hello', 'world', 'and', 'something'));
// console.log(sentenceMaker('hello'));




/*

  Spread Operator

  What is the Spread Operator?
    * The spread operator allows you to break down a data type into the elements that make it up.
  Two Basic Behaviors
    * Take a data type (i.e. an array, an object) and spread the values of that type where elements are expected
    * Take an iterable data type (an array or a string) and spread the elements of that type where arguments are expected.

    * Create a shallow copy

*/


let arr1 = [1,2,3];
let arr2 = [4,5,6];

// [ 1,2,3 ]
let copy = [...arr1];

// arr3 =  [ 1,2,3, 4,5,6]
let arr3 = [...arr1, 0, ...arr2];

// console.log(arr3);


let obj = {
  name: 'brandon',
  age: 29,
};


let cloneObj = {...obj};

console.log(cloneObj);

let obj2 = {
  location: 'tampa',
  name:'luke'
}


// let newObj = {...obj, ...obj2, newKey: 'value'}
// console.log("newObj:", newObj);//  { name: 'brandon', age: 29, location: 'tampa' }

let string = 'string';

let arr = [...string]
console.log(arr);
