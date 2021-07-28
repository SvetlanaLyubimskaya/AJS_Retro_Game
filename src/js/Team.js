import Bowman from './Characters/Bowman';
import Daemon from './Characters/Daemon';
import Magician from './Characters/Magician';
import Swordsman from './Characters/Swordsman';
import Undead from './Characters/Undead';
import Vampire from './Characters/Vampire';

export default class Team {
  static getStartPlayerTeam() {
    return [new Bowman(1), new Swordsman(1)];
  }

  static getPlayerTeam() {
    return [Magician, Bowman, Swordsman];
  }

  static getComputerTeam() {
    return [Daemon, Undead, Vampire];
  }
}
