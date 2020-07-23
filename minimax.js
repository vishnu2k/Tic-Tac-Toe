// Tic Tac Toe AI with Minimax Algorithm
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/154-tic-tac-toe-minimax.html
// https://youtu.be/I64-UTORVfU
// https://editor.p5js.org/codingtrain/sketches/0zyUhZdJD
let lvl=8;
function bestMove() {
  if(checkWinner()==null){
    // AI to make its turn
  let bestScore = -Infinity;
  let move;
  let l=0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // Is the spot available?
      if (board[i][j] == '' && l<lvl) {
        l=l+1;
        board[i][j] = ai;
        let score = minimax(board, 0, false,-Infinity,Infinity);
        board[i][j] = '';
        if (score > bestScore) {
          bestScore = score;
          move = { i, j };
        }
      }
    }
  }
  board[move.i][move.j] = ai;
  currentPlayer = human;}
}

let scores = {
  X: 10,
  O: -10,
  tie: 0
};

function minimax(board, depth, isMaximizing,alpha,beta) {
  let result = checkWinner();
  if (result !== null) {
    return scores[result];
  }

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot available?
        if (board[i][j] == '') {
          board[i][j] = ai;
          let score = minimax(board, depth + 1, false,alpha,beta);
          board[i][j] = '';
          bestScore = max(score, bestScore);
          alpha=max(alpha,bestScore);
          if(beta<=alpha){
            break;
          }
        }
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Is the spot available?
        if (board[i][j] == '') {
          board[i][j] = human;
          let score = minimax(board, depth + 1, true,alpha,beta);
          board[i][j] = '';
          bestScore = min(score, bestScore);
          beta=min(beta,bestScore);
          if(beta<=alpha){
            break;
          }
        }
      }
    }
    return bestScore;
  }
}
