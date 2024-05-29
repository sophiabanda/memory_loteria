// ------ CONSTANTS -------------------------------------------------------------------
const cardOptions = [
  { img: 'css/assets/corazon.jpg', hidden: true },
  { img: 'css/assets/borracho.jpg', hidden: true },
  { img: 'css/assets/corazon.jpg', hidden: true },
  { img: 'css/assets/selena_cantante.jpg', hidden: true },
  { img: 'css/assets/gallo.jpg', hidden: true },
  { img: 'css/assets/gallo.jpg', hidden: true },
  { img: 'css/assets/luna.jpg', hidden: true },
  { img: 'css/assets/luna.jpg', hidden: true },
  { img: 'css/assets/nopal.jpg', hidden: true },
  { img: 'css/assets/escalera.jpg', hidden: true },
  { img: 'css/assets/borracho.jpg', hidden: true },
  { img: 'css/assets/paraguas.jpg', hidden: true },
  { img: 'css/assets/nopal.jpg', hidden: true },
  { img: 'css/assets/paraguas.jpg', hidden: true },
  { img: 'css/assets/selena_cantante.jpg', hidden: true },
  { img: 'css/assets/escalera.jpg', hidden: true },
  { img: 'css/assets/sandia.jpeg', hidden: true },
  { img: 'css/assets/sandia.jpeg', hidden: true },
];
const backOfCard = 'css/assets/mexican_blanket.jpg';
const salinas = new Audio('css/assets/selena.mp3');
const localSelena = 'http://127.0.0.1:5500/css/assets/selena_cantante.jpg';
const hostedSelena =
  'https://sophiabanda.github.io/memory_loteria/css/assets/selena_cantante.jpg';

// ------ STATE VARS (MODEL) -----------------------------------------------------------
let possibleMatches = cardOptions.length / 2;
let matchedCards;
let numOfGuesses;
let cardOne = null;
let cardTwo = null;

// ------ CACHED ELS -------------------------------------------------------------------
const cards = [...document.querySelectorAll('img')];
const container = document.getElementById('container');
const guessContainer = document.getElementById('guesses');
const bodyContainer = document.querySelector('body');
const h1 = document.querySelector('h1');
const button = document.querySelector('button');
let backgroundImage = document.querySelector('body');
const backgroundImageStyling =
  'linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url("css/assets/negative-space-bright-yellow-brick.jpg")';

// ------ EVENT LISTENERS --------------------------------------------------------------
cards.forEach((card) => {
  card.addEventListener('click', handleFlipSelection);
});

// ------ FUNCTIONS  -------------------------------------------------------------------
initialize();

function initialize() {
  matchedCards = 0;
  numOfGuesses = 9;
  guessContainer.innerText = `# of Guesses: ${numOfGuesses}`;
  shuffleCards();
  cardOptions.forEach((imgOption, idx) => {
    imgOption.id = idx;
    if (imgOption.hidden === true) {
      cards[idx].setAttribute('src', backOfCard);
    } else {
      cards[idx].setAttribute('src', imgOption.img);
    }
  });
}

function shuffleCards() {
  //Fisher-Yates sorting algo
  for (let i = cardOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardOptions[i], cardOptions[j]] = [cardOptions[j], cardOptions[i]];
  }
  return cardOptions;
}

function handleFlipSelection(event) {
  let clickedCardId = parseInt(event.target.id.slice(1));
  let foundCard = cardOptions.find((card) => card.id === clickedCardId);
  foundCard.hidden = false;
  cards[clickedCardId].src = foundCard.img;

  if (cardOne === null) {
    cardOne = cards[clickedCardId];
    cards[clickedCardId].classList.add('no-click');
  } else {
    cardTwo = cards[clickedCardId];
    cards[clickedCardId].classList.add('no-click');
  }
  compareChoices();
}

function compareChoices() {
  if (cardOne === null || cardTwo === null) {
    return;
  } else if (cardOne.src === cardTwo.src && cardOne.src === hostedSelena) {
    salinas.play();
    matchedCards++;
  } else if (cardOne.src === cardTwo.src) {
    matchedCards++;
  } else {
    cardOne.classList.remove('no-click');
    cardTwo.classList.remove('no-click');
    setTimeout(flipBack, 700);
  }
  setTimeout(clearCards, 701);
  setTimeout(checkForWin, 1005);
}

function flipBack() {
  cardOne.src = backOfCard;
  cardTwo.src = backOfCard;
  numOfGuesses--;
  guessContainer.innerText = `# of Guesses: ${numOfGuesses}`;
  if (numOfGuesses < 1) {
    loseGame();
  }
}

function clearCards() {
  cardOne = null;
  cardTwo = null;
}

function loseGame() {
  guessContainer.innerText = `Better luck next time😪`;
  cards.forEach((card) => {
    card.classList.add('animate__shakeX', 'animate__animated');
    card.classList.add('no-click');
  });
  guessContainer.style.setProperty('--animate-duration', '3s');
  guessContainer.classList.add('animate__animated', 'animate__hinge');

  setTimeout(clearLose, 5000);
}

function winGame() {
  bodyContainer.style.backgroundImage = 'url(css/assets/papel_picado.jpeg)';
  h1.style.color = 'fuchsia';
  h1.style.fontSize = '12vmin';
  h1.classList.add('animate__animated', 'animate__flip');
  h1.style.setProperty('--animate-duration', '4s');
  h1.innerText = 'Congratulations! YOU WIN!';
  cards.forEach((card) => {
    card.classList.add('animate__animated', 'animate__tada');
  });
  setTimeout(clearWin, 5000);
}

function checkForWin() {
  if (matchedCards === possibleMatches) {
    winGame();
  }
}

function clearWin() {
  backgroundImage.style.backgroundImage = backgroundImageStyling;
  h1.style.color = 'rgb(34, 35, 75)';
  h1.classList.remove('animate__animated', 'animate__flip');
  h1.innerText = 'Memory Lotería';
  cards.forEach((card) => {
    card.classList.remove('animate__hinge', 'animate__tada', 'no-click');
  });
  initialize(true);
}

function clearLose() {
  cards.forEach((card) => {
    card.classList.remove('animate__shakeX', 'animate__animated');
    card.classList.remove('no-click');
  });
  h1.classList.remove('animate__animated', 'animate__hinge');
  guessContainer.style.removeProperty('--animate-duration', '3s');
  guessContainer.classList.remove('animate__animated', 'animate__hinge');
  guessContainer.innerHTML = `# of Guesses: ${numOfGuesses}`;
  initialize(true);
}
