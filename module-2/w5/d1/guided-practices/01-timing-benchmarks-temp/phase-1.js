




// Adds up positive integers from 1-n
// O(n)
function addNums(n) {
  // Fill this in

  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum += i;
  };

  // console.log(sum);
  return sum;

}

// addNums(5);


// O(n^2)
// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  // Fill this in

  let sum = 0;

  // O(n)
  for(let i = 1; i <= n; i++){
    //O(n)
    sum += addNums(i);
  }

  // console.log(sum);
  return sum;
}


addManyNums(3)

module.exports = [addNums, addManyNums];
