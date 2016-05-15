$(document).ready(function(){

  function Game(){
    this.win = false;
    this.renderBoard();
    var gameBoard = new Board();
    var player1 = new Player("Player 1", "blue");
    var player2 = new Player("Player 2", "red");
    var playerTurns = 1
  // WHILE winner is not declared
  // Players take turns
  if (this.win == false){
    $("div").on('click','.cell', function(){
      if ($(this).attr('id') !== ('red' || 'blue')){
        chosenColumn(parseInt($(this).attr("id")))
      }
    })
  }
  var chosenColumn = function(column){
    if (playerTurns % 2 === 0) {
      var currentPlayer = player2
      var nextPlayer = player1
    } else {
      var currentPlayer = player1
      var nextPlayer = player2
    }
    playerTurns++;
    $("#player").text(nextPlayer.name +"'s turn").css("color", nextPlayer.color)
    var dropLocation = checkBelow(column, gameBoard)
    var newChip = new Chip(dropLocation, currentPlayer)
    gameBoard.cells[dropLocation] = new Cell(dropLocation, newChip)
    updateBoard(dropLocation, currentPlayer)
    var winner = checkWin(gameBoard)
    console.log(winner)
    if (winner){
      $("#player").text(currentPlayer.name + " Wins").css({'font-size':'48px', 'text-decoration':'blink', 'color': currentPlayer.color })
    }


    function checkBelow(col, board){
      while ((col + 7) < 42){
        var checkedCell = board.cells[col + 7]
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

    function checkWin(board){
      if (checkRow(board) || checkCol(board) || checkDiagonal(board)){
        return true
      }
      return false
    }
  }

  function checkRow(board){
    for(var y = 0; y < 6; y++ ){
      playerChip = null
      chipsInRow = 0
      for (var x = 0; x < 7; x++){
        cellChecked = board.cells[x + ( y * 7 )]
        if (cellChecked.occupied){
          if (playerChip == cellChecked.chip.player.name){
            chipsInRow++
            if (chipsInRow == 4){
              return true
            }
          } else {
            playerChip = cellChecked.chip.player.name
            chipsInRow = 1
          }
        }
      }
    }
    return false
  }

  function checkCol(board){
    for(var x = 0; x < 7; x++ ){
      playerChip = null
      chipsInRow = 0
      for (var y = 0; y < 6; y++){
        cellChecked = board.cells[x + ( y * 7 )]
        if (cellChecked.occupied){
          if (playerChip == cellChecked.chip.player.name){
            chipsInRow++
            if (chipsInRow == 4){
              return true
            }
          } else {
            playerChip = cellChecked.chip.player.name
            chipsInRow = 1
          }
        }
      }
    }
    return false
  }
  function checkDiagonal(board){
    playerChip = null
    chipsInRow = 0
    for(var x = 0; x < 21; x++ ){
      cellChecked = board.cells[x]
      if (cellChecked.occupied){
        if (x < 4 || x % 7 < 4){
          if (checkDiag(x, board, cellChecked.chip.player.name, 8)){
            return true
          }
        }
        if (x > 3 || x % 7 > 3){
          if (checkDiag(x, board, cellChecked.chip.player.name, 6)){
            return true
          }
        }
        function checkDiag(pos, board, player, increment){
          InRow = 1
          for(var checks = 0; checks < 3; checks++ ){
            pos += increment
            diagChecked = board.cells[pos]
            if (diagChecked.occupied && diagChecked.chip.player.name == player){
              InRow++
              if (InRow == 4){
                return true
              }
            }
          }
          return false
        }
      }
    }
    return false
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
