
// function.bind(context) -> a function

/*


Call and Apply
  * JavaScript also has two alternative function methods that allow you to bind context.
  * While bind returns a function that can be called multiple times with the given context,
  * call and apply will invoke the bound function immediately, returning the return value from that function.
  ! invoke the bound function immediately

  * // assigning return of func.call() to a variable
  let callReturn = func.call(context, ...args);

  * // assigning return of func.apply() to a variable
  let applyReturn = func.apply(context, [...args]);

  Syntax
  * Function.call/apply (this, arguments to function)

  The only difference between the two comes in the remaining arguments:
  * call spreads them out in comma-separated values
    ! C for comma
  * Apply takes in arrays of arguments
    ! A for array


*/


class Dog {
  constructor(name) {
    this.name = name;
  }
}

class Cat {
  constructor(name) {
      this.name
  }
  purrNTimes(n) {
      for(let i = 0; i < n; i++) {
          console.log(`${this.name} says: meow`);
      };


      return 'Hello!'
  }
}

let dog = new Dog('Scooby');
let cat = new Cat('Garfield');

//function.call(context, arg)
cat.purrNTimes.call(dog, 5, 4, 3);
cat.purrNTimes.call(dog, ...[5, 4, 3]);

let result = cat.purrNTimes.apply(dog, [5,4,3]);
console.log("result:", result);
