//use an array to store positions and values.
//[[0,0,0],[0,0,0],][0,0,0]]


var Board = function () {
  this.board = [0,0,0,0,0,0,0,0,0];
  this.player1 = true;
  this.instructions = () => {
    console.log('instructions');
    console.log(this.board);  
  }
  this.move = (num) => {
    if(num > 0 && num < 10){
      if(this.player1){
        this.board[num-1] = 'x'
        this.printBoard;
        this.checkWinner(1);
      } else {
        this.board[num-1] = 'o'
        this.printBoard;
        this.checkWinner(0);
      }
    } else {
      console.log('please enter a number between 1 and 9');
    }  
  }
  this.printBoard = () =>{
    //takes this.board and makes it look like a board
    //also prints out a reminder of the positions
  }
  this.checkWinner = (player) => {
    //checks if player has won the game
    var piece = player ? 'x': 'o';
    var winner = 0;
    var name = player ? 'Player 1' : 'Player 2';
    if(this.board[0]===this.board[1]===this.board[2]===piece||this.board[0]===this.board[3]===this.board[6]===piece||this.board[0]===this.board[4]===this.board[8]===piece||this.board[1]===this.board[4]===this.board[7]===piece||this.board[2]===this.board[4]===this.board[6]===piece||this.board[2]===this.board[5]===this.board[8]===piece||this.board[3]===this.board[4]===this.board[5]===piece||this.board[6]===this.board[7]===this.board[8]===piece){
      winner = 1;
    }
    if(winner){
      console.log(name+' wins!');
    } else {
      this.player1 = !this.player1;
      let turn = player ? 'Player 2' : 'Player 1';
      console.log('It is '+turn+'\'s turn');
    }
      //if they have it prints out the winner 
       //prompts if they want another game
      //if not it presents the name of the next player and sets this.player1 to opposite
  }
}

var game = new Board();