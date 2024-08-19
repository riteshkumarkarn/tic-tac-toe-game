let turn = "X";
let turnChangeAudio = new Audio("assets/ting.mp3");
let winAudio = new Audio("assets/gameover.mp3");

//Change Turn
let inputTurn = () => {
  return turn === "X" ? "O" : "X";
};

//Checking for Win
let boxes = document.getElementsByClassName("smallBox");
let wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const checkWin = () => {
  wins.forEach((e) => {
    if (
      boxes[e[0]].innerText === boxes[e[1]].innerText &&
      boxes[e[2]].innerText === boxes[e[1]].innerText &&
      boxes[e[0]].innerText !== ""
    ) {
      document.querySelector("#turnInfo").innerText =
        boxes[e[0]].innerText + " Wins";
      document.querySelector(".winImg").classList.add("winGIF");
      winAudio.play();
      turnChangeAudio.pause();
    }
  });
};

//Game logic
for (let box of boxes) {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      box.innerText = turn;
      turn = inputTurn();
      turnChangeAudio.play();
      document.getElementById("turnInfo").innerText = "Turn of " + turn;
      checkWin();
    }
  });
}

//Reset
resetbtn = document.querySelector(".reset");
resetbtn.addEventListener("click", () => {
  for (let box of boxes) {
    box.innerText = "";
  }
  turn = "X";
  document.getElementById("turnInfo").innerText = "Turn of " + turn;
  document.querySelector(".winImg").classList.remove("winGIF");
});
