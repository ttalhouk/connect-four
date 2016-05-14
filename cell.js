function Cell(x, chip) {
  // Assigning chip to Cell
  if (chip !== null) {
    this.occupied = true;
    this.chip = chip;
  } else {
    this.occupied = false;
  }

  // Assigning Coords for Cell
  this.x = x;
}

