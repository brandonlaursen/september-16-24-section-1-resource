/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// take the last letter of the str
// add that to the start of my returned string
// recurse
// once str length == 0 return

function reverse(str) {
    //! Reverse from back to front
    // Base;
    if (str.length === 0) return str;
    if (str === '') return ''; // return str;

    return str.at(-1) + reverse(str.slice(0, -1));

    // //! Reverse from front to back
    // if (str.length <= 1) {
    //     return str;
    // }

    // return reverse(str.slice(1)) + str[0];
}

// ! ---------------------------------------------------------------------------
// * ----- Using substring
// ! ---------------------------------------------------------------------------

// function reverse(str) {
//     if (str.length === 0) return '';

//     return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
// }

// ! ---------------------------------------------------------------------------
// * ----- Using concat
// ! ---------------------------------------------------------------------------

// function reverse(str) {
//     if (str.length === 0) return '';

//     return ''.concat(reverse(str.slice(1))).concat(str[0]);
// }

// let finalString = ""

// for
// finalString += otherStr[i]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = reverse;
} catch (e) {
    module.exports = null;
}
