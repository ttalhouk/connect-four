function Board() {
  this.cells = [];
  this.columns = 7;
  this.rows = 6;

  for (var k = 0; k < this.rows; k++) {
    for (var j = 0; j < this.columns; j++) {
      var newCell = new Cell((k*7)+j, null);
      this.cells.push(newCell);
    }
  }
}

