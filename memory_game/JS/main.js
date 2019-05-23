

let cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png",
        isRevealed: false,
        cardElement: undefined
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png",
        isRevealed: false,
        cardElement: undefined
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png",
        isRevealed: false,
        cardElement: undefined
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png",
        isRevealed: false,
        cardElement: undefined
    }
];

let cardsInPlay = [];
const backImageURL = "images/back.png";
function createBoard() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', backImageURL);
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
        cards[i].cardElement = cardElement;
    }

}

function flipCard() {
    const cardId = this.getAttribute('data-id');
    let currentCard = cards[cardId];
    if (!currentCard.isRevealed) {
        this.setAttribute('src', currentCard.cardImage);
        currentCard.isRevealed = true;

        cardsInPlay.push(currentCard);

        console.log(cardsInPlay);
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



