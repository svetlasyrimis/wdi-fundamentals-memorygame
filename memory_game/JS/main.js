
//Declare an array of four objects, our cards.
let cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png",
        isRevealed: false, //default state of each card 
        cardElement: undefined // placeholder cardElement for future use 
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png",
        isRevealed: false, //default state of each card 
        cardElement: undefined  // placeholder cardElement for future use 
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png",
        isRevealed: false,//default state of each card 
        cardElement: undefined  // placeholder cardElement for future use 
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png",
        isRevealed: false, //default state of each card 
        cardElement: undefined  // placeholder cardElement for future use 
    }
];

let cardsInPlay = []; //Declare an empty array in which we will store the cards that were flipped 
const backImageURL = "images/back.png"; //variable stored in the global space so it can be used by other functions

function createBoard() { //create the board with cards using DOM 
    for (var i = 0; i < cards.length; i++) { // for each object of the array 
        var cardElement = document.createElement('img'); // create an html element, an image and store it in a variable cardElement
        cardElement.setAttribute('src', backImageURL); // set an attribute of its back image that will be displayed to the user 
        cardElement.setAttribute('data-id', i); //set an attribute for current index of the card 
        cardElement.addEventListener('click', flipCard); //add event listener,when the cardElement is clicked,call flipCard function
        document.getElementById('game-board').appendChild(cardElement); // attach the cardElement(child) to the html game-board element 
        cards[i].cardElement = cardElement; // assign each object's property - cardElementto the element we just created
    }

}

function flipCard() {
    //create a variable that stores the index of each card 
    const cardId = this.getAttribute('data-id');
    //create a variable  that stores each card
    let currentCard = cards[cardId];
    //the following if statement will evaluate to true only ifRevealed is equal to false 
    //it will not allow to click it more than once and run checkForMatch function 
    //after isRevealed is assigned to true it will not pass the condition again 
    //therefore it's not gonna get added to the array 
    // !currentCard.isRevealed
    if (!currentCard.isRevealed) { 
        this.setAttribute('src', currentCard.cardImage);
        currentCard.isRevealed = true; // change its state to true 

        cardsInPlay.push(currentCard); // add it in the array
        // if the cardsInPlay length is even, call checkForMatch in 300 miliseconds
        if (cardsInPlay.length % 2 === 0) {

            setTimeout(checkForMatch, 300);
        }
    }
}

function checkForMatch() {
    let cardA = cardsInPlay[cardsInPlay.length - 2];
    let cardB = cardsInPlay[cardsInPlay.length - 1];
    if (cardA.rank === cardB.rank) {
        if (cards.length === cardsInPlay.length) {
            alert("Congratulations! You won the game. Click OK to reset.");
            for (let i = 0; i < cards.length; i++) {
                cards[i].cardElement.setAttribute('src', backImageURL);
                cards[i].isRevealed = false;
                cardsInPlay.pop();
            }
        } else {
            alert("You found a match!");
        }
    } else {
        cardA.isRevealed = false;
        cardA.cardElement.setAttribute('src', backImageURL);
        cardB.isRevealed = false;
        cardB.cardElement.setAttribute('src', backImageURL);
        cardsInPlay.pop();
        cardsInPlay.pop();
        alert("Sorry, try again.");
    }

}

createBoard();



