console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [];
var playerNames = ['Harry', 'Ron', 'Hermoine', 'Dumblydore'];
for (let i = 0; i < playerNames.length; i++) {
  var currentPlayer = {};
  currentPlayer.name = playerNames[i];
  currentPlayer.hand = [];
  players.push(currentPlayer);
}

var deck = [];
var suits = ['clubs', 'spades', 'hearts', 'diamonds'];
var values = ['Ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'Jack', 'Queen', 'King'];
for (let i = 0; i < suits.length; i++) {
  for (let j = 0; j < values.length; j++) {
    var currentCard = {};
    currentCard.suit = suits[i];
    currentCard.value = values[j];
    deck.push(currentCard);
  }
}

var shuffledDeck = _.shuffle(deck);
console.log(shuffledDeck);
// create four player obects, each player has name: 'name-here' and hand: 'cards-here' data.
// create array of 52 objects, each object needs a rank and suit
// we're lazy, so we're going to use JS to create the deck for us
// declare an empty array to store our object in named 'deck'
// declare an array of all four suits named 'suits'
// declare an array of all values from Ace --> King named 'values'
// iterate through suits first, and values second.
// at each element of values, push an object with the suit and value to the deck
// when finished iterating, should have deck of 52 cards.
