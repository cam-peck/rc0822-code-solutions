import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';
import images from './data';

const root = ReactDOM.createRoot(document.querySelector('#root'));

root.render(< Carousel imageArray={images}/>);
