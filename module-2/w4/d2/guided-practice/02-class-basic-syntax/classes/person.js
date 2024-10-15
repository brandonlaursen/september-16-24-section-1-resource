





class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

  }


  introduce(){
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }

  static introducePeople(people) {
    // console.log(people);
    if(!Array.isArray(people)) {
      // console.log('throw an error')
      throw new Error( "introducePeople only takes an array as an argument.")
    };

    for(let person of people) {

      if(!(person instanceof Person)) {
        throw new Error("All items in array must be Person class instances.")
      }
      console.log(person.introduce());
    }
  }
}



const person = new Person("kristen", "chauncey", 38);
const person2 = new Person("jeff", "granoff", 30);

// Person.introducePeople([person, person2]);
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
