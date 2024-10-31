function getNeighbors(row, col, graph) {


  // Return neighbors
  const neighbors = [];
  // Check top
  // * [0,1]

  if (row - 1 >= 0 && graph[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }


    // Check bottom
  // * [2,1]
  if (row + 1 < graph.length && graph[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }


  // Check left
  // * [1,0]
  if (col - 1 >= 0 && graph[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }


 // Check right
  // * [1,2]
  if (col + 1 < graph[0].length && graph[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }


  // Return neighbors
  return neighbors;

}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  const visited = new Set();

  // Create a stack, put the starting node in the stack
  const stack = [[row, col]];

  // Put the stringified starting node in visited
  visited.add(`${row},${col}`);

  // Initialize size to 0
 let size = 0;

  // While the stack is not empty,

  while(stack.length) {
  // Pop the first node
  const node = stack.pop();
  const [row, col] = node;

    // DO THE THING (increment size by 1)
    size += 1;

    // Then push all the UNVISITED neighbors on top of the stack
    const neighbors = getNeighbors(row, col, graph);

    neighbors.forEach(neighbor => {
      const [row, col] = neighbor;
        // HINT: Remember, you're storing your visited nodes as strings!
      const stringCoordinate = `${row},${col}`;

      if(!visited.has(stringCoordinate)) {
           // and mark them as visited
        visited.add(stringCoordinate);
        stack.push(neighbor);
      }
    })

    // HINT: This is what your helper function `getNeighbors` is for
  }


  // return size
  return size;

  // Your code here
};


matrix = [
  [1,1,1,0,0],
  [0,1,1,0,1],
  [0,1,1,0,1],
]

// islandSize(0, 0, matrix);  // 7

module.exports = [getNeighbors, islandSize];
