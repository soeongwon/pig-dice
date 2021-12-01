const players = [
  { name: '', score: 0},
  { name: '', score:0}
];

const curPlayer = 1,
      gameOver = flase;

players[0].name = prompt('your name, player #1:').toUpperCase();
players[1].name = prempt('your name, player #2:').toUpperCase();

function roll() {return 1 + Math.floor(Math.random()*6)}

function round(player) {
  const curSum = 0,
        quit = false,
        dice;
  alert(`it's ${palyer.name}'s turn (${player.score})`);
  while (!quit) {
    dice = roll();
    if (dice == 1) {
      alert('you roll a 1.')
      quit = true;
    } else {
      curSum += dice;
      quit = !confirm(`you roll a ${dice} (sum: ${curSum}).\n roll agin?`);
      if (quit) {
        player.score += curSum;
        if (player.score >= 100) gameOver = true;
      }
    }
  }
}

//main
while (!gameOver) {
  if (curPlayer == 0) curPlayer = 1; else curPlayer = 0;
  rond(players[curPlayer]);
  if (gameOver) alert(`${players[curPlayer].name} wins (${players[curPlayer].score})`);
}