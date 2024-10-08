/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

function range(start, end) {
    // Base
    if (start >= end) return [];

    // Recursive case + step
    return [start, ...range(start + 1, end)];
    // [ 1 , ...range(2, 5) ]
    // [ 2 , ...range(3, 5) ]
    // [ 3 , ...range(4, 5) ]
    // [ 4 , ...range(5, 5) ]
    // []
    //! Now popping off the stack!
    // [ 4 , ...[] ] => [ 4 ]
    // [ 3 , ...[ 4 ] ] =>
    // [ 2 , ...[ 3 , 4 ] ] => [ 2 , 3 , 4 ]
    // [ 1 , ...[ 2 , 3 , 4 ] ] => [ 1 , 2 , 3 , 4 ]
}

// ! ---------------------------------------------------------------------------
// * ----- Default param
// ! ---------------------------------------------------------------------------

// function range(start, end, finalArray = []) {
//     // Base
//     if (start >= end) return finalArray;

//     finalArray.push(start);

//     // Recursive case + step
//     return range(start + 1, end, finalArray);
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = range;
} catch (e) {
    module.exports = null;
}
