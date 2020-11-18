import React from 'react'
import styled from 'styled-components'
import Slider from './Slider.jsx'

const HomeStyles = styled.div`

  .container {


  }

  .homeSpace {
    background-color: #f5f6f7;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.5;
  }

  .fonts {
    font-weight: bold;
    font-size: 16px;
    line-height: 1.5;
  }

  .input {
    /* float: right; */
    /* clear: both; */
    width: 112;px
    border-radius: 8px;
    border: 1px solid rgb(205, 209, 212);
    padding: 8px;
    font-size: 16px;
    line-height: 1.5;
    display: inline-block;
    outline: none;
    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
    font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
  }

`;

const LoanType = (props) => {

  return (
    <HomeStyles>
    <div className="container">
      <div className="homeSpace">
        <label>
          Loan Type
        </label>
      </div>
    </div>
    </HomeStyles>
  )


}

export default LoanType;