const evenNumHalvedLoop = require("../problems/06-even-num-halved-loop");

const functions = {
  evenNumHalvedLoop
};

const testFunction = functions[process.argv[2]];

// Convert numeric arguments from string to number so statements of non-equality
// will still work (example: `num !== 0` where num is a parameter).
const args = [...process.argv.slice(3)].map(arg => isNaN(arg) ? arg : Number(arg));

// Check that testFunction is a function before spawning so test won't crash on
// loading when simply running `npx mocha`.
if (typeof testFunction === "function") process.send(testFunction(...args));
