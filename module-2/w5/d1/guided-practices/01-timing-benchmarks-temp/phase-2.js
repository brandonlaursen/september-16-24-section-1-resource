const [addNums, addManyNums] = require("./phase-1");




// Runs `addNums` in 10 increasing increments

// O(1) * O(n);
// Time - O(n)
// Space - O(1)
function addNums10(increment) {
  // Fill this in
  let res = [];

  // O(1)
  for(let i = 1; i <= 10; i++){

    //O(n)
    res.push(addNums(i * increment));
  };

  // console.log(res);
  return res;

};

// addNums10(1);

// Runs `addManyNums` in 10 increasing increments
// O(n^2)
function addManyNums10(increment) {
  // Fill this in

  const res = [];

  // O(1)
  for(let i = 1; i <= 10; i++){

    //O(n^2)
    res.push(addManyNums(i * increment));
  };

  // console.log(res);
  return res;

}

// addManyNums10(1);
module.exports = [addNums10, addManyNums10];
