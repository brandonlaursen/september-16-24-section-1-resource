/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

    console.log(sort([])) // prints []
    console.log(sort([9])) // prints [9]
    console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
    console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
*/

function sort(nums, finalArr = []) {
    if (!nums.length) return finalArr;

    //! Grab last index just so I don't have to write nums.length - 1 over and over again
    const lastIndex = nums.length - 1;

    //! Find smallest num
    const smallestNum = Math.min(...nums);
    //! Find index of smallest num
    const tinyI = nums.indexOf(smallestNum);

    // ! Swap and pop !
    [nums[tinyI], nums[lastIndex]] = [nums[lastIndex], nums[tinyI]];
    finalArr.push(nums.pop());

    return sort(nums, finalArr);
}

// console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = sort;
} catch (e) {
    module.exports = null;
}
