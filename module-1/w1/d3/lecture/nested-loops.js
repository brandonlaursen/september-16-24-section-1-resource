let matrix = [
  ["a", "b", "c"],
  ["d", "e", "f"],
  ["g", "h", "i"],
];



// console.log(matrix);
// [       0    1    2
//   0 - ["a", "b", "c"],
//   1 - ["d", "e", "f"],
//   2 - ["g", "h", "i"],
// ];

// console.log(matrix.length);// 3
// console.log(matrix[0]);// [ 'a', 'b', 'c' ]
// console.log(matrix[1]);// [ 'd', 'e', 'f' ]
// console.log(matrix[2]);// [ 'g', 'h', 'i' ]

// console.log([ 'a', 'b', 'c' ][0]);// a
// console.log(matrix[0][0]);// a
let subArr = matrix[0];
// console.log(subArr[0]);// a

// console.log(matrix[0][0]);// a
// console.log(matrix[0][1]);// b
// console.log(matrix[0][2]);// c

// console.log(matrix[1][0]);// d
// console.log(matrix[1][1]);// e
// console.log(matrix[1][2]);// f

let i = 2;
let j = 2;
// console.log(matrix[i][j]);// a

// [       0    1    2
//   0 - ["a", "b", "c"],
//   1 - ["d", "e", "f"],
//   2 - ["g", "h", "i"],
// ];

// O(n^2)
// O(n)
// 3^2 = 9
for(let i = 0; i < matrix.length; i++) {
  let subArr = matrix[i];// [ 'a', 'b', 'c' ]
  // console.log('i',i, 'subArr:', subArr)

  // the inner loop will complete in its entirety before incrementing the outer
  //  matrix[i]
  // O(n)
  for(let j = 0; j < subArr.length; j++) {
    // matrix[i][j]
    // let ele = subArr[j];
      // let ele = matrix[i][j];
      let ele = matrix[j][i];
      // console.log(i, j, 'ele:', ele)
    // console.log('j:',j, 'ele: ',ele);

  }
}

let words = ['the', 'string', 'is', 'cool']

for(let i = 0; i < words.length; i++){
  // console.log('i',i);
  let word = words[i];
  console.log(word);

  for(let j = 0; j < word.length; j++){
    let letter = word[j];
    console.log(letter);
  }
}
