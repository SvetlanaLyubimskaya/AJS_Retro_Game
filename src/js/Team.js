import Bowman from './Characters/bowman';
import Daemon from './Characters/daemon';
import Magician from './Characters/magician';
import Swordman from './Characters/swordman';
import Undead from './Characters/undead';
import Vampire from './Characters/vampire';

export default class Team {
  constructor() {
    this.playerClasses = [Magician, Bowman, Swordman];
    this.computerClasses = [Daemon, Undead, Vampire];
  }
}
