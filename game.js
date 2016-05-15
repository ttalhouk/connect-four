$(document).ready(function(){

  function Game(){
    this.win = false;
    this.renderBoard();
    var gameBoard = new Board();
    var player1 = new Player("Kelson", "blue");
    var player2 = new Player("Talal", "red");
    var playerTurns = 1
  // WHILE winner is not declared
  // Players take turns
  $("div").on('click','.cell', function(){
    if ($(this).attr('id') !== ('red' || 'blue')){
      chosenColumn(parseInt($(this).attr("id")))
    }
  })


  var chosenColumn = function(column){
    if (playerTurns % 2 === 0) {
      var currentPlayer = player1
    } else {
      var currentPlayer = player2
    }
    playerTurns++;
    console.log(playerTurns)
    var dropLocation = checkBelow(column, gameBoard)
    console.log(dropLocation)
    var newChip = new Chip(dropLocation, currentPlayer)
    gameBoard[dropLocation] = new Cell(dropLocation, newChip)
    console.log(gameBoard)

    updateBoard(dropLocation, currentPlayer)

    function checkBelow(col, board){
      while ((col + 7) < 42){
        var checkedCell = board.cells[col + 7]
        console.log(checkedCell.occupied)
        if (checkedCell.occupied === false){
          col += 7;
        } else {
          return col;
        }

      }
      return col
    }

  function updateBoard(location, player){
      $("#"+ location).replaceWith('<div id=' + player.color +'></div>');
    }
  }
}


Game.prototype.renderBoard = function(){
  for(var i = 0; i < 6; i++){
    for(var j = 0; j < 7; j++){

      $("#board").append("<div class='cell' id=" + (j+(i*7)) + "></div>");
    }
    $("div").last().after("</br>")
  }
}


new Game()
});