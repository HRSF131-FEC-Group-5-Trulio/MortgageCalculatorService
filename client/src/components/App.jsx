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
    // this.id = props.id; // _Thomas
    this.state = {
      settings: [],
      isLoading: true,
      price: 900000,
      rate: 2.83,
      down: 30000,
      downPercent: 20,
      loanType: '30-year fixed',
      monthly: [{monthly_payment: 1}],
      selected: null,
    }
    this.priceChange = this.priceChange.bind(this);
    this.interestChange = this.interestChange.bind(this);
    this.downChange = this.downChange.bind(this);
    this.downPercentChange = this.downPercentChange.bind(this);
    this.loanChange = this.loanChange.bind(this);
    this.updateSelected = this.updateSelected.bind(this);
  }

  componentDidMount () {
    axios({
      method: 'get',
      url: `http://localhost:3004/api/MortgageCalculator/settings`,
      // url: 'http://18.191.145.212:3004/api/MortgageCalculator/settings',
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
      // let listing_id = Math.floor(Math.random() * 100) + 1;
      // console.log(this.props.id);
      axios({
        method: 'get',
        url: `http://localhost:3004/api/MortgageCalculator/${this.props.id}`,
        // url: `http://18.191.145.212:3004/api/MortgageCalculator/${this.props.id}`, // refactor to /api/MortgageCalculator/:id/<whatever>
        responseType: 'json'
      })
      .then((response) => {
        let price = {target: {}};
        price.target.value = response.data[0].price;
        this.priceChange(price);
      })
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
    let newPrice;
    if (event.target !== undefined) {
      newPrice = event.target.value
    } else {
      newPrice = event;
    }
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
    newRate = newRate.split('%')[0]
    newRate = Number(newRate);

    let newState = Object.assign({}, this.state);
    newState.rate = newRate;
    let month = this.calculateMonthly(newState);
    newState.monthly = month;
    this.setState(newState);

  }

  downChange (event) {
    // let newDown = event.target.value;
    // if (typeof newDown === 'string') {
    //   newDown = Number(newDown.slice(1))
    // }
    let newDown;
    if (event.target !== undefined) {
      newDown = event.target.value
    } else {
      newDown = event;
    }
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
    newDownPercent = newDownPercent.split('%')[0]
    newDownPercent = Number(newDownPercent);
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
    if (stateInput.loanType !== "VA-30-year-fixed" && stateInput.loanType !== "VA-15-year-fixed") {
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

  updateSelected (selected) {
    let newState = Object.assign({}, this.state);
    newState.selected = selected;
    this.setState(newState);
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
          selected={this.state.selected}
          updateSelected={this.updateSelected}
        />
        {/* {console.log(this.state.selected)} */}
        <Breakdown monthly={this.state.monthly}/>
        {/* {console.log(this.state.settings)} */}

      </Container>
    )
  }

}

export default App;