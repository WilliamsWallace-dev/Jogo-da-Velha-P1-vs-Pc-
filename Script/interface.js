document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("start").addEventListener("click", startGame);
});

function startGame() {
  document.getElementById("game").innerHTML = ` <div class="container">
                                                            <div id="0" class="square"></div>
                                                            <div id="1" class="square"></div>
                                                            <div id="2" class="square"></div>
                                                        </div>

                                                        <div class="container">
                                                            <div id="3" class="square"></div>
                                                            <div id="4" class="square"></div>
                                                            <div id="5" class="square"></div>
                                                        </div>

                                                        <div class="container">
                                                            <div id="6" class="square"></div>
                                                            <div id="7" class="square"></div>
                                                            <div id="8" class="square"></div>
                                                        </div>
                                                        <div id = "buttonRestart"></div>`;

  /* Vamos definir se o primeiro jogar é o PC */
  //intrução colocada fora do clickUpdate para quando iniciar a partida, antes do jogador clicar
  //já veja, onde o pc preencheu.

  if (setPlayer) pcPlayer();

  let squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", clickUpdate);
  });
}

/* Função que dita a vez de cada jogador */
function clickUpdate(evento) {
  let square = evento.target;

  if (!setPlayer) {
    if (player1(square)) {
      setTimeout(pcPlayer, 700);
    }
  } else setTimeout(pcPlayer, 700);
}

/* Reinicia o jogo ao final de cada partida */
function restartGame(evento) {
  document.getElementById(
    "containerHeader",
  ).innerHTML = `<h1>Jogo Da Velha</h1>`;
  document.getElementById("buttonRestart").innerHTML = ``;
  let squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", clickUpdate);
    square.innerHTML = ``;
  });
  board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  setPlayer = parseInt(Math.random() * 2);
  symbolPlayer = ["Iron_Man", "Captain_America"];
  winner = " ";
  rounds = 1;
  if (setPlayer) pcPlayer();
}

/* Função que processa a jogada após o click */
function player1(square) {
  let position = square.id;
  let player = symbolPlayer[setPlayer];

  if (updateBoard(position)) {
    square.innerHTML = `<div id = "squareFilled" class = '${player}'></div>`;
    if (defWinner()) {
      if (winner === "EMPATE") {
        document.getElementById(
          "containerHeader",
        ).innerHTML = `<h1>Jogo Da Velha</h1><h2>${winner}!</h2>`;
        document.getElementById(
          "buttonRestart",
        ).innerHTML = `<button id="restart" class="controlRestart">RECOMEÇAR</button>`;
      } else {
        document.getElementById(
          "containerHeader",
        ).innerHTML = `<h1>Jogo Da Velha</h1><h2>${winner} é o GANHADOR!</h2>`;
        document.getElementById(
          "buttonRestart",
        ).innerHTML = `<button id="restart" class="controlRestart">RECOMEÇAR</button>`;
        let squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
          square.removeEventListener("click", clickUpdate);
        });
      }
      document.getElementById("restart").addEventListener("click", restartGame);
      return 0;
    }
    return 1;
  } else {
    alert("Escolha outro campo");
    return 0;
  }
}

/* função que processa a jogada do PC, após escolhida a posição a ser preenchida */
function jogoDaVelha(position) {
  let squares = document.querySelectorAll(".square");
  let square = squares[position];
  let player = symbolPlayer[setPlayer];

  if (updateBoard(position)) {
    square.innerHTML = `<div id = "squareFilled" class = '${player}'></div>`;
    if (defWinner()) {
      if (winner === "EMPATE") {
        document.getElementById(
          "containerHeader",
        ).innerHTML = `<h1>Jogo Da Velha</h1><h2>${winner}!</h2>`;
        document.getElementById(
          "buttonRestart",
        ).innerHTML = `<button id="restart" class="controlRestart">RECOMEÇAR</button>`;
      } else {
        document.getElementById(
          "containerHeader",
        ).innerHTML = `<h1>Jogo Da Velha</h1><h2>${winner} é o GANHADOR!</h2>`;
        document.getElementById(
          "buttonRestart",
        ).innerHTML = `<button id="restart" class="controlRestart">RECOMEÇAR</button>`;
        let squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
          square.removeEventListener("click", clickUpdate);
        });
      }
      document.getElementById("restart").addEventListener("click", restartGame);
    }
  } else pcPlayer();
}
