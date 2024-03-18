// CONSTANTS ///////////////////////////////////////////////////
const cardOptions = [
  { img: '/css/images/corazon.jpg', hidden: false },
  { img: '/css/images/borracho.jpg', hidden: false },
  { img: '/css/images/corazon.jpg', hidden: false },
  { img: '/css/images/selena_cantante.jpg', hidden: false },
  { img: '/css/images/gallo.jpg', hidden: false },
  { img: '/css/images/luna.jpg', hidden: false },
  { img: '/css/images/gallo.jpg', hidden: false },
  { img: '/css/images/luna.jpg', hidden: false },
  { img: '/css/images/nopal.jpg', hidden: false },
  { img: '/css/images/escalera.jpg', hidden: false },
  { img: '/css/images/borracho.jpg', hidden: false },
  { img: '/css/images/paraguas.jpg', hidden: false },
  { img: '/css/images/nopal.jpg', hidden: false },
  { img: '/css/images/paraguas.jpg', hidden: false },
  { img: '/css/images/selena_cantante.jpg', hidden: false },
  { img: '/css/images/escalera.jpg', hidden: false },
  // each of the card options will be used twice and shuffled
];
const backOfCard = '/css/images/mexican_blanket.jpg';
// console.log(cardOptions[5].img);

// STATE VARS (MODEL) //////////////////////////////////////////////////
let cardOne = null;
let cardTwo = null;

// CACHED ELS //////////////////////////////////////////////////
const cards = [...document.querySelectorAll('img')];
const container = document.getElementById('container');

// EVENT LISTENERS /////////////////////////////////////////////
container.addEventListener('click', handleSelection);

// FUNCTIONS  //////////////////////////////////////////////////
// initialize();
// reset all div/img's to back of card image
// clear timer
// reset # of guesses
// cards are randomized
// on start button click, all cards flip over for 1.5sec
// card flipping/choosing is enabled

// render timer
// render # of guesses
initialize();

function initialize() {
  cardOptions.forEach((card) => {
    card.hidden === true;
  });
  shuffleCards();
  cardOptions.forEach((imgOption, idx) => {
    cards[idx].setAttribute('src', imgOption.img);
    if (cards.hidden === true) {
      cards.setAttribute('src', backOfCard);
    }
    console.log('imgOp', imgOption, 'idx', idx);
    // is there a way to set the alt att dynamically, too?
  });
  handleSelection();
}

// function startGame() {}

function shuffleCards() {
  //Fisher-Yates sorting algo
  for (let i = cardOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardOptions[i], cardOptions[j]] = [cardOptions[j], cardOptions[i]];
  }
  return cardOptions;
}

function handleSelection(event) {
  if (event.target.tagName !== 'IMG') return;
  // console.log(event.target.id);
  // console.log(event.target.src);

  if (cardOne === null) {
    cardOne = event.target.src;
  } else {
    cardTwo = event.target.src;
    compareChoices();
  }
  // console.log('one=>', cardOne, 'two=>', cardTwo);

  // when card is chosen
  // set card to first choice
  // on next click, set card to second choice
  // comapre two choices

  // if a card is chosen, you can only choose
  // one other card before they either
  // stay up bc they are the same
  // flip back because they are different
  // decrement guess allotment
}

function compareChoices() {
  if (cardOne === cardTwo) {
    // console.log('Match!');
  } else {
    // console.log('No match!');

    cardOne === null && cardTwo === null;
  }
  // console.log('one=>', cardOne, 'two=>', cardTwo);

  clearCards();
  // change class or property to hidden or not
}

function clearCards() {
  cardOne = null;
  cardTwo = null;
}

function render() {}

render();
