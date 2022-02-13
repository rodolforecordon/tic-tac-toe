const mainDialog = document.querySelector('#main-dialog');
const startButton = document.querySelector('#confirm-btn');

startButton.addEventListener('click', e => {
  gameStart();
  mainDialog.close();
});

// Start Game
const gameStart = () => {
  // player creator
  const player = (playerNum) => {
    const name = () => document.querySelector(`#player${playerNum}-name`).value;
    const color = () => document.querySelector(`#player${playerNum}-color`).value;
    const marker = () => document.querySelector(`#player${playerNum}-marker`).value;
    const markedCells = [];
    const setMarkedCells = cellId => markedCells.push(cellId)
    const getMarkedCells = () => markedCells;

    return { name, color, marker, setMarkedCells, getMarkedCells };
  }
  
  const player1 = player('1');
  const player2 = player('2');

  let currentTurn = player1;
  changeTurn('#main-container', 'div', player1.color());

  // game play
  const mainContainer = document.querySelector('#main-container');
  
  mainContainer.addEventListener('click', e => {
    const elId = e.target.id;
    const element = document.getElementById(elId);

    if(currentTurn === player1 && !element.innerText) {
      element.innerText = player1.marker();
      player1.setMarkedCells(elId);
      currentTurn = player2;
      changeTurn('#main-container', 'div', player2.color());
    } else if(currentTurn === player2 && !element.innerText) {
      element.innerText = player2.marker();
      player2.setMarkedCells(elId);
      currentTurn = player1;
      changeTurn('#main-container', 'div', player1.color());
    }

    const status = gameStatus(currentTurn === player1 ? player2 : player1);

    if (status.winStatus) {
      win(currentTurn === player1 ? player2 : player1);
    } else if (!status.winStatus && status.numberOfPlays === 9) {
      draw();
    }
  });

  // game play functions
  function changeTurn(id, elements, color) {
    const els = document.querySelectorAll(`${id} ${elements}`);
    els.forEach(el => {
      el.style.boxShadow = `inset 0 0 5rem 0px var(--${color})`;
      el.style.textShadow = `0 0 3rem var(--${color})`;
    })
  };

  function gameStatus(player) {
    const markedCells = player.getMarkedCells();
    
    const winStatus = (
      (markedCells.includes('sq-1') && markedCells.includes('sq-2') && markedCells.includes('sq-3')) ||
      (markedCells.includes('sq-4') && markedCells.includes('sq-5') && markedCells.includes('sq-6')) ||
      (markedCells.includes('sq-7') && markedCells.includes('sq-8') && markedCells.includes('sq-9')) ||
      (markedCells.includes('sq-1') && markedCells.includes('sq-4') && markedCells.includes('sq-7')) ||
      (markedCells.includes('sq-2') && markedCells.includes('sq-5') && markedCells.includes('sq-8')) ||
      (markedCells.includes('sq-3') && markedCells.includes('sq-6') && markedCells.includes('sq-9')) ||
      (markedCells.includes('sq-1') && markedCells.includes('sq-5') && markedCells.includes('sq-9')) ||
      (markedCells.includes('sq-3') && markedCells.includes('sq-5') && markedCells.includes('sq-7'))
    );
    
    const numberOfPlays = player1.getMarkedCells().concat(player2.getMarkedCells()).length;

    return { winStatus, numberOfPlays };
  }

  function win(player) {
    alert(`${player.name()} is the winner!!!`)
  }

  function draw() {
    alert(`It's a draw!!!`);
  }
};

// Change color when player chooses it in dialog
mainDialog.addEventListener('click', e => {
  const el = e.target;
  
  if(el.id === 'player1-color') {
    document.querySelector('#player1-div label').style.color = `var(--${e.target.value})`;
    document.querySelector('#player1-div input').style.background = `var(--${e.target.value})`;
    const selectors = document.querySelectorAll('#player1-div select');
    selectors.forEach(sel => sel.style.background = `var(--${e.target.value})`);

  } else if(el.id === 'player2-color') {
    document.querySelector('#player2-div label').style.color = `var(--${e.target.value})`;
    document.querySelector('#player2-div input').style.background = `var(--${e.target.value})`;
    const selectors = document.querySelectorAll('#player2-div select');
    selectors.forEach(sel => sel.style.background = `var(--${e.target.value})`);
  }
});
