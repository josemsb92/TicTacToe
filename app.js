let score1;
let score2;
let player = 1;
let gameBoard = document.querySelector(".gameBoard");
let allBox = document.querySelectorAll(".cell");
let player1Score = document.querySelector("#player1Score");
let player2Score = document.querySelector("#player2Score");

//==================Functions===================
function resetAll() {
  score1 = 0;
  score2 = 0;
  player1Score.textContent = `Player X Games: ${score1}`;
  player2Score.textContent = `Player O Games: ${score2}`;
  let cell = [];
  for (let i = 0; i < 9; i++) {
    cell.push(`<button class="cell" id="cell${i + 1}"></button>`);
  }
  gameBoard.innerHTML = cell.join("");
  player = 1;

  allBox = document.querySelectorAll(".cell");

  allBox[0].addEventListener("click", setBox);
  allBox[1].addEventListener("click", setBox);
  allBox[2].addEventListener("click", setBox);
  allBox[3].addEventListener("click", setBox);
  allBox[4].addEventListener("click", setBox);
  allBox[5].addEventListener("click", setBox);
  allBox[6].addEventListener("click", setBox);
  allBox[7].addEventListener("click", setBox);
  allBox[8].addEventListener("click", setBox);
}

function playAgain() {
  player1Score.textContent = `Player X Games: ${score1}`;
  player2Score.textContent = `Player O Games: ${score2}`;
  let cell = [];
  for (let i = 0; i < 9; i++) {
    cell.push(`<button class="cell" id="cell${i + 1}"></button>`);
  }
  gameBoard.innerHTML = cell.join("");
  player = 1;

  allBox = document.querySelectorAll(".cell");

  allBox[0].addEventListener("click", setBox);
  allBox[1].addEventListener("click", setBox);
  allBox[2].addEventListener("click", setBox);
  allBox[3].addEventListener("click", setBox);
  allBox[4].addEventListener("click", setBox);
  allBox[5].addEventListener("click", setBox);
  allBox[6].addEventListener("click", setBox);
  allBox[7].addEventListener("click", setBox);
  allBox[8].addEventListener("click", setBox);
}

resetAll();

function winnerTemplate() {
  let winnerImgPlayer1 = document.createElement("div");
  winnerImgPlayer1.innerHTML = '<img src="./img/player1win.png">';
  let winnerImgPlayer2 = document.createElement("div");
  winnerImgPlayer2.innerHTML = '<img src="./img/player2win.png">';
  gameBoard.innerHTML = "";
  if (player === 2) {
    gameBoard.appendChild(winnerImgPlayer1);
  } else if (player === 1) {
    gameBoard.appendChild(winnerImgPlayer2);
  }

  let startAgainButton = document.createElement("div");
  startAgainButton.innerHTML =
    '<button id="startAgainButton">Play Again</button>';
  gameBoard.appendChild(startAgainButton);
}

function youWin() {
  if (
    allBox[0].textContent == "X" &&
    allBox[1].textContent == "X" &&
    allBox[2].textContent == "X"
  ) {
    winnerTemplate();
    startAgainButton.addEventListener("click", playAgain);
    return true;
  } else if (
    allBox[0].textContent == "O" &&
    allBox[1].textContent == "O" &&
    allBox[2].textContent == "O"
  ) {
    winnerTemplate();
    startAgainButton.addEventListener("click", playAgain);
    return true;
  }
  if (
    allBox[3].textContent == "X" &&
    allBox[4].textContent == "X" &&
    allBox[5].textContent == "X"
  ) {
    winnerTemplate();
    startAgainButton.addEventListener("click", playAgain);
    return true;
  } else if (
    allBox[3].textContent == "O" &&
    allBox[4].textContent == "O" &&
    allBox[5].textContent == "O"
  ) {
    winnerTemplate();
    startAgainButton.addEventListener("click", playAgain);
    return true;
  }
  if (
    allBox[6].textContent == "X" &&
    allBox[7].textContent == "X" &&
    allBox[8].textContent == "X"
  ) {
    winnerTemplate();
    startAgainButton.addEventListener("click", playAgain);
    return true;
  } else if (
    allBox[6].textContent == "O" &&
    allBox[7].textContent == "O" &&
    allBox[8].textContent == "O"
  ) {
    winnerTemplate();
    startAgainButton.addEventListener("click", playAgain);
    return true;
  }
  if (
    allBox[0].textContent == "X" &&
    allBox[3].textContent == "X" &&
    allBox[6].textContent == "X"
  ) {
    winnerTemplate();
    startAgainButton.addEventListener("click", playAgain);
    return true;
  } else if (
    allBox[0].textContent == "O" &&
    allBox[3].textContent == "O" &&
    allBox[6].textContent == "O"
  ) {
    winnerTemplate();
    startAgainButton.addEventListener("click", playAgain);
    return true;
  }
  if (
    allBox[1].textContent == "X" &&
    allBox[4].textContent == "X" &&
    allBox[7].textContent == "X"
  ) {
    winnerTemplate();
    startAgainButton.addEventListener("click", playAgain);
    return true;
  } else if (
    allBox[1].textContent == "O" &&
    allBox[4].textContent == "O" &&
    allBox[7].textContent == "O"
  ) {
    winnerTemplate();
    startAgainButton.addEventListener("click", playAgain);
    return true;
  }
  if (
    allBox[2].textContent == "X" &&
    allBox[5].textContent == "X" &&
    allBox[8].textContent == "X"
  ) {
    winnerTemplate();
    startAgainButton.addEventListener("click", playAgain);
    return true;
  } else if (
    allBox[2].textContent == "O" &&
    allBox[5].textContent == "O" &&
    allBox[8].textContent == "O"
  ) {
    winnerTemplate();
    startAgainButton.addEventListener("click", playAgain);
    return true;
  }
  if (
    allBox[0].textContent == "X" &&
    allBox[4].textContent == "X" &&
    allBox[8].textContent == "X"
  ) {
    winnerTemplate();
    startAgainButton.addEventListener("click", playAgain);
    return true;
  } else if (
    allBox[0].textContent == "O" &&
    allBox[4].textContent == "O" &&
    allBox[8].textContent == "O"
  ) {
    winnerTemplate();
    startAgainButton.addEventListener("click", playAgain);
    return true;
  }
  if (
    allBox[2].textContent == "X" &&
    allBox[4].textContent == "X" &&
    allBox[6].textContent == "X"
  ) {
    winnerTemplate();
    startAgainButton.addEventListener("click", playAgain);
    return true;
  } else if (
    allBox[2].textContent == "O" &&
    allBox[4].textContent == "O" &&
    allBox[6].textContent == "O"
  ) {
    winnerTemplate();
    startAgainButton.addEventListener("click", playAgain);
    return true;
  }
}

function setBox() {
  console.log(player);
  if (player == 1) {
    if (this.innerHTML == "") {
      this.innerHTML = "X";
      player = 2;
    }
  } else if (player == 2) {
    if (this.innerHTML == "") {
      this.innerHTML = "O";
      player = 1;
    }
  }
  youWin();

  if (youWin() && player == 2) {
    score1++;
  } else if (youWin() && player == 1) {
    score2++;
  }
}

//================GAME BOARD =================

//================Controls====================
let controls = document.querySelector(".controls");
let buttonResetInit = (controls.innerHTML =
  '<button id="resetButton">RESET</button>');
let buttonReset = document.querySelector("#resetButton");

//==================Events======================

buttonReset.addEventListener("click", resetAll);
