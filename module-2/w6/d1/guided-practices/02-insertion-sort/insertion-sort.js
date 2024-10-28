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


  Insertion Sort sorts an array by sequentially inserting each element into its proper position within the initially empty sorted portion. It compares each element with those in the sorted section, shifting elements one position right to make space, thereby gradually extending the sorted array until completion.


*/

function insertionSort(arr) {
  arrCopy = [...arr];

  const sorted = [];

  while (arrCopy.length > 0) {
    console.log(sorted.join(","));
    let val = arrCopy.pop();

    sorted.push(null);

    let i = sorted.length - 1;
    while (i > 0) {
      // if val is greater than value to the left,
      // stop we found the insertion point
      if (val > sorted[i - 1]) {
        break;
      } else {
        sorted[i] = sorted[i - 1];
        i--;
      }
    }

    sorted[i] = val;
  }

  return sorted;
};

console.log(insertionSort([2,4,0,8,1]));











function insertionSortInPlace(arr) {
  let divider = 1;

  while (divider < arr.length) {
    console.log(arr.join(","));
    let val = arr[divider];

    let i = divider;

    while (i > 0) {
      if (val > arr[i - 1]) {
        break;
      } else {
        arr[i] = arr[i - 1];
        i--;
      }
    }

    arr[i] = val;

    divider++;
  }

  return arr;
}

console.log(insertionSortInPlace([2,4,0,8,1]));








// with notes
// * Insertion Sort out-of-place
// ! Do not modify the original array
function insertionSort(arr) {
  // * Copy the original array
  arrCopy = [...arr]; // can also use array.slice()

  // * Create an array to store the sorted values
  const sorted = [];

  // * While the array is not empty...

  while (arrCopy.length > 0) {
    console.log(sorted.join(","));

    // * Pop a value from the array
    let val = arrCopy.pop();

    // * Create a new spot at the end of the array
    sorted.push(null);

    // console.log("arr:", arrCopy, 'value:', val, "sorted:", sorted);
    // * Walk through the sorted array in reverse order

    // do minus one or well be out of bounds
    let i = sorted.length - 1;
    while (i > 0) {
      if (val > sorted[i - 1]) {
        break;
      } else {
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


function insertionSortInPlace(arr) {
  // * Set a pointer dividing the array into sorted and unsorted halves
  let divider = 1;

  // * Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    console.log(arr.join(","));

    // * Grab the first value from the unsorted half
    let val = arr[divider];

    // * For each value starting from the divider,
    let i = divider;

    // && arr[i] < arr[i - 1]
    while (i > 0) {
      // * Check if the value to the left is smaller than the unsorted value
      if (val > arr[i - 1]) {
        break;
      } else {
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
