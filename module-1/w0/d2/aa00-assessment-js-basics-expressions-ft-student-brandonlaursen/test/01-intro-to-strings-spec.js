require("./setup-tests");
const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);
const expect = chai.expect;

describe("01 - Strings", () => {
  let consoleSpy;
  before(() => {
    consoleSpy = chai.spy.on(console, 'log');
    require("../problems/01-intro-to-strings");
  });

  after(() => {
    chai.spy.restore(console, 'log');
  });

  it("should print 'Hello World!' to the console", () => {
    expect(consoleSpy).to.have.been.first.called.with('Hello World!');
  });

  it("should print another custom message to the console", () => {
    expect(consoleSpy).to.have.been.called.twice;
  });
});
