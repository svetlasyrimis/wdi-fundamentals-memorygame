// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardfour = "king";

let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);
let cardTwo = cards[2];
cardsInPlay.push(cardTwo);

console.log("User flipped " + "the " +  cardOne + "!");
console.log("User flipped " + "the " + cardTwo + "!");

if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match");
} else {
    alert("Sorry,try again.")
}
// var cardThree = "king";
// var cardfour = "king";
