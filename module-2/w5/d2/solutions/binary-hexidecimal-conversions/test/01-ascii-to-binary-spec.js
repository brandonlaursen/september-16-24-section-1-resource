const chai = require("chai");
const expect = chai.expect;
const asciiToBinary = require("../problems/01-ascii-to-binary");

describe("asciiToBinary", function() {
  it('asciiToBinary("b") returns "01100010"', function () {
    expect(asciiToBinary("b")).to.eq("01100010");
  });
  it('asciiToBinary("hello") returns "0110100001100101011011000110110001101111"', function () {
    expect(asciiToBinary("hello")).to.eq("0110100001100101011011000110110001101111");
  });
});
