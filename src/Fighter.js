/* Fighter class definition */

const MAX_LIFE = 100;

class Fighter {
  #name;
  #strength;
  #dexterity;
  #life;
  constructor(name, strength, dexterity) {
    this.#name = name;
    this.#strength = strength;
    this.#dexterity = dexterity;
    this.#life = MAX_LIFE;
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
  setLife(life) {
    this.#life = life;
  }

  fight(defender) {
    let fighterStrengthToUse = Math.round(Math.random() * this.#strength);
    console.log(`${this.#name} 🗡️  ${defender.getName()} with  ${fighterStrengthToUse} : ${defender.getDexterity()}`);
    let defenderDexterity = defender.getDexterity();

    if ((fighterStrengthToUse > defenderDexterity) && this.#life > 0 && defender.getLife() > 0) {
        if((defender.getLife()-(fighterStrengthToUse-defenderDexterity))>=0){
        defender.setLife(defender.getLife()-(fighterStrengthToUse-defenderDexterity));
        
        if(defender.getLife()===0) {
            console.log(`${this.#name} wins ${defender.getName()} ${defender.getName()==='🧔 Heracles' ? '🧡' : '🖤'}  ${defender.getLife()}  - END OF THE GAME - ${defender.getName()} is dead!`);}
            else{console.log(`${this.#name} wins ${defender.getName()} ${defender.getName()==='🧔 Heracles' ? '🧡' : '🖤'}  ${defender.getLife()}`);}
         }else{
            defender.setLife(0);
            console.log(`${this.#name} wins ${defender.getName()} ${defender.getName()==='🧔 Heracles' ? '🧡' : '🖤'}  ${defender.getLife()}  - END OF THE GAME - ${defender.getName()} is dead!`);
        }
    }else{
        console.log(`${this.#name} can't attack - ${this.#name} ${this.#name ==='🧔 Heracles' ? '🧡' : '🖤'}  ${this.#life} : ${defender.getName()} ${defender.getName()==='🧔 Heracles' ? '🧡' : '🖤'}  ${defender.getLife()}`);
    }

  
  }
}

module.exports = { Fighter };
