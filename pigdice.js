1. 플레이어 이름과 초기 점수(0) 데이터를 입력받는 변수


2. 누가 먼저 플레이 할건지 클릭하면 게임 스타트

3. start클릭시 1에서 6까지 랜덤으로 숫자 생성/ + 진행자 스코어에 더해줌

4. 숫자 1이 나오면 게임 종료 다른 참가자 게임 진행 / 스코어 0으로 변경

5. stop클릭시 다른 참가자 게임 진행/ 스코어 유지

6. 계속 진행하다 100이 나오면 게임 종료 / 축하 메세지
=======
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