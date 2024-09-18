require("./setup-tests");
const chai = require("chai");
const expect = chai.expect;

describe("04 - Comparisons", () => {
  describe("1. isHelloStr1 is true if str1 is strictly equal to 'hello'", () => {
    it("if str1 = 'hello', isHelloStr1 should be true", () => {
      const comparisons = formatFile("str1", "hello");
      if (!("isHelloStr1" in comparisons))
        throw new ReferenceError("isHelloStr1 is not defined");
      if (!("str1" in comparisons))
        throw new ReferenceError("str1 is not defined");
      expect(comparisons.isHelloStr1).to.be.true;
    });
    it("if str1 = 'moon', isHelloStr1 should be false", () => {
      const comparisons = formatFile("str1", "moon");
      if (!("isHelloStr1" in comparisons))
        throw new ReferenceError("isHelloStr1 is not defined");
      if (!("str1" in comparisons))
        throw new ReferenceError("str1 is not defined");
      expect(comparisons.isHelloStr1).to.be.false;
    });
  });

  describe("2. isHelloStr2 is true if str2 is strictly equal to 'hello'", () => {
    it("if str2 = 'world', isHelloStr2 should be false", () => {
      const comparisons = formatFile("str2", "world");
      if (!("isHelloStr2" in comparisons))
        throw new ReferenceError("isHelloStr2 is not defined");
      if (!("str2" in comparisons))
        throw new ReferenceError("str2 is not defined");
      expect(comparisons.isHelloStr2).to.be.false;
    });
    it("if str2 = 'hello', isHelloStr2 should be true", () => {
      const comparisons = formatFile("str2", "hello");
      if (!("isHelloStr2" in comparisons))
        throw new ReferenceError("isHelloStr2 is not defined");
      if (!("str2" in comparisons))
        throw new ReferenceError("str2 is not defined");
      expect(comparisons.isHelloStr2).to.be.true;
    });
  });

  describe("3. isNotHelloStr3 is false if str3 is strictly equal to 'hello'", () => {
    it("if str3 = 'moon', isNotHelloStr3 should be true", () => {
      const comparisons = formatFile("str3", "moon");
      if (!("isNotHelloStr3" in comparisons))
        throw new ReferenceError("isNotHelloStr3 is not defined");
      if (!("str3" in comparisons))
        throw new ReferenceError("str3 is not defined");
      expect(comparisons.isNotHelloStr3).to.be.true;
    });
    it("if str3 = 'hello', isNotHelloStr3 should be false", () => {
      const comparisons = formatFile("str3", "hello");
      if (!("isNotHelloStr3" in comparisons))
        throw new ReferenceError("isNotHelloStr3 is not defined");
      if (!("str3" in comparisons))
        throw new ReferenceError("str3 is not defined");
      expect(comparisons.isNotHelloStr3).to.be.false;
    });
  });

  describe("4. isStrictSameNum is true if num1 is strictly equal to 10", () => {
    it("if num1 = 10, isStrictSameNum should be true", () => {
      const comparisons = formatFile("num1", 10);
      if (!("isStrictSameNum" in comparisons))
        throw new ReferenceError("isStrictSameNum is not defined");
      if (!("num1" in comparisons))
        throw new ReferenceError("num1 is not defined");
      expect(comparisons.isStrictSameNum).to.be.true;
    });
    it("if num1 = 12, isStrictSameNum should be false", () => {
      const comparisons = formatFile("num1", 12);
      if (!("isStrictSameNum" in comparisons))
        throw new ReferenceError("isStrictSameNum is not defined");
      if (!("num1" in comparisons))
        throw new ReferenceError("num1 is not defined");
      expect(comparisons.isStrictSameNum).to.be.false;
    });
    it("if num1 = '10', isStrictSameNum should be false", () => {
      const comparisons = formatFile("num1", "10");
      if (!("isStrictSameNum" in comparisons))
        throw new ReferenceError("isStrictSameNum is not defined");
      if (!("num1" in comparisons))
        throw new ReferenceError("num1 is not defined");
      expect(comparisons.isStrictSameNum).to.be.false;
    });
  });

  describe("5. isStrictDiffNum is false if num2 is strictly equal to 7", () => {
    it("if num2 = 15, isStrictDiffNum should be true", () => {
      const comparisons = formatFile("num2", 15);
      if (!("isStrictDiffNum" in comparisons))
        throw new ReferenceError("isStrictDiffNum is not defined");
      if (!("num2" in comparisons))
        throw new ReferenceError("num2 is not defined");
      expect(comparisons.isStrictDiffNum).to.be.true;
    });
    it("if num2 = 7, isStrictDiffNum should be false", () => {
      const comparisons = formatFile("num2", 7);
      if (!("isStrictDiffNum" in comparisons))
        throw new ReferenceError("isStrictDiffNum is not defined");
      if (!("num2" in comparisons))
        throw new ReferenceError("num2 is not defined");
      expect(comparisons.isStrictDiffNum).to.be.false;
    });
    it("if num2 = '7', isStrictDiffNum should be true", () => {
      const comparisons = formatFile("num2", "7");
      if (!("isStrictDiffNum" in comparisons))
        throw new ReferenceError("isStrictDiffNum is not defined");
      if (!("num2" in comparisons))
        throw new ReferenceError("num2 is not defined");
      expect(comparisons.isStrictDiffNum).to.be.true;
    });
  });

  describe("6. isLooselySameNum is false if num3 is loosely equal to '20'", () => {
    it("if num3 = 20, isLooselySameNum should be true", () => {
      const comparisons = formatFile("num3", 20);
      if (!("isLooselySameNum" in comparisons))
        throw new ReferenceError("isLooselySameNum is not defined");
      if (!("num3" in comparisons))
        throw new ReferenceError("num3 is not defined");
      expect(comparisons.isLooselySameNum).to.be.true;
    });
    it("if num3 = '20', isLooselySameNum should be true", () => {
      const comparisons = formatFile("num3", "20");
      if (!("isLooselySameNum" in comparisons))
        throw new ReferenceError("isLooselySameNum is not defined");
      if (!("num3" in comparisons))
        throw new ReferenceError("num3 is not defined");
      expect(comparisons.isLooselySameNum).to.be.true;
    });
    it("if num3 = 15, isLooselySameNum should be false", () => {
      const comparisons = formatFile("num3", 15);
      if (!("isLooselySameNum" in comparisons))
        throw new ReferenceError("isLooselySameNum is not defined");
      if (!("num3" in comparisons))
        throw new ReferenceError("num3 is not defined");
      expect(comparisons.isLooselySameNum).to.be.false;
    });
  });

  describe("7. isGreater is true if num4 is greater than 10", () => {
    it("if num4 = 12, isGreater should be true", () => {
      const comparisons = formatFile("num4", 12);
      if (!("isGreater" in comparisons))
        throw new ReferenceError("isGreater is not defined");
      if (!("num4" in comparisons))
        throw new ReferenceError("num4 is not defined");
      expect(comparisons.isGreater).to.be.true;
    });
    it("if num4 = 10, isGreater should be false", () => {
      const comparisons = formatFile("num4", 10);
      if (!("isGreater" in comparisons))
        throw new ReferenceError("isGreater is not defined");
      if (!("num4" in comparisons))
        throw new ReferenceError("num4 is not defined");
      expect(comparisons.isGreater).to.be.false;
    });
    it("if num4 = 9, isGreater should be false", () => {
      const comparisons = formatFile("num4", 9);
      if (!("isGreater" in comparisons))
        throw new ReferenceError("isGreater is not defined");
      if (!("num4" in comparisons))
        throw new ReferenceError("num4 is not defined");
      expect(comparisons.isGreater).to.be.false;
    });
  });

  describe("8. isLess is true if num5 is less than the sum of num6 and 4", () => {
    it("if num5 = 3 and num6 = 2, isLess should be true", () => {
      const comparisons = formatFile("num5", 3, "num6", 2);
      if (!("isLess" in comparisons))
        throw new ReferenceError("isLess is not defined");
      if (!("num5" in comparisons))
        throw new ReferenceError("num5 is not defined");
      if (!("num6" in comparisons))
        throw new ReferenceError("num6 is not defined");
      expect(comparisons.isLess).to.be.true;
    });
    it("if num5 = 6 and num6 = 2, isLess should be false", () => {
      const comparisons = formatFile("num5", 6, "num6", 2);
      if (!("isLess" in comparisons))
        throw new ReferenceError("isLess is not defined");
      if (!("num5" in comparisons))
        throw new ReferenceError("num5 is not defined");
      if (!("num6" in comparisons))
        throw new ReferenceError("num6 is not defined");
      expect(comparisons.isLess).to.be.false;
    });
    it("if num5 = 7 and num6 = 2, isLess should be false", () => {
      const comparisons = formatFile("num5", 7, "num6", 2);
      if (!("isLess" in comparisons))
        throw new ReferenceError("isLess is not defined");
      if (!("num5" in comparisons))
        throw new ReferenceError("num5 is not defined");
      if (!("num6" in comparisons))
        throw new ReferenceError("num6 is not defined");
      expect(comparisons.isLess).to.be.false;
    });
  });

  describe("9. isGreaterOrEqual is true if num7 is greater than or equal to the sum of num8 and the number -2", () => {
    it("if num7 = 9 and num8 = 11, isGreaterOrEqual should be true", () => {
      const comparisons = formatFile("num7", 9, "num8", 11);
      if (!("isGreaterOrEqual" in comparisons))
        throw new ReferenceError("isGreaterOrEqual is not defined");
      if (!("num7" in comparisons))
        throw new ReferenceError("num7 is not defined");
      if (!("num8" in comparisons))
        throw new ReferenceError("num8 is not defined");
      expect(comparisons.isGreaterOrEqual).to.be.true;
    });
    it("if num7 = 10 and num8 = 11, isGreaterOrEqual should be true", () => {
      const comparisons = formatFile("num7", 10, "num8", 11);
      if (!("isGreaterOrEqual" in comparisons))
        throw new ReferenceError("isGreaterOrEqual is not defined");
      if (!("num7" in comparisons))
        throw new ReferenceError("num7 is not defined");
      if (!("num8" in comparisons))
        throw new ReferenceError("num8 is not defined");
      expect(comparisons.isGreaterOrEqual).to.be.true;
    });
    it("if num7 = 8 and num8 = 11, isGreaterOrEqual should be false", () => {
      const comparisons = formatFile("num7", 8, "num8", 11);
      if (!("isGreaterOrEqual" in comparisons))
        throw new ReferenceError("isGreaterOrEqual is not defined");
      if (!("num7" in comparisons))
        throw new ReferenceError("num7 is not defined");
      if (!("num8" in comparisons))
        throw new ReferenceError("num8 is not defined");
      expect(comparisons.isGreaterOrEqual).to.be.false;
    });
  });

  describe("10. isInRange is true if num9 is in between the inclusive range of 8 and 10", () => {
    it("if num9 = 10, isInRange should be true", () => {
      const comparisons = formatFile("num9", 10);
      if (!("isInRange" in comparisons))
        throw new ReferenceError("isInRange is not defined");
      if (!("num9" in comparisons))
        throw new ReferenceError("num9 is not defined");
      expect(comparisons.isInRange).to.be.true;
    });
    it("if num9 = 8, isInRange should be true", () => {
      const comparisons = formatFile("num9", 8);
      if (!("isInRange" in comparisons))
        throw new ReferenceError("isInRange is not defined");
      if (!("num9" in comparisons))
        throw new ReferenceError("num9 is not defined");
      expect(comparisons.isInRange).to.be.true;
    });
    it("if num9 = 11, isInRange should be false", () => {
      const comparisons = formatFile("num9", 11);
      if (!("isInRange" in comparisons))
        throw new ReferenceError("isInRange is not defined");
      if (!("num9" in comparisons))
        throw new ReferenceError("num9 is not defined");
      expect(comparisons.isInRange).to.be.false;
    });
  });

  describe("11. isInExclusiveRange is true if num10 falls inside the exclusive range of 8 to 10", () => {
    it("if num10 = 9, isInExclusiveRange should be true", () => {
      const comparisons = formatFile("num10", 9);
      if (!("isInExclusiveRange" in comparisons))
        throw new ReferenceError("isInExclusiveRange is not defined");
      if (!("num10" in comparisons))
        throw new ReferenceError("num10 is not defined");
      expect(comparisons.isInExclusiveRange).to.be.true;
    });
    it("if num10 = 8, isInExclusiveRange should be false", () => {
      const comparisons = formatFile("num10", 8);
      if (!("isInExclusiveRange" in comparisons))
        throw new ReferenceError("isInExclusiveRange is not defined");
      if (!("num10" in comparisons))
        throw new ReferenceError("num10 is not defined");
      expect(comparisons.isInExclusiveRange).to.be.false;
    });
    it("if num10 = 10, isInExclusiveRange should be false", () => {
      const comparisons = formatFile("num10", 10);
      if (!("isInExclusiveRange" in comparisons))
        throw new ReferenceError("isInExclusiveRange is not defined");
      if (!("num10" in comparisons))
        throw new ReferenceError("num10 is not defined");
      expect(comparisons.isInExclusiveRange).to.be.false;
    });
  });

  describe("12. isOutOfRange is false if num11 is in in between the inclusive range of 50 and 80", () => {
    it("if num11 = 91, isOutOfRange should be true", () => {
      const comparisons = formatFile("num11", 91);
      if (!("isOutOfRange" in comparisons))
        throw new ReferenceError("isOutOfRange is not defined");
      if (!("num11" in comparisons))
        throw new ReferenceError("num11 is not defined");
      expect(comparisons.isOutOfRange).to.be.true;
    });
    it("if num11 = 50, isOutOfRange should be false", () => {
      const comparisons = formatFile("num11", 50);
      if (!("isOutOfRange" in comparisons))
        throw new ReferenceError("isOutOfRange is not defined");
      if (!("num11" in comparisons))
        throw new ReferenceError("num11 is not defined");
      expect(comparisons.isOutOfRange).to.be.false;
    });
    it("if num11 = 80, isOutOfRange should be false", () => {
      const comparisons = formatFile("num11", 80);
      if (!("isOutOfRange" in comparisons))
        throw new ReferenceError("isOutOfRange is not defined");
      if (!("num11" in comparisons))
        throw new ReferenceError("num11 is not defined");
      expect(comparisons.isOutOfRange).to.be.false;
    });
  });

  describe("Test spec for more advanced JavaScript users only:", function () {
    it("use comparison expressions only, cannot use conditionals with if", function () {
      const file = fs.readFileSync(
        path.resolve(__dirname, "../problems/04-comparisons.js"),
        "utf-8"
      );
      expect(
        file,
        "Use comparison expressions only, cannot use conditionals with if"
      ).to.not.match(/(?<!\/\/\s*|\/\*\s*[^(\*\/)])if\s*\(.*\)/);
    });
  });
});


const fs = require("fs");
const path = require("path");

function formatFile (...args) {
  if (!args.length) return require("../problems/04-comparisons");
  let file = fs.readFileSync(
    path.resolve(__dirname, "../problems/04-comparisons.js"),
    "utf-8"
  );
  let i = 0;
  while (i < args.length) {
    let [name, value] = [args[i], args[i + 1]];
    if (typeof value === "string") value = `"${value}"`;
    file = file.replace(
      new RegExp(`let ${name}.*`),
      `let ${name} = ${value};`
    );
    i += 2;
  }
  const Module = module.constructor;
  const m = new Module();
  m._compile(file, "");
  return m.exports;
};
