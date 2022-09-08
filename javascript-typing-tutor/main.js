// Set-up HTML document with sentence

var $sentenceHolder = document.querySelector('.container p');

var pangrams = ['The quick brown fox jumps over a lazy dog.', 'Waltz, nymph, for quick jigs vex Bud', 'Sphinx of black quartz, judge my vow.', 'Pack my box with five dozen liquor jugs.', 'Glib jocks quiz nymph to vex dwarf.', 'The five boxing wizards jump quickly.', 'How vexingly quick daft zebras jump.', 'Two driven jocks help fax my big quiz.', 'A wizard\'s job is to vex chumps quickly in fog.', 'Watch "Jeopardy!", Alex Trebek\'s fun TV quiz game.'];
var currentSentence = pangrams[Math.floor(Math.random() * pangrams.length)];

for (let i = 0; i < currentSentence.length; i++) {
  var node = document.createElement('span');
  node.textContent = `${currentSentence[i]}`;
  $sentenceHolder.appendChild(node);
}

var $sentenceNodes = document.querySelectorAll('span');
var $accuracyPerc = document.querySelector('.accuracy');
var $replayBtn = document.querySelector('.replay-btn');
var incorrectCounter = 0;
var perfectScore = $sentenceNodes.length - 1;

$sentenceNodes[0].classList.toggle('underline'); // initial underline
var i = 0;

$replayBtn.addEventListener('click', function (event) {
  $sentenceHolder.textContent = ''; // clears the previous sentence

  playRound();
});

function playRound() {
  document.addEventListener('keydown', function (event) {
    if (i >= perfectScore) {
      $replayBtn.classList.toggle('display-none');
      var finalScore = Math.floor(((perfectScore - incorrectCounter) / perfectScore) * 100);
      $accuracyPerc.textContent = `Accuracy: ${finalScore}%`;
    }
    if (event.key === $sentenceNodes[i].textContent) {
      $sentenceNodes[i].classList.toggle('underline');
      $sentenceNodes[i].className = ('success');
      i++;
      $sentenceNodes[i].classList.toggle('underline');
    } else {
      $sentenceNodes[i].className = 'failure underline';
      incorrectCounter++;
    }
  });
}

playRound();
