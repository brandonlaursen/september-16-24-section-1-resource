

import Game, { sayHi } from './game.js';


sayHi();

window.onload = () => {
    const game = new Game();
    game.start();
};
