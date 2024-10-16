


/*
  Whats going on?
  * arrow funcs automatically bind context to the context that they are defined in, regular functions do not

  We are storing the return value of a function which is a function in a variable by keying into the object
  * with a normal function we lose context
  let wrapped = gorilla.wrappedSayName();
  wrapped holds a function thats lost its context

  * with a arrow function
  let arrowWrapped = gorilla.wrappedArrowSayName();
  * because arrow functions use the context of the function that it is defined in
  * the context will refer to the the gorilla context
  * therefore context is not lost as fat arrow automatically under the hood has set context to gorilla
*/

console.log('===>',{}.name);


// CONTEXT WITH ARROW FUNCS
// ! Cannot bind a function defined with fat arrow function
const gorilla = {
	name: "Harambe",

	wrappedSayName: function () {
    console.log(this); // { name: 'Harambe', ... }
		return function () {
      // normal function loses context here as they do not use the context of what they are defined in
			console.log(this); // GLOBAL
			console.log("Hello my name is " + this.name);
		}
	},

	wrappedArrowSayName: function () {
		console.log(this); // { name: 'Harambe', ... }
    // arrow function this will refer to the context on the above line
		return () => {
			console.log(this); // { name: 'Harambe', ... }
			console.log("Hello my name is " + this.name);
		};
	}
};

let wrapped = gorilla.wrappedSayName();
// wrapped(); // Hello my name is undefined
// console.log(gorilla);
// gorilla.wrapped();


// console.log(undefined());
// let arrowWrapped = gorilla.wrappedArrowSayName();
// arrowWrapped() // Hello
