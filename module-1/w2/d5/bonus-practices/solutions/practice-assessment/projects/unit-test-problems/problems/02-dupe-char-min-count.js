/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will take
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

function countCharacters(string) {
	//!!START
	let count = {};
	for (let i = 0; i < string.length; i++) {
		let currentChar = string[i];
		if (count[currentChar] === undefined) {
			count[currentChar] = 1;
		} else {
			count[currentChar] += 1;
		}
	}
	return count;
	//!!END
}

function duplicateCharMinCount(string, minCount) {
	//!!START
	const count = countCharacters(string);

	const chars = Object.keys(count);

	return chars.filter((char) => count[char] >= minCount);
	//!!END
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
