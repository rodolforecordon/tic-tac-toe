let currentTurn = '';

const mainContainer = document.querySelector('#main-container');

mainContainer.addEventListener('click', e => {
  const elId = e.target.id;
  document.getElementById(elId).innerText = 'X';
});

const mainDialog = document.querySelector('#main-dialog');
const startButton = document.querySelector('#confirm-btn');

startButton.addEventListener('click', e => {
  mainDialog.close();
});

// function Game
function Game() {
  
}

// function Player
function Player(name, color, marker) {
  const getName = () => name;
  const getColor = () => color;
  const getMark = () => marker;
}

