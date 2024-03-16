// CONSTANTS ///////////////////////////////////////////////////
const cardOptions = [
  { img: '/css/images/corazon.jpg' },
  { img: '/css/images/borracho.jpg' },
  { img: '/css/images/corazon.jpg' },
  { img: '/css/images/selena_cantante.jpg' },
  { img: '/css/images/gallo.jpg' },
  { img: '/css/images/luna.jpg' },
  { img: '/css/images/gallo.jpg' },
  { img: '/css/images/luna.jpg' },
  { img: '/css/images/nopal.jpg' },
  { img: '/css/images/escalera.jpg' },
  { img: '/css/images/borracho.jpg' },
  { img: '/css/images/paraguas.jpg' },
  { img: '/css/images/nopal.jpg' },
  { img: '/css/images/paraguas.jpg' },
  { img: '/css/images/selena_cantante.jpg' },
  { img: '/css/images/escalera.jpg' },
  // each of the card options will be used twice and shuffled
  // so there needs to be two of each in order to not modify the original object
];
// console.log(cardOptions)

const backOfCard = '/css/images/mexican_blanket.jpeg';

// STATE VARS (MODEL) //////////////////////////////////////////////////
let shuffledCards; //array of 16 shuffled cards

// CACHED ELS //////////////////////////////////////////////////
const cards = [...document.querySelectorAll('img')];

// EVENT LISTENERS /////////////////////////////////////////////

// FUNCTIONS  //////////////////////////////////////////////////
initialize();
// reset all div/img's to back of card image
// clear timer
// reset # of guesses
// cards are randomized
// on start button click, all cards flip over for 1.5sec
// card flipping/choosing is enabled

// render timer
// render # of guesses

function initialize() {
  shuffleCards();
  cardOptions.forEach((imgOption, idx) => {
    cards[idx].setAttribute('src', imgOption.img);
    // is there a way to set the alt att dynamically, too?
  });

  render();
}

function shuffleCards() {
  //Fisher-Yates sorting algo
  for (let i = cardOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardOptions[i], cardOptions[j]] = [cardOptions[j], cardOptions[i]];
  }
  return cardOptions;
}

function handleSelection(event) {
  console.log(event.target.id);
}

function compareChoices() {}

function render() {
  // handleSelection();
  compareChoices();
}
