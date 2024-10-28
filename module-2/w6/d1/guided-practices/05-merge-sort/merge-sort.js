/*



   Merge sort
   * Merge sort is the first of the efficient algorithms you will learn.

   * Merge sort operates with a much better time complexity than the more naive approaches we started with.

   The main ideas of merge sort are:
    * 1. It is easy to merge elements of two sorted arrays into a single sorted array
    * 2. You can consider an array containing only a single element as already sorted
    * 3. You can also consider an empty array as sorted

    Time Complexity
     * Best case: O(n log n)
     * Worst case: O(n log n)
    Space complexity
     * O(n) - proportional to size of call stack

    This algorithm sorts values using the following divide and conquer approach:
     * Split the unsorted array in half (divide)
     * Sort the halves (conquer)
     * Merge the newly sorted halves

    Merge Sort is a divide-and-conquer algorithm that efficiently sorts an array by recursively dividing it into smaller subarrays until each subarray contains a single element, then merges these subarrays in a sorted manner. This process involves splitting the array into halves, sorting each half, and merging the sorted halves together, ensuring elements are ordered correctly in the merged array.

    merge could be O(n^2)
    but could be done in O(n) by using pointers


*/

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const midPoint = Math.floor(arr.length / 2);

  const left = arr.slice(0, midPoint);
  const right = arr.slice(midPoint, arr.length);

  const leftSorted = mergeSort(left);

  const rightSorted = mergeSort(right);

  return merge(leftSorted, rightSorted);
}

function merge(arrA, arrB) {
  const returnArr = [];

  let indexA = 0;
  let indexB = 0;

  while (indexA < arrA.length || indexB < arrB.length) {
    if (indexA === arrA.length || arrA[indexA] > arrB[indexB]) {
      returnArr.push(arrB[indexB]);
      indexB++;
    } else {
      returnArr.push(arrA[indexA]);
      indexA++;
    }
  }

  return returnArr;
}

function mergeSort(arr) {
  // Check if the input is length 1 or less
  if (arr.length <= 1) return arr;
  // If so, it's already sorted: return

  // Divide the array in half
  const midPoint = Math.floor(arr.length / 2);

  const left = arr.slice(0, midPoint);
  const right = arr.slice(midPoint, arr.length);

  // (n log n)
  // Recursively sort the left half
  const leftSorted = mergeSort(left);
  // Recursively sort the right half
  const rightSorted = mergeSort(right);

  // Merge the halves together and return
  return merge(leftSorted, rightSorted);
}

// o(n)
// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  const returnArr = [];

  // Point to the first value of each array
  let indexA = 0;
  let indexB = 0;


  // While there are still values in each array...
  // if arrA is empty or the value in arrA is larger
  // push the value from the arrB and increment
  while (indexA < arrA.length || indexB < arrB.length) {
    if (indexA === arrA.length || arrA[indexA] > arrB[indexB]) {
      returnArr.push(arrB[indexB]);
      indexB++;
    } else {
      returnArr.push(arrA[indexA]);
      indexA++;
    }
  }

  return returnArr;
  // Compare the first values of each array
  // Add the smaller value to the return array
  // Move the pointer to the next value in that array

  // Return the return array
}

// Merge
// * Takes in two sorted arrays and returns them merged into one
// * Space complexity O(n)
// * do so by moving pointers
console.log(mergeSort([1, 7, 3, 4, 2, 0, 8, 9])); // 15 calls
