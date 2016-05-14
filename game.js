function Game() {
  this.win = false;

  var gameBoard = new Board();

  var player1 = new Player("Kelson", "blue");
  var player2 = new Player("Talal", "red");

  // WHILE winner is not declared
  // Players take turns
  do {
    var playerTurns = 1
    if (playerTurns % 2 === 0) {
      // Player 1's turn
      var chosenColumn = prompt("Which column do you want to put a chip in?")
      var newChip = new Chip(parseInt(chosenColumn), player1)

      // If player 1 wins
      if (checkIfWon() === true) {
        this.win = true;
      }

      playerTurns++;

    } else if (playerTurns % 2 === 1) {
      // Player 2's turn

      // If player 2 wins
      if (checkIfWon() === true) {
        this.win = true;
      }

      playerTurns++;
    }
  }
  while (this.win === false)

  // Create how to win method
  this.checkIfWon = function() {

  }

  // Create pick a column method
  var chooseColumn = function(x) {

  }
}
