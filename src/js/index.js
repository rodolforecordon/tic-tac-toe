let currentTurn = '';

const mainContainer = document.querySelector('#main-container');

mainContainer.addEventListener('click', (e) => {
  const elId = e.target.id;
  document.getElementById(elId).innerText = 'X';
})

function Player(name, mark) {
  const getName = () => name;
  const getMark = () => mark;  
}

//function Player