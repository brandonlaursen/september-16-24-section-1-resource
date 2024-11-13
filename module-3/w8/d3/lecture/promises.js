const pendingPromise = new Promise((resolve, reject) => {
  // console.log(resolve, reject);// [Function (anonymous)] [Function (anonymous)]
});

// console.log("pendingPromise:", pendingPromise);// { <pending> }

// class Promise {
//   constructor(callback) {
//     // this.callback = callback(this.resolve, this.r)
//   }

//   resolve() {}

//   rejected() {}
// }

function function1() {
  // * returning promise object
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      // let number = "asdf";
      let number = 15;

      // * If the promise is resolved the number is variable is passed as an argument to the resolve or rejected function
      if (!isNaN(number)) {
        // * resolve takes the value
        resolve(number);
      } else {
        // * rejected takes the reason for the rejection
        rejected(`${number} is not a number`);
      }
    }, 2000);

    // then .then takes in two arguments
    // * the first is a function to handle a resolved promise
    // * the second is a function to handle a rejected promise
    // * the value passed to the resolve function will be represented by the parameter in the callback function
  }).then(
    (value) => console.log("resolved", 10 + value),
    (reason) => console.log("rejected", reason)
  );
}

// function1();

// function1().then(
//   (value) => console.log("resolved", 10 + value),
//   (reason) => console.log("rejected", reason)
// );;

const fetch = require("node-fetch");

function fetchJokes() {

  let returnVal =  new Promise((res, rej) => {
    // * promises can be useful when accessing data from an api
    // * we will learn a much simpler way to do this with async await
    const jokes = fetch("https://official-joke-api.appspot.com/jokes/random");

    // ! What happens if the url passed to fetch doesn't work
    // * we would hit out rej function and pass the
    // const jokes = fetch('https://oficial-joke-api.appspot.com/jokes/random');

    if (jokes) {
      res(jokes);
    }

    // rej('some error')
    // * .json
    // * method on request that reads the request body and returns a promise that parses the body as JSON
    // * https://developer.mozilla.org/en-US/docs/Web/API/Request/json
  });

  return returnVal;
}

// fetchJokes()
//   .then((data) => data.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// fetchJokes()
//   .then((data) => data.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// console.log('one')

// setTimeout(() => {
//   console.log('three')
// }, 1000);

// console.log('two')


const jokes = fetch("https://official-joke-api.appspot.com/jokes/random")
// .then((data) => data.json()).then((data) => console.log(data));// Promise { <pending> }
// jokes = jokes.json();
// console.log("jokes:", jokes);
