function function1() {
  // * returning promise object
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      // let number = "asdf";
      let number = 10;

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
  })
    .then((value) => console.log("resolved", 10 + value))
    .catch((value) => console.log(`${value} is not a number`));
}

function function2() {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      // let number = "asdf";
      let number = 20;

      if (!isNaN(number)) {
        resolve(number);
      } else {
        // * could also pass value and have the catch handle the rejection message
        rejected(number);
      }
    }, 1000);

    // * Value is passed as an argument to the resolve or rejected function to be then use in the .then or .catch

    // * Tho .then takes in a rejected function as a second argument
    // * its better convention to use a catch to handle the rejected promise
  })
    .then((value) => console.log("resolved", 10 + value))
    .catch((value) => console.log(`${value} is not a number`));
}

const fetch = require("node-fetch");

function fetchJokes(id) {
  return new Promise((res, rej) => {
    // * promises can be useful when accessing data from an api
    // * we will learn a much simpler way to do this with async await
    const jokes = fetch(`https://official-joke-api.appspot.com/jokes/random`);

    if (jokes) {
      res(jokes);
    }
    // const data = data.jso

    // rej('some error')
    // * .json
    // * method on request that reads the request body and returns a promise that parses the body as JSON
    // * https://developer.mozilla.org/en-US/docs/Web/API/Request/json
  })
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}

// function1().then(() => function2()).then(() =>fetchJokes())
// function1().then((num) => fetchJokes(num));

// await function1();

// function1().then((num) => fetchJokes(num));
//    10.then((10) => fetchJokes(10))
//    10
//    'string'.split('').reverse();

async function fetchJokes2(id) {
  const jokes = await fetch(
    `https://official-joke-api.appspot.com/jokes/random/${id}`
  );

  const data = await jokes.json();

  return data;
}

// async await
async function wrapper() {
  try {
    await function1();
    await function2();
    await fetchJokes();
  } catch (e) {
    console.log(e);
  }

  // const num = await function1();
  // // console.log(num);
  // const jokes = await fetchJokes2(num);
  // console.log(jokes);

  Promise.all([function1(), function2(), fetchJokes()]).then(() =>
    console.log("done with promise chain")
  );
}

// wrapper();
