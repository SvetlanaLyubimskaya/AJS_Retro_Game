import Character from '../Character';

export default class Swordsman extends Character { // мечник
  constructor(level) {
    super(level);
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
    this.health = 100;
    this.type = 'swordsman';
    this.distanse = 4;
    this.attackDistanse = 1;
  }
}
