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
