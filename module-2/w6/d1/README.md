# `Week 6 Day 1`

- Assessment
- Sorting Discussion
- Bubble Sort Practice
- Insertion Sort Practice
- Selection Sort Practice


## `Why do we sort?`
  * makes data easier to manipulate
  * we can search sorted data much easier
    * inserting, deleting, searching
    * ex: binary search requires a sorted data structures

### Today we are learning naive sorts - O(n^2)
    * bubbleSort
    * insertionSort
    * selectionSort
    * Merge Sort Practice
    * Quicksort Practice


### Niche use cases
  * May only come up in coding interviews
  * there are faster sorts
    * Quick sort + Merge sort - we will learn tomorrow
  * Useful when
    * array is already in ascending order
    * data is already somewhat sorted
    * working with small data sets

### Tips for learning sorting algos
  * Draw out the data flow
  * Walk through code line by line
  * Use visualizers to see how data moves
    * https://visualgo.net/en

### Get comfortable with
    * Swapping
    * Shifting

### Swapping
```JS
let arr = [0, 1, 2, 3];

// * Swap two values with a temporary variable
let tmp = arr[1];
arr[1] = arr[2];
arr[2] = tmp;

// console.log("ES5", arr); // [ 0, 2, 1, 3 ]

arr = [0, 1, 2, 3];

// * Swap two values with destructured array assignment
// * ES6

[arr[1], arr[2]] = [arr[2], arr[1]];

// console.log("ES6", arr); // [ 0, 2, 1, 3 ]
```
### Shifting
```JS
// * shift back to front
// * avoid overwriting values
const arr1 = [0, 1, 2, 3];
const arr2 = [0, 1, 2, 3];

// If you want to shift the array to the right by 1...

// ! Shifting from front to back will overwrite all values
for (let i = 1; i < arr1.length; i++) {
  // [0, 1, 2, 3]
  // [0, 0, 2, 3]
  // [0, 0, 0, 3]
  // [0, 0, 0, 0]
  arr1[i] = arr1[i - 1];
}

// console.log("BAD SHIFT", arr1); // [ 0, 0, 0, 0, 0, 0 ]

// * Instead, start from the back and shift backwards
for (let i = arr2.length - 1; i > 0; i--) {
  // [0, 1, 2, 3]
  // [0, 1, 2, 2]
  // [0, 1, 1, 2]
  // [0, 0, 1, 2]
  arr2[i] = arr2[i - 1];
}
```

## Bubble Sort
  * Time complexity -
    * Worst case - O(n^2)
    * Best case - O(n^2)
      * Even if the array is sorted, the algorithm checks each adjacent pair and hence the best-case time complexity will be the same as the worst-case.
  * Space complexity -
    * O(1) - In place

  BubbleSort Pseudocode
  * Walk through the entire array, comparing each adjacent pair.
  * If they are out of order, swap their positions.
  * Keep doing this until the entire array is sorted.
  * Each pass will sort the array a bit more, with the larger values "bubbling up" to the top.

## `Insertion sort`
  * Time complexity -
    * Worst case - O(n^2)
    * Best case - O(n) <- possible if already sorted depends on implementation
  * Space complexity -
    * O(n) - Out of place
    * O(1) - In place

### Insertion sort Pseudocode
    * similar to sorting playing cards
    * great to work with linked list
    * real world example - file search, data compression, path finding

### Make sure to make a copy
    * how can we make a copy?
    * how can we can add null to the end of an array? push null
    * iterate backwards and shift things to the right


## Selection sort
  * Time complexity -
    * Worst case - O(n^2)
    * Best case - O(n^2)
      * Even if the array has already been sorted, our algorithm looks for the minimum in the rest of the array.
  * Space complexity -
    * O(n) - Out of place
    * O(1) - In place


## `Quick sort`
  * Just like Merge Sort, Quick Sort uses a divide and conquer strategy.

### The key ideas of Quick Sort are:
  * 1. It is easy to sort elements of an array relative to a particular target value.
  * 2. An array of 0 or 1 elements is already sorted


### Time Complexity
  Best case: O(n log(n))
  * First, we’ll divide the array into two sub-arrays recursively, which will cost a time complexity of O(log n).
  * For each function call, we are calling the partition function, which costs O(n) time complexity.
  * Hence the total time complexity is O(nlogn).

### Worst case: O(n^2)
  * When the array is sorted in descending order or all the elements are the same in the array, the time complexity jumps to O(n²), since the sub-arrays are highly unbalanced.

### Space complexity
  * O(n) - proportional to size of call stack

### This algorithm sorts values using the following divide and conquer approach:
  * Split the unsorted array in half (divide)
  * Sort the halves (conquer)
  * Merge the newly sorted halves

### Use cases
  * In computer graphics, QuickSort is used for image rendering.
  * Data visualization.
  * In numerical computations, QuickSort is used for matrix sorting.

 When the partitioning algorithm always chooses the middle element or near the middle element as the pivot

## Merge sort
  * Merge sort is the first of the efficient algorithms you will learn.

  * Merge sort operates with a much better time complexity than the more naive approaches we started with.

### The main ideas of merge sort are:
  * 1. It is easy to merge elements of two sorted arrays into a single sorted array
  * 2. You can consider an array containing only a single element as already sorted
  * 3. You can also consider an empty array as sorted

### Time Complexity
  * Best case: O(n log n)
  * Worst case: O(n log n)
## Space complexity
  * O(n) - proportional to size of call stack

This algorithm sorts values using the following divide and conquer approach:
  * Split the unsorted array in half (divide)
  * Sort the halves (conquer)
  * Merge the newly sorted halves

## `Logarithm`

![big-o-comparison](./big-O-chart.svg)

// * Linear search
// return index of target
function linearSearch(arr, target) {

  // ? Can you solve this in one line?
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === target) return i;
  // }
  // return -1;
  //

  return arr.indexOf(target);
};

// linearSearch([2,4,6,8], 6);  // 2
// linearSearch([2,4,6,8], 10);  // -1


/*

## What is a Logarithm?
  * inverse of an exponent
  * super-efficient
  * The logarithm base-n of a number is how many times it must be divided by n to reach 1

### Exponents
```
    * 2^5 === 2 * 2 * 2 * 2 * 2 = 32
      ? 2 multiplied by itself 5 times is 32
```
### Logarithm
  * log base(n)
  * log2(32) = 5
    * How many times would we need to divide 32 by 2 to equal 5
