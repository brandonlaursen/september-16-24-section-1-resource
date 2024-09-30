


// for in
// You can use a for in for an array
// but you shouldn't

let obj = {key1: 1, key2: 2, key3: 3};

// for(let key in obj) {
//   // console.log(key);
//   let value = obj[key];
//   console.log(key, value);
// };

let arr = [true, false, null];

let arrObj = {
  '0': true,
  '1': false,
  '2': null
};

console.log('===>',arr[0]);

// the index is a string
// for(let index in arr) {
//   // console.log(index);
//   // console.log(typeof index);// string
//   let value = arr[index]
//   console.log(index, value);
// };

console.log('=========');

// index is a number
for(let i = 0; i < arr.length; i++){
  let value = arr[i];
  console.log(i, value);
}


console.log('=========');
// for of


// obj2 is not iterable
// for(let key of obj2) {
//   console.log(key);
// }


// let arr2 = {
//   '0': true,
//   '1': false,
//   '2': null
// };

// let obj2 = {key1: 1, key2: 2, key3: 3};
// let arr2 = [true, false, null];

// for(let ele of arr2) {
//   console.log(ele);
// }


// console.log('hello');
let obj2 = {
    '0': true,
    '1': false,
    '2': null
  };

let arr2 = [true, false, null];

console.log(arr2[0]);
console.log(obj2[0]);

console.log('hello');
console['log']('hello 2')
// console.log(ob2.1)
// console.log(ob2[1]);
