// ------ CONSTANTS -------------------------------------------------------------------
const cardOptions = [
  { img: '/css/images/corazon.jpg', hidden: true },
  { img: '/css/images/borracho.jpg', hidden: true },
  { img: '/css/images/corazon.jpg', hidden: true },
  { img: '/css/images/selena_cantante.jpg', hidden: true },
  { img: '/css/images/gallo.jpg', hidden: true },
  { img: '/css/images/luna.jpg', hidden: true },
  { img: '/css/images/gallo.jpg', hidden: true },
  { img: '/css/images/luna.jpg', hidden: true },
  { img: '/css/images/nopal.jpg', hidden: true },
  { img: '/css/images/escalera.jpg', hidden: true },
  { img: '/css/images/borracho.jpg', hidden: true },
  { img: '/css/images/paraguas.jpg', hidden: true },
  { img: '/css/images/nopal.jpg', hidden: true },
  { img: '/css/images/paraguas.jpg', hidden: true },
  { img: '/css/images/selena_cantante.jpg', hidden: true },
  { img: '/css/images/escalera.jpg', hidden: true },
  // each of the card options will be used twice and shuffled
];
const backOfCard = '/css/images/mexican_blanket.jpg';
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

// ------ FUNCTIONS  -------------------------------------------------------------------

initialize();

function initialize() {
  numOfGuesses = 6;
  guessContainer.innerText = `# of Guesses: ${numOfGuesses}`;
  shuffleCards();
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

function startGame() {
  //start timer
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
  // console.log('clickedCardId=>', clickedCardId, 'foundCard=>', foundCard);
  console.log('cardOne=>', cardOne, 'cardTwo=>', cardTwo);
  compareChoices();
}

function compareChoices() {
  if (cardOne === null || cardTwo === null) {
    return;
  } else if (cardOne.src === cardTwo.src) {
    console.log(`It's a celebration!`); // maybe as sound plays?
  } else {
    console.log(`No match!`); // maybe a sad sound plays
    setTimeout(flipBack, 1000);
    cardOne.classList.remove('no-click');
    cardTwo.classList.remove('no-click');
  }
  setTimeout(clearCards, 1150);
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
  guessContainer.innerText = `Nooo... Would you like to try again?`;
  cards.forEach((card) => {
    card.classList.add('fade-out');
  });
}

function winGame() {
  cards.forEach((card) => {
    card.classList.add('fade-out');
  });
  bodyContainer.classList.add('fade-in');
  bodyContainer.style.backgroundImage = 'url(css/images/papel_picado.jpeg)';
  container.innerHTML = '<h1>YOU WON!!!</H1>';
}
