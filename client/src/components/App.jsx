import React from 'react'
import Slider from './Slider.jsx'
import Practice from './Practice.jsx'
import Header from './Header.jsx'
import Form from './Form.jsx'
import styled from 'styled-components'
import axios from 'axios'
import HomePrice from './HomePrice.jsx'
import PracticeGrid from './PracticeGrid.jsx'
import Breakdown from './Breakdown.jsx'


const Container = styled.div`
    background: white;
    width: 1055px;
    margin: auto;
`;

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      settings: [],
      isLoading: true,
      price: 900000,
      rate: 2.83,
      down: 300000,
      downPercent: 15,
      loanType: '30-year fixed',
      monthly: [{monthly_payment: 1}]
    }
    this.priceChange = this.priceChange.bind(this);
    this.interestChange = this.interestChange.bind(this);
    this.downChange = this.downChange.bind(this);
    this.downPercentChange = this.downPercentChange.bind(this);
    this.loanChange = this.loanChange.bind(this);
  }

  componentDidMount () {
    axios({
      method: 'get',
      url: 'http://localhost:3000/api/mortgagedata/settings',
      responseType: 'json'
    })
    .then((response) => {
      let dataObj = response.data;
      console.log(dataObj);
      let newState = Object.assign({}, newState);
      newState.settings = dataObj;
      newState.isLoading = false;
      this.setState(newState);

    })
    .then(() => {
      let newState = Object.assign({}, this.state);
      let month = this.calculateMonthly(newState);
      newState.monthly = month;
      this.setState(newState);
    })
    .catch((error) => {console.log(error)});
  }

  priceChange (event) {
    let newPrice = event.target.value;
    let newDown = (this.state.downPercent / 100) * newPrice;
    let newState = Object.assign({}, this.state);
    newState.down = newDown;
    newState.price = newPrice;
    let month = this.calculateMonthly(newState);
    newState.monthly = month;
    this.setState(newState);

  }

  interestChange (event) {
    let newRate = event.target.value;
    let newState = Object.assign({}, this.state);
    newState.rate = newRate;
    let month = this.calculateMonthly(newState);
    newState.monthly = month;
    this.setState(newState);

  }

  downChange (event) {
    let newDown = event.target.value;
    let newDownPercent = (newDown / this.state.price) * 100;
    let newState = Object.assign({}, this.state);
    newState.down = newDown;
    newState.downPercent = newDownPercent;
    let month = this.calculateMonthly(newState);
    newState.monthly = month;
    this.setState(newState);

  }

  downPercentChange (event) {
    let newDownPercent = event.target.value;
    let newDown = (newDownPercent / 100) * this.state.price;
    let newState = Object.assign({}, this.state);
    newState.down = newDown;
    newState.downPercent = newDownPercent;
    let month = this.calculateMonthly(newState);
    newState.monthly = month;
    console
    this.setState(newState);

  }

  loanChange (event) {

    let newLoan = event;
    let newInterest = 2.83;
    for (let i = 0; i < this.state.settings.rates.length; i++) {
      if (newLoan === this.state.settings.rates[i].loan_type) {
        newInterest = this.state.settings.rates[i].interest_rate;
      }
    }
    let newState = Object.assign({}, this.state);
    newState.rate = newInterest;
    newState.loanType = newLoan;
    let month = this.calculateMonthly(newState);
    newState.monthly = month;
    this.setState(newState);

  }

  calculateMonthly (stateInput) {
    let principle = stateInput.price;
    let mortgageIns = stateInput.settings.mortgageInsurance;
    let propertyTax = stateInput.settings.propertyTax[0].property_tax * principle;
    let rates = stateInput.settings.rates;
    let interestMonthly = (stateInput.rate / 100) / 12;
    let months = 360;
    for (let i = 0; i  < rates.length; i++) {
      if (stateInput.loanType === rates[i].loan_type) {
        months = rates[i].months;
      }
    }
    let principleAndInterest = (principle - stateInput.down) * (interestMonthly / (1 - Math.pow((1 + interestMonthly), (-months))));
    let mortgageInsMonthly = 0;
    let homeIns = stateInput.settings.default[0].home_insurance;
    if (stateInput.loanType !== "VA-30-year fixed" && stateInput.loanType !== "VA-15-year fixed") {
      for (let i = 0; i < mortgageIns.length; i++) {
        if (stateInput.downPercent == mortgageIns[i].down_payment_percentage) {
          mortgageInsMonthly = (mortgageIns[i].mortgage_insurance * principle);
        }
      }
    }

    let monthlyPayment = principleAndInterest + propertyTax + homeIns + mortgageInsMonthly;

    return [{
      monthly_payment: monthlyPayment,
      principle_interest: principleAndInterest,
      property_tax: propertyTax,
      home_ins: homeIns,
      mortgage_insurance: mortgageInsMonthly
    }]
  }

  render () {

    if (this.state.isLoading) {
      return <div className="App">Loading...</div>
    }

    return (


      <Container>

        <Header monthly={this.state.monthly[0].monthly_payment}/>
        <Form
          state={this.state}
          loanChange={this.loanChange}
          price={this.state.price}
          down={this.state.down}
          rate={this.state.rate}
          downPercent={this.state.downPercent}
          settings={this.state.settings}
          loanType={this.state.loanType}
          priceChange={this.priceChange}
          interestChange={this.interestChange}
          downChange={this.downChange}
          downPercentChange={this.downPercentChange}
        />
        <Breakdown monthly={this.state.monthly}/>
        {/* {console.log(this.state.settings)} */}

      </Container>
    )
  }

}

export default App;