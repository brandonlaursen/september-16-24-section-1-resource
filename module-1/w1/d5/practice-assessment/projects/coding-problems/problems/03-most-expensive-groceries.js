/*
You are compiling a price checker for a grocery store. The grocery prices are as
follows:

  butter: $1,
  eggs: $2,
  milk: $3,
  bread: $4,
  cheese: $5

First, create a function called costOfGroceries(groceries) which takes a single
array of grocery items and returns the total cost.

Then, write a function mostExpensiveGroceries(groceriesList) that takes in a
2-dimensional array of grocery items and returns the index of the sub-array with
the highest cost.

Constraint: Use the costOfGroceries function as a helper function in the
mostExpensiveGroceries function to solve the problem.
*/

// function costOfGroceries(groceries) {
//   // Your code here
//   let priceList = {"butter": 1, "eggs": 2, "milk": 3, "bread": 4, "cheese": 5}
//   let totalPrice = 0
//   for (let i = 0; i < groceries.length; i++) {
//     let currentWord = groceries[i]
//     totalPrice += priceList[currentWord]
//   }
//   return totalPrice;
// }

// function mostExpensiveGroceries(groceriesList) {
//   // Your code here \
//   let totalCost = [];

//   for (list in groceriesList) {
//     let eachList = groceriesList[list];
//     let listCost = costOfGroceries(eachList);
//     totalCost.push(listCost);
//   }

//   findIndex = Math.max(...totalCost);
//   finalIndex = totalCost.indexOf(findIndex);

//   return finalIndex;
// }
function costOfGroceries(groceries) {
  //!!START
  let cost = 0;
  for (let i = 0; i < groceries.length; i++) {
    if (groceries[i] === "butter") cost += 1;
    if (groceries[i] === "eggs") cost += 2;
    if (groceries[i] === "milk") cost += 3;
    if (groceries[i] === "bread") cost += 4;
    if (groceries[i] === "cheese") cost += 5;
  }
  return cost;
  //!!END
}

function mostExpensiveGroceries(groceriesList) {
  //!!START
  let highestIndex = 0;
  let currentHighestCost = costOfGroceries(groceriesList[0]);

  for (let i = 1; i < groceriesList.length; i++) {
    let cost = costOfGroceries(groceriesList[i]);
    if (cost > currentHighestCost) {
      highestIndex = i;
      currentHighestCost = cost;
    }
  }

  // findIndex = Math.max(groceriesList[0])

  return highestIndex;
  //!!END
}



// const groceriesA = ['cheese', 'butter', 'eggs'];
// const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
// const groceriesC = ['cheese', 'bread'];
// const groceriesD = ['eggs', 'butter'];

// console.log(costOfGroceries(groceriesA)); // 8
// console.log(costOfGroceries(groceriesB)); // 13
// console.log(costOfGroceries(groceriesC)); // 9
// console.log(costOfGroceries(groceriesD)); // 3

// console.log(mostExpensiveGroceries(
//   [groceriesA, groceriesB, groceriesC, groceriesD]
// )); //=> 1
// console.log(mostExpensiveGroceries(
//   [groceriesA, groceriesD]
// )); //=> 0
// console.log(mostExpensiveGroceries(
//   [groceriesA, groceriesD, groceriesC]
// )); //=> 2


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = {
  costOfGroceries,
  mostExpensiveGroceries,
};
