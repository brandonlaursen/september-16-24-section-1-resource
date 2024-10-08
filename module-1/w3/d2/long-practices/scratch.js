// let bar = function () {
//     console.log('b');
//     debugger;
//     baz();
//     console.log('d');
// };

// let foo = function () {
//     console.log('a');
//     debugger;
//     bar();
//     console.log('e');
// };

// let baz = function () {
//     debugger;
//     console.log('c');
// };

// foo();

// function test() {
//     return 'This is a test';
// }

// // function evaluates to its return
// // console.log(test()); // undefined

//? console.log(test() === 'This is a test');

// function test(num) {
//     debugger;
//     if (num === 20) {
//         return 'We did it :)';
//     }
//     return test(num + 1);
// }

// console.log(test(10));
// ! ---------------------------------------------------------------------------
// * ----- In recursive land
// ! ---------------------------------------------------------------------------
// console.log(test(11));
// console.log(test(12));
// console.log(test(13));
// // ...
// console.log(test(19));
// console.log(test(20)); //! Return "We did it :)"

// ! ---------------------------------------------------------------------------
// * ----- Default params
// ! ---------------------------------------------------------------------------

// function myFunc(num = 10, str) {
//     console.log(str, 'This is the str print');
//     return num + 2;
// }

// console.log(myFunc()); // 12
// console.log(
//     '---------------------------------------------------------------------------'
// );
// console.log(myFunc(20)); // 22

// function test(num = 10) {
//     if (num === 20) {
//         return 'We did it :)';
//     }
//     return test(num + 1); // test(11) => test(12) => ...
// }

// console.log(test());

// function test(num, myNumsArr = []) {
//     if (myNumsArr.length >= 10) {
//         return myNumsArr;
//     }

//     myNumsArr.push(num);

//     console.log(myNumsArr, myNumsArr.length);

//     return test(num * 2, myNumsArr);
// }

// // console.log(test(10));
// console.log(test(10, [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));

// function recurse(number) {
//     console.log('number: ', number);

//     // Base case
//     // * stop recursing when number hits 0
//     if (number === 0) return 'Done recursing';
//     if (number === 2) return number;

//     // Recursive step
//     // * subtract 1 from the number and pass the number to the next call to recurse
//     // return recurse(number - 1);// only return recursive call if using return value
//     // will pass return down call stack
//     return recurse(number - 3);
//     // * each time we return recurse: a function call
//     // * we are calling a function and passing it modified arguments
//     // * we keep passing arguments recursively till the base case is it met
//     // * in this case: when the number is 0
// }

// console.log(recurse(3)); // Done recursing

function recurseArr(arr) {
    // Base case
    // * stop when the array is empty
    if (!arr.length) return 'Done recursing';
    // * same thing as
    // if(arr.length === 0) return 'Done recursing';

    // // Many ways to work towards base case
    // // pick a way to shorten the array
    // // * .pop - remove last element
    // let popped = arr.pop();
    // console.log(popped);
    // return recurseArr(arr);

    // // * .shift - remove first element
    // let shift = arr.shift();
    // console.log(shift);
    // return recurseArr(arr);

    // * used with .slice
    console.log(arr[0])
    // * passing an array with first element removed
    return recurseArr(arr.slice(1)); // [2, 3, 4] => [3, 4] => [4] => []

    // ! Any of these approaches work
    // * what matters is we are working towards our base case of an empty array, starting from a full array, removing elements one by one till we hit the base case
}

console.log(recurseArr([1, 2, 3, 4])); // Done recursing
