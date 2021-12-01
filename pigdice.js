'use strict';

let currentScore, totalScore, activePlayer, playerName, playing;

const message = () => {
  console.log('----------------------------------');
  console.log(`score : ${currentScore}`);
  console.log(`this turn is ${playerName}`);
  console.log(`total - player1 : ${totalScore[1]} / player2 : ${totalScore[0]} `);
  console.log('1. roll dice / 2. hold / 3. exit');
  console.log('----------------------------------');
}

const init = () => {
  totalScore = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playerName = 'player1';
  playing = true;
  console.log('!! pig dice game start !!');
  message();
}

init();

const rollDice = () => {
  if(playing) {
    const diceNum = Math.floor(Math.random() * 6) + 1;
    if(diceNum != 1) {
      currentScore += diceNum;
      message();
      if(currentScore >= 100) {
        endGame();
      }
    } else {
      switchPlayer();
    }
  }
}

const switchPlayer = () => {
  if (playing) {
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerName = playerName === 'player1' ? 'player2' : 'player1';
    totalScore[activePlayer] += currentScore;
    currentScore = 0;
    message();
    if (totalScore[activePlayer] >= 100) {
      endGame();
    }
  } else {
    switchPlayer();
  }
}

const endGame = () => {
  playerName = activePlayer === 0 ? 'player2' : 'player1';
  console.log(`${playerName} is win!!`);
  playing = false;
  rl.close();
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  if(line == '3') {
    console.log('bye 👋');
    rl.close();
  }else if(line == '2') {
    switchPlayer();
  }else if(line == '1') {
    rollDice();
  }else {
    console.log('plz check the number 🤔');
  }
}).on("close", function () {
  process.exit();
});


