/*

! Think of inserting values either at particular position/index in an array
! Playing cards


  Insertion sort
  * Time complexity -
    * Worst case - O(n^2)
    * Best case - O(n) <- possible if already sorted depends on implementation
  * Space complexity -
    * O(n) - Out of place
    * O(1) - In place

  Insertion sort
    * similar to sorting playing cards
    * great to work with linked list
    * real world example - file search, data compression, path finding

  Make sure to make a copy
    * how can we make a copy?
    * how can we can add null to the end of an array? push null
    * iterate backwards and shift things to the right


  Insertion Sort sorts an array by sequentially inserting each element into its proper position within the initially empty sorted portion. It compares each element with those in the sorted section, shifting elements one position right to make space, thereby gradually extending the sorted array until completion.
\


  Insert elements in the proper position moving values over to right if necessary


  Insertion sort out of place
  * create a copy of the array
  * remove the last value from the copy
  * push null into sorted
  * check if the current value is greater than the value to the left
  * if the current value is greater, insert the value at that position
  * if the current value is smaller, shift the value at that position over one to the right
  * repeat

  * insert element at a point where the value to the left is no greater
  * finding an index to insert a value


*/

// * Insertion Sort out-of-place
// ! Do not modify the original array
function insertionSort(arr) {
  // * Copy the original array
  arrCopy = [...arr]; // can also use array.slice()

  // * Create an array to store the sorted values
  const sorted = [];

  // * While the array is not empty...

  while (arrCopy.length > 0) {
    // console.log(sorted.join(","));

    // * Pop a value from the array
    let val = arrCopy.pop();

    // * Create a new spot at the end of the array
    sorted.push(null);

    // console.log("arr:", arrCopy, 'value:', val, "sorted:", sorted);
    // * Walk through the sorted array in reverse order

    // do minus one or well be out of bounds
    let i = sorted.length - 1;
    while (i > 0) {
      // * Check if the value to the left is smaller than the new value
      if (sorted[i - 1] < val) {
        // * If so, you've reached the insertion point so exit the loop
        break;
      } else {
        // * If not shift the value to the right by 1 and continue
        sorted[i] = sorted[i - 1];
        i--;
      }
    }

    // * Insert the unsorted value at the break point
    sorted[i] = val;
  }

  // * Return the sorted array
  return sorted;
}



/*


  Insert in place
  * choose a divider
  * grab the value at that position
  * check if the current value is greater than the value to the left
  * if the current val is greater, insert at position
  * if the current val is smaller, shift the value thats to the left, over to the right
  *
  * grab a value
  * we check if the cur val is greater than the the val to the left,
  * if it is we insert in place
  * if its not, we shift the value to the left to the right and repeat

*/
// * In-place Insertion Sort
// ! Mutates the original array
function insertionSortInPlace(arr) {
  // * Set a pointer dividing the array into sorted and unsorted halves
  let divider = 1;

  // * Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // console.log(arr.join(","));

    // * Grab the first value from the unsorted half
    let val = arr[divider];

    // * For each value starting from the divider,
    let i = divider;

    // && arr[i] < arr[i - 1]
    while (i > 0) {
      // * Check if the value to the left is smaller than the unsorted value
      if (arr[i - 1] < val) {
        // * If so, you've reached the insertion point so exit the loop
        break;
      } else {
        // * If not shift the value to the right by 1 and continue
        arr[i] = arr[i - 1];
        i--;
      }
    }

    // console.log('array:', arr, 'value:', val, 'divider:', divider, 'i:', i);
    // * Insert the unsorted value at the break point
    arr[i] = val;

    // * Increment the dividing pointer and repeat
    divider++;
  }

  // * Return the mutated array
  return arr;
}


module.exports = [insertionSort, insertionSortInPlace];
