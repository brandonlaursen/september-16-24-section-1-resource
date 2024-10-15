;


// console.log(module);
// console.log(module.exports)



const operations = ['+', '-', '*'];

function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num2 - num1
}

function multiply(num1, num2) {
  return num1 * num2
}


module.exports = {
  add,
  subtract,
  multiply
}

// console.log(module)

// module.exports.add = add;
// module.exports.subtract = subtract;
// module.exports.multiply = multiply;

// console.log(module)

// module.exports = 'string';

// module.exports = [add, subtract, multiply];
// console.log(module);
