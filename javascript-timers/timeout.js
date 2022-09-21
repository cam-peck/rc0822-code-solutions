var $heading = document.querySelector('.message');

function sayHello() {
  setTimeout(changeText, 2000);
}

function changeText() {
  $heading.textContent = 'Hello There';
}

sayHello();
