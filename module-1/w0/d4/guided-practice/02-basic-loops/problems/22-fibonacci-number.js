/*
Write a function fib that accepts a number n as an argument. The function should
return the "n-th" number of the Fibonacci sequence. The first two numbers of the
Fibonacci sequence are 1; to generate subsequent numbers of the Fibonacci
sequence, we take the sum of the previous two numbers of the sequence.


  Understand the problem
  Input: 6
  Output: 8
  1 2 3 4 5 6    7  8 9
  1 1  2 3 5 8    13
            ^

  Make a plan
  1. define a function takes in num
  2. if the input is less than or equal 2 - we can return 1
  3. define var for prev - 1
  4. define var for current - 1
  5. define temp var to hold old current - temp
  4. iterate starting from 2, up to the n; in increments in 1
    a. take the sum of curr + prev and assign it to temp
    b. prev = curr
    c. curr = temp
  5. return the temp


  Execute the plan
  Refactor
*/


// function fib1(num) {

//   if(num <= 2) return 1;

//   let prev = 1;
//   let curr = 1;
//   let temp;

//   for(let i = 2; i < num; i++) {
//     console.log('before change:', prev, curr)
//     temp = prev + curr;// 2
//     prev = curr;// 1
//     curr = temp;// 2

//     console.log("prev:", prev, "temp:", temp, "curr:", curr);
//   };

//   return temp;
// }



function fib(num) {

  if(num <= 2) return 1;


  let sequence = [1,1]

  for(let i = 1; i < num - 1; i++) {
    let curr = sequence[i];
    let prev = sequence[i - 1];
    let nextNum = curr + prev;
    sequence.push(nextNum);

  };
  // console.log(sequence);
  return sequence[sequence.length - 1];
  // return temp;
}

// console.log(fib(1));    // 1
// console.log(fib(2));    // 1
// console.log(fib(3));    // 2
// console.log(fib(4));    // 3
// console.log(fib(5));    // 5
// console.log(fib(6));    // 8
console.log(fib(10));   // 55
// console.log(fib(11));   // 89
// console.log(fib(12));   // 144

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = fib;
