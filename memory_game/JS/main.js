let cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"

    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
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
function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        window.alert("You found a match!");
    } else {
        alert("Sorry, try again.");
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    // console.log("User flipped " + cards[cardId].rank);
    // console.log(cards[cardId].cardImage);
    // console.log(cards[cardId].suit)
    cardsInPlay.push(cards[cardId].rank);
        this.setAttribute('src',cards[cardId].cardImage);
    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
}



createBoard();


