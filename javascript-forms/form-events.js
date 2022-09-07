// function handleFocus(event) {
//   console.log('focus was fired');
//   console.log('event target name: ', event.target.name);
// }

// function handleBlur(event) {
//   console.log('blur was fired');
//   console.log('event target name: ', event.target.name);
// }

// function handleInput(event) {
//   console.log('event target name: ', event.target.name);
//   console.log('event target value: ', event.target.value);
// }

// var $formName = document.querySelector('#user-name');
// var $formEmail = document.querySelector('#user-email');
// var $formMessage = document.querySelector('#user-message');

// // $formName.addEventListener('focus', handleFocus);
// // $formName.addEventListener('blur', handleBlur);
// // $formName.addEventListener('input', handleInput);

// // $formEmail.addEventListener('focus', handleFocus);
// // $formEmail.addEventListener('blur', handleBlur);
// // $formEmail.addEventListener('input', handleInput);

// // $formMessage.addEventListener('focus', handleFocus);
// // $formMessage.addEventListener('blur', handleBlur);
// // $formMessage.addEventListener('input', handleInput);

var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  var formData = {};
  formData.name = $contactForm.elements.name.value;
  formData.email = $contactForm.elements.email.value;
  formData.message = $contactForm.elements.message.value;
  console.log('Message Data: ', formData);
  $contactForm.reset();
});
