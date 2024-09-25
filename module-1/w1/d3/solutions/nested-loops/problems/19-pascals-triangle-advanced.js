/*
Pascal's triangle is a 2-dimensional array with the shape of a pyramid. The top
of the pyramid is the number 1. To generate further levels of the pyramid, every
element is the sum of the element above and to the left with the element above
and to the right. Non-existing elements are treated as 0 when calculating the
sum.

Write a function pascalsTriangle that accepts a positive number, n, as an
argument and returns a 2-dimensional array representing the first n levels of
Pascal's triangle.

For example, here are the first 5 levels of Pascal's triangle:
      1
     1 1
    1 2 1
   1 3 3 1
  1 4 6 4 1
*/

//!!START
function pascalsTriangle(n) {
    if (n <= 0) {
      return [];
    }

    const triangle = [[1]]; // initialize triangle with first level

    for (let level = 1; level < n; level++) {
      const prevLevel = triangle[level - 1]; //reference previous level
      const currentLevel = [1]; // initialize new level: always starts with 1

      for (let i = 1; i < level; i++) {
        // create new element in current level: add elements from previous level
        // above to the right and above to the left or 0 if undefined
        currentLevel[i] = (prevLevel[i - 1] || 0) + (prevLevel[i] || 0);
      }

      currentLevel.push(1); // levels always end with 1
      triangle.push(currentLevel); // add level to triangle
    }

    return triangle;
  }
//!!END

// console.log(pascalsTriangle(5));
/*
[
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1]
]
*/

// console.log(pascalsTriangle(7));
/*
[
    [1],
    [1, 1],
    [1, 2, 1],
    [1, 3, 3, 1],
    [1, 4, 6, 4, 1],
    [1, 5, 10, 10, 5, 1],
    [1, 6, 15, 20, 15, 6, 1]
]
*/

// console.log(pascalsTriangle(-1));
/*
[]
*/

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = pascalsTriangle;
