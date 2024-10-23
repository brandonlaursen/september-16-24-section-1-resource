const chai = require("chai");
const expect = chai.expect;
const hexadecimalToDecimal = require("../problems/02-hexadecimal-to-decimal");

describe("hexadecimalToDecimal", function() {
  it('hexadecimalToDecimal("0xf") returns 15', function () {
    expect(hexadecimalToDecimal("0xf")).to.eq(15);
  });
  it('hexadecimalToDecimal("0x1F9") returns 505', function () {
    expect(hexadecimalToDecimal("0x1F9")).to.eq(505);
  });
});
