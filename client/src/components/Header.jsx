import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`

  .all {
    font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
    outline: none;
    color: #3b4144;
    letter-spacing: -0.1px;
    display: block;
    box-sizing: border-box;

  }

  .a1 {
    font-size: 20px;
    line-height: 1.2;
    font-weight: bold;
  }
  .a2 {
    font-size: 16px;
    line-height: 1.5;
    font-weight: bold;
  }
  .a3 {
    font-size: 16px;
    line-height: 1.5;
  }

`;

const Header = (props) => {
  return (
    <Styles>
      <div className="all a1">Affordability</div>
      <div className="all a2">Calculate your monthly mortgage payments</div>
  <div className="all a3">Your est. payment: ${props.price}/month</div>
    </Styles>

  )
}

export default Header;