
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

// We use revealedCards in order to store and compare the last two flipped cards.
let revealedCards = [];  
const backImageURL = "images/back.png"; //variable stored in the global space so it can be used by other functions


// createBoard function handles the creation of the gameboard elements
function createBoard() { //create the board with cards using DOM 
    // Loop through the array and add all the cards to the game board
    for (var i = 0; i < cards.length; i++) { // for each object of the cards array 
        var cardElement = document.createElement('img'); // create an html element, an image and store it in a variable cardElement
        cardElement.setAttribute('src', backImageURL); // set its source attribute to card's back image that will be displayed to the user 
        cardElement.setAttribute('data-id', i); //set data-id attribute to the current index of the card 
        cardElement.addEventListener('click', flipCard); //add event listener,when the cardElement is clicked,call flipCard function
        document.getElementById('game-board').appendChild(cardElement); // attach the cardElement(child) to the html game-board element 
        cards[i].cardElement = cardElement; // assign each object's property - cardElement to the element we just created
    }

}

function flipCard() {
    //create a variable that stores the index of the clicked card 
    const cardId = this.getAttribute('data-id');
    //create a variable  that stores the clicked card object
    let currentCard = cards[cardId];
    //the following if statement will evaluate to true only ifRevealed is equal to false 
    //it will not allow the user to click a card more than once after it's been revealed. 
    //We want to prevent running the checkForMatch function on already revealed cards.
    // In order to do that, I am changing the flipped card's state to true 
    //
    // !currentCard.isRevealed
    if (!currentCard.isRevealed) {
        this.setAttribute('src', currentCard.cardImage); // flip the card to reveal it
        currentCard.isRevealed = true; // change its state to revealed

        revealedCards.push(currentCard); // add it in the array since it's a flipped card
        // I am running checkForMatch function only on the last two cards, therefore the number is even
        if (revealedCards.length % 2 === 0) {
            // I used setTimeout to prevent the alert from showing up before the second card is revealed.
            setTimeout(checkForMatch, 300);
        }
    }
}



// We are going to check and compare the last two cards and display the appropriate message to the user.
function checkForMatch() {
    // I declare two variables to store the last two flipped cards and compare them 
    // revealedCards will always increment by 2, so we can't hardcode the first and the second, we must compare the latest two cards in the array
    let cardA = revealedCards[revealedCards.length - 2];
    let cardB = revealedCards[revealedCards.length - 1];
    // The game dictates that we have to compare them by card rank 
    if (cardA.rank === cardB.rank) {
        // Found a match
        // The end game is when we have two matches and therefore revealedCards is equal to cards
        if (cards.length === revealedCards.length) {
            alert("Congratulations! You won the game. Click OK to reset.");
            // Reset the game board, card states, and empty revealed cards array
            for (let i = 0; i < cards.length; i++) {
                cards[i].cardElement.setAttribute('src', backImageURL);
                cards[i].isRevealed = false;
                revealedCards.pop();
            }
        } else {
            alert("You found a match!");
        }
    } else {
        // Since we didn't find a match we want to reverse the cards back to their flipped state and allow the user to play again 
        cardA.isRevealed = false;
        cardA.cardElement.setAttribute('src', backImageURL);
        cardB.isRevealed = false;
        cardB.cardElement.setAttribute('src', backImageURL);
        // these cards are no longer revealed, so they don't belong in revealedCards
        // I use revealedCards in order to determine the end game.
        revealedCards.pop();
        revealedCards.pop();
        alert("Sorry, try again.");
    }

}

createBoard();



