import React from 'react';
import ReactDOM from 'react-dom/client';

const helloReact = React.createElement(
  'h1',
  [null],
  ['Hello, React!']
);

const $container = document.querySelector('#root');

const root = ReactDOM.createRoot($container);
root.render(helloReact);

console.log('Value of helloReact: ', helloReact);
console.log('Type of helloReact: ', typeof helloReact);
