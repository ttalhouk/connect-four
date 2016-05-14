function Game() {
  this.win = false;

  var gameBoard = new Board();
  this.renderBoard(gameBoard);
  var player1 = new Player("Kelson", "blue");
  var player2 = new Player("Talal", "red");

  // WHILE winner is not declared
  // Players take turns
    $("span").on('click', function(){
      chosenColumn = $(this).attr("id").parseInt()
      var playerTurns = 1
      if (playerTurns % 2 === 0) {
        var currentPlayer = player1
      } else {
        var currentPlayer = player2
      }
      playerTurns++;
      var newChip = new Chip(parseInt(chosenColumn), currentPlayer)
      var dropLocation = newChip.checkBelow(gameBoard)
      gameBoard[dropLocation] = new Cell(dropLocation, newChip)
      this.updateBoard(dropLocation, currentPlayer)
    })

  this.checkIfWon = function() {

  }

}

Game.prototype.renderBoard = function(){
  for(var i = 0; i < 7; i++){
    for(var j = 0; j < 6; j++){
      $("#board").append('<span id=' + (i+(j*7)) + '></span>');
    }
    $("span").last().after("</br>")
  }
}

Game.prototype.updateBoard = function(location, player){
  $("#"+ location).replace('<span id="' + player.color +'"></span>');
}

Game.prototype.chooseColumn = function(){
  $("div").on('click', function(){
    return $(this).attr("id");
  })
}


new Game()
