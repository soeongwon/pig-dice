const readline = require("readline-sync");

function getDiceValue() {
  return Math.floor(((Math.random() * 10) % 6) + 1);
}

function endGameCheck(scores) {
  if (scores[0] >= 100) {
    console.log("플레이어 1 승리!");
    return true;
  }
  if (scores[1] >= 100) {
    console.log("플레이어 2 승리!");
    return true;
  }

  return false;
}

async function pigDiceGame() {
  let playerNum = 0;
  let diceValue = 0;
  let tmpScore = 0;
  const scores = [0, 0];

  console.log("게임이 시작되었습니다!\n");

  loop1: for (;;) {
    console.log("\n====================================");
    console.log(`플레이어 ${playerNum + 1} 보드판`);
    console.log(`지금까지 총점: ${scores[playerNum]}점`);
    console.log(`1. 주사위 굴리기`);
    console.log(`2. 넘기기`);
    const input = readline.question("");
    if (input == 1) {
      diceValue = getDiceValue();
      console.log(`나온 주사위의 눈은 ${diceValue}입니다!`);
      if (diceValue === 1) {
        console.log("이번 라운드에서 얻은 점수를 모두 잃었습니다ㅠㅠ");
        console.log("턴을 넘깁니다!");
        tmpScore = 0;
        playerNum = playerNum === 0 ? 1 : 0;
      } else {
        tmpScore = tmpScore + diceValue;
        console.log(`나온 주사위 값을 지금까지 얻은 점수에 합산합니다!`);
        console.log(`현재 라운드에 얻은 총점은 ${tmpScore}점 입니다.`);
      }
      continue loop1;
    } else {
      scores[playerNum] = scores[playerNum] + tmpScore;
      console.log(
        `플레이어 ${playerNum + 1}이 얻은 총점은 ${scores[playerNum]}입니다!`
      );
      console.log("턴을 넘깁니다!");
      tmpScore = 0;
      playerNum = playerNum === 0 ? 1 : 0;
    }

    if (endGameCheck(scores)) return;
  }
}

pigDiceGame();
