require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;
let addThreeUntilGreaterThan100;
try {
  addThreeUntilGreaterThan100 = require("../problems/04-debug-infinite-loop");
} catch {}

const exec = require("child_process").execSync;

describe("04 - addThreeUntilGreaterThan100", () => {
  it("addThreeUntilGreaterThan100(10) should return 100", () => {
    expect(addThreeUntilGreaterThan100(10)).to.eq(100);
  });
  
  it("addThreeUntilGreaterThan100(5) should return 101", () => {
    expect(addThreeUntilGreaterThan100(5)).to.eq(101);
  });
  
  it("addThreeUntilGreaterThan100(-6) should return 102", () => {
    expect(addThreeUntilGreaterThan100(-6)).to.eq(102);
  });
});
