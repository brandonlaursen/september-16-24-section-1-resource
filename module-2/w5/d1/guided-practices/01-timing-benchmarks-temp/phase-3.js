const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {



  let res = [];

  // O(1)
  for(let i = 1; i <= 20; i++){

    //O(n)
    const startTime = Date.now();
    res.push(addNums(i * increment));
    const endTime = Date.now();

    console.log(`${endTime - startTime}`);
  };

  // console.log(res);
  return res;

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

const res = [];

// O(1)
for(let i = 1; i <= 100; i++){

  //O(n^2)
  const startTime = Date.now();
  res.push(addManyNums(i * increment));

  const endTime = Date.now();

  console.log(`${endTime - startTime}`);
};

// console.log(res);
return res;


}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

// n = 1000
// console.log(`addManyNums(${n}): `);
// addManyNums10Timing(5000);
