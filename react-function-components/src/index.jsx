import React from 'react';
import ReactDOM from 'react-dom';

function brrrr() {
  // eslint-disable-next-line no-console
  console.log('Click button go brrrrrr');
}

function CustomButton() {
  return <button onClick={brrrr}>Click Me!</button>;
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
const element = <CustomButton />;
root.render(element);
