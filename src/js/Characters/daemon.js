import Character from '../Character';

export default class Daemon extends Character {
  constructor(name) {
    super(name);
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
    this.health = 100;
    this.type = 'daemon';
    this.distanse = 1;
    this.attackDistanse = 4;
  }
}