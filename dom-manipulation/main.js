var counter = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', handleClick);

function handleClick(event) {
  counter++;
  $hotButton.className = 'hot-button';
  if (counter < 4) {
    $hotButton.className += ' cold';
  } else if (counter < 7) {
    $hotButton.className += ' cool';
  } else if (counter < 10) {
    $hotButton.className += ' tepid';
  } else if (counter < 13) {
    $hotButton.className += ' warm';
  } else if (counter < 16) {
    $hotButton.className += ' hot';
  } else {
    $hotButton.className += ' nuclear';
  }
  $clickCount.textContent = `Clicks: ${counter}`;
}
