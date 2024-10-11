/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.
    
    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms
*/

const soundBoard = {
    0: ['beep', 400],
    1: ['boop', 800],
};

const r2d2Speaks = (code) => {
    if (!code.length) return 'r2d2 shut up please for the love of god';

    const [sound, delay] = soundBoard[code.shift()];

    console.log(sound);

    setTimeout(() => r2d2Speaks(code), delay);
};

// let code = [0, 1, 1, 0];
// r2d2Speaks(code);

// function r2d2Speaks(code) {
//     if (!code.length) return 'r2d2 shut up please for the love of god';

//     const val = code.shift();
//     let delay;
//     if (val === 0) {
//         console.log('beep');
//         delay = 400;
//     } else {
//         console.log('boop');
//         delay = 800;
//     }

//     setTimeout(r2d2Speaks, delay, code);
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}
