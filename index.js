const { Fighter } = require("./src/Fighter.js");

// First Labour : Heracles vs Nemean Lion
// use your Figher class here

// bearded_person Heracles, strength 20, dexterity 6
// lion Nemean Lion, strength 11, dexterity 13

const heracles = new Fighter("🧔 Heracles", 20, 6);
const lion = new Fighter("🦁 Nemean Lion", 11, 13);
console.log(`${heracles.getName()} 🧡 ${heracles.getLife()}`);
console.log(`${lion.getName()} 🖤 ${lion.getLife()}`);

let round = 0;
const interval = setInterval(() => {
  round++;
  console.log(`🕛 round ${round}`);
  console.log("-".repeat(40));

  if (heracles.getLife() > 0 && heracles.getLife() > 0) {
    heracles.fight(lion);
    console.log("-".repeat(40));
  } else {
    clearInterval(interval);
  }

  if (lion.getLife() > 0 && heracles.getLife() > 0) {
    lion.fight(heracles);
    console.log("-".repeat(40));
  } else {
    clearInterval(interval);
  }
}, 500);
