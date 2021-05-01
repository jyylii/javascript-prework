
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');


const buttonClicked = function(playerMove) {
  clearMessages();
  console.log('ruch gracza to: ' + playerMove);
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('wylosowana liczba to: ' + randomNumber);
  const computerMove = getMoveName(randomNumber);
  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}

function getMoveName(MoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + MoveId);
  if (MoveId === 1) return 'kamień';
  else if (MoveId === 2) return 'papier';
  else if (MoveId === 3) return 'nożyce';
}


function displayResult(PlayerMove, ComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + PlayerMove + ', ' + ComputerMove);
  if ((PlayerMove == 'papier' && ComputerMove == 'kamień') || (PlayerMove == 'kamień' && ComputerMove == 'nożyce') || (PlayerMove == 'nożyce' && ComputerMove == 'papier')) {
    printMessage('Wygrywasz!');
  } 
  else if (PlayerMove == ComputerMove) {
    printMessage('Remis');
  }
  else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + ComputerMove + ', a Ty ' + PlayerMove);
}


buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
