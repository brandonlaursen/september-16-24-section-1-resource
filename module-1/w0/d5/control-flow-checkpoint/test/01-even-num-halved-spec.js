require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;
let evenNumHalved;
try {
  evenNumHalved = require("../problems/01-even-num-halved");
} catch {}

describe("01 - evenNumHalved", () => {
  describe("if its argument is even, then it should return the argument halved", () => {
    it("evenNumHalved(10) should return 5", () => {
      expect(evenNumHalved(10)).to.eq(5);
    });
    it("evenNumHalved(2012) should return 1006", () => {
      expect(evenNumHalved(2012)).to.eq(1006);
    });
    it("evenNumHalved(0) should return 0", () => {
      expect(evenNumHalved(0)).to.eq(0);
    });
  });

  describe("if its argument is odd, then it should return the argument", () => {
    it("evenNumHalved(5) should return 5", () => {
      expect(evenNumHalved(5)).to.eq(5);
    });
    it("evenNumHalved(-61) should return -61", () => {
      expect(evenNumHalved(-61)).to.eq(-61);
    });
    it("evenNumHalved(1) should return 1", () => {
      expect(evenNumHalved(1)).to.eq(1);
    });
  });
});
