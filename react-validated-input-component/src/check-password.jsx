export default function checkPassword(password) {
  const requiredLength = 8;
  const testSpecialChars = /[!,@,#,$,%,^,&,*,(,)]/;
  const testUppercase = /[A-Z]/;
  const testNumber = /[\d]/;
  let errorMessage;
  let validateSymbol;
  if (!password) {
    errorMessage = 'A password is required.';
    validateSymbol = 'x';
  } else if (password.length < requiredLength) {
    errorMessage = `Password must be at least ${requiredLength} characters.`;
    validateSymbol = 'x';
  } else if (!testSpecialChars.test(password) || !testUppercase.test(password) || !testNumber.test(password)) {
    errorMessage = 'Password must contain a digit, capital letter, and special character.';
    validateSymbol = 'x';
  } else {
    errorMessage = '';
    validateSymbol = 'check';
  }
  return {
    errorMessage,
    validateSymbol
  };
}
