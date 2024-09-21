const { fork } = require("node:child_process");

const TIMEOUT = 1000;
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

async function protectAgainstInfiniteLoops (functionName, ...args) {
  let child, timeout, returnValue, testDone = false, error = null;
  
  child = fork("./test/execute.js", [functionName, ...args], {
    stdio: ["inherit", "inherit", "pipe", "ipc"],
    silent: true
  });
  
  child.on("message", (res) => {
    clearTimeout(timeout);
    returnValue = res;
    testDone = true;
  });
  
  child.stderr.on("data", err => {
    const { errorType, stack } = err.toString().match(/(?<errorType>\b[\w]*Error.*\n)(?<stack>(.*\n){3})/).groups
    clearTimeout(timeout);
    const formattedStack = stack.replaceAll(/^(\s*)at/gm, (_match, $1) => `${$1}  at`);
    error = `\x1b[31m${errorType}\x1b[0m\x1b[90m${formattedStack}\x1b[0m`;
    testDone = true;
  });
  
  timeout = setTimeout(() => {
    if (child) child.kill();
    testDone = true;
    error = `${functionName} never returned--Check for an infinite loop!`;
  }, TIMEOUT);
  
  while (!testDone) {
    await sleep(1);
  };
  
  return { returnValue, error };
}

module.exports = {
  protectAgainstInfiniteLoops
};
