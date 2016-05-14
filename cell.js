function Cell(x, y, player) {
  // Assigning Player to Cell
  if (player !== null) {
    this.occupied = true;
    this.player = player;
  } else {
    this.occupied = false;
  }

  // Assigning Coords for Cell
  this.x = x;
  this.y = y;
}

