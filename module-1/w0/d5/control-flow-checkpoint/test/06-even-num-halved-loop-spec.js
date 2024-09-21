require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;
const { protectAgainstInfiniteLoops } = require("./test-helper");

let evenNumHalvedLoop;
try {
  evenNumHalvedLoop = require("../problems/06-even-num-halved-loop");
} catch {}

describe("06 - evenNumHalvedLoop", () => {
  describe("if its argument is even, then it should return the argument halved until it's not even anymore", () => {
    it("evenNumHalvedLoop(10) should return 5", () => {
      expect(evenNumHalvedLoop(10)).to.eq(5);
    });
    it("evenNumHalvedLoop(2012) should return 503", () => {
      expect(evenNumHalvedLoop(2012)).to.eq(503);
    });
    it("evenNumHalvedLoop(1152) should return 9", () => {
      expect(evenNumHalvedLoop(1152)).to.eq(9);
    });
    it("evenNumHalvedLoop(0) should return 0", async () => {
      const { returnValue, error } = await protectAgainstInfiniteLoops(
        "evenNumHalvedLoop",
        0
      );
      error ? expect.fail(error) : expect(returnValue).to.eq(0);
    });
  });
  describe("if its argument is odd, then it should return the argument", () => {
    it("evenNumHalvedLoop(5) should return 5", () => {
      expect(evenNumHalvedLoop(5)).to.eq(5);
    });
    it("evenNumHalvedLoop(-61) should return -61", () => {
      expect(evenNumHalvedLoop(-61)).to.eq(-61);
    });
    it("evenNumHalvedLoop(1) should return 1", () => {
      expect(evenNumHalvedLoop(1)).to.eq(1);
    });
  });
});
