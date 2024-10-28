/*

  Selection sort
    * Time complexity -
      * Worst case - O(n^2)
      * Best case - O(n^2)
        * Even if the array has already been sorted, our algorithm looks for the minimum in the rest of the array.
    * Space complexity -
      * O(n) - Out of place
      * O(1) - In place

  Selection Sort separates the array into sorted and unsorted sections.
  It repeatedly finds the smallest (or largest) element in the unsorted section and transfers it to the end of the sorted section.
  This process is repeated until all elements are moved to the sorted section, growing the sorted portion one element at a time.


*/

function selectionSort(arr) {
  const copy = [...arr];

  const sorted = [];

  //O(n)
  while (copy.length) {
    console.log("copy:", copy, "sorted:", sorted.join(","));

    let minValue = Math.min(...copy);// O(n)
    let minIndex = copy.indexOf(minValue);//O(n)

    copy.splice(minIndex, 1);// O(n)

    sorted.push(minValue);
  }

  return sorted;
};

// n^2








// console.log(selectionSort([2, 4, 0, 8, 1])); // [ 0, 1, 2, 4, 8 ]



function selectionSortInPlace(arr) {
  let divider = 0;

  while (divider < arr.length) {
    let minIndex = divider;

    // finding value smaller than value at divider FROM THE UNSORTED HALF
    for (let i = divider + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }

    let minValue = arr[minIndex];
     console.log(arr);

    // shift everything greater than min value over to the right
    for (let i = minIndex; i > divider; i--) {
      arr[i] = arr[i - 1];
    }
    // console.log('ARR', arr)
    arr[divider] = minValue;

    divider++;
  }

  return arr;
};








console.log(selectionSortInPlace([2, 4, 0, 8, 1])); // [ 0, 1, 2, 4, 8 ]

// with notes
function selectionSort(arr) {
  // * Copy the original array
  const copy = [...arr];
  // * Create an array to store the sorted values
  const sorted = [];
  // * While the array is not empty...
  while (copy.length) {
    // * Do not move this console.log
    console.log("copy:", copy, "sorted:", sorted.join(","));

    // * Find the index of the minimum value in the unsorted half
    let minValue = Math.min(...copy);
    let minIndex = copy.indexOf(minValue);

    // * Save and remove the value at the min index
    copy.splice(minIndex, 1);

    // * Add the min value to the end of the sorted array
    sorted.push(minValue);
  }

  return sorted;
}

console.log(selectionSort([2, 4, 0, 8, 1])); // [ 0, 1, 2, 4, 8 ]

function selectionSortInPlace(arr) {
  // * Set a pointer at zero dividing the array into sorted and unsorted halves
  let divider = 0;

  // * Repeat while the unsorted half is not empty:
  while (divider < arr.length) {
    // * Find the index of the minimum value in the unsorted half
    let minIndex = divider;

    for (let i = divider + 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }

    // * Save the min value
    let minValue = arr[minIndex];
    console.log(
      arr.join(","),
      "d:",
      divider,
      "minIndex:",
      minIndex,
      "minValue:",
      minValue
    );

    // * Shift every unsorted value to the left of the min value to the right by 1
    for (let i = minIndex; i > divider; i--) {
      arr[i] = arr[i - 1];
    }

    // * Put the min value at the divider
    arr[divider] = minValue;

    // * Increment the divider and repeat
    divider++;
  }

  return arr;
}

module.exports = [selectionSort, selectionSortInPlace];
