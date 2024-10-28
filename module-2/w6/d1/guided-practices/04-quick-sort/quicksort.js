/*


  Quick sort
  * Just like Merge Sort, Quick Sort uses a divide and conquer strategy.

  The key ideas of Quick Sort are:
  * 1. It is easy to sort elements of an array relative to a particular target value.
  * 2. An array of 0 or 1 elements is already sorted


  Time Complexity
    Best case: O(n log(n))
    * First, we’ll divide the array into two sub-arrays recursively, which will cost a time complexity of O(log n).
    * For each function call, we are calling the partition function, which costs O(n) time complexity.
    * Hence the total time complexity is O(nlogn).

  Worst case: O(n^2)
  * When the array is sorted in descending order or all the elements are the same in the array, the time complexity jumps to O(n²), since the sub-arrays are highly unbalanced.

  Space complexity
  * O(n) - proportional to size of call stack

  This algorithm sorts values using the following divide and conquer approach:
  * Split the unsorted array in half (divide)
  * Sort the halves (conquer)
  * Merge the newly sorted halves

  Use cases
  * In computer graphics, QuickSort is used for image rendering.
  * Data visualization.
  * In numerical computations, QuickSort is used for matrix sorting.

*/

function quicksort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];

    if (num >= pivot) {
      right.push(num);
    } else {
      left.push(num);
    }
  }

  let leftSort = quicksort(left);

  let rightSort = quicksort(right);

  return [...leftSort, pivot, ...rightSort];
}




// console.log(quicksort([4, 3, 1, 7, 2]));

















function quicksort(arr) {
  // * Check if the input is length 1 or less
  // * If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // * Pick the first value as the pivot
  let pivot = arr[0];
  let left = [];
  let right = [];

  // * Orient the pivot so that...
  // !O(n)
  for (let i = 1; i < arr.length; i++) {
    let num = arr[i];
    // console.log(num);

    if (num >= pivot) {
      // * every number larger (or equal) than the pivot is to the right
      right.push(num);
    } else {
      // * every number smaller than the pivot is to the left
      left.push(num);
    }
  }

  // O(log n)
  // * Recursively sort the left
  let leftSort = quicksort(left);

  // * Recursively sort the right
  let rightSort = quicksort(right);

  // * Return the left, pivot and right in sorted order
  return [...leftSort, pivot, ...rightSort];
}

module.exports = [quicksort];
