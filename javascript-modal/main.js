var $openModalButton = document.querySelector('.open-modal');
var $closeModalButton = document.querySelector('.close-modal');
var $modal = document.querySelector('.modal');

$openModalButton.addEventListener('click', handleOpenClick);

function handleOpenClick(event) {
  $modal.classList.toggle('display-none');
}

$closeModalButton.addEventListener('click', handleCloseClick);

function handleCloseClick(event) {
  $modal.classList.toggle('display-none');
}
