// console.log(people.person1);// { name: 'brandon' }
// console.log(people.person2);// { name: 'maica' }
// console.log(people.person3);// { name: 'charles' }
// console.log(people.person4);// { name: 'trevor' }

// // firstPerson = { name: 'brandon' }
// let firstPerson = people.person1;
// console.log("firstPerson:", firstPerson);// firstPerson: { name: 'brandon' }

// console.log(firstPerson.name);// brandon
// console.log(people.person1.name);// brandon

// console.log(people.person1.name);// { name: 'brandon' }
// console.log(people.person2.name);// { name: 'maica' }
// console.log(people.person3.name);// { name: 'charles' }
// console.log(people.person4.name);// { name: 'trevor' }

let people = {
  person1: {
    name: "brandon",
  },
  person2: {
    name: "maica",
  },
  person3: {
    name: "charles",
  },
  person4: {
    name: "trevor",
  },
};

// let cat = {
//   name: "pumpkin",
//   age: 2,
//   cute: true,
// };

// for(let key in people) {
//   // console.log(key);
//   // let value = people['person4'];
//   let value = people[key];
//   console.log(value);//????
// }

// for (let myKey in cat) {
//   // console.log(myKey); //  name | age | cute
//   let value = cat[myKey];
//   console.log("key:", myKey, " - value :", value);
// };

let cat = {
  name: "pumpkin",
  age: 2,
  cute: true,
};


let keyArr = Object.keys(cat);

// console.log(keyArr);// [ 'name', 'age', 'cute' ]

// for(let i = 0; i < keyArr.length; i++){
//   let key = keyArr[i];
//   // console.log(key);// name | age | cute
//   console.log(cat[key]);
// }

// let sum = nums => nums.reduce((sum, num) => sum += num);


let values = Object.values(cat);

// console.log(values);// [ 'pumpkin', 2, true ]


// Object.entries
// [['name', 'pumpkin'], ['age', 2]]

let entries = Object.entries(cat);

console.log(entries);
// [ [ 'name', 'pumpkin' ], [ 'age', 2 ], [ 'cute', true ] ]

// for(let [key, value] of Object.entries(cat)){
//   console.log(key, value);
// }



// for of
console.log('=======')
let arr = ['true', false, 12];



for(let ele of arr) {
  console.log(ele);
}


for(let i = 0; i < arr.length; i++) {

  let ele = arr[i];
  // console.log(ele);
}

/*

  {
  '0': 'a'
  }
*/
let string = 'abcdef';

for(let char of string){
  console.log(char);
}
