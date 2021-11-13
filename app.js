let score1;
let score2;
let singleGame = false;
let multiplayerGame = false;
let player;
let winner;
let gameBoard = document.querySelector(".gameBoard");
let allBox = document.querySelectorAll(".cell");
let player1Score = document.querySelector("#player1Score");
let player2Score = document.querySelector("#player2Score");
let playerTurn = document.querySelector(".playerTurn");
let controls = document.querySelector(".controls");
let buttonResetInit = (controls.innerHTML =
  '<button id="resetButton">RESET</button>');
let buttonReset = document.querySelector("#resetButton");
let scoreBoard = document.querySelector(".scoreBoard");
let singlePlayerButton = document.querySelector("#single");
let multiplayerButton = document.querySelector("#multiplayer");
let chooseMode = document.querySelector(".chooseMode");
gameBoard.style.display = "none";
scoreBoard.style.display = "none";
playerTurn.style.display = "none";
//===========================Functions============================
multiplayerButton.addEventListener("click", function () {
  multiplayerGame = true;
  setGame();
});

singlePlayerButton.addEventListener("click", function () {
  singleGame = true;
  setGame();
});
//Sets the board Game onces chosen the game mode, depending on if you have chosen Single Player or Multiplayer will sets a board with diferents eventListeners.
function setGame() {
  player = 1;
  chooseMode.style.display = "none";
  gameBoard.style.display = "flex";
  scoreBoard.style.display = "flex";
  playerTurn.style.display = "flex";
  let cell = [];
  for (let i = 0; i < 9; i++) {
    cell.push(`<button class="cell" id="cell${i + 1}"></button>`);
  }

  gameBoard.innerHTML = cell.join("");
  player = 1;
  allBox = document.querySelectorAll(".cell");
  
  if (singleGame) {
    allBox[0].addEventListener("click", setboxIA);
    allBox[1].addEventListener("click", setboxIA);
    allBox[2].addEventListener("click", setboxIA);
    allBox[3].addEventListener("click", setboxIA);
    allBox[4].addEventListener("click", setboxIA);
    allBox[5].addEventListener("click", setboxIA);
    allBox[6].addEventListener("click", setboxIA);
    allBox[7].addEventListener("click", setboxIA);
    allBox[8].addEventListener("click", setboxIA);

    score1 = 0;
    score2 = 0;

    player1Score.textContent = `Player X Games: ${score1}`;
    player2Score.textContent = `Player O Games: ${score2}`;

    playerTurn.innerHTML = "<p>YOUR TURN</p>";
  } else {
    allBox[0].addEventListener("click", setBox);
    allBox[1].addEventListener("click", setBox);
    allBox[2].addEventListener("click", setBox);
    allBox[3].addEventListener("click", setBox);
    allBox[4].addEventListener("click", setBox);
    allBox[5].addEventListener("click", setBox);
    allBox[6].addEventListener("click", setBox);
    allBox[7].addEventListener("click", setBox);
    allBox[8].addEventListener("click", setBox);

    score1 = 0;
    score2 = 0;

    player1Score.textContent = `Player X Games: ${score1}`;
    player2Score.textContent = `Player O Games: ${score2}`;

    playerTurn.innerHTML = "<p>Player X Turn</p>";
  }
}

//Brings back the game mode screen and sets all values by default
function resetGame() {
  player = 1;
  singleGame = false;
  multiplayerGame = false;
  chooseMode.style.display = "flex";
  gameBoard.style.display = "none";
  scoreBoard.style.display = "none";
  playerTurn.style.display = "none";
}
buttonReset.addEventListener("click", resetGame);


