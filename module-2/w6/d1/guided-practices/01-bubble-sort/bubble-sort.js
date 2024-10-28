/*


 ! Think of bubbling values to the right

  Bubble sort
  * Time complexity -
    * Worst case - O(n^2)
    * Best case - O(n^2)
      * Even if the array is sorted, the algorithm checks each adjacent pair and hence the best-case time complexity will be the same as the worst-case.
  * Space complexity -
    * O(1) - In place


  BubbleSort
  * Walk through the entire array, comparing each adjacent pair.
  * If they are out of order, swap their positions.
  * Keep doing this until the entire array is sorted.
  * Each pass will sort the array a bit more, with the larger values "bubbling up" to the top.


*/

function bubbleSort(arr) {
  let hasSwapped = true;

  while (hasSwapped) {
    hasSwapped = false;

    for (let i = 0; i < arr.length; i++) {
      // is current value greater than value to the right?
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

        hasSwapped = true;

        console.log(arr.join(","), arr);
      }
    }
  }
}



function bubbleSort(arr) {
  // * Set a boolean to track swaps
  // ! what we call a flag, keep iterating as long as a swap has ocurred
  // ! if no swap occurs; the array is sorted
  let hasSwapped = true;

  // * Use that boolean to continue looping
  // * keep iterating as long as swaps are occurring
  while (hasSwapped) {
    // * Flip the boolean
    // ! swap to false if swap is not set back to true than the array is already sorted
    hasSwapped = false;

    // * Iterate through the array
    // ! micro-improvement - iterate up to arr.length - 1 no need to check last ele
    for (let i = 0; i < arr.length; i++) {
      // * If the current value is greater than its neighbor to the right
      if (arr[i] > arr[i + 1]) {
        // * Swap those values using destructing es6 way
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

        // alt version
        // let temp = arr[i - 1];
        // arr[i - 1] = arr[i];
        // arr[i] = temp;

        // * And swap the boolean; as long as a swap occurred we need to get keep iterating to check order
        hasSwapped = true;

        // * this is used to see the data
        console.log(arr.join(","), arr);
      }
    }
    // * If you get to the end of the array and no swaps have occurred,
    // * you'll exit the while loop
  }

  return arr;
}

module.exports = bubbleSort;
