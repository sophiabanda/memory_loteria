# Welcome to Memory Lotería! 🎉

### **Description:**

This browser game of Concentration is inspired by a game from my childhood,
Mexican Lotería. I created this game with a data-centric approach, and while it has not reached its full
optimisation, in its current state it is easily scalable and able to be updated with more images and functions.

### **How to play:**

Once the page has loaded, the game can begin! Start by clicking on one card, then another.
If they are a match, they will remain upright so that you can select another two cards. If they do not match,
they will quickly flip back over, and you will need to do your best to remember the cards locations in order
to create more matches. For each incorrect match you lose one point. If you achieve all available matches, you win!

### **To add more cards:**

- Add your image link to the cardOptions array twice
- Add another 2 img elements to the HTML (or as many as you've added)

_*Play now at [Memory Lotería](https://sophiabanda.github.io/memory_loteria/)*_

Favicon donated by [Freepik](https://www.flaticon.com/free-icons/mexico")

Animation made easy with Animate.css @ Animate.style

#### Screen capture of the header with custom "Sombrero Light" font, available at: [Font.Download](https://font.download/font/sombrero#google_vignette)

![A screen capture of the loaded game; yellow brick background, several mexican blanket cards, bold mexican style font](/css/assets/site_screenshot.png 'Screen cap of Memory Loteria')

#### Screen capture of a couple lotería cards face-up:

![A screen capture of some of the available mexican lotería cards face up](/css/assets/cards_screencap.png 'Screen cap of Memory Loteria')

#### Carbon Code Share

I loved how easy it was to dynamically set the indexes of the card in order for the game logic to function, regardless of how many cards you choose to add in the future. I am also a big fan of the Fisher-Yates alorithm - it made shuffling smooth and easy.

![A screen capture of the initialize function](/css/assets/loteria-carbon.png 'Screen cap of the initialize and fisher-yates functions')

### **Technologies Used**

![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)
![HTML5](https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=html5)  
![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git)
![Github](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github)
![VSCode](https://img.shields.io/badge/-VS_Code-05122A?style=flat&logo=visualstudio)

### _*Upcoming Features*_

- Refactor of comparison data
- Timer functionality
- Improvements to win and lose animation
