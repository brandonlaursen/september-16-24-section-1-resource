const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
//  [1, 2, 3, 4];
// i = 0; acc = 0
// (0, 1) => 1,
// i = 1; acc = 1
// (1, 2) => 3,
// i = 2; acc = 3
// (3, 3) => 6
// i = 3; acc = 6
// (6, 4) => 10,
// i = 4 - stop
// const initialValue = 0;

// function myFunc(accumulator, currentValue) {
//   console.log(accumulator, currentValue)
//   return accumulator + currentValue
// }

// const sumWithInitial2 = array1.reduce(
//   myFunc,
//   initialValue
// );

// const sumWithInitial = array1.reduce(

//   function (accumulator, currentValue) {
//     console.log(accumulator, currentValue)
//     return accumulator + currentValue
//   },

//   initialValue,
// );

// console.log(sumWithInitial);
// Expected output: 10

// sum
let result = [1, 2, 3].reduce((sum, num) => (sum += num), 0);
console.log("result:", result); // 6

//product
let result2 = [1, 2, 3].reduce((product, num) => product * num, 1);
console.log("result2:", result2);

// string
let result3 = ["a", "b", "c", "d"].reduce(
  (newStr, letter) => (newStr += letter),
  ""
);
console.log("result3:", result3);

// longest string in a array
let result4 = ["the", "longest", "string"].reduce((longest, string) => {
  if (string.length > longest.length) {
    longest = string;
  }

  return longest;
}, "");

console.log("result4:", result4);

// array
let result5 = ["the", "longest", "string"].reduce((newArr, str) => {

  newArr.push(str);
  return newArr;
}, [])

console.log("result5:", result5);

// object
let result6 = ["a", "b", "b", "c", "d", "e", "e"].reduce((obj, letter) => {

  // console.log(obj)
    if(obj[letter]) {
      obj[letter] ++;
    } else {
      obj[letter] = 1
    };
    return obj;
}, []);

console.log("result6:", result6);
// [ a: 1, b: 2, c: 1, d: 1, e: 2 ]

// console.log('======')
// console.log('==>',result6[0]);

for(let i = 0; i < result6.length; i++) {
  console.log(result6[i]);
}
// console.log('hello')
// for(let ele of result6) {
//   console.log(ele);
// }
// console.log('first')

let arr = [];
arr['a'] = 1;
// console.log(arr);
// console.log(arr[0]);
console.log('===>',arr['a']);

let obj = {...result6};
// console.log(obj);


// function myFunc(){

// }


// // console.log(myFunc);
// // myFunc['a'] = 1;
// // console.log(myFunc);


// class Object {
//   constructor(){
//   }

//   sayHello (){

//   }
// }


// class Array extends Object {

// }
