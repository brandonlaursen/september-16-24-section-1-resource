<quiz>
  <question>
    <p>Which sorting algorithm incrementally places values from an unsorted array in the correct position in a sorted array?</p>
    <answer>Bubble Sort</answer>
    <answer correct>Insertion Sort</answer>
    <answer>Selection Sort</answer>
    <answer>Quick Sort</answer>
    <answer>Merge Sort</answer>
    <explanation>This is insertion sort.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>Which sorting algorithm divides an array in half, sorts each half, then recombines the sorted halves?</p>
    <answer>Bubble Sort</answer>
    <answer>Insertion Sort</answer>
    <answer>Selection Sort</answer>
    <answer>Quicksort</answer>
    <answer correct>Merge Sort</answer>
    <explanation>This describes merge sort.</explanation>
  </question>
</quiz>

<quiz>
  <question>
    <p>What is the average space complexity of an in-place, recursive quicksort?</p>
    <answer>`O(1)`</answer>
    <answer correct>`O(log n)`</answer>
    <answer>`O(n)`</answer>
    <answer>`O(n^2)`</answer>
    <explanation>In-place algorithms are `O(1)` but recursion occupies space equal to the recursion depth. Quicksort's input size halves each time it recurses, for recursion depth and space complexity of `O(log n)`</explanation>
  </question>
</quiz>


<quiz>
  <question>
    <p>Which of the following lines of code will sort an array in lexicographic (alphabetical) order? </p>
    <answer>`arr.sort((a, b) => b - a)`</answer>
    <answer>`arr.sort((a, b) => a - b)`</answer>
    <answer>`arr.sort((a, b) => a > b)`</answer>
    <answer>`arr.sort((a, b) => a < b)`</answer>
    <answer correct>`arr.sort()`</answer>
    <explanation>`arr.sort()` will sort values in lexicographic order by default.</explanation>
  </question>
</quiz>


<quiz>
  <question multiple>
    <p>Which of these algorithms are guaranteed to visit every reachable node in a connected graph?</p>
    <answer>Breadth-first search</answer>
    <answer correct>Breadth-first traversal</answer>
    <answer correct>Depth-first traversal</answer>
    <answer >Depth-first search</answer>
    <explanation>Both depth and breadth first traversals will always visit every reachable node in a connected graph. Searches will stop once they find their target and are not guaranteed to visit every node.</explanation>
  </question>
</quiz>
