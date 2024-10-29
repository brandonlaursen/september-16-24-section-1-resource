let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// O(n)
function linearSearch(arr, target) {
  // Can you solve this in one line?

  return arr.indexOf(target);
}

// console.log(linearSearch(arr, 9));//

/*

      [1,2,3,4,5, 6,7,8,9,10]

      [6, 7, 8, 9, 10]

      [8, 9, 10]

      9 === target

      target - 9

      10 / 2 = 5
      5 / 2 = 3
      3 / 2 = 2
      2 / 1 = 1


*/

function binarySearch(arr, target) {
  // Set integers pointing to the high and low range of possible indices
  let lo = 0;
  let hi = arr.length - 1;

  // While high and low indices do not overlap...
  while (lo <= hi) {
    // Find the midpoint between high and low indices
    const mid = Math.floor((lo + hi) / 2);

    // Compare the target value to the midpoint value
    if (arr[mid] === target) {
      // If the target equals the midpoint...
      // Return the midpoint index
      return mid;
    } else if (target > arr[mid]) {
      // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
      lo = mid + 1;
      // lo += 1
    } else {
      // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
      hi = mid - 1;
      // hi += 1;
    }
  }

  // Return -1 if the loop exits with overlapping pointers
  return -1;
}

console.log(binarySearch([2, 4, 6, 8, 10, 12], 10)); //

module.exports = [linearSearch, binarySearch];
