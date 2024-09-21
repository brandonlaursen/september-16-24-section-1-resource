require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;
let greenBean;
try {
  greenBean = require("../problems/03-green-bean");
} catch {}

describe("03 - greenBean", () => {
  describe("if its string argument starts with 'green' and ends in 'bean', then return 1", () => {
    it("greenBean('greenPODbean') should return 1", () => {
      expect(greenBean("greenPODbean")).to.eq(1);
    });
    it("greenBean('GREENkernelBEAN') should return 1", () => {
      expect(greenBean("GREENkernelBEAN")).to.eq(1);
    });
    it("greenBean('GreEENnUtBEaN') should return 1", () => {
      expect(greenBean("GrEENnUtBEaN")).to.eq(1);
    });
  });

  describe("if its string argument starts with 'green' but doesn't end in 'bean', then return 0.5", () => {
    it("greenBean('greenRASPberry') should return 0.5", () => {
      expect(greenBean("greenRASPberry")).to.eq(0.5);
    });
    it("greenBean('GREENleaves') should return 0.5", () => {
      expect(greenBean("GREENleaves")).to.eq(0.5);
    });
    it("greenBean('GReeNPAN') should return 0.5", () => {
      expect(greenBean("GReeNPAN")).to.eq(0.5);
    });
  });

  describe("if its string argument ends in 'bean' but doesn't start with 'green', then return 0.5", () => {
    it("greenBean('mungbean') should return 0.5", () => {
      expect(greenBean("mungbean")).to.eq(0.5);
    });
    it("greenBean('greekBEAN') should return 0.5", () => {
      expect(greenBean("greekBEAN")).to.eq(0.5);
    });
    it("greenBean('gROWNbEAn') should return 0.5", () => {
      expect(greenBean("gROWNbEAn")).to.eq(0.5);
    });
  });

  describe("if its string argument doesn't start with 'green' or end in 'bean', then return 0", () => {
    it("greenBean('greeean') should return 0", () => {
      expect(greenBean("greeean")).to.eq(0);
    });
    it("greenBean('STRAWBERRY') should return 0", () => {
      expect(greenBean("STRAWBERRY")).to.eq(0);
    });
  });
});
