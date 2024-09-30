// explicit
let myFunc = (param1, param2) => {
  let num1 = 1;
  let num2 = 2;
  let sum = num1 + num2;
  let sum2 = param1 + param2;
  return sum2;
};

// console.log(myFunc(1, 2));

// implicit
// single line statement
// remove the curlys
// remove the return keyword
let myFunc2 = (param1, param2) => param1 + param2;

// console.log(myFunc2(1, 2));// 3

let myFunc3 = () => ({
  name: "brandon",
});


console.log(myFunc3());// { name: 'brandon' }

let returnObject = (name, rank, village) => ({ name, rank, village });

// console.log(returnObject("Naruto", "Hokage", "Leaf Village")); // {name:'Naruto',rank: 'Hokage',village:'Leaf Village'}
