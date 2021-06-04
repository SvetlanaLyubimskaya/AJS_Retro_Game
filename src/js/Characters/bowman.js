import Character from '../Character';

export default class Bowman extends Character { // лучник
  constructor(name) {
    super(name);
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
    this.health = 100;
    this.type = 'bowman';
    this.distanse = 2;
    this.attackDistanse = 2;
  }
}
