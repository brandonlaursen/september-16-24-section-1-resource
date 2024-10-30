

/*




  Problem solving approach to graphs

  1. Identify and define the type of graph
    * adjacency list vs adjacency matrix
    * weighted vs unweighted
    * cyclic vs acyclic
    * directed vs undirected

  2. Implement the getNeighbors function
    * Adjacency list - key into object to get neighbors
    * Adjacency Matrix - Find the neighbors in the coordinate

  3. Traverse the graph
    * Use a queue for Breadth-First-Traversal
      - traverse width of graph
    * Use a stack for Depth-first-Traversal
      - traverse height of graph

  Steps for BFS/T
  * 1. Create a queue and push the starting node
  * 2. Create a set to store visited nodes
  * 3. While the queue is not empty, repeat steps 4-7
    * 4. unshift the first node
    * 5. DO THE THING
    * 6. Find neighbors
    * 7. Check if neighbors have been visited
      * if they havent, push on the stack and add to the visited set

  Steps for DFS/T
  * 1. Create a stack and push the starting node
  * 2. Create a set to store visited nodes
  * 3. While the stack is not empty, repeat steps 4-7
    * 4. Pop off the last node
    * 5. DO THE THING
    * 6. Find neighbors
    * 7. Check if neighbors have been visited
      * if they havent, push on the stack and add to the visited set


*/

// const matrix1 = [
//   [  1,  2,  3,  4 ],
//   [  5,  6,  7,  8 ],
//   [  9, 10, 11, 12 ],
//   [ 13, 14, 15, 16 ]
// ];


// adjacencyList = {
//   1: [2, 5],
//   2: [1, 3, 5],
//   3: [2, 4],
//   4: [3, 5, 6],
//   5: [1, 2, 4],
//   6: [4],
// };




function findNeighbors(node, matrix) {

  const [row, col] = node;
  const neighbors = [];

  // console.log(matrix[row][col])

  // Up

  if(row - 1 >= 0 ) {
    neighbors.push([row - 1, col]);
  }

  // Down
  if(row + 1 < matrix.length) {
    neighbors.push([row + 1, col]);
  };

  // Left
  if(col - 1 >= 0) {
    neighbors.push([row, col - 1]);
  }


  // Right
  if(col + 1 < matrix[0].length) {
    neighbors.push([row, col + 1]);
  }

  // bottom right
  // if(row + 1 < matrix.length && col + 1 < matrix[0].length) {
  //   // console.log(matrix[row + 1][col + 1]);
  //   neighbors.push([row + 1, col + 1]);
  // };
  return neighbors;
}




















// console.log(`1,1` === `1,1`);

function bfsPath(matrix, startNode, endValue) {


  const queue = [startNode];
  const visited = new Set([`${startNode[0]},${startNode[1]}`]);
  const path = [];


  while(queue.length) {

    const curr = queue.shift();

    path.push(curr);

    const [row, col] = curr;


    if(matrix[row][col] === endValue) {
      return path;
    };


    const neighbors = findNeighbors(curr, matrix);
    // console.log(neighbors);

    neighbors.forEach(neighbor => {
      let stringC = `${neighbor[0]},${neighbor[1]}`;
      if(!visited.has(stringC)) {
        queue.push(neighbor);
        visited.add(stringC);
      }
    })

  }

  
  return false;
};


// ***** UNCOMMENT FOR LOCAL TESTING *****

const matrix1 = [
    [  1,  2,  3,  4 ],
    [  5,  6,  7,  8 ],
    [  9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
];

console.log(bfsPath(matrix1, [0,0], 16));

// EXAMPLE TESTS #1. Tests for findNeighbors function
// console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// console.log(findNeighbors([0,0], matrix1)) // Finds all 4 neighbors from an
// console.log(findNeighbors([0,3], matrix1)) // Finds all 4 neighbors from an
// console.log(findNeighbors([3,0], matrix1)) // Finds all 4 neighbors from an
// console.log(findNeighbors([3,3], matrix1)) // Finds all 4 neighbors from an
// internal node (left, right, down, up)
// [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

// console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// // corner node // [ [ 1, 0 ], [ 0, 1 ] ]

// console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// // an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

// console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

// [
//     [ 0, 0 ], [ 1, 0 ],
//     [ 0, 1 ], [ 2, 0 ],
//     [ 1, 1 ], [ 0, 2 ],
//     [ 3, 0 ], [ 2, 1 ],
//     [ 1, 2 ], [ 0, 3 ],
//     [ 3, 1 ], [ 2, 2 ],
//     [ 1, 3 ], [ 3, 2 ],
//     [ 2, 3 ], [ 3, 3 ]
//  ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

// console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// // value is located at start node
// // [ [ 2, 2 ] ]

// console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes
// // and end values
// // [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

// console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value
// // is not found
// // false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
