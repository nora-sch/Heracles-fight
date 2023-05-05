/* Fighter class definition */

const MAX_LIFE = 100;

class Fighter {
  #name;
  #strength;
  #dexterity;
  #life;
  constructor(name, strength, dexterity, life = MAX_LIFE) {
    this.#name = name;
    this.#strength = strength;
    this.#dexterity = dexterity;
    this.#life = life;
  }

  getName() {
    return this.#name;
  }
  setName(name) {
    this.#name = name;
  }
  getStrength() {
    return this.#strength;
  }
  setStrength(strength) {
    this.#strength = strength;
  }
  getDexterity() {
    return this.#dexterity;
  }
  setDexterity(dexterity) {
    this.#dexterity = dexterity;
  }
  getLife() {
    return this.#life;
  }
  setName(life) {
    this.#life = life;
  }
}

module.exports = {Fighter}