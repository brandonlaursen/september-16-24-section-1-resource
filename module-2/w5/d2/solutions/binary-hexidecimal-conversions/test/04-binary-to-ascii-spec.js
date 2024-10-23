const chai = require("chai");
const expect = chai.expect;
const binaryToAscii = require("../problems/04-binary-to-ascii");

describe("binaryToAscii", function() {
  it('binaryToAscii("0b01100001") returns "a"', function () {
    expect(binaryToAscii("0b01100001")).to.eq("a");
  });
  it('binaryToAscii("0b00100100") returns "$"', function () {
    expect(binaryToAscii("0b00100100")).to.eq("$");
  });
  it('binaryToAscii("0b01111110") returns "~"', function () {
    expect(binaryToAscii("0b01111110")).to.eq("~");
  });
});
