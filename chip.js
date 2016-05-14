function Chip(x, player) {
  this.x = x;
  this.player = player
}

Chip.prototype.checkBelow = (function(board){
    var checkedCell = board.cells[this.x + 7]
    if (checkedCell.occupied === false || (this.x + 7) > 41) {
      this.x += 7;
    } else {
      return this.x;
    }
    checkBelow(board);
})

Chip.prototype.checkColor = (function(){
  this.player.color;
})

