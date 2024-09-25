/*
Write a function initials(name) that accepts a full name as an arg. The function
should return the initials for that name.
*/

//!!START
function initials(name) {
    let parts = name.split(' ');
    let initialsArr = [];

    for (let i = 0; i < parts.length; i++) {
        let part = parts[i];
        initialsArr.push(part[0].toUpperCase());
    }
    return initialsArr.join('');
}
//!!END


// console.log(initials('anna paschall')); // 'AP'
// console.log(initials('Mary La Grange')); // 'MLG'
// console.log(initials('brian crawford scott')); // 'BCS'
// console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = initials;
