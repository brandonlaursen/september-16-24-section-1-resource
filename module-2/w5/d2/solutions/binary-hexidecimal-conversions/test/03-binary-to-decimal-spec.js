const chai = require("chai");
const expect = chai.expect;
const binaryToDecimal = require("../problems/03-binary-to-decimal");

describe("binaryToDecimal", function() {
  it('binaryToDecimal("0b10001000") returns 136', function () {
    expect(binaryToDecimal("0b10001000")).to.eq(136);
  });
  it('binaryToDecimal("0b01010101") returns 85', function () {
    expect(binaryToDecimal("0b01010101")).to.eq(85);
  });
});
