const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");


describe("Word", function () {


  beforeEach(() => {
    newWord = new Word('banana');
  });
  
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      // expect.fail("replace with your code");

      // const newWord = new Word('banana');

      expect(newWord).to.have.property('word');


    });

    it('should set the "word" property when a new word is created', function () {

      // const newWord = new Word('banana');

      expect(newWord.word).to.eql('banana');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {

      // const newWord = new Word('banana');

      const result = newWord.removeVowels();
      // console.log("result:", result);

      expect(result).to.eql('bnn');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {

      // const newWord = new Word('banana');

      // const result = newWord.removeConsonants();

      expect(newWord.removeConsonants()).to.eql('aaa');

    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {

      // const newWord = new Word('banana');
      const newWord2 = new Word('trash');

      const result1 = newWord.pigLatin();
      const result2 = newWord2.pigLatin();

      expect(result1).to.equal('ananabay');
      expect(result2).to.equal('ashtray');

    });
  });
});
