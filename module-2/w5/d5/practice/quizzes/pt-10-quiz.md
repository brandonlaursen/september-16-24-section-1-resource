
<quiz>
  <question multiple>
    <p>Which of these are advantages of singly linked lists over doubly linked lists?</p>
    <answer correct>Less memory</answer>
    <answer>Improved time complexity to remove the tail</answer>
    <answer>Improved time complexity to remove the head</answer>
    <answer correct>Simpler code</answer>
    <explanation>Singly linked lists have simpler code and less memory from storing half as many pointers. Removing the head has the same time complexity O(1) in both, and removing the tail is faster in a doubly linked list: O(1) vs O(n).</explanation>
  </question>
</quiz>


<quiz>
  <question multiple>
    <p>Which of the following describes the order values are added and retrieved from a _queue_?</p>
    <answer correct>First in, first out</answer>
    <answer correct>Last in, last out</answer>
    <answer>First in, last out</answer>
    <answer>Last in, first out</answer>
    <explanation>Queues are described by both first-in-first out, and last-in-last-out.</explanation>
  </question>
</quiz>


<quiz>
  <question>
    <p>What happens when you add two different values with the same key into a hash table?</p>
    <answer correct>The first value is overwritten by the second value</answer>
    <answer>A hash collision will occur, with the second value accessible via a linked list</answer>
    <answer>An error occurs, as two values cannot occupy the same bucket</answer>
    <answer>The hash table will resize until the keys no longer overlap</answer>
    <explanation>A hash collision occurs when two _different_ keys have the same hash/modulo output. If the keys are the same, the first value is simply overwritten.</explanation>
  </question>
</quiz>





<quiz>
  <question>
    <p>What is the worst-case time complexity of a lookup in a hash table and what causes it?</p>
    <answer>O(n) if the key is not found in the hash table</answer>
    <answer correct>O(n), if every key in the hash table happens to collide to same bucket.</answer>
    <answer>O(n<sup>2</sup>), if the lookup is called recursively</answer>
    <answer>Hash table lookups are always O(1)</answer>
    <explanation>In the rare case that every key has the same hash/modulo output, triggering collisions, a lookup may contain a worst-case O(n) time complexity.</explanation>
  </question>
</quiz>
