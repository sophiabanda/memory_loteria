// CONSTANTS ///////////////////////////////////////////////////
const cardOptions = [
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
    {img: ''},
]


// STATE VARS (MODEL) //////////////////////////////////////////////////

let max_guesses;

// CACHED ELS //////////////////////////////////////////////////
const cards = [...document.querySelectorAll('img')];


// EVENT LISTENERS /////////////////////////////////////////////
// container.addEventListener('click', handleSelection)

// FUNCTIONS  //////////////////////////////////////////////////
initialize()

function initialize() {
    cards.forEach((card) => {
        card.setAttribute('src', '/css/images/mexican_blanket.jpeg')
        // card.setAttribute('src', '/css/images/textile.webp')
    })
    
    // reset all div/img's to back of card image
    // clear timer
    // reset # of guesses
     // cards are randomized
    // on start button click, all cards flip over for 1.5sec
    // card flipping/choosing is enabled

    // render timer
    // render # of guesses
    render();
}

function handleSelection(event) {
    console.log('click', event.target)
}

function compareChoices() {

}


function render() {
    handleSelection();
    compareChoices();
}



