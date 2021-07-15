import Bowman from './Characters/bowman';
import Daemon from './Characters/daemon';
import Magician from './Characters/magician';
import Swordsman from './Characters/swordsman';
import Undead from './Characters/undead';
import Vampire from './Characters/vampire';

export default class Team {
  constructor() {
    this.player = [Magician, Bowman, Swordsman];
    this.computer = [Daemon, Undead, Vampire];
  }

  // getPlayerTeam() {
  //   return [Magician, Bowman, Swordsman];
  // }

  // getComputerTeam() {
  //   return [Daemon, Undead, Vampire];
  // }
}
