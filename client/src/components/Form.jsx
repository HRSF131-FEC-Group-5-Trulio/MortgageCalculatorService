import React from 'react'
import Slider from './Slider.jsx'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      down: 0,
      downPercent: 0,
      interest: 0,
      loanType: '30-year fixed'
    }
  }
}

export default Form;