const {Fighter} = require('./src/Fighter.js');

// First Labour : Heracles vs Nemean Lion
// use your Figher class here

// bearded_person Heracles, strength 20, dexterity 6
// lion Nemean Lion, strength 11, dexterity 13

const heracles = new Fighter('🧔 Heracles', 20, 6);
const lion = new Fighter('🦁 Nemean Lion', 11 , 13);
console.log(heracles.getStrength());
console.log(lion.getName());