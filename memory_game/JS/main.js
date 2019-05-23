

let cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png",
        isRevealed: false
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png",
        isRevealed: false
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png",
        isRevealed: false
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png",
        isRevealed: false
    }
];

let cardsInPlay = [];

function createBoard() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src',"images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click',flipCard);
        document.getElementById('game-board').appendChild(cardElement); 
    }
    
}

function flipCard() {
    const cardId = this.getAttribute('data-id');

    cardsInPlay.push(cards[cardId].rank);
    
    this.setAttribute('src',cards[cardId].cardImage);
    console.log(cardsInPlay);
    if (cardsInPlay.length % 2 === 0) {
        checkForMatch();
    }
}

function checkForMatch() {
    if (cardsInPlay[cardsInPlay.length-2] === cardsInPlay[cardsInPlay.length-1]) {
        setTimeout(function(){
            alert("You found a match!");
        },300);
    } else {
        setTimeout(function() {
            alert("Sorry, try again.");
        },300);
    }

}

createBoard();



