import React from 'react'
import styled from 'styled-components'

const HeaderStyles = styled.div`

    font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
    outline: none;
    color: #3b4144;
    letter-spacing: -0.1px;
    display: block;
    box-sizing: border-box;

  `;

const H1 = styled.p`
    font-size: 20px;
    line-height: 1.2;
    font-weight: bold;
`;
const H2 = styled.div`
    font-size: 16px;
    line-height: 1.5;
    font-weight: bold;
`;
const H3 = styled.div`
    font-size: 16px;
    line-height: 1.5;
`;

const Header = (props) => {
  let monthly = Math.floor(props.monthly);
  let convertUSD = monthly.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  let removeDecimals = convertUSD.slice(0, convertUSD.length - 3);
  return (
    <HeaderStyles>
      <H1>Affordability</H1>
      <H2>Calculate your monthly mortgage payments</H2>
  <H3>Your est. payment: {removeDecimals}/month</H3>
    </HeaderStyles>

  )
}

export default Header;