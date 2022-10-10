// create replayability feature

var $sentenceHolder = document.querySelector('.container p');
var $accuracyPerc = document.querySelector('.accuracy');
var $replayBtn = document.querySelector('.replay-btn');

function play() {
  var finalScore = 0;
  var incorrectCounter = 0;
  var currentLetter = 0;

  var pangrams = ['The quick brown fox jumps over a lazy dog.', 'Waltz, nymph, for quick jigs vex Bud', 'Sphinx of black quartz, judge my vow.', 'Pack my box with five dozen liquor jugs.', 'Glib jocks quiz nymph to vex dwarf.', 'The five boxing wizards jump quickly.', 'How vexingly quick daft zebras jump.', 'Two driven jocks help fax my big quiz.', 'A wizard\'s job is to vex chumps quickly in fog.', 'Watch "Jeopardy!", Alex Trebek\'s fun TV quiz game.'];
  var currentSentence = pangrams[Math.floor(Math.random() * pangrams.length)];
  var perfectScore = currentSentence.length;

  for (let j = 0; j < currentSentence.length; j++) {
    var node = document.createElement('span');
    node.textContent = `${currentSentence[j]}`;
    $sentenceHolder.appendChild(node);
  }

  var $sentenceNodes = document.querySelectorAll('span');
  $sentenceNodes[0].classList.toggle('underline'); // initial underline;

  document.addEventListener('keydown', handleKeyclick);

  function handleKeyclick(event) {
    if (event.key !== 'Shift') {
      if (event.key === $sentenceNodes[currentLetter].textContent) { // correct case
        $sentenceNodes[currentLetter].classList.toggle('underline');
        $sentenceNodes[currentLetter].className = ('success');
        currentLetter++;
        if ($sentenceNodes[perfectScore - 1].className === 'success') { // finished case
          $replayBtn.classList.toggle('display-none');
          finalScore = Math.floor(((perfectScore - incorrectCounter) / perfectScore) * 100);
          $accuracyPerc.textContent = `Accuracy: ${finalScore}%`;
        } else { $sentenceNodes[currentLetter].classList.toggle('underline'); } // not finished case
      } else { // incorrect case
        $sentenceNodes[currentLetter].className = 'failure underline';
        incorrectCounter++;
      }
    }
  }

}

$replayBtn.addEventListener('click', function (event) {
  $sentenceHolder.textContent = ''; // clears the previous sentence
  $accuracyPerc.textContent = 'Accuracy: ';
  $replayBtn.classList.toggle('display-none');
  play();
});

play();
