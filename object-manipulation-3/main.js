console.log('Lodash is loaded:', typeof _ !== 'undefined');

function createPlayers(playerNames) {
  var players = [];
  for (let i = 0; i < playerNames.length; i++) { // create players
    var currentPlayer = {};
    currentPlayer.name = playerNames[i];
    currentPlayer.hand = [];
    players.push(currentPlayer);
  }
  return players;
}

function createDeck() {
  var deck = [];
  var suits = ['clubs', 'spades', 'hearts', 'diamonds'];
  var values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  for (let i = 0; i < suits.length; i++) { // create deck
    for (let j = 0; j < values.length; j++) {
      var currentCard = {};
      currentCard.suit = suits[i];
      currentCard.value = values[j];
      deck.push(currentCard);
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  return _.shuffle(deck);
}

function dealCards(players, cardsToDeal, deck) {
  for (let i = 0; i < players.length; i++) {
    var cards = [];
    for (let i = 0; i < cardsToDeal; i++) {
      cards.push(deck.shift());
    }
    players[i].hand = cards;
  }
  console.log(players);
}

function replaceFaceCards(players) {
  var faceCards = {
    Ace: 11,
    Jack: 10,
    Queen: 10,
    King: 10
  };
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].hand.length; j++) {
      for (const key in faceCards) {
        if (players[i].hand[j].value === key) {
          players[i].hand[j].value = faceCards[key];
        }
      }
    }
  }
}

function scoreRound(players) {
  var currentWinner = '';
  var currentHighScore = 0;
  for (let i = 0; i < players.length; i++) {
    var currentScore = 0;
    for (let j = 0; j < players[i].hand.length; j++) {
      currentScore += players[i].hand[j].value;
    }
    console.log('Player Name: ', players[i].name);
    console.log('  Player Score: ', currentScore);
    if (currentScore > currentHighScore) {
      currentWinner = players[i].name;
      currentHighScore = currentScore;
    }
  }
  return currentWinner;
}

var playerNames = ['Harry', 'Ron', 'Hermoine', 'Dumblydore'];

function play(playerNames) {
  var players = createPlayers(playerNames);
  var deck = createDeck();
  var shuffledDeck = shuffleDeck(deck);
  dealCards(players, 2, shuffledDeck);
  replaceFaceCards(players);
  var winner = scoreRound(players);
  console.log('The winner is', winner, '!');
}

play(playerNames);
// create four player obects, each player has name: 'name-here' and hand: 'cards-here' data.
// create array of 52 objects, each object needs a rank and suit
// we're lazy, so we're going to use JS to create the deck for us
// declare an empty array to store our object in named 'deck'
// declare an array of all four suits named 'suits'
// declare an array of all values from Ace --> King named 'values'
// iterate through suits first, and values second.
// at each element of values, push an object with the suit and value to the deck
// when finished iterating, should have deck of 52 cards.
