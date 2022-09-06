var $button = document.querySelector('.dot');
var $body = document.querySelector('body');

$button.addEventListener('click', changeColor);

function changeColor(event) {
  $button.classList.toggle('light-btn');
  $button.classList.toggle('dark-btn');
  $body.classList.toggle('tan');
  $body.classList.toggle('dark-gray');
}
