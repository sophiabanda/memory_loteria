// CONSTANTS ///////////////////////////////////////////////////
const cardOptions = [
    {img: '/css/images/borracho.jpg'},    
    {img: '/css/images/corazon.jpg'},    
    {img: '/css/images/gallo.jpg'},    
    {img: '/css/images/luna.jpg'},    
    {img: '/css/images/nopal.jpg'},    
    {img: '/css/images/paraguas.jpg'},    
    {img: '/css/images/selena_cantante.jpg'},    
    {img: '/css/images/borracho.jpg'},    
    {img: '/css/images/corazon.jpg'},    
    {img: '/css/images/gallo.jpg'},    
    {img: '/css/images/luna.jpg'},    
    {img: '/css/images/nopal.jpg'},    
    {img: '/css/images/paraguas.jpg'},    
    {img: '/css/images/selena_cantante.jpg'},    
// each of the card options will be used twice and shuffled
// so there needs to be two of each in order to not modify the original object
]

console.log(cardOptions)

const backOfCard = '/css/images/mexican_blanket.jpeg'

// STATE VARS (MODEL) //////////////////////////////////////////////////
let shuffledCards; //array of 16 shuffled cards  

// CACHED ELS //////////////////////////////////////////////////
const cards = [...document.querySelectorAll('img')];
console.log('cards =>',cards)

// EVENT LISTENERS /////////////////////////////////////////////


// FUNCTIONS  //////////////////////////////////////////////////
initialize()
// reset all div/img's to back of card image
// clear timer
// reset # of guesses
 // cards are randomized
// on start button click, all cards flip over for 1.5sec
// card flipping/choosing is enabled

// render timer
// render # of guesses

function initialize() {
    const imageOption = cardOptions.map((img) => {
        console.log('img', img)
        cards.forEach((card, idx) => {
            console.log(img, idx)
            card.setAttribute('src', img.img)
        })
    })
    shuffleCards()
    render();
}

function shuffleCards() {

    // const shuffle = Math.floor(Math.random() * cardOptions.length);
    // console.log('shuffle =>', shuffle)
    // cardOptions.forEach((card, idx) => {
    //     console.log('card =>',card,'idx', idx)
    //     cards.forEach((setCard) => {
    //         setCard.setAttribute('src', cardOptions.idx[shuffle])
    //     })
    // })
}

// function handleSelection(event) {
//     console.log(event)
// }

function compareChoices() {

}


function render() {
    // handleSelection();
    compareChoices();
}



