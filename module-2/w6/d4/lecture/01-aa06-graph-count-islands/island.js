function getNeighbors(row, col, matrix) {
  // Return neighbors
  const neighbors = [];

  // *  r c
  // * [1,1];

  // Check top left
  // * [0,0]
  if (row - 1 >= 0 && col - 1 >= 0 && matrix[row - 1][col - 1] === 1) {
    neighbors.push([row - 1, col - 1]);
  }

  // Check top
  // * [0,1]

  if (row - 1 >= 0 && matrix[row - 1][col] === 1) {
    neighbors.push([row - 1, col]);
  }

  // Check top right
  // * [0,2]
  if (
    col + 1 < matrix[0].length &&
    row - 1 >= 0 &&
    matrix[row - 1][col + 1] === 1
  ) {
    neighbors.push([row - 1, col + 1]);
  }

  // Check left
  // * [1,0]
  if (col - 1 >= 0 && matrix[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }

  // Check right
  // * [1,2]
  if (col + 1 < matrix[0].length && matrix[row][col + 1] === 1) {
    neighbors.push([row, col + 1]);
  }

  // Check bottom left
  // * [2,0]
  if (
    row + 1 < matrix.length &&
    col - 1 >= 0 &&
    matrix[row + 1][col - 1] === 1
  ) {
    neighbors.push([row + 1, col - 1]);
  }

  // Check bottom
  // * [2,1]
  if (row + 1 < matrix.length && matrix[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }

  // Check bottom right
  // * [2,2]
  if (
    col + 1 < matrix[0].length &&
    row + 1 < matrix.length &&
    matrix[row + 1][col + 1] === 1
  ) {
    neighbors.push([row + 1, col + 1]);
  }

  // console.log(neighbors);
  return neighbors;
}



// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

function countIslands(matrix) {

  const visited = new Set();
  let islandCount = 0;

  for(let i = 0; i < matrix.length; i++) {

    for(let j = 0; j < matrix[0].length; j++){
      const currentNode = matrix[i][j];
      const stringCoordinate = `${i},${j}`;


      if(matrix[i][j] === 1 && !visited.has(stringCoordinate)) {
        islandCount++;

        const stack = [[i, j]];
        visited.add(stringCoordinate);

        while(stack.length) {
          const node = stack.pop();
          const [row, col] = node;

          const neighbors = getNeighbors(row, col, matrix);


          neighbors.forEach(neighbor => {
            const [row, col] = neighbor;
            const stringCoordinate = `${row},${col}`;
            if(!visited.has(stringCoordinate))  {
              stack.push(neighbor);
              visited.add(stringCoordinate);
            }
          })

        }
      }
    }
  }

  return islandCount;
}

// Uncomment the lines below for local testing


const matrix = [
  [1, 1, 1, 0, 0],
  [0, 1, 1, 0, 1],
  [0, 1, 1, 0, 1],
];


console.log(countIslands(matrix)) // 2

// const matrix2 = [
//   [1,1,1,0,1],
//   [0,0,0,0,1],
//   [1,0,0,1,0],
// ]
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
