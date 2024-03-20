// ------ CONSTANTS -------------------------------------------------------------------
const cardOptions = [
  { img: '/css/assets/corazon.jpg', hidden: true },
  { img: '/css/assets/borracho.jpg', hidden: true },
  { img: '/css/assets/corazon.jpg', hidden: true },
  { img: '/css/assets/selena_cantante.jpg', hidden: true },
  { img: '/css/assets/gallo.jpg', hidden: true },
  { img: '/css/assets/luna.jpg', hidden: true },
  { img: '/css/assets/gallo.jpg', hidden: true },
  { img: '/css/assets/luna.jpg', hidden: true },
  { img: '/css/assets/nopal.jpg', hidden: true },
  { img: '/css/assets/escalera.jpg', hidden: true },
  { img: '/css/assets/borracho.jpg', hidden: true },
  { img: '/css/assets/paraguas.jpg', hidden: true },
  { img: '/css/assets/nopal.jpg', hidden: true },
  { img: '/css/assets/paraguas.jpg', hidden: true },
  { img: '/css/assets/selena_cantante.jpg', hidden: true },
  { img: '/css/assets/escalera.jpg', hidden: true },
  // each of the card options will be used twice and shuffled
];
const backOfCard = '/css/assets/mexican_blanket.jpg';
// console.log(cardOptions[5].img);

// ------ STATE VARS (MODEL) -----------------------------------------------------------
let cardOne = null;
let cardTwo = null;
let numOfGuesses;

// ------ CACHED ELS -------------------------------------------------------------------
const cards = [...document.querySelectorAll('img')];
const container = document.getElementById('container');
const guessContainer = document.getElementById('guesses');
let bodyContainer = document.querySelector('body');

// ------ EVENT LISTENERS --------------------------------------------------------------
cards.forEach((card) => {
  card.addEventListener('click', handleFlipSelection);
});

document
  .querySelector('button')
  .addEventListener('click', () => initialize(true));
// ------ FUNCTIONS  -------------------------------------------------------------------

initialize();

function initialize(reset) {
  numOfGuesses = 10;
  guessContainer.innerText = `# of Guesses: ${numOfGuesses}`;
  shuffleCards();
  if (reset) {
    shuffleCards();
    cards.hidden = true;
    cardOptions.forEach((imgOption, idx) => {
      cards[idx].setAttribute('src', backOfCard);
      cards[idx].classList.remove('no-click');
      cards[idx].classList.remove('fade-out');
    });
  } else {
    cardOptions.forEach((imgOption, idx) => {
      imgOption.id = idx;
      cards[idx].setAttribute('src', imgOption.img);
      if (imgOption.hidden === true) {
        cards[idx].setAttribute('src', backOfCard);
      } else {
        cards[idx].setAttribute('src', imgOption.img);
      }
    });
  }
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
  checkForWin();
}

function compareChoices() {
  if (cardOne === null || cardTwo === null) {
    return;
  } else if (cardOne.src === cardTwo.src) {
    console.log(`It's a celebration!`); // maybe as sound plays?
  } else {
    console.log(`No match!`); // maybe a sad sound plays
    cardOne.classList.remove('no-click');
    cardTwo.classList.remove('no-click');
    setTimeout(flipBack, 1000);
  }
  setTimeout(clearCards, 1003);
}

function flipBack() {
  console.log(`I just ran`);
  cardOne.src = backOfCard;
  cardTwo.src = backOfCard;
  numOfGuesses--;
  guessContainer.innerText = `# of Guesses: ${numOfGuesses}`;
  if (numOfGuesses < 1) {
    loseGame();
  }
}

function clearCards() {
  console.log(`I just ran`);

  cardOne = null;
  cardTwo = null;
}

function loseGame() {
  guessContainer.innerText = `Nooo... Would you like to try again?`;
  cards.forEach((card) => {
    card.classList.add('fade-out');
    card.classList.add('no-click');
  });
}

function checkForWin() {
  if (cardOptions.some((card) => card.hidden === true)) {
    return;
  } else {
    winGame();
  }
}

function winGame() {
  cards.forEach((card) => {
    card.classList.add('fade-out');
  });
  bodyContainer.classList.add('fade-in');
  bodyContainer.style.backgroundImage = 'url(css/assets/papel_picado.jpeg)';
  container.innerHTML = '<h1>YOU WON!!!</H1>';
}
