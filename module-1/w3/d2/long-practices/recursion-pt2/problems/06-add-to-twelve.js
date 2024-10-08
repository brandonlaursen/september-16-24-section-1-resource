/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

// Stop when I only have 1 number, takes 2 to tango

function addToTwelve(arr) {
    // Base & Edge case
    if (arr.length <= 1) return false;

    // Recursive Step
    const newNum = arr.pop();

    if (newNum + arr.at(-1) === 12) return true;
    // Recursive Case
    return addToTwelve(arr);
}

// ! ---------------------------------------------------------------------------
// * ----- Starting from the front
// ! ---------------------------------------------------------------------------

// function addToTwelve(arr) {
//     //break case if the arr cant add two adjecent nums
//     if (arr.length < 2) {
//         return false;
//     }
//     // if arr at 0 and 1 return true
//     if (arr[0] + arr[1] === 12) {
//         return true;
//     }
//     // recur and slice the array by 1 num
//     return addToTwelve(arr.slice(1));

//     // if (arr.length < 2) return false;
//     // if (arr[0] + arr[1] === 12) {
//     //     return true;
//     // } else {
//     //     arr.shift();
//     //     return addToTwelve(arr);
//     // }
// }

// ? ---------------------------------------------------------------------------
// * ----- One line
// ? ---------------------------------------------------------------------------

const addToTwelve = (arr) =>
    arr.length <= 1
        ? false
        : arr.pop() + arr.at(-1) === 12
        ? true
        : addToTwelve(arr);

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = addToTwelve;
} catch (e) {
    module.exports = null;
}
