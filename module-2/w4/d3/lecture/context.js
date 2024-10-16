const { globalAgent } = require("http");

function sayHello(name) {
  console.log(this); // Global object in node, window in browser
  console.log("hello " + name);
}

// sayHello('maica') // hello maica

const elephant = {
  name: "funkfreed",
  age: 1,
  whatIsThis: function () {
    console.log(this);
  },
  sayAge: function () {
    console.log(`my name is ${this.name} and i am ${this.age}`);
  },
};

// elephant.whatIsThis();
// elephant.sayAge();

// sayAgeFunc = function () {
// 	console.log(this);
// }
let sayAgeFunc = elephant.sayAge;
// console.log("sayAgeFunc:", sayAgeFunc);

// sayAgeFunc();

// elephant.sayAge.bind(elephant)
// Function.bind(context)
let boundSayAgeFunc = elephant.sayAge.bind(elephant);
// console.log("boundSayAgeFunc:", boundSayAgeFunc);

// boundSayAgeFunc();
// my name is funkfreed and i am 1

const elephant4 = {
  name: "funkfreed",
  age: 1,
};

const cat = {
  name: "mochi",
  age: 2,
};

function sayAge() {
  console.log(`my name is ${this.name} and i am ${this.age}`);
}

// sayAge();

// * Function.bind(context)
let elephantBoundFunc = sayAge.bind(elephant4);
// elephantBoundFunc();

let catBoundFunc = sayAge.bind(cat);
// catBoundFunc();

// console.log(module);
// global.name = 'test';
// console.log(global);

const dragon = {
  name: "Smaug",
  sayName: function () {
    console.log("Hello my name is " + this.name);
  },
};

const orc = {
  name: "Azog",
};

// * Function.bind(this)
// * binding sayName function to dragon object
let dragonNameFunc = dragon.sayName.bind(dragon);
// dragonNameFunc();// Hello my name is Smaug

// * binding sayName function to orc object
let orcNameFunc = dragon.sayName.bind(orc);
// orcNameFunc();// Hello my name is Azog

class Cat {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
  print() {
    console.log(this);
  }

  // ! Talk about when going over arrow functions
  fatArrowPrint = () => console.log(this);

  static printCats(cats) {
    return cats.forEach((cat) => {
      console.log(cat);
    });
  }
}

let newCat = new Cat("Pumpkin", 3, "Ragamuffin");
newCat.print();

// let forEachBound = [1,2,3].map((num) => num * 2, newCat);

// console.log(forEachBound instanceof Cat);

let printCat = newCat.print;
printCat(); // undefined

let bindPrintCat = newCat.print.bind(newCat);
bindPrintCat(); //

let arrowPrintName = newCat.fatArrowPrint;
arrowPrintName();



// Define an object to act as thisArg
const thisArg = { multiplier: 2 }; // Define an array const numbers = [1, 2, 3, 4, 5];
// Define a callback function that uses 'this'
function multiply(element, index, array) {
  console.log(`${element} * ${this.multiplier} = ${element * this.multiplier}`);
}
// Use forEach with the callback and pass 'thisArg'
numbers.forEach(multiply, thisArg);
