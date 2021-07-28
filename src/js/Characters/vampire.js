import Character from '../Character';

export default class Vampire extends Character {
  constructor(level) {
    super(level);
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
    this.health = 100;
    this.type = 'vampire';
    this.distanse = 2;
    this.attackDistanse = 2;
  }
}
