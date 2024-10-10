// const myCB = () => {
//     console.log('Look');
//     console.log('at');
//     console.log('me');
//     console.log('go!');
// };

// setTimeout(myCB, 2000);
// setInterval(myCB, 2000);

// --------------- Problem 1 ---------------------------
// console.log('one');
// console.log('two');
// console.log('three');

// --------------- Problem 2 ---------------------------
// const foo = () => {
//     console.log('two');
// };

// console.log('one');
// foo();
// console.log('three');

// --------------- Problem 3 ---------------------------

// console.log('one');

// setTimeout(() => {
//     console.log('four');
// }, 1);

// setTimeout(() => {
//     console.log('two');
// }, 0);

// let i = 0;

// while (i < 1000000000) {
//     i++;

//     if (i % 200000000 === 0) {
//         console.log('Another 200000000 have passed');
//     }
// }

// console.log('three');

// ! ---------------------------------------------------------------------------
// * ----- Set Timeout
// ! ---------------------------------------------------------------------------

// --------------- Problem 1 ---------------------------
// setTimeout(() => {
//   console.log("time is up");
// }, 1000);

// console.log("end");

// --------------- Problem 2 ---------------------------
// const foo = (a, b) => {
//     console.log('time is up');
//     console.log(`${a} ${b}`);
//     // return () => {
//     //     did some stuff
//     // }
// };

// setTimeout(foo, 1000, 'potato', 'tomato');

// console.log('end');

// --------------- Problem 3 ---------------------------
// const foo = (a, b) => {
//   console.log("time is up");
//   console.log(`${a} ${b}`);
// };

// const res = setTimeout(foo, 0, "potato", "tomato");
// let i = 0;

// while (i < 1000000000) {
//     i++;

//     if (i % 200000000 === 0) {
//         console.log('Another 200000000 have passed');
//     }
// }
// clearTimeout(res);

// --------------- Problem 1 ---------------------------
// const foo = (a, b) => {
//   console.log("time is up");
//   console.log(`${a} ${b}`);
// };

// setInterval(foo, 1000, "potato", "tomato");

// --------------- Problem 2 ---------------------------
// const foo = (a, b) => {
//   console.log("time is up");
//   console.log(`${a} ${b}`);
// };

// const interval = setInterval(foo, 1000, "potato", "tomato");
// clearInterval(interval);

// --------------- Problem 3 ---------------------------
// const intervalCount = (count, delay) => {
//   const intervalObj = setInterval(() => {
//     console.log("time is up");
//     count--;

//     if (count === 0) {
//       clearInterval(intervalObj);
//     }
//   }, delay);
// };

// intervalCount(3, 500);