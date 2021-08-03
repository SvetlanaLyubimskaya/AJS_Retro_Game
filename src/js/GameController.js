// import GamePlay from './GamePlay';
import themes from './themes';
import { generateTeam } from './generators';
import cursors from './cursors';
import Team from './Team';
import PositionedCharacter from './PositionedCharacter';
import GameState from './GameState';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.initTheme = themes.prairie;
    this.cursors = cursors.pointer;
    this.currentMove = 'user';
    this.blockedBoard = false;
    this.playerTeam = [];
    this.computerTeam = [];
    this.level = 1;
    this.point = 0;
    this.playerPositions = [];
    this.computerPositions = [];
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService
    this.events();
    this.gameStart();
  }

  gameStart() {
    this.currentMove = 'user';
    if (this.level === 1) {
      this.playerTeam = Team.getStartPlayerTeam();
      this.computerTeam = generateTeam(Team.getComputerTeam(), 1, 2);
      this.setPositionCharacter(this.playerTeam, this.computerTeam);
    }

    const characterPositions = this.getPositions(this.playerPositions.length);
    for (let i = 0; i < this.playerPositions.length; i += 1) {
      this.playerPositions[i].position = characterPositions.player[i];
      this.computerPositions[i].position = characterPositions.computer[i];
    }
    this.gamePlay.drawUi(this.initTheme);
    this.gamePlay.redrawPositions([...this.playerPositions, ...this.computerPositions]);
  }

  setPositionCharacter(playerTeam, computerTeam) {
    for (let i = 0; i < playerTeam.length; i += 1) {
      this.playerPositions.push(new PositionedCharacter(playerTeam[i], 0));
    }
    for (let i = 0; i < computerTeam.length; i += 1) {
      this.computerPositions.push(new PositionedCharacter(computerTeam[i], 0));
    }
  }

  getPositions(length) {
    const position = { player: [], computer: [] };
    let random;
    for (let i = 0; i < length; i += 1) {
      do {
        random = this.randomPosition(0);
      } while (position.player.includes(random));
      position.player.push(random);

      do {
        random = this.randomPosition(7);
      } while (position.computer.includes(random));
      position.computer.push(random);
    }
    return position;
  }

  randomPosition(col) {
    this.col = col;
    return (this.col + (Math.floor(Math.random() * 8) * 8));
  }

  events() {
    this.gamePlay.addNewGameListener(this.newGame.bind(this));
    this.gamePlay.addSaveGameListener(this.saveGame.bind(this));
    this.gamePlay.addLoadGameListener(this.loadGame);
    this.gamePlay.addCellEnterListener(this.onCellEnter);
    this.gamePlay.addCellLeaveListener(this.onCellLeave);
    this.gamePlay.addCellClickListener(this.onCellClick);
  }

  newGame() {
    this.playerPositions = [];
    this.computerPositions = [];
    this.level = 1;
    this.point = 0;
    this.initTheme = themes.prairie;
    this.cursors = cursors.pointer;
    this.gameStart();
  }

  saveGame() {
    const playerLevel = {
      point: this.point,
      level: this.level,
      playerPositions: this.playerPositions,
      computerPositions: this.computerPositions,
    };
    this.stateService.save(GameState.from(playerLevel));
  }

  // eslint-disable-next-line class-methods-use-this
  onCellClick() {
    // TODO: react to click
  }

  onCellEnter(index) {
    // TODO: react to mouse enter
    this.gamePlay.showCellTooltip(index);
    this.gamePlay.setCursor(cursors.pointer);
  }

  onCellLeave(index) {
    // TODO: react to mouse leave
    this.gamePlay.hideCellTooltip(index);
    this.gamePlay.setCursor(cursors.pointer);
  }
}
