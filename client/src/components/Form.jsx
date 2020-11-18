import React from 'react'
import Slider from './Slider.jsx'
import HomePrice from './HomePrice.jsx'
import DownPayment from './DownPayment.jsx'
import InterestRate from './InterestRate.jsx'
import LoanType from './LoanType.jsx'
import LoanSelect from './LoanSelect.jsx'
import styled from 'styled-components'

const ContainerStyles = styled.div`
  outline: none;
  box-sizing: border-box;
  color: color: rgb(59, 65, 68);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.1px;
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;

  .container1 {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    background-color: rgb(245, 246, 247);
    padding: 16px;
  }
  .container2 {
    display: flex;
    margin-left: -8px;
    margin-right: -8px;
    margin-top: -16px;
    flex-wrap: wrap;
  }
  .container3 {
    width: 33%
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    display: block;
    border-style: solid;
    border-color: transparent;
    border-width: 16px 8px 0px;
  }
  .container4 {
    box-sizing: border-box;
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 2px;
  }
  .container5 {
    flex: 1 1 0%;
    width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 16px;
    min-height: 48px;
  }

  .container6 {

  }

  .inputSlider1 {
  }

  .inputSlider2 {
  }

  .inputSlider3 {
  }

  .inputSelect {
  }


`;



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

  componentDidMount() {
    // console.log(this.props);
    // let interest = 0;
    // for (let i = 0; i < props.settings)
    // this.setState({
    //   price: props.price,
    //   down: props.price / props.settings.default[0].down_payment_percentage,
    //   downPercent: props.settings.default[0].down_payment_percentage,
    //   interest:
    // })
  }

  render () {
    return (
      <ContainerStyles>
      <div className="container1">
      <div className="container2">
        <div className="container3">
          <div className="container4">
            <div className="container5">
              <HomePrice/>
            </div>
          </div>
          <Slider/>
        </div>
        <div className="container3">
          <div className="container4">
            <div className="container5">
              <DownPayment/>
            </div>
          </div>
          <Slider/>
        </div>
        <div className="container3">
          <div className="container4">
            <div className="container5">
              <InterestRate/>
            </div>
          </div>
          <Slider/>
        </div>
        <div className="container3">
          <div className="container4">
            <div className="container5">
              <LoanType/>
            </div>
          </div>
          <LoanSelect/>
        </div>
      </div>
      </div>
      </ContainerStyles>
    )
  }


}

export default Form;

{/* <ContainerStyles>
<div className="surface">
  <div className="crust">
  <div className="beach">
  <div className="hill">
  <div className="hood">
    <div className="spot">
    Home Price
    <input type="number" className="input"/>
    </div>
    <div className="slider">
    <Slider/>
    </div>
  </div>
  <div className="hood">
  <div className="spot">
    Down Payment
    <input type="number" className="input"/>
    </div>
    <div className="slider">
    <Slider/>
    </div>
  </div>
  <div className="hood">
  <div className="spot">
    Interest Rate
    <input type="number" className="input"/>
    </div>
    <div className="slider">
    <Slider/>
    </div>
  </div>
  <div className="loan">
    <div>
    Loan Type
    </div>
    <select className="select">
      <option>30-year fixed</option>
      <option>20-year fixed</option>
      <option>15-year fixed</option>
      <option>10-year fixed</option>
      <option>FHA 30-year fixed</option>
      <option>FHA 15-year fixed</option>
      <option>VA 30-year fixed</option>
      <option>VA 15-year fixed</option>
    </select>
  </div>
  </div>
  </div>
  </div>
</div>
</ContainerStyles> */}

// .surface {
//   width: 100%;
//   border-radius: 8px;
//   overflow: hidden;
//   background-color: rgb(245, 246, 247);
//   padding: 16px;
// }

// .crust {
//   display: flex;
//   margin-left: -8px;
//   margin-right: -8px;
//   margin-top: -16px;
//   flex-wrap: wrap;
// }

// .beach {
//   background: #f5f6f7;
//   font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
//   outline: none;
//   color: #3b4144;
//   letter-spacing: -0.1px;
//   border-style: solid;
//   border-color: transparent;
//   border-width: 16px 8px 0px;
//   -webkit-box-flex: 0;
//   flex: 0 0 auto;
//   display: block;
// }

// .hill {
//   box-sizing: border-box;
//   flex: 1 1 0%;
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   flex-direction: column;
//   padding-bottom: 2px;
// }

// .valley {
//   flex: 1 1 0%;
//   width: 100%;
//   display: flex;
//   -webkit-box-pack: justify;
//   justify-content: space-between;
//   -webkit-box-align: center;
//   align-items: center;
//   margin-bottom: 16px;
//   min-height: 48px;
// }

// .hood {
//   box-sizing: border-box;
//   flex: 1 1 0%;
//   flex-grow: 1;
//   flex-shrink: 1;
//   flex-basis: 0%;
//   display: flex;
//   -webkit-box-align: center;
//   align-items: center;
//   flex-direction: column;
//   padding-bottom: 2px;
// }

// .spot {
//   flex: 1 1 0%;
//   flex-grow: 1;
//   flex-shrink: 1;
//   flex-basis: 0%;
//   width: 100%;
//   display: flex;
//   -webkit-box-pack: justify;
//   justify-content: space-between;
//   -webkit-box-align: center;
//   align-items: center;
//   margin-bottom: 16px;
//   min-height: 48px;
// }

// .input {
//   border-radius: 8px;
//   border: 1px solid rgb(205, 209, 212);
//   padding: 8px;
//   font-size: 16px;
//   line-height: 1.5;
//   width: 100%;
//   display: inline-block;
//   outline: none;
//   transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
// }

// .slider {
//   width: 100%;
//   height: 40px;
//   -webkit-box-align: center;
//   align-items: center;
// }

// .loan {\
//   float: left;
//   display: block;
//   margin-top: 5px;
// }

// .select {
//   -webkit-writing-mode: horizontal-tb !important;
//   text-rendering: auto;
//   color: -internal-light-dark(black, white);
//   letter-spacing: normal;
//   word-spacing: normal;
//   text-transform: none;
//   text-indent: 0px;
//   text-shadow: none;
//   display: inline-block;
//   text-align: start;
//   appearance: menulist;
//   box-sizing: border-box;
//   align-items: center;
//   white-space: pre;
//   -webkit-rtl-ordering: logical;
//   background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
//   cursor: default;
//   margin: 0em;
//   font: 400 13.3333px Arial;
//   border-radius: 0px;
//   border-width: 1px;
//   border-style: solid;
//   border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
//   border-image: initial;
// }