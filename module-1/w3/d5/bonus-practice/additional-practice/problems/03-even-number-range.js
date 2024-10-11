/* Even Number Range

    Write a function that accepts two numbers. 
    The function should return an array of all even numbers between the two arguments inclusively.

    console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
    console.log(evenNumberRange(22, 25)); // prints [22, 24]
    console.log(evenNumberRange(2, 0)); // prints []
*/

function evenNumberRange(small, large) {
    if (small % 2 !== 0) {
        small++;
    }

    // Base Case
    if (small > large) return [];

    const newSmall = small + 2;
    return [small, ...evenNumberRange(newSmall, large)];
}

// function evenNumberRange(small, large) {
//     if (large % 2 !== 0) {
//         large--;
//     }

//     // Base Case
//     if (small > large) return [];

//     const newLarge = large - 2;
//     return [...evenNumberRange(small, newLarge), large];
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = evenNumberRange;
} catch (e) {
    module.exports = null;
}
