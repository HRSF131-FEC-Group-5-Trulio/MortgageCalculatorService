import React from 'react';
import reactDOM from 'react-dom';
// import './styles/style.css'
import './styles/style.scss'

// const template = React.createElement('ht', null, 'Hello world');

// const template = <h1>Hello World</h1>

const App = () => {
  return <h1>Hello from Daly City!</h1>
}

reactDOM.render(<App/>, document.getElementById('app'));