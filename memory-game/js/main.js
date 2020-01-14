let cardsInPlay = [];
let cardOne = [0];

function flipCard (cardId){
	call(flipCard[0]);
	call(flipCard[2]);
	console.log("Up and running!");
	let cards = ['queen', 'queen', 'king', 'king'];
	console.log("User flipped" + cards[cardId])
}

cardsInPlay.push(cards[cardId]);

function checkForMatch (){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}