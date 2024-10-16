// Your code here


class Employee{
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
  }

  sayName() {
    console.log(this);
    console.log(`${this.name} says hello`)
  }

  sayOccupation(){
    console.log(`${this.name} is a ${this.occupation}`)
  }
}


// const person = new Employee('BRANDON', 'INSTRUCTOR');


// person.sayName();
// person.sayOccupation();

module.exports = Employee;
