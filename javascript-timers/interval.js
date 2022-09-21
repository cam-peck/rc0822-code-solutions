var $heading = document.querySelector('.countdown-display');
var nIntervId = 0;

function changeNumber() {
  if (!nIntervId) {
    nIntervId = setInterval(countdown, 1000);
  }
}

function countdown() {
  var currentNum = parseInt($heading.textContent);
  if (currentNum > 1) {
    $heading.textContent = currentNum - 1;
  } else { liftoff(); }
}

function liftoff() {
  $heading.textContent = 'Houston, we have achieved liftoff.';
  clearInterval(nIntervId);
}

changeNumber();
