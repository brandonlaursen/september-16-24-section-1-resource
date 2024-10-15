const {Character} = require('./character');

class Enemy extends Character {
  constructor(name, description, currentRoom) {
    //!!START
    
    //!!END
  }

  setPlayer(player) {
    this.player = player;
  }

  randomMove() {
    //!!START
    
    //!!END
  }

  takeSandwich() {
    //!!START
    
    //!!END
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown, this.cooldown);
  }

  attack() {
    //!!START
    
    //!!END
  }

  applyDamage(amount) {
    //!!START
    
    //!!END
  }

  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    //!!START
    
    //!!END
  }

  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);
  }
}

module.exports = {
  Enemy
};
