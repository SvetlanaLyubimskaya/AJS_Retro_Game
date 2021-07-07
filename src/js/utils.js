export function calcTileType(index, boardSize) {
  // TODO: write logic here
  if (index === 0) { // 0
    return 'top-left';
  }

  if (index === boardSize - 1) { // 7
    return 'top-right';
  }

  if (index < boardSize) { // <8
    return 'top';
  }

  if (index === boardSize * (boardSize - 1)) { // 56
    return 'bottom-left';
  }

  if (index === boardSize * boardSize - 1) { // 63
    return 'bottom-right';
  }

  if (index > boardSize * (boardSize - 1)) { // >56
    return 'bottom';
  }

  if (index % boardSize === boardSize - 1) { // остаток 7
    return 'right';
  }

  if (index % boardSize === 0) { // кратны 8
    return 'left';
  }

  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}