//Keeps the score and set the board again for the same game mode you chose in the Start Screen
function playAgain() {
  if (singleGame) {
    player1Score.textContent = `Player X Games: ${score1}`;
    player2Score.textContent = `Player O Games: ${score2}`;
    let cell = [];
    for (let i = 0; i < 9; i++) {
      cell.push(`<button class="cell" id="cell${i + 1}"></button>`);
    }
    gameBoard.innerHTML = cell.join("");
    player = 1;

    allBox = document.querySelectorAll(".cell");

    allBox[0].addEventListener("click", setboxIA);
    allBox[1].addEventListener("click", setboxIA);
    allBox[2].addEventListener("click", setboxIA);
    allBox[3].addEventListener("click", setboxIA);
    allBox[4].addEventListener("click", setboxIA);
    allBox[5].addEventListener("click", setboxIA);
    allBox[6].addEventListener("click", setboxIA);
    allBox[7].addEventListener("click", setboxIA);
    allBox[8].addEventListener("click", setboxIA);
    playerTurn.innerHTML = "<p>YOUR TURN</p>";
  } else {
    player1Score.textContent = `Player X Games: ${score1}`;
    player2Score.textContent = `Player O Games: ${score2}`;
    let cell = [];
    for (let i = 0; i < 9; i++) {
      cell.push(`<button class="cell" id="cell${i + 1}"></button>`);
    }
    gameBoard.innerHTML = cell.join("");
    if (player === 1) {
      player = 1;
      playerTurn.innerHTML = "<p>Player X Turn</p>";
    } else if (player === 2) {
      player = 2;
      playerTurn.innerHTML = "<p>Player O Turn</p>";
    }
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
}


//If somebody wins, winner variable will pass the value to this function and depending on the value, will brings the winner screen for the winner player.
function winnerTemplate(winnerValue) {
  gameBoard.innerHTML = "";
  playerTurn.innerHTML = "";
  let winnerImgPlayer1 = document.createElement("div");
  winnerImgPlayer1.classList.add("winner");
  winnerImgPlayer1.innerHTML = "<p id=winnerX>Player X has Win!</p>";
  let winnerImgPlayer2 = document.createElement("div");
  winnerImgPlayer2.classList.add("winner");
  winnerImgPlayer2.innerHTML = "<p id=winnerO>Player O has Win!</p>";

  if (winnerValue === 1) {
    score1++;
    gameBoard.appendChild(winnerImgPlayer1);
  } else if (winnerValue === 2) {
    score2++;
    gameBoard.appendChild(winnerImgPlayer2);
  }
  player1Score.textContent = `Player X Games: ${score1}`;
  player2Score.textContent = `Player O Games: ${score2}`;

  let startAgainButton = document.createElement("div");
  startAgainButton.innerHTML =
    '<button id="startAgainButton">Play Again</button>';
  gameBoard.appendChild(startAgainButton);
}
//Check if somebody wins, if there is a line with X or O will pass the winner value to winnerTemplate()
function youWin() {
  if (
    allBox[0].textContent === "X" &&
    allBox[1].textContent === "X" &&
    allBox[2].textContent === "X"
  ) {
    winner = 1;
    console.log(winner);
    winnerTemplate(winner);
    startAgainButton.addEventListener("click", playAgain);
    return true;
  } else if (
    allBox[0].textContent === "O" &&
    allBox[1].textContent === "O" &&
    allBox[2].textContent === "O"
  ) {
    winner = 2;
    winnerTemplate(winner);
    startAgainButton.addEventListener("click", playAgain);
    return true;
  }
  if (
    allBox[3].textContent === "X" &&
    allBox[4].textContent === "X" &&
    allBox[5].textContent === "X"
  ) {
    winner = 1;
    winnerTemplate(winner);
    startAgainButton.addEventListener("click", playAgain);
    return true;
  } else if (
    allBox[3].textContent === "O" &&
    allBox[4].textContent === "O" &&
    allBox[5].textContent === "O"
  ) {
    winner = 2;
    winnerTemplate(winner);
    startAgainButton.addEventListener("click", playAgain);
    return true;
  }
  if (
    allBox[6].textContent === "X" &&
    allBox[7].textContent === "X" &&
    allBox[8].textContent === "X"
  ) {
    winner = 1;
    winnerTemplate(winner);
    startAgainButton.addEventListener("click", playAgain);
    return true;
  } else if (
    allBox[6].textContent === "O" &&
    allBox[7].textContent === "O" &&
    allBox[8].textContent === "O"
  ) {
    winner = 2;
    winnerTemplate(winner);
    startAgainButton.addEventListener("click", playAgain);
    return true;
  }
  if (
    allBox[0].textContent === "X" &&
    allBox[3].textContent === "X" &&
    allBox[6].textContent === "X"
  ) {
    winner = 1;
    winnerTemplate(winner);
    startAgainButton.addEventListener("click", playAgain);
    return true;
  } else if (
    allBox[0].textContent === "O" &&
    allBox[3].textContent === "O" &&
    allBox[6].textContent === "O"
  ) {
    winner = 2;
    winnerTemplate(winner);
    startAgainButton.addEventListener("click", playAgain);
    return true;
  }
  if (
    allBox[1].textContent === "X" &&
    allBox[4].textContent === "X" &&
    allBox[7].textContent === "X"
  ) {
    winner = 1;
    winnerTemplate(winner);
    startAgainButton.addEventListener("click", playAgain);
    return true;
  } else if (
    allBox[1].textContent === "O" &&
    allBox[4].textContent === "O" &&
    allBox[7].textContent === "O"
  ) {
    winner = 2;
    winnerTemplate(winner);
    startAgainButton.addEventListener("click", playAgain);
    return true;
  }
  if (
    allBox[2].textContent === "X" &&
    allBox[5].textContent === "X" &&
    allBox[8].textContent === "X"
  ) {
    winner = 1;
    winnerTemplate(winner);
    startAgainButton.addEventListener("click", playAgain);
    return true;
  } else if (
    allBox[2].textContent === "O" &&
    allBox[5].textContent === "O" &&
    allBox[8].textContent === "O"
  ) {
    winner = 2;
    winnerTemplate(winner);
    startAgainButton.addEventListener("click", playAgain);
    return true;
  }
  if (
    allBox[0].textContent === "X" &&
    allBox[4].textContent === "X" &&
    allBox[8].textContent === "X"
  ) {
    winner = 1;
    winnerTemplate(winner);
    startAgainButton.addEventListener("click", playAgain);
    return true;
  } else if (
    allBox[0].textContent === "O" &&
    allBox[4].textContent === "O" &&
    allBox[8].textContent === "O"
  ) {
    winner = 2;
    winnerTemplate(winner);
    startAgainButton.addEventListener("click", playAgain);
    return true;
  }
  if (
    allBox[2].textContent === "X" &&
    allBox[4].textContent === "X" &&
    allBox[6].textContent === "X"
  ) {
    winner = 1;
    winnerTemplate(winner);
    startAgainButton.addEventListener("click", playAgain);
    return true;
  } else if (
    allBox[2].textContent === "O" &&
    allBox[4].textContent === "O" &&
    allBox[6].textContent === "O"
  ) {
    winner = 2;
    winnerTemplate(winner);
    startAgainButton.addEventListener("click", playAgain);
    return true;
  }
}
//This will show the player turn, also will control if the button pressed has already some content and if it hasn't, will set an X or O depending on player turn.
//After checks if somebody wins.
function setBox() {
  if (player === 2) {
    playerTurn.innerHTML = "<p>Player X Turn</p>";
  } else if (player === 1) {
    playerTurn.innerHTML = "<p>Player O Turn</p>";
  }
  if (player === 1) {
    if (this.innerHTML === "") {
      this.className += " xColor";
      this.innerHTML = "X";
      player = 2;
    }
  } else if (player === 2) {
    if (this.innerHTML === "") {
      this.className += " oColor";
      this.innerHTML = "O";
      player = 1;
    }
  }
  youWin();
}
//This will check if the box is empty, if so will add a class to it and an X, then will check randomly other empty box and will set a O for the IAplayer.
//If there is not empty spaces and no one wins, brings a Tie screen
function setboxIA() {
  if (this.innerHTML === "") {
    this.className += " xColor";
    this.innerHTML = "X";

    player = 2;
    let iaSelect = allBox[Math.floor(Math.random() * 8)];
    while (iaSelect.innerHTML != "") {
      for (let i = 0; i < allBox.length; i++) {
        if (allBox[i].innerHTML === "") {
          iaSelect = allBox[i];
          break;
        }
      }
      if (iaSelect.innerHTML != "") {
        break;
      }
    }

    if (iaSelect.innerHTML === "") {
      iaSelect.className += " oColor";
      iaSelect.innerHTML = "O";

      player = 1;
    }
    function isFull() {
      let full = true;
      for (element of allBox) {
        if (element.innerHTML == "") {
          full = false;
          return full;
        }
      }
      return full;
    }
    if (isFull()) {
      gameBoard.innerHTML = "";
      playerTurn.innerHTML = "";
      let tie = document.createElement("div");
      tie.classList.add("tie");
      tie.innerHTML = "<p id=tie>You both TIE!</p>";
      gameBoard.appendChild(tie);
      let startAgainButton = document.createElement("div");
      startAgainButton.innerHTML =
        '<button id="startAgainButton">Play Again</button>';
      gameBoard.appendChild(startAgainButton);
      startAgainButton.addEventListener("click", playAgain);
    }
  }
  youWin();
}


