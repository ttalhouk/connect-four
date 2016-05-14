function Chip(x, player) {
  this.x = x;
  this.player = player;

  var checkBelow = function(board) {
    var checkedCell = board.cells[x + 7]
    if (checkedCell.occupied === false) {
      this.x = x + 7;
    }
  }
}
