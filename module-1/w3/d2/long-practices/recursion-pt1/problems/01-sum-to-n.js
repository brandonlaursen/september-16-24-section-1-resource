/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
***********************************************************************/

// ! ---------------------------------------------------------------------------
// * ----- Simplest version
// ! ---------------------------------------------------------------------------
function sumToN(n) {
    // Base
    if (n <= 0) return null;

    // Step
    // Recurse
    return n + sumToN(n - 1); // 5 + 4 + 3 + 2 + 1 + (0 base case!)
}

// ! ---------------------------------------------------------------------------
// * ----- Version without adding null because that's cringe
// ! ---------------------------------------------------------------------------

// function sumToN(n) {
//     if (n < 0) return null;

//     // Base
//     if (n === 0) return 0;

//     // Step
//     // Recurse
//     return n + sumToN(n - 1); // 5 + 4 + 3 + 2 + 1 + (0 base case!)
// }

// ! ---------------------------------------------------------------------------
// * ----- Version where base case returns undefined
// ! ---------------------------------------------------------------------------

// function sumToN(n) {
//     debugger;

//     if (n < 0) return null;
//     if (n === 0) return;

//     const nextNum = sumToN(n - 1);

//     if (nextNum) {
//         return n + nextNum;
//     } else {
//         return n;
//     }
// }

// sumToN(5);

// ? ---------------------------------------------------------------------------
// * ----- One line
// ? ---------------------------------------------------------------------------

// //! condition ? if true return this : if false return this
// const sumToN = (n) => (n <= 0 ? null : n + sumToN(n - 1));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = sumToN;
} catch (e) {
    module.exports = null;
}
