import GamePlay from './GamePlay';
import themes from './themes';
import { characterGenerator, generateTeam } from './generators';
import cursors from './cursors';
import Team from './Team';
import GameState from './GameState';

export default class GameController {
  constructor(gamePlay, stateService) {
    this.gamePlay = gamePlay;
    this.stateService = stateService;
    this.initTheme = themes.prairie;
  }

  init() {
    // TODO: add event listeners to gamePlay events
    // TODO: load saved stated from stateService

    this.gamePlay.drawUi(this.initTheme);
    this.gamePlay.redrawPositions([...this.playerClasses, ...this.computerClasses]);

    this.gamePlay.addCellEnterListener(this.onCellEnter);
    this.gamePlay.addCellLeaveListener(this.onCellLeave);
    this.gamePlay.addCellClickListener(this.onCellClick);

    if (this.level === 1) {
      this.initTheme = themes.prairie;
    } else if (this.level === 2) {
      this.initTheme = themes.desert;
    } else if (this.level === 3) {
      this.initTheme = themes.arctic;
    } else if (this.level === 4) {
      this.initTheme = themes.mountain;
    }
  }

  onCellClick(index) {
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
