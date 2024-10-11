/***********************************************************************
Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one. Make sure you use a recursive
approach to solve this problem.

Example:

printAndPause([200, 800, 200, 800, 200, 800])
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms

***********************************************************************/

function printAndPause(nums) {
    // Base Case
    if (!nums.length) return 'We so based';

    const delay = nums.shift();

    console.log(delay);

    //? Z
    setTimeout(() => {
        printAndPause(nums);
    }, delay);

    // //* TM
    // setTimeout(printAndPause, delay, nums);

    // //! Best of both worlds
    // setTimeout(() => printAndPause(nums), delay);

    // //TODO: nothing actually todo here, I just wanted orange text
    // setTimeout(
    //     (nextNums) => {
    //         printAndPause(nextNums);
    //     },
    //     delay,
    //     nums
    // );
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = printAndPause;
} catch {
    module.exports = null;
}
