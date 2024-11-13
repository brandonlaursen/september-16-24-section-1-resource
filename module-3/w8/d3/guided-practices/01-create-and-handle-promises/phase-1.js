function stretch() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      // console.log("done stretching");
      res("done stretching");
    }, 1000);
  });
}

function runOnTreadmill() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      res();
    }, 500);
  });
}

function liftWeights() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("done lifting weights");
      res();
    }, 2000);
  });
}

async function workout() {
  // stretch();
  // runOnTreadmill();
  // liftWeights();

  // promise .then chaining
  // stretch()
  //   .then((msg) => {
  //     console.log('==>',msg);
  //     runOnTreadmill();
  //   })
  //   .then(() => liftWeights())
  //   .then(() => console.log("done working out"));

  // promise.all
  // Promise.all([stretch(), runOnTreadmill(), liftWeights()])
  //  .then(console.log('in console.log') )
  // .then(() => console.log("done working out"));
  // .catch((e) => console.log(e));

  // async await
  // try {
  //   await stretch();
  //   await runOnTreadmill();
  //   await liftWeights();
  //   console.log("done working out");
  // } catch (e) {
  //   console.log(e);
  // }
}

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
