const $joke = document.querySelector('.joke');
const $punchline = document.querySelector('.punchline');
const $cheeseImg = document.querySelector('.cheese-img');

$joke.textContent = 'What do you call cheese that isn\'t yours?';
$punchline.textContent = '...';

setTimeout(() => {
  $punchline.textContent = 'Nacho cheese!';
  $cheeseImg.classList.remove('hidden');
}, 3000);
