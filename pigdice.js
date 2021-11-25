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

function pigDiceGame() {
  const scores = [100, 0];

  console.log("게임이 시작되었습니다!\n");

  for (;;) {
    if (scores[0] >= 100) {
      return "플레이어 1 승리!";
    }
    if (scores[1] >= 100) {
      return "플레이어 2 승리!";
    }
  }
}

console.log(pigDiceGame());

// --------------------
