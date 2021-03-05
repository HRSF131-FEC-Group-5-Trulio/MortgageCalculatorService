import React from 'react';
import reactDOM from 'react-dom';
// import './styles/style.css'
// import './styles/style.scss'
import Slider from './components/Slider.jsx'
import App from './components/App.jsx'

// to get the :id from the url _Thomas
// let id = Number(window.location.pathname.slice(1, -1));

// console.log(id);

// reactDOM.render(<App id={id}/>, document.getElementById('app_MortgageCalculator')); // make id a prop to <App />

reactDOM.render(<App/>, document.getElementById('app_MortgageCalculator')); // make id a prop to <App />