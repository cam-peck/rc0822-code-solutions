var $rightArrow = document.querySelector('.fa-arrow-right');
var $leftArrow = document.querySelector('.fa-arrow-left');
var $imageCard = document.querySelector('.img-card');
var $dots = document.querySelectorAll('.dot');
var $dotBox = document.querySelector('.dot-box');

var images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
var galleryIntvId = null;

$rightArrow.addEventListener('click', function (event) {
  clearInterval(galleryIntvId);
  galleryNext(getCurrentIndex());
  autoGallery();
});

$leftArrow.addEventListener('click', function (event) {
  clearInterval(galleryIntvId);
  galleryPrevious(getCurrentIndex());
  autoGallery();
});

$dotBox.addEventListener('click', function (event) {
  clearInterval(galleryIntvId);
  var jumpIndex = null;
  if (!event.target.className.includes('fa-solid') && event.target.tagName === 'I') {
    for (let i = 0; i < $dots.length; i++) {
      if (event.target === $dots[i]) {
        jumpIndex = i;
      }
    }
    galleryJump(jumpIndex);
    autoGallery();
  }
});

function autoGallery() {
  galleryIntvId = setInterval(function () {
    galleryNext(getCurrentIndex());
  }, 3000);
}

function getCurrentIndex() {
  var currentImage = $imageCard.getAttribute('src');
  var currentImageIndex = null;
  for (let i = 0; i < images.length; i++) { // get the index currently at
    if (currentImage === images[i]) {
      currentImageIndex = i;
      return currentImageIndex;
    }
  }
}

function galleryNext(currentIndex) {
  var nextIndex = null;
  if (currentIndex === images.length - 1) { // catch case where gallery needs to restart
    nextIndex = 0;
  } else { nextIndex = currentIndex + 1; }
  $imageCard.setAttribute('src', images[nextIndex]); // move to the the next image in the images array
  for (let i = 0; i < $dots.length; i++) { // move to next dot in dots node array
    if (i === nextIndex) {
      $dots[i].className = 'dot fa-solid fa-circle';
    } else {
      $dots[i].className = 'dot fa-regular fa-circle';
    }
  }
}

function galleryPrevious(currentIndex) {
  var previousIndex = null;
  if (currentIndex === 0) { // catch case where gallery needs to back-up to end
    previousIndex = images.length - 1;
  } else { previousIndex = currentIndex - 1; }
  $imageCard.setAttribute('src', images[previousIndex]); // move to the the previous image in the images array
  for (let i = 0; i < $dots.length; i++) { // move to the previous dot in dots node array
    if (i === previousIndex) {
      $dots[i].className = 'dot fa-solid fa-circle';
    } else {
      $dots[i].className = 'dot fa-regular fa-circle';
    }
  }
}

function galleryJump(targetIndex) {
  $imageCard.setAttribute('src', images[targetIndex]);
  for (let i = 0; i < $dots.length; i++) { // move to the previous dot in dots node array
    if (i === targetIndex) {
      $dots[i].className = 'dot fa-solid fa-circle';
    } else {
      $dots[i].className = 'dot fa-regular fa-circle';
    }
  }
}

autoGallery();
