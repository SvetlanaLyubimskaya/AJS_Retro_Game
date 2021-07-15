import Character from '../Character';

export default class Swordsman extends Character { // мечник
  constructor(name) {
    super(name);
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
    this.health = 100;
    this.type = 'swordsman';
    this.distanse = 4;
    this.attackDistanse = 1;
  }
}
