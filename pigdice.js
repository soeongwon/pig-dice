// Input Code

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.on("line", function (line) {
//   console.log("Hello Goorm! Your input is", line);
//   rl.close();
// }).on("close", function () {
//   process.exit();
// });

function getDiceValue() {
  return Math.floor(((Math.random() * 10) % 6) + 1);
}

function pigDiceGame() {
  let playerNum = 0;
  const scores = [0, 0];

  console.log("게임이 시작되었습니다!\n");

  for (;;) {
    if (scores[0] >= 100) {
      console.log("플레이어 1 승리!");
      return;
    }
    if (scores[1] >= 100) {
      console.log("플레이어 2 승리!");
      return;
    }

    console.log("====================================");
    console.log(`플레이어 ${playerNum + 1} 보드판`);
    console.log(`지금까지 총점: ${scores[playerNum]}점`);
    console.log(`1. 주사위 굴리기`);
    console.log(`2. 넘기기`);
    rl.on("line", function (line) {
      console.log("Hello Goorm! Your input is", line);
      rl.close();
    });

    break;
  }
}

pigDiceGame();

// --------------------
