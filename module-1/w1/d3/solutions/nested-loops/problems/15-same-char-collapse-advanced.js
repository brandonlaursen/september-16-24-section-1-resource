/*
Write a function sameCharCollapse that takes in a string and returns a collapsed
version of the string. To collapse the string, we repeatedly delete 2 adjacent
characters that are the same until there are no such adjacent characters. If
there are multiple pairs that can be collapsed, delete the leftmost pair.

For example, we take the following steps to collapse "zzzxaaxy":
zzzxaaxy -> zxaaxy -> zxxy -> zy
*/

//!!START
function sameCharCollapse(str) {
    let collapsedStr = str;
    let collapsed = true;

    while (collapsed) {
        // if a collapse occured, iterate through the string
        // again to find new instances of adjacent letters
        collapsed = false;
        let i = 0;
        while (i < collapsedStr.length - 1) {
            if (collapsedStr[i] === collapsedStr[i + 1]) {
                //collapse every occurence of adjacent characters
                collapsedStr = collapsedStr.slice(0, i) + collapsedStr.slice(i + 2);
                collapsed = true;
            } else {
                i++;
            }
        }
    }

    return collapsedStr;
}
//!!END

// console.log(sameCharCollapse("zzzxaaxy"));  // "zy"
// // because zzzxaaxy -> zxaaxy -> zxxy -> zy
// console.log(sameCharCollapse("uqrssrqvtt")); // "uv"
// // because uqrssrqvtt -> uqrrqvtt -> uqqvtt -> uvtt -> uv

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sameCharCollapse;
