// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardfour = "king";

let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

// let cardOne = cards[0];
// cardsInPlay.push(cardOne);
// let cardTwo = cards[2];
// cardsInPlay.push(cardTwo);

// console.log("User flipped " + "the " +  cardOne + "!");
// console.log("User flipped " + "the " + cardTwo + "!");

// let cardOne = cards[0];
// cardsInPlay.push(cardOne);
// let cardTwo = cards[2];
//     cardsInPlay.push(cardTwo);
function checkForMatch() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
}

function flipCard(cardId) {
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
    // console.log("User flipped " + cards[cardId]);
}

flipCard(0);
flipCard(2);





// if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
//     alert("You found a match");
// } else {
//     alert("Sorry,try again.")
// }
// var cardThree = "king";
// var cardfour = "king";
