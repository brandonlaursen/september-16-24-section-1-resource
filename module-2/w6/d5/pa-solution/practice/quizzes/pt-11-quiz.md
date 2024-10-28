<quiz>
  <question>
    <p>If you refactor an algorithm with time complexity of `O(n^2)` to be twice as fast, what would the new time complexity be?</p>
    <answer>`O(n)`</answer>
    <answer>`O(n log n)`</answer>
    <answer>`O(n^2 / 2)`</answer>
    <answer>`O(1)`</answer>
    <answer correct>`O(n^2)`</answer>
    <explanation>Coefficients are ignored in big-O analysis so `O(n^2 / 2)` is the same as `O(n^2)`</explanation>
  </question>
</quiz>


<quiz>
  <question multiple>
    <p>Which of these statements are true of binary search?</p>
    <answer>It can be performed on a linked list</answer>
    <answer correct>It will take a maximum of `log(n)` comparisons to find a value</answer>
    <answer>It can be performed on an array of unsorted data</answer>
    <answer correct>It can be performed in-place</answer>
    <explanation>Binary search will take at **most** `log(n)` comparisons to find a value. It cannot be performed on a linked list because there is no way to jump to the middle index and it cannot be performed on an unsorted array.</explanation>
  </question>
</quiz>



```plaintext
       0
     /   \
    1     2
   / \     \
  3   4     5
 /   / \   / \
6   7   8 9   10
```

<quiz>
  <question>
    <p>What order would an pre-order traversal print the nodes in this tree?</p>
    <answer>0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10</answer>
    <answer correct>0, 1, 3, 6, 4, 7, 8, 2, 5, 9, 10</answer>
    <answer>6, 3, 1, 7, 4, 8, 0, 2, 9, 5, 10</answer>
    <answer>0, 2, 5, 10, 9, 1, 4, 8, 7, 3, 6</answer>
    <explanation>Pre-order traversal will start at the root and travel down the left children, then to the right children once the left are visited.</explanation>
  </question>
</quiz>


```plaintext
       0
     /   \
    1     2
   / \     \
  3   4     5
 /   / \   / \
6   7   8 9   10
```

<quiz>
  <question multiple>
    <p>What order could a depth-first traversal visit the nodes in this tree?</p>
    <answer correct>0, 1, 3, 6, 4, 7, 8, 2, 5, 9, 10</answer>
    <answer correct>0, 2, 5, 10, 9, 1, 4, 8, 7, 3, 6</answer>
    <answer>0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10</answer>
    <answer>6, 3, 1, 7, 4, 8, 0, 2, 9, 5, 10</answer>
    <explanation>Similar to a pre-order traversal, a depth-first traversal starts from the root and travels as deep as possible down the left, before visiting nodes on the right. Alternatively, traveling down the right before visiting nodes on the left is also a valid depth-first traversal. The convention is to go down the left side first. The difference depends on the implementation of the code.</explanation>
  </question>
</quiz>

```plaintext
       0
     /   \
    1     2
   / \     \
  3   4     5
 /   / \   / \
6   7   8 9   10
```

<quiz>
  <question>
    <p>True or false: This is a valid binary search tree.</p>
    <answer correct>False</answer>
    <answer>True</answer>
    <explanation>This is a binary tree, but not a binary search tree since it does not follow BST rules of all left values being less than the node itself.</explanation>
  </question>
</quiz>
