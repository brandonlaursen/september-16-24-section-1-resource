




class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  };
  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  };

  static introducePeople(...persons) {

    // [person, person2]
    if (!Array.isArray(persons)) throw new Error("introducePeople only takes an array as an argument.");


    for (let person of persons) {
      if (!(person instanceof Person)) throw new Error("All items in array must be Person class instances.");
    }
    for (let person of persons) {
      console.log(person.introduce());
    }
  }
}


// const arr = [1,2,3];
// const arr1 = new Array(1,2,3);

// console.log(arr instanceof Array);// true
// console.log(arr1 instanceof Array);// true

// console.log(Array.isArray(arr1));

const person = new Person("kristen", "chauncey", 38);
const person2 = new Person("jeff", "granoff", 30);

Person.introducePeople([person, person2]);
// console.log(Person);
// Person.introducePeople('hello');
// console.log("person:", person);
// person: Person { firstName: 'kristen', lastName: 'chauncey', age: 38 }

// person.introduce();

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
