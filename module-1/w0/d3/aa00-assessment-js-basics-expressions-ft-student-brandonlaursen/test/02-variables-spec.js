require("./setup-tests");
const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);
const expect = chai.expect;

describe("02 - Variables", () => {
  let consoleSpy;
  let variables;
  before(() => {
    consoleSpy = chai.spy.on(console, 'log');
    variables = require("../problems/02-variables");
  });

  after(() => {
    chai.spy.restore(console, 'log');
  });

  it("should print 'Mickey' to the console first", () => {
    expect(consoleSpy).to.have.been.first.called.with('Mickey');
  });

  it("should print 'Jerry' to the console second", () => {
    expect(consoleSpy).to.have.been.second.called.with('Jerry');
  });

  it("should print 'Tom' to the console third", () => {
    expect(consoleSpy).to.have.been.third.called.with('Tom');
  });

  describe("mouse", () => {
    it("should be equal to a string of 'Jerry' at the end of the program", () => {
      expect(variables.mouse).to.eq("Jerry");
    });
  });

  describe("cat", () => {
    it("should be equal to a string of 'Tom' at the end of the program", () => {
      expect(variables.cat).to.eq("Tom");
    });
  });
});
